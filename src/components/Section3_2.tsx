"use client";

import React from 'react';
import ZoneCard from './ZoneCard';

const zones = [
  {
    zoneNumber: "01",
    title: "Residential",
    description: "Shared storage for elevators, pumps & EV charging",
    imagePath: "/images/residential.webp"
  },
  {
    zoneNumber: "02",
    title: "Commercial",
    description: "Flatten HVAC spikes and arbitrage ToU rates",
    imagePath: "/images/commercial.webp"
  },
  {
    zoneNumber: "03",
    title: "Industrial",
    description: "Shave machinery peaks and unlock demand-response revenue",
    imagePath: "/images/industrial.webp"
  },
  {
    zoneNumber: "04",
    title: "Telecom",
    description: "Replace diesel backup with zero-downtime battery power",
    imagePath: "/images/telecom.webp"
  },
  {
    zoneNumber: "05",
    title: "Household",
    description: "Store daytime solar, power your evenings",
    imagePath: "/images/residential2.webp"
  },
  {
    zoneNumber: "06",
    title: "Solar",
    description: "Bridge the midday-to-evening gap",
    imagePath: "/images/solar.webp"
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
          <div className="pb-2">
            <h1 className="text-white text-3xl md:text-7xl font-medium tracking-tight uppercase">
              BESS Deployment
            </h1>
          </div>
          
          <div className="space-y-6 max-w-md">
            <h2 className="text-[#111827] text-xl font-normal border-t-2 border-[#111827]">
              Asset Creation & Revenue Generation
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              We deploy a custom-sized Battery Energy Storage System tailored to your facility's exact needs. Replace diesel generators, bypass peak Time-of-Day tariffs, and transform your energy infrastructure into a revenue-generating asset — a permanent solution to energy cost challenges.
            </p>
            <a
              href="/services/"
              className="inline-block mt-4 px-6 py-3 border border-white/60 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
            >
              Learn More
            </a>
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
