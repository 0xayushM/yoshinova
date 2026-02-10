"use client";

import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 2500;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      setProgress(Math.round(eased * 100));

      if (pct < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => {
            onComplete?.();
          }, 600);
        }, 300);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[90] bg-black flex items-center justify-center transition-opacity duration-600 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Progress bar + percentage centered */}
      <div className="w-full px-4 md:px-10 lg:px-14">
        <div className="w-full h-[1px] bg-white/20 relative">
          <div
            className="absolute top-0 left-0 h-full bg-white transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/70 text-sm mt-3 font-light italic">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
