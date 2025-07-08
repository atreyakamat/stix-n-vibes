import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { OrbitControls, Float, Text, Stars, PerspectiveCamera, useTexture } from '@react-three/drei';
import StickerDrop from './StickerDrop';
import * as THREE from 'three';

// List of all available sticker assets
const stickerPaths = [
  '/assets/stickers/smiley.png',
  '/assets/stickers/ghost.png',
  '/assets/stickers/heart.png',
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
];

// A floating sticker that orbits in a showcase display
function FloatingSticker({ url, orbit = 0, scale = 1, speed = 1, yPos = 0 }) {
  const meshRef = useRef();
  const [error, setError] = useState(false);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (meshRef.current) {
      // Orbit around the center
      meshRef.current.position.x = Math.sin(t + orbit) * 5;
      meshRef.current.position.z = Math.cos(t + orbit) * 5;
      meshRef.current.position.y = yPos + Math.sin(t * 0.5) * 0.5;
      
      // Rotate to face the center with a slight delay
      meshRef.current.rotation.y = -t - orbit + Math.PI;
      
      // Add some gentle wobble
      meshRef.current.rotation.z = Math.sin(t * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.cos(t * 0.3) * 0.1;
    }
  });
  
  const StickerMaterial = () => {
    if (error) {
      return (
        <meshStandardMaterial 
          color="#e92932" 
          transparent
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      );
    }
    
    try {
      const texture = useTexture(url);
      return (
        <meshStandardMaterial 
          map={texture} 
          transparent
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      );
    } catch (err) {
      console.error(`Error loading texture: ${url}`, err);
      setError(true);
      return (
        <meshStandardMaterial 
          color="#e92932" 
          transparent
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      );
    }
  };
  
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={[scale, scale, scale]} position={[0, yPos, 0]}>
        <planeGeometry args={[3, 3]} />
        <Suspense fallback={<meshBasicMaterial color="#888888" transparent opacity={0.5} />}>
          <StickerMaterial />
        </Suspense>
      </mesh>
    </Float>
  );
}

// Feature sticker that rotates in the center of the display
function FeaturedSticker({ url, scale = 1.5 }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(false);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y = t * 0.2;
      
      // Floating motion
      meshRef.current.position.y = 0.5 + Math.sin(t * 0.5) * 0.5;
      
      // Scale effect on hover
      meshRef.current.scale.setScalar(scale * (hovered ? 1.1 : 1));
    }
  });
  
  // Safe material with error handling
  const StickerMaterial = () => {
    if (error) {
      return (
        <meshStandardMaterial 
          color="#e92932"
          transparent 
          side={THREE.DoubleSide}
          emissive={hovered ? new THREE.Color(0xffffff) : new THREE.Color(0x000000)}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      );
    }
    
    try {
      const texture = useTexture(url);
      return (
        <meshStandardMaterial 
          map={texture} 
          transparent 
          side={THREE.DoubleSide}
          emissive={hovered ? new THREE.Color(0xffffff) : new THREE.Color(0x000000)}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      );
    } catch (err) {
      console.error(`Error loading texture: ${url}`, err);
      setError(true);
      return (
        <meshStandardMaterial 
          color="#e92932"
          transparent 
          side={THREE.DoubleSide}
          emissive={hovered ? new THREE.Color(0xffffff) : new THREE.Color(0x000000)}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      );
    }
  };
  
  return (
    <mesh 
      ref={meshRef} 
      position={[0, 0.5, 0]} 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[4, 4]} />
      <Suspense fallback={<meshBasicMaterial color="#888888" transparent opacity={0.5} />}>
        <StickerMaterial />
      </Suspense>
    </mesh>
  );
}

// Orbiting stickers showcase scene
function OrbitalShowcase() {
  // Select a featured sticker at random
  const [featuredSticker, setFeaturedSticker] = useState(stickerPaths[0]);
  
  useEffect(() => {
    // Change featured sticker every 5 seconds
    const interval = setInterval(() => {
      setFeaturedSticker(stickerPaths[Math.floor(Math.random() * stickerPaths.length)]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <group>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      
      {/* Main lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight 
        position={[0, 10, 5]} 
        intensity={0.8} 
        angle={0.3} 
        penumbra={1} 
        castShadow 
      />
      
      {/* Colored accent lights */}
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#5b3da7" />
      <pointLight position={[5, -5, -5]} intensity={0.5} color="#da3f67" />
      
      {/* Featured sticker in center */}
      <FeaturedSticker url={featuredSticker} scale={1.8} />
      
      {/* Orbiting stickers */}
      {stickerPaths.slice(0, 12).map((path, i) => (
        <FloatingSticker 
          key={i}
          url={path} 
          orbit={(i / 12) * Math.PI * 2}
          speed={0.2 + (i % 3) * 0.1}
          scale={0.7 + (i % 3) * 0.2}
          yPos={Math.sin((i / 12) * Math.PI * 4) * 2}
        />
      ))}
      
      {/* Starry background for depth */}
      <Stars 
        radius={50} 
        depth={50} 
        count={500} 
        factor={4} 
        saturation={0.5}
      />
      
      {/* Camera controls */}
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </group>
  );
}

// Showcase toggle between Physics mode and Orbital mode
const StickerShowcase = () => {
  const [showPhysics, setShowPhysics] = useState(false);
  
  return (
    <div className="w-full h-[60vh] md:h-[80vh] bg-black relative">
      {/* Toggle button */}
      <button 
        onClick={() => setShowPhysics(prev => !prev)}
        className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
      >
        {showPhysics ? "Show Gallery" : "Interactive Mode"}
      </button>
      
      <Canvas shadows dpr={[1, 2]}>
        <color attach="background" args={['#050505']} />
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} />
        
        <Suspense fallback={null}>
          {showPhysics ? (
            <Physics gravity={[0, -2, 0]}>
              <StickerDrop count={20} />
            </Physics>
          ) : (
            <OrbitalShowcase />
          )}
        </Suspense>
      </Canvas>
      
      {/* Instruction overlay */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
        {showPhysics ? "Click on stickers to make them bounce" : "Toggle to interactive mode to play with stickers"}
      </div>
    </div>
  );
};

export default StickerShowcase;
