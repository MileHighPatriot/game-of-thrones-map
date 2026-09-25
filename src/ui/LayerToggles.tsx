import { useEffect, useId, useRef, useState } from 'react'
import { useAtlas } from '../state/useAtlas.ts'
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
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const listId = useId()

  // An open menu closes on Escape or on a click anywhere outside it.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      // Escape here closes the menu only; the Atlas keeps its open panel. Listening on
      // window in the capture phase runs this before the Atlas keybinds on document.
      event.stopPropagation()
      setOpen(false)
      toggleRef.current?.focus()
    }
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && menuRef.current?.contains(event.target)) return
      setOpen(false)
    }
    window.addEventListener('keydown', onKey, true)
    document.addEventListener('pointerdown', onPointer, true)
    return () => {
      window.removeEventListener('keydown', onKey, true)
      document.removeEventListener('pointerdown', onPointer, true)
    }
  }, [open])

  return (
    <div className="layers-menu" ref={menuRef}>
      <button
        ref={toggleRef}
        type="button"
        className="layers-toggle"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        Layers
      </button>
      {open && (
        <div id={listId} className="toggles" role="group" aria-label="Map layers">
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
