import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'HTML',
  'CSS',
  'Redux',
  'Python',
  'Java',
  'Git',
  'AWS',
  'Docker',
  'REST APIs',
  'Socket.io',
];

export function SkillsSphere() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        
        return (
          <Text
            key={i}
            position={new THREE.Vector3().setFromSphericalCoords(5, phi, theta)}
            fontSize={0.3}
            color="#e94560"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
}