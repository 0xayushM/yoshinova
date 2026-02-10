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
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-10 lg:p-14">
        {/* Top spacer (logo is in fixed Navbar) */}
        <div />

        {/* Middle row: Company name left, headline center, learn more right */}
        <div className="flex items-center justify-between">
          {/* Left: Company name */}
          <div className="flex-shrink-0">
            <h2 className="text-white text-lg md:text-2xl font-light tracking-wide">
              Yoshinova
            </h2>
          </div>

          {/* Center: Main headline */}
          <div className="flex-1 text-center px-4">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
              Where Power
              <br />
              Unlocks Potential
            </h1>
          </div>

          {/* Right: Learn More + animated bar */}
          <div className="flex-shrink-0 group cursor-pointer">
            {/* Top bar: small bar on right, slides full width on hover */}
            <div className="relative w-40 md:w-52 h-[2px] bg-white/20 mb-3 overflow-hidden">
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

        {/* Bottom row: Description block */}
        <div className="max-w-xs md:max-w-sm">
          <h3 className="text-white text-sm md:text-base font-semibold mb-2">
            Energy Infrastructure Platform
          </h3>
          <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed">
            Yoshinova develops and operates an integrated portfolio of power, digital infrastructure, and compute assets purpose-built to fuel the world&apos;s most transformative technologies.
          </p>
        </div>
      </div>

      {/* Decorative horizontal line (right side, middle area) */}
      <div className="absolute right-6 md:right-10 lg:right-14 top-1/2 -translate-y-12 w-16 md:w-24 h-[1px] bg-white hidden md:block" />
    </section>
  );
};

export default Section1;