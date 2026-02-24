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
    <section className="w-screen h-screen flex flex-col">
      {/* Top area: left form + right transparent */}
      <div className="flex flex-1 min-h-0">
        {/* Left side — dark background with form */}
        <div className="w-full md:w-[55%] bg-gradient-to-t from-[#0a0a0a] to-[#0a0a0a]/50 flex flex-col justify-between px-6 md:px-12 lg:px-16 py-8 md:py-12">
          {/* Company info row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-xs tracking-[0.15em] uppercase">
            <div className="space-y-1">
              <p className="font-bold text-white/90">Yoshinova</p>
              <p className="text-white/50 normal-case tracking-normal text-[11px] leading-relaxed">
                Powering India&apos;s Industrial Future
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

          {/* Lead capture form */}
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <h3 className="text-white text-lg font-bold tracking-wide mb-2">Request an Energy Audit</h3>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-transparent border-b border-white/20 text-white text-sm placeholder-white/35 focus:outline-none focus:border-white/60 transition-colors"
                placeholder="Your Name *"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-transparent border-b border-white/20 text-white text-sm placeholder-white/35 focus:outline-none focus:border-white/60 transition-colors"
                placeholder="Company Name *"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="powerBill"
                value={formData.powerBill}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-transparent border-b border-white/20 text-white text-sm placeholder-white/35 focus:outline-none focus:border-white/60 transition-colors"
                placeholder="Monthly Power Bill *"
              />
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 bg-transparent border-b border-white/20 text-white text-sm placeholder-white/35 focus:outline-none focus:border-white/60 transition-colors"
                placeholder="Contact Number *"
              />
            </div>
            <button
              type="submit"
              className="mt-2 px-6 py-2.5 bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors"
            >
              Submit
            </button>
          </form>

          {/* Bottom tagline */}
          <p className="text-white/30 text-[11px] tracking-[0.08em] leading-relaxed max-w-md mt-6">
            Zero-diesel operations and permanent energy cost reduction — engineered for India&apos;s industrial backbone.
          </p>
        </div>

        {/* Right side — transparent to show 3D model */}
        <div className="hidden md:block w-[45%] bg-gradient-to-t from-[#0a0a0a] to-[#0a0a0a]/50" />
      </div>

      {/* Bottom — giant YOSHINOVA text */}
      <div className="w-full bg-[#0a0a0a] flex items-end overflow-hidden" style={{ height: '35%' }}>
        <h1
          className="font-bold leading-[1.1] w-full text-center select-none"
          style={{
            fontSize: 'clamp(80px, 14vw, 220px)',
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
    </section>
  );
};

export default Section13;
