import { useEffect } from 'react'
import { weapons } from '../data/weapons.ts'
import { SiteNav } from '../ui/SiteNav.tsx'

function weaponIdFromHash(): string {
  return window.location.hash.replace(/^#\/?armory\/?/, '').replace(/\/+$/, '')
}

export function ArmoryPage() {
  const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

  useEffect(() => {
    const scrollToWeapon = () => {
      const id = weaponIdFromHash()
      if (!id) return
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const timer = window.setTimeout(scrollToWeapon, 50)
    window.addEventListener('hashchange', scrollToWeapon)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('hashchange', scrollToWeapon)
    }
  }, [])

  return (
    <div className="armory">
      <SiteNav current="armory" />
      <section className="room-hero">
        <img src={asset('weapons/hero.jpg')} alt="" className="room-hero-art" />
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
            <img src={asset(weapon.image)} alt={weapon.name} />
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
      <footer className="landing-foot">
        Fan work. Show canon, with book notes where the show is silent. Not affiliated with HBO or George R. R. Martin.
      </footer>
    </div>
  )
}
