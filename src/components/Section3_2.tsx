"use client";

import React from 'react';
import ZoneCard from './ZoneCard';
import SplitText from './SplitText';

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
  // Map zone titles to service slugs
  const getSlugFromTitle = (title: string): string => {
    const slugMap: Record<string, string> = {
      'Residential': 'residential',
      'Commercial': 'commercial',
      'Industrial': 'industrial',
      'Telecom': 'telecom',
      'Solar': 'solar',
      'Household': 'residential' // Map Household to residential service
    };
    return slugMap[title] || 'residential';
  };

  const handleZoneClick = (title: string) => {
    const slug = getSlugFromTitle(title);
    // Use window.location for navigation since router is not available in Three.js context
    window.location.href = `/services/${slug}`;
  };

  return (
    <section className="w-screen h-screen relative overflow-hidden bg-[#6A9F30]/90 backdrop-blur-sm">
      {/* Main content - reversed layout */}
      <div className="relative z-10 w-full h-full flex items-center justify-between gap-12 px-4 md:pl-12 md:pr-0">

        {/* Left side - Large headline and description */}
        <div className="max-w-xl">
          {/* Top left category label */}
          <div className="absolute top-24 right-12 md:left-12 z-20">
            <p className="text-white text-xs uppercase tracking-widest">SERVICE — 02</p>
          </div>
          <SplitText
            text="BESS Deployment"
            tag="h1"
            className="text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-[4rem] tracking-tight pb-2 uppercase"
            delay={30}
            duration={1}
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
          />
          
          <div className="space-y-6 max-w-md">
            <SplitText
              text="Asset Creation & Revenue Generation"
              tag="h2"
              className="text-[#111827] text-2xl font-normal border-t-2 border-[#111827]"
              delay={20}
              duration={0.8}
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
            <p className="text-white/80 text-base leading-relaxed">
              We deploy a custom-sized Battery Energy Storage System tailored to your facility's exact needs. Replace diesel generators, bypass peak Time-of-Day tariffs, and transform your energy infrastructure into a revenue-generating asset — a permanent solution to energy cost challenges.
            </p>
          </div>
        </div>

        {/* Right side - 3-row grid of deployment zones */}
        <div className="hidden md:grid flex-1 grid-rows-3 gap-0 h-full">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-0">
            <ZoneCard {...zones[0]} onClick={() => handleZoneClick(zones[0].title)} />
            <ZoneCard {...zones[1]} onClick={() => handleZoneClick(zones[1].title)} />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-0">
            <ZoneCard {...zones[2]} onClick={() => handleZoneClick(zones[2].title)} />
            <ZoneCard {...zones[3]} onClick={() => handleZoneClick(zones[3].title)} />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-0">
            <ZoneCard {...zones[4]} onClick={() => handleZoneClick(zones[4].title)} />
            <ZoneCard {...zones[5]} onClick={() => handleZoneClick(zones[5].title)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3_2;
