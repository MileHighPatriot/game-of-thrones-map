import * as THREE from 'three'

/** Half-width of the unit dragon, with a little air so wings do not touch. */
export const WING = 0.36

const GAP = 8

type Sized = { lengthMeters: number; sizeRank: number }

/**
 * Largest to smallest along the row.
 * The overview camera sits on the nose side (world −z) and looks toward +z.
 * In that view world +x is screen-left, so the largest dragon is parked at the high-x end.
 * A node projection check in the yard frame test pins that sign.
 */
export function layoutRow<T extends Sized>(list: T[]): Array<T & { x: number }> {
  const sorted = [...list].sort((a, b) => b.lengthMeters - a.lengthMeters || a.sizeRank - b.sizeRank)
  const placed: Array<T & { x: number }> = []
  for (const dragon of sorted) {
    const wing = dragon.lengthMeters * WING
    const prev = placed[placed.length - 1]
    const x = prev ? prev.x + prev.lengthMeters * WING + wing + GAP : 0
    placed.push({ ...dragon, x })
  }
  const end = placed[placed.length - 1]?.x ?? 0
  for (const dragon of placed) dragon.x = end - dragon.x
  return placed
}

export function dragonCorners(placed: Array<{ x: number; lengthMeters: number }>): THREE.Vector3[] {
  const corners: THREE.Vector3[] = []
  for (const d of placed) {
    const hx = d.lengthMeters * WING
    const hy = d.lengthMeters * 0.42
    const hz = d.lengthMeters * 0.5
    for (const x of [d.x - hx, d.x + hx]) {
      for (const y of [0, hy]) {
        for (const z of [-hz, hz]) corners.push(new THREE.Vector3(x, y, z))
      }
    }
  }
  return corners
}

/** Distance along offsetDir that fits every corner inside the view, with a margin. */
export function fitCamera(
  fovDeg: number,
  aspect: number,
  target: THREE.Vector3,
  offsetDir: THREE.Vector3,
  corners: THREE.Vector3[],
  fill = 0.84,
): THREE.Vector3 {
  const cam = new THREE.PerspectiveCamera(fovDeg, Math.max(aspect, 0.4), 0.15, 9000)
  const dir = offsetDir.clone().normalize()
  let dist = 30
  for (let i = 0; i < 16; i++) {
    cam.position.copy(target).addScaledVector(dir, dist)
    cam.lookAt(target)
    cam.updateProjectionMatrix()
    cam.updateMatrixWorld()
    let maxN = 0.001
    for (const corner of corners) {
      const ndc = corner.clone().project(cam)
      maxN = Math.max(maxN, Math.abs(ndc.x), Math.abs(ndc.y))
    }
    const next = THREE.MathUtils.clamp(dist * (maxN / fill), 6, 8000)
    if (Math.abs(next - dist) / dist < 0.015) return target.clone().addScaledVector(dir, next)
    dist = next
  }
  return target.clone().addScaledVector(dir, dist)
}

export function overviewPose(
  placed: Array<{ x: number; lengthMeters: number }>,
  fovDeg: number,
  aspect: number,
): { position: THREE.Vector3; target: THREE.Vector3 } {
  const xs = placed.map((d) => d.x)
  const mid = (Math.min(...xs) + Math.max(...xs)) / 2
  const biggest = placed[0]?.lengthMeters ?? 10
  const target = new THREE.Vector3(mid, Math.min(14, biggest * 0.05), 0)
  const position = fitCamera(fovDeg, aspect, target, new THREE.Vector3(-0.55, 0.36, -1), dragonCorners(placed))
  return { position, target }
}

/** Feet of the scale figure, just in front of the snout and clear of the jaw. */
export function standPoint(dragon: { x: number; lengthMeters: number }): THREE.Vector3 {
  const noseZ = -dragon.lengthMeters / 2
  const noseR = dragon.lengthMeters * 0.045
  return new THREE.Vector3(dragon.x + noseR + 1.5, 0, noseZ - 2.4)
}

/**
 * A person-height view from in front of the snout.
 * The figure stays in frame. The look point rises with the head, capped so
 * Balerion does not shrink the person back to a speck.
 */
export function besidePose(dragon: { x: number; lengthMeters: number }): {
  position: THREE.Vector3
  target: THREE.Vector3
} {
  const stand = standPoint(dragon)
  const lookY = Math.min(2.15, Math.max(1.05, dragon.lengthMeters * 0.045))
  const target = new THREE.Vector3(stand.x + 1.05, lookY, stand.z + 2.2)
  const position = new THREE.Vector3(stand.x + 1.5, 1.7, stand.z - 11)
  return { position, target }
}
