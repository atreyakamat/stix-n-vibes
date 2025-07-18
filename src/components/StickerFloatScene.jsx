import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import './StickerFloat.css';

// Enhanced floating sticker with creative autonomous movement
const FloatingSticker = ({ position, rotation, texturePath, speed, amplitude, scale = 1, layer = 'main' }) => {
  const meshRef = useRef();
  const [texture, setTexture] = useState(null);
  const startPosition = useRef(position);
  const { size } = useThree();
  
  // Creative movement properties
  const movementPattern = useRef({
    orbitalSpeed: 0.1 + Math.random() * 0.4,
    orbitalRadius: 0.3 + Math.random() * 0.7,
    verticalBob: 0.2 + Math.random() * 0.5,
    rotationSpeed: 0.05 + Math.random() * 0.2,
    scale: 0.8 + Math.random() * 0.4,
    phase: Math.random() * Math.PI * 2,
    drift: {
      x: (Math.random() - 0.5) * 0.002,
      y: (Math.random() - 0.5) * 0.001
    }
  });
  
  // Load texture with error handling
  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      texturePath,
      (loadedTexture) => {
        setTexture(loadedTexture);
      },
      undefined,
      (error) => {
        console.warn('Failed to load texture:', texturePath, error);
      }
    );
  }, [texturePath]);
  
  // Calculate aspect ratio and responsive scale
  useEffect(() => {
    if (texture && texture.image && meshRef.current) {
      const width = texture.image.width;
      const height = texture.image.height;
      const aspectRatio = width / height;
      
      // Responsive scale based on screen size
      const isMobile = size.width < 768;
      const responsiveScale = isMobile ? scale * 0.8 : scale;
      
      meshRef.current.scale.set(responsiveScale * aspectRatio, responsiveScale, 1);
    }
  }, [texture, scale, size]);
  
  // Enhanced creative autonomous animation
  useFrame((state) => {
    if (meshRef.current && texture) {
      const time = state.clock.elapsedTime;
      const pattern = movementPattern.current;
      
      // Calculate boundary limits based on camera frustum
      const aspect = size.width / size.height;
      const fov = 55 * (Math.PI / 180);
      const distance = 6;
      const height = 2 * Math.tan(fov / 2) * distance;
      const width = height * aspect;
      
      // Boundary limits with padding
      const boundaryX = (width / 2) - 1.5;
      const boundaryY = (height / 2) - 1.5;
      
      // Layer-specific movement multipliers
      let movementMultiplier = 1;
      switch (layer) {
        case 'main':
          movementMultiplier = 1;
          break;
        case 'inner':
          movementMultiplier = 0.7;
          break;
        case 'floating':
          movementMultiplier = 0.5;
          break;
      }
      
      // Creative autonomous movement patterns
      const orbitalAngle = time * pattern.orbitalSpeed * movementMultiplier + pattern.phase;
      const verticalBob = Math.sin(time * speed * 2 + pattern.phase) * pattern.verticalBob;
      const horizontalSway = Math.cos(time * speed * 1.3 + pattern.phase) * 0.3;
      const depthOscillation = Math.sin(time * speed * 0.8 + pattern.phase) * 0.4;
      
      // Complex orbital movement
      const orbitalX = Math.cos(orbitalAngle) * pattern.orbitalRadius;
      const orbitalY = Math.sin(orbitalAngle * 0.7) * pattern.orbitalRadius * 0.5;
      
      // Drift movement for natural floating
      startPosition.current[0] += pattern.drift.x;
      startPosition.current[1] += pattern.drift.y;
      
      // Calculate final position
      let newX = startPosition.current[0] + orbitalX + horizontalSway;
      let newY = startPosition.current[1] + orbitalY + verticalBob;
      let newZ = startPosition.current[2] + depthOscillation;
      
      // Smooth boundary wrapping with creative repositioning
      if (Math.abs(newX) > boundaryX) {
        newX = newX > 0 ? -boundaryX + 0.5 : boundaryX - 0.5;
        startPosition.current[0] = newX;
        // Change movement pattern on boundary hit for variety
        pattern.orbitalSpeed = 0.1 + Math.random() * 0.4;
        pattern.phase = Math.random() * Math.PI * 2;
      }
      
      if (Math.abs(newY) > boundaryY) {
        newY = newY > 0 ? -boundaryY + 0.5 : boundaryY - 0.5;
        startPosition.current[1] = newY;
        // Change movement pattern on boundary hit for variety
        pattern.verticalBob = 0.2 + Math.random() * 0.5;
        pattern.phase = Math.random() * Math.PI * 2;
      }
      
      meshRef.current.position.set(newX, newY, newZ);
      
      // Creative multi-axis rotation
      meshRef.current.rotation.z = rotation[2] + 
        Math.sin(time * pattern.rotationSpeed * movementMultiplier + pattern.phase) * 0.3;
      meshRef.current.rotation.x = Math.sin(time * speed * 0.4 + pattern.phase) * 0.15;
      meshRef.current.rotation.y = Math.cos(time * speed * 0.6 + pattern.phase) * 0.1;
      
      // Autonomous scale pulsing for liveliness
      if (texture.image) {
        const aspectRatio = texture.image.width / texture.image.height;
        const isMobile = size.width < 768;
        const responsiveScale = isMobile ? scale * 0.8 : scale;
        const pulseFactor = 1 + Math.sin(time * 1.5 + pattern.phase) * 0.1; // Subtle pulsing
        
        meshRef.current.scale.x = responsiveScale * aspectRatio * pattern.scale * pulseFactor;
        meshRef.current.scale.y = responsiveScale * pattern.scale * pulseFactor;
      }
    }
  });

  if (!texture) return null;

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      rotation={rotation}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial 
        map={texture} 
        transparent 
        side={THREE.DoubleSide}
        depthWrite={false}
        toneMapped={false}
        opacity={layer === 'floating' ? 0.8 : 1}
      />
    </mesh>
  );
};

