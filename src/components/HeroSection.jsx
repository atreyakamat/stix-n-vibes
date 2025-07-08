import React, { useRef, useEffect, useState, useMemo, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import { OrbitControls, PerspectiveCamera, useTexture, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

// Define all sticker paths using the existing assets from the public folder
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

// Floor component for physics
function Floor(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0, -10, 0], ...props }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  );
}

// Sphere sticker cloud - surrounds the user with floating stickers
function StickerCloud() {
  const { camera } = useThree();
  const stickerRefs = useRef([]);
  const [stickers, setStickers] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  const radius = 30;
  
  // Initialize stickers in a sphere around the camera
  useEffect(() => {
    const tempStickers = [];
    // Generate stickers to surround the user in a sphere
    for (let i = 0; i < 40; i++) {
      // Generate points on a sphere using spherical coordinates
      const phi = Math.acos(-1 + (2 * i) / 40);
      const theta = Math.sqrt(40 * Math.PI) * phi;
      
      // Convert to Cartesian coordinates
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      // Use modulo to make sure we don't try to access stickers beyond our array length
      const urlIndex = i % stickerPaths.length;
      
      tempStickers.push({
        id: i,
        url: stickerPaths[urlIndex],
        position: [x, y, z],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: 1.5 + Math.random() * 1.5, // Larger stickers
        speed: 0.2 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
      });
    }
    setStickers(tempStickers);
  }, []);
  
  // Animate stickers
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    stickerRefs.current.forEach((mesh, i) => {
      if (mesh && stickers[i]) {
        const { speed, offset } = stickers[i];
        
        // Gentle floating movement
        mesh.position.y += Math.sin(t * speed + offset) * 0.01;
        mesh.position.x += Math.cos(t * speed + offset) * 0.005;
        mesh.position.z += Math.sin(t * speed + offset + Math.PI/2) * 0.005;
        
        // Gentle rotation
        mesh.rotation.x = Math.sin(t * 0.2 + offset) * 0.1;
        mesh.rotation.y += 0.002;
        mesh.rotation.z = Math.cos(t * 0.2 + offset) * 0.1;
        
        // Always look at the camera with a slight offset for 3D effect
        mesh.lookAt(camera.position.x, camera.position.y, camera.position.z);
      }
    });
  });
  
  const TexturedPlane = ({ sticker, index }) => {
    const [error, setError] = useState(false);
    
    // Fallback to basic material if texture fails to load
    if (error) {
      return (
        <mesh
          ref={(el) => (stickerRefs.current[index] = el)}
          position={sticker.position}
          rotation={sticker.rotation}
          castShadow
        >
          <planeGeometry args={[sticker.scale, sticker.scale]} />
          <meshBasicMaterial color="#e92932" transparent opacity={0.8} side={THREE.DoubleSide} />
        </mesh>
      );
    }
    
    return (
      <mesh
        ref={(el) => (stickerRefs.current[index] = el)}
        position={sticker.position}
        rotation={sticker.rotation}
        castShadow
      >
        <planeGeometry args={[sticker.scale, sticker.scale]} />
        <Suspense fallback={<meshBasicMaterial color="#ffffff" transparent opacity={0.5} />}>
          <TexturedMaterial url={sticker.url} onError={() => setError(true)} />
        </Suspense>
      </mesh>
    );
  };
  
  // Separate material component with error handling
  const TexturedMaterial = ({ url, onError }) => {
    let texture;
    
    try {
      texture = useTexture(url);
    } catch (err) {
      console.error(`Error loading texture: ${url}`, err);
      onError();
      return <meshBasicMaterial color="#ff0000" opacity={0.7} transparent />;
    }
    
    return (
      <meshStandardMaterial 
        map={texture} 
        transparent 
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    );
  };
  
  return (
    <>
      {stickers.map((sticker, index) => {
        stickerRefs.current[index] = stickerRefs.current[index] || React.createRef();
        
        return (
          <Float key={sticker.id} speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <TexturedPlane sticker={sticker} index={index} />
          </Float>
        );
      })}
    </>
  );
}

