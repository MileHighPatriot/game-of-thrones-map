import { useLayoutEffect, useRef, type MouseEvent } from 'react'
import { hrefFor, type Route } from '../lib/hashRoute.ts'

/** The id every page gives its `<main>` so the skip link has somewhere to land. */
export const MAIN_ID = 'main-content'

const TABS: { route: Route; label: string }[] = [
  { route: 'hall', label: 'The Hall' },
  { route: 'atlas', label: 'The Atlas' },
  { route: 'keeps', label: 'The Keeps' },
  { route: 'north', label: 'True North' },
  { route: 'armory', label: 'The Armory' },
  { route: 'heroes', label: 'Heroes' },
  { route: 'words', label: 'The Words' },
  { route: 'roberts', label: 'The Rebellion' },
  { route: 'council', label: 'The Council' },
  { route: 'throne', label: 'The Iron Throne' },
]

/**
 * Keeps `--nav-h` on the root element equal to the nav's rendered height, so the Atlas
 * controls and deep-link scroll margins sit just below it at every width.
 */
function useNavHeight() {
  const ref = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    const node = ref.current
    if (!node) return
    const root = document.documentElement
    const write = () => root.style.setProperty('--nav-h', `${Math.round(node.getBoundingClientRect().height)}px`)
    write()
    // On narrow screens the tabs are one scrolling row: bring the current tab into view.
    const tabs = node.querySelector<HTMLElement>('.site-tabs')
    const active = tabs?.querySelector<HTMLElement>('a.active')
    if (tabs && active && tabs.scrollWidth > tabs.clientWidth) {
      const offset = active.getBoundingClientRect().left - tabs.getBoundingClientRect().left
      tabs.scrollLeft += offset - (tabs.clientWidth - active.offsetWidth) / 2
    }
    const observer = new ResizeObserver(write)
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return ref
}

function skipToMain(event: MouseEvent<HTMLAnchorElement>) {
  // The site routes on the hash, so a plain #main-content link would open the Hall.
  event.preventDefault()
  const main = document.getElementById(MAIN_ID)
  if (!main) return
  main.focus({ preventScroll: true })
  main.scrollIntoView({ block: 'start' })
}

export function SiteNav({ current, overlay = false }: { current: Route; overlay?: boolean }) {
  const ref = useNavHeight()
  return (
    <header ref={ref} className={`site-nav${overlay ? ' is-overlay' : ' is-solid'}`}>
      <a className="skip-link" href={`#${MAIN_ID}`} onClick={skipToMain}>
        Skip to content
      </a>
      <a className="site-wordmark" href={hrefFor('hall')}>
        <small>The known world</small>
        Westeros &amp; Essos
      </a>
      <nav className="site-tabs" aria-label="Site">
        {TABS.map((tab) => (
          <a
            key={tab.route}
            className={current === tab.route ? 'active' : ''}
            href={hrefFor(tab.route)}
            aria-current={current === tab.route ? 'page' : undefined}
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
