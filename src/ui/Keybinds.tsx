import { useEffect } from 'react'
import { useAtlas } from '../state/AtlasContext.tsx'
import type { Season } from '../types.ts'

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false
  return target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable
}

export function Keybinds() {
  const { season, setSeason, setSelection, setExpandedPresence, playing, setPlaying } = useAtlas()

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) return
      if (event.key === 'Escape') {
        setSelection(null)
        setExpandedPresence(null)
        return
      }
      if (event.key >= '1' && event.key <= '8') {
        setPlaying(false)
        setSeason(Number(event.key) as Season)
        return
      }
      if (event.key === 'p' || event.key === 'P') {
        event.preventDefault()
        if (playing) {
          setPlaying(false)
          return
        }
        if (season === 8) setSeason(1)
        setPlaying(true)
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setPlaying(false)
        if (season > 1) setSeason((season - 1) as Season)
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setPlaying(false)
        if (season < 8) setSeason((season + 1) as Season)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [season, playing, setSeason, setSelection, setExpandedPresence, setPlaying])

  return null
}
