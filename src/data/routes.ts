import type { Route } from '../types.ts'
import { locationById } from './locations.ts'

function xy(id: string): [number, number] {
  const place = locationById[id]
  if (!place) return [800, 450]
  return [place.x, place.y]
}

export const routes: Route[] = [
  {
    id: 'kingsroad',
    name: 'The Kingsroad',
    kind: 'road',
    minZoom: 0.7,
    lore: 'The spine of Westeros. From the Wall to King’s Landing, every army that matters walks this inked line.',
    points: [
      xy('castle-black'),
      xy('winterfell'),
      xy('moat-cailin'),
      xy('the-twins'),
      xy('harrenhal'),
      xy('the-trident'),
      xy('kings-landing'),
    ],
  },
  {
    id: 'roseroad',
    name: 'The Roseroad',
    kind: 'road',
    minZoom: 0.9,
    lore: 'Highgarden’s gold and grain roll north on this road. When it burns, the capital goes hungry.',
    points: [xy('oldtown'), xy('highgarden'), xy('blackwater-rush'), xy('kings-landing')],
  },
  {
    id: 'goldroad',
    name: 'The Goldroad',
    kind: 'road',
    minZoom: 0.9,
    lore: 'Casterly Rock to the capital. Lannister wagons, Lannister debts, Lannister wars.',
    points: [xy('casterly-rock'), xy('whispering-wood'), xy('harrenhal'), xy('kings-landing')],
  },
  {
    id: 'riverroad',
    name: 'The River Road',
    kind: 'road',
    minZoom: 1.0,
    lore: 'Riverrun to the west. The Tullys keep it when they can; everyone else uses it anyway.',
    points: [xy('casterly-rock'), xy('whispering-wood'), xy('riverrun')],
  },
  {
    id: 'vale-road',
    name: 'The High Road',
    kind: 'road',
    minZoom: 1.0,
    lore: 'The climb to the Bloody Gate. Honor is high; the drop is higher.',
    points: [xy('the-trident'), xy('bloody-gate'), xy('the-eyrie')],
  },
  {
    id: 'dornish-road',
    name: 'The Boneway',
    kind: 'road',
    minZoom: 1.1,
    lore: 'The pass into Dorne. Sand, spears, and a tower where a secret was born.',
    points: [xy('storms-end'), xy('tower-of-joy'), xy('sunspear')],
  },
  {
    id: 'trident-river',
    name: 'The Trident',
    kind: 'river',
    minZoom: 0.8,
    lore: 'Three forks and a ruby ford. The riverlands are named for this water, and the wars are too.',
    points: [xy('riverrun'), xy('the-twins'), xy('the-trident'), xy('harrenhal')],
  },
  {
    id: 'blackwater-river',
    name: 'The Blackwater Rush',
    kind: 'river',
    minZoom: 0.9,
    lore: 'It feeds the city and, once, a wildfire fleet. The mouth of the capital is a river.',
    points: [xy('highgarden'), xy('blackwater-rush'), xy('kings-landing')],
  },
  {
    id: 'the-wall-line',
    name: 'The Wall',
    kind: 'wall',
    minZoom: 0.35,
    lore: 'Seven hundred feet of ice from the Frostfangs to Eastwatch. Zoom in and it is still only a line — until it isn’t.',
    points: [
      [115, 708],
      [250, 708],
      xy('castle-black'),
      [450, 705],
      xy('eastwatch'),
    ],
  },
]

export const routeById = Object.fromEntries(routes.map((route) => [route.id, route]))
