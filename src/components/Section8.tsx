"use client";

import React from 'react';
import { commercialData } from '@/utils/bessData';
import ZoneSection from './ZoneSection';

const Section8 = () => {
  return (
    <ZoneSection
      title="COMMERCIAL"
      description="Flatten HVAC spikes and arbitrage time-of-use rates. Cut peak demand charges by up to 50%. Optimize cooling system efficiency and reduce operational costs. Generate revenue through grid services participation and energy trading."
      alignment="left"
      gradientDirection="left"
      chartData={commercialData.chartData}
      yAxisLabel={commercialData.yAxisLabel}
      maxY={commercialData.maxY}
      accentHex={commercialData.accent.hex}
      accentRgb={commercialData.accent.rgb}
    />
  );
};

export default Section8;
