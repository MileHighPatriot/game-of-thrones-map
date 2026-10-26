import { lazy, Suspense, useEffect, useMemo, useRef, useState, type SyntheticEvent } from 'react'
import {
  dangerLegend,
  deaths,
  dragonQuote,
  dragons,
  houseOrder,
  isShown,
  lairs,
  legends,
  UNTOLD,
  type Dragon,
} from '../data/dragons.ts'
import { atlasHref } from '../lib/hashRoute.ts'
import { heroImg, LANDSCAPE, lazyImg, WIDE } from '../lib/img.ts'
import { useHashScroll } from '../lib/useHashScroll.ts'
import { MAIN_ID, SiteNav } from '../ui/SiteNav.tsx'

const DragonYard = lazy(() => import('../ui/DragonYard.tsx').then((m) => ({ default: m.DragonYard })))

type Order = 'size' | 'danger' | 'age' | 'rider'

const ORDERS: { key: Order; label: string; badge: string }[] = [
  { key: 'size', label: 'Size', badge: 'by size' },
  { key: 'danger', label: 'Danger', badge: 'by danger' },
  { key: 'age', label: 'Age', badge: 'oldest first' },
  { key: 'rider', label: 'Rider', badge: 'by rider' },
]

const pendingArt = `${import.meta.env.BASE_URL}dragons/pending.svg`

// Cards point at their final art path before the file exists. Swap to the placeholder
// once; a dropped-in JPG shows up with no code change.
function showPendingArt(event: SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget
  if (img.dataset.pending) return
  img.dataset.pending = 'true'
  img.style.objectPosition = 'center'
  img.src = pendingArt
}

function sortDragons(order: Order): Dragon[] {
  const list = [...dragons]
  if (order === 'size') return list.sort((a, b) => a.sizeRank - b.sizeRank)
  if (order === 'danger') return list.sort((a, b) => b.danger - a.danger || a.sizeRank - b.sizeRank)
  if (order === 'age') return list.sort((a, b) => a.born - b.born || a.sizeRank - b.sizeRank)
  return list.sort(
    (a, b) => houseOrder.indexOf(a.house) - houseOrder.indexOf(b.house) || a.sizeRank - b.sizeRank,
  )
}

function YardChapter() {
  const ref = useRef<HTMLElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (window.location.hash.includes('/scale')) setReady(true)
    const el = ref.current
    if (!el) return
    const watch = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setReady(true)
      },
      { rootMargin: '240px' },
    )
    watch.observe(el)
    return () => watch.disconnect()
  }, [])

  return (
    <section className="dragons-chapter" id="scale" ref={ref}>
      <header className="dragons-chapter-head">
        <p className="eyebrow">Snout to tail</p>
        <h2>The yard</h2>
        <p>
          One shape, every size. Vhagar is 150 metres, the length the show’s effects crew gave her.
          Balerion is a little longer, because every history says he was the largest. Drogon is 55.
          The rest follow the order of the register, including the two ratios the story already tells:
          Quicksilver a quarter of Balerion, Arrax a fifth of Vhagar. These are a working scale, not
          tape measures from the books.
        </p>
      </header>
      {ready ? (
        <Suspense fallback={<p className="dragons-yard-note">Raising the yard…</p>}>
          <DragonYard dragons={dragons} />
        </Suspense>
      ) : (
        <p className="dragons-yard-note">The yard loads when you reach it.</p>
      )}
    </section>
  )
}

function AtlasLink({ locationId }: { locationId: string | null }) {
  if (!locationId) return null
  return (
    <a className="room-atlas" href={atlasHref(locationId)}>
      Show on Atlas
    </a>
  )
}

