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
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

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

    let refreshTimer: NodeJS.Timeout | null = null;

    // Kill any existing instances
    if (smootherRef.current) {
      smootherRef.current.kill();
      smootherRef.current = null;
    }
    if (ScrollSmoother.get()) {
      ScrollSmoother.get()?.kill();
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Only use ScrollSmoother on homepage
    if (isHomepage && smoothWrapperRef.current && contentRef.current) {
      // Small delay to ensure DOM is fully painted
      const initTimer = setTimeout(() => {
        if (smoothWrapperRef.current && contentRef.current) {
          try {
            smootherRef.current = ScrollSmoother.create({
              wrapper: smoothWrapperRef.current,
              content: contentRef.current,
              smooth: isMobile ? 0.8 : 1.5,
              effects: !isMobile,
              smoothTouch: isMobile ? 0.3 : 0.1,
              normalizeScroll: isMobile,
              ignoreMobileResize: true,
            });

            // Refresh after images and content load
            refreshTimer = setTimeout(() => {
              smootherRef.current?.refresh();
            }, 500);
          } catch (error) {
            console.error('ScrollSmoother creation failed:', error);
          }
        }
      }, 100);

      return () => {
        clearTimeout(initTimer);
        if (refreshTimer) clearTimeout(refreshTimer);
      };
    }

    return () => {
      if (refreshTimer) clearTimeout(refreshTimer);
    };
  }, [isMobile, isContentReady, pathname, isHomepage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={smoothWrapperRef} className="w-full h-full">
      <div id="smooth-content" ref={contentRef} className="w-full">
        {children}
      </div>
    </div>
  );
}
