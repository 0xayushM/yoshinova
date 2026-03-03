"use client";

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import PageNavbar from '@/components/PageNavbar';
import SmoothScroll from '@/components/SmoothScroll';

const features = [
  {
    number: "01",
    title: "Time-of-Use Optimization",
    description:
      "Automatically charge during off-peak hours and discharge during expensive peak periods, dramatically reducing your monthly electricity bills.",
  },
  {
    number: "02",
    title: "Tenant Billing Integration",
    description:
      "Track and allocate energy costs accurately across multiple tenants with detailed consumption analytics and automated billing support.",
  },
  {
    number: "03",
    title: "Business Continuity",
    description:
      "Keep elevators, HVAC, security systems, and critical operations running during grid outages to protect revenue and tenant satisfaction.",
  },
  {
    number: "04",
    title: "Green Building Certification",
    description:
      "Earn LEED and other sustainability credits while demonstrating your commitment to environmental responsibility to tenants and stakeholders.",
  },
];

const benefits = [
  { stat: "25-35%", label: "Reduction in peak demand charges" },
  { stat: "Seamless", label: "Backup power transition" },
  { stat: "4-6 years", label: "Average ROI timeline" },
  { stat: "Carbon-free", label: "Emergency backup power" },
];

export default function CommercialPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const resize = () => {
      if (!containerRef.current || !textRef.current) return;
      const container = containerRef.current;
      const text = textRef.current;
      const style = getComputedStyle(container);
      const availableWidth =
        container.clientWidth -
        parseFloat(style.paddingLeft) -
        parseFloat(style.paddingRight);

      let low = 10;
      let high = 500;
      while (high - low > 1) {
        const mid = Math.floor((low + high) / 2);
        text.style.fontSize = `${mid}px`;
        if (text.scrollWidth > availableWidth) {
          high = mid;
        } else {
          low = mid;
        }
      }
      setFontSize(low);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageNavbar />
      <SmoothScroll>
        <main className="relative min-h-screen bg-[#0a0a0a]">

          {/* Hero */}
          <section className="relative w-full h-screen overflow-hidden">
            <Image
              src="/images/commercial.jpg"
              alt="Commercial BESS"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
              <p className="text-[#6A9F30] text-xs uppercase tracking-widest">
                SERVICE — 05
              </p>
            </div>

            <div
              ref={containerRef}
              className="absolute inset-x-0 top-48 z-10 px-6 pb-10 md:pb-16"
            >
              <h1
                ref={textRef}
                className="text-white font-bold uppercase tracking-tighter leading-none whitespace-nowrap w-full"
                style={{ fontSize: `${fontSize}px` }}
              >
                COMMERCIAL
              </h1>
            </div>

            <div className="absolute bottom-12 left-6 md:left-14 z-10 max-w-lg">
              <p className="text-white/70 text-base md:text-lg leading-relaxed border-t border-white/20 pt-4">
                Smart energy storage for office buildings, retail centers, and commercial properties. Lower operating costs while enhancing tenant value.
              </p>
            </div>
          </section>

          {/* Intro */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  Why Commercial BESS?
                </p>
                <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                  Reduce costs, increase property value
                </h2>
              </div>
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  Commercial buildings face escalating energy costs, especially during peak business hours when demand charges are highest. Power outages disrupt operations, damage equipment, and create liability concerns for property managers and tenants alike.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Our commercial Battery Energy Storage Systems deliver immediate cost savings through intelligent peak shaving and time-of-use optimization. They also provide reliable backup power for critical systems, enhance your building&apos;s sustainability profile, and increase property value through reduced operating expenses.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits strip */}
          <section className="w-full bg-[#6A9F30] px-6 md:px-14 py-16">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((b) => (
                <div key={b.label} className="text-center">
                  <p className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tight">
                    {b.stat}
                  </p>
                  <p className="text-white/80 text-sm mt-2 uppercase tracking-wide">
                    {b.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="w-full bg-black px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto">
              <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                Key Features
              </p>
              <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight mb-16">
                Designed for Commercial Properties
              </h2>

              <div className="grid md:grid-cols-2 gap-0 border-t border-white/10">
                {features.map((feature, i) => (
                  <div
                    key={feature.number}
                    className={`p-8 md:p-10 border-b border-white/10 ${
                      i % 2 === 0 ? 'md:border-r md:border-white/10' : ''
                    }`}
                  >
                    <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                      {feature.number}
                    </p>
                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Installation */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/commercial.jpg"
                  alt="Commercial Building BESS"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  Installation
                </p>
                <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                  Seamless integration with existing infrastructure
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  Our commercial BESS solutions are designed for easy integration with your building&apos;s electrical and BMS systems. We conduct a thorough site assessment, design a system optimized for your load profile and available space, and handle all installation and commissioning. Most deployments are completed with minimal disruption to building operations.
                </p>
                <a
                  href="/services"
                  className="inline-block px-6 py-3 border border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Explore All Services
                </a>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="w-full bg-black px-6 md:px-14 py-24 md:py-32 text-center">
            <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
              Get Started
            </p>
            <h2 className="text-white text-3xl md:text-6xl font-bold uppercase tracking-tight mb-6">
              Transform your building&apos;s energy economics
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10">
              Contact us for a building energy assessment and discover how BESS can reduce operating costs while increasing property value.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#6A9F30] text-white text-sm uppercase tracking-widest hover:bg-[#5a8f20] transition-colors duration-300"
            >
              Request Assessment
            </a>
          </section>

        </main>
      </SmoothScroll>
    </>
  );
}
