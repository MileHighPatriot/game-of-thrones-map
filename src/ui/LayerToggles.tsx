import { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  return (
    <div className="layers-menu">
      <button type="button" className="layers-toggle" onClick={() => setOpen((value) => !value)}>
        Layers
      </button>
      {open && (
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
          <p className="layers-hint">Click a realm to open it. Click the sea or Continent to close it.</p>
        </div>
      )}
    </div>
  )
}
