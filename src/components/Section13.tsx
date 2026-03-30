"use client";

import React, { useState } from 'react';
import SplitText from './SplitText';
import ContactDialog from './ContactDialog';

const Section13 = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section className="w-screen h-screen md:min-h-screen flex flex-col">
      {/* Top area: left form + right transparent */}
      <div className="flex flex-1 min-h-0">
        {/* Left side — dark background with form */}
        <div className="w-full md:w-[55%] bg-gradient-to-t from-[#0a0a0a] to-[#0a0a0a]/50 flex flex-col justify-between px-6 md:px-12 lg:px-16 py-8 md:py-12 pt-20">
          {/* Company info row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-xs tracking-[0.15em] uppercase md:pt-12">
            <div className="space-y-1">
              <p className="font-bold text-white/90">Yoshinova</p>
              <p className="text-white/50 normal-case tracking-normal text-[11px] leading-relaxed">
                Your Energy Profitability Partner
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-white/40 mb-1">General Enquiries</p>
                <a href="mailto:info@yoshinova.com" className="text-white/80 normal-case tracking-normal underline underline-offset-2 hover:text-white transition-colors">
                  info@yoshinova.com
                </a>
              </div>
              <div>
                <p className="text-white/40 mb-1">New Projects</p>
                <a href="mailto:projects@yoshinova.com" className="text-white/80 normal-case tracking-normal underline underline-offset-2 hover:text-white transition-colors">
                  projects@yoshinova.com
                </a>
              </div>
            </div>
            <div>
              <p className="text-white/40 mb-1">Follow</p>
              <div className="flex flex-col gap-1">
                <a href="#" className="text-white/80 normal-case tracking-normal underline underline-offset-2 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-white/80 normal-case tracking-normal underline underline-offset-2 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>

          {/* Energy Audit CTA */}
          <div className="space-y-6 mt-8 p-6 md:p-8 bg-white/5 border border-white/20 backdrop-blur-sm">
            <SplitText
              text="Start With a Free Energy Audit"
              tag="h3"
              className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-2"
              delay={40}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.5}
              rootMargin="0px"
              textAlign="left"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-4">We find your hidden savings first. Then we talk BESS.</p>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="w-full md:w-auto px-8 py-4 bg-[#6A9F30] text-white text-base font-bold tracking-wide uppercase hover:bg-[#5a8f20] transition-colors"
            >
              Request Energy Audit
            </button>
          </div>

          {/* Bottom tagline */}
          <p className="text-white text-base md:text-lg tracking-wide leading-relaxed max-w-2xl mt-8 font-light">
            Energy Audit &rarr; Right-sized BESS &rarr; Permanent cost reduction.
          </p>
        </div>

        {/* Right side — transparent to show 3D model */}
        <div className="hidden md:block w-[45%] bg-gradient-to-t from-[#0a0a0a] to-[#0a0a0a]/50" />
      </div>

      {/* Bottom — giant YOSHINOVA text */}
      <div className="hidden md:block w-full bg-[#0a0a0a] flex items-end overflow-hidden" style={{ height: '35%' }}>
        <h1
          className="font-bold leading-[2] w-full text-center select-none"
          style={{
            fontSize: 'clamp(210px, 14vw, 150px)',
            letterSpacing: '-0.02em',
            marginBottom: '-0.05em',
            background: 'linear-gradient(to bottom, #ffffff, #453f3fff, #000000)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          YOSHINOVA
        </h1>
      </div>

      <ContactDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        type="energy-audit"
      />
    </section>
  );
};

export default Section13;
