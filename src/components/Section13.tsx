"use client";

import React, { useState } from 'react';

const Section13 = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    powerBill: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-5xl mx-auto w-full p-6 md:p-10 lg:p-14 space-y-12">
        {/* Main headline */}
        <div className="text-center space-y-6">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Stop Subsidizing the Grid.
            <br />
            Start the Audit.
          </h1>
          
          <p className="text-white/80 text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Take the first step toward zero-diesel operations and permanent energy cost reduction.
          </p>
        </div>

        {/* Lead capture form */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-white font-semibold text-sm tracking-wide">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label htmlFor="company" className="block text-white font-semibold text-sm tracking-wide">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Manufacturing Co."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Monthly Power Bill */}
              <div className="space-y-2">
                <label htmlFor="powerBill" className="block text-white font-semibold text-sm tracking-wide">
                  Monthly Power Bill Estimate *
                </label>
                <input
                  type="text"
                  id="powerBill"
                  name="powerBill"
                  value={formData.powerBill}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="₹5,00,000"
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <label htmlFor="contact" className="block text-white font-semibold text-sm tracking-wide">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white text-xl font-bold rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl"
              >
                Claim Your Energy Audit
              </button>
            </div>
          </form>

          {/* Privacy note */}
          <p className="text-white/60 text-sm text-center mt-6">
            Your information is secure. We'll contact you within 24 hours to schedule your profitability audit.
          </p>
        </div>

        {/* Bottom value props */}
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <div className="text-center space-y-2">
            <div className="text-blue-400 text-4xl font-bold">10%</div>
            <p className="text-white/80 text-sm">Immediate Savings Guaranteed</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-green-400 text-4xl font-bold">₹0</div>
            <p className="text-white/80 text-sm">Audit Cost (Limited Time)</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-yellow-400 text-4xl font-bold">24h</div>
            <p className="text-white/80 text-sm">Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section13;
