'use client';

import { ReactNode } from 'react';

interface ScrollSmootherWrapperProps {
  children: ReactNode;
}

export default function ScrollSmootherWrapper({ children }: ScrollSmootherWrapperProps) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}
