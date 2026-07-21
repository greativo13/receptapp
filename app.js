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
let keszlet = store.get("pantry", []);        // kamra: [{ id, nev, marka, vonalkod, tapertek100g }]

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
    if (gomb.dataset.view === "kamra") rajzolKamra();
  });
});

// modal bezáró gombok
document.querySelectorAll("[data-close]").forEach((g) => {
  g.addEventListener("click", () => $("#" + g.dataset.close).close());
});

// ============================================================
// RECEPTEK NÉZET
// ============================================================
const KATEGORIA_SORREND = ["reggeli", "ebéd", "vacsora", "desszert", "egyéb"];
const KATEGORIA_IKON = { "reggeli": "🌅", "ebéd": "☀️", "vacsora": "🌙", "desszert": "🍰", "egyéb": "🍴" };

// recept-képek: a recept saját `kep` mezője (feltöltött fotó), vagy a
// kepek/<id>.jpg automatikus borítókép; ami egyszer 404-et adott, azt
// nem próbáljuk újra
const hianyzoKepek = new Set();
window.kepHiba = (elem, id) => { hianyzoKepek.add(id); elem.remove(); };

function receptKepSrc(r) {
  if (r.kep) return r.kep;
  if (hianyzoKepek.has(r.id)) return null;
  return "kepek/" + r.id + ".jpg";
}

