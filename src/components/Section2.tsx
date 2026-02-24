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
        <div className="max-w-7xl mx-auto w-full space-y-12">
          {/* Main headline */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-16">
            You Are Paying For Power Twice
          </h1>
          
          {/* Two-column pain points */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Block 1: Inside Bleed */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-10 rounded-lg space-y-4 hover:bg-white/15 transition-all duration-300">
              <div className="text-red-400 text-6xl font-bold mb-4">01</div>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">The Inside Bleed</h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Inefficient motors, poor power factors, and hidden leaks on your floor are silently draining your margins.
              </p>
            </div>
            
            {/* Block 2: Outside Bleed */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-10 rounded-lg space-y-4 hover:bg-white/15 transition-all duration-300">
              <div className="text-red-400 text-6xl font-bold mb-4">02</div>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">The Outside Bleed</h2>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Grid outages and peak Time-of-Day tariffs force you to burn cash on diesel generators at ₹25+ per unit.
              </p>
            </div>
          </div>
          
          {/* Transition statement */}
          <div className="text-center pt-8">
            <p className="text-white text-2xl md:text-3xl font-light italic">
              You cannot fix one without the other. That is why we built a two-step system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;