'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function SpinningShapes() {
  const cube = useRef();
  const octa = useRef();
  const torus = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (cube.current) {
      cube.current.rotation.x = t * 0.35;
      cube.current.rotation.y = t * 0.28;
    }
    if (octa.current) {
      octa.current.rotation.x = -t * 0.25;
      octa.current.rotation.y = t * 0.42;
      octa.current.rotation.z = t * 0.18;
    }
    if (torus.current) {
      torus.current.rotation.x = t * 0.2;
      torus.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={cube} position={[-1.2, 0.3, 0]}>
        <boxGeometry args={[1.3, 1.3, 1.3]} />
        <meshStandardMaterial color="#B87333" wireframe />
      </mesh>
      <mesh ref={octa} position={[1.1, -0.2, -0.5]}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshStandardMaterial color="#1A2744" wireframe />
      </mesh>
      <mesh ref={torus} position={[0.2, 0.6, 0.5]}>
        <torusGeometry args={[0.45, 0.12, 8, 20]} />
        <meshStandardMaterial color="#C4A882" wireframe />
      </mesh>
    </group>
  );
}

export default function SkillsScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.9} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#B87333" />
      <pointLight position={[-2, -2, 2]} intensity={0.5} color="#1A2744" />
      <SpinningShapes />
    </Canvas>
  );
}