function rajzolReceptek() {
  const kereses = $("#kereso").value.trim().toLowerCase();
  const kategoria = $("#kategoria-szuro").value;
  const lista = $("#recept-lista");
  const csukott = store.get("csukottKategoriak", []);

  const talalatok = osszesRecept().filter((r) => {
    if (kategoria && r.kategoria !== kategoria) return false;
    if (!kereses) return true;
    const szoveg = (r.nev + " " + (r.hozzavalok || []).map((h) => h.nev).join(" ")).toLowerCase();
    return szoveg.includes(kereses);
  });

  const kartyaHtml = (r) => `
    <div class="kartya" data-id="${esc(r.id)}">
      ${receptKepSrc(r) ? `<img class="kartya-kep" src="${esc(receptKepSrc(r))}" alt="" onerror="kepHiba(this, '${esc(r.id)}')">` : ""}
      <span class="cimke">${esc(r.kategoria)}</span>
      <h3>${esc(r.nev)}</h3>
      <div class="meta">
        <span>⏱️ ${esc(r.ido_perc)} perc</span>
        ${r.tapertek ? `<span>🔥 ${esc(r.tapertek.kcal)} kcal</span>` : ""}
      </div>
      ${r.forras ? `<div class="tiktok-jel">🎬 ${/facebook/i.test(r.forras) ? "Facebook" : /instagram/i.test(r.forras) ? "Instagram" : "TikTok"} videóból</div>` : ""}
    </div>`;

  // kategóriánkénti, összecsukható csoportok (keresésnél mindet kinyitjuk)
  const csoportok = KATEGORIA_SORREND.map((k) => ({
    k,
    receptek: talalatok.filter((r) => (KATEGORIA_SORREND.includes(r.kategoria) ? r.kategoria : "egyéb") === k)
  })).filter((cs) => cs.receptek.length);

  lista.innerHTML = csoportok.map((cs) => {
    const zart = !kereses && csukott.includes(cs.k);
    return `
      <div class="recept-csoport">
        <button type="button" class="csoport-fejlec" data-kategoria="${esc(cs.k)}">
          <span>${KATEGORIA_IKON[cs.k]} ${esc(cs.k)}</span>
          <span class="darab">${cs.receptek.length}</span>
          <span class="szuro-nyil ${zart ? "" : "nyitva"}">▾</span>
        </button>
        <div class="kartya-racs ${zart ? "hidden" : ""}">${cs.receptek.map(kartyaHtml).join("")}</div>
      </div>`;
  }).join("");

  $("#ures-uzenet").classList.toggle("hidden", talalatok.length > 0);

  lista.querySelectorAll(".csoport-fejlec").forEach((fejlec) => {
    fejlec.addEventListener("click", () => {
      const k = fejlec.dataset.kategoria;
      const uj = csukott.includes(k) ? csukott.filter((x) => x !== k) : csukott.concat(k);
      store.set("csukottKategoriak", uj, false); // felület-beállítás, nem szinkronizáljuk
      rajzolReceptek();
    });
  });

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

function varoCimke(url) {
  if (url.startsWith("kep:")) return "📷 Fotóból recept";
  if (url.startsWith("https://kivansag.recept/")) {
    try {
      const p = new URL(url);
      return "🪄 Receptkérés: " + (p.searchParams.get("alapanyagok") || "").slice(0, 60);
    } catch { return "🪄 Receptkérés"; }
  }
  return url;
}

function rajzolVarolista() {
  const elemek = helyiVarolista.map((t) => ({ ...t, kulso: false }))
    .concat(kulsoVarolista.map((t) => ({ ...t, kulso: true })));

  $("#varolista").innerHTML = elemek.map((t) => `
    <div class="varo-tetel">
      <span>⏳ Feldolgozásra vár:</span>
      <span class="url">${esc(varoCimke(t.url))}</span>
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
  mezo.value = "";
  if (PUBLIKUS) { publikusLinkFeldolgozas(url); return; }

  // személyes mód: ha van Gemini-kulcs, a TikTok leírásából azonnal próbálunk
  // receptet készíteni (böngészőből). Ha nem jön össze, a videó a
  // feldolgozó (Claude) várólistájára kerül.
  if (geminiKulcs() && /tiktok\.com/i.test(url)) {
    toast("🔍 Videó beolvasása…");
    if (await kliensVideoRecept(url)) return;
    toast("A leírásból nem jött ki recept — a videót a feldolgozóra bízom");
  }

  try {
    await varolistaraTesz(url);
    toast("🎬 Link a várólistán — hamarosan recept lesz belőle!");
  } catch {
    toast("⚠️ Nem sikerült elmenteni a linket");
  }
}

// TikTok leírás → Gemini → recept-előnézet; siker esetén true
async function kliensVideoRecept(url) {
  let oe;
  try { oe = await oembedLekeres(url); } catch { return false; }
  const leiras = (oe.cim || "").trim();
  // ha a leírás gyakorlatilag csak hashtagekből áll, nincs mit strukturálni
  if (leiras.replace(/#\S+/g, "").trim().length < 50) return false;
  try {
    toast("🤖 Recept készítése…");
    const nyers = await geminiHivas([{
      text: GEMINI_RECEPT_UTASITAS
        + "\n\nA következő videó-leírásból készíts receptet. Ha nincs benne elég információ egy teljes recepthez, adj vissza {\"hiba\":\"nincs recept\"}.\n\nLeírás:\n" + leiras
    }]);
    const recept = receptbolBejegyzes(nyers, url);
    if (!recept) return false;
    receptElonezet(recept);
    return true;
  } catch { return false; }
}

// közös várólistára-tevő: helyi szerverre vagy a Google hídra
async function varolistaraTesz(url) {
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
}

// recept-kívánság ablak megnyitása (előtöltéssel vagy anélkül)
function nyitKivansag(elotoltKamrabol) {
  const mezo = $("#kivansag-alapanyagok");
  if (elotoltKamrabol && !mezo.value.trim() && keszlet.length) {
    mezo.value = keszlet.map((t) => t.nev).join(", ");
  }
  $("#kivansag-form").kivansag_kerulendo.value = store.get("kerulendo", "");
  $("#kivansag-modal").showModal();
}

// a Kamra gombja a készletből tölt elő; a Receptek fül gombja üresen indul
$("#kivansag-gomb").addEventListener("click", () => nyitKivansag(true));
$("#generalj-gomb").addEventListener("click", () => nyitKivansag(false));

// Gemini-hívás alapanyagokból + előnézet; a paramétereket megjegyezzük,
// hogy az előnézet „Újragenerálás" gombja ugyanezzel újra tudja futtatni
async function generalKivansagbol(alapanyagok, kategoria, kerulendo) {
  toast("🪄 Recept készítése…");
  const keres = GEMINI_RECEPT_UTASITAS
    + "\n\nÍrj egy ízletes, egészséges, magas fehérjetartalmú receptet az alábbi kérés alapján (ez lehet alapanyag-lista vagy szabad kívánság). Alapanyagoknál nem kötelező mindet felhasználni; alap fűszerek, olaj, víz hozzáadható. Adj mindig MÁS variációt, ha újra kérnek."
    + (kategoria ? " Az étkezés típusa: " + kategoria + "." : "")
    + (kerulendo ? " SOHA ne használd ezeket: " + kerulendo + "." : "")
    + "\n\nKérés: " + alapanyagok.join(", ");
  const nyers = await geminiHivas([{ text: keres }]);
  const recept = receptbolBejegyzes(nyers, null);
  if (!recept) throw new Error("nincs recept");
  recept.megjegyzes = (recept.megjegyzes ? recept.megjegyzes + " " : "") + "A kért alapanyagokból: " + alapanyagok.join(", ") + ".";
  receptElonezet(recept, () => generalKivansagbol(alapanyagok, kategoria, kerulendo));
}

$("#kivansag-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const alapanyagok = $("#kivansag-alapanyagok").value.split(/[\n,]/).map((s) => s.trim()).filter(Boolean);
  if (!alapanyagok.length) { toast("⚠️ Írj be legalább egy alapanyagot"); return; }
  const kategoria = e.target.kivansag_kategoria.value;
  const kerulendo = e.target.kivansag_kerulendo.value.trim();
  store.set("kerulendo", kerulendo, false); // megjegyezzük a következő kéréshez

  // ha van Gemini-kulcs: azonnali generálás helyben; különben várólistára megy
  if (geminiKulcs()) {
    $("#kivansag-modal").close();
    try {
      await generalKivansagbol(alapanyagok, kategoria, kerulendo);
    } catch {
      const ok = window.geminiUtolsoHiba ? " (" + window.geminiUtolsoHiba + ")" : "";
      toast("⚠️ A generálás nem sikerült" + ok + " — a kérést a várólistára tettem");
      const url = "https://kivansag.recept/?alapanyagok=" + encodeURIComponent(alapanyagok.join(", "))
        + (kategoria ? "&kategoria=" + encodeURIComponent(kategoria) : "");
      try { await varolistaraTesz(url); } catch { /* offline */ }
    }
    return;
  }

  const url = "https://kivansag.recept/?alapanyagok=" + encodeURIComponent(alapanyagok.join(", "))
    + (kategoria ? "&kategoria=" + encodeURIComponent(kategoria) : "");
  try {
    await varolistaraTesz(url);
    $("#kivansag-modal").close();
    toast("🪄 Receptkérés elküldve — a következő feldolgozásnál elkészül! (⚙️-ben kulcsot állítva azonnali lenne)");
  } catch {
    toast("⚠️ Nem sikerült elküldeni a kérést");
  }
});

$("#link-gomb").addEventListener("click", linkBekuldes);
$("#link-input").addEventListener("keydown", (e) => { if (e.key === "Enter") linkBekuldes(); });

// ---------- recept fotóból: kép feltöltése a Google hídra ----------
function kepBase64(fajl, max = 1600) {
  // méretcsökkentés, hogy a feltöltés/tárolás kicsi maradjon (JPEG)
  return new Promise((megold, elutasit) => {
    const kep = new Image();
    kep.onload = () => {
      const arany = Math.min(1, max / Math.max(kep.width, kep.height));
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
      body: JSON.stringify({ sajatReceptek, feluliras, rejtettek, etrend, pipak, keszlet, modositva: allapotModositva })
    });
  } catch { /* offline — a következő módosításnál újra próbáljuk */ }
}

function alkalmazTavoliAllapot(a) {
  sajatReceptek = a.sajatReceptek || [];
  feluliras = a.feluliras || {};
  rejtettek = a.rejtettek || [];
  etrend = a.etrend || {};
  pipak = a.pipak || {};
  keszlet = a.keszlet || [];
  allapotModositva = a.modositva;
  store.set("custom", sajatReceptek, false);
  store.set("overrides", feluliras, false);
  store.set("hidden", rejtettek, false);
  store.set("plan", etrend, false);
  store.set("checked", pipak, false);
  store.set("pantry", keszlet, false);
  store.set("modositva", allapotModositva, false);
  rajzolReceptek();
  if (!$("#view-etrend").classList.contains("hidden")) rajzolEtrend();
  if (!$("#view-bevasarlas").classList.contains("hidden")) rajzolBevasarlas();
  if (!$("#view-kamra").classList.contains("hidden")) rajzolKamra();
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
  // cache-kerülő újratöltés, hogy a telefon tényleg a friss verziót kapja
  document.getElementById("frissito-gomb").addEventListener("click", () => {
    location.href = location.pathname + "?frissites=" + Date.now();
  });
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

  // darabszám (pl. hány muffin) — az adagszámmal együtt skálázódik
  const darabInfo = $("#modal-darab");
  if (r.darab) {
    const db = Math.round((r.darab / (r.adag || 1)) * modalAdag * 10) / 10;
    darabInfo.textContent = `≈ ${db} db ${r.darab_nev || "darab"} lesz belőle`;
    darabInfo.classList.remove("hidden");
  } else {
    darabInfo.classList.add("hidden");
  }
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

  const modalKep = $("#modal-kep");
  const kepSrc = receptKepSrc(r);
  modalKep.classList.toggle("hidden", !kepSrc);
  if (kepSrc) {
    modalKep.onerror = () => { hianyzoKepek.add(r.id); modalKep.classList.add("hidden"); };
    modalKep.src = kepSrc;
  }

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

  if (!$("#recept-modal").open) $("#recept-modal").showModal();
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

// ---------- generált recept előnézete (mentés/elvetés/újragenerálás) ----------
let elonezetId = null;
let ujrageneralasFn = null; // ha van, az előnézetben megjelenik az Újragenerálás gomb

function receptElonezet(recept, ujraFn = null) {
  sajatReceptek.push(recept); // egyelőre csak memóriában, store.set nélkül
  elonezetId = recept.id;
  ujrageneralasFn = ujraFn;
  nyitReszletek(recept.id);
  $("#modal-normal-gombok").classList.add("hidden");
  $("#elonezet-gombok").classList.remove("hidden");
  $("#elonezet-ujra").classList.toggle("hidden", !ujrageneralasFn);
  toast("✨ Kész a recept — nézd meg, és döntsd el, mented-e!");
}

$("#elonezet-ujra").addEventListener("click", async () => {
  if (!ujrageneralasFn || !elonezetId) return;
  // a mostani előnézeti receptet eldobjuk (csak memóriából), a modal NYITVA marad
  // (a bezárás-újranyitás versenyfutása miatt csak a tartalmat cseréljük)
  const regiFn = ujrageneralasFn;
  sajatReceptek = sajatReceptek.filter((r) => r.id !== elonezetId);
  elonezetId = null;
  try {
    await regiFn();
  } catch {
    const ok = window.geminiUtolsoHiba ? " (" + window.geminiUtolsoHiba + ")" : "";
    toast("⚠️ Az újragenerálás nem sikerült" + ok);
    if ($("#recept-modal").open) $("#recept-modal").close();
  }
});

function elonezetVege(megtart) {
  if (!elonezetId) return;
  const id = elonezetId;
  elonezetId = null; // előbb nullázzuk, hogy a close-esemény ne fusson újra
  if (megtart) {
    store.set("custom", sajatReceptek);
    toast("💾 Recept elmentve a gyűjteménybe");
  } else {
    sajatReceptek = sajatReceptek.filter((r) => r.id !== id);
    store.set("custom", sajatReceptek, false);
    toast("🗑️ Recept elvetve");
  }
  $("#elonezet-gombok").classList.add("hidden");
  $("#modal-normal-gombok").classList.remove("hidden");
  if ($("#recept-modal").open) $("#recept-modal").close();
  rajzolReceptek();
}

$("#elonezet-ment").addEventListener("click", () => elonezetVege(true));
$("#elonezet-eldob").addEventListener("click", () => elonezetVege(false));
// bezárás (X/háttér) mentés nélkül = elvetés
$("#recept-modal").addEventListener("close", () => { if (elonezetId) elonezetVege(false); });

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

// az űrlaphoz választott kép (dataURL) — mentéskor a recept `kep` mezőjébe kerül
let formKep = null;

function formKepFrissit() {
  const elonezet = $("#form-kep-elonezet");
  elonezet.classList.toggle("hidden", !formKep);
  if (formKep) elonezet.src = formKep;
  $("#form-kep-torles").classList.toggle("hidden", !formKep);
}

$("#form-kep-input").addEventListener("change", async (e) => {
  const fajl = e.target.files[0];
  e.target.value = "";
  if (!fajl) return;
  try {
    formKep = "data:image/jpeg;base64," + (await kepBase64(fajl, 480));
    formKepFrissit();
  } catch { toast("⚠️ Nem sikerült beolvasni a képet"); }
});

$("#form-kep-torles").addEventListener("click", () => { formKep = null; formKepFrissit(); });

function nyitSzerkeszto(id) {
  const form = $("#recept-form");
  form.reset();
  form.dataset.szerkesztettId = id || "";
  $("#szerkeszto-cim").textContent = id ? "Recept szerkesztése" : "Új recept";
  formKep = id ? (receptById(id)?.kep || null) : null;
  formKepFrissit();

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
    if (r.darab) form.darab.value = r.darab;
    if (r.darab_nev) form.darab_nev.value = r.darab_nev;
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
  if (formKep) recept.kep = formKep;
  const darabErtek = parseInt(form.darab.value, 10);
  if (darabErtek > 0) {
    recept.darab = darabErtek;
    if (form.darab_nev.value.trim()) recept.darab_nev = form.darab_nev.value.trim();
  }

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
      return `<td class="etkezes-cella ${r ? "toltott" : "ures-cella"} ${maNapok[i] ? "ma" : ""}"
                  data-nap="${i}" data-etkezes="${etkezes}" ${r ? `data-recept="${esc(r.id)}"` : ""}>
                ${r ? `${esc(r.nev)}<button class="cella-szerk" data-nap="${i}" data-etkezes="${etkezes}" title="Csere / törlés">✎</button>` : "+"}
              </td>`;
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

  // kitöltött cella: a recept nyílik meg; üres cella vagy a ✎ ikon: a választó
  tbody.querySelectorAll(".etkezes-cella").forEach((cella) => {
    cella.addEventListener("click", () => {
      if (cella.dataset.recept) nyitReszletek(cella.dataset.recept);
      else nyitValaszto(hetKulcs, +cella.dataset.nap, cella.dataset.etkezes);
    });
  });
  tbody.querySelectorAll(".cella-szerk").forEach((gomb) => {
    gomb.addEventListener("click", (e) => {
      e.stopPropagation();
      nyitValaszto(hetKulcs, +gomb.dataset.nap, gomb.dataset.etkezes);
    });
  });
}

$("#elozo-het").addEventListener("click", () => { hetOffset--; rajzolEtrend(); });
$("#kovetkezo-het").addEventListener("click", () => { hetOffset++; rajzolEtrend(); });

// ---------- étrend-generátor ----------
// Cél: a napi kalória- és fehérje-célhoz legközelebbi menük összeállítása
// a tápértékes receptekből, választható változatossággal (meal prep mód).
$("#generator-gomb").addEventListener("click", () => $("#generator-modal").showModal());

$("#generator-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const celKcal = parseInt(form.cel_kcal.value, 10) || 1800;
  const celFeherje = parseInt(form.cel_feherje.value, 10) || 0;
  const valtozas = parseInt(form.valtozas.value, 10) || 1;
  const kivalasztott = [...form.querySelectorAll('input[name="etkezes"]:checked')].map((cb) => cb.value);
  if (!kivalasztott.length) { toast("⚠️ Válassz legalább egy étkezést"); return; }

  const tapertekesek = osszesRecept().filter((r) => r.tapertek && r.tapertek.kcal);
  if (tapertekesek.length < 3) { toast("⚠️ Kevés a tápértékes recept a generáláshoz"); return; }

  // étkezésenkénti jelölt-listák (ha egy kategória üres, a teljes készletből válogatunk)
  const jeloltek = (kategoriak) => {
    const lista = tapertekesek.filter((r) => kategoriak.includes(r.kategoria));
    return lista.length ? lista : tapertekesek;
  };
  const poolok = {
    "reggeli": jeloltek(["reggeli"]),
    "tízórai": jeloltek(["desszert", "reggeli"]),
    "ebéd": jeloltek(["ebéd", "vacsora"]),
    "uzsonna": jeloltek(["desszert", "reggeli"]),
    "vacsora": jeloltek(["vacsora", "ebéd"])
  };

  // "abból főzz, ami itthon van": receptenként kiszámoljuk, a fő
  // hozzávalók mekkora hányada van meg a kamrában
  const itthonrol = form.itthonrol.checked && keszlet.length > 0;
  if (form.itthonrol.checked && !keszlet.length) toast("ℹ️ A kamrád üres — e nélkül generálok");
  const fedettseg = {};
  if (itthonrol) {
    tapertekesek.forEach((r) => {
      const fo = (r.hozzavalok || []).filter((h) => h.mennyiseg != null);
      if (!fo.length) { fedettseg[r.id] = 1; return; }
      const megvan = fo.filter((h) => keszlet.some((k) => szoEgyezes(k.nev, h.nev))).length;
      fedettseg[r.id] = megvan / fo.length;
    });
  }

  // blokkonként (ahány naponta változik) véletlen mintavételes keresés
  const hasznalt = new Set();
  const blokkok = [];
  for (let b = 0; b < Math.ceil(7 / valtozas); b++) {
    let legjobb = null;
    let legjobbPont = Infinity;
    for (let proba = 0; proba < 500; proba++) {
      const menu = {};
      let kcal = 0, feherje = 0, ismetles = 0;
      kivalasztott.forEach((etkezes) => {
        const pool = poolok[etkezes];
        const r = pool[Math.floor(Math.random() * pool.length)];
        menu[etkezes] = r;
        kcal += r.tapertek.kcal;
        feherje += r.tapertek.feherje || 0;
        if (hasznalt.has(r.id)) ismetles++;
      });
      const idk = Object.values(menu).map((r) => r.id);
      const napiDupla = idk.length - new Set(idk).size;
      // pontozás: kalória-eltérés + fehérje-hiány (súlyozva) + változatosság
      let hianyzo = 0;
      if (itthonrol) Object.values(menu).forEach((r) => { hianyzo += 1 - (fedettseg[r.id] ?? 0); });
      const pont = Math.abs(kcal - celKcal)
        + Math.max(0, celFeherje - feherje) * 8
        + ismetles * 120
        + napiDupla * 500
        + hianyzo * 700;
      if (pont < legjobbPont) { legjobbPont = pont; legjobb = menu; }
    }
    Object.values(legjobb).forEach((r) => hasznalt.add(r.id));
    blokkok.push(legjobb);
  }

  // beírás a megjelenített hétbe
  const hetKulcs = datumKulcs(hetKezdete(hetOffset));
  etrend[hetKulcs] = etrend[hetKulcs] || {};
  for (let nap = 0; nap < 7; nap++) {
    const blokk = blokkok[Math.floor(nap / valtozas)];
    etrend[hetKulcs][nap] = etrend[hetKulcs][nap] || {};
    kivalasztott.forEach((etkezes) => { etrend[hetKulcs][nap][etkezes] = blokk[etkezes].id; });
  }
  store.set("plan", etrend);
  $("#generator-modal").close();
  rajzolEtrend();

  const elsoNap = blokkok[0];
  const napiKcal = Object.values(elsoNap).reduce((s, r) => s + r.tapertek.kcal, 0);
  const napiFeherje = Object.values(elsoNap).reduce((s, r) => s + (r.tapertek.feherje || 0), 0);
  toast(`✨ Kész! Az első napi menü: ${napiKcal} kcal, ${napiFeherje} g fehérje`);
});

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

// bolti termék-kategóriák a bevásárlólista csoportosításához
// (a sorrend számít: a specifikusabb kulcsszavú csoportok vannak elöl)
const TERMEK_CSOPORTOK = [
  ["🧂 Alapanyag, fűszer", ["só", "bors", "fűszer", "pirospaprika", "olaj", "ecet", "méz", "cukor", "édesítő", "mustár", "majonéz", "ketchup", "szója", "kakaó", "fehérjepor", "sütőpor", "vanília", "fahéj", "curry", "oregánó", "bazsalikom", "kakukkfű", "szezám", "dió", "mogyoró", "mandula", "chili", "kömény", "majoránna", "aroma", "keményítő", "csoki", "kókusz", "granulátum", "puding", "bor "]],
  ["🥩 Hús, felvágott", ["csirke", "pulyka", "sertés", "marha", "sonka", "kolbász", "darált", "hús", "szalámi", "bacon"]],
  ["🥛 Tejtermék, tojás", ["tej", "sajt", "túró", "joghurt", "skyr", "tejföl", "vaj", "mozzarella", "feta", "cheddar", "parmezán", "tojás", "quark", "krémsajt"]],
  ["🥬 Zöldség, gyümölcs", ["paradicsom", "uborka", "hagyma", "paprika", "cukkini", "burgonya", "krumpli", "saláta", "spenót", "retek", "zöldbab", "borsó", "káposzta", "padlizsán", "kukorica", "répa", "fokhagyma", "citrom", "lime", "alma", "banán", "eper", "málna", "barack", "ananász", "áfonya", "gyümölcs", "petrezselyem", "kapor", "snidling", "koriander", "gyömbér", "avokádó", "olívabogyó", "zöldség"]],
  ["🍞 Pékáru, gabona", ["liszt", "zab", "rizs", "tészta", "kenyér", "tortilla", "pita", "keksz", "spagetti", "bulgur", "rizspapír", "granola", "müzli"]]
];

function termekKategoria(nev) {
  const kis = nev.toLowerCase();
  for (const [cim, kulcsszavak] of TERMEK_CSOPORTOK) {
    if (kulcsszavak.some((k) => kis.includes(k))) return cim;
  }
  return "🛒 Egyéb";
}

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

  // hozzávalók összesítése termékenként (egységesített mértékegységgel),
  // majd bolti termék-kategóriák szerinti csoportosítás
  const ervenyesReceptek = Object.entries(darabszam)
    .filter(([id]) => bevEtelSzuro === null || id === bevEtelSzuro)
    .map(([id, db]) => ({ r: receptById(id), db }))
    .filter((cs) => cs.r);

  const osszesito = {};
  ervenyesReceptek.forEach(({ r, db }) => {
    (r.hozzavalok || []).forEach((h) => {
      const n = normalizalMennyiseg(h);
      const kulcs = n.nev.toLowerCase().trim() + "|" + (n.egyseg || "");
      if (!osszesito[kulcs]) osszesito[kulcs] = { nev: h.nev, egyseg: n.egyseg || "", osszeg: 0, szamszeru: n.mennyiseg != null, kozelito: false, receptek: [] };
      if (n.mennyiseg != null) osszesito[kulcs].osszeg += n.mennyiseg * db;
      osszesito[kulcs].kozelito = osszesito[kulcs].kozelito || n.kozelito;
      if (!osszesito[kulcs].receptek.includes(r.nev)) osszesito[kulcs].receptek.push(r.nev);
    });
  });

  const lista = $("#bevasarlo-lista");
  $("#bev-ures").classList.toggle("hidden", ervenyesReceptek.length > 0);

  const tetelSor = ([kulcs, t]) => {
    const tobbhoz = t.receptek.length > 1;
    const pipa = !!hetiPipak[kulcs];
    const menny = t.szamszeru ? `${t.kozelito ? "kb. " : ""}${+t.osszeg.toFixed(2)} ${t.egyseg}` : t.egyseg;
    return `
      <label class="bev-tetel ${pipa ? "kipipalva" : ""} ${tobbhoz ? "tobb-etel" : ""}">
        <input type="checkbox" data-kulcs="${esc(kulcs)}" ${pipa ? "checked" : ""}>
        <span class="tetel-torzs">
          <span class="nev">${esc(t.nev)}</span>
          <small class="honnan">🍽️ ${esc(t.receptek.join(" · "))}${tobbhoz ? ` — ${t.receptek.length} ételhez` : ""}</small>
        </span>
        <span class="mennyiseg">${esc(menny)}</span>
      </label>`;
  };

  lista.innerHTML = TERMEK_CSOPORTOK.map(([cim]) => cim).concat(["🛒 Egyéb"]).map((cim) => {
    const ide = Object.entries(osszesito)
      .filter(([, t]) => termekKategoria(t.nev) === cim)
      .sort((a, b) => a[1].nev.localeCompare(b[1].nev, "hu"));
    if (!ide.length) return "";
    return `<div class="bev-csoport"><h3>${esc(cim)}</h3>${ide.map(tetelSor).join("")}</div>`;
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
// KAMRA (készlet) — vonalkóddal vagy kézzel felvitt élelmiszerek
// ============================================================
function rajzolKamra() {
  const lista = $("#kamra-lista");
  $("#kamra-ures").classList.toggle("hidden", keszlet.length > 0);
  lista.innerHTML = keszlet.map((t) => `
    <div class="bev-tetel kamra-tetel">
      <span class="tetel-torzs">
        <span class="nev">${esc(t.nev)}</span>
        ${t.marka || t.tapertek100g ? `<small class="honnan">${esc(t.marka || "")}${t.marka && t.tapertek100g ? " · " : ""}${t.tapertek100g ? `🔥 ${esc(t.tapertek100g.kcal)} kcal/100g` : ""}</small>` : ""}
      </span>
      <button class="megsem" data-id="${esc(t.id)}" title="Törlés">✕</button>
    </div>`).join("");

  lista.querySelectorAll(".megsem").forEach((g) => {
    g.addEventListener("click", () => {
      keszlet = keszlet.filter((t) => t.id !== g.dataset.id);
      store.set("pantry", keszlet);
      rajzolKamra();
    });
  });
}

function kamraTetel(adatok) {
  keszlet.push({ id: "k" + Date.now() + Math.random().toString(36).slice(2, 6), ...adatok });
  store.set("pantry", keszlet);
  rajzolKamra();
}

async function vonalkodFeldolgozas(kod) {
  toast("🔍 Termék keresése…");
  try {
    const valasz = await fetch("https://world.openfoodfacts.org/api/v2/product/" + encodeURIComponent(kod) + ".json");
    if (!valasz.ok) throw new Error();
    const adat = await valasz.json();
    if (adat.status !== 1 || !adat.product) throw new Error();
    const p = adat.product;
    const n = p.nutriments || {};
    kamraTetel({
      nev: p.product_name_hu || p.product_name || "Ismeretlen termék",
      marka: p.brands || "",
      vonalkod: kod,
      tapertek100g: n["energy-kcal_100g"] ? {
        kcal: Math.round(n["energy-kcal_100g"]),
        feherje: Math.round(n.proteins_100g || 0),
        zsir: Math.round(n.fat_100g || 0),
        szenhidrat: Math.round(n.carbohydrates_100g || 0),
        cukor: Math.round(n.sugars_100g || 0)
      } : null
    });
    toast(`🥫 Hozzáadva: ${p.product_name_hu || p.product_name}`);
  } catch {
    toast("⚠️ Ezt a vonalkódot nem ismeri az adatbázis — írd be a termék nevét kézzel");
    $("#kamra-input").focus();
  }
}

function kamraBevitel() {
  const mezo = $("#kamra-input");
  const ertek = mezo.value.trim();
  if (!ertek) return;
  mezo.value = "";
  if (/^\d{8,14}$/.test(ertek)) { vonalkodFeldolgozas(ertek); return; }
  kamraTetel({ nev: ertek, marka: "", vonalkod: null, tapertek100g: null });
}

$("#kamra-hozzaad").addEventListener("click", kamraBevitel);
$("#kamra-input").addEventListener("keydown", (e) => { if (e.key === "Enter") kamraBevitel(); });

// kamerás vonalkód-olvasó (ZXing)
let kodOlvaso = null;

function zarVonalkodOlvaso() {
  if (kodOlvaso) { try { kodOlvaso.reset(); } catch { /* már leállt */ } kodOlvaso = null; }
  const modal = $("#vonalkod-modal");
  if (modal.open) modal.close();
}

$("#vonalkod-gomb").addEventListener("click", async () => {
  if (!window.ZXing) { toast("⚠️ A vonalkód-olvasó modul nem töltődött be"); return; }
  $("#vonalkod-modal").showModal();
  try {
    kodOlvaso = new ZXing.BrowserMultiFormatReader();
    const talalat = await kodOlvaso.decodeOnceFromConstraints(
      { video: { facingMode: "environment" } },
      "vonalkod-video"
    );
    zarVonalkodOlvaso();
    if (talalat) vonalkodFeldolgozas(talalat.getText());
  } catch (hiba) {
    zarVonalkodOlvaso();
    if (hiba && hiba.name === "NotAllowedError") toast("⚠️ Engedélyezd a kamerát a beolvasáshoz");
    else if (hiba && hiba.name !== "NotFoundException") toast("⚠️ Nem sikerült elindítani a kamerát — írd be a számot kézzel");
  }
});

$("#vonalkod-bezar").addEventListener("click", zarVonalkodOlvaso);
$("#vonalkod-modal").addEventListener("close", zarVonalkodOlvaso);

// egyszerű szó-egyezés a kamra-tétel és a recept-hozzávaló között
function szoEgyezes(a, b) {
  const tisztit = (sz) => sz.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-záéíóöőúüű ]/g, " ");
  const szavak = (sz) => tisztit(sz).split(/\s+/).filter((w) => w.length >= 4);
  const aSzavak = szavak(a), bSzavak = szavak(b);
  return aSzavak.some((x) => bSzavak.some((y) => x.includes(y) || y.includes(x)));
}

// ============================================================
// EXPORT / IMPORT
// ============================================================
$("#export-gomb").addEventListener("click", () => {
  const adat = {
    verzio: 1,
    exportalva: new Date().toISOString(),
    sajatReceptek, feluliras, rejtettek, etrend, pipak, keszlet
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
      keszlet = adat.keszlet || [];
      store.set("custom", sajatReceptek);
      store.set("overrides", feluliras);
      store.set("hidden", rejtettek);
      store.set("plan", etrend);
      store.set("checked", pipak);
      store.set("pantry", keszlet);
      rajzolReceptek(); rajzolEtrend(); rajzolBevasarlas();
      alert("Sikeres visszatöltés! ✅");
    } catch (hiba) {
      alert("Hibás mentésfájl: " + hiba.message);
    }
  };
  olvaso.readAsText(fajl);
  e.target.value = "";
});

// állandó kézi frissítés-gomb a fejlécben (cache-kerülő újratöltés)
$("#frissit-gomb").addEventListener("click", () => {
  location.href = location.pathname + "?frissites=" + Date.now();
});

// ---------- beállítások (Gemini-kulcs) — minden módban elérhető ----------
$("#beallitas-gomb").classList.remove("hidden");

$("#beallitas-gomb").addEventListener("click", () => {
  $("#gemini-kulcs-input").value = localStorage.getItem("receptapp.gemini_kulcs") || "";
  $("#beallitas-modal").showModal();
});
$("#gemini-kulcs-mentes").addEventListener("click", () => {
  const kulcs = $("#gemini-kulcs-input").value.trim();
  if (kulcs) localStorage.setItem("receptapp.gemini_kulcs", kulcs);
  $("#beallitas-modal").close();
  toast(kulcs ? "✅ Kulcs elmentve — a receptkérés mostantól azonnali!" : "ℹ️ Nincs kulcs mentve");
});
$("#gemini-kulcs-torles").addEventListener("click", () => {
  localStorage.removeItem("receptapp.gemini_kulcs");
  $("#gemini-kulcs-input").value = "";
  $("#beallitas-modal").close();
  toast("🗑️ Kulcs törölve");
});
$("#gemini-kulcs-teszt").addEventListener("click", async () => {
  const kulcs = $("#gemini-kulcs-input").value.trim();
  if (!kulcs) { toast("⚠️ Előbb illeszd be a kulcsot"); return; }
  localStorage.setItem("receptapp.gemini_kulcs", kulcs); // a teszthez elmentjük
  const ered = $("#gemini-teszt-eredmeny");
  ered.className = "teszt-eredmeny";
  ered.textContent = "⏳ Tesztelés…";
  try {
    await geminiHivas([{ text: 'Adj vissza pontosan ennyit JSON-ként: {"nev":"teszt","kategoria":"egyéb","adag":1,"ido_perc":1,"hozzavalok":[],"lepesek":[],"tapertek":{"kcal":1,"feherje":1,"zsir":1,"szenhidrat":1,"cukor":1}}' }]);
    ered.textContent = "✅ Működik! A kulcs jó, a receptkérés mostantól azonnali.";
    ered.classList.add("ok");
  } catch {
    ered.textContent = "❌ Hiba: " + (window.geminiUtolsoHiba || "ismeretlen");
    ered.classList.add("hiba");
  }
});

// ---------- publikus mód: üdvözlő ----------
if (PUBLIKUS) {
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
  const vanHelyiAdat = sajatReceptek.length || rejtettek.length || keszlet.length ||
    Object.keys(feluliras).length || Object.keys(etrend).length || Object.keys(pipak).length;
  if (!allapotModositva && vanHelyiAdat) {
    allapotModositva = Date.now();
    store.set("modositva", allapotModositva, false);
    feltoltAllapot();
  }
  szinkronEllenorzes();
}
