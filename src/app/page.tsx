'use client';

import { useState, useCallback } from 'react';
import ModelViewer from "@/components/ModelViewer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleLoadingComplete = useCallback(() => {
    setLoading(false);
  }, []);

  const handleProgress = useCallback((progress: number) => {
    setLoadingProgress(progress);
  }, []);

  return (
    <main className="relative min-h-screen">
      {loading && <LoadingScreen onComplete={handleLoadingComplete} progress={loadingProgress} />}
      <div className="flex flex-col items-center h-screen relative z-10">
        <ModelViewer onProgress={handleProgress} />
      </div>
    </main>
  );
}