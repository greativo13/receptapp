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
  },
  {
    id: "fit-zabmuffin-2026-07-17",
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
  }
];
