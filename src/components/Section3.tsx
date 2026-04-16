"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import ContactDialog from './ContactDialog';

const Section3 = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
    <section className="w-screen h-screen relative overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/video/about_poster.jpg"
      >
        <source src="/video/about.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Main content */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-4 md:px-12">
        {/* Left side - image */}
        <div className="flex-1 max-w-3xl h-full flex items-center justify-center">
          <Image
            src="/images/energy-audit.webp"
            alt="Energy Audit"
            className="w-full h-3/4 object-cover"
            style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
            width={600}
            height={450}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            quality={80}
          />
        </div>

        {/* Right side - content */}
        <div className="max-w-xl">
          <div className="mb-2">
            <h1 className="text-white text-3xl md:text-7xl font-medium tracking-tight uppercase">
              Energy Audit
            </h1>
          </div>
          
          <div className="space-y-6 max-w-md">
            <h2 className="text-xl text-[#6A9F30] font-normal border-t-2 border-[#6A9F30]">
              Optimize Your Operations
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Our Chief Energy Advisor conducts a comprehensive floor audit to uncover hidden savings — identifying inefficient motors, poor power factors, and energy leaks. We deliver actionable insights that immediately cut your operating costs and establish a data-driven foundation for smarter energy decisions.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="/services/energy-audit"
                className="inline-block px-6 py-3 border border-white/60 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
              >
                Learn More
              </a>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="inline-block px-6 py-3 bg-[#6A9F30] text-white text-sm uppercase tracking-widest hover:bg-[#5a8f20] transition-colors duration-300 cursor-pointer"
              >
                Request Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} type="energy-audit" />
    </>
  );
};

export default Section3;
