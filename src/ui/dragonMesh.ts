import * as THREE from 'three'

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

/** A person 1.83 m tall, feet on y = 0, facing −z. Shoulders are wide enough to read at chart scale. */
export function makePerson(): THREE.Group {
  const g = new THREE.Group()
  const skin = hide()
  const wool = cloth()
  for (const x of [-0.1, 0.1]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.05, 0.78, 8), wool)
    leg.position.set(x, 0.39, 0)
    g.add(leg)
  }
  const cloak = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.72, 10), wool)
  cloak.position.y = 1.02
  g.add(cloak)
  const arms = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.1, 0.12), wool)
  arms.position.y = 1.28
  g.add(arms)
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 10), skin)
  head.position.y = 1.52
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

/** A square keep, 14 m across and 30 m to the top of the battlement. Feet on y = 0. */
export function makeTower(): THREE.Group {
  const g = new THREE.Group()
  const stone = new THREE.MeshStandardMaterial({ color: '#8d8478', roughness: 0.92 })
  const dark = new THREE.MeshStandardMaterial({ color: '#2c2824', roughness: 0.8 })
  const shaft = new THREE.Mesh(new THREE.BoxGeometry(12, 27, 12), stone)
  shaft.position.y = 13.5
  g.add(shaft)
  const crown = new THREE.Mesh(new THREE.BoxGeometry(14.5, 3, 14.5), stone)
  crown.position.y = 28.5
  g.add(crown)
  const door = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.6, 0.5), dark)
  door.position.set(0, 1.8, 6.15)
  g.add(door)
  g.userData.role = 'tower'
  g.userData.height = 30
  return g
}
