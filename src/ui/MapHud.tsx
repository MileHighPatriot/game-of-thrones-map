import { presenceBySeason } from '../data/presence.ts'
import { useAtlas } from '../state/AtlasContext.tsx'
import { zoomName } from '../map/zoom.ts'

export function MapHud() {
  const { zoom, fitWorld, season, layers } = useAtlas()
  const onBoard = presenceBySeason[season].length

  return (
    <div className="map-hud">
      <button type="button" onClick={fitWorld}>
        Continent
      </button>
      <span>{zoomName(zoom)}</span>
      {layers.characters && (
        <small>
          {onBoard} {onBoard === 1 ? 'traveler' : 'travelers'}
        </small>
      )}
    </div>
  )
}
