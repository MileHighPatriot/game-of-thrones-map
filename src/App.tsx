import { AtlasMap } from './map/AtlasMap.tsx'
import { AtlasProvider } from './state/AtlasContext.tsx'
import { Header } from './ui/Header.tsx'
import { LayerToggles } from './ui/LayerToggles.tsx'
import { LorePanel } from './ui/LorePanel.tsx'
import { MapHud } from './ui/MapHud.tsx'
import { SearchBox } from './ui/SearchBox.tsx'
import { SeasonSlider } from './ui/SeasonSlider.tsx'

export default function App() {
  return (
    <AtlasProvider>
      <div className="app">
        <header className="topbar">
          <Header />
          <SearchBox />
          <LayerToggles />
        </header>
        <div className="workspace">
          <main className="map-stage">
            <AtlasMap />
            <div className="map-vignette" aria-hidden="true" />
            <MapHud />
          </main>
          <LorePanel />
        </div>
        <SeasonSlider />
      </div>
    </AtlasProvider>
  )
}
