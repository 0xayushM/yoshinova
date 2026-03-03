"use client";

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import PageNavbar from '@/components/PageNavbar';
import SmoothScroll from '@/components/SmoothScroll';
import SplitText from '@/components/SplitText';

const features = [
  {
    number: "01",
    title: "Demand Charge Reduction",
    description:
      "Slash peak demand charges by up to 40% through intelligent load leveling, automatically discharging batteries during high-consumption periods.",
  },
  {
    number: "02",
    title: "Power Quality Improvement",
    description:
      "Eliminate voltage sags, harmonics, and power factor penalties that damage sensitive equipment and inflate electricity bills.",
  },
  {
    number: "03",
    title: "Production Continuity",
    description:
      "Bridge grid outages seamlessly to prevent costly production stoppages, material waste, and missed delivery deadlines.",
  },
  {
    number: "04",
    title: "Renewable Integration",
    description:
      "Store excess solar or wind energy for use during non-generation hours, maximizing your renewable energy ROI.",
  },
];

const benefits = [
  { stat: "20-40%", label: "Reduction in energy costs" },
  { stat: "100%", label: "Uptime during grid failures" },
  { stat: "3-5 years", label: "Typical payback period" },
  { stat: "Real-time", label: "Energy monitoring & control" },
];

export default function IndustrialPage() {
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
              src="/images/industrial.jpg"
              alt="Industrial BESS"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
              <p className="text-[#6A9F30] text-xs uppercase tracking-widest">
                SERVICE — 04
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
                INDUSTRIAL
              </h1>
            </div>

            <div className="absolute bottom-12 left-6 md:left-14 z-10 max-w-lg">
              <p className="text-white/70 text-base md:text-lg leading-relaxed border-t border-white/20 pt-4">
                Industrial-scale energy storage that cuts costs, improves power quality, and keeps production running without interruption.
              </p>
            </div>
          </section>

          {/* Intro */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  Why Industrial BESS?
                </p>
                <SplitText
                  text="Manufacturing demands reliable, cost-effective power"
                  tag="h2"
                  className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6"
                  delay={50}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.5}
                  rootMargin="0px"
                  textAlign="left"
                />
              </div>
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  Industrial facilities face unique energy challenges: unpredictable demand spikes, expensive peak charges, power quality issues that damage equipment, and grid outages that halt production lines. Every minute of downtime translates to lost revenue and wasted materials.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Our industrial Battery Energy Storage Systems are engineered to handle high-power loads while delivering measurable cost savings. From peak shaving to backup power and renewable integration, we provide scalable solutions that pay for themselves through reduced energy bills and eliminated downtime.
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
              <SplitText
                text="Engineered for Heavy Industry"
                tag="h2"
                className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight mb-16"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.5}
                rootMargin="0px"
                textAlign="left"
              />

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
                    <SplitText
                      text={feature.title}
                      tag="h3"
                      className="text-white text-xl md:text-2xl font-bold uppercase tracking-tight mb-3"
                      delay={40}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 20 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.3}
                      rootMargin="0px"
                      textAlign="left"
                    />
                    <p className="text-white/60 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Implementation */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/industrial2.jpg"
                  alt="Industrial BESS Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  Implementation
                </p>
                <SplitText
                  text="Minimal disruption, maximum impact"
                  tag="h2"
                  className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6"
                  delay={50}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.5}
                  rootMargin="0px"
                  textAlign="left"
                />
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  We begin with a comprehensive energy audit to identify your facility&apos;s specific needs and savings opportunities. Our team designs a custom BESS solution sized to your load profile, then handles installation, commissioning, and integration with your existing electrical infrastructure. Most systems are operational within weeks, not months.
                </p>
                <a
                  href="/energy-audit"
                  className="inline-block px-6 py-3 border border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Start with Energy Audit
                </a>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="w-full bg-black px-6 md:px-14 py-24 md:py-32 text-center">
            <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
              Get Started
            </p>
            <SplitText
              text="Cut energy costs while improving reliability"
              tag="h2"
              className="text-white text-3xl md:text-6xl font-bold uppercase tracking-tight mb-6"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="0px"
              textAlign="center"
            />
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10">
              Schedule a facility energy assessment and discover exactly how much you can save with a customized industrial BESS solution.
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
