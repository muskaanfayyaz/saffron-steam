"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function SteamParticles({ count = 80 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  // Generate initial particle positions
  const [positions, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const phs = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Start in a small circle above the cup
      const radius = Math.random() * 0.8;
      const theta = Math.random() * 2 * Math.PI;
      pos[i * 3] = Math.cos(theta) * radius; // x
      pos[i * 3 + 1] = Math.random() * 3 + 1; // y (between 1 and 4)
      pos[i * 3 + 2] = Math.sin(theta) * radius; // z
      
      phs[i] = Math.random() * 100; // random phase for unique movement
    }
    return [pos, phs];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const idx = i * 3;
      // Animate Y position upward
      positionsArray[idx + 1] += 0.015;
      
      // Slight X and Z drift using sin/cos and phase
      positionsArray[idx] += Math.sin(time + phases[i]) * 0.002;
      positionsArray[idx + 2] += Math.cos(time + phases[i]) * 0.002;

      // Reset particles when they drift too high
      if (positionsArray[idx + 1] > 4) {
        positionsArray[idx + 1] = 1.2; // Reset to just above cup
        const radius = Math.random() * 0.8;
        const theta = Math.random() * 2 * Math.PI;
        positionsArray[idx] = Math.cos(theta) * radius;
        positionsArray[idx + 2] = Math.sin(theta) * radius;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[positions, 3]}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.15}
        color="#E7E2D9"
        transparent
        opacity={0.4}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
