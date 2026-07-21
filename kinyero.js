// ============================================================
// KLIENS-OLDALI RECEPT-KINYERŐ (csak publikus módban aktív)
//  - TikTok oEmbed: a videó címe/leírása közvetlenül a böngészőből
//  - Gemini API (a látogató SAJÁT, ingyenes kulcsával): a szövegből
//    vagy fotóból strukturált recept
//  - kulcs nélkül: előtöltött űrlap, kézi rendezés
// A kulcs csak a böngésző localStorage-ában él, sehova nem küldjük
// a Google Gemini végpontján kívül.
// ============================================================

function geminiKulcs() {
  try { return localStorage.getItem("receptapp.gemini_kulcs") || ""; } catch { return ""; }
}

async function oembedLekeres(url) {
  const valasz = await fetch("https://www.tiktok.com/oembed?url=" + encodeURIComponent(url));
  if (!valasz.ok) throw new Error("oembed");
  const adat = await valasz.json();
  return { cim: adat.title || "", szerzo: adat.author_name || "" };
}

const GEMINI_RECEPT_UTASITAS = `Magyar receptes alkalmazás asszisztense vagy. A kapott szövegből (vagy képről) készíts strukturált receptet, és KIZÁRÓLAG ezt a JSON objektumot add vissza:
{
  "nev": "a recept neve magyarul",
  "kategoria": "reggeli" | "ebéd" | "vacsora" | "desszert" | "egyéb",
  "adag": szám,
  "ido_perc": szám (becsült elkészítési idő percben),
  "hozzavalok": [{ "nev": "...", "mennyiseg": szám vagy null, "egyseg": "g/ml/db/ek/tk/..." }],
  "lepesek": ["...", "..."],
  "megjegyzes": "hasznos tippek, vagy üres string",
  "tapertek": { "kcal": szám, "feherje": szám, "zsir": szám, "szenhidrat": szám, "cukor": szám }
}
Szabályok: minden szöveg magyarul; nem mérhető hozzávalónál mennyiseg: null és egyseg: "ízlés szerint"; a tapertek MINDIG 1 adagra vonatkozik, egészre kerekítve — ha a forrás megadja, azt használd, különben becsüld a hozzávalókból; ha a szövegben nincs értelmezhető recept, adj vissza {"hiba": "nincs recept"} objektumot.`;

// az utolsó Gemini-hiba részletei (a Beállításokban megjeleníthető)
window.geminiUtolsoHiba = "";

async function geminiHivas(reszek) {
  const kulcs = geminiKulcs();
  if (!kulcs) { window.geminiUtolsoHiba = "Nincs API-kulcs megadva."; throw new Error("nincs-kulcs"); }

  let valasz;
  try {
    valasz = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=" + encodeURIComponent(kulcs),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: reszek }],
          generationConfig: { responseMimeType: "application/json", temperature: 0.3 }
        })
      }
    );
  } catch (halozat) {
    window.geminiUtolsoHiba = "Hálózati hiba a Gemini elérésekor.";
    throw halozat;
  }

  if (!valasz.ok) {
    let reszlet = "";
    try { reszlet = (await valasz.json())?.error?.message || ""; } catch { /* nincs json */ }
    window.geminiUtolsoHiba = `HTTP ${valasz.status}: ${reszlet || "ismeretlen hiba"}`;
    throw new Error("gemini-" + valasz.status);
  }

  const adat = await valasz.json();
  let szoveg = adat?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!szoveg) {
    window.geminiUtolsoHiba = "A Gemini üres választ adott (lehet, hogy a tartalom-szűrő blokkolta).";
    throw new Error("gemini-ures");
  }
  // ha markdown-kerettel jönne (```json ... ```), levágjuk
  szoveg = szoveg.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  try {
    window.geminiUtolsoHiba = "";
    return JSON.parse(szoveg);
  } catch {
    window.geminiUtolsoHiba = "A válasz nem volt értelmezhető JSON.";
    throw new Error("gemini-json");
  }
}

