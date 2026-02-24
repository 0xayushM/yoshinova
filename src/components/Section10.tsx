"use client";

import React from 'react';

const Section10 = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto w-full p-6 md:p-10 lg:p-14 space-y-12">
        {/* Main headline */}
        <h1 className="text-white text-5xl font-bold tracking-tight text-center mb-16">
          Engineered by Industry Veterans
        </h1>
        
        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Chief Energy Advisor spotlight */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 shadow-2xl">
            <div className="space-y-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-semibold text-sm tracking-wide">CHIEF ENERGY ADVISOR</span>
              </div>
              
              <h2 className="text-white text-3xl md:text-4xl font-bold">
                The Expert Behind Your Savings
              </h2>
              
              <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                <p>
                  Our Chief Energy Advisor brings decades of experience in industrial energy optimization, with a proven track record of delivering <span className="font-bold text-white">10% immediate savings</span> to manufacturing facilities.
                </p>
                
                <p>
                  Every audit is personally overseen to ensure no inefficiency goes undetected, no opportunity is missed, and your BESS deployment is sized with surgical precision.
                </p>
              </div>
              
              <div className="pt-6 border-t border-white/20">
                <h3 className="text-white font-semibold mb-4">Track Record:</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">★</span>
                    <span>50+ factory audits completed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">★</span>
                    <span>₹100Cr+ in energy costs saved</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">★</span>
                    <span>Industry-leading MSME expertise</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Founding team */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">Financial Architects</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Our founding team combines deep expertise in energy finance, battery technology, and C&I operations. We understand MSME challenges because we've lived them.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">Technical Excellence</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                From power electronics to thermal management, our engineers have designed and deployed battery systems in the harshest industrial environments.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-white text-2xl font-bold mb-4">MSME-First Approach</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                We built Yoshinova specifically for mid-sized manufacturers who need enterprise-grade solutions without enterprise complexity or cost.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="text-center pt-8">
          <p className="text-white/90 text-xl md:text-2xl font-light italic">
            We have the brains to back up the batteries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section10;
