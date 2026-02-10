"use client";

import { PageTransitionProvider } from "./PageTransition";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <PageTransitionProvider>{children}</PageTransitionProvider>;
}
