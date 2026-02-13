"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { services } from '@/utils/services';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleDreiScroll = (e: Event) => {
      const offset = (e as CustomEvent).detail?.offset ?? 0;
      setScrollProgress(offset);
    };

    window.addEventListener('drei-scroll', handleDreiScroll);
    return () => window.removeEventListener('drei-scroll', handleDreiScroll);
  }, []);

  const goHome = () => {
    setMenuOpen(false);
    const scrollContainer = document.querySelector('.scroll') as HTMLElement;
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Logo: big only on home page at top, shrinks on scroll or when menu open
  const smallLogo = 50;
  const bigLogo = 200;
  let logoSize: number;

  if (menuOpen || isMobile) {
    logoSize = smallLogo;
  } else {
    const shrinkEnd = 1 / 13;
    const clampedProgress = scrollProgress < 0.005 ? 0 : scrollProgress;
    const shrinkT = Math.min(clampedProgress / shrinkEnd, 1);
    logoSize = bigLogo - (bigLogo - smallLogo) * shrinkT;
  }

  const invertThreshold = 2 / 13;
  const isDark = scrollProgress > invertThreshold;

  const hasHover = hoveredService !== null;

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const content = (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[9990] pointer-events-none"
      >
        <div className="relative flex items-center justify-between w-full p-4 md:px-10 lg:px-14 pt-4">
          <button onClick={goHome} className="flex items-center cursor-pointer pointer-events-auto">
            <Image
              src="/logo_white.png"
              alt="Yoshinova logo"
              width={160}
              height={100}
              className="object-contain transition-[filter] duration-300"
              style={{
                height: `${logoSize}px`,
                width: 'auto',
                filter: (menuOpen ? (hasHover ? 'none' : 'invert(1)') : (isDark ? 'invert(1)' : 'none')),
              }}
              priority
            />
          </button>

          {/* Brand name — absolutely centered, clickable to go home */}
          <button
            onClick={goHome}
            className="absolute left-1/2 -translate-x-1/2 text-base md:text-xl lg:text-2xl font-bold uppercase tracking-tight transition-colors duration-300 cursor-pointer pointer-events-auto"
            style={{ color: (menuOpen ? (hasHover ? 'white' : 'black') : (isDark ? 'black' : 'white')) }}
          >
            Yoshinova
          </button>

          {/* Services button: hover opens menu, click goes to /services */}
          <button
            onMouseEnter={() => setMenuOpen(true)}
            onClick={() => { setMenuOpen(false); router.push('/services'); }}
            className="text-base font-light uppercase tracking-tight transition-colors duration-300 cursor-pointer pointer-events-auto"
          >
            <div className="flex font-light items-center justify-between gap-8" style={{ color: (menuOpen ? (hasHover ? 'white' : 'black') : (isDark ? 'black' : 'white')) }}>
              <span>Services</span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full-screen menu overlay (hover preview) */}
      <div
        onClick={() => { setMenuOpen(false); setHoveredService(null); }}
        className={`fixed inset-0 z-[9980] transition-all duration-500 ease-in-out ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Default background */}
        <div className={`absolute inset-0 bg-[#e8e6e1] pointer-events-none transition-transform duration-500 ease-in-out origin-top ${
          menuOpen ? 'scale-y-100' : 'scale-y-0'
        }`} />

        {/* Service background images */}
        {services.map((service, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none"
            style={{ opacity: hoveredService === i ? 1 : 0 }}
          >
            <Image
              src={service.image}
              alt={service.label}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        {/* Services list */}
        <div className={`absolute inset-0 z-10 flex items-center transition-opacity duration-300 delay-200 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="p-6 md:p-10 lg:p-14 lg:px-64" onClick={(e) => e.stopPropagation()}>
            <ul className="space-y-1 md:space-y-2">
              {services.map((service, i) => (
                <li key={i}>
                  <button
                    onMouseEnter={() => setHoveredService(i)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => {
                      setMenuOpen(false);
                      router.push(`/services/${service.slug}`);
                    }}
                    className={`text-left text-xl lg:text-4xl font-bold uppercase tracking-tight transition-all duration-300 cursor-pointer ${
                      hasHover
                        ? hoveredService === i
                          ? 'text-white'
                          : 'text-white/40'
                        : 'text-black'
                    }`}
                    style={{
                      transform: menuOpen ? 'translateY(0)' : 'translateY(30px)',
                      opacity: menuOpen ? 1 : 0,
                      transition: `transform 0.5s ease ${0.2 + i * 0.06}s, opacity 0.5s ease ${0.2 + i * 0.06}s, color 0.3s ease`,
                    }}
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
};

export default Navbar;
