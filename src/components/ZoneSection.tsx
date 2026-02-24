"use client";

import React from 'react';
import BESSComparisonChart, { ChartDataPoint } from './BESSComparisonChart';

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
    ? 'bg-gradient-to-l from-transparent via-transparent to-[#111827]/50'
    : 'bg-gradient-to-r from-transparent via-transparent to-[#111827]/50';

  return (
    <section className={`w-screen h-screen relative overflow-hidden ${gradientClass}`}>
      <div className={`w-full h-full flex flex-col justify-center items-${isLeft ? 'start' : 'end'}`}>
        <div className='w-full'>
          <h1 className={`text-white text-5xl md:text-7xl lg:text-8xl font-medium md:leading-[7rem] tracking-tight text-${isLeft ? 'left' : 'right'} w-full px-12 uppercase border-b border-white/50`}>
            {title}
          </h1>
          <p className={`text-white text-lg md:text-xl font-medium tracking-tight text-${isLeft ? 'left' : 'right'} max-w-[50%] ${isLeft ? 'mr-auto' : 'ml-auto'} my-4 px-12`}>
            {description}
          </p>
        </div>
        <div className="w-[30vw] h-[30vh] mx-12 bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
          <div className="relative z-10 h-full w-full overflow-hidden">
            <BESSComparisonChart
              data={chartData}
              yAxisLabel={yAxisLabel}
              maxY={maxY}
              accentHex={accentHex}
              accentRgb={accentRgb}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZoneSection;
