import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, scale, color, speed = 1, distort = 0.3 }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed?: number;
  distort?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.3;
    mesh.current.rotation.y = Math.cos(state.clock.elapsedTime * speed * 0.2) * 0.3;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={mesh} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.18}
          distort={distort}
          speed={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function TorusShape({ position, scale, color }: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.15;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={mesh} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial color={color} transparent opacity={0.14} wireframe />
      </mesh>
    </Float>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null!);
  const count = 250;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    points.current.rotation.y = state.clock.elapsedTime * 0.02;
    points.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#A855F7" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#A855F7" />
        <pointLight position={[-10, -10, -5]} intensity={0.4} color="#EC4899" />
        <pointLight position={[0, 5, 5]} intensity={0.3} color="#14B8A6" />

        <FloatingShape position={[-3.5, 2, -2]} scale={1.8} color="#A855F7" speed={0.8} distort={0.4} />
        <FloatingShape position={[3.5, -1.5, -3]} scale={1.5} color="#EC4899" speed={1.2} distort={0.3} />
        <FloatingShape position={[0, 3, -4]} scale={1.2} color="#F97316" speed={0.6} />
        <FloatingShape position={[-1, -3, -3]} scale={1} color="#14B8A6" speed={1} distort={0.25} />
        <TorusShape position={[-2, -2, -2]} scale={1} color="#A855F7" />
        <TorusShape position={[4, 2, -4]} scale={0.8} color="#EC4899" />
        <Particles />
      </Canvas>
    </div>
  );
}
