"use client";

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import PageNavbar from '@/components/PageNavbar';
import SmoothScroll from '@/components/SmoothScroll';
import SplitText from '@/components/SplitText';

const features = [
  {
    number: "01",
    title: "Zero Downtime",
    description:
      "Instant switchover during grid failures ensures your network stays live 24/7, maintaining critical connectivity for your customers.",
  },
  {
    number: "02",
    title: "Diesel Replacement",
    description:
      "Eliminate noisy, polluting diesel generators with clean, silent battery backup that delivers power instantly without warm-up delays.",
  },
  {
    number: "03",
    title: "Remote Monitoring",
    description:
      "Track battery health, charge cycles, and power consumption across all tower sites from a centralized dashboard with real-time alerts.",
  },
  {
    number: "04",
    title: "Scalable Capacity",
    description:
      "Modular design allows you to expand storage capacity as your network grows, without replacing existing infrastructure.",
  },
];

const benefits = [
  { stat: "99.9%", label: "Network uptime guarantee" },
  { stat: "70%", label: "Lower operating costs vs diesel" },
  { stat: "5-7 years", label: "Typical ROI period" },
  { stat: "Zero", label: "Emissions & noise pollution" },
];

export default function TelecomPage() {
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
              src="/images/telecom.jpg"
              alt="Telecom BESS"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
              <p className="text-[#6A9F30] text-xs uppercase tracking-widest">
                SERVICE — 03
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
                TELECOM
              </h1>
            </div>

            <div className="absolute bottom-12 left-6 md:left-14 z-10 max-w-lg">
              <p className="text-white/70 text-base md:text-lg leading-relaxed border-t border-white/20 pt-4">
                Reliable power for critical infrastructure. Keep your towers running with clean, silent energy storage that never fails.
              </p>
            </div>
          </section>

          {/* Intro */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  Why Telecom BESS?
                </p>
                <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                  Network reliability starts with power reliability
                </h2>
              </div>
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  Telecom towers can&apos;t afford downtime. Every minute of power loss means dropped calls, lost revenue, and damaged customer trust. Traditional diesel generators are expensive to run, require constant maintenance, and contribute to noise and air pollution.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Our Battery Energy Storage Systems provide instant, silent backup power that keeps your network online during grid outages — with zero emissions, minimal maintenance, and significantly lower operating costs than diesel alternatives.
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
                Built for Telecom Infrastructure
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

          {/* Deployment */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/telecom.jpg"
                  alt="Telecom Tower BESS"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  Deployment
                </p>
                <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                  Rapid rollout across your network
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  Our telecom BESS solutions are designed for quick deployment with minimal site disruption. We handle site surveys, system design, installation, and integration with your existing power infrastructure. Each system is ruggedized for outdoor environments and extreme weather conditions, ensuring reliable operation year-round.
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
              Upgrade your tower power infrastructure
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10">
              Contact us for a network-wide power assessment and discover how BESS can reduce your operating costs while improving reliability.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#6A9F30] text-white text-sm uppercase tracking-widest hover:bg-[#5a8f20] transition-colors duration-300"
            >
              Request Consultation
            </a>
          </section>

        </main>
      </SmoothScroll>
    </>
  );
}
