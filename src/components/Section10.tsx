"use client";

import React from 'react';

const Section10 = () => {
  return (
    <section className="w-screen h-[100vh] relative flex items-center justify-center">
      {/* Dark overlay so text is always legible over the 3D model */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-8 md:px-16 py-12 md:py-16 max-w-4xl text-center bg-black/40 backdrop-blur-sm border border-white/10">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-6">Why Yoshinova</p>
        <h2 className="text-white text-3xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-tight mb-6">
          We audit first.<br />
          <span className="text-[#8BC34A]">Then we deploy.</span>
        </h2>
        <p className="text-white/80 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Every BESS we deploy is sized on real data from your facility — not industry averages or guesswork. That&apos;s how we guarantee ROI, not just promise it.
        </p>
      </div>
    </section>
  );
};

export default Section10;
