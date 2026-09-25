import type { SyntheticEvent } from 'react'
import { keeps } from '../data/keeps.ts'
import { atlasHref } from '../lib/hashRoute.ts'
import { heroImg, LANDSCAPE, lazyImg } from '../lib/img.ts'
import { useHashScroll } from '../lib/useHashScroll.ts'
import { MAIN_ID, SiteNav } from '../ui/SiteNav.tsx'

// Keeps whose atlas pin is the surrounding city rather than a pin of their own.
const keepLocationAlias: Record<string, string> = {
  'red-keep': 'kings-landing',
  'new-castle': 'white-harbor',
  hightower: 'oldtown',
}

function keepLocationId(id: string): string {
  return keepLocationAlias[id] ?? id
}

const pendingArt = `${import.meta.env.BASE_URL}keeps/pending.svg`

// Book-only keeps point at keeps/got/<id>.jpg before the artwork exists.
// Swap to the placeholder once; a dropped-in JPG shows up with no code change.
function showPendingArt(event: SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget
  if (img.dataset.pending) return
  img.dataset.pending = 'true'
  img.style.objectPosition = 'center'
  img.src = pendingArt
}

export function KeepsPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useHashScroll('keeps')

  return (
    <div className="keeps">
      <SiteNav current="keeps" />
      <main id={MAIN_ID} tabIndex={-1}>
        <section className="room-hero">
          <img src={asset('keeps/got/hero.jpg')} alt="" className="room-hero-art" {...heroImg()} />
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
              <img
                src={asset(keep.image)}
                alt={keep.name}
                {...lazyImg(LANDSCAPE)}
                style={keep.focus ? { objectPosition: keep.focus } : undefined}
                onError={showPendingArt}
              />
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
      </main>
      <footer className="landing-foot">
        Fan work. Show canon, with book notes where the show is silent. Not affiliated with HBO or George R. R. Martin.
      </footer>
    </div>
  )
}
