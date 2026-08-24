import { hrefFor, type Route } from '../lib/hashRoute.ts'

export function SiteNav({ current, overlay = false }: { current: Route; overlay?: boolean }) {
  return (
    <header className={`site-nav${overlay ? ' is-overlay' : ' is-solid'}`}>
      <a className="site-wordmark" href={hrefFor('hall')}>
        <small>The known world</small>
        Westeros &amp; Essos
      </a>
      <nav className="site-tabs" aria-label="Site">
        <a className={current === 'hall' ? 'active' : ''} href={hrefFor('hall')} aria-current={current === 'hall' ? 'page' : undefined}>
          The Hall
        </a>
        <a className={current === 'atlas' ? 'active' : ''} href={hrefFor('atlas')} aria-current={current === 'atlas' ? 'page' : undefined}>
          The Atlas
        </a>
        <a className={current === 'armory' ? 'active' : ''} href={hrefFor('armory')} aria-current={current === 'armory' ? 'page' : undefined}>
          The Armory
        </a>
        <a className={current === 'keeps' ? 'active' : ''} href={hrefFor('keeps')} aria-current={current === 'keeps' ? 'page' : undefined}>
          The Keeps
        </a>
      </nav>
    </header>
  )
}
