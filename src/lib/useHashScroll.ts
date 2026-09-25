import { useEffect } from 'react'
import { hashAnchor, type Route } from './hashRoute.ts'
import { prefersReducedMotion } from './motion.ts'

/** How long a deep link keeps re-pinning its target while images above it load. */
const PIN_MS = 2500

/** A glide that never reports `scrollend` still hands over to the pin after this long. */
const GLIDE_MS = 1200

const USER_EVENTS = ['wheel', 'touchstart', 'keydown', 'mousedown'] as const

function byId(id: string): HTMLElement | null {
  return document.getElementById(id)
}

/** DOM id for a face card, kept apart from chapter ids that reuse the same name. */
export function faceId(id: string): string {
  return `face-${id}`
}

/**
 * For pages where a chapter and a face share a name (Council, Throne): the chapter wins,
 * as it always did, and a name only a face carries (`#/council/varys`) opens the face.
 */
export function chapterOrFace(id: string): HTMLElement | null {
  return document.getElementById(id) ?? document.getElementById(faceId(id))
}

/**
 * Scrolls a chronicle page to the anchor in its hash, e.g. `#/heroes/sandor-clegane`.
 *
 * On arrival the page jumps straight to the target, then keeps it pinned while images
 * above it load and push it down: for about 2.5 s, or until the reader scrolls, taps,
 * clicks, or presses a key. In-page index links still glide to their chapter unless the
 * reader prefers reduced motion, and are pinned once they land.
 *
 * `resolve` finds the element for an anchor and defaults to the element with that id.
 * Pass a module-level function so the effect does not re-run on every render.
 */
export function useHashScroll(route: Route, resolve: (id: string) => HTMLElement | null = byId) {
  useEffect(() => {
    let cancelCurrent: (() => void) | null = null

    /** Runs `onUser` once on the reader's first scroll, tap, click or key. Returns a remover. */
    const onFirstUserInput = (onUser: () => void) => {
      const handler = () => onUser()
      for (const type of USER_EVENTS) {
        window.addEventListener(type, handler, { capture: true, passive: true })
      }
      return () => {
        for (const type of USER_EVENTS) window.removeEventListener(type, handler, true)
      }
    }

    const pin = (id: string) => {
      const target = resolve(id)
      if (!target) return
      const jump = () => resolve(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
      jump()
      // The page root grows as images above the target load; re-pin on each growth.
      const observer = new ResizeObserver(jump)
      observer.observe(target.closest('.app') ?? document.body)
      const stop = () => {
        observer.disconnect()
        window.clearTimeout(timer)
        removeUser()
        if (cancelCurrent === stop) cancelCurrent = null
      }
      const timer = window.setTimeout(stop, PIN_MS)
      const removeUser = onFirstUserInput(stop)
      cancelCurrent = stop
    }

    const glide = (id: string, target: HTMLElement) => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const land = () => {
        cancel()
        pin(id)
      }
      const cancel = () => {
        window.removeEventListener('scrollend', land)
        window.clearTimeout(timer)
        removeUser()
        if (cancelCurrent === cancel) cancelCurrent = null
      }
      window.addEventListener('scrollend', land)
      const timer = window.setTimeout(land, GLIDE_MS)
      // If the reader takes over mid-glide, leave the page where they put it.
      const removeUser = onFirstUserInput(cancel)
      cancelCurrent = cancel
    }

    const go = (fromLink: boolean) => {
      cancelCurrent?.()
      const id = hashAnchor(route)
      if (!id) return
      const target = resolve(id)
      if (!target) return
      if (fromLink && !prefersReducedMotion()) glide(id, target)
      else pin(id)
    }

    go(false)
    const onHash = () => go(true)
    window.addEventListener('hashchange', onHash)
    return () => {
      window.removeEventListener('hashchange', onHash)
      cancelCurrent?.()
    }
  }, [route, resolve])
}
