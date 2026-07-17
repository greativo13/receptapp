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
  }
];
