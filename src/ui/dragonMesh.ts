import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

/**
 * One dragon, one metre from snout to tail, nose on −z, feet on y = 0.
 * The yard scales this mesh by lengthMeters. Wings are half open and stay
 * inside the snout-to-tail span, so the bounding box *is* the length.
 */

const sphere = new THREE.SphereGeometry(1, 16, 12)
const cone = new THREE.ConeGeometry(1, 1, 8)
const cyl = new THREE.CylinderGeometry(1, 1, 1, 8)

function stamp(
  geo: THREE.BufferGeometry,
  x: number,
  y: number,
  z: number,
  sx: number,
  sy: number,
  sz: number,
  rx = 0,
  ry = 0,
  rz = 0,
) {
  const g = geo.clone()
  g.applyMatrix4(
    new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)),
      new THREE.Vector3(sx, sy, sz),
    ),
  )
  return g
}

export function makeUnitDragon(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [
    stamp(sphere, 0, 0.16, 0, 0.11, 0.085, 0.18),
    stamp(sphere, 0, 0.2, -0.15, 0.065, 0.05, 0.065),
    stamp(sphere, 0, 0.24, -0.24, 0.05, 0.04, 0.055),
    stamp(sphere, 0, 0.27, -0.32, 0.042, 0.034, 0.048),
    stamp(sphere, 0, 0.285, -0.39, 0.05, 0.036, 0.05),
    stamp(sphere, 0, 0.268, -0.45, 0.026, 0.018, 0.038),
    stamp(cone, 0.018, 0.33, -0.37, 0.012, 0.055, 0.012, 0.35, 0, 0.35),
    stamp(cone, -0.018, 0.33, -0.37, 0.012, 0.055, 0.012, 0.35, 0, -0.35),
    stamp(sphere, 0, 0.15, 0.17, 0.065, 0.05, 0.075),
    stamp(sphere, 0, 0.125, 0.28, 0.04, 0.03, 0.065),
    stamp(sphere, 0, 0.105, 0.38, 0.024, 0.018, 0.05),
    stamp(sphere, 0, 0.09, 0.47, 0.014, 0.01, 0.035),
  ]

  for (const [x, z] of [
    [0.07, -0.06],
    [-0.07, -0.06],
    [0.055, 0.1],
    [-0.055, 0.1],
  ] as const) {
    parts.push(stamp(cyl, x, 0.075, z, 0.016, 0.13, 0.016))
    parts.push(stamp(sphere, x, 0.018, z + 0.012, 0.02, 0.01, 0.028))
  }

  const wingShape = new THREE.Shape()
  wingShape.moveTo(0, 0)
  wingShape.bezierCurveTo(0.1, 0.07, 0.24, 0.12, 0.34, 0.06)
  wingShape.bezierCurveTo(0.38, 0.02, 0.28, -0.02, 0.16, -0.015)
  wingShape.lineTo(0.03, -0.03)
  wingShape.closePath()
  const wing = new THREE.ShapeGeometry(wingShape, 6)
  const right = wing.clone()
  right.applyMatrix4(
    new THREE.Matrix4().compose(
      new THREE.Vector3(0.07, 0.2, -0.02),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.35, 0.1, 0.55)),
      new THREE.Vector3(1, 1, 1),
    ),
  )
  const left = wing.clone()
  left.applyMatrix4(
    new THREE.Matrix4().compose(
      new THREE.Vector3(-0.07, 0.2, -0.02),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.35, -0.1, -0.55)),
      new THREE.Vector3(-1, 1, 1),
    ),
  )
  parts.push(right, left)

  const geo = mergeGeometries(parts, false)
  if (!geo) throw new Error('Could not build the dragon mesh')
  for (const part of parts) part.dispose()

  geo.computeBoundingBox()
  const box = geo.boundingBox
  if (!box) throw new Error('Dragon mesh has no bounds')
  const len = box.max.z - box.min.z
  const midZ = (box.max.z + box.min.z) / 2
  geo.translate(0, -box.min.y, -midZ)
  geo.scale(1 / len, 1 / len, 1 / len)
  geo.computeBoundingBox()
  geo.computeVertexNormals()
  assertUnitDragon(geo)
  return geo
}

