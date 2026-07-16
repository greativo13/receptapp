# 🍳 Receptjeim — TikTok recept-gyűjtő és étrendtervező

Egyszerű, build nélküli web-app: TikTok / Instagram / Facebook receptes videókból gyűjtött receptek tárolása, heti étrend tervezése és bevásárlólista generálása. Magyar felület.

## Funkciók

- **📖 Receptek** — kártyás gyűjtemény kereséssel és kategória-szűrővel, kézi recept-felvétel is
- **🎬 Videó-link beillesztés** — a bedobott linkek várólistára kerülnek, amit egy Claude-feladat dolgoz fel strukturált receptté
- **📅 Étrend** — heti tervező: fent a napok, oldalt 5 étkezés (reggeli, tízórai, ebéd, uzsonna, vacsora)
- **🛒 Bevásárlólista** — a hét étrendjéből összesített, kipipálható hozzávaló-lista
- **⬇️⬆️ Mentés / visszatöltés** — JSON export-import

## Futtatás

```
node server.js
```

majd nyisd meg: http://localhost:8321

## Felépítés

| Fájl | Szerep |
|---|---|
| `index.html`, `style.css`, `app.js` | a felület (vanilla HTML/CSS/JS, nincs build) |
| `recipes.js` | a receptgyűjtemény (`window.RECIPES`) |
| `server.js` | statikus kiszolgáló + link-várólista API (Node, függőségek nélkül) |
| `bejovo-linkek.json` | a feldolgozásra váró videó-linkek (futás közben jön létre) |

Az étrend és a bevásárlólista-pipák a böngésző localStorage-ában tárolódnak; biztonsági mentés az app „Mentés fájlba” gombjával készíthető.
