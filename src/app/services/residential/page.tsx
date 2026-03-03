"use client";

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import PageNavbar from '@/components/PageNavbar';
import SmoothScroll from '@/components/SmoothScroll';

const features = [
  {
    number: "01",
    title: "Peak Shaving",
    description:
      "Reduce your electricity bills by automatically drawing from battery storage during peak-rate hours, avoiding expensive grid charges.",
  },
  {
    number: "02",
    title: "Backup Power",
    description:
      "Keep your home running during outages with seamless automatic switchover to battery power for essential appliances and comfort.",
  },
  {
    number: "03",
    title: "Solar Integration",
    description:
      "Maximize your solar investment by storing excess energy for use after sunset, achieving true energy independence.",
  },
  {
    number: "04",
    title: "Smart Management",
    description:
      "Monitor and control your energy usage in real-time through our intuitive app, optimizing consumption patterns automatically.",
  },
];

const benefits = [
  { stat: "30-50%", label: "Reduction in electricity bills" },
  { stat: "24/7", label: "Uninterrupted power supply" },
  { stat: "10+ years", label: "System lifespan" },
  { stat: "Zero", label: "Maintenance hassle" },
];

export default function ResidentialPage() {
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
              src="/images/residential.jpg"
              alt="Residential BESS"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
              <p className="text-[#6A9F30] text-xs uppercase tracking-widest">
                SERVICE — 02
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
                RESIDENTIAL
              </h1>
            </div>

            <div className="absolute bottom-12 left-6 md:left-14 z-10 max-w-lg">
              <p className="text-white/70 text-base md:text-lg leading-relaxed border-t border-white/20 pt-4">
                Energy independence for your home. Store solar power, cut peak-hour costs, and never worry about outages again.
              </p>
            </div>
          </section>

          {/* Intro */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  Why Residential BESS?
                </p>
                <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                  Your home, powered on your terms
                </h2>
              </div>
              <div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  Rising electricity costs and unreliable grid power don&apos;t have to dictate your lifestyle. Our residential Battery Energy Storage Systems give you control over your energy — storing power when it&apos;s cheap or abundant, and using it when you need it most.
                </p>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Whether you&apos;re looking to maximize your solar panels, reduce monthly bills, or ensure your family stays comfortable during power cuts, our BESS solutions deliver reliability, savings, and peace of mind.
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
                What You Get
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

          {/* How it works */}
          <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/residential.jpg"
                  alt="Home BESS Installation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
                  Installation & Setup
                </p>
                <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-6">
                  Simple, professional, hassle-free
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                  Our team handles everything — from initial energy assessment and system sizing to installation and commissioning. Most residential systems are up and running within 2-3 days, with minimal disruption to your daily routine. We ensure full compliance with local electrical codes and provide comprehensive training on system operation.
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
              Ready to take control of your energy?
            </h2>
            <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10">
              Schedule a free home energy assessment and discover how much you can save with a customized BESS solution.
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