/** Snout at −0.5, tail at +0.5, feet on the ground. Throws if the mesh drifts. */
export function assertUnitDragon(geo: THREE.BufferGeometry) {
  geo.computeBoundingBox()
  const box = geo.boundingBox
  if (!box) throw new Error('Dragon mesh has no bounds')
  const len = box.max.z - box.min.z
  if (Math.abs(len - 1) > 1e-3) throw new Error(`Unit dragon length is ${len}, expected 1`)
  if (box.min.y < -1e-3) throw new Error(`Dragon feet sit below the ground (${box.min.y})`)
  if (box.min.z > -0.49 || box.max.z < 0.49) {
    throw new Error(`Snout and tail are not the ends of the mesh (${box.min.z} … ${box.max.z})`)
  }
}

const hide = () => new THREE.MeshStandardMaterial({ color: '#cbbba6', roughness: 0.82 })
const cloth = () => new THREE.MeshStandardMaterial({ color: '#3c3834', roughness: 0.88 })

/** A person 1.83 m tall, feet on y = 0, facing −z. */
export function makePerson(): THREE.Group {
  const g = new THREE.Group()
  const skin = hide()
  const wool = cloth()
  const legH = 0.94
  const torsoH = 0.64
  const headR = 0.13
  for (const x of [-0.09, 0.09]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.045, legH, 8), wool)
    leg.position.set(x, legH / 2, 0)
    g.add(leg)
  }
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.13, torsoH, 10), wool)
  torso.position.set(0, legH + torsoH / 2, 0)
  g.add(torso)
  const head = new THREE.Mesh(new THREE.SphereGeometry(headR, 12, 10), skin)
  head.position.set(0, legH + torsoH + headR * 0.85, 0)
  g.add(head)
  g.updateMatrixWorld(true)
  const box = new THREE.Box3().setFromObject(g)
  const height = box.max.y - box.min.y
  g.scale.setScalar(1.83 / height)
  g.position.y = -box.min.y * (1.83 / height)
  g.userData.role = 'person'
  return g
}

/** A horse 2.4 m from nose to tail, feet on y = 0, nose on −z. */
export function makeHorse(): THREE.Group {
  const g = new THREE.Group()
  const coat = new THREE.MeshStandardMaterial({ color: '#6d5344', roughness: 0.8 })
  const body = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 10), coat)
  body.scale.set(0.26, 0.3, 0.95)
  body.position.set(0, 1.15, 0)
  g.add(body)
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 0.5, 8), coat)
  neck.position.set(0, 1.42, -0.78)
  neck.rotation.x = 0.7
  g.add(neck)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), coat)
  head.scale.set(0.65, 0.75, 1.25)
  head.position.set(0, 1.58, -1.08)
  g.add(head)
  for (const [x, z] of [
    [0.12, -0.5],
    [-0.12, -0.5],
    [0.11, 0.5],
    [-0.11, 0.5],
  ] as const) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.035, 0.82, 6), coat)
    leg.position.set(x, 0.41, z)
    g.add(leg)
  }
  g.updateMatrixWorld(true)
  const box = new THREE.Box3().setFromObject(g)
  const len = box.max.z - box.min.z
  const s = 2.4 / len
  g.scale.setScalar(s)
  g.position.y = -box.min.y * s
  // Nose was the −z end. Keep it that way after the uniform scale.
  g.userData.role = 'horse'
  return g
}

export function meshLengthZ(object: THREE.Object3D): number {
  const box = new THREE.Box3().setFromObject(object)
  return box.max.z - box.min.z
}

export function meshHeight(object: THREE.Object3D): number {
  const box = new THREE.Box3().setFromObject(object)
  return box.max.y - box.min.y
}
