import { AtlasMap } from './map/AtlasMap.tsx'
import { AtlasProvider } from './state/AtlasContext.tsx'
import { Header } from './ui/Header.tsx'
import { Keybinds } from './ui/Keybinds.tsx'
import { LayerToggles } from './ui/LayerToggles.tsx'
import { LorePanel } from './ui/LorePanel.tsx'
import { MapHud } from './ui/MapHud.tsx'
import { SearchBox } from './ui/SearchBox.tsx'
import { SeasonSlider } from './ui/SeasonSlider.tsx'

export default function App() {
  return (
    <AtlasProvider>
      <div className="app">
        <Keybinds />
        <main className="map-stage">
          <AtlasMap />
          <div className="map-vignette" aria-hidden="true" />
          <div className="chrome-top">
            <Header />
            <SearchBox />
            <LayerToggles />
          </div>
          <LorePanel />
          <SeasonSlider />
          <MapHud />
        </main>
      </div>
    </AtlasProvider>
  )
}
