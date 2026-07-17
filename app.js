// ============================================================
// Receptjeim — receptgyűjtő és étrendtervező
// Adatok: window.RECIPES (recipes.js) + localStorage (saját
// receptek, módosítások, heti étrend, bevásárlólista-pipák)
// ============================================================

const NAPOK = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
const ETKEZESEK = ["reggeli", "tízórai", "ebéd", "uzsonna", "vacsora"];
const ETKEZES_IKON = { "reggeli": "🌅", "tízórai": "🥪", "ebéd": "☀️", "uzsonna": "🍎", "vacsora": "🌙" };

// ---------- localStorage segédek ----------
const store = {
  get(kulcs, alap) {
    try {
      const ny = localStorage.getItem("receptapp." + kulcs);
      return ny ? JSON.parse(ny) : alap;
    } catch { return alap; }
  },
  // minden felhasználói módosítás automatikusan szinkron-feltöltést indít;
  // a távoli állapot alkalmazásakor szinkronizal=false, hogy ne legyen visszacsatolás
  set(kulcs, ertek, szinkronizal = true) {
    localStorage.setItem("receptapp." + kulcs, JSON.stringify(ertek));
    if (szinkronizal) valtozott();
  }
};

let sajatReceptek = store.get("custom", []);
let feluliras = store.get("overrides", {});   // fájlbeli recept szerkesztett változata id szerint
let rejtettek = store.get("hidden", []);      // "törölt" fájlbeli receptek id-jai
let etrend = store.get("plan", {});           // { hetKulcs: { napIndex: { étkezés: receptId } } }
let pipak = store.get("checked", {});         // { hetKulcs: { tetelKulcs: true } }

let hetOffset = 0;            // 0 = aktuális hét
let nyitottReceptId = null;   // részletnézetben lévő recept
let valasztoCel = null;       // { hetKulcs, nap, etkezes } — melyik cellába választunk

// ---------- általános segédek ----------
const $ = (sel) => document.querySelector(sel);

function esc(sz) {
  const d = document.createElement("div");
  d.textContent = sz == null ? "" : String(sz);
  return d.innerHTML;
}

function osszesRecept() {
  const fajlbol = (window.RECIPES || [])
    .filter((r) => !rejtettek.includes(r.id))
    .map((r) => feluliras[r.id] || r);
  return fajlbol.concat(sajatReceptek);
}

function receptById(id) {
  return osszesRecept().find((r) => r.id === id) || null;
}

function mennyisegSzoveg(h) {
  if (h.mennyiseg == null) return h.egyseg || "";
  return `${h.mennyiseg} ${h.egyseg || ""}`.trim();
}

// ---------- hét kezelés ----------
function hetKezdete(offset) {
  const ma = new Date();
  const nap = (ma.getDay() + 6) % 7; // hétfő = 0
  const hetfo = new Date(ma);
  hetfo.setHours(0, 0, 0, 0);
  hetfo.setDate(ma.getDate() - nap + offset * 7);
  return hetfo;
}

function datumKulcs(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function hetCimke(offset) {
  const kezdo = hetKezdete(offset);
  const veg = new Date(kezdo);
  veg.setDate(kezdo.getDate() + 6);
  const f = (d) => `${d.getMonth() + 1< 10 ? "0" : ""}${d.getMonth() + 1}.${d.getDate() < 10 ? "0" : ""}${d.getDate()}.`;
  let jelzo = "";
  if (offset === 0) jelzo = " (ez a hét)";
  else if (offset === 1) jelzo = " (jövő hét)";
  else if (offset === -1) jelzo = " (múlt hét)";
  return `${kezdo.getFullYear()}. ${f(kezdo)} – ${f(veg)}${jelzo}`;
}

// ============================================================
// NÉZETVÁLTÁS
// ============================================================
document.querySelectorAll(".tab").forEach((gomb) => {
  gomb.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((g) => g.classList.remove("active"));
    gomb.classList.add("active");
    document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
    $("#view-" + gomb.dataset.view).classList.remove("hidden");
    if (gomb.dataset.view === "etrend") rajzolEtrend();
    if (gomb.dataset.view === "bevasarlas") rajzolBevasarlas();
  });
});

// modal bezáró gombok
document.querySelectorAll("[data-close]").forEach((g) => {
  g.addEventListener("click", () => $("#" + g.dataset.close).close());
});

// ============================================================
// RECEPTEK NÉZET
// ============================================================
function rajzolReceptek() {
  const kereses = $("#kereso").value.trim().toLowerCase();
  const kategoria = $("#kategoria-szuro").value;
  const lista = $("#recept-lista");

  const talalatok = osszesRecept().filter((r) => {
    if (kategoria && r.kategoria !== kategoria) return false;
    if (!kereses) return true;
    const szoveg = (r.nev + " " + (r.hozzavalok || []).map((h) => h.nev).join(" ")).toLowerCase();
    return szoveg.includes(kereses);
  });

  lista.innerHTML = talalatok.map((r) => `
    <div class="kartya" data-id="${esc(r.id)}">
      <span class="cimke">${esc(r.kategoria)}</span>
      <h3>${esc(r.nev)}</h3>
      <div class="meta">
        <span>⏱️ ${esc(r.ido_perc)} perc</span>
        ${r.tapertek ? `<span>🔥 ${esc(r.tapertek.kcal)} kcal</span>` : ""}
      </div>
      ${r.forras ? `<div class="tiktok-jel">🎬 TikTok videóból</div>` : ""}
    </div>
  `).join("");

  $("#ures-uzenet").classList.toggle("hidden", talalatok.length > 0);

  lista.querySelectorAll(".kartya").forEach((k) => {
    k.addEventListener("click", () => nyitReszletek(k.dataset.id));
  });
}

