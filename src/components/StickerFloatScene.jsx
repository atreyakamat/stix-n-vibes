import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, useCursor } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import './StickerFloat.css';

// Enhanced floating sticker with hover interaction and boundary checking
const FloatingSticker = ({ position, rotation, texturePath, speed, amplitude, scale = 1, layer = 'main' }) => {
  const meshRef = useRef();
  const [texture, setTexture] = useState(null);
  const startPosition = useRef(position);
  const [hovered, setHovered] = useState(false);
  const { size } = useThree();
  
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
  
  // Change cursor on hover
  useCursor(hovered);
  
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
  
  // Enhanced float animation with boundary checking
  useFrame((state) => {
    if (meshRef.current && texture) {
      const time = state.clock.elapsedTime;
      
      // Calculate boundary limits based on camera frustum
      const aspect = size.width / size.height;
      const fov = 55 * (Math.PI / 180);
      const distance = 6;
      const height = 2 * Math.tan(fov / 2) * distance;
      const width = height * aspect;
      
      // Boundary limits with padding
      const boundaryX = (width / 2) - 1.5;
      const boundaryY = (height / 2) - 1.5;
      
      // Layer-specific movement patterns
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
      
      // Enhanced floating motion with circular patterns
      const floatY = startPosition.current[1] + 
        Math.sin(time * speed * movementMultiplier) * amplitude;
      const floatX = startPosition.current[0] + 
        Math.cos(time * speed * 0.7 * movementMultiplier) * (amplitude * 0.5);
      
      // Smooth boundary wrapping
      let newX = floatX;
      let newY = floatY;
      let newZ = startPosition.current[2] + 
        Math.sin(time * speed * 0.5) * 0.2;
      
      // Wrap positions smoothly
      if (Math.abs(newX) > boundaryX) {
        newX = newX > 0 ? -boundaryX + 0.5 : boundaryX - 0.5;
        startPosition.current[0] = newX;
      }
      
      if (Math.abs(newY) > boundaryY) {
        newY = newY > 0 ? -boundaryY + 0.5 : boundaryY - 0.5;
        startPosition.current[1] = newY;
      }
      
      meshRef.current.position.set(newX, newY, newZ);
      
      // Enhanced rotation with layer-specific speeds
      meshRef.current.rotation.z = rotation[2] + 
        Math.sin(time * (speed * 0.5 * movementMultiplier)) * 0.15;
      meshRef.current.rotation.x = Math.sin(time * speed * 0.3) * 0.1;
      
      // Hover scale effect
      if (texture.image) {
        const aspectRatio = texture.image.width / texture.image.height;
        const isMobile = size.width < 768;
        const responsiveScale = isMobile ? scale * 0.8 : scale;
        
        meshRef.current.scale.x = THREE.MathUtils.lerp(
          meshRef.current.scale.x,
          hovered ? responsiveScale * aspectRatio * 1.3 : responsiveScale * aspectRatio,
          0.1
        );
        meshRef.current.scale.y = THREE.MathUtils.lerp(
          meshRef.current.scale.y,
          hovered ? responsiveScale * 1.3 : responsiveScale,
          0.1
        );
      }
    }
  });

  if (!texture) return null;

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
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

// Fun floating particles for extra visual appeal
const FloatingParticles = () => {
  const { size } = useThree();
  const particleCount = size.width < 768 ? 15 : 25;
  
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 4
    ],
    speed: 0.1 + Math.random() * 0.3,
    size: 0.05 + Math.random() * 0.1,
    color: [
      '#e92932',
      '#42c4ef',
      '#FCE9F1',
      '#FDF6F3',
      '#ff6b9d',
      '#4ecdc4'
    ][Math.floor(Math.random() * 6)]
  }));

  return (
    <>
      {particles.map((particle) => (
        <FloatingParticle 
          key={particle.id}
          position={particle.position}
          speed={particle.speed}
          size={particle.size}
          color={particle.color}
        />
      ))}
    </>
  );
};

// Individual floating particle
const FloatingParticle = ({ position, speed, size, color }) => {
  const meshRef = useRef();
  const startPosition = useRef(position);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.position.y = startPosition.current[1] + 
        Math.sin(time * speed) * 0.5;
      meshRef.current.position.x = startPosition.current[0] + 
        Math.cos(time * speed * 0.7) * 0.3;
      meshRef.current.rotation.z = time * speed * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
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
