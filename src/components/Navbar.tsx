"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleDreiScroll = (e: Event) => {
      const offset = (e as CustomEvent).detail?.offset ?? 0;
      setScrollProgress(offset);
    };

    window.addEventListener('drei-scroll', handleDreiScroll);
    return () => window.removeEventListener('drei-scroll', handleDreiScroll);
  }, []);

  const scrollToHome = () => {
    const scrollContainer = document.querySelector('.scroll') as HTMLElement;
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Logo shrinks from large (120px) to small (48px) over the first section (0 to 1/13)
  const shrinkEnd = 1 / 13;
  const shrinkT = Math.min(scrollProgress / shrinkEnd, 1);
  const logoSize = 120 - 72 * shrinkT; // 120px -> 48px

  // Invert logo to black after section 2 (2/13 of scroll)
  const invertThreshold = 2 / 13;
  const isDark = scrollProgress > invertThreshold;

  return (
    <>
      <nav className='fixed top-0 left-0 w-full z-50'>
        <div className='flex items-start justify-between w-full p-4 md:px-10 lg:px-14'>
          <button onClick={scrollToHome} className='flex items-center cursor-pointer'>
            <Image
              src="/logo_white.png"
              alt="Yoshinova logo"
              width={160}
              height={160}
              className="object-contain transition-[filter] duration-300"
              style={{
                height: `${logoSize}px`,
                width: 'auto',
                filter: isDark ? 'invert(1)' : 'none',
              }}
              priority
            />
          </button>
          
          <button 
            onClick={() => window.location.href = 'mailto:info@yoshinova.com'}
            className={`px-4 py-2 md:px-6 md:py-2.5 backdrop-blur-sm border tracking-wider uppercase text-xs md:text-sm transition-all duration-300 rounded-md ${
              isDark
                ? 'bg-black/10 hover:bg-black/20 text-black border-black/20'
                : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
            }`}
          >
            Get in Touch
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
