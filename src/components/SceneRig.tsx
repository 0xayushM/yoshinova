// components/SceneRig.tsx
import React, { JSX, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import GltfModel from "./GltfModel";
import {
  lerpVec3,
  slerpQuat,
  easeInOut,
  cuts,
  getPositions,
  Q_secondSection,
} from "../utils/rigHelpers";

export default function SceneRig(): JSX.Element {
  const modelRef = useRef<THREE.Group>(null);
  const scroll = useScroll();
  const capRef = useRef<THREE.Object3D | null>(null);
  const [modelScale, setModelScale] = useState(0.025);
  const [positions, setPositions] = useState(() => getPositions(false));
  
  // Mouse tracking for interactive model rotation
  const targetMouseRot = useRef({ x: 0, y: 0 });
  const currentMouseRot = useRef({ x: 0, y: 0 });

  // Responsive model scaling and positions based on screen size
  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      setPositions(getPositions(mobile));
      
      if (width < 640) {
        setModelScale(0.015); // Mobile phones
      } else if (width < 768) {
        setModelScale(0.020); // Small tablets
      } else if (width < 1024) {
        setModelScale(0.025); // Tablets
      } else {
        setModelScale(0.025); // Desktop
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range and calculate target rotation
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      
      // Calculate target rotation based on mouse position (subtle effect)
      const maxRotation = 0.008; // radians
      targetMouseRot.current.x = mouseY * maxRotation;
      targetMouseRot.current.y = mouseX * maxRotation;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (!modelRef.current) return;
    const u = THREE.MathUtils.clamp(scroll.offset, 0, 1);

    // segment index
    let i = 0;
    for (let s = 0; s < cuts.length - 1; s++) {
      if (u >= cuts[s] && u <= cuts[s + 1]) {
        i = s;
        break;
      }
    }

    // --- transition mapping (keeps your behavior) ---
    const u0 = cuts[i];
    const u1 = cuts[i + 1];
    const segLen = Math.max(1e-6, u1 - u0);
    const p = THREE.MathUtils.clamp((u - u0) / segLen, 0, 1);
    const TRANSITION_ZONE = 0.7;
    let tMapped: number;
    if (p <= 0) {
      tMapped = 0;
    } else if (p < TRANSITION_ZONE) {
      const local = p / TRANSITION_ZONE;
      tMapped = easeInOut(local);
    } else {
      tMapped = 1;
    }

    // positions/rotations lists from helpers
    const posA = positions.posAList[i] ?? positions.posAList[2];
    const posB = positions.posBList[i] ?? positions.posBList[positions.posBList.length - 1];
    const rotA = positions.rotAList[i] ?? Q_secondSection;
    const rotB = positions.rotBList[i] ?? Q_secondSection;

    modelRef.current.position.copy(lerpVec3(posA, posB, tMapped));
    
    // Base rotation from scroll
    const baseQuat = slerpQuat(rotA, rotB, tMapped);
    
    // Smoothly lerp current mouse rotation towards target
    const lerpFactor = 0.05; // Smooth damping
    currentMouseRot.current.x += (targetMouseRot.current.x - currentMouseRot.current.x) * lerpFactor;
    currentMouseRot.current.y += (targetMouseRot.current.y - currentMouseRot.current.y) * lerpFactor;
    
    // Apply mouse rotation offset on top of base rotation
    const mouseQuatX = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), currentMouseRot.current.x);
    const mouseQuatY = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), currentMouseRot.current.y);
    
    // Combine: base rotation + mouse offset
    modelRef.current.quaternion.copy(baseQuat).multiply(mouseQuatX).multiply(mouseQuatY);

    // cap rotation
    if (!capRef.current && modelRef.current) {
      capRef.current = modelRef.current.getObjectByName("cap_1") || null;
    }
    if (capRef.current) {
      capRef.current.rotation.z = u * Math.PI * 2;
    }
  });

  return (
    <group ref={modelRef} name="model-root">
      <GltfModel url="/models/yoshinova.glb" scale={modelScale} />
    </group>
  );
}
