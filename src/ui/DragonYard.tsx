import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Grid, OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import type { Dragon } from '../data/dragons.ts'
import { assertUnitDragon, makeHorse, makePerson, meshHeight, meshLengthZ } from './dragonMesh.ts'
import { besidePose, layoutRow, overviewPose, standPoint } from './yardFrame.ts'

const DRAGON_URL = `${import.meta.env.BASE_URL}dragons/yard-dragon.glb`
useGLTF.preload(DRAGON_URL)

type Band = 'all' | 'great' | 'young'

const BANDS: { key: Band; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'great', label: 'The great ones' },
  { key: 'young', label: 'The young ones' },
]

type Placed = Dragon & { x: number; lengthMeters: number }

function inBand(dragon: Dragon, band: Band): dragon is Dragon & { lengthMeters: number } {
  if (dragon.lengthMeters == null) return false
  if (band === 'great') return dragon.lengthMeters >= 55
  if (band === 'young') return dragon.lengthMeters <= 30
  return true
}

function layout(list: Array<Dragon & { lengthMeters: number }>): Placed[] {
  return layoutRow(list)
}

function lift(swatch: string) {
  const color = new THREE.Color(swatch)
  const lum = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b
  if (lum < 0.08) color.lerp(new THREE.Color('#3a332e'), 0.55)
  return color
}

function metersLabel(meters: number) {
  const feet = Math.round(meters * 3.28084)
  const shown = Number.isInteger(meters) ? String(meters) : String(meters)
  return `${shown} m · ${feet} ft`
}

type Rig = {
  target: THREE.Vector3
  update: () => void
  addEventListener: (type: string, listener: () => void) => void
  removeEventListener: (type: string, listener: () => void) => void
}

function Frame({
  placed,
  selectedId,
}: {
  placed: Placed[]
  selectedId: string | null
}) {
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera
  const size = useThree((s) => s.size)
  const controls = useThree((s) => s.controls) as Rig | null
  const anim = useRef<{
    fromP: THREE.Vector3
    toP: THREE.Vector3
    fromT: THREE.Vector3
    toT: THREE.Vector3
    t: number
  } | null>(null)

  useLayoutEffect(() => {
    if (!controls || placed.length === 0) return
    const focus = selectedId ? placed.find((d) => d.id === selectedId) : undefined
    const aspect = size.width / Math.max(1, size.height)
    const pose = focus ? besidePose(focus) : overviewPose(placed, camera.fov, aspect)
    anim.current = {
      fromP: camera.position.clone(),
      toP: pose.position,
      fromT: controls.target.clone(),
      toT: pose.target,
      t: 0,
    }
  }, [camera, controls, placed, selectedId, size.width, size.height])

  useEffect(() => {
    if (!controls) return
    const stop = () => {
      anim.current = null
    }
    controls.addEventListener('start', stop)
    return () => controls.removeEventListener('start', stop)
  }, [controls])

  useFrame((_, dt) => {
    const job = anim.current
    if (!job || !controls) return
    job.t = Math.min(1, job.t + dt * 0.85)
    const k = 1 - (1 - job.t) ** 3
    camera.position.lerpVectors(job.fromP, job.toP, k)
    controls.target.lerpVectors(job.fromT, job.toT, k)
    controls.update()
    if (job.t >= 1) anim.current = null
  })

  return null
}

