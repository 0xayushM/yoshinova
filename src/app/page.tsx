'use client';

import ModelViewer from "@/components/ModelViewer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="flex flex-col items-center h-screen relative z-10">
        <ModelViewer />
      </div>
    </main>
  );
}