"use client";

import React, { useRef, useEffect } from 'react';

const Section2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (!sectionRef.current || !bgRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
      const parallaxY = (progress - 0.5) * vh * 0.3;
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
        <source src="/video/about.mp4" type="video/mp4" />
      </video>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content layer */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center p-6 md:p-10 lg:p-14">
        {/* Main headline text */}
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl">
          We take a technology-first, innovation-driven approach to developing, commercializing, and operating the critical infrastructure that underpins the breakthrough technologies of today and tomorrow.
        </h1>

        {/* Learn More / Our Platform link */}
        <div className="mt-12">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Learn More</p>
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="text-white text-sm md:text-base font-medium">Our Platform</span>
            <span className="text-green-400 text-lg transition-transform group-hover:translate-x-1">→</span>
          </div>
          <div className="mt-2 w-48 h-px bg-white/30 relative">
            <div className="absolute right-0 bottom-0 w-8 h-0.5 bg-green-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;