import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

const roundedStickerShape = () => {
  const width = 1.16
  const height = 1.34
  const radius = 0.2
  const x = -width / 2
  const y = -height / 2
  const shape = new THREE.Shape()

  shape.moveTo(x + radius, y)
  shape.lineTo(x + width - radius, y)
  shape.quadraticCurveTo(x + width, y, x + width, y + radius)
  shape.lineTo(x + width, y + height - radius)
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  shape.lineTo(x + radius, y + height)
  shape.quadraticCurveTo(x, y + height, x, y + height - radius)
  shape.lineTo(x, y + radius)
  shape.quadraticCurveTo(x, y, x + radius, y)

  return shape
}

function StickerCard({ phase }) {
  const rigRef = useRef()
  const cardRef = useRef()
  const peelRef = useRef()
  const shineRef = useRef()
  const pointerLightRef = useRef()
  const clusterRef = useRef()
  const floatingRef = useRef()

  const shape = useMemo(() => roundedStickerShape(), [])
  const floatingTextures = useTexture([
    '/assets/stickers/smiley.png',
    '/assets/stickers/heart.png',
    '/assets/stickers/ghost.png',
    '/assets/stickers/Adobe Express - file - 2025-02-03T053850.243.png',
  ])
  floatingTextures.forEach((texture) => {
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 4
  })
  const extrudeConfig = useMemo(
    () => ({
      depth: 0.14,
      bevelEnabled: true,
      bevelThickness: 0.025,
      bevelSize: 0.018,
      bevelSegments: 4,
      curveSegments: 20,
    }),
    [],
  )

  useFrame((state, delta) => {
    if (!rigRef.current || !cardRef.current || !peelRef.current || !shineRef.current || !pointerLightRef.current || !clusterRef.current || !floatingRef.current) {
      return
    }

    const t = state.clock.elapsedTime
    const interactive = phase >= 3
    const contextual = phase >= 4

    const pointerX = interactive ? state.pointer.x : 0
    const pointerY = interactive ? state.pointer.y : 0
    const targetX = contextual ? -0.82 : 0
    const targetY = contextual ? 0.18 : 0.03
    const targetZ = contextual ? -0.18 : 0
    const targetRz = contextual ? -0.32 : 0
    const targetScale = phase >= 1 ? (contextual ? 0.95 : 1) : 0.86

    rigRef.current.position.x = THREE.MathUtils.damp(rigRef.current.position.x, targetX, 5, delta)
    rigRef.current.position.y = THREE.MathUtils.damp(rigRef.current.position.y, targetY, 5, delta)
    rigRef.current.position.z = THREE.MathUtils.damp(rigRef.current.position.z, targetZ, 5, delta)
    rigRef.current.rotation.x = THREE.MathUtils.damp(rigRef.current.rotation.x, pointerY * 0.18, 6, delta)
    rigRef.current.rotation.y = THREE.MathUtils.damp(rigRef.current.rotation.y, pointerX * 0.22, 6, delta)
    rigRef.current.rotation.z = THREE.MathUtils.damp(rigRef.current.rotation.z, targetRz + Math.sin(t * 0.5) * 0.02, 6, delta)
    rigRef.current.scale.x = THREE.MathUtils.damp(rigRef.current.scale.x, targetScale, 6, delta)
    rigRef.current.scale.y = THREE.MathUtils.damp(rigRef.current.scale.y, targetScale, 6, delta)
    rigRef.current.scale.z = THREE.MathUtils.damp(rigRef.current.scale.z, targetScale, 6, delta)

    const depthScale = phase >= 2 ? 1 : 0.04
    cardRef.current.scale.z = THREE.MathUtils.damp(cardRef.current.scale.z, depthScale, 7, delta)
    cardRef.current.material.opacity = THREE.MathUtils.damp(cardRef.current.material.opacity, phase >= 1 ? 1 : 0.02, 7, delta)

    peelRef.current.rotation.x = -0.2 - Math.sin(t * 1.8) * 0.08
    peelRef.current.rotation.z = Math.sin(t * 1.8) * 0.06
    peelRef.current.position.z = 0.11 + Math.sin(t * 1.8) * 0.01
    peelRef.current.visible = phase >= 2

    shineRef.current.material.opacity = phase >= 3 ? 0.18 : 0
    shineRef.current.position.x = Math.sin(t * 1.1) * 0.42 + pointerX * 0.14
    shineRef.current.rotation.z = Math.sin(t * 0.6) * 0.12 + 0.2

    pointerLightRef.current.position.x = pointerX * 1.6
    pointerLightRef.current.position.y = 0.5 + pointerY * 1.2

    clusterRef.current.position.x = THREE.MathUtils.damp(clusterRef.current.position.x, contextual ? 0.58 : 1.5, 4.5, delta)
    clusterRef.current.position.y = THREE.MathUtils.damp(clusterRef.current.position.y, contextual ? -0.28 : -1, 4.5, delta)
    clusterRef.current.rotation.z = THREE.MathUtils.damp(clusterRef.current.rotation.z, contextual ? 0 : 0.22, 4.5, delta)

    floatingRef.current.children.forEach((child, index) => {
      const offset = index * 0.8
      child.position.y = child.userData.baseY + Math.sin(t * 0.9 + offset) * 0.035
      child.rotation.z = Math.sin(t * 0.7 + offset) * 0.12
    })
  })

  return (
    <>
      <group ref={rigRef} position={[0, 0.03, 0]} scale={0.86}>
        <mesh ref={cardRef} castShadow receiveShadow>
          <extrudeGeometry args={[shape, extrudeConfig]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.16}
            metalness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.12}
            reflectivity={0.7}
            opacity={0.02}
            transparent
          />
        </mesh>
        <mesh position={[0, 0, 0.078]}>
          <shapeGeometry args={[shape]} />
          <meshStandardMaterial color="#f8f3ff" roughness={0.5} metalness={0.04} />
        </mesh>
        <mesh ref={shineRef} position={[0, 0, 0.1]}>
          <planeGeometry args={[0.26, 1.34]} />
          <meshBasicMaterial color="#f4f8ff" transparent opacity={0} blending={THREE.AdditiveBlending} />
        </mesh>
        <mesh ref={peelRef} position={[0.41, 0.52, 0.11]} rotation={[-0.2, 0, 0]}>
          <planeGeometry args={[0.34, 0.28]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.24}
            metalness={0.02}
            clearcoat={1}
            side={THREE.DoubleSide}
            transparent
            opacity={0.94}
          />
        </mesh>
      </group>

      <group ref={clusterRef} position={[1.5, -1, -0.4]}>
        <mesh rotation={[0.08, -0.28, -0.24]}>
          <boxGeometry args={[0.76, 0.96, 0.1]} />
          <meshPhysicalMaterial color="#d8e7ff" roughness={0.18} clearcoat={1} />
        </mesh>
        <mesh position={[0.72, 0.42, 0.15]} rotation={[0.12, -0.12, 0.32]}>
          <boxGeometry args={[0.58, 0.72, 0.08]} />
          <meshPhysicalMaterial color="#ffdff2" roughness={0.2} clearcoat={1} />
        </mesh>
        <mesh position={[0.08, -0.64, 0.12]} rotation={[-0.04, 0.08, 0.1]}>
          <boxGeometry args={[0.6, 0.34, 0.08]} />
          <meshPhysicalMaterial color="#d7ffe8" roughness={0.2} clearcoat={1} />
        </mesh>
        <mesh position={[-0.68, 0.12, 0.18]} rotation={[0.04, -0.1, -0.38]}>
          <boxGeometry args={[0.48, 0.54, 0.07]} />
          <meshPhysicalMaterial color="#ffe7bf" roughness={0.22} clearcoat={1} />
        </mesh>
        <mesh position={[-0.18, 0.8, 0.09]} rotation={[0.08, 0.08, 0.16]}>
          <boxGeometry args={[0.52, 0.26, 0.06]} />
          <meshPhysicalMaterial color="#e2dbff" roughness={0.18} clearcoat={1} />
        </mesh>
      </group>

      <group ref={floatingRef}>
        <mesh position={[-1.18, 0.6, -0.22]} rotation={[0.08, 0.16, -0.24]} userData={{ baseY: 0.6 }}>
          <planeGeometry args={[0.42, 0.42]} />
          <meshStandardMaterial map={floatingTextures[0]} transparent color="#ffffff" />
        </mesh>
        <mesh position={[1.28, 0.7, -0.28]} rotation={[-0.06, -0.18, 0.18]} userData={{ baseY: 0.7 }}>
          <planeGeometry args={[0.44, 0.44]} />
          <meshStandardMaterial map={floatingTextures[1]} transparent color="#ffffff" />
        </mesh>
        <mesh position={[1.18, -0.22, -0.38]} rotation={[0.12, -0.08, -0.1]} userData={{ baseY: -0.22 }}>
          <planeGeometry args={[0.38, 0.38]} />
          <meshStandardMaterial map={floatingTextures[2]} transparent color="#ffffff" />
        </mesh>
        <mesh position={[-1.26, -0.18, -0.34]} rotation={[0.09, 0.1, 0.14]} userData={{ baseY: -0.18 }}>
          <planeGeometry args={[0.4, 0.4]} />
          <meshStandardMaterial map={floatingTextures[3]} transparent color="#ffffff" />
        </mesh>
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.88, -0.2]} receiveShadow>
        <circleGeometry args={[1.38, 48]} />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>

      <pointLight ref={pointerLightRef} position={[0, 0.5, 1.9]} intensity={0.65} color="#9ec5ff" />
    </>
  )
}

function PremiumHeroScene({ phase }) {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[2.2, 2.6, 3]} intensity={1.15} castShadow />
      <pointLight position={[-1.8, -0.4, 1.6]} intensity={0.45} color="#ff8ccc" />
      <StickerCard phase={phase} />
    </>
  )
}

export default PremiumHeroScene
