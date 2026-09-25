import L, { type DivIcon } from 'leaflet'
import { escapeHtml } from '../lib/people.ts'

/**
 * One `L.DivIcon` per distinct look. react-leaflet swaps a marker's DOM whenever its
 * `icon` prop changes identity, so handing back the same object for the same markup
 * keeps an Atlas re-render from rebuilding every pin.
 */
const cache = new Map<string, DivIcon>()
const MAX_ICONS = 1500

export function icon(
  html: string,
  className: string,
  size: [number, number],
  anchor?: [number, number],
): DivIcon {
  const iconAnchor = anchor ?? [size[0] / 2, size[1] / 2]
  const key = `${className}|${size[0]}x${size[1]}|${iconAnchor[0]},${iconAnchor[1]}|${html}`
  let found = cache.get(key)
  if (!found) {
    if (cache.size >= MAX_ICONS) cache.clear()
    found = L.divIcon({ className, html, iconSize: size, iconAnchor })
    cache.set(key, found)
  }
  return found
}

/** A name for screen readers inside a marker's markup, so a pin announces what it is. */
export function srName(name: string): string {
  return `<span class="sr-only">${escapeHtml(name)}</span>`
}
