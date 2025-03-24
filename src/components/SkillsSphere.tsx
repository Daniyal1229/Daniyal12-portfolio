import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface SkillsSphereProps {
  rotationSpeed?: number;
  scale?: number;
  radius?: number;
  fontSize?: number;
  color?: string;
  hoverScale?: number;  // Add this line
}

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

export function SkillsSphere({
  rotationSpeed = 0.001,
  scale = 1,
  radius = 5,
  fontSize = 0.3,
  color = '#e94560',
  hoverScale = 1.1,  // Default value
}: SkillsSphereProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
      
      // Add hover scale effect
      const targetScale = hovered ? hoverScale : 1;
      groupRef.current.scale.x = THREE.MathUtils.lerp(
        groupRef.current.scale.x,
        targetScale * scale,
        0.1
      );
      groupRef.current.scale.y = groupRef.current.scale.x;
      groupRef.current.scale.z = groupRef.current.scale.x;
    }
  });

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {skills.map((skill, i) => {
        const phi = Math.acos(-1 + (2 * i) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        
        return (
          <Text
            key={i}
            position={new THREE.Vector3().setFromSphericalCoords(radius, phi, theta)}
            fontSize={fontSize}
            color={color}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.01}
            outlineColor="#000000"
          >
            {skill}
          </Text>
        );
      })}
    </group>
  );
}
