"use client";

import React from 'react';
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
  accentRgb
}) => {
  const isLeft = alignment === 'left';
  const gradientClass = gradientDirection === 'left' 
    ? 'bg-gradient-to-tl from-transparent via-transparent to-[#111827]'
    : 'bg-gradient-to-tr from-transparent via-transparent to-[#111827]';

  return (
    <section className={`w-screen h-screen relative overflow-hidden ${gradientClass}`}>
      <div className={`w-full h-full flex flex-col justify-center items-${isLeft ? 'start' : 'end'}`}>
        <div className='w-full'>
          <SplitText
            text={title}
            tag="h1"
            className={`text-white text-4xl md:text-7xl lg:text-8xl font-medium leading-[4rem] md:leading-[7rem] tracking-tight ${isLeft ? 'text-left' : 'text-right'} w-full px-12 uppercase border-b border-white/50`}
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
          <p className={`text-white text-lg md:text-xl font-medium tracking-tight ${isLeft ? 'text-left' : 'text-right'} md:max-w-[50%] ${isLeft ? 'mr-auto' : 'ml-auto'} my-4 px-12`}>
            {description}
          </p>
        </div>
        <div className="md:w-[40vw] h-[30vh] w-[90vw] mx-12 bg-white rounded-xl p-0 border border-gray-200 shadow-lg">
          <div className="relative z-10 h-full w-full overflow-hidden">
            <PeakShavingChart
              data={chartData}
              accentColor={accentHex}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoneSection;
