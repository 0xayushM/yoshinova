"use client";

import Image from 'next/image';
import React from 'react';
import SplitText from './SplitText';

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

      {/* Top right category label */}
      <div className="absolute top-24 right-12 z-20">
        <p className="text-[#6A9F30] text-xs uppercase tracking-widest">SERVICE — 01</p>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-4 md:px-12">
        {/* Left side - image */}
        <div className="flex-1 max-w-2xl h-full flex items-center justify-center">
          <Image 
            src="/images/industrial.jpg" 
            alt="Energy Audit"
            className="w-full h-3/4 object-cover"
            style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
            width={500}
            height={500}
            quality={75}
          />
        </div>

        {/* Right side - content */}
        <div className="max-w-xl">
          <SplitText
            text="Energy Audit"
            tag="h1"
            className="text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-[4rem] tracking-tight mb-2 uppercase"
            delay={30}
            duration={1}
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
          />
          
          <div className="space-y-6 max-w-md">
            <SplitText
              text="Optimize Your Operations"
              tag="h2"
              className="text-2xl text-[#6A9F30] font-normal border-t-2 border-[#6A9F30]"
              delay={20}
              duration={0.8}
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
            <p className="text-white/80 text-base leading-relaxed">
              Our Chief Energy Advisor conducts a comprehensive floor audit to uncover hidden savings — identifying inefficient motors, poor power factors, and energy leaks. We deliver actionable insights that immediately cut your operating costs and establish a data-driven foundation for smarter energy decisions.
            </p>
            <a
              href="/services/energy-audit"
              className="inline-block mt-4 px-6 py-3 border border-white/60 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
