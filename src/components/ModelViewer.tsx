"use client";

import React, { JSX, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls, Scroll } from "@react-three/drei";
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

export default function ModelViewer(): JSX.Element {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Wait for drei's scroll container to be ready
    const initTimer = setTimeout(() => {
      // Find the scroll container created by drei
      const scrollContainer = document.querySelector('.scroll') as HTMLElement;
      
      if (scrollContainer) {
        const totalPages = 13;
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
      <Canvas shadows camera={{ position: [0, 0, 3], fov: typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 45 }}>

        {/* Lights */}
        <ambientLight intensity={0.1} />
        <directionalLight
          castShadow
          position={[0, 0, 0]}
          intensity={0.1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-6, -6, -6]} intensity={0.2} />

        <Environment preset="studio" />

        <ScrollControls pages={13} damping={0.3}>
          <Suspense fallback={null}>
            <SceneRig />
          </Suspense>
          <ScrollBroadcaster />

          {/* HTML overlay sections (11 full-screen sections) */}
          <Scroll html>
            <div className="relative z-20 w-screen">
              <Section1 />
              <Section2 />
              <Section3 />
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
