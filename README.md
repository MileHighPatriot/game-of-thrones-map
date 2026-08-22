# Westeros & Essos Atlas

An illustrated, season-by-season map of the known world from *Game of Thrones*. Click regions, house banners, battles, and travelers. Scrub seasons 1–8 to watch who holds the land.

Fan work. Show canon. Not affiliated with HBO or George R. R. Martin.

## What is local vs API

The Ice and Fire API has houses and characters, not a map. This atlas keeps geography, battles, house control, and character presence in local data. Popups enrich from [An API of Ice and Fire](https://anapioficeandfire.com/) and optional [ThronesAPI](https://thronesapi.com/) portraits, with a local cache if those services are down.

Character presence was drafted from the scene/location work in [jeffreylancaster/game-of-thrones](https://github.com/jeffreylancaster/game-of-thrones), then hand-curated to one primary pin per person per season.

The parchment basemap is an original illustration, not HBO’s official map.

## Run

```bash
npm install
npm run dev
```

```bash
npm run build
```

The build is static and GitHub Pages–ready (`base: './'`).
