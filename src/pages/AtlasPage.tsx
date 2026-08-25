import { useEffect, useRef } from 'react'
import { locationById } from '../data/locations.ts'
import { parseAtlasFocus } from '../lib/hashRoute.ts'
import { AtlasMap } from '../map/AtlasMap.tsx'
import { flyZoomFor } from '../map/zoom.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import type { Season } from '../types.ts'
import { Keybinds } from '../ui/Keybinds.tsx'
import { LayerToggles } from '../ui/LayerToggles.tsx'
import { LorePanel } from '../ui/LorePanel.tsx'
import { MapHud } from '../ui/MapHud.tsx'
import { SearchBox } from '../ui/SearchBox.tsx'
import { SeasonSlider } from '../ui/SeasonSlider.tsx'

function HashFocus() {
  const atlas = useAtlas()
  const atlasRef = useRef(atlas)
  atlasRef.current = atlas

  useEffect(() => {
    const apply = () => {
      const { id, season } = parseAtlasFocus()
      if (!id) return
      const { setSelection, flyTo, setExpandedPresence, setSeason } = atlasRef.current
      if (season) setSeason(season as Season)
      const place = locationById[id]
      if (!place) return
      setSelection({ kind: 'location', id: place.id })
      setExpandedPresence(place.id)
      flyTo(place.x, place.y, flyZoomFor('location'))
    }
    const timer = window.setTimeout(apply, 120)
    window.addEventListener('hashchange', apply)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', apply)
    }
  }, [])

  return null
}

export function AtlasPage() {
  return (
    <>
      <HashFocus />
      <Keybinds />
      <main className="map-stage">
        <AtlasMap />
        <div className="map-vignette" aria-hidden="true" />
        <div className="chrome-top">
          <SearchBox />
          <LayerToggles />
        </div>
        <LorePanel />
        <SeasonSlider />
        <MapHud />
      </main>
    </>
  )
}
