import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yoshinova",
  description: "Excellence, Happiness, Dharma",
  icons: {
    icon: "/logo_white.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
