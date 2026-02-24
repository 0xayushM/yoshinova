"use client";

import React from 'react';
import { telecomData } from '@/utils/bessData';
import ZoneSection from './ZoneSection';

const Section6 = () => {
  return (
    <ZoneSection
      title="TELECOM"
      description="Replace diesel backup with zero-downtime battery power. Ensure 99.99% uptime reliability. Reduce maintenance costs by 70%. Silent, clean operation with instant switchover capability for mission-critical infrastructure."
      alignment="right"
      gradientDirection="right"
      chartData={telecomData.chartData}
      yAxisLabel={telecomData.yAxisLabel}
      maxY={telecomData.maxY}
      accentHex={telecomData.accent.hex}
      accentRgb={telecomData.accent.rgb}
    />
  );
};

export default Section6;