function Flames({ level }: { level: Dragon['danger'] }) {
  const label = dangerLegend.find((d) => d.level === level)?.label ?? ''
  return (
    <span className="dragons-flames" role="img" aria-label={`Danger ${level} of 5, ${label}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= level ? 'is-lit' : ''} aria-hidden="true">
          ▲
        </span>
      ))}
      <span className="dragons-flames-label">{label}</span>
    </span>
  )
}

export function DragonsPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
  const [order, setOrder] = useState<Order>('size')
  const sorted = useMemo(() => sortDragons(order), [order])
  const badge = ORDERS.find((o) => o.key === order)?.badge ?? ''

  useHashScroll('dragons')

  return (
    <div className="dragons">
      <SiteNav current="dragons" />
      <main id={MAIN_ID} tabIndex={-1}>
        <section className="room-hero">
          <img
            src={asset('dragons/art/hero.jpg')}
            alt=""
            className="room-hero-art"
            {...heroImg()}
            onError={showPendingArt}
          />
          <div className="room-hero-veil" />
          <div className="room-hero-copy">
            <p className="eyebrow">Fire made flesh</p>
            <h1>The Dragons</h1>
            <p className="room-lede">
              Every named dragon of the known world: the three that hatched on a pyre, the ones
              that danced over Westeros a hundred and seventy years before, and the ones only the
              books remember. Ranked by size and by what they burned. Battles and fates run only
              as far as the show has.
            </p>
            <nav className="room-index" aria-label="Chapters">
              <a href="#/dragons/scale">The Yard</a>
              <a href="#/dragons/register">The Register</a>
              <a href="#/dragons/lairs">Lairs</a>
              <a href="#/dragons/deaths">How They Die</a>
              <a href="#/dragons/legends">Bones &amp; Legends</a>
            </nav>
          </div>
        </section>

        <blockquote className="dragons-quote">
          <p>{dragonQuote.line}</p>
          <cite>{dragonQuote.attrib}</cite>
        </blockquote>

        <YardChapter />

        <section className="dragons-chapter" id="register">
          <header className="dragons-chapter-head">
            <p className="eyebrow">{dragons.length} dragons</p>
            <h2>The register</h2>
            <p>
              From the Black Dread to the last sick hatchling in the Pit. Order them by size, by how
              much you should fear them, by age, or by who sat them. Every card keeps its link.
            </p>
            <div className="dragons-order" role="group" aria-label="Order the register">
              <span className="dragons-order-label">Order by</span>
              {ORDERS.map((o) => (
                <button
                  key={o.key}
                  type="button"
                  className={order === o.key ? 'active' : ''}
                  aria-pressed={order === o.key}
                  onClick={() => setOrder(o.key)}
                >
                  {o.label}
                </button>
              ))}
            </div>
            <dl className="dragons-legend">
              {dangerLegend.map((d) => (
                <div key={d.level}>
                  <dt>
                    <Flames level={d.level} />
                  </dt>
                  <dd>{d.means}</dd>
                </div>
              ))}
            </dl>
          </header>

          <div className="dragons-grid">
            {sorted.map((dragon, index) => {
              const battles = dragon.battles.filter((b) => isShown(b.aired))
              const fate = isShown(dragon.fate.aired) ? dragon.fate.text : UNTOLD
              return (
                <article key={dragon.id} id={dragon.id} className="dragons-card">
                  <figure className="dragons-art">
                    <img
                      src={asset(dragon.image)}
                      alt={dragon.name}
                      style={dragon.focus ? { objectPosition: dragon.focus } : undefined}
                      {...lazyImg(LANDSCAPE)}
                      onError={showPendingArt}
                    />
                    <figcaption className="dragons-rank">
                      <strong>#{index + 1}</strong> {badge}
                    </figcaption>
                  </figure>
                  <div className="dragons-copy">
                    <p className="eyebrow">
                      <span className="dragons-swatch" style={{ background: dragon.swatch }} aria-hidden="true" />
                      {dragon.era} · {dragon.bornLabel}
                    </p>
                    <h3>
                      {dragon.name}
                      {dragon.epithet && <small>{dragon.epithet}</small>}
                    </h3>
                    <p className="dragons-riders">
                      {dragon.riders.length === 1 && dragon.riders[0].startsWith('None')
                        ? dragon.riders[0]
                        : `Ridden by ${dragon.riders.join(', ')}`}
                    </p>
                    <dl className="dragons-facts">
                      <div>
                        <dt>Size · #{dragon.sizeRank}</dt>
                        <dd>
                          {dragon.length}
                          <span className="dragons-note">{dragon.sizeNote}</span>
                        </dd>
                      </div>
                      <div>
                        <dt>Danger</dt>
                        <dd>
                          <Flames level={dragon.danger} />
                          <span className="dragons-note">{dragon.dangerWhy}</span>
                        </dd>
                      </div>
                      <div>
                        <dt>Colour</dt>
                        <dd>{dragon.colour}</dd>
                      </div>
                      <div>
                        <dt>Temper</dt>
                        <dd>{dragon.temper}</dd>
                      </div>
                      <div>
                        <dt>Lair</dt>
                        <dd>{dragon.lair}</dd>
                      </div>
                    </dl>
                    {dragon.story.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                    <h4 className="eyebrow">Battles</h4>
                    {battles.length ? (
                      <ul className="dragons-battles">
                        {battles.map((b) => (
                          <li key={b.name}>
                            <strong>{b.name}</strong>
                            <span className="dragons-where">
                              {b.locationId ? <a href={atlasHref(b.locationId)}>{b.where}</a> : b.where}
                            </span>
                            <span>{b.what}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="dragons-none">None the show has reached.</p>
                    )}
                    <dl className="dragons-facts">
                      <div>
                        <dt>Fate</dt>
                        <dd>{fate}</dd>
                      </div>
                      {dragon.kin && (
                        <div>
                          <dt>Kin</dt>
                          <dd>{dragon.kin}</dd>
                        </div>
                      )}
                    </dl>
                    <AtlasLink locationId={dragon.locationId} />
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="dragons-chapter" id="lairs">
          <header className="dragons-chapter-head">
            <p className="eyebrow">Where they sleep</p>
            <h2>Lairs</h2>
            <p>Volcanoes, pits, pyramids and one melted castle. Where a dragon lives says what it is for.</p>
          </header>
          <div className="dragons-tiles">
            {lairs.map((lair) => (
              <article key={lair.id} id={lair.id} className="dragons-tile">
                <img src={asset(lair.image)} alt={lair.name} {...lazyImg(LANDSCAPE)} onError={showPendingArt} />
                <div className="dragons-tile-copy">
                  <h3>{lair.name}</h3>
                  <p>{lair.what}</p>
                  <p className="dragons-tile-who">{lair.who}</p>
                  <AtlasLink locationId={lair.locationId} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dragons-chapter" id="deaths">
          <header className="dragons-chapter-head">
            <p className="eyebrow">The edge you can turn</p>
            <h2>How they die</h2>
            <p>Five ways, and the show has filmed four of them.</p>
          </header>
          <div className="dragons-tiles">
            {deaths.map((d) => (
              <article key={d.id} id={d.id} className="dragons-tile">
                <img src={asset(d.image)} alt={d.name} {...lazyImg(WIDE)} onError={showPendingArt} />
                <div className="dragons-tile-copy">
                  <h3>{d.name}</h3>
                  <p>{d.how}</p>
                  <p className="dragons-tile-who">{d.proof}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dragons-chapter" id="legends">
          <header className="dragons-chapter-head">
            <p className="eyebrow">What is left</p>
            <h2>Bones &amp; legends</h2>
            <p>Skulls, eggs, a horn, and the stories men told about dragons before there were any.</p>
          </header>
          <div className="dragons-tiles">
            {legends.map((l) => (
              <article key={l.id} id={l.id} className="dragons-tile">
                <img src={asset(l.image)} alt={l.name} {...lazyImg(LANDSCAPE)} onError={showPendingArt} />
                <div className="dragons-tile-copy">
                  <h3>{l.name}</h3>
                  <p>{l.what}</p>
                  <p className="dragons-tile-who">{l.truth}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dragons-close">
          <p className="eyebrow">Spoilers</p>
          <p className="dragons-close-line">
            Battles and fates are shown only as far as <em>House of the Dragon</em> season 3. The
            books know the rest. This page keeps quiet.
          </p>
        </section>
      </main>

      <footer className="landing-foot">
        Fan work. Show canon, with book notes where the show is silent. Not affiliated with HBO or
        George R. R. Martin.
      </footer>
    </div>
  )
}
