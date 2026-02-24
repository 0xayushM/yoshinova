"use client";

import React from 'react';
import { industrialData } from '@/utils/bessData';
import ZoneSection from './ZoneSection';

const Section7 = () => {
  return (
    <ZoneSection
      title="INDUSTRIAL"
      description="Shave machinery peaks and unlock demand-response revenue. Eliminate diesel dependency and reduce power factor penalties. Create revenue-generating assets through demand flexibility programs. Optimize production costs with intelligent energy management."
      alignment="left"
      gradientDirection="left"
      chartData={industrialData.chartData}
      yAxisLabel={industrialData.yAxisLabel}
      maxY={industrialData.maxY}
      accentHex={industrialData.accent.hex}
      accentRgb={industrialData.accent.rgb}
    />
  );
};

export default Section7;
