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
    darab: 6, darab_nev: "lángos",
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
    darab: 12, darab_nev: "palacsinta",
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
  },
  {
    id: "fit-zabmuffin-2026-07-17",
    darab: 6, darab_nev: "muffin",
    nev: "Fit zabmuffin",
    forras: "https://vm.tiktok.com/ZN811MuSr/",
    kategoria: "reggeli",
    adag: 6,
    ido_perc: 30,
    hozzavalok: [
      { nev: "zabpehelyliszt", mennyiseg: 80, egyseg: "g" },
      { nev: "fehérjepor (vaníliás vagy csokis)", mennyiseg: 30, egyseg: "g" },
      { nev: "sütőpor", mennyiseg: 1, egyseg: "tk" },
      { nev: "görög joghurt", mennyiseg: 100, egyseg: "g" },
      { nev: "növényi tej", mennyiseg: 50, egyseg: "ml" },
      { nev: "tojás", mennyiseg: 2, egyseg: "db" },
      { nev: "édesítőszer", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Melegítsd elő a sütőt 180 fokra.",
      "Keverd össze a száraz hozzávalókat: zabpehelyliszt, fehérjepor, sütőpor.",
      "Add hozzá a görög joghurtot, a növényi tejet, a tojásokat és az édesítőt, majd keverd simára.",
      "Oszd el a tésztát 6 db muffin formában.",
      "Süsd 180 fokon 20-25 percig."
    ],
    megjegyzes: "Fitness-barát, magas fehérjetartalmú zabmuffin (6 db). A fehérjepor íze ízlés szerint választható. A tápérték becslés (a videó nem adott meg makrókat).",
    tapertek: { kcal: 112, feherje: 10, zsir: 4, szenhidrat: 10, cukor: 1 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "fitt-karamellas-desszert-2026-07-17",
    nev: "Fitt karamellás desszert",
    forras: "https://vm.tiktok.com/ZN811PYHA/",
    kategoria: "desszert",
    adag: 1,
    ido_perc: 10,
    hozzavalok: [
      { nev: "quark (túró)", mennyiseg: 250, egyseg: "g" },
      { nev: "karamellás protein puding", mennyiseg: 100, egyseg: "g" },
      { nev: "vaníliás fehérjepor", mennyiseg: 20, egyseg: "g" },
      { nev: "cukormentes étcsokoládé", mennyiseg: 2, egyseg: "kocka" },
      { nev: "mogyoró (összetörve)", mennyiseg: 5, egyseg: "g" }
    ],
    lepesek: [
      "A quarkot elkeverjük a fehérjeporral.",
      "A krém felét egy tálba tesszük.",
      "Rákerül a karamellás protein puding, majd a krém másik fele.",
      "A tetejére simítjuk a két kocka cukormentes étcsokit.",
      "Rászórjuk az összetört mogyorót.",
      "Hűtőbe tesszük 10 percre."
    ],
    megjegyzes: "A videó fizetett partnerkapcsolat (Lätt Home Magyarország terméke szerepel benne — karamellás protein puding, vaníliás fehérjepor). A kcal és fehérje érték a videó leírásából származik (453 kcal | 58 g fehérje), a többi makró becsült.",
    tapertek: { kcal: 453, feherje: 58, zsir: 11, szenhidrat: 22, cukor: 14 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "fehrjedus-bananakenyer-2026-07-17",
    nev: "Fehérjedús banánkenyér (kiegészítésre vár)",
    forras: "https://vm.tiktok.com/ZN81187bK/",
    kategoria: "egyéb",
    adag: null,
    ido_perc: null,
    hozzavalok: [],
    lepesek: [],
    megjegyzes: "⚠️ Nem sikerült automatikusan kinyerni a receptet — nyisd meg a videót a linkről és egészítsd ki kézzel. A hashtagek alapján magas fehérjetartalmú banánkenyér (#bananabread #highprotein); a kommentek 180 fokot és kb. 1 óra sütési időt említenek, egy komment szerint 4 adagra osztva kb. 236 kcal / 19 g fehérje adagonként — ezek nem megbízhatóan pontosíthatók a videó megtekintése nélkül.",
    tapertek: null,
    hozzaadva: "2026-07-17"
  },
  {
    id: "ismeretlen-recept-1-2026-07-17",
    nev: "Ismeretlen recept (\"Jó bonyolult volt\")",
    forras: "https://vm.tiktok.com/ZN8118t9g/",
    kategoria: "egyéb",
    adag: null,
    ido_perc: null,
    hozzavalok: [],
    lepesek: [],
    megjegyzes: "⚠️ Nem sikerült automatikusan kinyerni a receptet — nyisd meg a videót a linkről és egészítsd ki kézzel. A videó leírása és a kommentek nem tartalmaztak hozzávaló- vagy elkészítési listát.",
    tapertek: null,
    hozzaadva: "2026-07-17"
  },
  {
    id: "ismeretlen-recept-2-2026-07-17",
    nev: "Ismeretlen recept (\"2 adagra osztottam az egészet\")",
    forras: "https://vm.tiktok.com/ZN811RE7G/",
    kategoria: "egyéb",
    adag: 2,
    ido_perc: null,
    hozzavalok: [],
    lepesek: [],
    megjegyzes: "⚠️ Nem sikerült automatikusan kinyerni a receptet — nyisd meg a videót a linkről és egészítsd ki kézzel. A videó leírása és a kommentek nem tartalmaztak hozzávaló- vagy elkészítési listát.",
    tapertek: null,
    hozzaadva: "2026-07-17"
  },
  {
    id: "bananos-kakaos-rud-2026-07-17",
    nev: "Banános-kakaós rúd (kiegészítésre vár)",
    forras: "https://vm.tiktok.com/ZN811NwHb/",
    kategoria: "egyéb",
    adag: null,
    ido_perc: null,
    hozzavalok: [],
    lepesek: [],
    megjegyzes: "⚠️ Nem sikerült automatikusan kinyerni a receptet — nyisd meg a videót a linkről és egészítsd ki kézzel. A kommentekből annyi derül ki, hogy kb. 400 g skyr/túró (görögjoghurttal is helyettesíthető), tojás, kakaópor, banán és édesítő van benne, de a pontos arányok és a sütési mód nem derül ki szövegből.",
    tapertek: null,
    hozzaadva: "2026-07-17"
  },
  {
    id: "csirkes-fajita-2026-07-17",
    darab: 4, darab_nev: "fajita",
    nev: "Csirkés fajita",
    forras: "https://www.facebook.com/share/r/1CnWE6YQvN/?mibextid=wwXIfr",
    kategoria: "vacsora",
    adag: 4,
    ido_perc: 30,
    hozzavalok: [
      { nev: "csirkemell (csíkokra vágva)", mennyiseg: 400, egyseg: "g" },
      { nev: "kaliforniai paprika (csíkokra vágva)", mennyiseg: 2, egyseg: "db" },
      { nev: "vöröshagyma (szeletelve)", mennyiseg: 1, egyseg: "db" },
      { nev: "növényi olaj", mennyiseg: 1, egyseg: "ek" },
      { nev: "fokhagymapor, hagymapor, pirospaprika, chili, római kömény, só, bors", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "tortilla lap", mennyiseg: 4, egyseg: "db" },
      { nev: "reszelt sajt", mennyiseg: 100, egyseg: "g" },
      { nev: "görög joghurt (a szószhoz)", mennyiseg: 100, egyseg: "g" },
      { nev: "majonéz (a szószhoz)", mennyiseg: 30, egyseg: "g" },
      { nev: "koriander (a szószhoz)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "lime leve (a szószhoz)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "fokhagymapor, só, bors (a szószhoz)", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A csirkét, a paprikát és a hagymát terítsd tepsire, locsold meg olajjal, és fűszerezd (fokhagymapor, hagymapor, pirospaprika, chili, római kömény, só, bors), majd forgasd össze.",
      "Süsd 200 fokon 15 percig.",
      "Tégy egy tortillát száraz serpenyőbe, szórd meg sajttal, és hagyd megolvadni.",
      "Kanalazz rá a sült töltelékből, hajtsd félbe, és pirítsd még egy percig.",
      "A szószhoz keverd össze a görög joghurtot, majonézt, fokhagymaport, koriandert, lime-levet, sót és borsot — ezzel tálald."
    ],
    megjegyzes: "1 adag = 1 fajita. A videó nem ad pontos mennyiségeket, ezek becsültek — igazítsd magadhoz.",
    tapertek: { kcal: 510, feherje: 36, zsir: 24, szenhidrat: 36, cukor: 5 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "sonkas-tojasmuffin-2026-07-17",
    darab: 6, darab_nev: "muffin",
    nev: "Sonkás-zöldséges tojásmuffin",
    forras: null,
    kategoria: "reggeli",
    adag: 3,
    ido_perc: 35,
    hozzavalok: [
      { nev: "tojás", mennyiseg: 6, egyseg: "db" },
      { nev: "sovány sonka (kockázva)", mennyiseg: 100, egyseg: "g" },
      { nev: "light reszelt sajt", mennyiseg: 50, egyseg: "g" },
      { nev: "kaliforniai paprika (apróra vágva)", mennyiseg: 1, egyseg: "db" },
      { nev: "friss spenót (aprítva)", mennyiseg: 50, egyseg: "g" },
      { nev: "só, bors, snidling", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A tojásokat verd fel, sózd, borsozd.",
      "Keverd hozzá a kockázott sonkát, a paprikát, a spenótot és a sajt felét.",
      "Oszd el 6 muffinformába (szilikon vagy papírkapszlis), szórd meg a maradék sajttal.",
      "180 fokon 18-20 perc alatt süsd meg, míg a tetejük aranyszínű.",
      "Melegen és hidegen is finom — hűtőben 3 napig eláll, tökéletes vidd-magaddal reggeli."
    ],
    megjegyzes: "Claude fitnesz-receptje. 1 adag = 2 muffin. Bármilyen zöldséggel variálható.",
    tapertek: { kcal: 250, feherje: 24, zsir: 15, szenhidrat: 4, cukor: 2 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "egytepsis-citromos-csirke-2026-07-17",
    nev: "Egytepsis citromos-fokhagymás csirke",
    forras: null,
    kategoria: "ebéd",
    adag: 2,
    ido_perc: 40,
    hozzavalok: [
      { nev: "csirkemell (nagyobb kockákra vágva)", mennyiseg: 400, egyseg: "g" },
      { nev: "zöldbab", mennyiseg: 300, egyseg: "g" },
      { nev: "cukkini (félkarikákra vágva)", mennyiseg: 1, egyseg: "db" },
      { nev: "kaliforniai paprika (csíkokra vágva)", mennyiseg: 1, egyseg: "db" },
      { nev: "olívaolaj", mennyiseg: 1, egyseg: "ek" },
      { nev: "citrom (lé + karikák)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "fokhagyma (zúzva)", mennyiseg: 3, egyseg: "gerezd" },
      { nev: "oregánó, pirospaprika, só, bors", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A csirkét és a zöldségeket terítsd egy nagy tepsire.",
      "Locsold meg az olajjal és a citrom levével, add hozzá a zúzott fokhagymát és a fűszereket, forgasd össze.",
      "Tedd a tetejére a citromkarikákat.",
      "200 fokon 25-30 perc alatt süsd készre, félidőben átforgatva.",
      "Magában is teljes ebéd, de mehet mellé rizs vagy bulgur, ha több szénhidrát kell."
    ],
    megjegyzes: "Claude fitnesz-receptje. Egy tepsi, minimális mosogatás. Fagyasztott zöldbabbal is működik.",
    tapertek: { kcal: 365, feherje: 50, zsir: 10, szenhidrat: 20, cukor: 8 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "gyros-tal-tzatzikivel-2026-07-17",
    nev: "Gyros-tál tzatzikivel",
    forras: null,
    kategoria: "vacsora",
    adag: 2,
    ido_perc: 35,
    hozzavalok: [
      { nev: "csirkemell (csíkokra vágva)", mennyiseg: 400, egyseg: "g" },
      { nev: "gyros fűszerkeverék", mennyiseg: 1, egyseg: "ek" },
      { nev: "olívaolaj", mennyiseg: 1, egyseg: "tk" },
      { nev: "görög joghurt (light)", mennyiseg: 200, egyseg: "g" },
      { nev: "kígyóuborka", mennyiseg: 0.5, egyseg: "db" },
      { nev: "fokhagyma (zúzva)", mennyiseg: 2, egyseg: "gerezd" },
      { nev: "paradicsom", mennyiseg: 2, egyseg: "db" },
      { nev: "lilahagyma", mennyiseg: 0.5, egyseg: "db" },
      { nev: "jégsaláta", mennyiseg: 100, egyseg: "g" },
      { nev: "só, bors, kapor (a tzatzikihez)", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A csirkecsíkokat forgasd össze a gyros fűszerrel és az olajjal — ha van időd, pihentesd fél órát.",
      "A tzatzikihez az uborka felét reszeld le, sózd, majd nyomkodd ki alaposan; keverd a joghurthoz a fokhagymával, kaporral, sóval, borssal.",
      "A csirkét forró serpenyőben süsd készre, kis adagokban, hogy piruljon.",
      "Tálald: saláta-alap, rá a paradicsom, uborka, lilahagyma, a sült csirke, tetejére a tzatziki.",
      "Ha több szénhidrát kell: fél pita adagonként (+80 kcal)."
    ],
    megjegyzes: "Claude fitnesz-receptje. Az igazi gyros-élmény sült krumpli nélkül is.",
    tapertek: { kcal: 345, feherje: 57, zsir: 8, szenhidrat: 13, cukor: 8 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "airfryer-csirkefalatok-2026-07-17",
    nev: "Ropogós csirkefalatok airfryerből",
    forras: null,
    kategoria: "vacsora",
    adag: 2,
    ido_perc: 30,
    hozzavalok: [
      { nev: "csirkemell (falatnyi kockákra vágva)", mennyiseg: 400, egyseg: "g" },
      { nev: "zabpehely (késes aprítóban lisztté darálva)", mennyiseg: 50, egyseg: "g" },
      { nev: "tojás", mennyiseg: 1, egyseg: "db" },
      { nev: "fűszerpaprika", mennyiseg: 1, egyseg: "tk" },
      { nev: "fokhagymapor", mennyiseg: 1, egyseg: "tk" },
      { nev: "só, bors", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "olajspray", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A darált zabpelyhet keverd össze a fűszerekkel.",
      "A csirkefalatokat mártsd a felvert tojásba, majd forgasd a fűszeres zabpehely-morzsába.",
      "Rendezd az airfryer kosarába egy rétegben, fújd le olajsprayvel.",
      "190 fokon 12-14 perc alatt süsd ropogósra, félidőben rázd át.",
      "Mártogatósnak: görög joghurt + mustár + pici méz keveréke."
    ],
    megjegyzes: "Claude fitnesz-receptje. A rántott hús egészséges kistestvére — sütőben 200 fokon 20 perc alatt is elkészül.",
    tapertek: { kcal: 360, feherje: 53, zsir: 10, szenhidrat: 16, cukor: 1 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "csokis-protein-kremdesszert-2026-07-17",
    nev: "Csokis protein-krémdesszert",
    forras: null,
    kategoria: "desszert",
    adag: 2,
    ido_perc: 10,
    hozzavalok: [
      { nev: "skyr (natúr)", mennyiseg: 250, egyseg: "g" },
      { nev: "csokis fehérjepor", mennyiseg: 25, egyseg: "g" },
      { nev: "cukrozatlan kakaópor", mennyiseg: 10, egyseg: "g" },
      { nev: "banán (érett)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "étcsoki forgács (a tetejére)", mennyiseg: 5, egyseg: "g" },
      { nev: "édesítő", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A banánt villával törd pépesre.",
      "Keverd simára a skyrrel, a fehérjeporral, a kakaóporral és az édesítővel.",
      "Oszd két pohárba, szórd meg az étcsoki forgáccsal.",
      "Tedd hűtőbe 15 percre — sűrű, mousse-szerű csokikrémet kapsz."
    ],
    megjegyzes: "Claude fitnesz-receptje. Esti nassolásra tervezve: több benne a fehérje, mint egy csirkemellben, de desszertnek érzed.",
    tapertek: { kcal: 180, feherje: 25, zsir: 3, szenhidrat: 15, cukor: 9 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "epres-turo-bowl-2026-07-17",
    nev: "Epres túrókrém-bowl",
    forras: null,
    kategoria: "reggeli",
    adag: 1,
    ido_perc: 5,
    hozzavalok: [
      { nev: "félzsíros túró", mennyiseg: 200, egyseg: "g" },
      { nev: "görög joghurt", mennyiseg: 100, egyseg: "g" },
      { nev: "méz", mennyiseg: 1, egyseg: "tk" },
      { nev: "eper (friss vagy fagyasztott)", mennyiseg: 150, egyseg: "g" },
      { nev: "mandulaforgács", mennyiseg: 10, egyseg: "g" },
      { nev: "vanília aroma", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A túrót keverd krémesre a joghurttal, mézzel és a vaníliával (botmixerrel extra selymes).",
      "Halmozd tálba, tedd rá a felkockázott epret.",
      "Szórd meg a mandulaforgáccsal."
    ],
    megjegyzes: "Claude fitnesz-receptje. Bármilyen idénygyümölccsel működik — barackkal, áfonyával, málnával is.",
    tapertek: { kcal: 340, feherje: 35, zsir: 13, szenhidrat: 33, cukor: 20 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "azsiai-csirkes-sult-rizs-2026-07-17",
    nev: "Ázsiai csirkés sült rizs",
    forras: null,
    kategoria: "ebéd",
    adag: 2,
    ido_perc: 30,
    hozzavalok: [
      { nev: "rizs (száraz)", mennyiseg: 140, egyseg: "g" },
      { nev: "csirkemell (kockázva)", mennyiseg: 300, egyseg: "g" },
      { nev: "tojás", mennyiseg: 2, egyseg: "db" },
      { nev: "zöldborsó-sárgarépa mix (fagyasztott)", mennyiseg: 200, egyseg: "g" },
      { nev: "szójaszósz", mennyiseg: 2, egyseg: "ek" },
      { nev: "szezámolaj", mennyiseg: 1, egyseg: "tk" },
      { nev: "fokhagyma (zúzva)", mennyiseg: 2, egyseg: "gerezd" },
      { nev: "újhagyma (a tetejére)", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Főzd meg a rizst előre — a legjobb, ha előző napi, hűtött rizst használsz.",
      "Wokban vagy nagy serpenyőben süsd készre a csirkekockákat, majd told félre.",
      "Told félre a csirkét, engedd rá a felvert tojásokat, és kevergetve süsd rántottásra.",
      "Add hozzá a fokhagymát és a borsó-répa mixet, pirítsd 2-3 percig.",
      "Jöhet a rizs és a szójaszósz — nagy lángon, folyamatosan kevergetve pirítsd össze, végül csepegtesd rá a szezámolajat és szórd meg újhagymával."
    ],
    megjegyzes: "Claude fitnesz-receptje. Az elvitelesnél finomabb, fele annyi kalóriából — edzésnapra való szénhidráttal.",
    tapertek: { kcal: 575, feherje: 49, zsir: 13, szenhidrat: 66, cukor: 4 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "toltott-cukkinicsonakok-2026-07-17",
    nev: "Töltött cukkinicsónakok",
    forras: null,
    kategoria: "vacsora",
    adag: 2,
    ido_perc: 45,
    hozzavalok: [
      { nev: "cukkini (nagyobb)", mennyiseg: 2, egyseg: "db" },
      { nev: "darált csirke- vagy pulykamell", mennyiseg: 300, egyseg: "g" },
      { nev: "paradicsompassata", mennyiseg: 200, egyseg: "g" },
      { nev: "light mozzarella (reszelt)", mennyiseg: 60, egyseg: "g" },
      { nev: "vöröshagyma (apróra vágva)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "fokhagyma (zúzva)", mennyiseg: 2, egyseg: "gerezd" },
      { nev: "olívaolaj", mennyiseg: 1, egyseg: "tk" },
      { nev: "oregánó, bazsalikom, só, bors", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A cukkiniket vágd hosszában félbe, és kanállal vájd ki a közepüket (a kivájt részt aprítsd fel, megy a töltelékbe).",
      "Az olajon futtasd meg a hagymát és fokhagymát, add hozzá a darált húst, és pirítsd fehéredésig.",
      "Öntsd fel a passatával, add hozzá a felaprított cukkinibelsőt és a fűszereket, majd forrald be sűrűre.",
      "Töltsd a csónakokba, szórd meg a mozzarellával.",
      "200 fokon 20-25 perc alatt süsd készre, míg a sajt megpirul."
    ],
    megjegyzes: "Claude fitnesz-receptje. Olyan, mint egy lasagne — tészta és bűntudat nélkül.",
    tapertek: { kcal: 330, feherje: 41, zsir: 9, szenhidrat: 17, cukor: 11 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "csirkes-tortilla-pizza-2026-07-17",
    nev: "Csirkés tortilla-pizza",
    forras: null,
    kategoria: "vacsora",
    adag: 2,
    ido_perc: 15,
    hozzavalok: [
      { nev: "teljes kiőrlésű tortilla lap", mennyiseg: 2, egyseg: "db" },
      { nev: "paradicsompassata", mennyiseg: 100, egyseg: "g" },
      { nev: "csirkemellsonka", mennyiseg: 100, egyseg: "g" },
      { nev: "light mozzarella (reszelt)", mennyiseg: 100, egyseg: "g" },
      { nev: "kaliforniai paprika (csíkokra)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "oregánó, fokhagymapor, chilipehely", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A tortillákat kend meg a fűszerezett passatával.",
      "Pakold rá a csirkemellsonkát, a paprikát és a mozzarellát.",
      "200 fokos sütőben (vagy airfryerben) 8-10 perc alatt süsd ropogósra.",
      "Szórd meg oregánóval, vágd cikkekre — 1 adag = 1 pizza."
    ],
    megjegyzes: "Claude fitnesz-receptje. A pizzavágy 15 perces, magas fehérjéjű válasza — a feltét szabadon variálható.",
    tapertek: { kcal: 355, feherje: 27, zsir: 10, szenhidrat: 36, cukor: 5 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "almas-fahejas-sult-zab-2026-07-17",
    nev: "Almás-fahéjas sült zabkása",
    forras: null,
    kategoria: "desszert",
    adag: 2,
    ido_perc: 35,
    hozzavalok: [
      { nev: "zabpehely", mennyiseg: 80, egyseg: "g" },
      { nev: "alma (nagyobb, kockázva)", mennyiseg: 1, egyseg: "db" },
      { nev: "tojás", mennyiseg: 1, egyseg: "db" },
      { nev: "görög joghurt", mennyiseg: 100, egyseg: "g" },
      { nev: "vaníliás fehérjepor", mennyiseg: 20, egyseg: "g" },
      { nev: "sütőpor", mennyiseg: 0.5, egyseg: "tk" },
      { nev: "fahéj", mennyiseg: 1, egyseg: "tk" },
      { nev: "édesítő", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Keverd össze a zabpelyhet a fehérjeporral, sütőporral, fahéjjal és az édesítővel.",
      "Add hozzá a tojást, a joghurtot és az alma kétharmadát, keverd össze.",
      "Simítsd kis sütőtálba, a tetejére nyomkodd a maradék almát, és szórd meg még egy kis fahéjjal.",
      "180 fokon 25 perc alatt süsd készre — melegen, egy kanál joghurttal a tetején az igazi."
    ],
    megjegyzes: "Claude fitnesz-receptje. Almás pite-élmény zabból — reggelinek is elmegy, hidegen is finom.",
    tapertek: { kcal: 300, feherje: 21, zsir: 8, szenhidrat: 40, cukor: 13 },
    hozzaadva: "2026-07-17"
  },
  {
    id: "fitt-maxi-king-2026-07-18",
    nev: "Fitt Maxi King",
    forras: "https://vm.tiktok.com/ZN81NV4cD/",
    kategoria: "desszert",
    adag: 2,
    ido_perc: 15,
    hozzavalok: [
      { nev: "zsírszegény túró (quark)", mennyiseg: 250, egyseg: "g" },
      { nev: "high protein vaníliás puding", mennyiseg: 200, egyseg: "g" },
      { nev: "high protein karamellás puding", mennyiseg: 200, egyseg: "g" },
      { nev: "vanília aroma", mennyiseg: 1, egyseg: "tk" },
      { nev: "folyékony édesítő (elhagyható)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "holland kakaópor", mennyiseg: 2, egyseg: "ek" },
      { nev: "tej", mennyiseg: 4, egyseg: "ek" },
      { nev: "pörkölt sós mogyoró (összetörve)", mennyiseg: 10, egyseg: "g" }
    ],
    lepesek: [
      "A túrót keverd simára a vaníliás pudinggal, a vanília aromával és az édesítővel.",
      "Rétegezz: a túrókrém fele, rá a karamellás puding, majd a krém másik fele.",
      "A kakaóport keverd el a tejjel sűrű csokiréteggé, és simítsd a tetejére.",
      "Szórd meg az összetört sós mogyoróval, és hűtsd legalább fél órát."
    ],
    megjegyzes: "A videó szerint a teljes adag 640 kcal. Ha roppanós tetőt szeretnél, a kakaó+tej helyett olvassz rá ét- vagy tejcsokit.",
    tapertek: { kcal: 320, feherje: 35, zsir: 5, szenhidrat: 21, cukor: 10 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "hawaii-csirke-burgonyaval-2026-07-18",
    nev: "Hawaii csirke sajtos burgonyaágyon",
    forras: "https://vm.tiktok.com/ZN812B9dX/",
    kategoria: "vacsora",
    adag: 4,
    ido_perc: 60,
    hozzavalok: [
      { nev: "burgonya (nagy, vékonyra szeletelve)", mennyiseg: 3, egyseg: "db" },
      { nev: "olaj", mennyiseg: 1, egyseg: "ek" },
      { nev: "só, bors, szárított petrezselyem", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "fokhagymapor", mennyiseg: 1, egyseg: "tk" },
      { nev: "csirkemell", mennyiseg: 650, egyseg: "g" },
      { nev: "vöröshagyma (karikákra)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "majonéz", mennyiseg: 4, egyseg: "ek" },
      { nev: "ananászdarabok (jól lecsöpögtetve)", mennyiseg: 200, egyseg: "g" },
      { nev: "cheddar sajt (reszelt)", mennyiseg: 150, egyseg: "g" }
    ],
    lepesek: [
      "A burgonyaszeleteket forgasd össze az olajjal, sóval, borssal és fokhagymaporral, majd rendezd őket egymást fedve egy kivajazott tepsi aljára.",
      "A csirkemelleket klopfold vékonyra, fűszerezd sóval, borssal, petrezselyemmel, és fektesd a burgonyarétegre.",
      "Kenj a csirkére vékony réteg majonézt, szórd rá a hagymakarikákat, majd egyenletesen az ananászdarabokat.",
      "Fóliával lefedve süsd 190 fokon 30 percig, míg a burgonya megpuhul.",
      "Vedd le a fóliát, szórd meg a sajttal, és süsd fedetlenül még 10-15 percig, míg a teteje aranybarna."
    ],
    megjegyzes: "Angol nyelvű videóból fordítva (anakitchendiary).",
    tapertek: { kcal: 610, feherje: 48, zsir: 32, szenhidrat: 34, cukor: 7 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "rizspapiros-protein-doner-2026-07-18",
    darab: 3, darab_nev: "lepény",
    nev: "Rizspapíros protein-döner",
    forras: "https://vm.tiktok.com/ZN812Vchc/",
    kategoria: "ebéd",
    adag: 3,
    ido_perc: 35,
    hozzavalok: [
      { nev: "rizspapír lap", mennyiseg: 6, egyseg: "db" },
      { nev: "tojás", mennyiseg: 2, egyseg: "db" },
      { nev: "tej", mennyiseg: 50, egyseg: "ml" },
      { nev: "mandulaliszt", mennyiseg: 2, egyseg: "ek" },
      { nev: "szezámmag (a szóráshoz)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "csirkemell (csíkokra vágva)", mennyiseg: 250, egyseg: "g" },
      { nev: "döner/gyros fűszerkeverék, só, bors", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "saláta, paradicsom, lilakáposzta, lilahagyma (csíkokra)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "skyr vagy light görög joghurt (a szószhoz)", mennyiseg: 150, egyseg: "g" },
      { nev: "fokhagyma (zúzva, a szószhoz)", mennyiseg: 1, egyseg: "gerezd" },
      { nev: "friss kapor, citromlé, só, bors (a szószhoz)", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A fűszerezett csirkecsíkokat serpenyőben süsd aranybarnára.",
      "A zöldségeket vágd vékony csíkokra/szeletekre.",
      "A szószhoz keverd össze a skyrt a fokhagymával, kaporral, citromlével, sóval, borssal.",
      "A tojást verd fel a tejjel. Két rizspapír-lapot márts a keverékbe, közéjük szórj kevés mandulalisztet, a széleiket nyomd össze, a tetejét szórd meg szezámmal.",
      "Airfryerben 180 fokon kb. 8 perc alatt süsd a lapokat aranybarnára, ropogósra.",
      "A kész lepényeket óvatosan vágd fel, és töltsd meg a csirkével, a zöldségekkel és a fokhagymás szósszal."
    ],
    megjegyzes: "Német nyelvű videóból fordítva (deryaxburak). 1 adag = 1 töltött lepény.",
    tapertek: { kcal: 295, feherje: 30, zsir: 8, szenhidrat: 22, cukor: 4 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "raffaello-zabkasa-2026-07-18",
    nev: "Raffaello zabkása (kiegészítésre vár)",
    forras: "https://vm.tiktok.com/ZN81NtVSF/",
    kategoria: "reggeli",
    adag: 1,
    ido_perc: 10,
    hozzavalok: [],
    lepesek: [],
    megjegyzes: "⚠️ A recept csak a videóban látható — nyisd meg a linkről és egészítsd ki kézzel, vagy kérd a chatben: 'nézd végig a videót'. A hashtagek alapján kókuszos (Raffaello-ízű) zabkása.",
    hozzaadva: "2026-07-18"
  },
  {
    id: "bounty-desszert-2026-07-18",
    nev: "Bounty ízvilágú desszert (kiegészítésre vár)",
    forras: "https://vm.tiktok.com/ZN81Nm2EE/",
    kategoria: "desszert",
    adag: 1,
    ido_perc: 15,
    hozzavalok: [],
    lepesek: [],
    megjegyzes: "⚠️ A recept csak a videóban látható — nyisd meg a linkről és egészítsd ki kézzel, vagy kérd a chatben: 'nézd végig a videót'. A leírás szerint 1 adag: 248 kcal és 20 g fehérje.",
    hozzaadva: "2026-07-18"
  },
  {
    id: "rakoczi-turos-dietas-2026-07-18",
    nev: "Diétás Rákóczi túrós (kiegészítésre vár)",
    forras: "https://vm.tiktok.com/ZN81Nf7BE/",
    kategoria: "desszert",
    adag: 1,
    ido_perc: 45,
    hozzavalok: [],
    lepesek: [],
    megjegyzes: "⚠️ A recept csak a videóban látható — nyisd meg a linkről és egészítsd ki kézzel, vagy kérd a chatben: 'nézd végig a videót'. Tipp a videóból: pár óra hűtőben pihentetéssel az igazi.",
    hozzaadva: "2026-07-18"
  },
  {
    id: "sonkas-tojaswrap-2026-07-18",
    nev: "Sajtkrémes-sonkás tojáswrap",
    forras: null, kategoria: "reggeli", adag: 1, ido_perc: 10,
    hozzavalok: [
      { nev: "teljes kiőrlésű tortilla lap", mennyiseg: 1, egyseg: "db" },
      { nev: "tojás", mennyiseg: 2, egyseg: "db" },
      { nev: "light sajtkrém", mennyiseg: 30, egyseg: "g" },
      { nev: "sovány sonka", mennyiseg: 50, egyseg: "g" },
      { nev: "paradicsom (szeletelve)", mennyiseg: 1, egyseg: "db" },
      { nev: "só, bors, snidling", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A tojásokból süss lágy rántottát.",
      "A tortillát kend meg a sajtkrémmel, rakd rá a sonkát, a rántottát és a paradicsomszeleteket.",
      "Tekerd fel szorosan, és száraz serpenyőben pirítsd 1-1 percig mindkét oldalán."
    ],
    megjegyzes: "Claude fitnesz-receptje. Úton fogyasztható, laktató reggeli.",
    tapertek: { kcal: 455, feherje: 31, zsir: 21, szenhidrat: 35, cukor: 4 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "kakaos-bananos-overnight-zab-2026-07-18",
    nev: "Kakaós-banános overnight zab",
    forras: null, kategoria: "reggeli", adag: 1, ido_perc: 5,
    hozzavalok: [
      { nev: "zabpehely", mennyiseg: 50, egyseg: "g" },
      { nev: "skyr", mennyiseg: 150, egyseg: "g" },
      { nev: "tej", mennyiseg: 100, egyseg: "ml" },
      { nev: "cukrozatlan kakaópor", mennyiseg: 5, egyseg: "g" },
      { nev: "banán", mennyiseg: 0.5, egyseg: "db" },
      { nev: "édesítő", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Keverd össze a zabot, a skyrt, a tejet, a kakaóport és az édesítőt egy zárható pohárban.",
      "Tedd hűtőbe éjszakára (minimum 4 óra).",
      "Reggel tedd rá a felkarikázott banánt — kész is."
    ],
    megjegyzes: "Claude fitnesz-receptje. Este 5 perc, reggel nulla munka.",
    tapertek: { kcal: 390, feherje: 26, zsir: 7, szenhidrat: 55, cukor: 18 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "feherjes-palacsinta-2026-07-18",
    darab: 6, darab_nev: "palacsinta",
    nev: "Fehérjés banános palacsinta",
    forras: null, kategoria: "reggeli", adag: 1, ido_perc: 15,
    hozzavalok: [
      { nev: "banán (érett)", mennyiseg: 1, egyseg: "db" },
      { nev: "tojás", mennyiseg: 2, egyseg: "db" },
      { nev: "zabpehely", mennyiseg: 40, egyseg: "g" },
      { nev: "vaníliás fehérjepor", mennyiseg: 15, egyseg: "g" },
      { nev: "sütőpor", mennyiseg: 0.5, egyseg: "tk" },
      { nev: "olajspray", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Turmixold össze az összes hozzávalót sima palacsintatésztává.",
      "Olajsprayvel lefújt serpenyőben süss kis palacsintákat, oldalanként 2-2 percig.",
      "Tálald joghurttal és friss gyümölccsel."
    ],
    megjegyzes: "Claude fitnesz-receptje. Kb. 5-6 kis amerikai palacsinta lesz belőle.",
    tapertek: { kcal: 465, feherje: 30, zsir: 14, szenhidrat: 52, cukor: 15 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "zoldseges-turokremes-szendvics-2026-07-18",
    nev: "Zöldséges túrókrémes szendvics",
    forras: null, kategoria: "reggeli", adag: 1, ido_perc: 10,
    hozzavalok: [
      { nev: "teljes kiőrlésű kenyér", mennyiseg: 2, egyseg: "szelet" },
      { nev: "félzsíros túró", mennyiseg: 150, egyseg: "g" },
      { nev: "görög joghurt", mennyiseg: 30, egyseg: "g" },
      { nev: "retek, kígyóuborka, snidling", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "só, bors, pirospaprika", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A túrót keverd krémesre a joghurttal, sózd, borsozd, paprikázd — kész a könnyű körözött.",
      "Kend a kenyerekre vastagon.",
      "Pakold meg vékonyra szelt retekkel, uborkával, szórd meg snidlinggel."
    ],
    megjegyzes: "Claude fitnesz-receptje. Pirítóssal még finomabb.",
    tapertek: { kcal: 305, feherje: 28, zsir: 6, szenhidrat: 41, cukor: 6 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "csirkes-currys-rizs-2026-07-18",
    nev: "Currys csirke kókuszos rizzsel",
    forras: null, kategoria: "ebéd", adag: 2, ido_perc: 35,
    hozzavalok: [
      { nev: "rizs (száraz)", mennyiseg: 140, egyseg: "g" },
      { nev: "csirkemell (kockázva)", mennyiseg: 300, egyseg: "g" },
      { nev: "light kókusztej", mennyiseg: 100, egyseg: "ml" },
      { nev: "zöldborsó", mennyiseg: 100, egyseg: "g" },
      { nev: "vöröshagyma (apróra vágva)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "currypor", mennyiseg: 2, egyseg: "tk" },
      { nev: "fokhagyma, gyömbér, só, bors", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Főzd meg a rizst.",
      "A hagymát pirítsd meg egy csepp olajon, add hozzá a curryt, fokhagymát, gyömbért, majd a csirkekockákat.",
      "Ha a csirke kifehéredett, öntsd fel a kókusztejjel, add hozzá a borsót, és forrald 5-8 percig, míg besűrűsödik.",
      "Tálald a rizzsel."
    ],
    megjegyzes: "Claude fitnesz-receptje. A light kókusztej feleannyi kalória, az íz marad.",
    tapertek: { kcal: 480, feherje: 42, zsir: 8, szenhidrat: 60, cukor: 4 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "bolognai-cukkinispagetti-2026-07-18",
    nev: "Bolognai cukkinispagettivel",
    forras: null, kategoria: "ebéd", adag: 2, ido_perc: 30,
    hozzavalok: [
      { nev: "cukkini (spirálozva vagy gyaluval csíkozva)", mennyiseg: 2, egyseg: "db" },
      { nev: "darált csirke- vagy pulykamell", mennyiseg: 300, egyseg: "g" },
      { nev: "paradicsompassata", mennyiseg: 300, egyseg: "g" },
      { nev: "vöröshagyma", mennyiseg: 0.5, egyseg: "db" },
      { nev: "fokhagyma", mennyiseg: 2, egyseg: "gerezd" },
      { nev: "olívaolaj", mennyiseg: 1, egyseg: "tk" },
      { nev: "parmezán", mennyiseg: 20, egyseg: "g" },
      { nev: "oregánó, bazsalikom, só, bors", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Az olajon futtasd meg a hagymát és a fokhagymát, pirítsd rajta fehéredésig a darált húst.",
      "Öntsd fel a passatával, fűszerezd, és rotyogtasd 15 percig.",
      "A cukkinicsíkokat forró serpenyőben 2-3 percig pirítsd (ne tovább — roppanós maradjon).",
      "Tálald a szósszal és parmezánnal."
    ],
    megjegyzes: "Claude fitnesz-receptje. A tésztás verzió fele kalóriája — este is belefér.",
    tapertek: { kcal: 330, feherje: 38, zsir: 9, szenhidrat: 15, cukor: 9 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "mexikoi-csirkes-rizsestal-2026-07-18",
    nev: "Mexikói csirkés rizsestál",
    forras: null, kategoria: "ebéd", adag: 2, ido_perc: 30,
    hozzavalok: [
      { nev: "rizs (száraz)", mennyiseg: 120, egyseg: "g" },
      { nev: "csirkemell (csíkokra)", mennyiseg: 300, egyseg: "g" },
      { nev: "vörösbab konzerv (lecsöpögtetve)", mennyiseg: 240, egyseg: "g" },
      { nev: "kukorica", mennyiseg: 100, egyseg: "g" },
      { nev: "kaliforniai paprika", mennyiseg: 1, egyseg: "db" },
      { nev: "görög joghurt (a tetejére)", mennyiseg: 50, egyseg: "g" },
      { nev: "chili, római kömény, fokhagymapor, pirospaprika, só", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "lime", mennyiseg: 0.5, egyseg: "db" }
    ],
    lepesek: [
      "Főzd meg a rizst.",
      "A fűszerezett csirkecsíkokat süsd készre, add hozzá a paprikát 2-3 percre.",
      "Forgasd össze a babbal és a kukoricával, melegítsd át.",
      "Tálald a rizsre halmozva, joghurttal és lime-mal a tetején."
    ],
    megjegyzes: "Claude fitnesz-receptje. Meal prep barát: 3 napig eláll hűtőben.",
    tapertek: { kcal: 550, feherje: 47, zsir: 7, szenhidrat: 78, cukor: 6 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "gorog-salata-grillcsirkevel-2026-07-18",
    nev: "Görög saláta grillcsirkével",
    forras: null, kategoria: "ebéd", adag: 2, ido_perc: 25,
    hozzavalok: [
      { nev: "csirkemell", mennyiseg: 300, egyseg: "g" },
      { nev: "kígyóuborka", mennyiseg: 0.5, egyseg: "db" },
      { nev: "paradicsom", mennyiseg: 2, egyseg: "db" },
      { nev: "lilahagyma", mennyiseg: 0.5, egyseg: "db" },
      { nev: "light feta", mennyiseg: 60, egyseg: "g" },
      { nev: "olívabogyó", mennyiseg: 30, egyseg: "g" },
      { nev: "olívaolaj", mennyiseg: 1, egyseg: "tk" },
      { nev: "oregánó, citromlé, só, bors", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A csirkemellet fűszerezd, és grillserpenyőben süsd készre, majd szeleteld fel.",
      "A zöldségeket vágd nagyobb darabokra, keverd össze az olívabogyóval.",
      "Tedd rá a csirkét és a fetát, locsold meg az olajjal és citromlével, szórd meg oregánóval."
    ],
    megjegyzes: "Claude fitnesz-receptje. Nyári kánikula-ebéd, sütő nélkül.",
    tapertek: { kcal: 325, feherje: 41, zsir: 14, szenhidrat: 8, cukor: 5 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "csirkes-quesadilla-2026-07-18",
    nev: "Csirkés quesadilla",
    forras: null, kategoria: "ebéd", adag: 2, ido_perc: 20,
    hozzavalok: [
      { nev: "teljes kiőrlésű tortilla lap", mennyiseg: 2, egyseg: "db" },
      { nev: "főtt/sült csirkemell (csíkokra tépve)", mennyiseg: 200, egyseg: "g" },
      { nev: "light reszelt sajt", mennyiseg: 80, egyseg: "g" },
      { nev: "kaliforniai paprika (csíkokra)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "lilahagyma (vékonyra)", mennyiseg: 0.25, egyseg: "db" },
      { nev: "fűszerpaprika, chili, só", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A tortilla egyik felére szórd a sajt felét, rá a csirkét, paprikát, hagymát, majd a maradék sajtot.",
      "Hajtsd félbe, és száraz serpenyőben oldalanként 2-3 percig süsd, míg a sajt megolvad és a tortilla ropogós.",
      "Vágd cikkekre — joghurtos mártogatóssal az igazi."
    ],
    megjegyzes: "Claude fitnesz-receptje. Maradék sült csirke felhasználására tökéletes.",
    tapertek: { kcal: 410, feherje: 40, zsir: 13, szenhidrat: 34, cukor: 3 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "zoldborsofozelek-csirkevel-2026-07-18",
    nev: "Zöldborsófőzelék sült csirkemellel",
    forras: null, kategoria: "ebéd", adag: 2, ido_perc: 30,
    hozzavalok: [
      { nev: "zöldborsó (fagyasztott)", mennyiseg: 450, egyseg: "g" },
      { nev: "tej", mennyiseg: 200, egyseg: "ml" },
      { nev: "finomliszt", mennyiseg: 20, egyseg: "g" },
      { nev: "csirkemell", mennyiseg: 300, egyseg: "g" },
      { nev: "vöröshagyma", mennyiseg: 0.5, egyseg: "db" },
      { nev: "petrezselyem, só, bors, pici cukor vagy édesítő", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A hagymát futtasd meg egy csepp olajon, add hozzá a borsót, sózd, öntsd fel kevés vízzel, és főzd puhára.",
      "A lisztet keverd simára a hideg tejjel, és sűrítsd be vele a főzeléket; petrezselymezd.",
      "A fűszerezett csirkemellet közben süsd készre, szeletelve tálald a főzelékre."
    ],
    megjegyzes: "Claude fitnesz-receptje. Klasszikus menza-íz, modern makrókkal.",
    tapertek: { kcal: 430, feherje: 50, zsir: 6, szenhidrat: 40, cukor: 14 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "joghurtos-csirkenyars-2026-07-18",
    nev: "Fokhagymás-joghurtos csirkenyárs",
    forras: null, kategoria: "vacsora", adag: 2, ido_perc: 30,
    hozzavalok: [
      { nev: "csirkemell (kockázva)", mennyiseg: 400, egyseg: "g" },
      { nev: "görög joghurt (a páchoz)", mennyiseg: 100, egyseg: "g" },
      { nev: "fokhagyma (zúzva)", mennyiseg: 2, egyseg: "gerezd" },
      { nev: "kaliforniai paprika (kockákra)", mennyiseg: 1, egyseg: "db" },
      { nev: "lilahagyma (cikkekre)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "pirospaprika, oregánó, citromlé, só, bors", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A csirkekockákat forgasd össze a joghurtos-fokhagymás-fűszeres páccal, és pihentesd legalább fél órát.",
      "Húzd nyársra felváltva a hússal a paprikát és a hagymát.",
      "Grillserpenyőben, sütőben vagy airfryerben (200 fok, 12-15 perc) süsd készre, közben forgasd."
    ],
    megjegyzes: "Claude fitnesz-receptje. A joghurtos pác hihetetlenül szaftosan tartja a csirkét.",
    tapertek: { kcal: 280, feherje: 49, zsir: 6, szenhidrat: 8, cukor: 5 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "gongyolt-csirkemell-2026-07-18",
    nev: "Sonkával-sajttal göngyölt csirkemell",
    forras: null, kategoria: "vacsora", adag: 2, ido_perc: 40,
    hozzavalok: [
      { nev: "csirkemell", mennyiseg: 400, egyseg: "g" },
      { nev: "sovány sonka", mennyiseg: 60, egyseg: "g" },
      { nev: "light sajt (szeletelt)", mennyiseg: 60, egyseg: "g" },
      { nev: "mustár", mennyiseg: 1, egyseg: "tk" },
      { nev: "só, bors, fokhagymapor", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A csirkemelleket klopfold vékonyra, fűszerezd, kend meg vékonyan mustárral.",
      "Tegyél mindegyikre sonkát és sajtot, tekerd fel, és rögzítsd fogpiszkálóval.",
      "Sütőpapíros tepsiben 190 fokon 25-30 perc alatt süsd készre.",
      "Pár perc pihentetés után szeleteld — friss salátával tálald."
    ],
    megjegyzes: "Claude fitnesz-receptje. A cordon bleu bundamentes, szálkás-hasú változata.",
    tapertek: { kcal: 330, feherje: 60, zsir: 11, szenhidrat: 2, cukor: 1 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "padlizsan-lasagne-2026-07-18",
    nev: "Padlizsán-lasagne",
    forras: null, kategoria: "vacsora", adag: 2, ido_perc: 50,
    hozzavalok: [
      { nev: "padlizsán (hosszában vékony lapokra)", mennyiseg: 1, egyseg: "db" },
      { nev: "darált csirke- vagy pulykamell", mennyiseg: 300, egyseg: "g" },
      { nev: "paradicsompassata", mennyiseg: 250, egyseg: "g" },
      { nev: "light mozzarella (reszelt)", mennyiseg: 80, egyseg: "g" },
      { nev: "vöröshagyma, fokhagyma", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "oregánó, bazsalikom, só, bors", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A padlizsánlapokat sózd, 10 perc után itasd le, és száraz serpenyőben elősütve puhítsd.",
      "A darált húsból, hagymából, fokhagymából és passatából főzz sűrű ragut.",
      "Rétegezd kis tepsibe: padlizsán, ragu, padlizsán, ragu, tetejére mozzarella.",
      "190 fokon 20-25 perc alatt süsd össze."
    ],
    megjegyzes: "Claude fitnesz-receptje. Lasagne-élmény tészta nélkül — a padlizsán átveszi a főszerepet.",
    tapertek: { kcal: 310, feherje: 44, zsir: 8, szenhidrat: 16, cukor: 10 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "toltott-paprika-light-2026-07-18",
    nev: "Könnyű töltött paprika",
    forras: null, kategoria: "vacsora", adag: 2, ido_perc: 60,
    hozzavalok: [
      { nev: "kaliforniai paprika", mennyiseg: 4, egyseg: "db" },
      { nev: "darált csirke- vagy pulykamell", mennyiseg: 300, egyseg: "g" },
      { nev: "rizs (száraz, előfőzve)", mennyiseg: 60, egyseg: "g" },
      { nev: "paradicsompassata", mennyiseg: 300, egyseg: "g" },
      { nev: "vöröshagyma, fokhagyma", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "pirospaprika, majoránna, só, bors", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A darált húst keverd össze az előfőzött rizzsel, az apróra vágott hagymával, fokhagymával és a fűszerekkel.",
      "A kicsumázott paprikákat töltsd meg a masszával.",
      "Állítsd őket egy mélyebb edénybe, öntsd fel a passatával és annyi vízzel, hogy félig ellepje.",
      "Fedő alatt, kis lángon 40 perc alatt főzd készre."
    ],
    megjegyzes: "Claude fitnesz-receptje. Nagyi töltött paprikája — sertés helyett szárnyassal, cukor nélkül.",
    tapertek: { kcal: 380, feherje: 36, zsir: 5, szenhidrat: 45, cukor: 15 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "zoldseges-frittata-2026-07-18",
    nev: "Zöldséges frittata",
    forras: null, kategoria: "vacsora", adag: 2, ido_perc: 25,
    hozzavalok: [
      { nev: "tojás", mennyiseg: 5, egyseg: "db" },
      { nev: "cukkini (vékony karikákra)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "kaliforniai paprika", mennyiseg: 1, egyseg: "db" },
      { nev: "újhagyma", mennyiseg: 2, egyseg: "szál" },
      { nev: "light reszelt sajt", mennyiseg: 50, egyseg: "g" },
      { nev: "olajspray, só, bors, kakukkfű", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A zöldségeket olajsprayvel lefújt, sütőbe rakható serpenyőben pirítsd 3-4 percig.",
      "Öntsd rá a felvert, fűszerezett tojást, szórd meg a sajttal.",
      "Kis lángon 5 percig süsd, majd 180 fokos sütőben (vagy fedő alatt) még 8-10 percig, míg megszilárdul.",
      "Cikkekre vágva melegen és hidegen is kiváló."
    ],
    megjegyzes: "Claude fitnesz-receptje. A hűtőben árválkodó zöldségek megmentője.",
    tapertek: { kcal: 285, feherje: 24, zsir: 18, szenhidrat: 6, cukor: 3 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "csirkegyros-pita-2026-07-18",
    nev: "Csirkegyros pitában",
    forras: null, kategoria: "vacsora", adag: 2, ido_perc: 30,
    hozzavalok: [
      { nev: "teljes kiőrlésű pita", mennyiseg: 2, egyseg: "db" },
      { nev: "csirkemell (csíkokra)", mennyiseg: 300, egyseg: "g" },
      { nev: "gyros fűszerkeverék", mennyiseg: 1, egyseg: "ek" },
      { nev: "görög joghurt (light, tzatzikinek)", mennyiseg: 100, egyseg: "g" },
      { nev: "kígyóuborka (reszelve)", mennyiseg: 0.25, egyseg: "db" },
      { nev: "fokhagyma", mennyiseg: 1, egyseg: "gerezd" },
      { nev: "jégsaláta, paradicsom, lilahagyma", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A gyros-fűszeres csirkecsíkokat süsd pirosra.",
      "A kinyomkodott reszelt uborkából, joghurtból és fokhagymából keverj gyors tzatzikit.",
      "A pitákat melegítsd meg, vágd fel, és töltsd meg salátával, csirkével, zöldségekkel, tzatzikivel."
    ],
    megjegyzes: "Claude fitnesz-receptje. Gyorskajás élmény, kontrollált makrókkal.",
    tapertek: { kcal: 375, feherje: 43, zsir: 7, szenhidrat: 37, cukor: 4 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "malnas-skyr-fagyi-2026-07-18",
    nev: "Málnás skyr-fagyi",
    forras: null, kategoria: "desszert", adag: 2, ido_perc: 5,
    hozzavalok: [
      { nev: "fagyasztott málna", mennyiseg: 250, egyseg: "g" },
      { nev: "skyr", mennyiseg: 200, egyseg: "g" },
      { nev: "méz", mennyiseg: 1, egyseg: "tk" },
      { nev: "vanília aroma", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A fagyos málnát, a skyrt, a mézet és a vaníliát tedd aprítógépbe.",
      "Turmixold 1-2 percig, míg krémes fagyi-állagú nem lesz.",
      "Azonnal tálald — vagy fagyaszd vissza 30 percre, ha keményebben szereted."
    ],
    megjegyzes: "Claude fitnesz-receptje. 5 perces igazi gyümölcsfagyi — eperrel, mangóval is működik.",
    tapertek: { kcal: 140, feherje: 12, zsir: 1, szenhidrat: 23, cukor: 14 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "csokis-proteingolyok-2026-07-18",
    darab: 8, darab_nev: "golyó",
    nev: "Csokis-mogyorós proteingolyók",
    forras: null, kategoria: "desszert", adag: 4, ido_perc: 15,
    hozzavalok: [
      { nev: "zabpehely", mennyiseg: 100, egyseg: "g" },
      { nev: "mogyoróvaj", mennyiseg: 40, egyseg: "g" },
      { nev: "csokis fehérjepor", mennyiseg: 30, egyseg: "g" },
      { nev: "méz", mennyiseg: 20, egyseg: "g" },
      { nev: "cukrozatlan kakaópor", mennyiseg: 5, egyseg: "g" },
      { nev: "víz vagy tej (amennyit felvesz)", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Gyúrd össze az összes hozzávalót — annyi vizet/tejet adj hozzá, hogy formázható massza legyen.",
      "Formázz belőle 8 golyót, és hempergesd kakaóporba.",
      "Hűtőben tárold — 1 hétig is eláll."
    ],
    megjegyzes: "Claude fitnesz-receptje. 1 adag = 2 golyó. Edzés előtti gyors energia.",
    tapertek: { kcal: 195, feherje: 12, zsir: 7, szenhidrat: 22, cukor: 6 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "citromos-turotorta-poharkrem-2026-07-18",
    nev: "Citromos túrótorta-pohárkrém",
    forras: null, kategoria: "desszert", adag: 2, ido_perc: 15,
    hozzavalok: [
      { nev: "félzsíros túró", mennyiseg: 250, egyseg: "g" },
      { nev: "görög joghurt", mennyiseg: 100, egyseg: "g" },
      { nev: "citrom (leve és reszelt héja)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "zabkeksz vagy darált zabpehely", mennyiseg: 30, egyseg: "g" },
      { nev: "édesítő", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "vanília aroma", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A túrót turmixold selymesre a joghurttal, citromlével, -héjjal, édesítővel és vaníliával.",
      "A kekszet morzsold a poharak aljára, kanalazd rá a krémet.",
      "Hűtőben pihentesd fél órát — citromhéjjal díszítve tálald."
    ],
    megjegyzes: "Claude fitnesz-receptje. Sajttorta-íz sütés nélkül, percek alatt.",
    tapertek: { kcal: 185, feherje: 21, zsir: 5, szenhidrat: 17, cukor: 7 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "sult-fahejas-alma-2026-07-18",
    nev: "Sült fahéjas alma túróhabbal",
    forras: null, kategoria: "desszert", adag: 2, ido_perc: 25,
    hozzavalok: [
      { nev: "alma", mennyiseg: 2, egyseg: "db" },
      { nev: "fahéj", mennyiseg: 1, egyseg: "tk" },
      { nev: "félzsíros túró", mennyiseg: 150, egyseg: "g" },
      { nev: "görög joghurt", mennyiseg: 50, egyseg: "g" },
      { nev: "dió (durvára vágva)", mennyiseg: 10, egyseg: "g" },
      { nev: "édesítő", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Az almákat vágd cikkekre, szórd meg fahéjjal, és süsd 180 fokon 15-18 percig (airfryerben 10 perc), míg megpuhulnak és karamellizálódnak.",
      "A túrót keverd habosra a joghurttal, édesítővel és egy csipet fahéjjal.",
      "Tálald a meleg almát a hideg túróhabbal, dióval megszórva."
    ],
    megjegyzes: "Claude fitnesz-receptje. Almás pite-hangulat — meleg-hideg kontraszttal.",
    tapertek: { kcal: 195, feherje: 11, zsir: 6, szenhidrat: 28, cukor: 20 },
    hozzaadva: "2026-07-18"
  },
  {
    id: "kakaos-turomousse-2026-07-20",
    nev: "Kakaós cottage cheese mousse",
    forras: "https://vm.tiktok.com/ZN81hpxN9/",
    kategoria: "desszert",
    adag: 2,
    ido_perc: 10,
    hozzavalok: [
      { nev: "cottage cheese (szemcsés túró)", mennyiseg: 250, egyseg: "g" },
      { nev: "cukrozatlan kakaópor", mennyiseg: 2, egyseg: "ek" },
      { nev: "chia mag", mennyiseg: 1, egyseg: "ek" },
      { nev: "vaníliás cukor vagy édesítő (elhagyható)", mennyiseg: 1, egyseg: "ek" },
      { nev: "étcsoki forgács és friss bogyós gyümölcs (a tetejére)", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Turmixold teljesen simára és krémesre az összes hozzávalót.",
      "Oszd két pohárba, és hűtsd legalább 2 órát (legjobb egy éjszakán át), hogy megdermedjen.",
      "Tálaláskor szórd meg aprított étcsokival és friss bogyós gyümölccsel."
    ],
    megjegyzes: "Dán videóból fordítva (tinadehnfjeld). A készítő tippje: csinálj duplát — másnap reggelinek is tökéletes.",
    tapertek: { kcal: 190, feherje: 16, zsir: 8, szenhidrat: 12, cukor: 6 },
    hozzaadva: "2026-07-20"
  },
  {
    id: "protein-mousse-2026-07-20",
    nev: "Csokis protein mousse",
    forras: "https://vm.tiktok.com/ZN81kJk9Q/",
    kategoria: "desszert",
    adag: 3,
    ido_perc: 15,
    hozzavalok: [
      { nev: "high protein joghurt", mennyiseg: 660, egyseg: "g" },
      { nev: "holland kakaópor", mennyiseg: 15, egyseg: "g" },
      { nev: "fehérjepor", mennyiseg: 60, egyseg: "g" },
      { nev: "étcsokoládé", mennyiseg: 80, egyseg: "g" }
    ],
    lepesek: [
      "Az étcsokit olvaszd fel vízgőz felett vagy mikróban.",
      "Keverd simára a joghurtot a kakaóporral és a fehérjeporral.",
      "Dolgozd hozzá az olvasztott csokit, és keverd fényes krémmé.",
      "Poharakba adagolva hűtsd legalább 1 órát."
    ],
    megjegyzes: "A videó szerint adagonként: 359 kcal és 43 g fehérje (petraszigetii). Az értékek a felhasznált márkáktól függően változhatnak.",
    tapertek: { kcal: 359, feherje: 43, zsir: 12, szenhidrat: 20, cukor: 12 },
    hozzaadva: "2026-07-20"
  },
  {
    id: "bounty-falatok-2026-07-20",
    nev: "Bounty falatok cukor nélkül (kiegészítésre vár)",
    forras: "https://vm.tiktok.com/ZN81kdVNe/",
    kategoria: "desszert",
    adag: 1,
    ido_perc: 30,
    hozzavalok: [],
    lepesek: [],
    megjegyzes: "⚠️ A recept csak a videóban látható — nyisd meg a linkről és egészítsd ki kézzel, vagy kérd a chatben: 'nézd végig a videót'. Hozzáadott cukor nélküli kókuszos falatok (panczeldori).",
    hozzaadva: "2026-07-20"
  },
  {
    id: "pulykas-tortilla-tekercs-2026-07-20",
    nev: "Sajtos-sülthagymás pulykás tortilla tekercs",
    forras: "https://vm.tiktok.com/ZN81hqQWg/",
    kategoria: "vacsora",
    adag: 4,
    ido_perc: 35,
    darab: 4, darab_nev: "tekercs",
    hozzavalok: [
      { nev: "darált pulyka", mennyiseg: 400, egyseg: "g" },
      { nev: "fűszerpaprika", mennyiseg: 1, egyseg: "tk" },
      { nev: "fokhagymapor", mennyiseg: 1, egyseg: "tk" },
      { nev: "lilahagyma (fél fej, darálva)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "kápia paprika (negyed, darálva)", mennyiseg: 0.25, egyseg: "db" },
      { nev: "vöröshagyma (vékonyra szelve, olívaolajon pirítva)", mennyiseg: 1, egyseg: "db" },
      { nev: "reszelt sajt", mennyiseg: 100, egyseg: "g" },
      { nev: "tortilla lap", mennyiseg: 4, egyseg: "db" },
      { nev: "tojás (a lekenéshez)", mennyiseg: 1, egyseg: "db" },
      { nev: "paradicsom (a salsához)", mennyiseg: 2, egyseg: "db" },
      { nev: "lilahagyma, petrezselyem, lime, füstölt tabasco (a salsához)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "só, bors", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A darált pulykát keverd össze a fűszerekkel és a darált lilahagyma-kápia keverékkel.",
      "A vöröshagymát kevés olívaolajon sózva-borsozva pirítsd meg.",
      "A tortillákra oszd el a húsos masszát, a sült hagymát és a reszelt sajtot, majd tekerd fel őket.",
      "Kend le felvert tojással, és airfryerben 180 fokon 15 perc alatt süsd aranybarnára.",
      "A salsához aprítsd össze a paradicsomot, lilahagymát, petrezselymet, lime-héjat és -levet, ízesítsd sóval, borssal, füstölt tabascóval."
    ],
    megjegyzes: "1 adag = 1 tekercs (gydorejj videójából). Kívül ropogós, belül szaftos.",
    tapertek: { kcal: 460, feherje: 32, zsir: 20, szenhidrat: 38, cukor: 5 },
    hozzaadva: "2026-07-20"
  },
  {
    id: "kremes-paprikas-csirke-2026-07-20",
    nev: "Krémes paprikás csirke",
    forras: "https://vm.tiktok.com/ZN81ASWwx/",
    kategoria: "ebéd",
    adag: 2,
    ido_perc: 35,
    hozzavalok: [
      { nev: "csirkemell", mennyiseg: 300, egyseg: "g" },
      { nev: "zabliszt (a forgatáshoz)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "fokhagyma", mennyiseg: 4, egyseg: "gerezd" },
      { nev: "alaplé (vagy víz + fél leveskocka)", mennyiseg: 150, egyseg: "ml" },
      { nev: "főzőtejszín (10%)", mennyiseg: 100, egyseg: "ml" },
      { nev: "friss petrezselyem", mennyiseg: 10, egyseg: "g" },
      { nev: "füstölt pirospaprika", mennyiseg: 1, egyseg: "tk" },
      { nev: "basmati rizs (száraz)", mennyiseg: 40, egyseg: "g" },
      { nev: "zöldköret (pl. zöldbab vagy párolt cukkini)", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "só, bors, olívaolaj spray", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "A felkockázott csirkemellet forgasd zablisztbe, és olajsprayvel lefújt serpenyőben pirítsd elő.",
      "Add hozzá a zúzott fokhagymát és a füstölt pirospaprikát, majd öntsd fel az alaplével.",
      "Keverd hozzá a főzőtejszínt, és forrald be szaftos, krémes mártássá; sózd, borsozd.",
      "Szórd meg friss petrezselyemmel, és tálald főtt basmati rizzsel + zöldkörettel."
    ],
    megjegyzes: "A videó szerint 1 adag: 476 kcal, CH 41 g, fehérje 38 g, zsír 17,5 g (adriorban_). Az eredetiben brokkoli a köret — zöldbabbal vagy cukkinivel ugyanolyan jó.",
    tapertek: { kcal: 476, feherje: 38, zsir: 18, szenhidrat: 41, cukor: 5 },
    hozzaadva: "2026-07-20"
  },
  {
    id: "cornflakes-csirke-2026-07-20",
    nev: "Corn flakes bundás csirke sütőből",
    forras: "https://vm.tiktok.com/ZN81AXYWH/",
    kategoria: "ebéd",
    adag: 4,
    ido_perc: 70,
    hozzavalok: [
      { nev: "csirkemell", mennyiseg: 500, egyseg: "g" },
      { nev: "corn flakes pehely", mennyiseg: 120, egyseg: "g" },
      { nev: "tojás", mennyiseg: 1, egyseg: "db" },
      { nev: "szója- vagy natúr joghurt", mennyiseg: 2, egyseg: "ek" },
      { nev: "sült csirke fűszersó", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "olívaolaj (a locsoláshoz)", mennyiseg: 1, egyseg: "ek" }
    ],
    lepesek: [
      "A csirkemellet vágd kb. fél cm vastag szeletekre, fűszerezd, és forgasd össze a joghurttal felvert tojással; hűtőben pácold 1 órát (elhagyható, de ajánlott).",
      "A corn flakest darabosra daráld — jó, ha marad benne nagyobb törmelék is.",
      "Forgasd a húst a pehelymorzsába, és fektesd sütőpapíros tepsire.",
      "Locsold meg kevés olívaolajjal, és 180 fokra előmelegített sütőben 45-50 perc alatt süsd ropogósra."
    ],
    megjegyzes: "barackcsapat_edzes videójából. Frissen sülve, salátára vagy szendvicsbe is kiváló — nem tocsog az olajban.",
    tapertek: { kcal: 300, feherje: 32, zsir: 8, szenhidrat: 26, cukor: 2 },
    hozzaadva: "2026-07-20"
  },
  {
    id: "ismeretlen-video-2026-07-20",
    nev: "Ismeretlen recept (kiegészítésre vár)",
    forras: "https://vm.tiktok.com/ZN81Aa6ah/",
    kategoria: "egyéb",
    adag: 1,
    ido_perc: null,
    hozzavalok: [],
    lepesek: [],
    megjegyzes: "⚠️ Ehhez a videóhoz se leírást, se feliratot nem találtam (lehet, hogy törölték vagy képes bejegyzés) — nyisd meg a linkről, és egészítsd ki kézzel, vagy töröld, ha nem fontos.",
    hozzaadva: "2026-07-20"
  },
  {
    id: "mediterran-orzo-salata-2026-07-20",
    nev: "Mediterrán orzo saláta csirkével",
    forras: "https://vm.tiktok.com/ZN81AtVGq/",
    kategoria: "ebéd",
    adag: 4,
    ido_perc: 30,
    hozzavalok: [
      { nev: "orzo tészta (vagy bármilyen apró tészta)", mennyiseg: 200, egyseg: "g" },
      { nev: "csirkemell", mennyiseg: 500, egyseg: "g" },
      { nev: "feta", mennyiseg: 200, egyseg: "g" },
      { nev: "kígyóuborka", mennyiseg: 0.5, egyseg: "db" },
      { nev: "paradicsom", mennyiseg: 2, egyseg: "db" },
      { nev: "lilahagyma", mennyiseg: 0.5, egyseg: "db" },
      { nev: "olívaolaj", mennyiseg: 2, egyseg: "ek" },
      { nev: "citromlé", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "só, bors, pirospaprika, fokhagyma, oregánó", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Főzd ki az orzót sós vízben, szűrd le, és hagyd kicsit hűlni.",
      "A kockázott csirkemellet fűszerezd (só, bors, pirospaprika, fokhagyma, oregánó), és süsd készre.",
      "Kockázd fel az uborkát, paradicsomot, lilahagymát és a fetát.",
      "Forgasd össze mindent az olívaolajjal és citromlével — langyosan és hidegen is finom."
    ],
    megjegyzes: "bettisdailykitchen videójából. Nyári meal prep kedvenc: hűtőben 3 napig eláll.",
    tapertek: { kcal: 505, feherje: 42, zsir: 18, szenhidrat: 41, cukor: 3 },
    hozzaadva: "2026-07-20"
  },
  {
    id: "tejfolos-fokhagymas-csirkeragu-2026-07-20",
    nev: "Tejfölös-fokhagymás csirkeragu rizzsel",
    forras: null,
    kategoria: "ebéd",
    adag: 2,
    ido_perc: 35,
    hozzavalok: [
      { nev: "csirkemell (kockázva)", mennyiseg: 400, egyseg: "g" },
      { nev: "rizs (száraz)", mennyiseg: 140, egyseg: "g" },
      { nev: "tejföl (20%-os)", mennyiseg: 150, egyseg: "g" },
      { nev: "vöröshagyma (apróra vágva)", mennyiseg: 0.5, egyseg: "db" },
      { nev: "fokhagyma (zúzva)", mennyiseg: 2, egyseg: "gerezd" },
      { nev: "olívaolaj", mennyiseg: 1, egyseg: "tk" },
      { nev: "finomliszt (a sűrítéshez)", mennyiseg: 1, egyseg: "tk" },
      { nev: "pirospaprika", mennyiseg: 1, egyseg: "tk" },
      { nev: "só, bors, petrezselyem", mennyiseg: null, egyseg: "ízlés szerint" }
    ],
    lepesek: [
      "Főzd meg a rizst sós vízben.",
      "Az olajon futtasd üvegesre a hagymát, add hozzá a fokhagymát, majd a csirkekockákat, és pirítsd fehéredésig; sózd, borsozd.",
      "Vedd le a tűzről egy pillanatra, keverd el a pirospaprikát, majd önts alá kb. 1 dl vizet, és fedő alatt párold 10 percig.",
      "A tejfölt keverd simára a liszttel, húzd be vele a ragut, és forrald össze 2-3 percig, míg besűrűsödik.",
      "Szórd meg petrezselyemmel, és tálald a rizzsel."
    ],
    megjegyzes: "Claude receptje a kért alapanyagokból: csirkemell, rizs, tejföl. Klasszikus magyaros íz, hétköznap-barát kivitelben.",
    tapertek: { kcal: 660, feherje: 53, zsir: 23, szenhidrat: 62, cukor: 4 },
    hozzaadva: "2026-07-20"
  },
  {
    id: "kokusztekercs-2026-07-20",
    nev: "Fitt kókusztekercs",
    forras: "https://vm.tiktok.com/ZN81QpDLV/",
    kategoria: "desszert",
    adag: 10,
    ido_perc: 30,
    darab: 10, darab_nev: "szelet",
    hozzavalok: [
      { nev: "darált keksz (hozzáadott cukor nélküli)", mennyiseg: 350, egyseg: "g" },
      { nev: "vaníliás fehérjepor (a tésztához)", mennyiseg: 60, egyseg: "g" },
      { nev: "20-22%-os kakaópor", mennyiseg: 30, egyseg: "g" },
      { nev: "kávé", mennyiseg: 50, egyseg: "ml" },
      { nev: "növényi tej", mennyiseg: 300, egyseg: "ml" },
      { nev: "rumaroma és édesítő", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "mascarpone (a krémhez)", mennyiseg: 250, egyseg: "g" },
      { nev: "vaníliás fehérjepor (a krémhez)", mennyiseg: 2, egyseg: "adag" },
      { nev: "kókuszreszelék (a krémhez)", mennyiseg: 2, egyseg: "ek" },
      { nev: "vanília aroma", mennyiseg: null, egyseg: "ízlés szerint" },
      { nev: "kókuszreszelék (a külsejére)", mennyiseg: 3, egyseg: "ek" }
    ],
    lepesek: [
      "A darált kekszet keverd össze a fehérjeporral és a kakaóporral.",
      "Add hozzá a kávét és a növényi tejet (rumaromával, édesítővel), és gyúrd formázható tésztává.",
      "A krémhez keverd simára a mascarponét a fehérjeporral, a kókuszreszelékkel és a vanília aromával.",
      "Nyújtsd/lapítsd ki a kekszes tésztát folpackon téglalappá, kend rá a krémet, és a folpack segítségével tekerd fel rúddá.",
      "Forgasd meg a külsejét kókuszreszelékben, és hűtsd be pár órára, mielőtt felszeleteled."
    ],
    megjegyzes: "fittfrufood videójából. Sütés nélküli, magas fehérjéjű bejgli-szerű desszert. 1 adag = 1 szelet.",
    tapertek: { kcal: 195, feherje: 11, zsir: 9, szenhidrat: 18, cukor: 4 },
    hozzaadva: "2026-07-20"
  }
];
