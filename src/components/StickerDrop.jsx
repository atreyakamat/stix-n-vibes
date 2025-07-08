// components/StickerDrop.jsx
import React, { useRef, useEffect, useState, Suspense } from 'react';
import { usePlane, useBox } from '@react-three/cannon';
import { useTexture, Float, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Create a comprehensive list of all available sticker paths
const availableStickerPaths = [
  '/assets/stickers/Adobe Express - file - 2025-02-03T053558.505.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053620.350.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053656.087.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053756.124.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053815.779.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053819.449.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053830.710.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053832.899.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053848.102.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053850.243.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053900.986.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053905.328.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053916.536.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053928.422.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053932.177.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053936.483.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053942.493.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053947.426.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053953.439.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T053959.914.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054005.085.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054010.452.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054016.297.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054021.252.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054026.004.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054030.454.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054037.264.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054051.519.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054055.926.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054059.980.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054111.755.png',
  '/assets/stickers/Adobe Express - file - 2025-02-03T054133.303.png',
];

export function Ground(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -5, 0],
    ...props
  }));
  
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial color="#171717" transparent opacity={0.2} />
    </mesh>
  );
}

// Interactive sticker with physics and enhanced visual effects
export function Sticker({ url, position, rotation, scale = 1, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(false);
  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    rotation,
    args: [scale * 3, scale * 3, 0.1],
  }));
  
  // Sticker glow effect on hover
  const glowRef = useRef();
  
  // Handle hover and click interactions
  const handlePointerOver = () => setHovered(true);
  const handlePointerOut = () => setHovered(false);
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) onClick();
    
    // Track click state for animation
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
    
    // Apply a fun impulse when clicked
    api.applyImpulse(
      [0, 5 + Math.random() * 5, -2 + Math.random() * 4], 
      [0, 0, 0]
    );
    api.applyTorque([
      Math.random() * 1 - 0.5,
      Math.random() * 1 - 0.5,
      Math.random() * 1 - 0.5
    ]);
  };
  
  // Animate sticker - subtle floating and rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const hoverEffect = hovered ? 0.2 : 0;
    api.applyForce([0, Math.sin(t) * 0.05, 0], [0, 0, 0]);
    
    if (ref.current) {
      if (ref.current.material && ref.current.material.emissive) {
        ref.current.material.emissive = new THREE.Color(
          hovered ? 0x333333 : 0x000000
        );
        
        // Pulse effect when clicked
        if (clicked) {
          ref.current.material.emissiveIntensity = 1 - (Date.now() % 300) / 300;
        } else {
          ref.current.material.emissiveIntensity = hovered ? 0.5 : 0;
        }
      }
      
      // Update the glow effect position
      if (glowRef.current) {
        glowRef.current.position.copy(ref.current.position);
      }
    }
  });
  
  // Safe texture loading
  const SafeTexture = () => {
    if (error) {
      return (
        <meshStandardMaterial 
          color="#e92932"
          transparent 
          roughness={0.4}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      );
    }
    
    try {
      const texture = useTexture(url);
      return (
        <meshStandardMaterial 
          map={texture} 
          transparent 
          roughness={0.4}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      );
    } catch (err) {
      console.error(`Error loading texture: ${url}`, err);
      setError(true);
      return (
        <meshStandardMaterial 
          color="#e92932"
          transparent 
          roughness={0.4}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      );
    }
  };

  return (
    <>
      {/* Glow effect for hovering */}
      {hovered && (
        <mesh 
          ref={glowRef}
          position={position}
          scale={[scale * 3.2, scale * 3.2, 0.1]}
        >
          <planeGeometry />
          <meshBasicMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.2} 
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
      
      {/* Main sticker mesh */}
      <mesh 
        ref={ref}
        castShadow 
        receiveShadow
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={handleClick}
      >
        <boxGeometry args={[scale * 3, scale * 3, 0.1]} />
        <Suspense fallback={<meshBasicMaterial color="#888888" transparent opacity={0.5} />}>
          <SafeTexture />
        </Suspense>
      </mesh>
    </>
  );
}

// Interactive sticker gallery component
const StickerDrop = ({ count = 15 }) => {
  const { camera } = useThree();
  const [stickers, setStickers] = useState([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Create a random sticker configuration
  const createRandomStickers = () => {
    const stickers = [];
    
    // Create a diverse arrangement of stickers in 3D space
    for (let i = 0; i < count; i++) {
      const randomStickerPath = availableStickerPaths[Math.floor(Math.random() * availableStickerPaths.length)];
      
      // Position stickers in a more interesting pattern - some close, some far
      const distance = 5 + Math.random() * 15;
      const angle = (i / count) * Math.PI * 2;
      
      stickers.push({
        id: i,
        url: randomStickerPath,
        position: [
          Math.cos(angle) * distance * Math.random(),
          Math.random() * 15,
          Math.sin(angle) * distance
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: 0.7 + Math.random() * 0.8  // Larger stickers for better visibility
      });
    }
    
    return stickers;
  };
  
  // Initialize with random stickers
  useEffect(() => {
    setStickers(createRandomStickers());
    
    // Add a click handler to the whole canvas for interaction
    const handleCanvasClick = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };
    
    document.addEventListener('click', handleCanvasClick);
    return () => document.removeEventListener('click', handleCanvasClick);
  }, [count, hasInteracted]);
  
  // Drop new sticker function that can be triggered externally
  const dropNewSticker = () => {
    const cameraPosition = camera.position;
    const cameraDirection = new THREE.Vector3(0, 0, -1);
    cameraDirection.applyQuaternion(camera.quaternion);
    
    // Calculate position in front of camera
    const spawnDistance = 10;
    const spawnPosition = new THREE.Vector3().copy(cameraPosition)
      .add(cameraDirection.multiplyScalar(spawnDistance));
    
    const newSticker = {
      id: stickers.length,
      url: availableStickerPaths[Math.floor(Math.random() * availableStickerPaths.length)],
      position: [spawnPosition.x, spawnPosition.y, spawnPosition.z],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ],
      scale: 1 + Math.random() * 1.2  // Larger stickers
    };
    
    setStickers(prev => [...prev, newSticker]);
  };

  return (
    <>
      {/* Enhanced lighting for better visual appeal */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} castShadow />
      <spotLight 
        position={[0, 15, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={1} 
        castShadow 
      />
      <pointLight position={[-10, 5, -10]} intensity={0.5} color="#5b3da7" />
      
      <Ground />
      
      {/* Instructional text if no interaction yet */}
      {!hasInteracted && (
        <Float position={[0, 0, -5]} speed={2}>
          <Text
            color="white"
            fontSize={0.5}
            maxWidth={10}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign="center"
          >
            Click on stickers to make them bounce
          </Text>
        </Float>
      )}
      
      {/* Interactive stickers with physics */}
      {stickers.map((sticker) => (
        <Sticker
          key={sticker.id}
          url={sticker.url}
          position={sticker.position}
          rotation={sticker.rotation}
          scale={sticker.scale}
          onClick={dropNewSticker}
        />
      ))}
    </>
  );
};

export default StickerDrop;
