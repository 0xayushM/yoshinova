"use client";

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import { services } from '@/utils/services';
import PageNavbar from '@/components/PageNavbar';

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services.find((s) => s.slug === slug);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const resize = () => {
      const container = containerRef.current!;
      const text = textRef.current!;
      // Get the usable width inside padding
      const style = getComputedStyle(container);
      const availableWidth = container.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);

      // Binary search for the largest font size that fits
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
  }, [service?.label]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
        Service not found
      </div>
    );
  }

  return (
    <>
    <PageNavbar />
    <main className="relative min-h-screen">
      {/* Hero section with full-screen background */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src={service.image}
          alt={service.label}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Large service name — auto-sized to fill width */}
        <div ref={containerRef} className="absolute inset-x-0 top-48 z-10 px-6 pb-10 md:pb-16">
          <h1
            ref={textRef}
            className="text-white font-bold uppercase tracking-tighter leading-none whitespace-nowrap w-full"
            style={{ fontSize: `${fontSize}px` }}
          >
            {service.label}
          </h1>
        </div>
      </section>
    </main>
    </>
  );
}
