'use client';

import { useState, useCallback } from 'react';
import ModelViewer from "@/components/ModelViewer";
import LoadingScreen from "@/components/LoadingScreen";
import HomeScrollSnap from "@/components/HomeScrollSnap";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import Section1 from "@/components/Section1";
import AboutSection from "@/components/AboutSection";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section3_2 from "@/components/Section3_2";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import Section10 from "@/components/Section10";
import Section11 from "@/components/Section11";
import Section13 from "@/components/Section13";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  const handleProgress = useCallback((progress: number) => {
    setLoadingProgress(progress);
  }, []);

  return (
    <>
      <ServiceWorkerRegistration />
      {loading && <LoadingScreen onComplete={handleLoadingComplete} progress={loadingProgress} />}
      
      {/* Fixed 3D Model Background */}
      <ModelViewer onProgress={handleProgress} loadingComplete={!loading} />
      
      {/* Scroll Snapping for Homepage */}
      <HomeScrollSnap />
      
      {/* Scrollable Content */}
      <main className="relative">
          <section className="page-section w-screen h-screen">
            <Section1 loadingComplete={!loading} />
          </section>
          <section className="page-section w-screen h-screen">
            <AboutSection />
          </section>
          <section className="page-section w-screen h-screen">
            <Section2 />
          </section>
          <section className="page-section w-screen h-screen">
            <Section3 />
          </section>
          <section className="page-section w-screen h-screen">
            <Section3_2 />
          </section>
          <section className="page-section w-screen h-screen">
            <Section4 />
          </section>
          <section className="page-section w-screen h-screen">
            <Section5 />
          </section>
          <section className="page-section w-screen h-screen">
            <Section6 />
          </section>
          <section className="page-section w-screen h-screen">
            <Section7 />
          </section>
          <section className="page-section w-screen h-screen">
            <Section8 />
          </section>
          <section className="page-section w-screen h-screen">
            <Section9 />
          </section>
          <section className="page-section w-screen h-screen">
            <Section10 />
          </section>
          <section className="page-section w-screen min-h-screen">
            <Section11 />
          </section>
          <section className="page-section w-screen h-screen">
            <Section13 />
          </section>
      </main>
    </>
  );
}