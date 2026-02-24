"use client";

import React from 'react';
import { solarData } from '@/utils/bessData';
import ZoneSection from './ZoneSection';

const Section9 = () => {
  return (
    <ZoneSection
      title="SOLAR"
      description="Bridge the midday-to-evening gap — 80%+ self-consumption. Increase solar utilization and time-shift renewable energy to peak demand hours. Reduce grid dependency and optimize return on solar investment. Maximize energy independence with intelligent storage."
      alignment="left"
      gradientDirection="left"
      chartData={solarData.chartData}
      yAxisLabel={solarData.yAxisLabel}
      maxY={solarData.maxY}
      accentHex={solarData.accent.hex}
      accentRgb={solarData.accent.rgb}
    />
  );
};

export default Section9;