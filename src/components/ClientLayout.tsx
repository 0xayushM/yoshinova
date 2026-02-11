"use client";

import { PageTransitionProvider } from "./PageTransition";
import Navbar from "./Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <PageTransitionProvider>{children}</PageTransitionProvider>
    </>
  );
}
