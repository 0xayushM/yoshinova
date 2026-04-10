'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
}

interface ScrollSmootherWrapperProps {
  children: ReactNode;
  smooth?: number;
  effects?: boolean;
}

export default function ScrollSmootherWrapper({ 
  children, 
  smooth = 1.2,
  effects = false 
}: ScrollSmootherWrapperProps) {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    // Create ScrollSmoother instance
    smootherRef.current = ScrollSmoother.create({
      smooth: smooth,
      effects: effects,
      smoothTouch: 0.1,
      normalizeScroll: false,
    });

    return () => {
      smootherRef.current?.kill();
    };
  }, [smooth, effects]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
}