// Interactive sticker component with physics
function InteractiveSticker({ position, url, rotation, scale = 1, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [error, setError] = useState(false);
  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    rotation,
    args: [scale * 3, scale * 3, 0.2],
  }));

  const randomForce = useRef(Math.random() * 5 + 2);
  const windDirection = useRef([Math.random() * 2 - 1, 0, Math.random() * 2 - 1]);
  
  useEffect(() => {
    // Apply a small random force occasionally to make stickers move
    const interval = setInterval(() => {
      api.applyForce(
        [Math.random() * 10 - 5, Math.random() * 5, Math.random() * 10 - 5], 
        [0, 0, 0]
      );
      api.applyTorque([Math.random(), Math.random(), Math.random()]);
      
      // Randomly update wind direction
      windDirection.current = [Math.random() * 2 - 1, Math.random() * 0.5, Math.random() * 2 - 1];
    }, 3000 + Math.random() * 2000);
    
    return () => clearInterval(interval);
  }, [api]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Continuous gentle forces to simulate air resistance and wind
    api.applyForce(
      [
        windDirection.current[0] * (Math.sin(t * 0.5) * 0.3 + 0.2),
        windDirection.current[1] * 0.1 + Math.sin(t * 0.3) * 0.4,
        windDirection.current[2] * (Math.cos(t * 0.4) * 0.3 + 0.2)
      ], 
      [0, 0, 0]
    );
    
    // Occasional random impulses
    if (Math.random() < 0.005) {
      api.applyImpulse(
        [Math.random() * 2 - 1, Math.random() * 3 + 1, Math.random() * 2 - 1],
        [0, 0, 0]
      );
    }
  });

  // Handle interactions
  const handleClick = (e) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
    // Add an impulse on click
    api.applyImpulse(
      [Math.random() * 6 - 3, 6 + Math.random() * 6, Math.random() * 6 - 3], 
      [0, 0, 0]
    );
  };
  
  // Loading texture with error handling
  const StickMaterial = () => {
    if (error) {
      return (
        <meshStandardMaterial
          color="#e92932"
          transparent
          opacity={0.8}
          emissive={hovered ? new THREE.Color(0x333333) : new THREE.Color(0x000000)}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      );
    }
    
    return (
      <Suspense fallback={<meshBasicMaterial color="#ffffff" opacity={0.5} transparent />}>
        <TexturedMaterial 
          url={url} 
          onError={() => setError(true)} 
          hovered={hovered}
        />
      </Suspense>
    );
  };

  return (
    <mesh 
      ref={ref} 
      castShadow 
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    >
      <boxGeometry args={[scale * 3, scale * 3, 0.2]} />
      <StickMaterial />
    </mesh>
  );
}

// Separate material component with error handling
function TexturedMaterial({ url, onError, hovered }) {
  let texture;
  
  try {
    texture = useTexture(url);
  } catch (err) {
    console.error(`Error loading texture: ${url}`, err);
    onError();
    return <meshBasicMaterial color="#e92932" opacity={0.7} transparent />;
  }
  
  return (
    <meshStandardMaterial 
      map={texture} 
      transparent 
      emissive={hovered ? new THREE.Color(0x333333) : new THREE.Color(0x000000)}
      emissiveIntensity={hovered ? 0.5 : 0}
    />
  );
}

// Generate new sticker at a random position
const createNewSticker = (existingStickers, setStickers) => {
  const newSticker = {
    id: Date.now(),
    url: stickerPaths[Math.floor(Math.random() * stickerPaths.length)],
    position: [
      Math.random() * 20 - 10,
      15 + Math.random() * 5,
      Math.random() * 10 - 5
    ],
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    ],
    scale: 0.8 + Math.random() * 0.8
  };
  
  setStickers([...existingStickers, newSticker]);
};

