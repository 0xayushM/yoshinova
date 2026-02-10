"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useRef, useState, useCallback, useEffect } from "react";

type Direction = "forward" | "back";

const DirectionContext = createContext<{
  direction: Direction;
  navigateForward: () => void;
  navigateBack: () => void;
}>({
  direction: "forward",
  navigateForward: () => {},
  navigateBack: () => {},
});

export const useNavDirection = () => useContext(DirectionContext);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState<Direction>("forward");
  const historyStack = useRef<string[]>([]);
  const pathname = usePathname();

  // Track navigation direction by comparing with history
  useEffect(() => {
    const stack = historyStack.current;
    // If going back, the current path matches a previous entry
    if (stack.length >= 2 && stack[stack.length - 2] === pathname) {
      stack.pop();
      setDirection("back");
    } else {
      stack.push(pathname);
      setDirection("forward");
    }
  }, [pathname]);

  const navigateForward = useCallback(() => setDirection("forward"), []);
  const navigateBack = useCallback(() => setDirection("back"), []);

  const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const variants = {
    initial: (dir: Direction) => ({
      x: dir === "forward" ? "100%" : "-100%",
      opacity: 1,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: easing },
    },
    exit: (dir: Direction) => ({
      x: dir === "forward" ? "-30%" : "30%",
      opacity: 0,
      transition: { duration: 0.4, ease: easing },
    }),
  };

  return (
    <DirectionContext.Provider value={{ direction, navigateForward, navigateBack }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </DirectionContext.Provider>
  );
}
