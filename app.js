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
  set(kulcs, ertek) {
    localStorage.setItem("receptapp." + kulcs, JSON.stringify(ertek));
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
        <span>👤 ${esc(r.adag)} adag</span>
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
// Ha az app statikus tárhelyen fut (pl. GitHub Pages), a linkek egy
// Google Apps Script várólistába kerülnek — ezt az URL-t Claude tölti ki.
const KULSO_VAROLISTA_URL = "https://script.google.com/macros/s/AKfycbyFCPuEMVSOJlYwdecTIHVT9_Xs6M7AyXBP-RFJ9uhnfA-58AnauG-2RZvzEGMkD1i9/exec";

function toast(uzenet) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = uzenet;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

function rajzolVarolista(lista, kulso) {
  $("#varolista").innerHTML = lista.map((t) => `
    <div class="varo-tetel">
      <span>⏳ Feldolgozásra vár:</span>
      <span class="url">${esc(t.url)}</span>
      ${kulso ? "" : `<button class="megsem" data-url="${esc(t.url)}" title="Mégse">✕</button>`}
    </div>`).join("");

  document.querySelectorAll(".varo-tetel .megsem").forEach((g) => {
    g.addEventListener("click", async () => {
      const valasz = await fetch("api/link-torles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: g.dataset.url })
      });
      rajzolVarolista(await valasz.json());
    });
  });
}

async function linkBekuldes() {
  const mezo = $("#link-input");
  const url = mezo.value.trim();
  if (!url) return;
  if (!/^https?:\/\//i.test(url)) { toast("⚠️ Ez nem tűnik linknek"); return; }
  try {
    if (vanLinkApi) {
      const valasz = await fetch("api/link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      if (!valasz.ok) throw new Error();
      rajzolVarolista(await valasz.json());
    } else {
      const valasz = await fetch(KULSO_VAROLISTA_URL + "?uj=" + encodeURIComponent(url));
      if (!valasz.ok) throw new Error();
      rajzolVarolista(await valasz.json(), true);
    }
    mezo.value = "";
    toast("🎬 Link a várólistán — hamarosan recept lesz belőle!");
  } catch {
    toast("⚠️ Nem sikerült elmenteni a linket");
  }
}

$("#link-gomb").addEventListener("click", linkBekuldes);
$("#link-input").addEventListener("keydown", (e) => { if (e.key === "Enter") linkBekuldes(); });

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
      rajzolVarolista(await valasz.json());
    } catch {
      vanLinkApi = false;
      $("#varolista").innerHTML = "";
      // külső várólista híján a beillesztő sávnak nincs értelme szerver nélkül
      if (!KULSO_VAROLISTA_URL) document.querySelector(".link-sav").classList.add("hidden");
    }
  } else if (KULSO_VAROLISTA_URL && tikk % 4 === 1) {
    // a külső várólistát ritkábban kérdezzük (kb. félpercenként)
    try {
      const valasz = await fetch(KULSO_VAROLISTA_URL);
      if (valasz.ok) rajzolVarolista(await valasz.json(), true);
    } catch { /* átmeneti hiba — kihagyjuk */ }
  }
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
function nyitReszletek(id) {
  const r = receptById(id);
  if (!r) return;
  nyitottReceptId = id;

  $("#modal-nev").textContent = r.nev;
  $("#modal-meta").innerHTML = `
    <span class="cimke">${esc(r.kategoria)}</span>
    <span>⏱️ ${esc(r.ido_perc)} perc</span>
    <span>👤 ${esc(r.adag)} adag</span>`;
  $("#modal-hozzavalok").innerHTML = (r.hozzavalok || [])
    .map((h) => `<li><strong>${esc(mennyisegSzoveg(h))}</strong> ${esc(h.nev)}</li>`).join("");
  $("#modal-lepesek").innerHTML = (r.lepesek || []).map((l) => `<li>${esc(l)}</li>`).join("");

  const megj = $("#modal-megjegyzes");
  megj.textContent = r.megjegyzes ? "💡 " + r.megjegyzes : "";
  megj.classList.toggle("hidden", !r.megjegyzes);

  const forras = $("#modal-forras");
  forras.innerHTML = r.forras
    ? `🎬 <a href="${esc(r.forras)}" target="_blank" rel="noopener">Eredeti videó megnyitása</a>` : "";

  $("#recept-modal").showModal();
}

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
function rajzolBevasarlas() {
  $("#bev-het-cimke").textContent = hetCimke(hetOffset);
  const hetKulcs = datumKulcs(hetKezdete(hetOffset));
  const hetiTerv = etrend[hetKulcs] || {};
  const hetiPipak = pipak[hetKulcs] || {};

  // hányszor szerepel egy recept a héten
  const darabszam = {};
  Object.values(hetiTerv).forEach((napTerv) => {
    Object.values(napTerv).forEach((id) => { darabszam[id] = (darabszam[id] || 0) + 1; });
  });

  // hozzávalók összesítése: kulcs = név (kisbetűs) + egység
  const osszesito = {};
  Object.entries(darabszam).forEach(([id, db]) => {
    const r = receptById(id);
    if (!r) return;
    (r.hozzavalok || []).forEach((h) => {
      const kulcs = h.nev.toLowerCase().trim() + "|" + (h.egyseg || "");
      if (!osszesito[kulcs]) osszesito[kulcs] = { nev: h.nev, egyseg: h.egyseg || "", osszeg: 0, szamszeru: h.mennyiseg != null };
      if (h.mennyiseg != null) osszesito[kulcs].osszeg += h.mennyiseg * db;
    });
  });

  const tetelek = Object.entries(osszesito).sort((a, b) => a[1].nev.localeCompare(b[1].nev, "hu"));
  const lista = $("#bevasarlo-lista");
  $("#bev-ures").classList.toggle("hidden", tetelek.length > 0);

  lista.innerHTML = tetelek.map(([kulcs, t]) => {
    const pipa = !!hetiPipak[kulcs];
    const menny = t.szamszeru ? `${+t.osszeg.toFixed(2)} ${t.egyseg}` : t.egyseg;
    return `
      <label class="bev-tetel ${pipa ? "kipipalva" : ""}">
        <input type="checkbox" data-kulcs="${esc(kulcs)}" ${pipa ? "checked" : ""}>
        <span>${esc(t.nev)}</span>
        <span class="mennyiseg">${esc(menny)}</span>
      </label>`;
  }).join("");

  lista.querySelectorAll("input[type=checkbox]").forEach((cb) => {
    cb.addEventListener("change", () => {
      pipak[hetKulcs] = pipak[hetKulcs] || {};
      if (cb.checked) pipak[hetKulcs][cb.dataset.kulcs] = true;
      else delete pipak[hetKulcs][cb.dataset.kulcs];
      store.set("checked", pipak);
      cb.closest(".bev-tetel").classList.toggle("kipipalva", cb.checked);
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

// ---------- indulás ----------
rajzolReceptek();
