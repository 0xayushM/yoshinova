"use client";

import React from 'react';

const Section3 = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto w-full p-6 md:p-10 lg:p-14 space-y-12">
        {/* Main headline */}
        <h1 className="text-slate-900 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center">
          The Path to Zero-Diesel Operations
        </h1>
        
        {/* Two-step process */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mt-16">
          {/* Step 1: The Floor Audit */}
          <div className="relative">
            <div className="bg-white border-2 border-blue-500 rounded-xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 -left-6 bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold shadow-lg">
                1
              </div>
              <h2 className="text-blue-600 text-3xl md:text-4xl font-bold mb-6 mt-4">
                The Floor Audit
              </h2>
              <h3 className="text-slate-700 text-xl font-semibold mb-4">Optimize</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Our Chief Energy Advisor steps in to uncover hidden <span className="font-bold text-blue-600">10% savings immediately</span>.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Your BESS sizing is driven by this hard data, not guesswork.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">✓</span>
                    <span>Identify inefficient motors & equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">✓</span>
                    <span>Analyze power factor issues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 text-xl">✓</span>
                    <span>Detect hidden energy leaks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Arrow connector */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
            <div className="text-blue-500 text-6xl font-bold">→</div>
          </div>

          {/* Step 2: The BESS Deployment */}
          <div className="relative">
            <div className="bg-white border-2 border-green-500 rounded-xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 -left-6 bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold shadow-lg">
                2
              </div>
              <h2 className="text-green-600 text-3xl md:text-4xl font-bold mb-6 mt-4">
                The BESS Deployment
              </h2>
              <h3 className="text-slate-700 text-xl font-semibold mb-4">Asset Creation</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                We take the data from Step 1 to deploy a <span className="font-bold text-green-600">custom-sized energy storage system</span>.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Replaces generators and bypasses peak tariffs permanently.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Replace diesel generators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Bypass peak Time-of-Day tariffs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Create a revenue-generating asset</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center pt-8">
          <p className="text-slate-700 text-xl md:text-2xl font-medium">
            Data-Driven. Custom-Sized. Profitability-Focused.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