function YardScene({
  placed,
  selectedId,
  onPick,
}: {
  placed: Placed[]
  selectedId: string | null
  onPick: (id: string | null) => void
}) {
  const gltf = useGLTF(DRAGON_URL)
  const dragon = useMemo(() => {
    const found: THREE.Mesh[] = []
    gltf.scene.traverse((node) => {
      if ((node as THREE.Mesh).isMesh) found.push(node as THREE.Mesh)
    })
    const geometry = found[0]?.geometry
    if (!geometry) throw new Error('Yard dragon has no mesh')
    return geometry
  }, [gltf])
  const person = useMemo(() => makePerson(), [])
  const horse = useMemo(() => makeHorse(), [])
  const anchor = placed.find((d) => d.id === selectedId) ?? placed[0]

  useLayoutEffect(() => {
    assertUnitDragon(dragon)
    const personH = meshHeight(person)
    console.assert(Math.abs(personH - 1.83) < 0.02, `person height ${personH}`)
    const horseLen = meshLengthZ(horse)
    console.assert(Math.abs(horseLen - 2.4) < 0.05, `horse length ${horseLen}`)
    for (const d of placed) {
      const world = d.lengthMeters * (dragon.boundingBox!.max.z - dragon.boundingBox!.min.z)
      console.assert(Math.abs(world - d.lengthMeters) < 1e-3, `${d.id} scale ${world}`)
    }
  }, [dragon, horse, person, placed])

  const stand = anchor ? standPoint(anchor) : null

  return (
    <>
      <color attach="background" args={['#c5bfb4']} />
      <fog attach="fog" args={['#c5bfb4', 700, 6500]} />
      <hemisphereLight args={['#d5dde4', '#8a7b68', 0.9]} />
      <directionalLight position={[120, 180, -80]} intensity={1.55} />
      <Grid
        args={[4000, 4000]}
        cellSize={5}
        cellThickness={0.5}
        cellColor="#7a7368"
        sectionSize={25}
        sectionThickness={1.1}
        sectionColor="#5e584f"
        fadeDistance={6500}
        fadeStrength={1.4}
        infiniteGrid
        position={[0, 0.01, 0]}
      />
      {placed.map((d) => (
        <mesh
          key={d.id}
          name={d.id}
          geometry={dragon}
          position={[d.x, 0, 0]}
          scale={d.lengthMeters}
          onClick={(event) => {
            event.stopPropagation()
            onPick(d.id)
          }}
          onPointerOver={() => {
            document.body.style.cursor = 'pointer'
          }}
          onPointerOut={() => {
            document.body.style.cursor = ''
          }}
        >
          <meshStandardMaterial
            color={lift(d.swatch)}
            roughness={0.72}
            metalness={0.05}
            emissive={d.id === selectedId ? '#8a6230' : '#000000'}
            emissiveIntensity={d.id === selectedId ? 0.28 : 0}
            side={THREE.FrontSide}
          />
        </mesh>
      ))}
      {stand && (
        <group position={[stand.x, stand.y, stand.z]}>
          <primitive object={person} />
          <primitive object={horse} position={[2.6, 0, 0.35]} />
        </group>
      )}
      <OrbitControls makeDefault enableDamping dampingFactor={0.08} maxPolarAngle={Math.PI / 2.05} minDistance={1.2} maxDistance={4000} />
      <Frame placed={placed} selectedId={selectedId} />
    </>
  )
}

export function DragonYard({ dragons }: { dragons: Dragon[] }) {
  const [band, setBand] = useState<Band>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const placed = useMemo(
    () => layout(dragons.filter((d): d is Dragon & { lengthMeters: number } => inBand(d, band))),
    [dragons, band],
  )
  const selected = placed.find((d) => d.id === selectedId) ?? null

  function pickBand(next: Band) {
    setBand(next)
    setSelectedId(null)
  }

  return (
    <div className="dragons-yard-wrap">
      <div className="dragons-order" role="group" aria-label="Which dragons stand in the yard">
        {BANDS.map((b) => (
          <button
            key={b.key}
            type="button"
            className={band === b.key ? 'active' : ''}
            aria-pressed={band === b.key}
            onClick={() => pickBand(b.key)}
          >
            {b.label}
          </button>
        ))}
      </div>
      <div className="dragons-yard">
        <Canvas
          camera={{ fov: 38, near: 0.15, far: 9000, position: [40, 30, 80] }}
          dpr={[1, 1.75]}
          gl={{ antialias: true }}
          onPointerMissed={() => setSelectedId(null)}
        >
          <YardScene placed={placed} selectedId={selected?.id ?? null} onPick={setSelectedId} />
        </Canvas>
        <p className="dragons-yard-readout">
          {selected ? (
            <>
              <strong>{selected.name}</strong>
              <span>{metersLabel(selected.lengthMeters)}</span>
            </>
          ) : (
            <span>Drag to look around. Tap a dragon.</span>
          )}
        </p>
      </div>
      <p className="dragons-yard-note">
        The man is six feet. The horse is 2.4 metres from nose to tail. Terrax and Urrax are not in the
        yard: the books never give them a size.
      </p>
    </div>
  )
}

