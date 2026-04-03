"use client";

import React, { useState } from 'react';
import { gsap } from 'gsap';
import PeakShavingChart from './PeakShavingChart';
import { ChartDataPoint } from './BESSComparisonChart';
import SplitText from './SplitText';

interface ZoneSectionProps {
  title: string;
  description: string;
  alignment: 'left' | 'right';
  gradientDirection: 'left' | 'right';
  chartData: ChartDataPoint[];
  yAxisLabel: string;
  maxY: number;
  accentHex: string;
  accentRgb: string;
  ctaLabel?: string;
  onCTAClick?: () => void;
}

const ZoneSection: React.FC<ZoneSectionProps> = ({
  title,
  description,
  alignment,
  gradientDirection,
  chartData,
  yAxisLabel,
  maxY,
  accentHex,
  accentRgb,
  ctaLabel,
  onCTAClick
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const isLeft = alignment === 'left';
  const gradientClass = gradientDirection === 'left' 
    ? 'bg-gradient-to-tl from-transparent via-transparent to-[#111827]'
    : 'bg-gradient-to-tr from-transparent via-transparent to-[#111827]';

  const toggleContent = () => {
    const contentRef = document.getElementById(`zone-content-${title}`);
    
    if (!contentRef) return;

    if (isOpen) {
      // Close animation
      gsap.to(contentRef, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => setIsOpen(false)
      });
    } else {
      // Open animation
      setIsOpen(true);
      gsap.fromTo(contentRef, 
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.inOut' }
      );
    }
  };

  return (
    <section className={`w-screen h-screen relative overflow-hidden ${gradientClass} flex items-center justify-center`}>
      <div className={`w-full flex flex-col items-${isLeft ? 'start' : 'end'}`}>
        {/* Clickable Header with border */}
        <div 
          className='w-full cursor-pointer hover:bg-white/5 transition-colors border-b border-white/50'
          onClick={toggleContent}
        >
          <div className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'} gap-8 px-12 py-4 `}>
            {!isLeft && (
              <div className={`text-white text-2xl md:text-4xl transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} flex items-center`}>
                ▼
              </div>
            )}
            <SplitText
              text={title}
              tag="h1"
              className={`text-white text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight uppercase`}
              delay={70}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.5}
              rootMargin="0px"
              textAlign={isLeft ? 'left' : 'right'}
            />
            {isLeft && (
              <div className={`text-white text-2xl md:text-4xl transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} flex items-center`}>
                ▼
              </div>
            )}
          </div>
        </div>

        {/* Collapsible Content */}
        <div 
          id={`zone-content-${title}`}
          className="w-full overflow-hidden"
          style={{ height: 'auto', opacity: 1 }}
        >
          <div className={`pt-8 pb-8 px-12 flex flex-col ${isLeft ? 'items-start' : 'items-end'}`}>
            {isOpen && (
              <SplitText
                text={description}
                tag="p"
                className={`text-white text-base md:text-xl font-medium tracking-tight ${isLeft ? 'text-left' : 'text-right'} md:max-w-[50%] mb-6`}
                delay={0}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0}
                rootMargin="0px"
                textAlign={isLeft ? 'left' : 'right'}
              />
            )}
            <div className="md:w-[40vw] md:h-[30vh] h-[20vh] w-[70vw] bg-white rounded-xl p-0 border border-gray-200 shadow-lg">
              <div className="relative z-10 h-full w-full overflow-hidden">
                <PeakShavingChart
                  data={chartData}
                  accentColor={accentHex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoneSection;
