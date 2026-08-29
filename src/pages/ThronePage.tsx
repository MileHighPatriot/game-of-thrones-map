import { useEffect } from 'react'
import {
  throneBenches,
  throneChapters,
  throneFaces,
  thronePieces,
  throneQuote,
} from '../data/throne.ts'
import { atlasHref } from '../lib/hashRoute.ts'
import { SiteNav } from '../ui/SiteNav.tsx'

function throneIdFromHash(): string {
  const path = window.location.hash.replace(/^#/, '').replace(/^\/+|\/+$/g, '')
  const parts = path.split('/')
  if (
    (parts[0] === 'throne' || parts[0] === 'iron-throne' || parts[0] === 'ironthrone') &&
    parts[1]
  ) {
    return parts[1]
  }
  return ''
}

function AtlasLink({ locationId }: { locationId: string | null }) {
  if (!locationId) return null
  return (
    <a className="room-atlas" href={atlasHref(locationId)}>
      Show on Atlas
    </a>
  )
}

export function ThronePage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useEffect(() => {
    const scrollTo = () => {
      const id = throneIdFromHash()
      if (!id) return
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const timer = window.setTimeout(scrollTo, 80)
    window.addEventListener('hashchange', scrollTo)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', scrollTo)
    }
  }, [])

  return (
    <div className="throne">
      <SiteNav current="throne" />

      <section className="room-hero">
        <img src={`${asset('throne/hero.jpg')}?v=throne`} alt="" className="room-hero-art" />
        <div className="room-hero-veil" />
        <div className="room-hero-copy">
          <p className="eyebrow">The prize the realm killed for</p>
          <h1>The Iron Throne</h1>
          <p className="room-lede">
            History of the chair, not a king list. Forged from a thousand swords, sharp on purpose,
            sat by madmen and boys, melted by the animal that made it. Show canon, with the books
            where the show is silent.
          </p>
          <nav className="room-index" aria-label="Chapters">
            {throneChapters.map((chapter) => (
              <a key={chapter.id} href={`#/throne/${chapter.id}`}>
                {chapter.nav}
              </a>
            ))}
            <a href="#/throne/metal">The Metal</a>
            <a href="#/throne/sitters">Who sat</a>
          </nav>
        </div>
      </section>

      <blockquote className="throne-quote">
        <p>{throneQuote.line}</p>
        <cite>{throneQuote.attrib}</cite>
      </blockquote>

      {throneChapters.map((chapter, index) => (
        <section
          key={chapter.id}
          id={chapter.id}
          className={`throne-scroll${index % 2 === 1 ? ' is-flip' : ''}`}
        >
          <figure className="throne-scroll-art">
            <img src={`${asset(chapter.image)}?v=throne`} alt="" />
          </figure>
          <div className="throne-scroll-copy">
            <p className="eyebrow">{chapter.kicker}</p>
            <h2>{chapter.title}</h2>
            <p className="throne-scroll-lede">{chapter.lede}</p>
            {chapter.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <AtlasLink locationId={chapter.locationId} />
          </div>
        </section>
      ))}

      <section className="throne-chapter" id="metal">
        <header className="throne-chapter-head">
          <p className="eyebrow">The object</p>
          <h2>The metal</h2>
          <p>
            Swords, fire, steps, heat, cuts, skulls, tapestries, slag, and the wooden chair that
            replaced it. The Iron Throne as a thing, not a dynasty.
          </p>
        </header>
        <div className="throne-place-grid">
          {thronePieces.map((piece) => (
            <article key={piece.id} id={piece.id} className="throne-place">
              <img src={asset(piece.image)} alt={piece.name} />
              <div className="throne-copy">
                <p className="eyebrow">A piece of the chair</p>
                <h3>{piece.name}</h3>
                <p className="throne-role">{piece.what}</p>
                <dl>
                  <div>
                    <dt>The lesson</dt>
                    <dd>{piece.lesson}</dd>
                  </div>
                  <div>
                    <dt>What remains</dt>
                    <dd>{piece.remains}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="throne-chapter" id="sitters">
        <header className="throne-chapter-head">
          <p className="eyebrow">On camera</p>
          <h2>Who sat</h2>
          <p>
            The last dragon, the stags, the Hand who treated it as a court, and the three who closed
            it. Not a Targaryen chart. The people the show lets you watch with the blades behind
            them.
          </p>
        </header>
        {throneBenches.map((bench) => {
          const faces = throneFaces.filter((face) => face.bench === bench)
          return (
            <div key={bench} className="throne-side">
              <p className="eyebrow throne-side-label">{bench}</p>
              <div className="throne-face-grid">
                {faces.map((face) => (
                  <article key={face.id} id={face.id} className="throne-face">
                    <img src={`${asset(face.image)}?v=got`} alt={face.name} />
                    <div className="throne-copy">
                      <p className="eyebrow">{face.office}</p>
                      <h3>{face.name}</h3>
                      <dl>
                        <div>
                          <dt>On the chair</dt>
                          <dd>{face.role}</dd>
                        </div>
                        <div>
                          <dt>What followed</dt>
                          <dd>{face.fate}</dd>
                        </div>
                      </dl>
                      <AtlasLink locationId={face.locationId} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      <section className="throne-close">
        <p className="eyebrow">What is left</p>
        <p className="throne-close-line">The furniture is gone. The realm is not.</p>
      </section>

      <footer className="landing-foot">
        Fan work. Show canon, with book notes where the show is silent. Not affiliated with HBO or
        George R. R. Martin.
      </footer>
    </div>
  )
}
