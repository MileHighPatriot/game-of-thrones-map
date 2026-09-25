import {
  rebellionChapters,
  rebellionFaces,
  rebellionPlaces,
  rebellionSides,
} from '../data/rebellion.ts'
import { atlasHref } from '../lib/hashRoute.ts'
import { heroImg, lazyImg, PORTRAIT, WIDE } from '../lib/img.ts'
import { useHashScroll } from '../lib/useHashScroll.ts'
import { MAIN_ID, SiteNav } from '../ui/SiteNav.tsx'

function AtlasLink({ locationId }: { locationId: string | null }) {
  if (!locationId) return null
  return (
    <a className="room-atlas" href={atlasHref(locationId)}>
      Show on Atlas
    </a>
  )
}

export function RobertsPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useHashScroll('roberts')

  return (
    <div className="roberts">
      <SiteNav current="roberts" />
      <main id={MAIN_ID} tabIndex={-1}>
        <section className="room-hero">
          <img src={asset('roberts/got/hero.jpg')} alt="" className="room-hero-art" {...heroImg()} />
          <div className="room-hero-veil" />
          <div className="room-hero-copy">
            <p className="eyebrow">The war that made a king</p>
            <h1>The Rebellion</h1>
            <p className="room-lede">
              From Duskendale to the ruby ford. Ten chapters, the places that held them, and the
              faces that rode. Show canon, with the books where the show is silent.
            </p>
            <nav className="room-index" aria-label="Chapters">
              {rebellionChapters.map((chapter) => (
                <a key={chapter.id} href={`#/rebellion/${chapter.id}`}>
                  {chapter.nav}
                </a>
              ))}
              <a href="#/rebellion/places">Places</a>
              <a href="#/rebellion/faces">Faces</a>
            </nav>
          </div>
        </section>

        {rebellionChapters.map((chapter, index) => (
          <section
            key={chapter.id}
            id={chapter.id}
            className={`roberts-scroll${index % 2 === 1 ? ' is-flip' : ''}`}
          >
            <figure className="roberts-scroll-art">
              <img src={asset(chapter.image)} alt="" {...lazyImg(WIDE)} />
            </figure>
            <div className="roberts-scroll-copy">
              <p className="eyebrow">{chapter.kicker}</p>
              <h2>{chapter.title}</h2>
              <p className="roberts-scroll-lede">{chapter.lede}</p>
              {chapter.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <AtlasLink locationId={chapter.locationId} />
            </div>
          </section>
        ))}

        <section className="roberts-chapter" id="places">
          <header className="roberts-chapter-head">
            <p className="eyebrow">The map of the war</p>
            <h2>Key locations</h2>
            <p>
              Dun ports, lists, fords, a starving castle, and a tower the maesters barely admitted.
              These are the rooms the rebellion was fought in.
            </p>
          </header>
          <div className="roberts-place-grid">
            {rebellionPlaces.map((place) => (
              <article key={place.id} id={place.id} className="roberts-place">
                <img src={asset(place.image)} alt={place.name} {...lazyImg(WIDE)} />
                <div className="roberts-copy">
                  <p className="eyebrow">{place.region}</p>
                  <h3>{place.name}</h3>
                  <p className="roberts-role">{place.role}</p>
                  <p>{place.happened}</p>
                  <AtlasLink locationId={place.locationId} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="roberts-chapter" id="faces">
          <header className="roberts-chapter-head">
            <p className="eyebrow">Who rode</p>
            <h2>Faces of the rebellion</h2>
            <p>
              Rebels, the crown, the lions who waited, the white cloaks at the wrong door, and the
              dragons who left by ship. Rhaenys and the infant Aegon are kept on Elia’s page. There
              are no pictures of that hour.
            </p>
          </header>
          {rebellionSides.map((side) => {
            const faces = rebellionFaces.filter((face) => face.side === side)
            return (
              <div key={side} className="roberts-side">
                <p className="eyebrow roberts-side-label">{side}</p>
                <div className="roberts-face-grid">
                  {faces.map((face) => (
                    <article key={face.id} id={face.id} className="roberts-face">
                      <img src={asset(face.image)} alt={face.name} {...lazyImg(PORTRAIT)} />
                      <div className="roberts-copy">
                        <p className="eyebrow">{face.house}</p>
                        <h3>{face.name}</h3>
                        <dl>
                          <div>
                            <dt>In the war</dt>
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
      </main>

      <footer className="landing-foot">
        Fan work. Show canon, with book notes where the show is silent. Not affiliated with HBO or
        George R. R. Martin.
      </footer>
    </div>
  )
}