$("#kereso").addEventListener("input", rajzolReceptek);
$("#kategoria-szuro").addEventListener("change", rajzolReceptek);

// ---------- videó-link beillesztés és várólista ----------
// A működési módot a config.js dönti el:
//  - személyes mód: a linkek a Google Apps Script hídra mennek (Claude dolgozza fel)
//  - publikus mód: a böngésző dolgozza fel őket (kinyero.js, saját Gemini-kulccsal)
const KONFIG = window.KONFIG || {};
const KULSO_VAROLISTA_URL = KONFIG.hidUrl || "";
const PUBLIKUS = !!KONFIG.publikusMod;

function toast(uzenet) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = uzenet;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

let helyiVarolista = [];  // a gépen futó szerver várólistája
let kulsoVarolista = [];  // a Google-hídon lévő várólista (weboldalról küldött linkek, képek)

function rajzolVarolista() {
  const elemek = helyiVarolista.map((t) => ({ ...t, kulso: false }))
    .concat(kulsoVarolista.map((t) => ({ ...t, kulso: true })));

  $("#varolista").innerHTML = elemek.map((t) => `
    <div class="varo-tetel">
      <span>⏳ Feldolgozásra vár:</span>
      <span class="url">${t.url.startsWith("kep:") ? "📷 Fotóból recept" : esc(t.url)}</span>
      ${t.kulso ? "" : `<button class="megsem" data-url="${esc(t.url)}" title="Mégse">✕</button>`}
    </div>`).join("");

  document.querySelectorAll(".varo-tetel .megsem").forEach((g) => {
    g.addEventListener("click", async () => {
      const valasz = await fetch("api/link-torles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: g.dataset.url })
      });
      helyiVarolista = await valasz.json();
      rajzolVarolista();
    });
  });
}

