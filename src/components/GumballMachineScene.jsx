import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { OrbitControls, useTexture, PerspectiveCamera } from '@react-three/drei';
import StickerBall from './StickerBall';
import Dispenser from './Dispenser';
import SurpriseReveal from './SurpriseReveal';
import { ensureThreeJsCompatibility, preventContextLoss } from './ThreeJsHelper';
import './GumballMachine.css';

// Initialize Three.js compatibility
ensureThreeJsCompatibility();

// The transparent glass dome component
const GlassDome = () => {
  const glassMaterial = {
    roughness: 0.1,
    metalness: 0.1,
    transmission: 0.95, // Make the glass transparent
    thickness: 0.5,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  };

  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshPhysicalMaterial {...glassMaterial} color="#ffffff" transparent opacity={0.5} />
    </mesh>
  );
};

// The base of the gumball machine
const MachinePedestal = () => {
  return (
    <group>
      <mesh position={[0, -1.2, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 1.2, 1, 32]} />
        <meshStandardMaterial color="#FCE9F1" />
      </mesh>
      <mesh position={[0, -0.55, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.15, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
};

// The walls to keep stickers inside the dome
const InvisibleWalls = () => {
  return (
    <>
      <mesh position={[0, -0.6, 0]} rotation={[0, 0, 0]} visible={false}>
        <boxGeometry args={[4, 0.1, 4]} />
        <meshStandardMaterial color="red" transparent opacity={0.0} />
      </mesh>
      <mesh position={[0, 2, 0]} rotation={[0, 0, 0]} visible={false}>
        <boxGeometry args={[4, 0.1, 4]} />
        <meshStandardMaterial color="red" transparent opacity={0.0} />
      </mesh>
      <mesh position={[2.2, 0, 0]} rotation={[0, 0, 0]} visible={false}>
        <boxGeometry args={[0.1, 4, 4]} />
        <meshStandardMaterial color="red" transparent opacity={0.0} />
      </mesh>
      <mesh position={[-2.2, 0, 0]} rotation={[0, 0, 0]} visible={false}>
        <boxGeometry args={[0.1, 4, 4]} />
        <meshStandardMaterial color="red" transparent opacity={0.0} />
      </mesh>
      <mesh position={[0, 0, 2.2]} rotation={[0, 0, 0]} visible={false}>
        <boxGeometry args={[4, 4, 0.1]} />
        <meshStandardMaterial color="red" transparent opacity={0.0} />
      </mesh>
      <mesh position={[0, 0, -2.2]} rotation={[0, 0, 0]} visible={false}>
        <boxGeometry args={[4, 4, 0.1]} />
        <meshStandardMaterial color="red" transparent opacity={0.0} />
      </mesh>
    </>
  );
};

const WebGLFixer = () => {
  const { gl } = useThree();
  
  useEffect(() => {
    try {
      preventContextLoss(gl);
    } catch (e) {
      console.error("WebGL fixer error:", e);
    }
  }, [gl]);
  
  return null;
};

const Scene = ({ onStickerDispensed }) => {
  const groupRef = useRef();
  const [stickers, setStickers] = useState([]);
  const [isShaking, setIsShaking] = useState(false);
  const [isDispensing, setIsDispensing] = useState(false);
  const [dispensedSticker, setDispensedSticker] = useState(null);
  const [count, setCount] = useState(0);
  const MAX_STICKERS = 8;

  // Sticker image paths
  const stickerPaths = [
    '/assets/stickers/Adobe Express - file - 2025-02-03T053558.505.png',
    '/assets/stickers/Adobe Express - file - 2025-02-03T053620.350.png',
    '/assets/stickers/Adobe Express - file - 2025-02-03T053656.087.png',
    '/assets/stickers/Adobe Express - file - 2025-02-03T053756.124.png',
    '/assets/stickers/Adobe Express - file - 2025-02-03T053815.779.png',
    '/assets/stickers/Adobe Express - file - 2025-02-03T053819.449.png',
    '/assets/stickers/Adobe Express - file - 2025-02-03T053830.710.png',
    '/assets/stickers/Adobe Express - file - 2025-02-03T053832.899.png',
  ];

  // Add stickers periodically
  useEffect(() => {
    if (count < MAX_STICKERS && !isShaking && !isDispensing) {
      const timer = setTimeout(() => {
        addSticker();
      }, 800);
      return () => clearTimeout(timer);
    } else if (count >= MAX_STICKERS && !isShaking && !isDispensing) {
      const timer = setTimeout(() => {
        setIsShaking(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count, isShaking, isDispensing]);

  // Handle shaking animation
  useEffect(() => {
    if (isShaking) {
      const timer = setTimeout(() => {
        setIsShaking(false);
        setIsDispensing(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isShaking]);

  // Handle dispensing
  useEffect(() => {
    if (isDispensing) {
      // Select a random sticker to dispense
      const selectedStickerIndex = Math.floor(Math.random() * stickerPaths.length);
      const selectedSticker = stickerPaths[selectedStickerIndex];
      
      const timer = setTimeout(() => {
        setDispensedSticker(selectedSticker);
        if (onStickerDispensed) {
          onStickerDispensed(selectedSticker);
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isDispensing, onStickerDispensed]);

  const addSticker = () => {
    const randomStickerPath = stickerPaths[Math.floor(Math.random() * stickerPaths.length)];
    // Generate random position within the glass dome
    const x = (Math.random() - 0.5) * 1;
    const y = 1.5 + Math.random() * 0.5;
    const z = (Math.random() - 0.5) * 1;
    
    setStickers((prev) => [
      ...prev,
      {
        id: Date.now(),
        position: [x, y, z],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        texturePath: randomStickerPath
      }
    ]);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <WebGLFixer />
      <color attach="background" args={['#FFF8F4']} />
      <fog attach="fog" args={['#FFF8F4', 15, 25]} />
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <spotLight 
        position={[0, 8, 0]} 
        intensity={0.7} 
        angle={0.4} 
        penumbra={0.5} 
        castShadow 
        shadow-mapSize={[1024, 1024]}
      />
      
      <group 
        ref={groupRef} 
        position={[0, -0.5, 0]}
        rotation={[0.1, Math.PI * 0.05, 0]}
        scale={[0.95, 0.95, 0.95]}
        className={isShaking ? 'shake-animation' : ''}
        style={{
          animation: isShaking ? 'shake 0.5s infinite' : 'none',
        }}
      >
        <Physics gravity={[0, -10, 0]}>
          <GlassDome />
          <MachinePedestal />
          <InvisibleWalls />
          
          {/* Sticker balls */}
          {stickers.map((sticker) => (
            <StickerBall
              key={sticker.id}
              position={sticker.position}
              rotation={sticker.rotation}
              texturePath={sticker.texturePath}
            />
          ))}
          
          {/* Dispenser component */}
          <Dispenser 
            position={[0, -1.5, 0]} 
            isDispensing={isDispensing} 
          />
        </Physics>
      </group>

      {/* Camera controls */}
      <PerspectiveCamera 
        makeDefault 
        position={[0, 0, 6]} 
        fov={40}
        near={0.1}
        far={100}
      />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        rotateSpeed={0.3}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.2}
        minAzimuthAngle={-Math.PI / 6}
        maxAzimuthAngle={Math.PI / 6}
        autoRotate={true}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const GumballMachineScene = ({ onStickerDispensed }) => {
  const [showSurprise, setShowSurprise] = useState(false);
  const [selectedSticker, setSelectedSticker] = useState(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  
  // Set loading to false after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  // Handle canvas resize to ensure proper rendering
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        // Force a rerender on resize
        const event = new Event('resize');
        window.dispatchEvent(event);
      }
    };
    
    window.addEventListener('resize', handleResize);
    // Initial call
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleStickerDispensed = (sticker) => {
    setSelectedSticker(sticker);
    setShowSurprise(true);
    if (onStickerDispensed) {
      onStickerDispensed(sticker);
    }
  };
  
  return (
    <div ref={containerRef} className="relative gumball-container webgl-fix" style={{ height: "600px" }}>
      {loading ? (
        <div className="loading-spinner">
          <div className="w-12 h-12 border-4 border-t-[#e92932] border-r-[#42c4ef] border-b-[#fce9f1] border-l-[#617f89] rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-700 font-medium">Loading your surprise...</p>
        </div>
      ) : null}
      
      <Canvas 
        className="webgl-canvas"
        shadows
        flat
        dpr={[1, 2]} 
        camera={{ position: [0, 0, 6], fov: 50, near: 0.1, far: 1000 }}
        style={{ background: '#FFF8F4', position: 'absolute', top: 0, left: 0 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          preserveDrawingBuffer: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene onStickerDispensed={handleStickerDispensed} />
      </Canvas>
      
      {showSurprise && selectedSticker && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full z-20">
          <SurpriseReveal stickerImage={selectedSticker} />
        </div>
      )}
    </div>
  );
};

export default GumballMachineScene;
