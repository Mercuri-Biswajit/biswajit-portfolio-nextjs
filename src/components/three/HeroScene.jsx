'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WireframeBuilding() {
  const group = useRef();

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.18;
    group.current.position.y = Math.sin(clock.getElapsedTime() * 0.6) * 0.18;
  });

  return (
    <group ref={group}>
      {/* Base slab */}
      <mesh position={[0, -1.8, 0]}>
        <boxGeometry args={[3.2, 0.12, 2.2]} />
        <meshStandardMaterial color="#B87333" wireframe transparent opacity={0.7} />
      </mesh>

      {/* Ground floor */}
      <mesh position={[0, -0.85, 0]}>
        <boxGeometry args={[2.8, 1.7, 1.8]} />
        <meshStandardMaterial color="#1A2744" wireframe transparent opacity={0.35} />
      </mesh>

      {/* First floor */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[2.6, 1.3, 1.6]} />
        <meshStandardMaterial color="#1A2744" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Second floor */}
      <mesh position={[0, 1.4, 0]}>
        <boxGeometry args={[2.4, 1.1, 1.4]} />
        <meshStandardMaterial color="#3D4F6E" wireframe transparent opacity={0.4} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 2.1, 0]}>
        <boxGeometry args={[2.6, 0.12, 1.6]} />
        <meshStandardMaterial color="#B87333" wireframe transparent opacity={0.6} />
      </mesh>

      {/* Water tank */}
      <mesh position={[0.7, 2.5, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.7, 8]} />
        <meshStandardMaterial color="#B87333" wireframe transparent opacity={0.5} />
      </mesh>

      {/* Columns */}
      {[[-1.2, -1], [1.2, -1], [-1.2, 0.7], [1.2, 0.7]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.1, z]}>
          <cylinderGeometry args={[0.055, 0.055, 4, 6]} />
          <meshStandardMaterial color="#B87333" transparent opacity={0.8} />
        </mesh>
      ))}

      {/* Beams */}
      {[-1.8, -0.55, 0.7].map((y, i) => (
        <mesh key={`beam-x-${i}`} position={[0, y, 0.7]}>
          <boxGeometry args={[2.8, 0.08, 0.08]} />
          <meshStandardMaterial color="#C4A882" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

function StructuralParticles() {
  const mesh = useRef();
  const count = 150;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.05;
    mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.025) * 0.12;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.07} color="#B87333" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

function FloatingGridPlane() {
  const mesh = useRef();
  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.position.y = -2.2 + Math.sin(clock.getElapsedTime() * 0.3) * 0.05;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
      <planeGeometry args={[12, 12, 20, 20]} />
      <meshStandardMaterial color="#1A2744" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 7.5], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 4]} intensity={0.9} color="#FAF7F2" />
      <pointLight position={[-4, 3, 2]} intensity={0.6} color="#B87333" />
      <pointLight position={[3, -2, 4]} intensity={0.3} color="#3D4F6E" />
      <Suspense fallback={null}>
        <WireframeBuilding />
        <StructuralParticles />
        <FloatingGridPlane />
      </Suspense>
    </Canvas>
  );
}
