'use client';

import { useState, useCallback } from 'react';
import ModelViewer from "@/components/ModelViewer";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <main className="relative min-h-screen">
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Navbar />
      <div className="flex flex-col items-center h-screen relative z-10">
        <ModelViewer />
      </div>
    </main>
  );
}