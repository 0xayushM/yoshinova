"use client";

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import PageNavbar from '@/components/PageNavbar';
import ScrollSmootherWrapper from '@/components/ScrollSmootherWrapper';

const auditSteps = [
  {
    number: "01",
    title: "On-Site Assessment",
    description:
      "Our Chief Energy Advisor visits your facility to conduct a thorough walkthrough — documenting your machinery, HVAC systems, lighting, and power distribution infrastructure.",
  },
  {
    number: "02",
    title: "Power Quality Analysis",
    description:
      "We deploy power analysers to measure real-time energy consumption, power factor, harmonic distortion, and peak demand patterns across your entire operations.",
  },
  {
    number: "03",
    title: "Loss Identification",
    description:
      "Hidden inefficiencies are mapped: inefficient motors, transformer losses, idle equipment draw, and reactive power penalties that silently inflate your electricity bill.",
  },
  {
    number: "04",
    title: "Optimisation Report",
    description:
      "You receive a prioritised action plan with projected savings for each intervention — giving you a clear ROI picture before a single rupee is spent.",
  },
];

const benefits = [
  { stat: "10%+", label: "Typical immediate cost reduction" },
  { stat: "₹0", label: "Upfront investment for the audit" },
  { stat: "30 days", label: "Average time to first savings" },
  { stat: "Data-driven", label: "BESS sizing based on real numbers" },
];

export default function EnergyAuditPage() {
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
      <ScrollSmootherWrapper>
        <main className="relative min-h-screen bg-[#0a0a0a]">

          {/* Hero */}
          <section className="relative w-full h-screen overflow-hidden">
            <Image
              src="/images/energy-audit.png"
              alt="Energy Audit"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
              <p className="text-[#6A9F30] text-xs uppercase tracking-widest">
                SERVICE — 01
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
                ENERGY AUDIT
              </h1>
            </div>

            <div className="absolute bottom-12 left-6 md:left-14 z-10 max-w-lg">
              <p className="text-white/70 text-base md:text-lg leading-relaxed border-t border-white/20 pt-4">
                We uncover what your energy bill is hiding. A comprehensive floor
                audit that delivers real savings — fast.
              </p>
            </div>
          </section>

          {/* Intro */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  Why an Energy Audit?
                </p>
                <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                  Your floor is bleeding money. We find exactly where.
                </h2>
              </div>
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  Most facilities lose 10–25% of their energy to inefficiencies
                  they cannot see — poor power factor, oversized motors running
                  at partial load, phantom loads, and avoidable peak demand
                  charges.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Our Energy Audit gives you a precise, data-backed map of every
                  leak. Before you invest in any solution, you know exactly what
                  it will save — and we prove it.
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

          {/* Audit Process */}
          <section className="w-full bg-black px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto">
              <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                The Process
              </p>
              <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight mb-16">
                How We Do It
              </h2>

              <div className="grid md:grid-cols-2 gap-0 border-t border-white/10">
                {auditSteps.map((step, i) => (
                  <div
                    key={step.number}
                    className={`p-8 md:p-10 border-b border-white/10 ${
                      i % 2 === 0 ? 'md:border-r md:border-white/10' : ''
                    }`}
                  >
                    <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                      {step.number}
                    </p>
                    <h3 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What comes next */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/industrial2.jpg"
                  alt="BESS Deployment"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  What Comes Next
                </p>
                <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                  From Audit to Action
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  The audit data doesn&apos;t sit in a report. It directly informs
                  the sizing and deployment of your Battery Energy Storage
                  System — so your BESS investment is right-sized, not
                  guessed. Every kilowatt-hour is accounted for.
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
              Ready to stop the bleed?
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10">
              Book a no-obligation energy audit and find out exactly how much
              your facility is leaving on the table.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#6A9F30] text-white text-sm uppercase tracking-widest hover:bg-[#5a8f20] transition-colors duration-300"
            >
              Book Your Audit
            </a>
          </section>

        </main>
      </ScrollSmootherWrapper>
    </>
  );
}
