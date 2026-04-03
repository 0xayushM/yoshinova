// components/GltfModel.tsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations, Center } from "@react-three/drei";

interface GltfModelProps {
  url?: string;
  scale?: number | [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  onProgress?: (progress: number) => void;
}

export function GltfModel({
  url = "/models/yoshinova-transformed.glb",
  scale = 0.1,
  position = [0.0, 0.0, 0.0],
  rotation = [0, 0, 0],
  onProgress,
}: GltfModelProps) {
  const group = useRef<THREE.Group | null>(null);
  const progressReported = useRef(false);
  
  const gltf = useGLTF(url, true, undefined, (loader) => {
    loader.manager.onProgress = (url, loaded, total) => {
      if (onProgress && total > 0) {
        const progress = Math.round((loaded / total) * 100);
        onProgress(progress);
      }
    };
  }) as any;
  
  const { actions, mixer } = useAnimations(gltf.animations, group);
  
  useEffect(() => {
    if (gltf && !progressReported.current && onProgress) {
      onProgress(100);
      progressReported.current = true;
    }
  }, [gltf, onProgress]);

  // Auto-play & loop all animations
  useEffect(() => {
    if (!actions) return;

    const entries = Object.entries(actions)
      .filter(([, a]) => !!a)
      .map(([name, a]) => ({ name, action: a as THREE.AnimationAction }));

    if (entries.length === 0) return;

    entries.forEach(({ action }) => {
      action.reset();
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.play();
    });

    if (mixer) mixer.timeScale = 1.0;

    return () => {
      entries.forEach(({ action }) => {
        try {
          action.stop();
        } catch (e) {
          /* ignore */
        }
      });
    };
  }, [actions, mixer, gltf.animations]);

  // Ensure meshes cast/receive shadows and fallback material if needed
  useEffect(() => {
    if (!gltf || !gltf.scene) return;
    gltf.scene.traverse((child: any) => {
      if (!child.isMesh) return;
      child.castShadow = true;
      child.receiveShadow = true;

      const assignFallback = (mat: any) => {
        if (!mat || mat.isShaderMaterial) {
          const fallback = new THREE.MeshStandardMaterial({
            color: mat && mat.color ? mat.color : new THREE.Color(0xdddddd),
            roughness: 0.7,
            envMapIntensity: 1.0,
          });
          // Preserve emissive properties from shader materials
          if (mat && mat.emissive) {
            fallback.emissive = mat.emissive.clone();
            fallback.emissiveIntensity = mat.emissiveIntensity ?? 1;
            if (mat.emissiveMap) fallback.emissiveMap = mat.emissiveMap;
          }
          return fallback;
        }
        // Keep emissive materials visible but not overpowering
        if (mat.emissive && (mat.emissive.r > 0 || mat.emissive.g > 0 || mat.emissive.b > 0)) {
          mat.emissiveIntensity = Math.min(mat.emissiveIntensity ?? 1, 1);
        }
        // Outdoor-realistic material tuning
        if (mat.isMeshStandardMaterial || mat.isMeshPhysicalMaterial) {
          mat.envMapIntensity = Math.min(mat.envMapIntensity ?? 1, 1.2);
          mat.metalness = Math.min(mat.metalness ?? 0, 0.9);
          mat.roughness = Math.max(mat.roughness ?? 0.5, 0.15);
          mat.needsUpdate = true;
        }
        return mat;
      };

      if (Array.isArray(child.material)) {
        child.material = child.material.map(assignFallback);
      } else {
        child.material = assignFallback(child.material);
      }
    });
  }, [gltf]);

  return (
    <group
      ref={group}
      dispose={null}
      position={position}
      scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
      rotation={rotation}
    >
      <Center>
        <primitive object={gltf.scene} />
      </Center>
    </group>
  );
}

// preload hint (call once when module is imported)
useGLTF.preload("/models/yoshinova.glb", true);

export default GltfModel;
