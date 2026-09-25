import { weapons } from '../data/weapons.ts'
import { heroImg, lazyImg, PORTRAIT } from '../lib/img.ts'
import { useHashScroll } from '../lib/useHashScroll.ts'
import { MAIN_ID, SiteNav } from '../ui/SiteNav.tsx'

export function ArmoryPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useHashScroll('armory')

  return (
    <div className="armory">
      <SiteNav current="armory" />
      <main id={MAIN_ID} tabIndex={-1}>
        <section className="room-hero">
          <img src={asset('weapons/got/hero.jpg')} alt="" className="room-hero-art" {...heroImg()} />
          <div className="room-hero-veil" />
          <div className="room-hero-copy">
            <p className="eyebrow">Named steel of Westeros</p>
            <h1>The Armory</h1>
            <p className="room-lede">
              Valyrian blades, a star that fell on Dorne, a castle-forged needle, and the hammer that
              killed a prince. Who held them, where they went, and how they were made.
            </p>
            <nav className="room-index" aria-label="Weapons">
              {weapons.map((weapon) => (
                <a key={weapon.id} href={`#/armory/${weapon.id}`}>
                  {weapon.name}
                </a>
              ))}
            </nav>
          </div>
        </section>
        <div className="armory-grid">
          {weapons.map((weapon) => (
            <article key={weapon.id} id={weapon.id} className="weapon-card">
              <img src={asset(weapon.image)} alt={weapon.name} {...lazyImg(PORTRAIT)} />
              <div className="weapon-copy">
                <p className="eyebrow">{weapon.steel}</p>
                <h2>{weapon.name}</h2>
                <p className="weapon-house">{weapon.house}</p>
                <dl>
                  <div>
                    <dt>How it was made</dt>
                    <dd>{weapon.made}</dd>
                  </div>
                  <div>
                    <dt>Who held it</dt>
                    <dd>{weapon.who}</dd>
                  </div>
                  <div>
                    <dt>Where it went</dt>
                    <dd>{weapon.where}</dd>
                  </div>
                </dl>
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
