"use client";

import React from 'react';
import BESSCard from './BESSCard';
import { telecomData } from '@/utils/bessData';

const Section6 = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      <BESSCard zone={telecomData} align="right" sectionIndex={6} />
    </section>
  );
};

export default Section6;
