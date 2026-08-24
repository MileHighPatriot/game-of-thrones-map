import { AtlasMap } from '../map/AtlasMap.tsx'
import { Keybinds } from '../ui/Keybinds.tsx'
import { LayerToggles } from '../ui/LayerToggles.tsx'
import { LorePanel } from '../ui/LorePanel.tsx'
import { MapHud } from '../ui/MapHud.tsx'
import { SearchBox } from '../ui/SearchBox.tsx'
import { SeasonSlider } from '../ui/SeasonSlider.tsx'

export function AtlasPage() {
  return (
    <>
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
