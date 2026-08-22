import { useMemo, useState } from 'react'
import { battles } from '../data/battles.ts'
import { characters } from '../data/characters.ts'
import { houses } from '../data/houses.ts'
import { locationById, locations } from '../data/locations.ts'
import { presenceBySeason } from '../data/presence.ts'
import { regionFeatures } from '../data/regions.ts'
import { routes } from '../data/routes.ts'
import { sites } from '../data/sites.ts'
import { flyZoomFor } from '../map/zoom.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import type { Selection } from '../types.ts'

type Hit = {
  id: string
  label: string
  kind: Selection['kind']
  x: number
  y: number
}

export function SearchBox() {
  const { season, setSelection, flyTo } = useAtlas()
  const [query, setQuery] = useState('')

  const hits = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (needle.length < 2) return []

    const results: Hit[] = []

    for (const region of regionFeatures) {
      if (region.properties.name.toLowerCase().includes(needle)) {
        results.push({
          id: region.properties.id,
          label: region.properties.name,
          kind: 'region',
          x: region.properties.banner[0],
          y: region.properties.banner[1],
        })
      }
    }

    for (const place of locations) {
      if (place.name.toLowerCase().includes(needle)) {
        results.push({
          id: place.id,
          label: place.name,
          kind: 'location',
          x: place.x,
          y: place.y,
        })
      }
    }

    for (const site of sites) {
      if (site.name.toLowerCase().includes(needle)) {
        results.push({
          id: site.id,
          label: site.name,
          kind: 'site',
          x: site.x,
          y: site.y,
        })
      }
    }

    for (const route of routes) {
      if (route.name.toLowerCase().includes(needle)) {
        const mid = route.points[Math.floor(route.points.length / 2)]
        results.push({
          id: route.id,
          label: route.name,
          kind: 'route',
          x: mid?.[0] ?? 800,
          y: mid?.[1] ?? 450,
        })
      }
    }

    for (const house of houses) {
      if (
        house.name.toLowerCase().includes(needle) ||
        house.shortName.toLowerCase().includes(needle)
      ) {
        const seat = house.seatLocationId ? locationById[house.seatLocationId] : undefined
        results.push({
          id: house.id,
          label: house.name,
          kind: 'house',
          x: seat?.x ?? 800,
          y: seat?.y ?? 450,
        })
      }
    }

    for (const character of characters) {
      if (character.name.toLowerCase().includes(needle)) {
        const pin = presenceBySeason[season].find((item) => item.characterId === character.id)
        const place = pin ? locationById[pin.locationId] : undefined
        results.push({
          id: character.id,
          label: character.name,
          kind: 'character',
          x: place?.x ?? 800,
          y: place?.y ?? 450,
        })
      }
    }

    for (const battle of battles) {
      if (battle.name.toLowerCase().includes(needle)) {
        const place = locationById[battle.locationId]
        results.push({
          id: battle.id,
          label: `${battle.name} (S${battle.season})`,
          kind: 'battle',
          x: place?.x ?? 800,
          y: place?.y ?? 450,
        })
      }
    }

    return results.slice(0, 10)
  }, [query, season])

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search places, streets, houses…"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        aria-label="Search the atlas"
      />
      {hits.length > 0 && (
        <ul>
          {hits.map((hit) => (
            <li key={`${hit.kind}-${hit.id}`}>
              <button
                type="button"
                onClick={() => {
                  setSelection({ kind: hit.kind, id: hit.id })
                  flyTo(hit.x, hit.y, flyZoomFor(hit.kind))
                  setQuery('')
                }}
              >
                <em>{hit.kind}</em>
                {hit.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
