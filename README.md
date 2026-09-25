# Westeros & Essos

A fan atlas of the known world from *Game of Thrones*, in ten rooms:

- **The Hall**: the front door, with the house words and a door into every room.
- **The Atlas**: an illustrated, season-by-season map. Click a realm, keep, banner, battle, or traveler; scrub seasons 1–8 (or press 1–8, ←/→, P) to watch who holds the land and where everyone is.
- **The Keeps**, **True North**, **The Armory**, **Heroes**, **The Words**, **The Rebellion**, **The Council**, **The Iron Throne**: illustrated chronicles. Every card can be linked to directly, e.g. `#/heroes/sandor-clegane` or `#/weapons/needle`, and most have a "Show on Atlas" link.

Fan work. Show canon, with book notes where the show is silent. Not affiliated with HBO or George R. R. Martin.

## Data

Geography, battles, house control, character presence, and every chronicle are local data in `src/data/`. Atlas panels also enrich from [An API of Ice and Fire](https://anapioficeandfire.com/) and [ThronesAPI](https://thronesapi.com/) portraits, with a local cache if those services are down. Character presence was drafted from [jeffreylancaster/game-of-thrones](https://github.com/jeffreylancaster/game-of-thrones), then hand-curated to one primary pin per person per season. The parchment basemap is an original illustration, not HBO's official map.

## Run

```bash
npm install
npm run dev          # local dev server
npm run lint         # oxlint
npm run build        # typecheck + build to dist/
npm run build:pages  # typecheck + build to docs/ for GitHub Pages
```

GitHub Pages serves `docs/` at `https://milehighpatriot.github.io/game-of-thrones-map/`. Routing is hash-based, so no server rewrites are needed.
