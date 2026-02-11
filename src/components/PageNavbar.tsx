"use client";

import Image from 'next/image';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { services } from '@/utils/services';

interface PageNavbarProps {
  isDark?: boolean; // true = black text/logo (for light backgrounds), false = white (for dark backgrounds)
}

const PageNavbar = ({ isDark = false }: PageNavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const router = useRouter();
  const pathname = usePathname();

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
    setNavVisible(true);
  }, [pathname]);

  const handleMouseEnterTop = useCallback(() => {
    setNavVisible(true);
  }, []);

  const goHome = () => {
    setMenuOpen(false);
    router.push('/');
  };

  const hasHover = hoveredService !== null;
  const logoSize = 50;

  return (
    <>
      {/* Hover zone at top of screen to reveal navbar */}
      <div
        onMouseEnter={handleMouseEnterTop}
        className="fixed top-0 left-0 w-full h-16 z-[9991]"
      />

      <nav
        className="fixed top-0 left-0 w-full z-[9990] transition-transform duration-500 ease-in-out"
        style={{ transform: (navVisible || menuOpen) ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        <div className="relative flex items-center justify-between w-full p-4 md:px-10 lg:px-14 pt-4">
          <button onClick={goHome} className="flex items-center cursor-pointer">
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
            className="absolute left-1/2 -translate-x-1/2 text-base md:text-xl lg:text-2xl font-bold uppercase tracking-tight transition-colors duration-300 cursor-pointer"
            style={{ color: (menuOpen ? (hasHover ? 'white' : 'black') : (isDark ? 'black' : 'white')) }}
          >
            Yoshinova
          </button>

          {/* Services button: hover opens menu, click goes to /services */}
          <button
            onMouseEnter={() => setMenuOpen(true)}
            onClick={() => { setMenuOpen(false); router.push('/services'); }}
            className="text-base font-light uppercase tracking-tight transition-colors duration-300 cursor-pointer"
          >
            <div className="flex font-light items-center justify-between gap-8" style={{ color: (menuOpen ? (hasHover ? 'white' : 'black') : (isDark ? 'black' : 'white')) }}>
              <span>Services</span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full-screen menu overlay (hover preview) */}
      <div
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
          <div className="p-6 md:p-10 lg:p-14 lg:px-64">
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
};

export default PageNavbar;
