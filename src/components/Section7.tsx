"use client";

import React from 'react';
import BESSCard from './BESSCard';
import { industrialData } from '@/utils/bessData';

const Section7 = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      <BESSCard zone={industrialData} align="left" sectionIndex={6} />
    </section>
  );
};

export default Section7;
