"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { services } from '@/utils/services';
import { useRouter } from 'next/navigation';
import { useNavDirection } from './PageTransition';

const ServiceNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const router = useRouter();
  const { navigateForward, navigateBack } = useNavDirection();

  const hasHover = hoveredService !== null;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between w-full p-4 md:px-10 lg:px-14">
          <button onClick={() => { navigateBack(); router.push('/'); }} className="flex items-center cursor-pointer">
            <Image
              src="/logo_white.png"
              alt="Yoshinova logo"
              width={160}
              height={160}
              className="object-contain"
              style={{ height: '48px', width: 'auto' }}
              priority
            />
          </button>

          {/* Services menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 backdrop-blur-sm border tracking-wider uppercase text-xs md:text-sm transition-all duration-300 rounded-md cursor-pointer ${
              menuOpen
                ? 'bg-transparent border-transparent'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
            }`}
          >
            {!menuOpen && (
              <>
                <span>Services</span>
                <div className="flex flex-col gap-[3px]">
                  <span className="block w-4 h-[1.5px] bg-white" />
                  <span className="block w-4 h-[1.5px] bg-white" />
                </div>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ease-in-out ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Default background */}
        <div className={`absolute inset-0 bg-[#e8e6e1] transition-transform duration-500 ease-in-out origin-top ${
          menuOpen ? 'scale-y-100' : 'scale-y-0'
        }`} />

        {/* Service background images */}
        {services.map((service, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
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

        {/* Menu top bar: logo + close */}
        <div className="absolute top-0 left-0 w-full z-20 flex items-start justify-between p-4 md:px-10 lg:px-14">
          <Image
            src="/logo_white.png"
            alt="Yoshinova logo"
            width={160}
            height={160}
            className="object-contain transition-[filter] duration-300"
            style={{
              height: '48px',
              width: 'auto',
              filter: hasHover ? 'none' : 'invert(1)',
            }}
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/80 hover:bg-black transition-colors duration-200 cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 1L15 15M15 1L1 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Services list */}
        <div className={`relative z-10 w-full h-full flex items-center transition-opacity duration-300 delay-200 ${
          menuOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="p-6 md:p-10 lg:p-14">
            <ul className="space-y-1 md:space-y-2">
              {services.map((service, i) => (
                <li key={i}>
                  <button
                    onMouseEnter={() => setHoveredService(i)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => {
                      setMenuOpen(false);
                      navigateForward();
                      router.push(`/services/${service.slug}`);
                    }}
                    className={`text-left text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight transition-all duration-300 cursor-pointer ${
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

export default ServiceNavbar;
