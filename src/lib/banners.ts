const svg = (body: string, bg: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 48" width="28" height="34">
    <path d="M4 2h32v34l-16 10L4 36Z" fill="${bg}" stroke="#1a120a" stroke-width="1.6"/>
    ${body}
  </svg>`

const art: Record<string, string> = {
  stark: svg(
    '<path d="M20 12l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#1c2430"/>',
    '#c5cdd6',
  ),
  lannister: svg('<circle cx="20" cy="22" r="9" fill="#f0d38a"/><path d="M14 20h12M20 14v14" stroke="#7a1d12" stroke-width="2"/>', '#c23b22'),
  baratheon: svg('<path d="M12 28c4-12 12-12 16 0M14 18l6-6 6 6" fill="none" stroke="#1a1a1a" stroke-width="2"/>', '#d4b43c'),
  'baratheon-ds': svg('<path d="M20 12l4 8h-8zM16 24h8v8h-8z" fill="#c23b22"/>', '#f4f0e4'),
  targaryen: svg('<path d="M20 14c6 4 8 10 0 18C12 24 14 18 20 14z" fill="#d4b43c"/><circle cx="16" cy="20" r="1.4" fill="#7b1113"/><circle cx="24" cy="20" r="1.4" fill="#7b1113"/><circle cx="20" cy="26" r="1.4" fill="#7b1113"/>', '#7b1113'),
  greyjoy: svg('<path d="M10 22h20M20 14v18M12 18c8 4 8 8 16 4" fill="none" stroke="#c9a36a" stroke-width="2"/>', '#2b2f36'),
  tyrell: svg('<circle cx="20" cy="22" r="8" fill="#f2d37a"/><circle cx="20" cy="22" r="3" fill="#3f7a46"/>', '#3f7a46'),
  martell: svg('<circle cx="22" cy="20" r="7" fill="#f3e6c5"/><path d="M10 30 L28 12" stroke="#7a1d12" stroke-width="2.2"/>', '#d36b1f'),
  arryn: svg('<path d="M20 14l8 12H12z" fill="#f4f0e8"/><circle cx="20" cy="20" r="2.2" fill="#6f8fbf"/>', '#6f8fbf'),
  tully: svg('<path d="M10 24c6-8 14-8 20 0-6 6-14 6-20 0z" fill="#d6d6d6"/>', '#1f6b4a'),
  bolton: svg('<path d="M16 14h8v8l-4 12-4-12z" fill="#8b1e1e"/>', '#f2f2f0'),
  frey: svg('<path d="M12 16h6v16h-6zM22 16h6v16h-6zM12 22h16" fill="#e8d9b8"/>', '#6b4a2b'),
  nightswatch: svg('<path d="M20 12v22M12 20h16" stroke="#b0b0b0" stroke-width="2"/>', '#1b1b1b'),
  'free-folk': svg('<path d="M12 30 L20 12 L28 30Z" fill="#d8c7a4"/>', '#5c6b58'),
  'white-walkers': svg('<circle cx="20" cy="22" r="8" fill="#e8f6fb"/><path d="M16 20h8M20 16v8" stroke="#1a2a33" stroke-width="1.6"/>', '#9fd4e6'),
  dothraki: svg('<path d="M12 26c4-10 12-10 16 0" fill="none" stroke="#3a2a14" stroke-width="2"/><circle cx="20" cy="18" r="3" fill="#3a2a14"/>', '#c4a35a'),
  masters: svg('<path d="M12 30 V16 L20 10 L28 16 V30Z" fill="#e8d5a3"/>', '#8a6a3a'),
  braavos: svg('<path d="M14 30 V16 h12 v14M14 16 l6-6 6 6" fill="none" stroke="#c9b896" stroke-width="2"/>', '#3d5a6c'),
  pentos: svg('<rect x="13" y="16" width="14" height="14" fill="#efe4c8"/>', '#7a8f5a'),
  qarth: svg('<circle cx="20" cy="22" r="8" fill="none" stroke="#2c1810" stroke-width="2"/><circle cx="20" cy="22" r="3" fill="#2c1810"/>', '#b8860b'),
  ruins: svg('<path d="M12 30 L16 16 L20 26 L24 14 L28 30" fill="none" stroke="#c45c2a" stroke-width="2"/>', '#3a3330'),
  baelish: svg('<path d="M12 26c4-10 8-12 16-12M14 22h12" fill="none" stroke="#c5b48a" stroke-width="2"/><circle cx="20" cy="18" r="2.2" fill="#c5b48a"/>', '#6a6e76'),
  faith: svg('<path d="M20 12v20M14 18h12M16 28h8" stroke="#6b4a28" stroke-width="1.8"/><circle cx="20" cy="14" r="2" fill="#6b4a28"/>', '#efe6d0'),
}

export function bannerSvg(houseId: string): string {
  return art[houseId] ?? svg('<circle cx="20" cy="22" r="6" fill="#efe4c8"/>', '#6b5344')
}
