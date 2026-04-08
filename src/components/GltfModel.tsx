// components/GltfModel.tsx
import React, { useEffect, useRef, useMemo, useState } from "react";
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
  const optimizationApplied = useRef(false);
  
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

  // Optimize model: shadows, materials, textures, and geometry
  useEffect(() => {
    if (!gltf || !gltf.scene || optimizationApplied.current) return;
    
    const textureCache = new Map<string, THREE.Texture>();
    
    gltf.scene.traverse((child: any) => {
      if (!child.isMesh) return;
      
      child.castShadow = true;
      child.receiveShadow = true;
      child.frustumCulled = true;
      
      // Optimize geometry
      if (child.geometry) {
        if (!child.geometry.attributes.normal) {
          child.geometry.computeVertexNormals();
        }
        child.geometry.computeBoundingSphere();
        child.geometry.computeBoundingBox();
      }

      const optimizeMaterial = (mat: any) => {
        if (!mat) return mat;
        
        if (mat.isShaderMaterial) {
          const fallback = new THREE.MeshStandardMaterial({
            color: mat.color || new THREE.Color(0xdddddd),
            roughness: 0.7,
            envMapIntensity: 1.0,
          });
          if (mat.emissive) {
            fallback.emissive = mat.emissive.clone();
            fallback.emissiveIntensity = mat.emissiveIntensity ?? 1;
            if (mat.emissiveMap) fallback.emissiveMap = mat.emissiveMap;
          }
          return fallback;
        }
        
        // Optimize textures
        const optimizeTexture = (texture: THREE.Texture | null) => {
          if (!texture || !texture.image) return texture;
          
          const cacheKey = texture.uuid;
          if (textureCache.has(cacheKey)) {
            return textureCache.get(cacheKey)!;
          }
          
          texture.generateMipmaps = true;
          texture.minFilter = THREE.LinearMipmapLinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.anisotropy = 4;
          texture.needsUpdate = true;
          
          textureCache.set(cacheKey, texture);
          return texture;
        };
        
        if (mat.map) mat.map = optimizeTexture(mat.map);
        if (mat.normalMap) mat.normalMap = optimizeTexture(mat.normalMap);
        if (mat.roughnessMap) mat.roughnessMap = optimizeTexture(mat.roughnessMap);
        if (mat.metalnessMap) mat.metalnessMap = optimizeTexture(mat.metalnessMap);
        if (mat.emissiveMap) mat.emissiveMap = optimizeTexture(mat.emissiveMap);
        
        // Optimize emissive materials
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
        child.material = child.material.map(optimizeMaterial);
      } else {
        child.material = optimizeMaterial(child.material);
      }
    });
    
    optimizationApplied.current = true;
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
useGLTF.preload("/models/yoshinova-transformed.glb", true);

export default GltfModel;
