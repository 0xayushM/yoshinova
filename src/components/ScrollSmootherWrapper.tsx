'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';

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
  const [isContentReady, setIsContentReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset content ready state on route change
  useEffect(() => {
    setIsContentReady(false);
    
    // Wait for content to be fully rendered
    const timer = setTimeout(() => {
      setIsContentReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  useEffect(() => {
    if (!isContentReady) return;

    let smoother: ScrollSmoother | null = null;

    if (smoothWrapperRef.current && contentRef.current) {
      // Kill any existing ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Small delay to ensure DOM is fully painted
      requestAnimationFrame(() => {
        if (smoothWrapperRef.current && contentRef.current) {
          smoother = ScrollSmoother.create({
            wrapper: smoothWrapperRef.current,
            content: contentRef.current,
            smooth: isMobile ? 0.8 : 1.5,
            effects: !isMobile,
            smoothTouch: isMobile ? 0.3 : 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
          });

          // Refresh after images and content load
          const refreshTimer = setTimeout(() => {
            smoother?.refresh();
          }, 500);

          return () => clearTimeout(refreshTimer);
        }
      });
    }

    return () => {
      smoother?.kill();
    };
  }, [isMobile, isContentReady]);

  return (
    <div id="smooth-wrapper" ref={smoothWrapperRef} className="w-full h-full">
      <div id="smooth-content" ref={contentRef} className="w-full">
        {children}
      </div>
    </div>
  );
}
