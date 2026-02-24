"use client";

import React from 'react';

const Section11 = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-6xl mx-auto w-full p-6 md:p-10 lg:p-14 space-y-12">
        {/* Main headline */}
        <h1 className="text-slate-900 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-8">
          Funded by Your Own Inefficiency
        </h1>
        
        {/* Subheadline */}
        <p className="text-slate-700 text-2xl md:text-3xl font-light text-center max-w-4xl mx-auto">
          Use the savings we find in your Step 1 Audit to fund your Step 2 BESS deployment.
        </p>

        {/* Financing options */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Option 1: Traditional Financing */}
          <div className="bg-white border-2 border-green-500 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-6">
              <div className="inline-block bg-green-100 px-4 py-2 rounded-full">
                <span className="text-green-700 font-semibold text-sm tracking-wide">SMART FINANCING</span>
              </div>
              
              <h2 className="text-slate-900 text-3xl md:text-4xl font-bold">
                Self-Funding Model
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                The 10% savings we uncover in your energy audit can directly offset your BESS investment. Your inefficiency becomes your down payment.
              </p>
              
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-slate-800 font-semibold mb-4">Benefits:</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Immediate cash flow improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Flexible payment terms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <span>Asset ownership from day one</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Option 2: Zero-Capex EaaS */}
          <div className="bg-gradient-to-br from-emerald-600 to-green-700 rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-semibold text-sm tracking-wide">ZERO CAPEX</span>
              </div>
              
              <h2 className="text-white text-3xl md:text-4xl font-bold">
                Energy-as-a-Service
              </h2>
              
              <p className="text-white/90 text-lg leading-relaxed">
                For qualifying C&I clients, we deploy, own, and operate the BESS. You pay only for the energy you consume—at rates lower than diesel and peak grid.
              </p>
              
              <div className="pt-6 border-t border-white/20">
                <h3 className="text-white font-semibold mb-4">Perfect For:</h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">★</span>
                    <span>Companies preserving capital</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">★</span>
                    <span>Immediate cost reduction needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-3 text-xl">★</span>
                    <span>No upfront investment required</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <p className="text-slate-700 text-xl md:text-2xl font-medium mb-6">
            Ask about our Zero-Capex Energy-as-a-Service models for qualifying C&I clients.
          </p>
          <button className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Explore Financing Options
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section11;
