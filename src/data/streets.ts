import { locationById } from './locations.ts'
import { sitesByParent } from './sites.ts'

export type Street = {
  id: string
  parentId: string
  points: [number, number][]
}

export const streets: Street[] = []

for (const [parentId, group] of Object.entries(sitesByParent)) {
  const parent = locationById[parentId]
  if (!parent || group.length === 0) continue

  for (const site of group) {
    streets.push({
      id: `${parentId}-${site.id}`,
      parentId,
      points: [
        [parent.x, parent.y],
        [site.x, site.y],
      ],
    })
  }

  const ordered = [...group].sort((a, b) => {
    const first = Math.atan2(a.y - parent.y, a.x - parent.x)
    const second = Math.atan2(b.y - parent.y, b.x - parent.x)
    return first - second
  })

  if (ordered.length < 3) continue

  for (let index = 0; index < ordered.length; index += 1) {
    const from = ordered[index]
    const to = ordered[(index + 1) % ordered.length]
    if (!from || !to) continue
    streets.push({
      id: `${parentId}-ring-${index}`,
      parentId,
      points: [
        [from.x, from.y],
        [to.x, to.y],
      ],
    })
  }
}
