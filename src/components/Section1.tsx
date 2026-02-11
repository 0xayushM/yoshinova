"use client";

import React, { useRef, useEffect } from 'react';

const Section1 = () => {
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
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content layer */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center p-6 md:p-10 lg:p-14">

        {/* Middle row: Company name left, headline center, learn more right */}
        <div className="flex justify-between flex-col md:flex-row border-t gap-12 border-white/20">

          {/* Center: Main headline */}
          <div className="flex-1 px-4 pt-4 flex justify-start items-center w-full">
            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-medium md:leading-[6rem] tracking-tight uppercase">
              Where Power
              <br />
              Unlocks Potential
            </h1>
          </div>

          {/* Right: Learn More + animated bar */}
          <div className="flex-shrink-0 group cursor-pointer">
            {/* Top bar: small bar on right, slides full width on hover */}
            <div className="relative w-40 md:w-52 h-[4px] bg-white/20 mb-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-1/4 h-full bg-white transition-all duration-500 ease-out group-hover:w-full group-hover:right-auto group-hover:left-0" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white text-sm md:text-base font-light tracking-wide">
                Learn More
              </span>
              <span className="text-white text-lg">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;