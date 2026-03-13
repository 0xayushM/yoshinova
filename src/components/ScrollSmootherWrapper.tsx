'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
}

interface ScrollSmootherWrapperProps {
  children: ReactNode;
}

export default function ScrollSmootherWrapper({ children }: ScrollSmootherWrapperProps) {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let smoother: ScrollSmoother | null = null;

    if (smoothWrapperRef.current && contentRef.current) {
      smoother = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current,
        content: contentRef.current,
        smooth: isMobile ? 0.8 : 1.5, // Lighter smoothing on mobile
        effects: !isMobile, // Enable data-speed effects only on desktop
        smoothTouch: isMobile ? 0.3 : 0.1, // More responsive touch on mobile
        normalizeScroll: false, // Allow horizontal scroll to work independently
        ignoreMobileResize: true,
      });
    }

    return () => {
      smoother?.kill();
    };
  }, [isMobile]);

  return (
    <div id="smooth-wrapper" ref={smoothWrapperRef} className="w-full h-full">
      <div id="smooth-content" ref={contentRef} className="w-full">
        {children}
      </div>
    </div>
  );
}
