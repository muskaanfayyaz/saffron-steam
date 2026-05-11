"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function CoffeeCup3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2; // Slow idle rotation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1; // gentle bobbing
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Mug Body */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1, 2.5, 32]} />
        <meshStandardMaterial 
          color="#F2EFE8" 
          roughness={0.3} 
          metalness={0.1} 
        />
      </mesh>
      
      {/* Mug Handle */}
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
        <torusGeometry args={[0.7, 0.2, 16, 32, Math.PI]} />
        <meshStandardMaterial 
          color="#F2EFE8" 
          roughness={0.3} 
          metalness={0.1} 
        />
      </mesh>

      {/* Coffee Inside */}
      <mesh position={[0, 1.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.15, 32]} />
        <meshStandardMaterial 
          color="#1C1917" // espresso black
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
      
      {/* Subtle Amber Rim */}
      <mesh position={[0, 1.25, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.15, 1.25, 32]} />
        <meshStandardMaterial 
          color="#B45309"
          roughness={0.4}
        />
      </mesh>
    </group>
  );
}
