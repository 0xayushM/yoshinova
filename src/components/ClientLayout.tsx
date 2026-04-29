"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageTransitionProvider } from "./PageTransition";
import Navbar from "./Navbar";
import SmoothScrollProvider from "./SmoothScrollProvider";
import VisitorTracker from "./VisitorTracker";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  // Refresh ScrollTrigger after route changes so triggers re-measure against
  // the freshly mounted DOM (fixes animations stuck in their initial state
  // after SPA navigation, e.g. the "Built On Trust" headline on home).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <>
      <VisitorTracker />
      {isHome && <Navbar />}
      <SmoothScrollProvider>
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </SmoothScrollProvider>
    </>
  );
}
