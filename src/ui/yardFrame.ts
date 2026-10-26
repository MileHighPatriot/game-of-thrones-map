import * as THREE from 'three'

/**
 * Half-width of the unit dragon, wing tip to the centre line.
 * Measured from public/dragons/yard-dragon.glb after it was stood snout-to-tail.
 */
export const WING = 0.514

/** Height of the unit dragon, feet to the top of the wing. */
export const BODY_H = 0.704

/** Nose-side camera for a dragon that still faces −z. */
export const CHART_DIR = new THREE.Vector3(-0.12, 0.46, -1)

/** Side camera for a profile row. Dragons face −x, so this eye sees their length. */
export const PROFILE_DIR = new THREE.Vector3(0.04, 0.36, 1)

/** rotation.y that turns the snout (−z) onto −x. Matches Object3D, not a second formula. */
export const PROFILE_YAW = Math.PI / 2

export type BodyProfile = { bulk: number; stature: number }

/** Caraxes is a snake. Hatchlings are stocky. The old ones are a little heavier. Length stays exact. */
export function bodyProfile(id: string, meters: number): BodyProfile {
  if (id === 'caraxes') return { bulk: 0.62, stature: 0.7 }
  if (meters <= 3) return { bulk: 1.18, stature: 1.32 }
  if (meters >= 120) return { bulk: 1.05, stature: 1.02 }
  return { bulk: 1, stature: 1 }
}

type Sized = { lengthMeters: number; sizeRank: number; bulk: number; stature: number }

export function boxCorners(origin: THREE.Vector3, size: THREE.Vector3): THREE.Vector3[] {
  const corners: THREE.Vector3[] = []
  for (const x of [0, size.x]) {
    for (const y of [0, size.y]) {
      for (const z of [0, size.z]) corners.push(origin.clone().add(new THREE.Vector3(x, y, z)))
    }
  }
  return corners
}

/**
 * Orthographic fit. `offsetDir` points from the look target toward the camera.
 * The sideways axis is the camera's own X column after lookAt, not a second cross product.
 * Zoom is pixels per world unit, matching a view whose frustum is the pane in pixels.
 */
export function fitOrtho(
  viewW: number,
  viewH: number,
  offsetDir: THREE.Vector3,
  corners: THREE.Vector3[],
  fill = 0.84,
): { position: THREE.Vector3; target: THREE.Vector3; zoom: number } {
  const eye = offsetDir.clone().normalize()
  const seed = new THREE.Vector3()
  for (const corner of corners) seed.add(corner)
  if (corners.length > 0) seed.multiplyScalar(1 / corners.length)

  const cam = new THREE.OrthographicCamera(-viewW / 2, viewW / 2, viewH / 2, -viewH / 2, -8000, 8000)
  cam.position.copy(seed).addScaledVector(eye, 80)
  cam.lookAt(seed)
  cam.updateMatrixWorld()
  const right = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 0)
  const camUp = new THREE.Vector3().setFromMatrixColumn(cam.matrixWorld, 1)

  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity
  for (const corner of corners) {
    const d = corner.clone().sub(seed)
    const x = d.dot(right)
    const y = d.dot(camUp)
    minX = Math.min(minX, x)
    maxX = Math.max(maxX, x)
    minY = Math.min(minY, y)
    maxY = Math.max(maxY, y)
  }
  const worldW = Math.max(0.5, maxX - minX)
  const worldH = Math.max(0.5, maxY - minY)
  const center = seed
    .clone()
    .addScaledVector(right, (minX + maxX) / 2)
    .addScaledVector(camUp, (minY + maxY) / 2)
  const position = center.clone().addScaledVector(eye, Math.hypot(worldW, worldH) * 2 + 30)
  const zoom = fill * Math.min(viewW / worldW, viewH / worldH)
  return { position, target: center, zoom }
}

export type Stand = { x: number; z: number; yaw: number; lengthMeters: number; bulk: number; stature: number }

/**
 * Corners of a dragon after position and rotation.y.
 * The yaw matrix is Object3D's: x' = lx cos + lz sin, z' = −lx sin + lz cos.
 */
export function orientedCorners(stand: Stand): THREE.Vector3[] {
  const hx = stand.lengthMeters * stand.bulk * WING
  const hy = stand.lengthMeters * stand.stature * BODY_H
  const hz = stand.lengthMeters * 0.5
  const c = Math.cos(stand.yaw)
  const s = Math.sin(stand.yaw)
  const corners: THREE.Vector3[] = []
  for (const lx of [-hx, hx]) {
    for (const y of [0, hy]) {
      for (const lz of [-hz, hz]) {
        corners.push(new THREE.Vector3(
          stand.x + lx * c + lz * s,
          y,
          stand.z - lx * s + lz * c,
        ))
      }
    }
  }
  return corners
}

/** Largest at low x, which is screen-left when the camera sits on +z. Length runs along x. */
export function profileRow<T extends Sized>(list: T[], gap: number): Array<T & Stand> {
  const sorted = [...list].sort((a, b) => b.lengthMeters - a.lengthMeters || a.sizeRank - b.sizeRank)
  let cursor = 0
  return sorted.map((dragon) => {
    const x = cursor + dragon.lengthMeters * 0.5
    cursor += dragon.lengthMeters + gap
    return { ...dragon, x, z: 0, yaw: PROFILE_YAW }
  })
}
