'use client';

/**
 * Deprecated: Lenis (see SmoothScrollProvider) now owns site-wide smooth
 * scrolling, including the homepage. Setting scroll-behavior: smooth on
 * <html> fights Lenis's own smoothing, so this component is intentionally
 * a no-op. Kept as a stable export to avoid touching every import site.
 */
export default function HomeScrollSnap() {
  return null;
}
