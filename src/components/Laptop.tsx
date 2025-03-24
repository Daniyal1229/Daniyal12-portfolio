import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function Laptop (props:any) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={group} {...props}>
      {/* Laptop base */}
      <mesh position={[0, -0.3, 0]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      
      {/* Laptop screen */}
      <mesh position={[0, 0.3, -0.8]} rotation={[-0.3, Math.PI / 4, 0]}>
        <boxGeometry args={[2, 1.2, 0.05]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      
      {/* Screen content */}
      <mesh position={[0, 0.3, -0.75]} rotation={[-0.3, Math.PI / 4, 0]}>
        <planeGeometry args={[1.9, 1.1]} />
        <meshStandardMaterial color="#0078d7" />
      </mesh>
    </group>
  );
}