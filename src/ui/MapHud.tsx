import { useAtlas } from '../state/AtlasContext.tsx'
import { zoomName } from '../map/zoom.ts'

export function MapHud() {
  const { zoom, fitWorld } = useAtlas()

  return (
    <div className="map-hud">
      <button type="button" onClick={fitWorld}>
        Continent
      </button>
      <span>{zoomName(zoom)}</span>
    </div>
  )
}
