// ============================================================
// Recept-app helyi szerver
//  - kiszolgálja az app fájljait
//  - fogadja a felületen beillesztett videó-linkeket, és a
//    bejovo-linkek.json várólistába teszi (ezt dolgozza fel Claude)
// ============================================================
const http = require("http");
const fs = require("fs");
const path = require("path");

const GYOKER = __dirname;
const PORT = 8321;
const VAROLISTA_FAJL = path.join(GYOKER, "bejovo-linkek.json");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json"
};

function varolista() {
  try { return JSON.parse(fs.readFileSync(VAROLISTA_FAJL, "utf8")); }
  catch { return []; }
}

function mentVarolista(lista) {
  fs.writeFileSync(VAROLISTA_FAJL, JSON.stringify(lista, null, 2), "utf8");
}

function json(res, statusz, adat) {
  res.writeHead(statusz, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(adat));
}

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);

  // ---------- API ----------
  if (urlPath === "/api/linkek" && req.method === "GET") {
    return json(res, 200, varolista());
  }

  if ((urlPath === "/api/link" || urlPath === "/api/link-torles") && req.method === "POST") {
    let torzs = "";
    req.on("data", (d) => { torzs += d; if (torzs.length > 10000) req.destroy(); });
    req.on("end", () => {
      let adat;
      try { adat = JSON.parse(torzs); } catch { return json(res, 400, { hiba: "hibás kérés" }); }
      const url = String(adat.url || "").trim();
      if (!/^https?:\/\//i.test(url)) return json(res, 400, { hiba: "érvénytelen link" });

      let lista = varolista();
      if (urlPath === "/api/link") {
        if (!lista.some((t) => t.url === url)) {
          lista.push({ url, hozzaadva: new Date().toISOString(), statusz: "vár" });
          mentVarolista(lista);
        }
      } else {
        lista = lista.filter((t) => t.url !== url);
        mentVarolista(lista);
      }
      return json(res, 200, lista);
    });
    return;
  }

  // ---------- statikus fájlok ----------
  let fajl = path.join(GYOKER, urlPath === "/" ? "index.html" : urlPath);
  if (!path.normalize(fajl).startsWith(path.normalize(GYOKER))) { res.writeHead(403); return res.end(); }
  fs.readFile(fajl, (hiba, tartalom) => {
    if (hiba) { res.writeHead(404); return res.end("Nincs ilyen fájl"); }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(fajl).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    res.end(tartalom);
  });
}).listen(PORT, () => console.log("Recept-app fut: http://localhost:" + PORT));
