"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import ContactDialog from './ContactDialog';

const Section11 = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
    <section className="w-full h-full md:min-h-screen relative overflow-hidden">
      <div className="flex flex-col h-full justify-between">
        {/* Main Content Area */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left: Content */}
          <div className="flex flex-col justify-between p-4 pt-20 h-[40vh] md:h-full md:p-16 bg-white">
            {/* Large Headline */}
            <div>
              <div className="mb-4 md:my-8">
                <h1 className="text-black text-4xl md:text-7xl lg:text-8xl font-medium leading-[1rem] md:leading-[6rem] uppercase">
                  Built on
                </h1>
                <h1 className="text-black text-4xl md:text-7xl lg:text-8xl font-medium leading-[3rem] md:leading-[6rem] uppercase">
                  Trust
                </h1>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="space-y-2">
              <div>
                <p className="text-black/60 text-xs uppercase tracking-wider mb-4">WHO WE ARE</p>
                <h2 className="text-black text-base md:text-3xl font-normal mb-0">
                  India's MSME Energy Profitability Partner
                </h2>
              </div>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="mt-0 flex px-3 py-2 md:px-6 md:py-3 bg-[#6A9F30] text-white text-xs md:text-sm font-semibold items-center justify-center uppercase tracking-wide hover:bg-[#5a8f20] transition-colors duration-300 cursor-pointer"
              >
                Talk to Our Advisor
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden md:block relative overflow-hidden bg-slate-300">
            <Image
              src="/images/residential2.webp"
              alt="Yoshinova expertise"
              fill
              sizes="50vw"
              loading="lazy"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        {/* Top Navigation Tabs */}
        <div className="block w-full h-auto md:h-auto border-b border-slate-300">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 md:py-16 md:px-12 px-4 py-4 border-r bg-slate-300 border-slate-300">
              <p className="text-black/50 text-xs uppercase tracking-widest mb-2">01</p>
              <div>
                <h3 className="text-black text-xl md:text-4xl font-light">
                  Chief Energy Advisor
                </h3>
              </div>
              <p className="block text-black/60 text-sm mt-3 leading-relaxed">Every audit personally led. No juniors, no guesswork.</p>
            </div>
            <div className="flex-1 md:py-16 md:px-12 px-4 py-4 border-r bg-[#6A9F30] border-slate-300">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-2">02</p>
              <div>
                <h3 className="text-white text-xl md:text-4xl font-light">
                  Data-Driven Deployment
                </h3>
              </div>
              <p className="block text-white/80 text-sm mt-3 leading-relaxed">BESS sized on your real data. ROI guaranteed, not estimated.</p>
            </div>
            <div className="flex-1 md:py-16 md:px-12 px-4 py-4 bg-[#111827]">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">03</p>
              <div>
                <h3 className="text-white text-xl md:text-4xl font-light">
                  MSME-First Approach
                </h3>
              </div>
              <p className="block text-white/60 text-sm mt-3 leading-relaxed">Built for India&apos;s industrial backbone — accessible, practical, proven.</p>
            </div>
          </div>
        </div>
      </div>


    </section>
    <ContactDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} type="energy-audit" />
    </>
  );
};

export default Section11;
