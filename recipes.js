// ============================================================
// RECEPTGYŰJTEMÉNY
// Ezt a fájlt Claude bővíti, amikor új TikTok linket dobsz be.
// Minden recept egy objektum a lenti mezőkkel.
// ============================================================
window.RECIPES = [
  {
    id: "banan-zabkasa-minta",
    nev: "Banános-fahéjas zabkása",
    forras: null, // minta recept, nincs videó
    kategoria: "reggeli",
    adag: 2,
    ido_perc: 10,
    hozzavalok: [
      { nev: "zabpehely", mennyiseg: 100, egyseg: "g" },
      { nev: "tej", mennyiseg: 400, egyseg: "ml" },
      { nev: "banán", mennyiseg: 1, egyseg: "db" },
      { nev: "méz", mennyiseg: 2, egyseg: "ek" },
      { nev: "fahéj", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A zabpelyhet a tejjel felforraljuk, majd alacsony lángon 5 percig kevergetve főzzük.",
      "A banánt karikákra vágjuk, a felét belekeverjük a kásába.",
      "Tálaláskor a maradék banánnal, mézzel és fahéjjal megszórjuk."
    ],
    megjegyzes: "Növényi tejjel is működik. Este beáztatva overnight oats is lehet belőle.",
    tapertek: { kcal: 413, feherje: 14, zsir: 9, szenhidrat: 66, cukor: 30 },
    hozzaadva: "2026-07-16"
  },
  {
    id: "bolognai-spagetti-minta",
    nev: "Bolognai spagetti",
    forras: null,
    kategoria: "ebéd",
    adag: 4,
    ido_perc: 45,
    hozzavalok: [
      { nev: "spagetti", mennyiseg: 400, egyseg: "g" },
      { nev: "darált marhahús", mennyiseg: 500, egyseg: "g" },
      { nev: "vöröshagyma", mennyiseg: 1, egyseg: "db" },
      { nev: "fokhagyma", mennyiseg: 3, egyseg: "gerezd" },
      { nev: "sárgarépa", mennyiseg: 1, egyseg: "db" },
      { nev: "hámozott paradicsom (konzerv)", mennyiseg: 800, egyseg: "g" },
      { nev: "olívaolaj", mennyiseg: 2, egyseg: "ek" },
      { nev: "parmezán", mennyiseg: 50, egyseg: "g" },
      { nev: "só, bors, oregánó", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A hagymát, fokhagymát és répát apróra vágjuk, olívaolajon megfonnyasztjuk.",
      "Hozzáadjuk a darált húst, fehéredésig pirítjuk.",
      "Beletesszük a paradicsomot, fűszerezzük, és fedő alatt 30 percig rotyogtatjuk.",
      "Közben a spagettit sós vízben al dentére főzzük.",
      "A tésztát a szósszal összeforgatjuk, parmezánnal tálaljuk."
    ],
    megjegyzes: "A szósz fagyasztható, érdemes duplát főzni.",
    tapertek: { kcal: 790, feherje: 41, zsir: 29, szenhidrat: 81, cukor: 10 },
    hozzaadva: "2026-07-16"
  },
  {
    id: "rakott-krumpli-minta",
    nev: "Rakott krumpli",
    forras: null,
    kategoria: "vacsora",
    adag: 4,
    ido_perc: 75,
    hozzavalok: [
      { nev: "burgonya", mennyiseg: 1, egyseg: "kg" },
      { nev: "tojás", mennyiseg: 6, egyseg: "db" },
      { nev: "kolbász", mennyiseg: 250, egyseg: "g" },
      { nev: "tejföl", mennyiseg: 400, egyseg: "g" },
      { nev: "vaj", mennyiseg: 20, egyseg: "g" },
      { nev: "só, bors, pirospaprika", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A burgonyát héjában megfőzzük, a tojásokat keményre főzzük, majd mindkettőt karikákra vágjuk.",
      "A kolbászt felkarikázzuk.",
      "Kivajazott tepsibe rétegezzük: krumpli, tojás, kolbász, tejföl — a tetejére krumpli és tejföl kerüljön.",
      "180 fokos sütőben 30-35 perc alatt összesütjük."
    ],
    megjegyzes: "Minta recept — az első TikTok videód receptje ide kerül majd.",
    tapertek: { kcal: 750, feherje: 27, zsir: 50, szenhidrat: 47, cukor: 5 },
    hozzaadva: "2026-07-16"
  },
  {
    id: "big-mac-tesztasalata-2026-07-16",
    nev: "Big Mac tésztasaláta",
    forras: "https://vm.tiktok.com/ZNRowVgjy/",
    kategoria: "ebéd",
    adag: 2,
    ido_perc: 45,
    hozzavalok: [
      { nev: "száraz tészta", mennyiseg: 100, egyseg: "g" },
      { nev: "darált marhahús (só, bors, fokhagymapor)", mennyiseg: 250, egyseg: "g" },
      { nev: "cheddar sajt (kockázva vagy reszelve)", mennyiseg: 30, egyseg: "g" },
      { nev: "natúr joghurt", mennyiseg: 100, egyseg: "g" },
      { nev: "majonéz", mennyiseg: 15, egyseg: "g" },
      { nev: "mustár", mennyiseg: 1, egyseg: "tk" },
      { nev: "ketchup (elhagyható)", mennyiseg: 1, egyseg: "tk" },
      { nev: "csemegeuborka leve", mennyiseg: 2, egyseg: "tk" },
      { nev: "csemegeuborka (apróra vágva)", mennyiseg: 3, egyseg: "db" },
      { nev: "koktélparadicsom", mennyiseg: 5, egyseg: "db" },
      { nev: "vöröshagyma (finomra vágva)", mennyiseg: 40, egyseg: "g" },
      { nev: "jégsaláta (csíkokra vágva)", mennyiseg: 70, egyseg: "g" },
      { nev: "hagymapor, fokhagymapor, pirospaprika, só, bors", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Főzd meg a tésztát, majd hűtsd le.",
      "Pirítsd meg a darált húst, és ezt is hagyd kihűlni.",
      "Keverd össze a joghurtot, majonézt, mustárt, ketchupot, uborkalevet és a fűszereket.",
      "Add hozzá az uborkát, hagymát és a sajtot.",
      "Forgasd össze a tésztával, a hússal és a zöldségekkel.",
      "Tedd hűtőbe 30 percre, hogy összeérjenek az ízek."
    ],
    megjegyzes: "Magas fehérjetartalmú; 5%-os zsírtartalmú hússal a teljes adag kb. 1050 kcal. Teljes recept: citrompor.hu",
    tapertek: { kcal: 525, feherje: 37, zsir: 20, szenhidrat: 43, cukor: 5 },
    hozzaadva: "2026-07-16"
  },
  {
    id: "serteshus-burgonyaval-2026-07-16",
    nev: "Sertéshús burgonyával és zöldségekkel",
    forras: "https://vm.tiktok.com/ZNRowHyxD/",
    kategoria: "vacsora",
    adag: 2,
    ido_perc: 40,
    hozzavalok: [
      { nev: "sertéshús (a páchoz)", mennyiseg: 350, egyseg: "g" },
      { nev: "burgonya", mennyiseg: 2, egyseg: "db" },
      { nev: "sárgarépa", mennyiseg: 0.25, egyseg: "db" },
      { nev: "kaliforniai paprika", mennyiseg: 0.5, egyseg: "db" },
      { nev: "vöröshagyma", mennyiseg: 0.5, egyseg: "db" },
      { nev: "fokhagyma", mennyiseg: 1, egyseg: "gerezd" },
      { nev: "növényi olaj (bő olajos sütéshez)", mennyiseg: 0.8, egyseg: "l" },
      { nev: "só (pác)", mennyiseg: 0.5, egyseg: "tk" },
      { nev: "bor (pác)", mennyiseg: 2, egyseg: "tk" },
      { nev: "világos szójaszósz (pác)", mennyiseg: 2, egyseg: "tk" },
      { nev: "kukoricakeményítő (pác)", mennyiseg: 1, egyseg: "tk" },
      { nev: "növényi olaj (pác)", mennyiseg: 3, egyseg: "tk" },
      { nev: "víz (szósz)", mennyiseg: 150, egyseg: "ml" },
      { nev: "világos szójaszósz (szósz)", mennyiseg: 2, egyseg: "tk" },
      { nev: "sötét szójaszósz (szósz)", mennyiseg: 1, egyseg: "tk" },
      { nev: "só (szósz)", mennyiseg: 0.5, egyseg: "tk" },
      { nev: "cukor (szósz)", mennyiseg: 1, egyseg: "tk" },
      { nev: "kukoricakeményítő (sűrítéshez)", mennyiseg: 2, egyseg: "tk" },
      { nev: "hideg víz (sűrítéshez)", mennyiseg: 50, egyseg: "ml" }
    ],
    lepesek: [
      "A csíkokra vágott sertéshúst keverd össze a pác hozzávalóival (só, bor, világos szójaszósz, keményítő, olaj), és hagyd állni, míg a többit előkészíted.",
      "A burgonyát vágd hasábokra, és bő olajban süsd aranybarnára, majd csepegtesd le.",
      "Kevés olajon pirítsd meg a felszeletelt hagymát, fokhagymát, répát és paprikát.",
      "Add hozzá a bepácolt húst, és nagy lángon süsd készre.",
      "Öntsd fel a szósszal (víz, szójaszószok, só, cukor), forrald össze.",
      "A keményítőt keverd el a hideg vízzel, ezzel sűrítsd be a szószt, végül forgasd bele a sült burgonyát."
    ],
    megjegyzes: "Kínai jellegű wokos étel — a pontos mozdulatok a videóban (2 perces, érdemes megnézni). A tápérték becslés, a bő olajos sütés miatt bizonytalanabb.",
    tapertek: { kcal: 660, feherje: 39, zsir: 37, szenhidrat: 45, cukor: 5 },
    hozzaadva: "2026-07-16"
  },
  {
    id: "dietas-langos-2026-07-16",
    nev: "Diétás lángos (légkeveréses)",
    forras: "https://vm.tiktok.com/ZNRow4x1a/",
    kategoria: "egyéb",
    adag: 6,
    ido_perc: 25,
    hozzavalok: [
      { nev: "zsírszegény túró (vagy quark)", mennyiseg: 500, egyseg: "g" },
      { nev: "tojás (közepes)", mennyiseg: 4, egyseg: "db" },
      { nev: "zabliszt", mennyiseg: 100, egyseg: "g" },
      { nev: "só", mennyiseg: 1, egyseg: "kk" },
      { nev: "sütőpor", mennyiseg: 0.5, egyseg: "csomag" },
      { nev: "fokhagymakrém (a tetejére)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "olívaolaj (a tetejére)", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A túrót, tojásokat, zablisztet, sót és sütőport keverd csomómentes tésztává.",
      "Formázz belőle kb. 10-11 cm átmérőjű lángosokat.",
      "Légkeveréses sütőben 180 fokon 17 perc alatt süsd készre.",
      "Tálaláskor kend meg fokhagymakrémmel, és csepegtess rá olívaolajat."
    ],
    megjegyzes: "Makrók 1 db-ban a videó szerint: 190 kcal, 8,9 g szénhidrát, 13,8 g fehérje, 10,8 g zsír. 1 adag = 1 db lángos.",
    tapertek: { kcal: 190, feherje: 14, zsir: 11, szenhidrat: 9, cukor: 3 },
    hozzaadva: "2026-07-16"
  },
  {
    id: "palacsinta-alaprecept-2026-07-17",
    nev: "Palacsinta alaprecept",
    forras: null,
    kategoria: "desszert",
    adag: 4,
    ido_perc: 40,
    hozzavalok: [
      { nev: "finomliszt", mennyiseg: 250, egyseg: "g" },
      { nev: "tojás", mennyiseg: 2, egyseg: "db" },
      { nev: "tej", mennyiseg: 500, egyseg: "ml" },
      { nev: "cukor", mennyiseg: 1, egyseg: "ek" },
      { nev: "só", mennyiseg: null, egyseg: "csipet" },
      { nev: "olaj (a sütéshez)", mennyiseg: 2, egyseg: "ek" }
    ],
    lepesek: [
      "Keverd csomómentesre a lisztet a tojással és a tej felével.",
      "Add hozzá a maradék tejet, a cukrot és a sót.",
      "Pihentesd 20 percet.",
      "Kiolajozott palacsintasütőben mindkét oldalát süsd aranybarnára."
    ],
    megjegyzes: "Fotóból mentett recept. Kb. 12 db palacsinta, 1 adag = 3 db.",
    tapertek: { kcal: 404, feherje: 14, zsir: 13, szenhidrat: 55, cukor: 9 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "cukkinis-sajtos-tekercs-2026-07-17",
    nev: "Cukkinis-sajtos tekercs sonkával",
    forras: "https://vm.tiktok.com/ZNRoow2jv/",
    kategoria: "vacsora",
    adag: 2,
    ido_perc: 40,
    hozzavalok: [
      { nev: "reszelt sajt (trappista vagy mozzarella)", mennyiseg: 250, egyseg: "g" },
      { nev: "cukkini (vékony karikára vágva)", mennyiseg: 2, egyseg: "db" },
      { nev: "sonkaszelet (a töltelékhez)", mennyiseg: 100, egyseg: "g" },
      { nev: "salátalevél (a töltelékhez)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "só, bors, fokhagymapor", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Sütőpapírral bélelt tepsire terítsd el egyenletesen a reszelt sajt nagyját.",
      "Rakd rá egymást fedve a vékony cukkini-karikákat, fűszerezd, majd szórd meg a maradék sajttal.",
      "200 fokos sütőben kb. 20-25 perc alatt süsd aranybarnára, míg a sajt széle ropogós lesz.",
      "Hagyd pár percig hűlni, majd óvatosan húzd le a sütőpapírról.",
      "Terítsd rá a sonkaszeleteket és a salátát, majd szorosan tekerd fel.",
      "Vágd ketté, és melegen vagy hidegen tálald."
    ],
    megjegyzes: "A videó képkockái alapján, a mennyiségek becsültek — igazítsd a tepsid méretéhez. Szénhidrátszegény wrap-alternatíva.",
    tapertek: { kcal: 560, feherje: 43, zsir: 40, szenhidrat: 9, cukor: 5 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "high-protein-donertal-2026-07-17",
    nev: "High-protein dönertál",
    forras: "https://vm.tiktok.com/ZNRooqasx/",
    kategoria: "ebéd",
    adag: 1,
    ido_perc: 30,
    hozzavalok: [
      { nev: "burgonya", mennyiseg: 200, egyseg: "g" },
      { nev: "csirkemell", mennyiseg: 150, egyseg: "g" },
      { nev: "kígyóuborka", mennyiseg: 100, egyseg: "g" },
      { nev: "paradicsom", mennyiseg: 100, egyseg: "g" },
      { nev: "lilahagyma", mennyiseg: 0.5, egyseg: "db" },
      { nev: "káposztasaláta", mennyiseg: 50, egyseg: "g" },
      { nev: "kukorica (elhagyható)", mennyiseg: 50, egyseg: "g" },
      { nev: "pita vagy kenyér (elhagyható)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "skyr (a szószhoz)", mennyiseg: 150, egyseg: "g" },
      { nev: "fritesszósz (a szószhoz)", mennyiseg: 1, egyseg: "tk" },
      { nev: "citromlé és reszelt citromhéj (a szószhoz)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "fokhagyma (a szószhoz)", mennyiseg: 1, egyseg: "gerezd" },
      { nev: "só, bors, pirospaprika", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A burgonyát fűszerezd, és airfryerben 190 fokon kb. 20 perc alatt süsd ropogósra.",
      "A csirkemellet vágd csíkokra, fűszerezd pirospaprikával, sóval, borssal, fokhagymával, és serpenyőben süsd szaftosra.",
      "Keverd ki a szószt: skyr, fritesszósz, citromlé és -héj, zúzott fokhagyma, só, bors (mehet bele zöldfűszer vagy chili is).",
      "A zöldségeket vágd fel, és tálald rétegezve: alulra saláta és burgonya, rá a csirke, tetejére a skyros dönerszósz."
    ],
    megjegyzes: "A videó szerint 1 adag: 640 kcal és 55 g fehérje — edzés utánra tökéletes. Németből fordítva.",
    tapertek: { kcal: 640, feherje: 55, zsir: 10, szenhidrat: 60, cukor: 12 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "barackos-turos-suti-2026-07-17",
    nev: "Barackos-túrós süti (cukormentes)",
    forras: "https://vm.tiktok.com/ZN811LfQ2/",
    kategoria: "desszert",
    adag: 6,
    ido_perc: 40,
    hozzavalok: [
      { nev: "túró (quark)", mennyiseg: 200, egyseg: "g" },
      { nev: "tojás", mennyiseg: 2, egyseg: "db" },
      { nev: "zabliszt", mennyiseg: 100, egyseg: "g" },
      { nev: "olívaolaj", mennyiseg: 25, egyseg: "g" },
      { nev: "édesítő", mennyiseg: 25, egyseg: "g" },
      { nev: "vanília aroma", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "sárgabarack", mennyiseg: 250, egyseg: "g" }
    ],
    lepesek: [
      "A túrót, tojásokat, zablisztet, olívaolajat, édesítőt és a vanília aromát keverd sima tésztává.",
      "Simítsd sütőpapírral bélelt kisebb formába.",
      "A sárgabarackokat magozd ki, vágd cikkekre, és nyomkodd a tészta tetejébe.",
      "180 fokos sütőben kb. 30 perc alatt süsd készre (tűpróbáig)."
    ],
    megjegyzes: "Cukormentes. A hozzávalók a videó leírásából; a lépések a videó alapján rekonstruálva — a sütési időt a formád méretéhez igazítsd.",
    tapertek: { kcal: 165, feherje: 8, zsir: 7, szenhidrat: 15, cukor: 5 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "burgonyas-salatatal-csirkevel-2026-07-17",
    nev: "Ropogós burgonyás salátatál fűszeres csirkével",
    forras: "https://vm.tiktok.com/ZN8115ouS/",
    kategoria: "vacsora",
    adag: 2,
    ido_perc: 45,
    hozzavalok: [
      { nev: "apró burgonya", mennyiseg: 8, egyseg: "db" },
      { nev: "csirkemellfilé", mennyiseg: 1, egyseg: "db" },
      { nev: "majonéz (a csirkéhez)", mennyiseg: 1.5, egyseg: "ek" },
      { nev: "mustár (a csirkéhez)", mennyiseg: 1, egyseg: "tk" },
      { nev: "fokhagyma granulátum", mennyiseg: 1, egyseg: "tk" },
      { nev: "vöröshagyma granulátum", mennyiseg: 1, egyseg: "tk" },
      { nev: "fűszerpaprika", mennyiseg: 1, egyseg: "tk" },
      { nev: "olaj (a pácba)", mennyiseg: 1, egyseg: "ek" },
      { nev: "vaj és olaj (a sütéshez)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "olajspray", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "jégsaláta", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "kígyóuborka", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "lilahagyma", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "zöldhagyma", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "paradicsom", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "kukorica", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "joghurt, majonéz, mustár, chilis majonéz (az öntethez)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "fokhagyma, citromlé, só, bors (az öntethez)", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A megmosott burgonyákat letakarva mikróban (900 W) 8-10 perc alatt puhára párolod.",
      "A kockára vágott csirkemellet összeforgatod a majonézzel, mustárral, sóval, borssal, a granulátumokkal, a fűszerpaprikával és az olajjal.",
      "A puha burgonyákat vastagabb szeletekre vágod, sózod, olajsprayvel lefújod, majd sütőpapír alatt pohár aljával kissé ellapítod őket (ne essenek szét).",
      "Serpenyőben kevés olajon mindkét oldalukat aranybarnára, ropogósra sütöd.",
      "A pácolt csirkét másik serpenyőben vaj és olaj keverékén készre sütöd.",
      "A salátazöldségeket felaprítod és összekevered.",
      "Az öntet hozzávalóit kóstolgatva kikevered.",
      "Tálaláskor: alulra a saláta öntettel meglocsolva, rá a ropogós burgonya és a fűszeres csirke."
    ],
    megjegyzes: "Gluténmentes. A videó leírásából, szó szerint követhető lépésekkel — az öntetet és a salátát kóstolás szerint adagold.",
    tapertek: { kcal: 630, feherje: 33, zsir: 30, szenhidrat: 54, cukor: 7 },
    hozzaadva: "2026-07-17"
  }
];
