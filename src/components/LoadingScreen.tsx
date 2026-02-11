"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

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

  const content = (
    <div
      className={`fixed inset-0 z-[99999] bg-black flex flex-col transition-opacity duration-600 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Logo in top-left, matching navbar position */}
      <div className="p-4 md:px-10 lg:px-14 pt-4">
        <Image
          src="/logo_white.png"
          alt="Yoshinova logo"
          width={160}
          height={200}
          className="object-contain"
          style={{ height: '200px', width: 'auto' }}
          priority
        />
      </div>

      {/* Progress bar + percentage centered */}
      <div className="flex-1 flex items-center">
        <div className="w-full px-4 md:px-10 lg:px-14">
          <div className="w-full h-[4px] bg-white/20 relative">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-[width] duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/70 text-xl mt-3 font-bold">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
};

export default LoadingScreen;
