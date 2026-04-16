import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Yoshinova",
  description: "Excellence, Happiness, Dharma",
  icons: {
    icon: "/logo_white.ico",
    apple: "/logo_white.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical 3-D model so it's available as soon as Three.js initialises */}
        <link rel="preload" href="/models/yoshinova-compressed.glb" as="fetch" crossOrigin="anonymous" />
        {/* Preload hero video poster so the first frame is visible instantly */}
        <link rel="preload" href="/video/yoshinova_hero_poster.jpg" as="image" />
        {/* Preload hero video itself (small now — 3.8 MB) */}
        <link rel="preload" href="/video/yoshinova_hero.mp4" as="video" type="video/mp4" />
        {/* Preload loading screen logo */}
        <link rel="preload" href="/logo_white.webp" as="image" type="image/webp" />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