// Enhanced floating particles with creative autonomous movement
const FloatingParticles = () => {
  const { size } = useThree();
  const particleCount = size.width < 768 ? 20 : 35;
  
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6
    ],
    speed: 0.05 + Math.random() * 0.25,
    size: 0.03 + Math.random() * 0.08,
    orbitalRadius: 0.5 + Math.random() * 1.5,
    phase: Math.random() * Math.PI * 2,
    color: [
      '#e92932',
      '#42c4ef',
      '#FCE9F1',
      '#FDF6F3',
      '#ff6b9d',
      '#4ecdc4',
      '#f39c12',
      '#9b59b6',
      '#e74c3c',
      '#1abc9c'
    ][Math.floor(Math.random() * 10)]
  }));

  return (
    <>
      {particles.map((particle) => (
        <FloatingParticle 
          key={particle.id}
          position={particle.position}
          speed={particle.speed}
          size={particle.size}
          orbitalRadius={particle.orbitalRadius}
          phase={particle.phase}
          color={particle.color}
        />
      ))}
    </>
  );
};

// Enhanced individual floating particle with creative movement
const FloatingParticle = ({ position, speed, size, orbitalRadius, phase, color }) => {
  const meshRef = useRef();
  const startPosition = useRef(position);
  const movementPattern = useRef({
    spiralSpeed: 0.02 + Math.random() * 0.08,
    verticalWave: 0.1 + Math.random() * 0.3,
    horizontalWave: 0.1 + Math.random() * 0.2,
    rotationSpeed: 0.5 + Math.random() * 1.5,
    scaleVariation: 0.3 + Math.random() * 0.4,
    drift: {
      x: (Math.random() - 0.5) * 0.001,
      y: (Math.random() - 0.5) * 0.0005,
      z: (Math.random() - 0.5) * 0.001
    }
  });
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const pattern = movementPattern.current;
      
      // Complex spiral and wave movement
      const spiralAngle = time * pattern.spiralSpeed + phase;
      const verticalWave = Math.sin(time * speed + phase) * pattern.verticalWave;
      const horizontalWave = Math.cos(time * speed * 1.3 + phase) * pattern.horizontalWave;
      const depthWave = Math.sin(time * speed * 0.8 + phase) * 0.2;
      
      // Orbital movement with spiral
      const orbitalX = Math.cos(spiralAngle) * orbitalRadius * (0.5 + Math.sin(time * 0.5 + phase) * 0.3);
      const orbitalY = Math.sin(spiralAngle * 0.7) * orbitalRadius * 0.3;
      const orbitalZ = Math.sin(spiralAngle * 0.5) * 0.5;
      
      // Apply drift for natural floating
      startPosition.current[0] += pattern.drift.x;
      startPosition.current[1] += pattern.drift.y;
      startPosition.current[2] += pattern.drift.z;
      
      // Boundary wrapping for particles
      if (Math.abs(startPosition.current[0]) > 6) {
        startPosition.current[0] = startPosition.current[0] > 0 ? -6 : 6;
      }
      if (Math.abs(startPosition.current[1]) > 5) {
        startPosition.current[1] = startPosition.current[1] > 0 ? -5 : 5;
      }
      if (Math.abs(startPosition.current[2]) > 4) {
        startPosition.current[2] = startPosition.current[2] > 0 ? -4 : 4;
      }
      
      // Set final position
      meshRef.current.position.set(
        startPosition.current[0] + orbitalX + horizontalWave,
        startPosition.current[1] + orbitalY + verticalWave,
        startPosition.current[2] + orbitalZ + depthWave
      );
      
      // Creative rotation
      meshRef.current.rotation.x = time * pattern.rotationSpeed;
      meshRef.current.rotation.y = time * pattern.rotationSpeed * 0.7;
      meshRef.current.rotation.z = time * pattern.rotationSpeed * 0.5;
      
      // Dynamic scale variation
      const scaleVariation = 1 + Math.sin(time * 2 + phase) * pattern.scaleVariation;
      meshRef.current.scale.setScalar(scaleVariation);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 6, 6]} />
      <meshBasicMaterial 
        color={color} 
        transparent 
        opacity={0.4 + Math.sin(Date.now() * 0.001 + phase) * 0.2}
      />
    </mesh>
  );
};

