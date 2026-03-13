"use client";

import React from 'react';
import SplitText from './SplitText';

const Section10 = () => {
  return (
    <section className="w-screen h-[100vh] relative flex items-center justify-center">
      {/* Dark overlay so text is always legible over the 3D model */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-8 md:px-16 py-12 md:py-16 max-w-4xl text-center bg-black/40 backdrop-blur-sm border border-white/10">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-6">Why Yoshinova</p>
        <div className="mb-6">
          <SplitText
            text="We audit first."
            tag="h2"
            className="text-white text-3xl md:text-6xl lg:text-7xl font-medium uppercase tracking-tight leading-[1]"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
          <SplitText
            text="Then we deploy."
            tag="h2"
            className="text-[#8BC34A] text-3xl md:text-6xl lg:text-7xl font-medium uppercase tracking-tight leading-[1]"
            delay={50}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
        </div>
        <p className="text-white/80 text-base md:text-xl font-light max-w-2xl mx-auto leading-[1] tracking-tight">
          Every BESS we deploy is sized on real data from your facility not industry averages or guesswork. That&apos;s how we guarantee ROI, not just promise it.
        </p>
      </div>
    </section>
  );
};

export default Section10;
