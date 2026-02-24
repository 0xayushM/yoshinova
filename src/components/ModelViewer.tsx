"use client";

import React, { JSX, Suspense, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}
import SceneRig from "./SceneRig";
import ScrollBroadcaster from "./ScrollBroadcaster";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section3_5 from "./Section3_5";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Section11 from "./Section11";
import Section12 from "./Section12";
import Section13 from "./Section13";

/**
 * Configures renderer shadow map type and adds atmospheric fog.
 * Runs once on mount inside the Canvas context.
 */
function SceneSetup() {
  const { gl, scene } = useThree();

  useEffect(() => {
    // Soft shadow map for natural penumbra
    gl.shadowMap.type = THREE.PCFSoftShadowMap;

    // Atmospheric fog — light steel-blue matching a bright-sky horizon.
    // near=15 / far=80 keeps the foreground model crisp while distant
    // geometry fades into the sky, bridging the gap between 3D and HDRI.
    scene.fog = new THREE.Fog(0xb0c4de, 15, 80);
  }, [gl, scene]);

  return null;
}

/**
 * A directional light rig that follows the model every frame.
 * The light position is always offset from the model's current world position,
 * and the shadow camera frustum stays centered on the model.
 * This ensures shadows are visible regardless of camera angle or model position.
 */
function ShadowLightRig() {
  const lightRef = React.useRef<THREE.DirectionalLight>(null);
  const { scene } = useThree();

  // Sun offset relative to the model — kept at the original [5, 8, 5] direction
  const sunOffset = React.useMemo(() => new THREE.Vector3(5, 8, 5), []);
  const modelWorldPos = React.useMemo(() => new THREE.Vector3(), []);

  // The directional light target must be added to the scene for Three.js to use it
  useEffect(() => {
    if (!lightRef.current) return;
    scene.add(lightRef.current.target);
    return () => {
      scene.remove(lightRef.current!.target);
    };
  }, [scene]);

  useFrame(() => {
    if (!lightRef.current) return;

    // Find the model group by its name (set in SceneRig)
    const modelGroup = scene.getObjectByName('model-root');
    if (!modelGroup) return;

    // Get the model's current world position
    modelGroup.getWorldPosition(modelWorldPos);

    // Position the light relative to the model so the shadow frustum always covers it
    lightRef.current.position.copy(modelWorldPos).add(sunOffset);

    // Point the light's target at the model
    lightRef.current.target.position.copy(modelWorldPos);
    lightRef.current.target.updateMatrixWorld();
  });

  return (
    <directionalLight
      ref={lightRef}
      castShadow
      position={[5, 8, 5]}
      intensity={2.5}
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-bias={-0.0003}
      shadow-normalBias={0.03}
      shadow-camera-near={0.1}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
  );
}

export default function ModelViewer(): JSX.Element {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Wait for drei's scroll container to be ready
    const initTimer = setTimeout(() => {
      // Find the scroll container created by drei
      const scrollContainer = document.querySelector('.scroll') as HTMLElement;
      
      if (scrollContainer) {
        const totalPages = 14;
        let isSnapping = false;
        let snapTimeout: NodeJS.Timeout;

        const handleScroll = () => {
          if (isSnapping) return;

          clearTimeout(snapTimeout);
          // Shorter timeout on mobile for better responsiveness
          const isMobile = window.innerWidth < 768;
          const timeout = isMobile ? 100 : 150;
          
          snapTimeout = setTimeout(() => {
            const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
            const currentScroll = scrollContainer.scrollTop;
            const currentPage = Math.round((currentScroll / scrollHeight) * (totalPages - 1));
            const targetScroll = (currentPage / (totalPages - 1)) * scrollHeight;

            isSnapping = true;
            gsap.to(scrollContainer, {
              scrollTop: targetScroll,
              duration: isMobile ? 0.4 : 0.5,
              ease: "power2.inOut",
              onComplete: () => {
                isSnapping = false;
              },
            });
          }, timeout);
        };

        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
          scrollContainer.removeEventListener('scroll', handleScroll);
          clearTimeout(snapTimeout);
        };
      }
    }, 300);

    return () => {
      clearTimeout(initTimer);
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, width: "100%", height: "100vh", zIndex: 0 }}>
      <Canvas
        shadows
        dpr={[1, 2]}
        style={{ background: 'linear-gradient(180deg, #7bb1e8ff 0%, #d6dce4 40%, #e8e6e1 100%)' }}
        camera={{
          position: [0, 0, 3],
          fov: typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 45,
        }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >

        {/* Runtime renderer / fog setup (needs Canvas context) */}
        <SceneSetup />

        {/* Lights — outdoor daylight rig */}
        <ambientLight intensity={0.8} />
        <hemisphereLight args={[0x87ceeb, 0xb97a56, 1.2]} />

        {/* Sun light that follows the model so shadows persist at every scroll position */}
        <ShadowLightRig />

        {/* Fill from the opposite side */}
        <directionalLight position={[-5, 3, -5]} intensity={0.6} />

        <ScrollControls pages={14} damping={0.3}>
          <Suspense fallback={null}>
            <SceneRig />
          </Suspense>
          <ScrollBroadcaster />

          {/* HTML overlay sections (14 full-screen sections) */}
          <Scroll html>
            <div className="relative z-20 w-screen">
              <Section1 />
              <Section2 />
              <Section3 />
              <Section3_5 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Section7 />
              <Section8 />
              <Section9 />
              <Section10 />
              <Section11 />
              <Section12 />
              <Section13 />
            </div>
          </Scroll>
          {/* <Footer/> */}
        </ScrollControls>
      </Canvas>
    </div>
  );
}
