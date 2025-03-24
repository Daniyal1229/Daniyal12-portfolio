import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function ProjectCards() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[-2, 0, 0]} rotation={[0, 0.2, 0]}>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial color="#e94560" />
      </mesh>
      
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial color="#0f3460" />
      </mesh>
      
      <mesh position={[2, 0, 0]} rotation={[0, -0.2, 0]}>
        <boxGeometry args={[1.5, 2, 0.1]} />
        <meshStandardMaterial color="#533483" />
      </mesh>
    </group>
  );
}