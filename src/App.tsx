import { AtlasMap } from './map/AtlasMap.tsx'
import { AtlasProvider } from './state/AtlasContext.tsx'
import { Header } from './ui/Header.tsx'
import { LayerToggles } from './ui/LayerToggles.tsx'
import { LorePanel } from './ui/LorePanel.tsx'
import { SearchBox } from './ui/SearchBox.tsx'
import { SeasonSlider } from './ui/SeasonSlider.tsx'

export default function App() {
  return (
    <AtlasProvider>
      <div className="app">
        <AtlasMap />
        <Header />
        <SearchBox />
        <LayerToggles />
        <LorePanel />
        <SeasonSlider />
      </div>
    </AtlasProvider>
  )
}
