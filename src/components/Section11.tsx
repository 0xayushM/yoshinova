"use client";

import React from 'react';

const Section11 = () => {
  return (
    <section className="w-full min-h-screen relative overflow-hidden">
      <div className="flex flex-col bg-red-300 h-full justify-between">
        {/* Main Content Area */}
        <div className="w-full grid grid-cols-2">
          {/* Left: Content */}
          <div className="flex flex-col justify-between p-16 bg-white">
            {/* Large Headline */}
            <div>
              <h1 className="text-black text-6xl md:text-7xl lg:text-8xl font-medium leading-[6rem] my-16 uppercase">
                The Yoshinova
                <br />
                Quality
              </h1>
            </div>

            {/* Bottom Content */}
            <div className="space-y-8">
              <div>
                <p className="text-black/60 text-xs uppercase tracking-wider mb-4">EXPERTISE</p>
                <h2 className="text-black text-2xl md:text-3xl font-normal mb-6">
                  Engineered by Industry Veterans
                </h2>
              </div>

              <p className="text-black text-base leading-relaxed max-w-lg">
                Our Chief Energy Advisor brings decades of experience in industrial energy optimization, with a proven track record of delivering 10% immediate savings to manufacturing facilities. Every audit is personally overseen to ensure no inefficiency goes undetected.
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
        <div className="w-full border-b border-slate-300">
          <div className="flex">
            <div className="flex-1 py-16 px-12 border-r bg-slate-300 border-slate-300">
              <h3 className="text-black text-3xl md:text-4xl font-light">
                Chief Energy
                <br />
                Advisor
              </h3>
            </div>
            <div className="flex-1 py-16 px-12 border-r bg-[#6A9F30] border-slate-300">
              <h3 className="text-white text-3xl md:text-4xl font-light">
                Technical
                <br />
                Excellence
              </h3>
            </div>
            <div className="flex-1 py-16 px-12 bg-slate-300">
              <h3 className="text-black text-3xl md:text-4xl font-light">
                MSME-First
                <br />
                Approach
              </h3>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Section11;
