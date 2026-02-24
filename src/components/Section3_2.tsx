"use client";

import React from 'react';
import ZoneCard from './ZoneCard';

const zones = [
  {
    zoneNumber: "01",
    title: "Residential",
    description: "Shared storage for elevators, pumps & EV charging",
    imagePath: "/images/residential.jpg"
  },
  {
    zoneNumber: "02",
    title: "Commercial",
    description: "Flatten HVAC spikes and arbitrage ToU rates",
    imagePath: "/images/commercial.jpg"
  },
  {
    zoneNumber: "03",
    title: "Industrial",
    description: "Shave machinery peaks and unlock demand-response revenue",
    imagePath: "/images/industrial.jpg"
  },
  {
    zoneNumber: "04",
    title: "Telecom",
    description: "Replace diesel backup with zero-downtime battery power",
    imagePath: "/images/telecom.jpg"
  },
  {
    zoneNumber: "05",
    title: "Household",
    description: "Store daytime solar, power your evenings",
    imagePath: "/images/residential2.jpg"
  },
  {
    zoneNumber: "06",
    title: "Solar",
    description: "Bridge the midday-to-evening gap",
    imagePath: "/images/solar.jpg"
  }
];

const Section3_2 = () => {
  return (
    <section className="w-screen h-screen relative overflow-hidden bg-tertiary/90 backdrop-blur-sm">
      {/* Main content - reversed layout */}
      <div className="relative z-10 w-full h-full flex items-center justify-between gap-12 pl-12">

        {/* Left side - Large headline and description */}
        <div className="max-w-xl">
          {/* Top left category label */}
          <div className="absolute top-24 left-12 z-20">
            <p className="text-white text-xs uppercase tracking-widest">[02] — CORE EXPERTISE</p>
          </div>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-[4rem] tracking-tight pb-2">
            02— <br/>
            BESS
            DEPLOYMENT
          </h1>
          
          <div className="space-y-6 max-w-md">
            <h2 className="text-[#111827] text-2xl font-normal border-t-2 border-[#111827]">
              Asset Creation & Revenue Generation
            </h2>
            <p className="text-white/80 text-base leading-relaxed">
              We take the data from Step 1 to deploy a custom-sized energy storage system. Replace diesel generators, bypass peak Time-of-Day tariffs, and create a revenue-generating asset. Permanent solution to energy cost challenges.
            </p>
          </div>
        </div>

        {/* Right side - 3-row grid of deployment zones */}
        <div className="flex-1 grid grid-rows-3 gap-0 h-full">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-0">
            <ZoneCard {...zones[0]} />
            <ZoneCard {...zones[1]} />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-0">
            <ZoneCard {...zones[2]} />
            <ZoneCard {...zones[3]} />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-0">
            <ZoneCard {...zones[4]} />
            <ZoneCard {...zones[5]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3_2;