// Enhanced scene lighting setup
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight 
        position={[10, 10, 10]} 
        intensity={0.7} 
        castShadow
      />
      <directionalLight 
        position={[-10, -10, -10]} 
        intensity={0.3} 
        color="#42c4ef"
      />
      <pointLight 
        position={[0, 0, 5]} 
        intensity={0.4} 
        color="#FCE9F1"
      />
    </>
  );
};

// Main scene component with responsive sticker sizing
const StickerScene = () => {
  const { size } = useThree();
  
  // All available stickers for maximum variety
  const stickerPaths = [
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
    '/assets/stickers/ghost.png',
    '/assets/stickers/heart.png',
    '/assets/stickers/smiley.png'
  ];

  // Create multiple layers of stickers for a filled look
  const generateFilledPositions = () => {
    const positions = [];
    const isMobile = size.width < 768;
    
    // Layer 1: Main circle (foreground)
    const mainRadius = isMobile ? 2.5 : 3.5;
    const mainCount = Math.min(stickerPaths.length, isMobile ? 12 : 15);
    for (let i = 0; i < mainCount; i++) {
      const angle = (i / mainCount) * Math.PI * 2;
      const radiusVariation = 0.6 + Math.random() * 0.4;
      positions.push({
        x: Math.cos(angle) * mainRadius * radiusVariation,
        y: (Math.random() - 0.5) * (isMobile ? 2 : 3),
        z: -0.5 + Math.random() * 1,
        layer: 'main'
      });
    }
    
    // Layer 2: Inner circle (background)
    const innerRadius = isMobile ? 1.5 : 2;
    const innerCount = Math.min(stickerPaths.length - mainCount, isMobile ? 8 : 10);
    for (let i = 0; i < innerCount; i++) {
      const angle = (i / innerCount) * Math.PI * 2 + Math.PI / 4; // Offset angle
      const radiusVariation = 0.4 + Math.random() * 0.6;
      positions.push({
        x: Math.cos(angle) * innerRadius * radiusVariation,
        y: (Math.random() - 0.5) * (isMobile ? 1.5 : 2),
        z: -1 + Math.random() * 0.5,
        layer: 'inner'
      });
    }
    
    // Layer 3: Floating background stickers
    const floatingCount = Math.min(stickerPaths.length - mainCount - innerCount, isMobile ? 6 : 8);
    for (let i = 0; i < floatingCount; i++) {
      positions.push({
        x: (Math.random() - 0.5) * (isMobile ? 4 : 6),
        y: (Math.random() - 0.5) * (isMobile ? 3 : 4),
        z: -2 + Math.random() * 1,
        layer: 'floating'
      });
    }
    
    return positions;
  };

  const positions = generateFilledPositions();

  // Generate stickers with varied sizes based on layers
  const stickers = stickerPaths.slice(0, positions.length).map((path, index) => {
    const position = positions[index];
    const isMobile = size.width < 768;
    
    // Different scales for different layers
    let baseScale;
    switch (position.layer) {
      case 'main':
        baseScale = isMobile ? 1.8 : 2.5; // Largest stickers in front
        break;
      case 'inner':
        baseScale = isMobile ? 1.4 : 1.8; // Medium stickers
        break;
      case 'floating':
        baseScale = isMobile ? 1.0 : 1.3; // Smaller background stickers
        break;
      default:
        baseScale = isMobile ? 1.5 : 2.0;
    }
    
    return {
      id: index + 1,
      position: [position.x, position.y, position.z],
      rotation: [0, 0, (Math.random() - 0.5) * Math.PI * 0.3],
      texturePath: path,
      speed: 0.1 + Math.random() * 0.4,
      amplitude: 0.15 + Math.random() * 0.25,
      scale: baseScale + Math.random() * 0.6,
      layer: position.layer
    };
  });

  return (
    <>
      <color attach="background" args={['#FDF6F3']} />
      <Lights />
      
      {/* Add some subtle particles for extra fun */}
      <FloatingParticles />
      
      <MouseParallax>
        {stickers.map((sticker) => (
          <FloatingSticker 
            key={sticker.id}
            position={sticker.position}
            rotation={sticker.rotation}
            texturePath={sticker.texturePath}
            speed={sticker.speed}
            amplitude={sticker.amplitude}
            scale={sticker.scale}
            layer={sticker.layer}
          />
        ))}
      </MouseParallax>
      
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={55} />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
};

// Responsive parallax effect based on mouse position
const MouseParallax = ({ children }) => {
  const { camera, size } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const initialCameraPosition = useRef([0, 0, 6]);
  
  useEffect(() => {
    initialCameraPosition.current = camera.position.toArray();
    
    const handleMouseMove = (event) => {
      mouse.current = { 
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };
    
    // Add both mouse and touch support
    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        mouse.current = { 
          x: (touch.clientX / window.innerWidth) * 2 - 1,
          y: -(touch.clientY / window.innerHeight) * 2 + 1
        };
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [camera]);
  
  useFrame(() => {
    const isMobile = size.width < 768;
    const parallaxStrength = isMobile ? 0.2 : 0.3;
    
    camera.position.x = initialCameraPosition.current[0] + mouse.current.x * parallaxStrength;
    camera.position.y = initialCameraPosition.current[1] + mouse.current.y * parallaxStrength;
    camera.lookAt(0, 0, 0);
  });
  
  return <>{children}</>;
};

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Three.js error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="sticker-float-container">
          <div className="sticker-loading">
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              height: '100%',
              color: '#666'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
              <p>3D Scene Loading...</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                If this persists, please try refreshing the page
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Wrapper component with responsive optimizations
const StickerFloatScene = () => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="sticker-float-container">
        {loading && (
          <div className="sticker-loading">
            <div className="loader"></div>
            <p style={{ marginTop: '1rem', color: '#666' }}>Loading 3D Scene...</p>
          </div>
        )}
        
        <Canvas 
          shadows={false}
          gl={{ 
            antialias: !isMobile, // Disable antialiasing on mobile for better performance
            alpha: false,
            powerPreference: "high-performance",
            stencil: false,
            depth: true
          }}
          camera={{ position: [0, 0, 6], fov: 50 }}
          style={{ background: '#FDF6F3' }}
          dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)} // Limit DPR on mobile
        >
          <Suspense fallback={null}>
            <StickerScene />
          </Suspense>
        </Canvas>
      </div>
    </ErrorBoundary>
  );
};

export default StickerFloatScene;
