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
    hozzaadva: "2026-07-16"
  }
];
