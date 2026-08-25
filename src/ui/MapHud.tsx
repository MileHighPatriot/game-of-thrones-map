import { focusRegionId } from '../lib/focus.ts'
import { regionShortName } from '../data/regions.ts'
import { useAtlas } from '../state/AtlasContext.tsx'

export function MapHud() {
  const { fitWorld, season, selection } = useAtlas()
  const focus = focusRegionId(selection, season)
  const realm = focus ? regionShortName[focus] ?? focus : null

  return (
    <div className="map-hud">
      <button type="button" onClick={fitWorld}>
        Continent
      </button>
      {realm ? <small>{realm}</small> : null}
    </div>
  )
}
