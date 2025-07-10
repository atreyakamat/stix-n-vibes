import React, { useRef, useState, useEffect } from 'react';
import { useBox } from '@react-three/cannon';

const Dispenser = ({ position, isDispensing }) => {
  const [doorRef, doorApi] = useBox(() => ({
    mass: 0,
    position: [0, -1.8, 1.1], // Position at the front bottom of machine
    args: [0.6, 0.1, 0.1],
    type: 'Static',
  }));

  // Handle the opening of the dispenser door
  useEffect(() => {
    if (isDispensing) {
      // Rotate the door to open it
      doorApi.rotation.set(0, 0, Math.PI / 2);
      
      // Reset after dispensing
      const timer = setTimeout(() => {
        doorApi.rotation.set(0, 0, 0);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isDispensing, doorApi]);

  return (
    <group position={position}>
      {/* Main dispenser body */}
      <mesh position={[0, -0.3, 0]} castShadow>
        <cylinderGeometry args={[0.8, 0.6, 0.6, 32]} />
        <meshStandardMaterial color="#FCE9F1" />
      </mesh>
      
      {/* The door/flap */}
      <mesh ref={doorRef} castShadow>
        <boxGeometry args={[0.6, 0.1, 0.1]} />
        <meshStandardMaterial color="#e92932" />
      </mesh>
      
      {/* Exit chute */}
      <mesh position={[0, -1.8, 0.6]} rotation={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.7, 0.15, 1.0]} />
        <meshStandardMaterial color="#FCE9F1" />
      </mesh>
    </group>
  );
};

export default Dispenser;
