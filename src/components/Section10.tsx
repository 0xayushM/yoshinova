"use client";

import React, { useState } from 'react';
import ContactDialog from './ContactDialog';

const Section10 = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
    <section className="w-screen h-[100vh] relative flex items-center justify-center">
      {/* Dark overlay so text is always legible over the 3D model */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-4 sm:mx-6 md:mx-8 px-6 sm:px-8 md:px-12 lg:px-16 py-10 md:py-12 lg:py-16 max-w-4xl text-center bg-black/40 backdrop-blur-sm border border-white/10">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-4 md:mb-6">Why Yoshinova</p>
        <div className="mb-4 md:mb-6">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium uppercase tracking-tight leading-[1]">
            We audit first.
          </h2>
          <h2 className="text-[#8BC34A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium uppercase tracking-tight leading-[1]">
            Then we deploy.
          </h2>
        </div>
        <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl mx-auto leading-[1.3] tracking-tight mb-6 md:mb-8">
          Every BESS we deploy is sized on real data from your facility not industry averages or guesswork. That&apos;s how we guarantee ROI, not just promise it.
        </p>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="inline-block px-5 py-2.5 md:px-6 md:py-3 border border-white/60 text-white text-xs md:text-sm uppercase tracking-widest hover:bg-[#8BC34A] hover:text-white transition-colors duration-300"
        >
          Start With a Free Audit
        </button>
      </div>
    </section>
    <ContactDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} type="energy-audit" />
    </>
  );
};

export default Section10;
