const svg = (body: string, bg: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 48" class="house-banner" aria-hidden="true">
    <path d="M4 2h32v34l-16 10L4 36Z" fill="${bg}" stroke="#1a120a" stroke-width="1.6"/>
    ${body}
  </svg>`

const art: Record<string, string> = {
  // Argent, a direwolf courant cendrée — running grey direwolf on ice-white
  stark: svg(
    `<g fill="#5c6168">
      <ellipse cx="17" cy="24.2" rx="8.2" ry="4.6"/>
      <circle cx="26.4" cy="21.2" r="3.6"/>
      <polygon points="24.2,19.2 24.8,14.2 27.2,18.6"/>
      <polygon points="26.6,18.8 28.2,14.6 29.8,19"/>
      <polygon points="29.6,20.6 34.2,22.2 29.4,23.8"/>
      <rect x="21.2" y="27.2" width="2.1" height="6.2" rx=".4"/>
      <rect x="18.4" y="27" width="1.9" height="5.4" rx=".4"/>
      <rect x="12.2" y="27.2" width="2.1" height="6.2" rx=".4"/>
      <rect x="14.8" y="26.8" width="1.9" height="5.2" rx=".4"/>
      <path d="M9.2 23.4Q5.4 19.6 7.6 15.4" fill="none" stroke="#5c6168" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="27.6" cy="20.4" r=".55" fill="#f4f6f8"/>
    </g>`,
    '#f4f6f8',
  ),
  // Gules, a lion or — roaring gold lion on crimson
  lannister: svg(
    `<g fill="#e8c45a">
      <ellipse cx="19.4" cy="24.6" rx="5.2" ry="7.2"/>
      <circle cx="22.6" cy="14.4" r="4.4"/>
      <circle cx="20.2" cy="12.2" r="2.2"/>
      <circle cx="23.6" cy="11.4" r="2.4"/>
      <circle cx="26.4" cy="13.2" r="2.1"/>
      <circle cx="25.8" cy="16.4" r="2"/>
      <polygon points="26.4,14.6 32.4,13.2 26.8,17.2"/>
      <path d="M24.8 19.4L31 15.2" stroke="#e8c45a" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M16.2 30.6L12.4 35.4" stroke="#e8c45a" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M21.6 30.8L23.2 36" stroke="#e8c45a" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M24.4 26.4Q30 22 31.6 27.6" fill="none" stroke="#e8c45a" stroke-width="1.7" stroke-linecap="round"/>
      <circle cx="24.2" cy="13.6" r=".55" fill="#7a1d12"/>
    </g>`,
    '#b31b1b',
  ),
  // Or, a stag crowned sable — crowned black stag on gold
  baratheon: svg(
    `<g fill="#1a1a1a">
      <path d="M15.2 11.6l-2.6-4.6M17.4 10.8 16.2 5.6M20 10.4V5M22.6 10.8 23.8 5.6M24.8 11.6l2.6-4.6" stroke="#1a1a1a" stroke-width="1.15" stroke-linecap="round" fill="none"/>
      <path d="M16.4 11h7.2l.7 1.5H15.7z"/>
      <ellipse cx="20" cy="22.6" rx="5.4" ry="6.4"/>
      <circle cx="23.8" cy="16.6" r="3.1"/>
      <polygon points="26.4,16.2 30.6,17.4 26.2,18.6"/>
      <path d="M16.6 27.6L13.8 34.2" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
      <path d="M19.6 28L18.4 34.6" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M22.4 27.8L24.6 34.4" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
      <path d="M24.2 27L26.8 33.4" stroke="#1a1a1a" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M14.6 22.2Q10.4 20.4 11.6 16.6" fill="none" stroke="#1a1a1a" stroke-width="1.6" stroke-linecap="round"/>
      <circle cx="24.8" cy="15.8" r=".5" fill="#d4b43c"/>
    </g>`,
    '#d4b43c',
  ),
  // Sun-yellow, a black crowned stag within a red heart, blaze of orange fire
  'baratheon-ds': svg(
    `<g>
      <path d="M8 28c2-6 5-11 8-14 2-2 4-3 4-3s2 1 4 3c3 3 6 8 8 14-2 4-6 7-12 7S10 32 8 28z" fill="#e06018"/>
      <path d="M20 13c-4.4 3.2-7.2 8.4-8.4 13.2C13.2 31 16.4 33.2 20 33.2s6.8-2.2 8.4-7C27.2 21.4 24.4 16.2 20 13z" fill="#b31b1b"/>
      <g fill="#1a1a1a">
        <path d="M17.4 16.6l-1.2-2.2M18.8 16.2 18.2 13.6M20 16V13.4M21.2 16.2l.6-2.6M22.6 16.6l1.2-2.2" stroke="#1a1a1a" stroke-width=".75" stroke-linecap="round" fill="none"/>
        <path d="M17.6 16.4h4.8l.4.8h-5.6z"/>
        <ellipse cx="20" cy="22.4" rx="3.1" ry="3.6"/>
        <circle cx="22.2" cy="19.2" r="1.7"/>
        <path d="M17.8 25.2 16.4 29.2M19.6 25.4 19 29.4M21.2 25.2 22.6 29.2" stroke="#1a1a1a" stroke-width="1.15" stroke-linecap="round"/>
      </g>
    </g>`,
    '#e8c547',
  ),
  // Sable, a dragon thrice-headed gules flammant — red three-headed dragon, red flame, on black
  targaryen: svg(
    `<g fill="#c41e3a">
      <ellipse cx="20" cy="24" rx="5.4" ry="7"/>
      <path d="M16.2 18.4Q10 14.6 7.4 10.4"/>
      <polygon points="7.4,10.4 4.2,12.6 8.8,12.2"/>
      <path d="M20 17.2Q19.2 10.6 17.4 7.2"/>
      <polygon points="17.4,7.2 15.6,4.4 19.6,5.8"/>
      <path d="M23.8 18.4Q30 14.6 32.6 10.4"/>
      <polygon points="32.6,10.4 35.8,12.6 31.2,12.2"/>
      <path d="M14.4 22.6Q6.4 18.8 8.2 28.4Q14.6 26.6 16.8 24.8"/>
      <path d="M25.6 22.6Q33.6 18.8 31.8 28.4Q25.4 26.6 23.2 24.8"/>
      <path d="M20 30.6Q22.4 35.6 19.2 36.8Q16.4 34.2 18.4 31"/>
      <path d="M5.4 9.4Q3.2 8.2 2.4 10.6" fill="none" stroke="#c41e3a" stroke-width="1.1" stroke-linecap="round"/>
      <path d="M16.8 5Q16 2.6 18.2 2.2" fill="none" stroke="#c41e3a" stroke-width="1.1" stroke-linecap="round"/>
      <path d="M34.6 9.4Q36.8 8.2 37.6 10.6" fill="none" stroke="#c41e3a" stroke-width="1.1" stroke-linecap="round"/>
      <circle cx="6.6" cy="10.8" r=".55" fill="#14080a"/>
      <circle cx="17.2" cy="6.2" r=".55" fill="#14080a"/>
      <circle cx="33.4" cy="10.8" r=".55" fill="#14080a"/>
    </g>`,
    '#14080a',
  ),
  // A golden kraken on black
  greyjoy: svg(
    `<g fill="#e0b24a">
      <ellipse cx="20" cy="16.5" rx="6.2" ry="5"/>
      <circle cx="17.6" cy="15.4" r=".9" fill="#1a1a1a"/>
      <circle cx="22.4" cy="15.4" r=".9" fill="#1a1a1a"/>
      <path d="M15 20c-3 4-6 9-7 14M17.4 21c-1.4 5-2.2 10-2 14M20 21.4v14.2M22.6 21c1.4 5 2.2 10 2 14M25 20c3 4 6 9 7 14" fill="none" stroke="#e0b24a" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M13.4 19c-4 2-7 2-9 1M26.6 19c4 2 7 2 9 1" fill="none" stroke="#e0b24a" stroke-width="1.5" stroke-linecap="round"/>
    </g>`,
    '#121418',
  ),
  // A golden rose on a grass-green field
  tyrell: svg(
    `<g>
      <path d="M20 12c2.4 2 3.2 4.4 2.4 6.2 2 .2 4.2 1.6 5.2 3.6-1.6 1.4-3.8 2-5.6 1.6.2 2 1 4.4-.4 6.4-2-1-3.6-2.6-4-4.6-2 .8-4.4.8-6.2-.6 1-2.2 3-3.6 5.2-3.8-.6-2 .2-4.4 2.4-6.2z" fill="#e8c45a"/>
      <path d="M20 14.4c1.6 1.4 2 3 .8 4.2 1.4.4 2.8 1.4 3.2 2.8-1.2.8-2.8 1.2-4 .8.4 1.4.4 3-.8 4-1.2-.8-2.2-2-2.4-3.4-1.4.4-3 .2-4-.8.8-1.4 2.2-2.2 3.6-2.4-.4-1.4.2-3.2 1.6-4.2z" fill="#d4a017"/>
      <circle cx="20" cy="22" r="2.4" fill="#2f5a32"/>
      <path d="M20 24.4c.6 3 .2 6.4-1.6 8.6" fill="none" stroke="#2f5a32" stroke-width="1.2"/>
    </g>`,
    '#2f6b38',
  ),
  // A red sun pierced by a golden spear on orange
  martell: svg(
    `<g>
      <circle cx="20" cy="21" r="7.4" fill="#c41e3a"/>
      <path d="M20 11.2v3.2M20 27.6v3.2M10.2 21h3.2M26.6 21h3.2M13.2 14.2l2.2 2.2M24.6 25.6l2.2 2.2M26.8 14.2l-2.2 2.2M15.4 25.6l-2.2 2.2" stroke="#c41e3a" stroke-width="1.35" stroke-linecap="round"/>
      <path d="M9 31 L31 11" stroke="#e8c45a" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M29.2 9.2l4.4 1.2-2.8 3.6z" fill="#e8c45a"/>
    </g>`,
    '#e07a2f',
  ),
  // Sky-blue falcon soaring against a white moon, on sky-blue
  arryn: svg(
    `<g>
      <circle cx="20" cy="21" r="9.2" fill="#f4f6f8"/>
      <path d="M20 27.4c-3.4-4.4-5-9-4.2-13.2 2.2 1.6 3.6 4 4.2 7 1.4-3.6 3.4-6.2 5.8-7.6-.2 4.4-2 8.8-5.8 13.8z" fill="#4f86c6"/>
      <path d="M15.4 18.6c-2.6-1-5.2-.6-7 .6 2.2 1.2 4.6 1.6 7 1.2zM24.6 17.8c2.8-.8 5.4-.2 7.2 1.2-2.4.8-4.8.8-7.2 0z" fill="#4f86c6"/>
    </g>`,
    '#5b92c9',
  ),
  // Leaping silver trout on a field of rippling blue and red
  tully: svg(
    `<g>
      <path d="M4 8h32v6H4z" fill="#8b1d2c"/>
      <path d="M4 20h32v6H4z" fill="#8b1d2c"/>
      <path d="M4 32h32v4H4z" fill="#8b1d2c"/>
      <path d="M7 22c3-6 7-9 12-8 4 .6 7.4 2.2 10.4 1.2-1.4 4.8-5 8.6-10.6 10.2-5 1.4-9.2-.2-11.8-3.4z" fill="#e6eef4"/>
      <path d="M27.6 16.4c1.6-.2 3.2-1.4 4-2.8" fill="none" stroke="#e6eef4" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="24.4" cy="19.2" r=".8" fill="#1a3358"/>
    </g>`,
    '#2a5f9a',
  ),
  // A red flayed man on pink
  bolton: svg(
    `<g fill="#9a1c1c">
      <circle cx="20" cy="12.6" r="3.1"/>
      <path d="M16.4 16.2h7.2c.8 4.4.6 8.2-.2 11.6l2.4 6.4c.3.8-.4 1.2-1 .8l-2.8-1.8c-.4 1.4-1.2 2.6-2.2 3.2-1-.6-1.8-1.8-2.2-3.2l-2.8 1.8c-.6.4-1.3 0-1-.8l2.4-6.4c-.8-3.4-1-7.2-.2-11.6z"/>
      <path d="M14.2 18.4c-2.2 1-3.8 1.2-5.4.6M25.8 18.4c2.2 1 3.8 1.2 5.4.6" fill="none" stroke="#9a1c1c" stroke-width="1.5" stroke-linecap="round"/>
    </g>`,
    '#f0b7c4',
  ),
  // Two blue towers and a bridge (the Twins) on silver-grey
  frey: svg(
    `<g fill="#2f5f9a">
      <path d="M9 16h8v18H9z"/>
      <path d="M23 16h8v18h-8z"/>
      <path d="M9 22h22v3.2H9z"/>
      <path d="M11 12h4v4h-4zM25 12h4v4h-4z"/>
      <path d="M10.4 16l2.6-4 2.6 4H10.4zM24.4 16l2.6-4 2.6 4h-5.2z"/>
      <rect x="11.2" y="19" width="2.2" height="2.4" fill="#c5c9ce"/>
      <rect x="14.4" y="19" width="2.2" height="2.4" fill="#c5c9ce"/>
      <rect x="25.4" y="19" width="2.2" height="2.4" fill="#c5c9ce"/>
      <rect x="28.6" y="19" width="2.2" height="2.4" fill="#c5c9ce"/>
    </g>`,
    '#c5c9ce',
  ),
  // Solid black — the Watch has no device
  nightswatch: svg('', '#111111'),
  // No Westerosi arms; weirwood of the old gods many free folk keep
  'free-folk': svg(
    `<g>
      <path d="M20 34V18" stroke="#cfc3a8" stroke-width="2.4"/>
      <path d="M20 18c-4.6-1-8-4.2-9.2-8.2 3.2.4 6.2 1.6 9.2 3.6 3-2 6-3.2 9.2-3.6C28 13.8 24.6 17 20 18z" fill="#f4f0e4"/>
      <path d="M12.4 16.2c2.2-3.6 5.2-5.4 7.6-6M27.6 16.2c-2.2-3.6-5.2-5.4-7.6-6" fill="none" stroke="#f4f0e4" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="16.8" cy="15.8" r="1.15" fill="#9a2a2a"/>
      <circle cx="23.2" cy="15.8" r="1.15" fill="#9a2a2a"/>
      <path d="M17.4 19.2h5.2" stroke="#9a2a2a" stroke-width="1.1" stroke-linecap="round"/>
    </g>`,
    '#4a4034',
  ),
  // Night King's spiral, taken from the Children of the Forest
  'white-walkers': svg(
    `<g fill="none" stroke="#d7f2fb" stroke-width="1.8" stroke-linecap="round">
      <path d="M20 13c4.8 0 8 3.4 8 7.6 0 5-4 8.2-8.6 8.2-3.8 0-6.4-2.4-6.4-5.6 0-3 2.2-5 5-5 2 0 3.4 1.4 3.4 3.2 0 1.6-1.2 2.6-2.8 2.6"/>
      <path d="M20 13c-1.6-3.2-5-4.6-8.4-3.2"/>
      <path d="M28 20.6c2.8 1.2 4.2 4.4 3.2 7.6"/>
      <path d="M19.4 28.8c-1.2 3.2 0 6.6 3.4 8"/>
    </g>`,
    '#1a2f38',
  ),
  // Great Stallion of the Dothraki
  dothraki: svg(
    `<g fill="#3a2414">
      <ellipse cx="18.2" cy="23.6" rx="8.4" ry="4.4"/>
      <circle cx="27.2" cy="19.6" r="3.2"/>
      <polygon points="29.8,19 34.2,20.6 29.6,21.8"/>
      <polygon points="25.6,17.4 26.4,13.6 28.6,17.2"/>
      <rect x="22.2" y="26.6" width="2" height="6.4" rx=".3"/>
      <rect x="19.2" y="26.4" width="1.8" height="5.6" rx=".3"/>
      <rect x="13.2" y="26.6" width="2" height="6.4" rx=".3"/>
      <rect x="15.8" y="26.2" width="1.8" height="5.4" rx=".3"/>
      <path d="M10 23.2Q6.2 20.4 8.4 16.8" fill="none" stroke="#3a2414" stroke-width="1.7" stroke-linecap="round"/>
      <circle cx="28.2" cy="18.8" r=".55" fill="#c4a35a"/>
    </g>`,
    '#c4a35a',
  ),
  // Harpy of Old Ghis — the emblem of the slaver cities
  masters: svg(
    `<g fill="#e8d5a3">
      <circle cx="20" cy="12.6" r="3.1"/>
      <path d="M16.8 16h6.4l.4 7.2c-1.4.8-5.4.8-7.2 0z"/>
      <path d="M17 17.6Q8 12.4 6.4 20.8Q14.2 22.6 17.4 21.2"/>
      <path d="M23 17.6Q32 12.4 33.6 20.8Q25.8 22.6 22.6 21.2"/>
      <path d="M17.4 24.6 15.2 33.6 18.2 31.2 20 24.8 21.8 31.2 24.8 33.6 22.6 24.6"/>
    </g>`,
    '#6a4a2a',
  ),
  // Titan of Braavos, broken sword across the lagoon
  braavos: svg(
    `<g fill="#c9b896">
      <circle cx="20" cy="10.6" r="2.7"/>
      <path d="M16.6 13.6h6.8v8.6h-6.8z"/>
      <path d="M14.8 22.2h10.4l1.6 12.4h-3.6l-1.2-7.6-2 7.6h-2.8l-2-7.6-1.2 7.6h-3.6z"/>
      <path d="M16.4 15.8Q10.6 14.4 9.2 19.6Q14.2 20.2 16.8 19"/>
      <path d="M23.6 15.8Q29.4 14.4 30.8 19.6Q25.8 20.2 23.2 19"/>
      <path d="M24.2 22.8 31.4 31.6" stroke="#c9b896" stroke-width="1.7" stroke-linecap="round"/>
      <path d="M30 32.8h4.2" stroke="#c9b896" stroke-width="1.5" stroke-linecap="round"/>
    </g>`,
    '#2c4454',
  ),
  // Free city of ships and magisters — a galley of the Narrow Sea
  pentos: svg(
    `<g fill="#efe4c8">
      <path d="M8 26c4-2 10-3 16-2 4 .6 7 2 8 3.4-3 2.4-8 3.6-14 3.6-5.2 0-8.6-1.4-10-5z"/>
      <path d="M18 12v14" stroke="#efe4c8" stroke-width="1.6"/>
      <path d="M18 13l8 6H18z"/>
      <path d="M9 27h22" stroke="#efe4c8" stroke-width="1.3"/>
    </g>`,
    '#5d7348',
  ),
  // Triple walls of Qarth
  qarth: svg(
    `<g fill="none" stroke="#2c1810" stroke-width="1.7">
      <rect x="9" y="14" width="22" height="18" rx="1"/>
      <rect x="12.4" y="17.2" width="15.2" height="12.4"/>
      <rect x="15.6" y="20.2" width="8.8" height="7.2"/>
    </g>`,
    '#c9a227',
  ),
  // Fourteen Flames — Valyria after the Doom
  ruins: svg(
    `<g>
      <path d="M8 34 L14 18 L20 28 L26 14 L32 34Z" fill="none" stroke="#c45c2a" stroke-width="1.8"/>
      <path d="M16 16c0-3 1.6-5 4-6 2.4 1 4 3 4 6-2.6.6-5.4.6-8 0z" fill="#c45c2a"/>
      <path d="M8 34h24" stroke="#c45c2a" stroke-width="1.6"/>
    </g>`,
    '#2a201c',
  ),
  // Silver mockingbird on green — Littlefinger's arms after Harrenhal
  baelish: svg(
    `<g fill="#dfe3e8">
      <ellipse cx="20.4" cy="22.4" rx="6.4" ry="3.6"/>
      <circle cx="27" cy="19.8" r="2.6"/>
      <polygon points="29.2,19.4 33.4,20.8 29,21.8"/>
      <path d="M16.2 21.2Q10.6 16.4 12.8 24.6Q16.8 24.2 18.6 22.8"/>
      <path d="M22.4 20.6Q28.4 15.8 29.6 22.4"/>
      <path d="M15.2 24.2Q13.4 28.6 16.8 27.2" fill="none" stroke="#dfe3e8" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="27.8" cy="19.2" r=".55" fill="#2f6b3a"/>
    </g>`,
    '#2f6b3a',
  ),
  // Crystal seven-pointed star of the Faith
  faith: svg(
    `<g fill="#c9a227">
      <path d="M20 10l1.6 6.2 6.2.2-5 3.8 1.8 6.2L20 23.2l-4.6 3.2 1.8-6.2-5-3.8 6.2-.2z"/>
      <path d="M20 10v4.4M14.2 14.2l3.2 2.2M25.8 14.2l-3.2 2.2M12.8 22.4l3.6.4M27.2 22.4l-3.6.4M16.2 29.2l2-3M23.8 29.2l-2-3" stroke="#c9a227" stroke-width="1.15" stroke-linecap="round"/>
    </g>`,
    '#f4efe0',
  ),
}

const paint: Record<string, { fill: string; stroke: string }> = {
  stark: { fill: '#c5ccd4', stroke: '#5a5f66' },
  lannister: { fill: '#9a1a16', stroke: '#e8c45a' },
  baratheon: { fill: '#c4a227', stroke: '#1a1a1a' },
  'baratheon-ds': { fill: '#d4b43c', stroke: '#b31b1b' },
  targaryen: { fill: '#1a0a0c', stroke: '#c41e3a' },
  greyjoy: { fill: '#121418', stroke: '#e0b24a' },
  tyrell: { fill: '#2f6b38', stroke: '#e8c45a' },
  martell: { fill: '#c45c18', stroke: '#e8c45a' },
  arryn: { fill: '#4f86c6', stroke: '#f4f6f8' },
  tully: { fill: '#2a5f9a', stroke: '#8b1d2c' },
  bolton: { fill: '#d9899c', stroke: '#9a1c1c' },
  frey: { fill: '#b8bcc2', stroke: '#2f5f9a' },
  nightswatch: { fill: '#111111', stroke: '#6a6a6a' },
  'free-folk': { fill: '#4a4034', stroke: '#cfc3a8' },
  'white-walkers': { fill: '#1a2f38', stroke: '#d7f2fb' },
  dothraki: { fill: '#a07c3a', stroke: '#3a2414' },
  masters: { fill: '#6a4a2a', stroke: '#e8d5a3' },
  braavos: { fill: '#2c4454', stroke: '#c9b896' },
  pentos: { fill: '#5d7348', stroke: '#efe4c8' },
  qarth: { fill: '#c9a227', stroke: '#2c1810' },
  ruins: { fill: '#2a201c', stroke: '#c45c2a' },
  baelish: { fill: '#2f6b3a', stroke: '#dfe3e8' },
  faith: { fill: '#e8e0cc', stroke: '#c9a227' },
}

export function bannerSvg(houseId: string): string {
  return art[houseId] ?? svg('<circle cx="20" cy="22" r="6" fill="#efe4c8"/>', '#6b5344')
}

export function regionPaint(houseId: string | undefined): { fill: string; stroke: string } {
  if (!houseId) return { fill: '#8a7a62', stroke: '#4a3a28' }
  return paint[houseId] ?? { fill: '#8a7a62', stroke: '#4a3a28' }
}
