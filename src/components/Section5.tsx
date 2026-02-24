"use client";

import React from 'react';
import BESSCard from './BESSCard';
import { societyData } from '@/utils/bessData';

const Section5 = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      <BESSCard zone={societyData} align="right" sectionIndex={5} />
    </section>
  );
};

export default Section5;
