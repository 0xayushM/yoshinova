'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Observer } from 'gsap/dist/Observer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin, Observer);
}

export default function HomeScrollSnap() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const initTimer = setTimeout(() => {
      // Get all section elements from the page
      const sections = document.querySelectorAll('.page-section');
      if (sections.length === 0) return;

      const totalSections = sections.length;
      let currentSection = 0;
      let isAnimating = false;

      const gotoSection = (index: number) => {
        if (isAnimating) return;
        
        // Clamp index
        index = Math.max(0, Math.min(totalSections - 1, index));
        if (index === currentSection) return;

        isAnimating = true;
        currentSection = index;

        // Scroll to the section
        const targetSection = sections[index] as HTMLElement;
        
        gsap.to(window, {
          scrollTo: { y: targetSection, autoKill: false },
          duration: 1.2,
          ease: 'power2.inOut',
          onComplete: () => {
            setTimeout(() => {
              isAnimating = false;
            }, 200);
          },
        });
      };

      // Observer for section-by-section scrolling
      const observer = Observer.create({
        target: window,
        type: 'wheel,touch',
        onDown: () => !isAnimating && gotoSection(currentSection + 1),
        onUp: () => !isAnimating && gotoSection(currentSection - 1),
        tolerance: 10,
        preventDefault: true,
      });

      return () => {
        observer.kill();
      };
    }, 1000);

    return () => {
      clearTimeout(initTimer);
    };
  }, []);

  return null; // This component doesn't render anything
}
