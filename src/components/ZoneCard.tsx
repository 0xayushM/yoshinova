"use client";

import React from 'react';
import Image from 'next/image';
import SplitText from './SplitText';

interface ZoneCardProps {
  zoneNumber: string;
  title: string;
  description: string;
  imagePath: string;
  onClick?: () => void;
}

const ZoneCard: React.FC<ZoneCardProps> = ({ zoneNumber, title, description, imagePath, onClick }) => {
  return (
    <div 
      className="relative overflow-hidden p-6 flex flex-col justify-between group cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute inset-0">
        <Image 
          src={imagePath}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-300 ease-out"
          sizes="(max-width: 768px) 50vw, 25vw"
          quality={75}
        />
      </div>
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 ease-out" />
      <div className="relative z-10">
        <p className="text-[#6A9F30] text-xs uppercase tracking-wider mb-2">ZONE {zoneNumber}</p>
        <SplitText
          text={title}
          tag="h3"
          className="text-white text-2xl uppercase font-medium mb-2"
          delay={40}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.5}
          rootMargin="0px"
          textAlign="left"
        />
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ZoneCard;
