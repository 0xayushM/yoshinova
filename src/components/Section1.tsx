"use client";

import React from 'react';

const Section1 = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

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

          {/* Right: Learn More + line */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="hidden md:block w-12 h-[1px] bg-white" />
            <span className="text-white text-sm md:text-base font-light tracking-wide">
              Learn More
            </span>
            <span className="text-white text-lg">↓</span>
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