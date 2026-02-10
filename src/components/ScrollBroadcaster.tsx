"use client";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// This component lives inside drei's ScrollControls and broadcasts
// the scroll offset to the rest of the app via a custom DOM event.
export default function ScrollBroadcaster() {
  const scroll = useScroll();

  useFrame(() => {
    const offset = scroll.offset;
    window.dispatchEvent(
      new CustomEvent("drei-scroll", { detail: { offset } })
    );
  });

  return null;
}
