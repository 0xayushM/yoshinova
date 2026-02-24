"use client";

import React from 'react';
import BESSCard from './BESSCard';
import { solarData } from '@/utils/bessData';

const Section9 = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      <BESSCard zone={solarData} align="left" sectionIndex={9} />
    </section>
  );
};

export default Section9;