async function linkBekuldes() {
  const mezo = $("#link-input");
  const url = mezo.value.trim();
  if (!url) return;
  if (!/^https?:\/\//i.test(url)) { toast("⚠️ Ez nem tűnik linknek"); return; }
  if (PUBLIKUS) {
    mezo.value = "";
    publikusLinkFeldolgozas(url);
    return;
  }
  try {
    if (vanLinkApi) {
      const valasz = await fetch("api/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      if (!valasz.ok) throw new Error();
      helyiVarolista = await valasz.json();
    } else {
      const valasz = await fetch(KULSO_VAROLISTA_URL + "?uj=" + encodeURIComponent(url));
      if (!valasz.ok) throw new Error();
      kulsoVarolista = await valasz.json();
    }
    rajzolVarolista();
    mezo.value = "";
    toast("🎬 Link a várólistán — hamarosan recept lesz belőle!");
  } catch {
    toast("⚠️ Nem sikerült elmenteni a linket");
  }
}

$("#link-gomb").addEventListener("click", linkBekuldes);
$("#link-input").addEventListener("keydown", (e) => { if (e.key === "Enter") linkBekuldes(); });

// ---------- recept fotóból: kép feltöltése a Google hídra ----------
function kepBase64(fajl) {
  // méretcsökkentés, hogy a feltöltés gyors legyen (max 1600 px, JPEG)
  return new Promise((megold, elutasit) => {
    const kep = new Image();
    kep.onload = () => {
      const arany = Math.min(1, 1600 / Math.max(kep.width, kep.height));
      const vaszon = document.createElement("canvas");
      vaszon.width = Math.round(kep.width * arany);
      vaszon.height = Math.round(kep.height * arany);
      vaszon.getContext("2d").drawImage(kep, 0, 0, vaszon.width, vaszon.height);
      URL.revokeObjectURL(kep.src);
      megold(vaszon.toDataURL("image/jpeg", 0.82).split(",")[1]);
    };
    kep.onerror = elutasit;
    kep.src = URL.createObjectURL(fajl);
  });
}

$("#kep-input").addEventListener("change", async (e) => {
  const fajl = e.target.files[0];
  e.target.value = "";
  if (!fajl) return;
  if (PUBLIKUS) { publikusKepFeldolgozas(fajl); return; }
  toast("📷 Kép feltöltése…");
  try {
    const adat = await kepBase64(fajl);
    const valasz = await fetch(KULSO_VAROLISTA_URL, {
      method: "POST",
      body: JSON.stringify({ kepFeltoltes: true, adat, mime: "image/jpeg" })
    });
    const lista = await valasz.json();
    if (!Array.isArray(lista)) throw new Error();
    kulsoVarolista = lista;
    rajzolVarolista();
    toast("📷 Kép a várólistán — hamarosan recept lesz belőle!");
  } catch {
    toast("⚠️ Nem sikerült feltölteni a képet");
  }
});

// ---------- eszközök közti szinkron (étrend, pipák, saját receptek) ----------
// Az állapot a Google hídon tárolódik; a frissebb módosítás nyer.
let allapotModositva = store.get("modositva", 0);
let feltoltesIdozito = null;

function valtozott() {
  allapotModositva = Date.now();
  store.set("modositva", allapotModositva, false);
  if (!KULSO_VAROLISTA_URL) return;
  clearTimeout(feltoltesIdozito);
  feltoltesIdozito = setTimeout(feltoltAllapot, 1500);
}

async function feltoltAllapot() {
  try {
    await fetch(KULSO_VAROLISTA_URL, {
      method: "POST",
      body: JSON.stringify({ sajatReceptek, feluliras, rejtettek, etrend, pipak, modositva: allapotModositva })
    });
  } catch { /* offline — a következő módosításnál újra próbáljuk */ }
}

function alkalmazTavoliAllapot(a) {
  sajatReceptek = a.sajatReceptek || [];
  feluliras = a.feluliras || {};
  rejtettek = a.rejtettek || [];
  etrend = a.etrend || {};
  pipak = a.pipak || {};
  allapotModositva = a.modositva;
  store.set("custom", sajatReceptek, false);
  store.set("overrides", feluliras, false);
  store.set("hidden", rejtettek, false);
  store.set("plan", etrend, false);
  store.set("checked", pipak, false);
  store.set("modositva", allapotModositva, false);
  rajzolReceptek();
  if (!$("#view-etrend").classList.contains("hidden")) rajzolEtrend();
  if (!$("#view-bevasarlas").classList.contains("hidden")) rajzolBevasarlas();
  toast("🔄 Frissítve egy másik eszközödről");
}

async function szinkronEllenorzes() {
  if (!KULSO_VAROLISTA_URL) return;
  try {
    const valasz = await fetch(KULSO_VAROLISTA_URL + "?allapot=get");
    const a = await valasz.json();
    if (a && a.modositva && a.modositva > allapotModositva) alkalmazTavoliAllapot(a);
    else if (allapotModositva && (!a || !a.modositva || a.modositva < allapotModositva)) feltoltAllapot();
  } catch { /* átmeneti hiba — kihagyjuk */ }
}

// ---------- app-önfrissítő ----------
// A kezdőképernyős app-nézetben nincs lehúzva-frissítés, és a telefon
// erősen gyorsítótáraz — ezért az app maga figyeli a verzio.txt-t,
// és új verziónál frissítő sávot mutat.
let appVerzioAlap = null;

async function appVerzioEllenorzes() {
  try {
    const valasz = await fetch("verzio.txt?t=" + Date.now());
    if (!valasz.ok) return;
    const verzio = (await valasz.text()).trim();
    if (appVerzioAlap === null) { appVerzioAlap = verzio; return; }
    if (verzio !== appVerzioAlap) mutatFrissitoSav();
  } catch { /* offline — kihagyjuk */ }
}

function mutatFrissitoSav() {
  if (document.getElementById("frissito-sav")) return;
  const sav = document.createElement("div");
  sav.id = "frissito-sav";
  sav.className = "frissito-sav";
  sav.innerHTML = `<span>🔄 Új verzió érhető el!</span><button id="frissito-gomb" class="primary">Frissítés</button>`;
  document.body.appendChild(sav);
  document.getElementById("frissito-gomb").addEventListener("click", () => location.reload());
}

// ---------- frissítés-figyelő: új recept és várólista ----------
// GitHub Pages-en (vagy bármilyen sima statikus tárhelyen) nincs
// link-API — ilyenkor a beillesztő sávot elrejtjük, a többi működik.
let utolsoReceptekSzoveg = null;
let vanLinkApi = true;
let tikk = 0;

async function frissitesFigyelo() {
  tikk++;
  if (vanLinkApi) {
    try {
      const valasz = await fetch("api/linkek");
      if (!valasz.ok) throw new Error();
      helyiVarolista = await valasz.json();
      rajzolVarolista();
    } catch {
      vanLinkApi = false;
      helyiVarolista = [];
      rajzolVarolista();
      // beillesztő sáv csak akkor tűnik el, ha se híd, se publikus feldolgozó nincs
      if (!KULSO_VAROLISTA_URL && !PUBLIKUS) document.querySelector(".link-sav").classList.add("hidden");
    }
  }
  if (KULSO_VAROLISTA_URL && tikk % 4 === 1) {
    // a Google-hídon lévő várólistát ritkábban kérdezzük (kb. félpercenként)
    try {
      const valasz = await fetch(KULSO_VAROLISTA_URL);
      if (valasz.ok) {
        const lista = await valasz.json();
        if (Array.isArray(lista)) { kulsoVarolista = lista; rajzolVarolista(); }
      }
    } catch { /* átmeneti hiba — kihagyjuk */ }
  }
  if (KULSO_VAROLISTA_URL && tikk % 4 === 2) szinkronEllenorzes();
  if (tikk % 4 === 3) appVerzioEllenorzes();
  try {
    const szoveg = await (await fetch("recipes.js?t=" + Date.now())).text();
    if (utolsoReceptekSzoveg !== null && szoveg !== utolsoReceptekSzoveg) {
      new Function(szoveg)(); // window.RECIPES frissítése
      rajzolReceptek();
      toast("🎉 Új recept érkezett a gyűjteménybe!");
    }
    utolsoReceptekSzoveg = szoveg;
  } catch { /* offline vagy nem elérhető — csendben kihagyjuk */ }
}

frissitesFigyelo();
setInterval(frissitesFigyelo, 8000);

// ---------- részletnézet ----------
let modalAdag = 1; // az éppen nézett recept választott adagszáma

function rajzolModalHozzavalok(r) {
  const szorzo = modalAdag / (r.adag || 1);
  $("#adag-szam").textContent = modalAdag + " adag";
  $("#modal-hozzavalok").innerHTML = (r.hozzavalok || []).map((h) => {
    const m = h.mennyiseg == null ? h : { ...h, mennyiseg: Math.round(h.mennyiseg * szorzo * 100) / 100 };
    return `<li><strong>${esc(mennyisegSzoveg(m))}</strong> ${esc(m.nev)}</li>`;
  }).join("");

  // a tápérték is a kiválasztott adagszámot követi
  const t = r.tapertek;
  $("#modal-tapertek").innerHTML = t ? `
    <span class="tap-cimke">🔥 ${esc(Math.round(t.kcal * modalAdag))} kcal</span>
    <span class="tap-cimke">Fehérje ${esc(Math.round(t.feherje * modalAdag))} g</span>
    <span class="tap-cimke">Zsír ${esc(Math.round(t.zsir * modalAdag))} g</span>
    <span class="tap-cimke">Szénhidrát ${esc(Math.round(t.szenhidrat * modalAdag))} g</span>
    <span class="tap-cimke">ebből cukor ${esc(Math.round(t.cukor * modalAdag))} g</span>
    <span class="tap-info">${modalAdag} adagra vonatkozó, becsült értékek</span>` : "";
}

function nyitReszletek(id) {
  const r = receptById(id);
  if (!r) return;
  nyitottReceptId = id;
  modalAdag = 1; // alapból 1 adagra mutatjuk a mennyiségeket

  $("#modal-nev").textContent = r.nev;
  $("#modal-meta").innerHTML = `
    <span class="cimke">${esc(r.kategoria)}</span>
    <span>⏱️ ${esc(r.ido_perc)} perc</span>`;

  rajzolModalHozzavalok(r);
  $("#modal-lepesek").innerHTML = (r.lepesek || []).map((l) => `<li>${esc(l)}</li>`).join("");

  const megj = $("#modal-megjegyzes");
  megj.textContent = r.megjegyzes ? "💡 " + r.megjegyzes : "";
  megj.classList.toggle("hidden", !r.megjegyzes);

  const forras = $("#modal-forras");
  forras.innerHTML = r.forras
    ? `🎬 <a href="${esc(r.forras)}" target="_blank" rel="noopener">Eredeti videó megnyitása</a>` : "";

  $("#recept-modal").showModal();
}

// a kiválasztott adagszámra számolt makrók vágólapra — pl. YAZIO-ba beíráshoz
$("#modal-masol").addEventListener("click", async () => {
  const r = receptById(nyitottReceptId);
  if (!r) return;
  if (!r.tapertek) { toast("⚠️ Ehhez a recepthez nincs tápérték megadva"); return; }
  const t = r.tapertek;
  const sz = (x) => Math.round((x || 0) * modalAdag);
  // a sorrend a YAZIO beviteli mezőit követi (energia, zsír, szénhidrát, cukor, fehérje)
  const szoveg = `${r.nev} — ${modalAdag} adag
Energia: ${sz(t.kcal)} kcal
Zsír: ${sz(t.zsir)} g
Szénhidrát: ${sz(t.szenhidrat)} g
ebből cukor: ${sz(t.cukor)} g
Fehérje: ${sz(t.feherje)} g`;
  try {
    await navigator.clipboard.writeText(szoveg);
    toast("📋 Makrók a vágólapon — beírhatod a YAZIO-ba");
  } catch {
    toast("⚠️ Nem sikerült a vágólapra másolni");
  }
});

$("#adag-minusz").addEventListener("click", () => {
  const r = receptById(nyitottReceptId);
  if (r && modalAdag > 1) { modalAdag--; rajzolModalHozzavalok(r); }
});
$("#adag-plusz").addEventListener("click", () => {
  const r = receptById(nyitottReceptId);
  if (r && modalAdag < 50) { modalAdag++; rajzolModalHozzavalok(r); }
});

$("#modal-torol").addEventListener("click", () => {
  const r = receptById(nyitottReceptId);
  if (!r || !confirm(`Biztosan törlöd: „${r.nev}”?`)) return;
  if (sajatReceptek.some((s) => s.id === r.id)) {
    sajatReceptek = sajatReceptek.filter((s) => s.id !== r.id);
    store.set("custom", sajatReceptek);
  } else {
    rejtettek.push(r.id);
    store.set("hidden", rejtettek);
  }
  $("#recept-modal").close();
  rajzolReceptek();
});

// ---------- szerkesztő ----------
function hozzavalokSzovegge(hozzavalok) {
  return (hozzavalok || []).map((h) =>
    h.mennyiseg == null ? h.nev + (h.egyseg ? ` (${h.egyseg})` : "") : `${h.mennyiseg} ${h.egyseg} ${h.nev}`.trim()
  ).join("\n");
}

function sorbolHozzavalo(sor) {
  // pl. "500 g burgonya" | "2 db tojás" | "só (ízlés szerint)" | "csipet só"
  const m = sor.match(/^([\d.,]+)\s*(\S+)\s+(.+)$/);
  if (m) {
    const szam = parseFloat(m[1].replace(",", "."));
    if (!isNaN(szam)) return { nev: m[3].trim(), mennyiseg: szam, egyseg: m[2] };
  }
  const zarojeles = sor.match(/^(.+?)\s*\((.+)\)$/);
  if (zarojeles) return { nev: zarojeles[1].trim(), mennyiseg: null, egyseg: zarojeles[2].trim() };
  return { nev: sor.trim(), mennyiseg: null, egyseg: "" };
}

$("#uj-recept-gomb").addEventListener("click", () => nyitSzerkeszto(null));
$("#modal-szerkeszt").addEventListener("click", () => {
  $("#recept-modal").close();
  nyitSzerkeszto(nyitottReceptId);
});

function nyitSzerkeszto(id) {
  const form = $("#recept-form");
  form.reset();
  form.dataset.szerkesztettId = id || "";
  $("#szerkeszto-cim").textContent = id ? "Recept szerkesztése" : "Új recept";

  if (id) {
    const r = receptById(id);
    if (!r) return;
    form.nev.value = r.nev;
    form.kategoria.value = r.kategoria;
    form.adag.value = r.adag || 2;
    form.ido_perc.value = r.ido_perc || 30;
    form.hozzavalok.value = hozzavalokSzovegge(r.hozzavalok);
    form.lepesek.value = (r.lepesek || []).join("\n");
    form.megjegyzes.value = r.megjegyzes || "";
    form.forras.value = r.forras || "";
    if (r.tapertek) {
      ["kcal", "feherje", "zsir", "szenhidrat", "cukor"].forEach((k) => {
        if (r.tapertek[k] != null) form[k].value = r.tapertek[k];
      });
    }
  }
  $("#szerkeszto-modal").showModal();
}

$("#recept-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const regiId = form.dataset.szerkesztettId;

  const recept = {
    id: regiId || form.nev.value.toLowerCase().replace(/[^a-z0-9áéíóöőúüű]+/gi, "-") + "-" + Date.now(),
    nev: form.nev.value.trim(),
    forras: form.forras.value.trim() || null,
    kategoria: form.kategoria.value,
    adag: parseInt(form.adag.value, 10) || 2,
    ido_perc: parseInt(form.ido_perc.value, 10) || 30,
    hozzavalok: form.hozzavalok.value.split("\n").map((s) => s.trim()).filter(Boolean).map(sorbolHozzavalo),
    lepesek: form.lepesek.value.split("\n").map((s) => s.trim()).filter(Boolean),
    megjegyzes: form.megjegyzes.value.trim(),
    hozzaadva: regiId ? (receptById(regiId)?.hozzaadva || datumKulcs(new Date())) : datumKulcs(new Date())
  };

  const tap = {};
  ["kcal", "feherje", "zsir", "szenhidrat", "cukor"].forEach((k) => {
    const ertek = form[k].value.trim();
    if (ertek !== "" && !isNaN(parseFloat(ertek))) tap[k] = parseFloat(ertek);
  });
  if (Object.keys(tap).length) recept.tapertek = tap;

  if (regiId && (window.RECIPES || []).some((r) => r.id === regiId)) {
    feluliras[regiId] = recept;            // fájlbeli recept módosítása felülírásként
    store.set("overrides", feluliras);
  } else if (regiId) {
    sajatReceptek = sajatReceptek.map((r) => (r.id === regiId ? recept : r));
    store.set("custom", sajatReceptek);
  } else {
    sajatReceptek.push(recept);
    store.set("custom", sajatReceptek);
  }

  $("#szerkeszto-modal").close();
  rajzolReceptek();
});

// ============================================================
// ÉTREND NÉZET
// ============================================================
function rajzolEtrend() {
  $("#het-cimke").textContent = hetCimke(hetOffset);
  const hetKulcs = datumKulcs(hetKezdete(hetOffset));
  const hetiTerv = etrend[hetKulcs] || {};
  const maKulcs = datumKulcs(new Date());
  const kezdo = hetKezdete(hetOffset);

  // felső sor: napok
  const maNapok = [];
  $("#etrend-tabla thead").innerHTML = "<tr><th></th>" + NAPOK.map((nap, i) => {
    const datum = new Date(kezdo);
    datum.setDate(kezdo.getDate() + i);
    maNapok[i] = datumKulcs(datum) === maKulcs;
    return `<th class="${maNapok[i] ? "ma" : ""}">${nap}<br><small>${datum.getMonth() + 1}.${datum.getDate()}.</small></th>`;
  }).join("") + "</tr>";

  // sorok: étkezések
  const tbody = $("#etrend-tabla tbody");
  tbody.innerHTML = ETKEZESEK.map((etkezes) => {
    const cellak = NAPOK.map((_, i) => {
      const id = hetiTerv[i]?.[etkezes];
      const r = id ? receptById(id) : null;
      return `<td class="etkezes-cella ${r ? "" : "ures-cella"} ${maNapok[i] ? "ma" : ""}"
                  data-nap="${i}" data-etkezes="${etkezes}">${r ? esc(r.nev) : "+"}</td>`;
    }).join("");
    return `<tr><td class="nap-nev">${ETKEZES_IKON[etkezes]} ${etkezes}</td>${cellak}</tr>`;
  }).join("");

  // alsó sor: napi kalória- és makró-összesítés (étkezésenként 1 adaggal számolva)
  $("#etrend-tabla tfoot").innerHTML = "<tr><td>Σ napi</td>" + NAPOK.map((_, i) => {
    const o = { kcal: 0, feherje: 0, zsir: 0, szenhidrat: 0, cukor: 0 };
    let van = false;
    ETKEZESEK.forEach((etkezes) => {
      const id = hetiTerv[i]?.[etkezes];
      const r = id ? receptById(id) : null;
      if (r?.tapertek) {
        van = true;
        Object.keys(o).forEach((k) => { o[k] += r.tapertek[k] || 0; });
      }
    });
    const tartalom = van
      ? `🔥 <strong>${Math.round(o.kcal)}</strong> kcal<br>
         <small>F ${Math.round(o.feherje)} · Zs ${Math.round(o.zsir)} · CH ${Math.round(o.szenhidrat)} · C ${Math.round(o.cukor)} g</small>`
      : `<small>–</small>`;
    return `<td class="${maNapok[i] ? "ma" : ""}">${tartalom}</td>`;
  }).join("") + "</tr>";

  tbody.querySelectorAll(".etkezes-cella").forEach((cella) => {
    cella.addEventListener("click", () => nyitValaszto(hetKulcs, +cella.dataset.nap, cella.dataset.etkezes));
  });
}

$("#elozo-het").addEventListener("click", () => { hetOffset--; rajzolEtrend(); });
$("#kovetkezo-het").addEventListener("click", () => { hetOffset++; rajzolEtrend(); });

// ---------- receptválasztó ----------
function nyitValaszto(hetKulcs, nap, etkezes) {
  valasztoCel = { hetKulcs, nap, etkezes };
  $("#valaszto-cim").textContent = `${NAPOK[nap]} — ${etkezes}`;
  $("#valaszto-kereso").value = "";
  const vanMar = !!etrend[hetKulcs]?.[nap]?.[etkezes];
  $("#cella-torles").classList.toggle("hidden", !vanMar);
  rajzolValaszto();
  $("#valaszto-modal").showModal();
}

function rajzolValaszto() {
  const kereses = $("#valaszto-kereso").value.trim().toLowerCase();
  const lista = $("#valaszto-lista");
  const talalatok = osszesRecept().filter((r) => !kereses || r.nev.toLowerCase().includes(kereses));

  lista.innerHTML = talalatok.map((r) => `
    <button class="valaszto-tetel" data-id="${esc(r.id)}">
      <span>${esc(r.nev)}</span>
      <span class="meta">${esc(r.kategoria)} · ⏱️ ${esc(r.ido_perc)}p</span>
    </button>`).join("") || `<p class="ures">Nincs találat.</p>`;

  lista.querySelectorAll(".valaszto-tetel").forEach((g) => {
    g.addEventListener("click", () => {
      const { hetKulcs, nap, etkezes } = valasztoCel;
      etrend[hetKulcs] = etrend[hetKulcs] || {};
      etrend[hetKulcs][nap] = etrend[hetKulcs][nap] || {};
      etrend[hetKulcs][nap][etkezes] = g.dataset.id;
      store.set("plan", etrend);
      $("#valaszto-modal").close();
      rajzolEtrend();
    });
  });
}

$("#valaszto-kereso").addEventListener("input", rajzolValaszto);

$("#cella-torles").addEventListener("click", () => {
  const { hetKulcs, nap, etkezes } = valasztoCel;
  if (etrend[hetKulcs]?.[nap]) {
    delete etrend[hetKulcs][nap][etkezes];
    store.set("plan", etrend);
  }
  $("#valaszto-modal").close();
  rajzolEtrend();
});

// ============================================================
// BEVÁSÁRLÓLISTA
// ============================================================
let bevNapSzuro = null;  // null = egész hét, 0-6 = adott nap
let bevEtelSzuro = null; // null = minden étel, egyébként receptId

// összecsukható szűrő-panel
$("#szuro-fejlec").addEventListener("click", () => {
  $("#szuro-tartalom").classList.toggle("hidden");
  $("#szuro-nyil").classList.toggle("nyitva");
});

// átlagos darabsúlyok a mértékegység-egységesítéshez (db → gramm)
// a lista elejétől keresünk, ezért a pontosabb kulcsszavak vannak elöl
const ATLAG_SULY = [
  ["apró burgonya", 70],
  ["koktélparadicsom", 15],
  ["kaliforniai paprika", 150],
  ["csirkemellfilé", 250],
  ["csirkemell", 250],
  ["lilahagyma", 100],
  ["vöröshagyma", 100],
  ["zöldhagyma", 15],
  ["sárgarépa", 100],
  ["burgonya", 200],
  ["paradicsom", 120],
  ["cukkini", 250],
  ["paprika", 130],
  ["citrom", 100],
  ["banán", 120],
  ["alma", 150]
];

// darabban megadott hozzávaló átszámítása grammra, ha ismerjük az átlagsúlyát
function normalizalMennyiseg(h) {
  if (h.mennyiseg == null || h.egyseg !== "db") return { ...h, kozelito: false };
  const nev = h.nev.toLowerCase();
  const talalat = ATLAG_SULY.find(([kulcsszo]) => nev.includes(kulcsszo));
  if (!talalat) return { ...h, kozelito: false };
  return { nev: h.nev, mennyiseg: h.mennyiseg * talalat[1], egyseg: "g", kozelito: true };
}

function rajzolBevasarlas() {
  $("#bev-het-cimke").textContent = hetCimke(hetOffset);
  const hetKulcs = datumKulcs(hetKezdete(hetOffset));
  const hetiTerv = etrend[hetKulcs] || {};
  const hetiPipak = pipak[hetKulcs] || {};

  // nap-szűrő gombok
  $("#nap-szuro").innerHTML =
    `<button class="szuro-gomb ${bevNapSzuro === null ? "aktiv" : ""}" data-nap="">Egész hét</button>` +
    NAPOK.map((nap, i) =>
      `<button class="szuro-gomb ${bevNapSzuro === i ? "aktiv" : ""}" data-nap="${i}">${nap}</button>`
    ).join("");
  $("#nap-szuro").querySelectorAll(".szuro-gomb").forEach((g) => {
    g.addEventListener("click", () => {
      bevNapSzuro = g.dataset.nap === "" ? null : +g.dataset.nap;
      rajzolBevasarlas();
    });
  });

  // hányszor szerepel egy recept a kiválasztott időszakban
  const darabszam = {};
  Object.entries(hetiTerv).forEach(([napIndex, napTerv]) => {
    if (bevNapSzuro !== null && +napIndex !== bevNapSzuro) return;
    Object.values(napTerv).forEach((id) => { darabszam[id] = (darabszam[id] || 0) + 1; });
  });

  // étel-szűrő gombok az időszakban szereplő receptekből
  if (bevEtelSzuro !== null && !darabszam[bevEtelSzuro]) bevEtelSzuro = null;
  const idoszakReceptjei = Object.keys(darabszam).map(receptById).filter(Boolean)
    .sort((a, b) => a.nev.localeCompare(b.nev, "hu"));
  $("#etel-szuro-sor").classList.toggle("hidden", idoszakReceptjei.length < 2);
  $("#etel-szuro").innerHTML = idoszakReceptjei.length < 2 ? "" :
    `<button class="szuro-gomb ${bevEtelSzuro === null ? "aktiv" : ""}" data-id="">Minden étel</button>` +
    idoszakReceptjei.map((r) =>
      `<button class="szuro-gomb ${bevEtelSzuro === r.id ? "aktiv" : ""}" data-id="${esc(r.id)}">${esc(r.nev)}</button>`
    ).join("");
  $("#etel-szuro").querySelectorAll(".szuro-gomb").forEach((g) => {
    g.addEventListener("click", () => {
      bevEtelSzuro = g.dataset.id === "" ? null : g.dataset.id;
      rajzolBevasarlas();
    });
  });

  // a fejléc mindig mutatja, mi az aktív szűrés — összecsukva is
  $("#szuro-osszegzes").textContent =
    (bevNapSzuro === null ? "Egész hét" : NAPOK[bevNapSzuro]) + " · " +
    (bevEtelSzuro === null ? "Minden étel" : (receptById(bevEtelSzuro)?.nev || "Minden étel"));

  // csoportok: egy étel = egy blokk, alatta a hozzávalói
  const csoportok = Object.entries(darabszam)
    .filter(([id]) => bevEtelSzuro === null || id === bevEtelSzuro)
    .map(([id, db]) => ({ r: receptById(id), db }))
    .filter((cs) => cs.r)
    .sort((a, b) => a.r.nev.localeCompare(b.r.nev, "hu"));

  // összesítő a több ételhez is kellő hozzávalókhoz (egységesített mértékegységgel)
  const osszesito = {};
  csoportok.forEach(({ r, db }) => {
    (r.hozzavalok || []).forEach((h) => {
      const n = normalizalMennyiseg(h);
      const kulcs = n.nev.toLowerCase().trim() + "|" + (n.egyseg || "");
      if (!osszesito[kulcs]) osszesito[kulcs] = { egyseg: n.egyseg || "", osszeg: 0, szamszeru: n.mennyiseg != null, kozelito: false, receptek: [] };
      if (n.mennyiseg != null) osszesito[kulcs].osszeg += n.mennyiseg * db;
      osszesito[kulcs].kozelito = osszesito[kulcs].kozelito || n.kozelito;
      if (!osszesito[kulcs].receptek.includes(r.nev)) osszesito[kulcs].receptek.push(r.nev);
    });
  });

  const lista = $("#bevasarlo-lista");
  $("#bev-ures").classList.toggle("hidden", csoportok.length > 0);

  lista.innerHTML = csoportok.map(({ r, db }) => {
    const sorok = (r.hozzavalok || []).map((h) => {
      const n = normalizalMennyiseg(h);
      const kulcs = n.nev.toLowerCase().trim() + "|" + (n.egyseg || "");
      const ossz = osszesito[kulcs];
      const tobbhoz = ossz.receptek.length > 1;
      const pipa = !!hetiPipak[kulcs];

      let menny;
      if (h.mennyiseg == null) menny = h.egyseg || "";
      else if (n.kozelito) menny = `${+(h.mennyiseg * db).toFixed(2)} db ≈ ${Math.round(n.mennyiseg * db)} g`;
      else menny = `${+(h.mennyiseg * db).toFixed(2)} ${h.egyseg || ""}`.trim();

      const osszesen = tobbhoz
        ? (ossz.szamszeru
            ? `${ossz.receptek.length} ételhez — összesen ${ossz.kozelito ? "kb. " : ""}${+ossz.osszeg.toFixed(2)} ${ossz.egyseg}`
            : `${ossz.receptek.length} ételhez kell`)
        : "";

      return `
        <label class="bev-tetel ${pipa ? "kipipalva" : ""} ${tobbhoz ? "tobb-etel" : ""}">
          <input type="checkbox" data-kulcs="${esc(kulcs)}" ${pipa ? "checked" : ""}>
          <span class="tetel-torzs">
            <span class="nev">${esc(h.nev)}</span>
            ${osszesen ? `<small class="honnan">🛒 ${esc(osszesen)}</small>` : ""}
          </span>
          <span class="mennyiseg">${esc(menny)}</span>
        </label>`;
    }).join("");
    return `<div class="bev-csoport"><h3>🍽️ ${esc(r.nev)}${db > 1 ? ` ×${db}` : ""}</h3>${sorok}</div>`;
  }).join("");

  lista.querySelectorAll("input[type=checkbox]").forEach((cb) => {
    cb.addEventListener("change", () => {
      pipak[hetKulcs] = pipak[hetKulcs] || {};
      if (cb.checked) pipak[hetKulcs][cb.dataset.kulcs] = true;
      else delete pipak[hetKulcs][cb.dataset.kulcs];
      store.set("checked", pipak);
      rajzolBevasarlas(); // ugyanaz a hozzávaló több ételnél is szerepelhet — mindenhol frissüljön
    });
  });
}

$("#bev-elozo-het").addEventListener("click", () => { hetOffset--; rajzolBevasarlas(); });
$("#bev-kovetkezo-het").addEventListener("click", () => { hetOffset++; rajzolBevasarlas(); });

// ============================================================
// EXPORT / IMPORT
// ============================================================
$("#export-gomb").addEventListener("click", () => {
  const adat = {
    verzio: 1,
    exportalva: new Date().toISOString(),
    sajatReceptek, feluliras, rejtettek, etrend, pipak
  };
  const blob = new Blob([JSON.stringify(adat, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `receptjeim-mentes-${datumKulcs(new Date())}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
});

$("#import-input").addEventListener("change", (e) => {
  const fajl = e.target.files[0];
  if (!fajl) return;
  const olvaso = new FileReader();
  olvaso.onload = () => {
    try {
      const adat = JSON.parse(olvaso.result);
      if (!adat || adat.verzio !== 1) throw new Error("ismeretlen formátum");
      if (!confirm("A visszatöltés felülírja a jelenlegi saját receptjeidet és étrendjeidet. Folytatod?")) return;
      sajatReceptek = adat.sajatReceptek || [];
      feluliras = adat.feluliras || {};
      rejtettek = adat.rejtettek || [];
      etrend = adat.etrend || {};
      pipak = adat.pipak || {};
      store.set("custom", sajatReceptek);
      store.set("overrides", feluliras);
      store.set("hidden", rejtettek);
      store.set("plan", etrend);
      store.set("checked", pipak);
      rajzolReceptek(); rajzolEtrend(); rajzolBevasarlas();
      alert("Sikeres visszatöltés! ✅");
    } catch (hiba) {
      alert("Hibás mentésfájl: " + hiba.message);
    }
  };
  olvaso.readAsText(fajl);
  e.target.value = "";
});

// ---------- publikus mód: beállítások és üdvözlő ----------
if (PUBLIKUS) {
  $("#beallitas-gomb").classList.remove("hidden");

  $("#beallitas-gomb").addEventListener("click", () => {
    $("#gemini-kulcs-input").value = localStorage.getItem("receptapp.gemini_kulcs") || "";
    $("#beallitas-modal").showModal();
  });
  $("#gemini-kulcs-mentes").addEventListener("click", () => {
    const kulcs = $("#gemini-kulcs-input").value.trim();
    if (kulcs) localStorage.setItem("receptapp.gemini_kulcs", kulcs);
    $("#beallitas-modal").close();
    toast(kulcs ? "✅ Kulcs elmentve — mostantól automata a felismerés" : "ℹ️ Nincs kulcs — kézi módban dolgozunk");
  });
  $("#gemini-kulcs-torles").addEventListener("click", () => {
    localStorage.removeItem("receptapp.gemini_kulcs");
    $("#gemini-kulcs-input").value = "";
    $("#beallitas-modal").close();
    toast("🗑️ Kulcs törölve");
  });

  if (!store.get("udvozolve", false)) {
    $("#udvozlo-modal").showModal();
    const udvozloVege = () => { store.set("udvozolve", true, false); $("#udvozlo-modal").close(); };
    $("#udvozlo-ok").addEventListener("click", udvozloVege);
    $("#udvozlo-modal").addEventListener("close", () => store.set("udvozolve", true, false));
  }
}

// ---------- indulás ----------
rajzolReceptek();

// szinkron indítása: ha van már helyi adat, de még sosem szinkronizált,
// kapjon időbélyeget, hogy felkerüljön a hídra
if (KULSO_VAROLISTA_URL) {
  const vanHelyiAdat = sajatReceptek.length || rejtettek.length ||
    Object.keys(feluliras).length || Object.keys(etrend).length || Object.keys(pipak).length;
  if (!allapotModositva && vanHelyiAdat) {
    allapotModositva = Date.now();
    store.set("modositva", allapotModositva, false);
    feltoltAllapot();
  }
  szinkronEllenorzes();
}