// Main Hero Section component
const HeroSection = ({ onLoaded }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [physicsStickers, setPhysicsStickers] = useState([]);
  
  // Generate initial physics stickers
  useEffect(() => {
    setIsMounted(true);
    const initialStickers = [];
    
    // Create a more reliable way to detect when resources are loaded
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      // Notify parent component that the Three.js scene is ready
      if (onLoaded && typeof onLoaded === 'function') {
        onLoaded();
      }
    };
    
    // Load test texture to ensure the loading manager works
    new TextureLoader(loadingManager).load(stickerPaths[0], () => {
      console.log("Sample texture loaded successfully");
    });
    
    // Create initial stickers
    for (let i = 0; i < 15; i++) {
      initialStickers.push({
        id: i,
        url: stickerPaths[i % stickerPaths.length],
        position: [
          Math.random() * 20 - 10,
          Math.random() * 10 + 5,
          Math.random() * 10 - 5
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ],
        scale: 0.7 + Math.random() * 0.5
      });
    }
    
    setPhysicsStickers(initialStickers);
    
    // Set up automatic sticker generation
    const autoGenerateInterval = setInterval(() => {
      createNewSticker(physicsStickers, setPhysicsStickers);
    }, 2000);
    
    return () => {
      setIsMounted(false);
      clearInterval(autoGenerateInterval);
    };
  }, []);

  // Automatically add more stickers as existing ones are available
  useEffect(() => {
    // Create a gentle wind effect that changes direction periodically
    const windInterval = setInterval(() => {
      if (physicsStickers.length > 50) {
        // Start removing old stickers when we have too many (for performance)
        setPhysicsStickers(current => current.slice(10));
      } else {
        createNewSticker(physicsStickers, setPhysicsStickers);
      }
    }, 3000);
    
    return () => clearInterval(windInterval);
  }, [physicsStickers]);

  // Handle click on canvas - drop a new sticker
  const handleCanvasClick = (event) => {
    // Only add sticker if clicked on the canvas background
    if (event.target === event.currentTarget) {
      createNewSticker(physicsStickers, setPhysicsStickers);
    }
  };

  return (
    <div className="hero-section relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* 3D Canvas for Three.js content */}
      <div 
        className="absolute inset-0 z-0" 
        onClick={handleCanvasClick}
      >
        {isMounted && (
          <Canvas shadows dpr={[1, 2]} gl={{ alpha: true }}>
            <PerspectiveCamera makeDefault position={[0, 5, 20]} fov={50} />
            <color attach="background" args={['#000000']} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} castShadow />
            <spotLight 
              position={[0, 25, 0]} 
              angle={0.3} 
              penumbra={1} 
              intensity={1} 
              castShadow 
              shadow-mapSize={[2048, 2048]} 
            />
            
            {/* Surrounding sticker cloud */}
            <StickerCloud />
            
            <Physics gravity={[0, -1.5, 0]}>
              <Floor />
              
              {/* Physics-enabled interactive stickers */}
              {physicsStickers.map((sticker) => (
                <InteractiveSticker
                  key={sticker.id}
                  url={sticker.url}
                  position={sticker.position}
                  rotation={sticker.rotation}
                  scale={sticker.scale}
                  onClick={() => createNewSticker(physicsStickers, setPhysicsStickers)}
                />
              ))}
            </Physics>
            
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={-Math.PI / 4}
              maxAzimuthAngle={Math.PI / 4}
              rotateSpeed={0.5}
            />
            
            {/* Floating instructions */}
            <Html center position={[0, -5, 0]} className="pointer-events-none">
              <div className="text-white text-sm opacity-70 px-4 py-2 rounded-full bg-black bg-opacity-50">
                Stickers automatically fall and float! Click to add more or click on stickers to make them bounce
              </div>
            </Html>
          </Canvas>
        )}
      </div>
      
      {/* Overlay content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">STIX N VIBES</h1>
          <p className="text-gray-300 text-sm">EST. 2018</p>
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Express Your Vibe
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Custom stickers and polaroids that tell your story
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <a 
            href="/projects" 
            className="bg-[#e92932] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-[#d61f27] transition duration-300"
          >
            Explore Collection
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
