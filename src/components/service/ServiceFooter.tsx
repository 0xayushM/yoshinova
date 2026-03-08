"use client";

import Link from 'next/link';

export default function ServiceFooter() {
  return (
    <footer className="w-full bg-[#0a0a0a] px-6 md:px-14 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-bold uppercase tracking-tight mb-4">YOSHINOVA</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              India's MSME Energy Profitability Partner. We audit first, then deploy cutting-edge Battery Energy Storage Solutions tailored for your business.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/60 hover:text-[#6A9F30] transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-[#6A9F30] transition-colors text-sm">Services</Link></li>
              <li><Link href="/services/energy-audit" className="text-white/60 hover:text-[#6A9F30] transition-colors text-sm">Energy Audit</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-[#6A9F30] transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/residential" className="text-white/60 hover:text-[#6A9F30] transition-colors text-sm">Residential</Link></li>
              <li><Link href="/services/commercial" className="text-white/60 hover:text-[#6A9F30] transition-colors text-sm">Commercial</Link></li>
              <li><Link href="/services/industrial" className="text-white/60 hover:text-[#6A9F30] transition-colors text-sm">Industrial</Link></li>
              <li><Link href="/services/solar" className="text-white/60 hover:text-[#6A9F30] transition-colors text-sm">Solar</Link></li>
              <li><Link href="/services/telecom" className="text-white/60 hover:text-[#6A9F30] transition-colors text-sm">Telecom</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-xs text-center">
            2024 YOSHINOVA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
