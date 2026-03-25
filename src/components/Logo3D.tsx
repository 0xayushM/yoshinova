'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

function LogoModel() {
  const modelRef = useRef<THREE.Group>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  // Load the logo model
  const { scene } = useGLTF('/models/logo.glb');

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      // Calculate target rotation based on mouse position
      targetRotation.current.y = mousePos.current.x * 0.5; // Horizontal rotation
      targetRotation.current.x = mousePos.current.y * 0.3; // Vertical rotation
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth rotation animation
  useFrame(() => {
    if (!modelRef.current) return;

    // Lerp current rotation towards target rotation for smooth movement
    const lerpFactor = 0.05;
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * lerpFactor;
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * lerpFactor;

    // Apply rotation
    modelRef.current.rotation.x = currentRotation.current.x;
    modelRef.current.rotation.y = currentRotation.current.y;
  });

  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={2} position={[0, 0, 0]} />
    </group>
  );
}

export default function Logo3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [3, 3, 3], fov: 50 }}
        gl={{ antialias: true }}
      >
        {/* Bright ambient light for visibility */}
        <ambientLight intensity={2} />
        
        {/* Main directional lights */}
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <directionalLight position={[-10, 10, -10]} intensity={2} />
        
        {/* Top light */}
        <pointLight position={[0, 5, 0]} intensity={2} />
        
        {/* Rim light with green tint */}
        <directionalLight position={[0, 2, -5]} intensity={1} color="#6A9F30" />
        
        {/* Environment for realistic lighting and reflections */}
        <Environment preset="sunset" />

        <LogoModel />
      </Canvas>
    </div>
  );
}
