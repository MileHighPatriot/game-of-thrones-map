import { useAtlas } from '../state/AtlasContext.tsx'
import { zoomName } from '../map/zoom.ts'

export function MapHud() {
  const { zoom, fitWorld } = useAtlas()

  return (
    <div className="map-hud">
      <button type="button" onClick={fitWorld}>
        World view
      </button>
      <span>{zoomName(zoom)}</span>
      <small>Scroll to zoom · drag to roam · double-click to dive in</small>
    </div>
  )
}
