"use client";

import React from 'react';
import { societyData } from '@/utils/bessData';
import ZoneSection from './ZoneSection';

const Section5 = () => {
  return (
    <ZoneSection
      title="RESIDENTIAL"
      description="Shared storage for elevators, pumps & EV charging — always on. Reduce common area electricity costs by 30-40%. Enable backup power during grid outages. Support building-wide renewable integration and future-proof your infrastructure."
      alignment="right"
      gradientDirection="right"
      chartData={societyData.chartData}
      yAxisLabel={societyData.yAxisLabel}
      maxY={societyData.maxY}
      accentHex={societyData.accent.hex}
      accentRgb={societyData.accent.rgb}
    />
  );
};

export default Section5;
