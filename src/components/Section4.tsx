"use client";

import React from 'react';
import BESSCard from './BESSCard';
import { residentialData } from '@/utils/bessData';

const Section4 = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      <BESSCard zone={residentialData} align="right" sectionIndex={3} />
    </section>
  );
};

export default Section4;
