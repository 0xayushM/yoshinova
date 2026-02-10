'use client';

import ModelViewer from "@/components/ModelViewer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center h-screen relative z-10">
        <ModelViewer />
      </div>
    </main>
  );
}