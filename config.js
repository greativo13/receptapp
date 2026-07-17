// ============================================================
// APP-KONFIGURÁCIÓ
// Ez az egyetlen fájl, ami a személyes és a publikus telepítés
// között különbözik.
//  - Személyes mód: hidUrl = a Google Apps Script híd URL-je,
//    publikusMod = false (linkek a hídra, Claude dolgozza fel)
//  - Publikus mód: hidUrl = null, publikusMod = true (a linkeket
//    a böngésző dolgozza fel a látogató saját Gemini-kulcsával)
// ============================================================
window.KONFIG = {
  hidUrl: "https://script.google.com/macros/s/AKfycbyFCPuEMVSOJlYwdecTIHVT9_Xs6M7AyXBP-RFJ9uhnfA-58AnauG-2RZvzEGMkD1i9/exec",
  publikusMod: false
};
