import { useEffect } from 'react'
import { keeps } from '../data/keeps.ts'
import { atlasHref } from '../lib/hashRoute.ts'
import { SiteNav } from '../ui/SiteNav.tsx'

function keepLocationId(id: string): string {
  if (id === 'red-keep') return 'kings-landing'
  return id
}

function keepIdFromHash(): string {
  const path = window.location.hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '')
  const parts = path.split('/')
  if ((parts[0] === 'keeps' || parts[0] === 'castles') && parts[1]) return parts[1]
  return ''
}

export function KeepsPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useEffect(() => {
    const scrollToKeep = () => {
      const id = keepIdFromHash()
      if (!id) return
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const timer = window.setTimeout(scrollToKeep, 80)
    window.addEventListener('hashchange', scrollToKeep)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', scrollToKeep)
    }
  }, [])

  return (
    <div className="keeps">
      <SiteNav current="keeps" />
      <section className="room-hero">
        <img src={asset('keeps/hero.jpg')} alt="" className="room-hero-art" />
        <div className="room-hero-veil" />
        <div className="room-hero-copy">
          <p className="eyebrow">Stone of the Seven Kingdoms</p>
          <h1>The Keeps</h1>
          <p className="room-lede">
            Who raised them, who sat them, and what was done in their halls. Founders in the Age of
            Heroes, the lords of the war, and the nights that named them.
          </p>
          <nav className="room-index" aria-label="Castles">
            {keeps.map((keep) => (
              <a key={keep.id} href={`#/keeps/${keep.id}`}>
                {keep.name}
              </a>
            ))}
          </nav>
        </div>
      </section>
      <div className="keeps-grid">
        {keeps.map((keep) => (
          <article key={keep.id} id={keep.id} className="keep-card">
            <img src={asset(keep.image)} alt={keep.name} />
            <div className="keep-copy">
              <p className="eyebrow">{keep.region}</p>
              <h2>{keep.name}</h2>
              <dl>
                <div>
                  <dt>Who built it</dt>
                  <dd>{keep.built}</dd>
                </div>
                <div>
                  <dt>Who held it</dt>
                  <dd>{keep.lords}</dd>
                </div>
                <div>
                  <dt>What happened here</dt>
                  <dd>
                    <ul className="keep-events">
                      {keep.events.map((event) => (
                        <li key={event.title}>
                          <strong>{event.title}.</strong> {event.note}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <a className="room-atlas" href={atlasHref(keepLocationId(keep.id))}>
                Show on Atlas
              </a>
            </div>
          </article>
        ))}
      </div>
      <footer className="landing-foot">
        Fan work. Show canon, with book notes where the show is silent. Not affiliated with HBO or George R. R. Martin.
      </footer>
    </div>
  )
}
