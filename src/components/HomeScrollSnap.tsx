'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Smooth scroll without snap - prevents 3D model from snapping
export default function HomeScrollSnap() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on homepage
    if (pathname !== '/' || typeof window === "undefined") return;

    // Only add smooth scrolling, NO snap-type to avoid model snapping
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    
    html.style.scrollBehavior = 'smooth';

    return () => {
      // Restore original value
      html.style.scrollBehavior = originalScrollBehavior;
    };
  }, [pathname]);

  return null;
}
