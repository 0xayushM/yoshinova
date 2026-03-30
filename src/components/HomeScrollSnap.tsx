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
    let handleScroll: (() => void) | null = null;
    
    const initTimer = setTimeout(() => {
      // Get all section elements from the page
      const sections = document.querySelectorAll('.page-section');
      if (sections.length === 0) return;

      const totalSections = sections.length;
      let currentSection = 0;
      let isAnimating = false;
      let scrollTimeout: NodeJS.Timeout;

      // Update currentSection based on actual scroll position
      const updateCurrentSection = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Find which section we're closest to
        let closestIndex = 0;
        let closestDistance = Infinity;
        
        sections.forEach((section, index) => {
          const rect = (section as HTMLElement).getBoundingClientRect();
          const sectionTop = scrollY + rect.top;
          const distance = Math.abs(scrollY - sectionTop);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });
        
        currentSection = closestIndex;
      };

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

      // Track manual scrollbar usage
      handleScroll = () => {
        if (isAnimating) return;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          updateCurrentSection();
        }, 150);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Observer for section-by-section scrolling
      observer = Observer.create({
        target: window,
        type: 'wheel,touch',
        onChangeY: (self) => {
          if (isAnimating) return;
          
          // For wheel events, deltaY is positive when scrolling down
          // For touch events, deltaY is negative when swiping up
          const isWheel = self.event?.type === 'wheel';
          const delta = self.deltaY;
          
          if (isWheel) {
            // Mouse wheel: scroll down = next section, scroll up = previous section
            if (delta > 0) {
              gotoSection(currentSection + 1);
            } else if (delta < 0) {
              gotoSection(currentSection - 1);
            }
          } else {
            // Touch: swipe up (negative delta) = next section, swipe down (positive delta) = previous section
            if (delta < 0) {
              gotoSection(currentSection + 1);
            } else if (delta > 0) {
              gotoSection(currentSection - 1);
            }
          }
        },
        tolerance: 10,
        preventDefault: true,
      });
    }, 1000);

    return () => {
      clearTimeout(initTimer);
      if (observer) {
        observer.kill();
      }
      if (handleScroll) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname]);

  return null; // This component doesn't render anything
}
