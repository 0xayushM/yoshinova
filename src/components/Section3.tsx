"use client";

import Image from 'next/image';
import React from 'react';

const Section3 = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/video/about.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Top left category label */}
      <div className="absolute top-24 right-12 z-20">
        <p className="text-tertiary text-xs uppercase tracking-widest">[01] — CORE EXPERTISE</p>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-12">
        {/* Left side - Large headline and description */}
        <div className="flex-1 max-w-2xl h-full flex items-center justify-center">
          <Image 
            src="/images/industrial.jpg" 
            alt="Floor Audit Process"
            className="w-full h-3/4 object-cover"
            style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
            width={500}
            height={500}
            quality={75}
          />
        </div>

        {/* Right side - 3D image/visual */}
        
        <div className="max-w-xl">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-[4rem] tracking-tight mb-2">
            01— <br/>THE FLOOR
            AUDIT
          </h1>
          
          <div className="space-y-6 max-w-md">
            <h2 className=" text-2xl text-tertiary font-normal border-t-2 border-tertiary">
              Optimize Your Operations
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              Our Chief Energy Advisor steps in to uncover hidden 10% savings immediately. We identify inefficient motors, analyze power factor issues, and detect energy leaks. Your BESS sizing is driven by this hard data, not guesswork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
