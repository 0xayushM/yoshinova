'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Lightweight scroll snap using CSS - much better performance
export default function HomeScrollSnap() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on homepage
    if (pathname !== '/' || typeof window === "undefined") return;

    // Add CSS scroll-snap to html element for hardware-accelerated snapping
    const html = document.documentElement;
    const originalScrollSnapType = html.style.scrollSnapType;
    const originalScrollBehavior = html.style.scrollBehavior;
    
    html.style.scrollSnapType = 'y proximity'; // proximity is less aggressive than mandatory
    html.style.scrollBehavior = 'smooth';

    return () => {
      // Restore original values
      html.style.scrollSnapType = originalScrollSnapType;
      html.style.scrollBehavior = originalScrollBehavior;
    };
  }, [pathname]);

  return null;
}
