"use client";

import React from 'react';
import SplitText from './SplitText';

const Section11 = () => {
  return (
    <section className="w-full h-screen md:min-h-screen relative overflow-hidden">
      <div className="flex flex-col h-full justify-between">
        {/* Main Content Area */}
        <div className="w-full h-screen md:h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left: Content */}
          <div className="flex flex-col justify-between p-4 pt-20 md:p-16 bg-white">
            {/* Large Headline */}
            <div>
              <div className="mb-4 md:my-12">
                <SplitText
                  text="Built on"
                  tag="h1"
                  className="text-black text-4xl md:text-7xl lg:text-8xl font-medium leading-[2rem] md:leading-[6rem] uppercase"
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
                  text="Trust"
                  tag="h1"
                  className="text-black text-4xl md:text-7xl lg:text-8xl font-medium leading-[2rem] md:leading-[6rem] uppercase"
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
            </div>

            {/* Bottom Content */}
            <div className="space-y-4 md:space-y-8">
              <div>
                <p className="text-black/60 text-xs uppercase tracking-wider mb-4">WHO WE ARE</p>
                <SplitText
                  text="India's MSME Energy Profitability Partner"
                  tag="h2"
                  className="text-black text-xl md:text-3xl font-normal mb-6"
                  delay={50}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.5}
                  rootMargin="0px"
                  textAlign="left"
                />
              </div>

              <p className="text-black text-xs md:text-base leading-relaxed max-w-lg">
                We built Yoshinova specifically for India&apos;s MSMEs — businesses that deserve enterprise-grade energy solutions without enterprise complexity or cost. Our Chief Energy Advisor personally oversees every audit, ensuring your first savings arrive within 30 days.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative overflow-hidden bg-slate-300">
            <img
              src="/images/residential2.jpg"
              alt="Yoshinova expertise"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Top Navigation Tabs */}
        <div className="hidden md:block w-full border-b border-slate-300">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 md:py-16 md:px-12 px-4 py-4 border-r bg-slate-300 border-slate-300">
              <p className="text-black/50 text-xs uppercase tracking-widest mb-2">01</p>
              <div>
                <SplitText
                  text="Chief Energy Advisor"
                  tag="h3"
                  className="text-black text-xl md:text-4xl font-light"
                  delay={40}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="0px"
                  textAlign="left"
                />
              </div>
              <p className="hidden md:block text-black/60 text-sm mt-3 leading-relaxed">Every audit personally led. No juniors, no guesswork.</p>
            </div>
            <div className="flex-1 md:py-16 md:px-12 px-4 py-4 border-r bg-[#6A9F30] border-slate-300">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-2">02</p>
              <div>
                <SplitText
                  text="Data-Driven Deployment"
                  tag="h3"
                  className="text-white text-xl md:text-4xl font-light"
                  delay={40}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="0px"
                  textAlign="left"
                />
              </div>
              <p className="hidden md:block text-white/80 text-sm mt-3 leading-relaxed">BESS sized on your real data. ROI guaranteed, not estimated.</p>
            </div>
            <div className="flex-1 md:py-16 md:px-12 px-4 py-4 bg-[#111827]">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">03</p>
              <div>
                <SplitText
                  text="MSME-First Approach"
                  tag="h3"
                  className="text-white text-xl md:text-4xl font-light"
                  delay={40}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="0px"
                  textAlign="left"
                />
              </div>
              <p className="hidden md:block text-white/60 text-sm mt-3 leading-relaxed">Built for India&apos;s industrial backbone — accessible, practical, proven.</p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Section11;
