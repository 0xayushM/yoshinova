"use client";

import React, { useRef, useEffect } from 'react';
import SplitText from './SplitText';

interface Section1Props {
  loadingComplete?: boolean;
}

const Section1 = ({ loadingComplete = false }: Section1Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const offset = (e as CustomEvent).detail?.offset ?? 0;
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // For Section1: use how far the section has scrolled out of view
      const progress = Math.max(0, Math.min(1, -rect.top / vh));
      // Background moves slower: only shift down by 30% of scroll
      const parallaxY = progress * vh * 0.3;
      bgRef.current.style.transform = `translateY(${parallaxY}px)`;
    };

    window.addEventListener('drei-scroll', handleScroll);
    return () => window.removeEventListener('drei-scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-screen h-screen relative overflow-hidden">
      {/* Background Video (parallax layer) */}
      <div ref={bgRef} className="absolute will-change-transform" style={{ top: '-15%', left: 0, right: 0, height: '130%' }}>
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/video/hero_5.mp4" type="video/mp4" />
      </video>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content layer */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">

        {/* YOSHINOVA label — sits above the border line */}
        <p className="text-white text-sm md:text-xl font-bold uppercase tracking-widest mb-3 px-4 md:pl-12">
          YOSHINOVA
        </p>

        {/* Main row: headline left, description right */}
        <div className="flex justify-between flex-col md:flex-row border-t border-white/20">

          {/* Left: Main headline */}
          <div className="flex-3 pt-4 flex flex-col justify-start w-full px-4 md:pl-12">

            {loadingComplete ? (
              <SplitText
                text="Your Energy"
                tag="h1"
                className="text-white text-4xl md:text-6xl lg:text-8xl font-medium md:leading-[6rem] tracking-tighter uppercase"
                delay={70}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            ) : (
              <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-medium md:leading-[6rem] tracking-tight uppercase opacity-0">
                Your Energy
              </h1>
            )}
            {loadingComplete ? (
              <SplitText
                text="Profitability Partner"
                tag="h1"
                className="text-white text-4xl md:text-6xl lg:text-8xl font-medium md:leading-[6rem] tracking-tighter uppercase"
                delay={70}
                duration={1}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
            ) : (
              <h1 className="text-transparent text-4xl md:text-6xl lg:text-8xl font-medium md:leading-[6rem] tracking-tighter uppercase opacity-0">
                Profitability Partner
              </h1>
            )}
            <p className="text-white/60 text-sm md:text-base font-light tracking-wide mt-4 uppercase">
              Energy Audit &nbsp;·&nbsp; BESS Deployment &nbsp;·&nbsp; India
            </p>
          </div>

          {/* Right: description */}
          <div className="flex-1 flex-shrink-0 group">
            <p className="text-white text-base md:text-xl font-light tracking-tight text-left mr-auto my-4 px-4 md:px-8 md:border-l md:border-white/50">
              Advanced battery energy storage systems designed for industrial, commercial, and residential applications. Eliminate diesel dependency, optimize power costs, and create revenue-generating assets through intelligent energy management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;