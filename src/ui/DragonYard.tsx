import { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Grid, OrbitControls, OrthographicCamera, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import type { Dragon } from '../data/dragons.ts'
import { assertUnitDragon, makeHorse, makePerson, makeTower, meshHeight, meshLengthZ } from './dragonMesh.ts'
import {
  BODY_H,
  bodyProfile,
  boxCorners,
  CHART_DIR,
  fitOrtho,
  orientedCorners,
  PROFILE_DIR,
  profileRow,
  WING,
  type Stand,
} from './yardFrame.ts'

const DRAGON_URL = `${import.meta.env.BASE_URL}dragons/yard-dragon.glb`
useGLTF.preload(DRAGON_URL)

const canvasProps = {
  dpr: [1, 1.6] as [number, number],
  gl: { antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping },
  onCreated: ({ gl }: { gl: THREE.WebGLRenderer }) => {
    gl.toneMappingExposure = 1.12
  },
}

type Band = 'gulf' | 'great' | 'dance' | 'all'

const BANDS: { key: Band; label: string }[] = [
  { key: 'gulf', label: 'The difference' },
  { key: 'great', label: 'The great ones' },
  { key: 'dance', label: 'The Dance' },
  { key: 'all', label: 'Every dragon' },
]

const GULF = new Set(['balerion', 'vhagar', 'drogon', 'arrax'])

/** Same facing as the unit mesh, turned just enough to show the chest and one wing. */
const NEST_YAW = 0.22

/**
 * Giants side by side. Drogon and Arrax stand in front of them, still in metres,
 * so the frame is filled by Balerion instead of by empty sky.
 */
const GULF_SPOT: Record<string, { x: number; z: number }> = {
  balerion: { x: 180, z: 0 },
  vhagar: { x: 0, z: 6 },
  drogon: { x: 168, z: -128 },
  arrax: { x: 96, z: -176 },
}

const LEFT: Record<Band, { title: string; gap: number; cell: number }> = {
  gulf: { title: 'Balerion fills the yard', gap: 14, cell: 10 },
  great: { title: 'The great ones, snout to tail', gap: 12, cell: 20 },
  dance: { title: 'The Dance, snout to tail', gap: 6, cell: 10 },
  all: { title: 'Every dragon, snout to tail', gap: 4, cell: 10 },
}

type Placed = Dragon & Stand & { lengthMeters: number }

function hasLength(dragon: Dragon): dragon is Dragon & { lengthMeters: number } {
  return dragon.lengthMeters != null
}

function withBody(dragon: Dragon & { lengthMeters: number }) {
  return { ...dragon, ...bodyProfile(dragon.id, dragon.lengthMeters) }
}

function inMain(dragon: Dragon, band: Band): dragon is Dragon & { lengthMeters: number } {
  if (!hasLength(dragon)) return false
  if (band === 'gulf') return GULF.has(dragon.id)
  if (band === 'great') return dragon.lengthMeters >= 90
  if (band === 'dance') return dragon.lengthMeters > 18 && dragon.lengthMeters < 90
  return true
}

function placeMain(list: Array<Dragon & { lengthMeters: number }>, band: Band, gap: number): Placed[] {
  const bodied = list.map(withBody)
  if (band === 'gulf') {
    return bodied.map((dragon) => {
      const spot = GULF_SPOT[dragon.id] ?? { x: 0, z: 0 }
      return { ...dragon, ...spot, yaw: NEST_YAW }
    })
  }
  return profileRow(bodied, gap)
}

function placeRiders(list: Array<Dragon & { lengthMeters: number }>): Placed[] {
  const spots: Record<string, { x: number; z: number }> = {
    moondancer: { x: 0, z: 0 },
    tyraxes: { x: 4, z: -12 },
    stormcloud: { x: -3, z: -18 },
  }
  return list.map(withBody).map((dragon) => {
    const spot = spots[dragon.id] ?? { x: 0, z: 0 }
    return { ...dragon, ...spot, yaw: 0.18 }
  })
}

function placeHand(list: Array<Dragon & { lengthMeters: number }>): Placed[] {
  return profileRow(list.map(withBody), 0.55)
}

function coat(swatch: string) {
  const color = new THREE.Color(swatch)
  const hsl = { h: 0, s: 0, l: 0 }
  color.getHSL(hsl)
  if (hsl.l < 0.4) hsl.l = 0.4 + hsl.l * 0.2
  hsl.s = Math.min(0.58, hsl.s)
  color.setHSL(hsl.h, hsl.s, Math.min(0.7, hsl.l))
  return color
}

function metersLabel(meters: number) {
  const feet = Math.round(meters * 3.28084)
  return `${Number.isInteger(meters) ? String(meters) : String(meters)} m · ${feet} ft`
}

function useDragonParts() {
  const gltf = useGLTF(DRAGON_URL)
  return useMemo(() => {
    let found: THREE.BufferGeometry | null = null
    let map: THREE.Texture | null = null
    let rough: THREE.Texture | null = null
    gltf.scene.traverse((node) => {
      const mesh = node as THREE.Mesh
      if (!mesh.isMesh || found) return
      found = mesh.geometry
      const mat = mesh.material as THREE.MeshStandardMaterial
      map = mat.map
      rough = mat.roughnessMap
    })
    if (!found) throw new Error('Yard dragon has no mesh')
    const geo: THREE.BufferGeometry = found
    assertUnitDragon(geo)
    const box = geo.boundingBox
    if (!box) throw new Error('Yard dragon has no bounds')
    const wing = Math.max(Math.abs(box.min.x), box.max.x)
    console.assert(Math.abs(wing - WING) < 0.03, `wing half-width ${wing}`)
    console.assert(Math.abs(box.max.y - BODY_H) < 0.03, `dragon height ${box.max.y}`)
    return { geo, map, rough }
  }, [gltf])
}

function labelTexture(title: string, detail: string) {
  const canvas = document.createElement('canvas')
  canvas.width = 640
  canvas.height = 224
  const ctx = canvas.getContext('2d')
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  if (!ctx) return tex
  ctx.clearRect(0, 0, 640, 224)
  ctx.fillStyle = 'rgba(22, 17, 13, 0.86)'
  ctx.fillRect(8, 8, 624, 208)
  ctx.fillStyle = '#f4ead8'
  ctx.font = '600 62px Cinzel, Palatino, Georgia, serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(title, 320, 78)
  ctx.fillStyle = '#e4c48a'
  ctx.font = '500 44px Palatino, Georgia, serif'
  ctx.fillText(detail, 320, 152)
  tex.needsUpdate = true
  return tex
}

function Tag({
  title,
  detail,
  position,
  width,
}: {
  title: string
  detail: string
  position: [number, number, number]
  width: number
}) {
  const map = useMemo(() => labelTexture(title, detail), [title, detail])
  useEffect(() => () => map.dispose(), [map])
  const height = width * (224 / 640)
  return (
    <sprite position={position} scale={[width, height, 1]} raycast={() => null}>
      <spriteMaterial map={map} transparent depthWrite={false} />
    </sprite>
  )
}

function Fit({ corners, eye }: { corners: THREE.Vector3[]; eye: THREE.Vector3 }) {
  const camera = useThree((s) => s.camera) as THREE.OrthographicCamera
  const size = useThree((s) => s.size)
  const controls = useThree((s) => s.controls) as {
    target: THREE.Vector3
    update: () => void
  } | null

  useLayoutEffect(() => {
    if (!controls || size.width < 20 || size.height < 20 || corners.length === 0) return
    const pose = fitOrtho(size.width, size.height, eye, corners, 0.8)
    camera.position.copy(pose.position)
    camera.zoom = pose.zoom
    camera.near = -6000
    camera.far = 12000
    camera.lookAt(pose.target)
    camera.updateProjectionMatrix()
    controls.target.copy(pose.target)
    controls.update()
  }, [camera, controls, corners, eye, size.width, size.height])

  return null
}

function carveScales(shader: { fragmentShader: string }) {
  shader.fragmentShader = shader.fragmentShader.replace(
    'diffuseColor *= sampledDiffuseColor;',
    `float scaleShade = sampledDiffuseColor.r;
     diffuseColor.rgb *= 0.42 + scaleShade * 1.05;
     diffuseColor.a *= sampledDiffuseColor.a;`,
  )
}

function Stage({
  placed,
  selectedId,
  onPick,
  cell,
  eye,
  props,
  tagScale,
}: {
  placed: Placed[]
  selectedId: string | null
  onPick: (id: string) => void
  cell: number
  eye: THREE.Vector3
  props: 'keep' | 'riders' | 'hand' | 'none'
  tagScale: number
}) {
  const { geo, map, rough } = useDragonParts()
  const person = useMemo(() => makePerson(), [])
  const horse = useMemo(() => makeHorse(), [])
  const tower = useMemo(() => makeTower(), [])

  useLayoutEffect(() => {
    console.assert(Math.abs(meshHeight(person) - 1.83) < 0.02, `person height ${meshHeight(person)}`)
    console.assert(Math.abs(meshLengthZ(horse) - 2.4) < 0.05, `horse length ${meshLengthZ(horse)}`)
    console.assert(Math.abs(meshHeight(tower) - 30) < 0.05, `tower height ${meshHeight(tower)}`)
  }, [horse, person, tower])

  const showTags = props !== 'none' && placed.length > 0 && placed.length <= 8

  const prop = useMemo(() => {
    if (props === 'keep') return { position: [28, 0, -206] as [number, number, number], yaw: Math.PI }
    if (props === 'riders') return { position: [-1.2, 0, -24] as [number, number, number], yaw: 0 }
    if (props === 'none') return { position: [0, 0, 0] as [number, number, number], yaw: 0 }
    const first = placed[0]
    const x = first ? first.x - first.lengthMeters * 0.5 - 1.3 : 0
    return { position: [x, 0, 0] as [number, number, number], yaw: Math.PI }
  }, [placed, props])

  const corners = useMemo(() => {
    const extra: THREE.Vector3[] = []
    if (props === 'keep') {
      extra.push(...boxCorners(new THREE.Vector3(21, 0, -213), new THREE.Vector3(14.6, 30, 14.6)))
    } else if (props === 'none') {
      /* The row is the whole subject. */
    } else if (props === 'riders') {
      extra.push(...boxCorners(new THREE.Vector3(prop.position[0] - 1, 0, prop.position[2] - 1.2), new THREE.Vector3(6.2, 2.4, 3.2)))
    } else {
      extra.push(...boxCorners(new THREE.Vector3(prop.position[0] - 0.4, 0, -0.5), new THREE.Vector3(1.2, 1.83, 1)))
    }
    const dragons = placed.flatMap((dragon) => {
      const body = orientedCorners(dragon)
      const tagW = Math.max(props === 'hand' ? 1.7 : 14, dragon.lengthMeters * tagScale)
      body.push(new THREE.Vector3(dragon.x, dragon.lengthMeters * dragon.stature * BODY_H + tagW * 0.42, dragon.z))
      return body
    })
    return dragons.concat(extra)
  }, [placed, prop.position, props, tagScale])

  const depth = Math.max(40, ...placed.map((d) => d.lengthMeters)) + 24
  const midX = placed.length > 0 ? placed.reduce((sum, dragon) => sum + dragon.x, 0) / placed.length : 0
  const midZ = placed.length > 0 ? placed.reduce((sum, dragon) => sum + dragon.z, 0) / placed.length : 0
  const span = Math.max(24, ...placed.map((d) => Math.abs(d.x - midX) + d.lengthMeters * d.bulk * WING + 12)) * 2

  const light = eye.clone().multiplyScalar(90)
  light.y = Math.max(48, light.y)

  return (
    <>
      <color attach="background" args={['#d5cec2']} />
      <hemisphereLight args={['#f6f1e8', '#7d6a56', 1.15]} />
      <ambientLight intensity={0.22} />
      <directionalLight position={[light.x, light.y, light.z]} intensity={2.35} />
      <directionalLight position={[-light.x * 0.4, 36, -light.z * 0.35]} intensity={0.45} />
      <Grid
        args={[span, depth]}
        cellSize={cell}
        cellThickness={0.6}
        cellColor="#8d8478"
        sectionSize={cell * 5}
        sectionThickness={1.15}
        sectionColor="#5e564c"
        fadeDistance={20000}
        fadeStrength={1}
        position={[midX, 0.02, midZ]}
      />
      {placed.map((dragon) => {
        const color = coat(dragon.swatch)
        const height = dragon.lengthMeters * dragon.stature * BODY_H
        const tagW = Math.max(props === 'hand' ? 1.7 : props === 'riders' ? 4.2 : 16, dragon.lengthMeters * tagScale)
        const tagH = tagW * (224 / 640)
        return (
          <group key={dragon.id} position={[dragon.x, 0, dragon.z]} rotation={[0, dragon.yaw, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, 0]} raycast={() => null}>
              <circleGeometry args={[dragon.lengthMeters * 0.2, 24]} />
              <meshBasicMaterial color="#2a241c" transparent opacity={0.16} depthWrite={false} />
            </mesh>
            <mesh
              geometry={geo}
              dispose={null}
              scale={[dragon.lengthMeters * dragon.bulk, dragon.lengthMeters * dragon.stature, dragon.lengthMeters]}
              onClick={(event) => {
                event.stopPropagation()
                onPick(dragon.id)
              }}
              onPointerOver={() => {
                document.body.style.cursor = 'pointer'
              }}
              onPointerOut={() => {
                document.body.style.cursor = ''
              }}
            >
              <meshStandardMaterial
                map={map}
                roughnessMap={rough}
                color={color}
                roughness={0.62}
                metalness={0.04}
                emissive={color}
                emissiveIntensity={dragon.id === selectedId ? 0.28 : 0}
                side={THREE.FrontSide}
                onBeforeCompile={carveScales}
                customProgramCacheKey={() => 'yard-scale'}
              />
            </mesh>
            {showTags && (
              <Tag
                title={dragon.name}
                detail={metersLabel(dragon.lengthMeters)}
                position={[0, height + tagH * 0.65, 0]}
                width={tagW}
              />
            )}
          </group>
        )
      })}
      {props === 'keep' ? (
        <group position={prop.position} rotation={[0, prop.yaw, 0]}>
          <primitive object={tower} />
          {showTags && <Tag title="A keep" detail="30 m tall" position={[0, 36, 0]} width={28} />}
        </group>
      ) : props === 'none' ? null : (
        <group position={prop.position} rotation={[0, prop.yaw, 0]}>
          <primitive object={person} />
          {props === 'riders' && <primitive object={horse} position={[3.6, 0, 0.4]} />}
          <Tag title="A man" detail="6 ft" position={[0, props === 'hand' ? 2.7 : 3.1, 0]} width={props === 'hand' ? 2.15 : 3.4} />
          {props === 'riders' && (
            <Tag title="A horse" detail="2.4 m" position={[3.6, 3.2, 0.4]} width={3.6} />
          )}
        </group>
      )}
      <OrthographicCamera makeDefault position={[0, 24, 48]} zoom={6} near={-6000} far={12000} />
      <OrbitControls
        makeDefault
        enableDamping
        dampingFactor={0.08}
        maxPolarAngle={Math.PI / 2.08}
        minPolarAngle={0.18}
        minZoom={0.12}
        maxZoom={80}
      />
      <Fit corners={corners} eye={eye} />
    </>
  )
}

export function DragonYard({ dragons }: { dragons: Dragon[] }) {
  const [band, setBand] = useState<Band>('gulf')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const main = useMemo(
    () => placeMain(dragons.filter((dragon) => inMain(dragon, band)), band, LEFT[band].gap),
    [dragons, band],
  )
  const riders = useMemo(
    () => placeRiders(dragons.filter(hasLength).filter((dragon) => dragon.lengthMeters > 3 && dragon.lengthMeters <= 18)),
    [dragons],
  )
  const hand = useMemo(
    () => placeHand(dragons.filter(hasLength).filter((dragon) => dragon.lengthMeters <= 3)),
    [dragons],
  )
  const selected = [...main, ...riders, ...hand].find((dragon) => dragon.id === selectedId) ?? null
  const eye = band === 'gulf' ? CHART_DIR : PROFILE_DIR

  return (
    <div className="dragons-yard-wrap">
      <div className="dragons-order" role="group" aria-label="Which dragons stand in the yard">
        {BANDS.map((item) => (
          <button
            key={item.key}
            type="button"
            className={band === item.key ? 'active' : ''}
            aria-pressed={band === item.key}
            onClick={() => {
              setBand(item.key)
              setSelectedId(null)
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={`dragons-yard${band === 'gulf' ? '' : ' is-row'}`}>
        <div className="yard-main">
          <p className="yard-caption">{LEFT[band].title}</p>
          <Canvas className="yard-gl" {...canvasProps} onPointerMissed={() => setSelectedId(null)}>
            <Stage
              placed={main}
              selectedId={selected?.id ?? null}
              onPick={setSelectedId}
              cell={LEFT[band].cell}
              eye={eye}
              props={band === 'gulf' ? 'keep' : 'none'}
              tagScale={band === 'gulf' ? 0.26 : 0.16}
            />
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
        <div className="yard-lower">
          <div className="yard-pane-wrap">
            <p className="yard-caption">Beside a man</p>
            <Canvas className="yard-gl" {...canvasProps} onPointerMissed={() => setSelectedId(null)}>
              <Stage
                placed={riders}
                selectedId={selected?.id ?? null}
                onPick={setSelectedId}
                cell={2}
                eye={CHART_DIR}
                props="riders"
                tagScale={0.34}
              />
            </Canvas>
          </div>
          <div className="yard-pane-wrap">
            <p className="yard-caption">In the hand</p>
            <Canvas className="yard-gl" {...canvasProps} onPointerMissed={() => setSelectedId(null)}>
              <Stage
                placed={hand}
                selectedId={selected?.id ?? null}
                onPick={setSelectedId}
                cell={0.5}
                eye={PROFILE_DIR}
                props="hand"
                tagScale={0.85}
              />
            </Canvas>
          </div>
        </div>
      </div>
      <p className="dragons-yard-note">
        One measuring stick in every frame. Balerion is 165 metres and Vhagar 150, so they stand almost
        level. Drogon is 55. Arrax is 30 metres long, and the keep is 30 metres tall. Below, a
        six-foot man and a horse stand with the dragons that could share a courtyard, then with the
        hatchlings. Caraxes is drawn leaner. Terrax and Urrax are not in the yard: the books never give
        them a size.
      </p>
    </div>
  )
}
