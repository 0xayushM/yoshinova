"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] } }}
        exit={{ opacity: 0, transition: { duration: 0 } }}
        className="relative"
        style={{ minHeight: "100vh", zIndex: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
