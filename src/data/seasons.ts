import type { Season } from '../types.ts'

export const SEASON_META: Record<
  Season,
  { title: string; caption: string }
> = {
  1: {
    title: 'Season 1',
    caption: 'Robert sits the Iron Throne. Winter is coming, and the game begins.',
  },
  2: {
    title: 'Season 2',
    caption: 'The War of the Five Kings splits the realm. Kings rise and drown.',
  },
  3: {
    title: 'Season 3',
    caption: 'The Red Wedding. Guest right is broken and the North bleeds.',
  },
  4: {
    title: 'Season 4',
    caption: 'The lion rules from the shadows. The Wall holds against the wildlings.',
  },
  5: {
    title: 'Season 5',
    caption: 'Faith and fire. Daenerys holds Slaver’s Bay; Stannis marches on winter.',
  },
  6: {
    title: 'Season 6',
    caption: 'Bastards, explosions, and a queen of ashes. Winterfell changes hands.',
  },
  7: {
    title: 'Season 7',
    caption: 'Dragons over Westeros. The dead march on Eastwatch.',
  },
  8: {
    title: 'Season 8',
    caption: 'The Long Night, then the last war for the Iron Throne.',
  },
}
