'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Observer } from 'gsap/dist/Observer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin, Observer);
}

export default function HomeScrollSnap() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on homepage
    if (pathname !== '/' || typeof window === "undefined") return;

    let observer: any = null;
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
      observer = Observer.create({
        target: window,
        type: 'wheel,touch',
        onDown: () => !isAnimating && gotoSection(currentSection + 1),
        onUp: () => !isAnimating && gotoSection(currentSection - 1),
        tolerance: 10,
        preventDefault: true,
      });
    }, 1000);

    return () => {
      clearTimeout(initTimer);
      if (observer) {
        observer.kill();
      }
    };
  }, [pathname]);

  return null; // This component doesn't render anything
}
