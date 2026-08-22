import { useAtlas } from '../state/AtlasContext.tsx'
import type { LayerKey } from '../types.ts'

const labels: { key: LayerKey; label: string }[] = [
  { key: 'regions', label: 'Regions' },
  { key: 'places', label: 'Places' },
  { key: 'roads', label: 'Roads' },
  { key: 'banners', label: 'Banners' },
  { key: 'battles', label: 'Battles' },
  { key: 'characters', label: 'Characters' },
]

export function LayerToggles() {
  const { layers, toggleLayer } = useAtlas()

  return (
    <div className="toggles" role="group" aria-label="Map layers">
      {labels.map((item) => (
        <button
          key={item.key}
          type="button"
          className={layers[item.key] ? 'active' : ''}
          aria-pressed={layers[item.key]}
          onClick={() => toggleLayer(item.key)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
