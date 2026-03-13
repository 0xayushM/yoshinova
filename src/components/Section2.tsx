"use client";

import Image from 'next/image';
import React from 'react';
import SplitText from './SplitText';

const Section2 = () => {
  return (
    <section className="w-screen h-screen md:min-h-screen relative overflow-hidden bg-slate-300/90">
      <div className="w-full h-full flex flex-col justify-center items-end">
        {/* Title Section */}
      <div className="w-full py-8 md:py-16 px-4 md:px-12 md:pt-48 flex flex-col">
        <p className="text-black/40 text-xs uppercase tracking-widest mb-3 leading-[0.9]">The Problem We Solve</p>
        <SplitText
          text="The dual bleed"
          tag="h1"
          className="text-black uppercase text-3xl md:text-7xl font-light text-left leading-[0.9]"
          delay={70}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.5}
          rootMargin="0px"
          textAlign="left"
        />
        <SplitText
          text="in power costs"
          tag="h1"
          className="text-black uppercase text-3xl md:text-7xl font-normal text-left leading-[1rem] md:leading-[0.9]"
          delay={70}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.5}
          rootMargin="0px"
          textAlign="left"
        />
      </div>

      {/* Grid Layout - 4 columns */}
      <div className="w-full h-[calc(100%-200px)] grid md:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Image */}
        <div className="hidden md:block bg-slate-400 relative overflow-hidden">
          <Image 
            src="/images/industrial2.jpg" 
            alt="Industrial facility"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>

        {/* Column 2: Inside Bleed */}
        <div className="bg-slate-200 flex flex-col justify-between p-4 md:p-12">
          <div>
            <SplitText
              text="Inside Bleed"
              tag="h2"
              className="text-black text-xl md:text-3xl font-normal mb-4 md:mb-6"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="left"
            />
            <p className="text-black text-xs md:text-base leading-relaxed mb-2 md:mb-8">
              Inefficient motors, poor power factors, and hidden energy leaks on your production floor silently drain margins. Without real-time monitoring and optimization, you're paying for wasted power every single day.
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="50" cy="50" r="30" />
              <path d="M50 20 L50 35 M50 65 L50 80 M20 50 L35 50 M65 50 L80 50" />
              <circle cx="50" cy="50" r="8" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Column 3: Outside Bleed */}
        <div className="bg-slate-100 flex flex-col justify-between p-4 md:p-12">
          <div>
            <SplitText
              text="Outside Bleed"
              tag="h2"
              className="text-black text-xl md:text-3xl font-normal mb-4 md:mb-6"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="left"
            />
            <p className="text-black text-xs md:text-base leading-relaxed mb-2 md:mb-8">
              Grid outages and peak Time-of-Day tariffs force you to burn cash on diesel generators at ₹25+ per unit. This external pressure compounds internal inefficiencies, creating a double financial drain.
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <svg className="md:w-20 md:h-20 w-16 h-16" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M50 20 L65 40 L55 40 L55 60 L70 60 L50 90 L50 65 L35 65 L50 20 Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Column 4: The Solution */}
        <div className="bg-[#6A9F30] flex flex-col justify-between p-4 md:p-12">
          <div>
            <SplitText
              text="Our Approach"
              tag="h2"
              className="text-white text-xl md:text-3xl font-normal mb-4 md:mb-6"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="left"
            />
            <p className="text-white text-xs md:text-base leading-relaxed mb-2 md:mb-8">
              We begin with a deep Energy Audit to uncover every hidden cost on your floor — then deploy a right-sized BESS to eliminate diesel dependency and arbitrage peak tariffs. Authority earned first, solution delivered second.
            </p>
          </div>
          <div className="hidden md:flex justify-center">
            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="20" y="30" width="60" height="40" />
              <path d="M30 50 L45 50 M55 50 L70 50" strokeWidth="3" />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
              <path d="M40 20 L40 30 M60 20 L60 30 M40 70 L40 80 M60 70 L60 80" />
            </svg>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Section2;