"use client";

import React from 'react';
import BESSCard from './BESSCard';
import { commercialData } from '@/utils/bessData';

const Section8 = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      <BESSCard zone={commercialData} align="left" sectionIndex={7} />
    </section>
  );
};

export default Section8;
