import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let dracoLoader: DRACOLoader | null = null;
let gltfLoader: GLTFLoader | null = null;

export function getOptimizedGLTFLoader(): GLTFLoader {
  if (!gltfLoader) {
    gltfLoader = new GLTFLoader();
    
    if (!dracoLoader) {
      dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
      dracoLoader.setDecoderConfig({ type: 'js' });
      dracoLoader.preload();
    }
    
    gltfLoader.setDRACOLoader(dracoLoader);
  }
  
  return gltfLoader;
}

const modelCache = new Map<string, any>();

export async function loadModelWithCache(
  url: string,
  onProgress?: (progress: number) => void
): Promise<any> {
  if (modelCache.has(url)) {
    onProgress?.(100);
    return modelCache.get(url);
  }

  const loader = getOptimizedGLTFLoader();

  return new Promise((resolve, reject) => {
    loader.load(
      url,
      (gltf) => {
        modelCache.set(url, gltf);
        onProgress?.(100);
        resolve(gltf);
      },
      (progressEvent) => {
        if (progressEvent.lengthComputable && onProgress) {
          const percentComplete = (progressEvent.loaded / progressEvent.total) * 100;
          onProgress(Math.round(percentComplete));
        }
      },
      (error) => {
        console.error('Error loading model:', error);
        reject(error);
      }
    );
  });
}

export function disposeModel(model: THREE.Object3D) {
  model.traverse((child) => {
    if ((child as any).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.geometry?.dispose();
      
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach((mat) => mat.dispose());
      } else if (mesh.material) {
        mesh.material.dispose();
      }
    }
  });
}
