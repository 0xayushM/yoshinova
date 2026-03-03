"use client";

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import PageNavbar from '@/components/PageNavbar';
import SmoothScroll from '@/components/SmoothScroll';

const features = [
  {
    number: "01",
    title: "Maximum Solar Utilization",
    description:
      "Store excess solar energy generated during the day for use after sunset, achieving up to 90% self-consumption instead of selling back to the grid at low rates.",
  },
  {
    number: "02",
    title: "Grid Independence",
    description:
      "Reduce reliance on grid power by combining solar generation with battery storage, protecting yourself from rising electricity rates and supply disruptions.",
  },
  {
    number: "03",
    title: "Smart Energy Management",
    description:
      "Automated system optimizes when to charge, discharge, or export to grid based on real-time pricing, consumption patterns, and weather forecasts.",
  },
  {
    number: "04",
    title: "Backup Power Integration",
    description:
      "Seamlessly provides backup power during outages using stored solar energy, eliminating the need for diesel generators or grid dependency.",
  },
];

const benefits = [
  { stat: "80-90%", label: "Solar self-consumption rate" },
  { stat: "2-3 years", label: "Additional ROI from storage" },
  { stat: "24/7", label: "Clean energy availability" },
  { stat: "Zero", label: "Fossil fuel dependency" },
];

export default function SolarPage() {
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
              src="/images/solar.jpg"
              alt="Solar Power with BESS"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
              <p className="text-[#6A9F30] text-xs uppercase tracking-widest">
                SERVICE — 06
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
                SOLAR POWER
              </h1>
            </div>

            <div className="absolute bottom-12 left-6 md:left-14 z-10 max-w-lg">
              <p className="text-white/70 text-base md:text-lg leading-relaxed border-t border-white/20 pt-4">
                Complete solar-plus-storage solutions. Generate clean energy during the day, use it whenever you need it — day or night.
              </p>
            </div>
          </section>

          {/* Intro */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  Why Solar + Storage?
                </p>
                <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                  Solar panels are just the beginning
                </h2>
              </div>
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  Solar panels generate power only when the sun shines — but your energy needs don&apos;t stop at sunset. Without storage, you&apos;re forced to export excess daytime generation to the grid at low rates, then buy expensive power back at night.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Our integrated solar-plus-storage solutions capture every kilowatt-hour your panels produce and make it available exactly when you need it. This dramatically increases your solar ROI, reduces grid dependency, and provides backup power during outages — all while maximizing your environmental impact.
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
                Intelligent Solar Integration
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

          {/* System Design */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/solar.jpg"
                  alt="Solar Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  System Design
                </p>
                <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                  Optimized for your location and usage
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  We design complete solar-plus-storage systems tailored to your site conditions, energy consumption patterns, and financial goals. Whether you&apos;re adding storage to an existing solar installation or building a new system from scratch, we optimize panel orientation, battery capacity, and inverter sizing to maximize your energy independence and ROI.
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
              Unlock the full potential of solar energy
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10">
              Schedule a solar assessment and discover how combining panels with storage can transform your energy economics and environmental impact.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#6A9F30] text-white text-sm uppercase tracking-widest hover:bg-[#5a8f20] transition-colors duration-300"
            >
              Request Solar Assessment
            </a>
          </section>

        </main>
      </SmoothScroll>
    </>
  );
}
