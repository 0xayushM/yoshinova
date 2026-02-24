"use client";

import React from 'react';
import { residentialData } from '@/utils/bessData';
import ZoneSection from './ZoneSection';

const Section4 = () => {
  return (
    <ZoneSection
      title="HOUSEHOLD"
      description="Store daytime solar, power your evenings — cut bills by 40%. Achieve energy independence with backup power during outages. Maximize solar self-consumption to 80%+. Reduce grid dependency and optimize your renewable investment."
      alignment="right"
      gradientDirection="right"
      chartData={residentialData.chartData}
      yAxisLabel={residentialData.yAxisLabel}
      maxY={residentialData.maxY}
      accentHex={residentialData.accent.hex}
      accentRgb={residentialData.accent.rgb}
    />
  );
};

export default Section4;
