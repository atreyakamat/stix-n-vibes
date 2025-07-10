import React, { useRef } from 'react';
import { useSphere } from '@react-three/cannon';
import { useTexture } from '@react-three/drei';

const StickerBall = ({ position, rotation, texturePath }) => {
  const [ref, api] = useSphere(() => ({ 
    mass: 1, 
    position, 
    rotation,
    args: [0.5], // Radius of the sphere
    material: { restitution: 0.6, friction: 0.5 }
  }));

  // Load sticker texture
  const texture = useTexture(texturePath);
  
  // Apply a random initial impulse for a more dynamic feel
  React.useEffect(() => {
    const impulseX = (Math.random() - 0.5) * 3;
    const impulseZ = (Math.random() - 0.5) * 3;
    api.applyImpulse([impulseX, 0, impulseZ], [0, 0, 0]);
  }, [api]);

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 24, 24]} />
      <meshPhysicalMaterial 
        map={texture} 
        transparent 
        opacity={1}
        roughness={0.3}
        metalness={0.2}
        clearcoat={0.5}
        clearcoatRoughness={0.1}
        envMapIntensity={0.8}
      />
    </mesh>
  );
};

export default StickerBall;
