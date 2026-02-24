"use client";

import React from 'react';
import { societyData } from '@/utils/bessData';
import BESSComparisonChart from './BESSComparisonChart';

const Section5 = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden bg-gradient-to-r from-transparent via-transparent to-[#111827]/50">
      <div className="w-full h-full flex flex-col justify-center items-end">
        <div className='w-full'>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-medium md:leading-[7rem] tracking-tight text-right w-full px-12 uppercase border-b border-white/50">
            RESIDENTIAL
          </h1>
          <p className='text-white text-xl md:text-2xl font-light tracking-tight text-right max-w-[50%] ml-auto my-4 px-12'>
            Shared storage for elevators, pumps & EV charging — always on
          </p>
        </div>
        <div className="w-[30vw] h-[30vh] mx-12 bg-white rounded-xl p-6 border border-gray-200 shadow-lg">
          <div className="relative z-10 h-full w-full overflow-hidden">
            <BESSComparisonChart
              data={societyData.chartData}
              yAxisLabel={societyData.yAxisLabel}
              maxY={societyData.maxY}
              accentHex={societyData.accent.hex}
              accentRgb={societyData.accent.rgb}
              isVisible={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