function receptbolBejegyzes(nyers, forras) {
  if (!nyers || nyers.hiba || !nyers.nev) return null;
  const ervenyesKategoria = ["reggeli", "ebéd", "vacsora", "desszert", "egyéb"];
  return {
    id: nyers.nev.toLowerCase().replace(/[^a-z0-9áéíóöőúüű]+/gi, "-") + "-" + Date.now(),
    nev: String(nyers.nev),
    forras: forras || null,
    kategoria: ervenyesKategoria.includes(nyers.kategoria) ? nyers.kategoria : "egyéb",
    adag: parseInt(nyers.adag, 10) || 2,
    ido_perc: parseInt(nyers.ido_perc, 10) || 30,
    hozzavalok: Array.isArray(nyers.hozzavalok)
      ? nyers.hozzavalok.map((h) => ({
          nev: String(h.nev || ""),
          mennyiseg: h.mennyiseg == null ? null : Number(h.mennyiseg),
          egyseg: String(h.egyseg || "")
        })).filter((h) => h.nev)
      : [],
    lepesek: Array.isArray(nyers.lepesek) ? nyers.lepesek.map(String) : [],
    megjegyzes: String(nyers.megjegyzes || ""),
    tapertek: nyers.tapertek && nyers.tapertek.kcal
      ? {
          kcal: Math.round(nyers.tapertek.kcal),
          feherje: Math.round(nyers.tapertek.feherje || 0),
          zsir: Math.round(nyers.tapertek.zsir || 0),
          szenhidrat: Math.round(nyers.tapertek.szenhidrat || 0),
          cukor: Math.round(nyers.tapertek.cukor || 0)
        }
      : undefined,
    hozzaadva: datumKulcs(new Date())
  };
}

function mentesEsMutatas(recept) {
  sajatReceptek.push(recept);
  store.set("custom", sajatReceptek);
  rajzolReceptek();
  toast(`🎉 Új recept: ${recept.nev}`);
}

// űrlap előtöltése, ha nincs kulcs (vagy a Gemini nem boldogult vele)
function elotoltottUrlap(cim, leiras, forras) {
  nyitSzerkeszto(null);
  const form = $("#recept-form");
  form.nev.value = (cim || "").slice(0, 80);
  form.forras.value = forras || "";
  form.lepesek.value = leiras || "";
  toast("✏️ A videó szövegét betöltöttem — rendezd át, és mentsd el!");
}

async function publikusLinkFeldolgozas(url) {
  if (!/tiktok\.com/i.test(url)) {
    toast("ℹ️ Automatikusan egyelőre TikTok-linkek mennek — más forrást fotóval vagy kézzel vehetsz fel.");
    return;
  }
  toast("🔍 Videó beolvasása…");
  let cim = "", szerzo = "";
  try {
    const oe = await oembedLekeres(url);
    cim = oe.cim; szerzo = oe.szerzo;
  } catch {
    toast("⚠️ Nem sikerült elérni a videót — ellenőrizd a linket");
    return;
  }

  if (!geminiKulcs()) {
    elotoltottUrlap(cim.split("#")[0].trim(), cim, url);
    return;
  }

  toast("🤖 Recept készítése…");
  try {
    const nyers = await geminiHivas([{ text: GEMINI_RECEPT_UTASITAS + "\n\nA videó szövege (készítő: " + szerzo + "):\n" + cim }]);
    const recept = receptbolBejegyzes(nyers, url);
    if (!recept) { elotoltottUrlap(cim.split("#")[0].trim(), cim, url); return; }
    mentesEsMutatas(recept);
  } catch {
    toast("⚠️ A Gemini-hívás nem sikerült — ellenőrizd a kulcsot a ⚙️ Beállításokban");
    elotoltottUrlap(cim.split("#")[0].trim(), cim, url);
  }
}

async function publikusKepFeldolgozas(fajl) {
  if (!geminiKulcs()) { toast("⚠️ A fotó-felismeréshez Gemini-kulcs kell (⚙️ Beállítások)"); return; }
  toast("🤖 Kép elemzése…");
  try {
    const adat = await kepBase64(fajl);
    const nyers = await geminiHivas([
      { text: GEMINI_RECEPT_UTASITAS + "\n\nA recept a csatolt képen látható." },
      { inline_data: { mime_type: "image/jpeg", data: adat } }
    ]);
    const recept = receptbolBejegyzes(nyers, null);
    if (!recept) { toast("⚠️ Nem találtam receptet a képen"); return; }
    recept.megjegyzes = (recept.megjegyzes ? recept.megjegyzes + " " : "") + "Fotóból mentett recept.";
    mentesEsMutatas(recept);
  } catch {
    toast("⚠️ A kép elemzése nem sikerült — ellenőrizd a kulcsot a ⚙️ Beállításokban");
  }
}
