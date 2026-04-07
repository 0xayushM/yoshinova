'use client';

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  mobileImage?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sunny Kalra',
    role: 'Chief Growth Strategist',
    image: '/team/sunny_kalra.png',
  },
  {
    name: 'Sandeep Agarwal',
    role: 'CEO',
    image: '/team/sandeep_kalra.png',
    mobileImage: '/team/sandeep_kalra_mobile.png',
  },
  {
    name: 'Mohit Bhaiya',
    role: 'CFO',
    image: '/team/mohit.png',
  },
  {
    name: 'Sambhav Bhaiya',
    role: 'COO',
    image: '/team/sambhav.png',
  },
  {
    name: 'Shourya K. Chirania',
    role: 'CTO',
    image: '/team/shourya.png',
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-16 md:h-screen md:flex md:items-center md:justify-center px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-white text-2xl md:text-5xl font-light mb-1 md:mb-2">
            Ideas Flow Freely from
          </h2>
          <h2 className="text-white text-2xl md:text-5xl font-light">
            Creative Thinkers
          </h2>
        </div>

        {/* Team Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
          {/* First Row - 2 members */}
          <div className="md:col-span-1 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="p-3 md:p-4">
              <h3 className="text-black text-base md:text-lg font-medium mb-0.5">{teamMembers[0].name}</h3>
              <p className="text-black/60 text-xs">{teamMembers[0].role}</p>
            </div>
            <div className="relative w-full h-48 mt-auto">
              <Image
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                fill
                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Center Featured Card - Larger */}
          <div className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="p-3 md:p-4">
              <h3 className="text-white text-base md:text-lg font-medium mb-0.5">{teamMembers[1].name}</h3>
              <p className="text-white/60 text-xs mb-1 md:mb-2">{teamMembers[1].role}</p>
              <p className="text-white/70 text-xs leading-relaxed hidden md:block">
                Expert in turning strategic vision into meaningful growth using smart planning, organization, and market insights.
              </p>
            </div>
            <div className="relative w-full h-48 md:h-full md:mt-auto">
              <Image
                src={teamMembers[1].mobileImage || teamMembers[1].image}
                alt={teamMembers[1].name}
                fill
                className="object-contain md:object-cover object-bottom group-hover:scale-101 transition-transform duration-300 md:hidden"
                sizes="100vw"
              />
              <Image
                src={teamMembers[1].image}
                alt={teamMembers[1].name}
                fill
                className="object-cover object-bottom group-hover:scale-101 transition-transform duration-300 hidden md:block"
                sizes="33vw"
              />
            </div>
          </div>

          <div className="md:col-span-1 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="p-3 md:p-4">
              <h3 className="text-black text-base md:text-lg font-medium mb-0.5">{teamMembers[2].name}</h3>
              <p className="text-black/60 text-xs">{teamMembers[2].role}</p>
            </div>
            <div className="relative w-full h-48 mt-auto">
              <Image
                src={teamMembers[2].image}
                alt={teamMembers[2].name}
                fill
                className="object-contain object-bottom group-hover:scale-101 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Second Row - 2 members */}
          <div className="md:col-span-1 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="p-3 md:p-4">
              <h3 className="text-black text-base md:text-lg font-medium mb-0.5">{teamMembers[3].name}</h3>
              <p className="text-black/60 text-xs">{teamMembers[3].role}</p>
            </div>
            <div className="relative w-full h-48 mt-auto">
              <Image
                src={teamMembers[3].image}
                alt={teamMembers[3].name}
                fill
                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="md:col-span-1 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="p-3 md:p-4">
              <h3 className="text-black text-base md:text-lg font-medium mb-0.5">{teamMembers[4].name}</h3>
              <p className="text-black/60 text-xs">{teamMembers[4].role}</p>
            </div>
            <div className="relative w-full h-48 mt-auto">
              <Image
                src={teamMembers[4].image}
                alt={teamMembers[4].name}
                fill
                className="object-contain object-bottom group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
