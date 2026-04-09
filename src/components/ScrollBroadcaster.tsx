"use client";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// This component lives inside drei's ScrollControls and broadcasts
// the scroll offset to the rest of the app via a custom DOM event.
// Throttled to reduce performance impact.
export default function ScrollBroadcaster() {
  const scroll = useScroll();
  const frameCount = useRef(0);
  const lastOffset = useRef(0);

  useFrame(() => {
    frameCount.current++;
    
    // Only broadcast every 3 frames (20fps instead of 60fps)
    // and only if offset actually changed
    if (frameCount.current % 3 === 0) {
      const offset = scroll.offset;
      
      // Only dispatch if offset changed significantly (> 0.001)
      if (Math.abs(offset - lastOffset.current) > 0.001) {
        lastOffset.current = offset;
        window.dispatchEvent(
          new CustomEvent("drei-scroll", { detail: { offset } })
        );
      }
    }
  });

  return null;
}
