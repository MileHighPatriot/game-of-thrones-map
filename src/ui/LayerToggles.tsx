import { useAtlas } from '../state/AtlasContext.tsx'
import type { LayerKey } from '../types.ts'

const labels: { key: LayerKey; label: string }[] = [
  { key: 'regions', label: 'Regions' },
  { key: 'places', label: 'Places' },
  { key: 'banners', label: 'Banners' },
  { key: 'battles', label: 'Battles' },
  { key: 'characters', label: 'Characters' },
]

export function LayerToggles() {
  const { layers, toggleLayer } = useAtlas()

  return (
    <div className="chrome toggles" role="group" aria-label="Map layers">
      {labels.map((item) => (
        <label key={item.key}>
          <input
            type="checkbox"
            checked={layers[item.key]}
            onChange={() => toggleLayer(item.key)}
          />
          {item.label}
        </label>
      ))}
    </div>
  )
}
