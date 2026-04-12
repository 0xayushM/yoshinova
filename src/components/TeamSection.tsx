'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 'sandeep',
    index: '01',
    name: 'Sandeep Agarwal',
    role: 'Founder & CEO',
    years: '18',
    yearsSub: 'years on factory floors',
    stat2: '200+',
    stat2Sub: 'energy assessments, personally conducted',
    quote: 'No facility owner should buy a BESS on a promise. Buy it on data — your data, from your facility.',
    image: '/team/sandeep_kalra.png',
    bio: 'Sandeep spent 18 years in industrial energy management before founding Yoshinova, working across manufacturing plants in Delhi NCR, Haryana, and Punjab. He has seen firsthand the gap between what installers promise and what facilities actually experience. He founded Yoshinova after one conversation too many with a factory owner who had bought an expensive BESS based on projected savings that never materialised. Sandeep leads every strategic client engagement and designed the audit methodology that underlies Yoshinova\'s ROI guarantee.',
    featured: true,
  },
  {
    id: 'sunny',
    index: '02',
    name: 'Sunny Kalra',
    role: 'Chief Growth Strategist',
    years: '10',
    yearsSub: 'years building industrial markets, North India',
    quote: 'Growth that doesn\'t create retention isn\'t growth worth having.',
    image: '/team/sunny_kalra.png',
    bio: 'A decade building industrial and infrastructure businesses across North India, helping companies navigate the gap between technology capability and market readiness. At Yoshinova, Sunny shapes how the business grows — which clients we pursue, how we position our offering, and how we build relationships that generate long-term value rather than single transactions.',
    featured: false,
  },
  {
    id: 'shourya',
    index: '03',
    name: 'Shourya K. Chirania',
    role: 'CTO',
    years: '—',
    yearsSub: 'Power electronics & energy systems engineering',
    quote: 'If the system isn\'t performing exactly as the audit predicted, the audit wasn\'t done properly.',
    image: '/team/shourya.png',
    bio: 'Shourya is the technical backbone of Yoshinova\'s BESS deployment capability. He oversees all system integration, hardware selection, and deployment quality — ensuring every system performs exactly as the audit predicted. He developed the proprietary load analysis methodology that enables Yoshinova\'s data-driven sizing process, and built the real-time monitoring platform giving clients live visibility into savings capture.',
    featured: false,
  },
  {
    id: 'mohit',
    index: '04',
    name: 'Mohit Bhaiya',
    role: 'CFO',
    years: '12',
    yearsSub: 'years in infrastructure financial strategy',
    quote: 'Good financial engineering should make the right decision easier, not harder.',
    image: '/team/mohit.png',
    bio: 'Mohit manages Yoshinova\'s financial strategy with a focus on making energy storage accessible to MSME clients who have historically been priced out of premium solutions. He has structured financing partnerships and flexible deployment models that allow facility owners to fund BESS installations from the savings they generate — rather than requiring large upfront capital.',
    featured: false,
  },
  {
    id: 'sambhav',
    index: '05',
    name: 'Sambhav Bhaiya',
    role: 'COO',
    years: '10',
    yearsSub: 'years in operations & infrastructure delivery',
    quote: 'Every timeline and quality commitment Yoshinova makes is ultimately mine to deliver.',
    image: '/team/sambhav.png',
    bio: 'Sambhav runs the operational engine of Yoshinova — audit scheduling, deployment logistics, installation quality, and post-deployment support. He has built the systems and partner network that allow Yoshinova to audit and deploy across Delhi NCR, Haryana, Punjab, and Rajasthan with consistent quality.',
    featured: false,
  },
];

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="bg-[#080808] relative overflow-hidden">

      {/* ── Section header ── */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-14 pt-20 md:pt-28">
        <p className="text-[#6A9F30] text-[11px] font-semibold uppercase tracking-[0.22em] mb-5">
          The Team
        </p>
        <h2 className="text-white font-light leading-[1.05] tracking-tight"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}>
          Every person here has stood on a factory floor<br className="hidden md:block" />
          <span className="text-[#6A9F30]"> and fixed real problems.</span>
        </h2>
      </div>

      {/* ── Roster ── */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-14 mt-16 pb-24">

        {/* ─────────── FEATURED — Sandeep ─────────── */}
        {teamMembers.filter(m => m.featured).map(member => {
          const active = hoveredId === member.id;
          return (
            <div
              key={member.id}
              className="border-t border-white/10 pt-12 md:pt-16 pb-14 md:pb-20"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-10 md:gap-16 items-end">

                {/* Left — all the text */}
                <div>
                  {/* Role label */}
                  <p className="text-[#6A9F30] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
                    {member.index} &nbsp;·&nbsp; {member.role}
                  </p>

                  {/* Giant name — split for visual weight */}
                  <div className="mb-8">
                    <h3
                      className="text-white font-light tracking-tight leading-none uppercase"
                      style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
                    >
                      {member.name.split(' ')[0]}
                    </h3>
                    <h3
                      className="font-light tracking-tight leading-none uppercase"
                      style={{
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        color: 'rgba(255,255,255,0.35)',
                      }}
                    >
                      {member.name.split(' ').slice(1).join(' ')}
                    </h3>
                  </div>

                  {/* Stats bar */}
                  <div className="flex flex-wrap gap-x-10 gap-y-3 border-t border-b border-white/10 py-5 mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#8BC34A] font-semibold" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                        {member.years}
                      </span>
                      <span className="text-white/40 text-sm">{member.yearsSub}</span>
                    </div>
                    {member.stat2 && (
                      <div className="flex items-baseline gap-2">
                        <span className="text-[#8BC34A] font-semibold" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
                          {member.stat2}
                        </span>
                        <span className="text-white/40 text-sm">{member.stat2Sub}</span>
                      </div>
                    )}
                  </div>

                  {/* Bio */}
                  <p className="text-white/55 leading-[1.8] mb-8"
                    style={{ fontSize: 'clamp(0.875rem, 1.1vw, 1rem)', maxWidth: '60ch' }}>
                    {member.bio}
                  </p>

                  {/* Pull quote */}
                  <blockquote className="border-l-[3px] border-[#6A9F30] pl-6">
                    <p className="text-white/80 font-light italic leading-snug"
                      style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}>
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </blockquote>
                </div>

                {/* Right — portrait */}
                <div className="relative self-end">
                  <div className="relative w-full overflow-hidden" style={{ height: 'clamp(260px, 35vw, 400px)' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain object-bottom"
                      style={{
                        filter: active ? 'grayscale(0%)' : 'grayscale(25%)',
                        transition: 'filter 0.6s ease, transform 0.6s ease',
                        transform: active ? 'scale(1.03)' : 'scale(1)',
                      }}
                      sizes="280px"
                    />
                    {/* Foot fade */}
                    <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ─────────── NON-FEATURED MEMBERS ─────────── */}
        {teamMembers.filter(m => !m.featured).map((member) => {
          const active = hoveredId === member.id;
          return (
            <div
              key={member.id}
              className="border-t border-white/10 py-10 md:py-14 group cursor-default"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Mobile: name + portrait side-by-side header row */}
              <div className="flex items-start justify-between gap-4 md:hidden mb-4">
                <div className="flex-1 min-w-0">
                  <p className="text-[#6A9F30] text-[10px] uppercase tracking-[0.25em] font-semibold mb-2">
                    {member.role}
                  </p>
                  <h3 className="text-white font-light tracking-tight leading-[1.1] mb-1"
                    style={{ fontSize: 'clamp(1.6rem, 6vw, 2rem)' }}>
                    {member.name}
                  </h3>
                  <p className="text-white/30 text-xs tracking-wide">{member.yearsSub}</p>
                </div>
                {/* Mobile portrait */}
                <div
                  className="relative flex-shrink-0 overflow-hidden transition-all duration-500"
                  style={{
                    width: '96px',
                    height: '120px',
                    borderRadius: '3px',
                    border: active
                      ? '1px solid rgba(106,159,48,0.45)'
                      : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-bottom"
                    style={{
                      filter: active ? 'grayscale(0%)' : 'grayscale(55%)',
                      transition: 'filter 0.5s ease',
                    }}
                    sizes="96px"
                  />
                  <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Desktop: full 4-col grid */}
              <div className="hidden md:grid md:grid-cols-[48px_1fr_auto_140px] gap-x-10 items-start">

                {/* Index */}
                <div className="flex items-start pt-1">
                  <span
                    className="font-mono text-[11px] tracking-[0.12em] transition-colors duration-300"
                    style={{ color: active ? '#6A9F30' : 'rgba(255,255,255,0.15)' }}
                  >
                    {member.index}
                  </span>
                </div>

                {/* Name + bio column */}
                <div>
                  <p className="text-[#6A9F30] text-[10px] uppercase tracking-[0.25em] font-semibold mb-2">
                    {member.role}
                  </p>
                  <h3
                    className="text-white font-light tracking-tight leading-none mb-1 transition-colors duration-300"
                    style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)' }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-white/30 text-xs mb-5 tracking-wide">{member.yearsSub}</p>
                  <p className="text-white/50 text-sm leading-[1.85]" style={{ maxWidth: '55ch' }}>
                    {member.bio}
                  </p>
                  {/* Quote — slides in on hover */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-out"
                    style={{
                      maxHeight: active ? '80px' : '0px',
                      opacity: active ? 1 : 0,
                      marginTop: active ? '18px' : '0px',
                    }}
                  >
                    <p className="text-white/60 text-sm italic border-l-2 border-[#6A9F30] pl-4 leading-relaxed">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Years stat */}
                <div className="flex flex-col items-end justify-start pt-1">
                  {member.years !== '—' ? (
                    <>
                      <span
                        className="font-light leading-none transition-colors duration-300"
                        style={{
                          fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                          color: active ? '#8BC34A' : 'rgba(255,255,255,0.12)',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        {member.years}
                      </span>
                      <span className="text-white/20 text-[10px] uppercase tracking-widest mt-1">yrs exp.</span>
                    </>
                  ) : (
                    <span className="font-light leading-none"
                      style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'rgba(255,255,255,0.08)' }}>
                      —
                    </span>
                  )}
                </div>

                {/* Portrait */}
                <div className="relative self-start">
                  <div
                    className="relative overflow-hidden transition-all duration-500"
                    style={{
                      width: '140px',
                      height: '175px',
                      borderRadius: '3px',
                      border: active
                        ? '1px solid rgba(106,159,48,0.45)'
                        : '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain object-bottom"
                      style={{
                        filter: active ? 'grayscale(0%)' : 'grayscale(55%)',
                        transition: 'filter 0.5s ease, transform 0.5s ease',
                        transform: active ? 'scale(1.04)' : 'scale(1)',
                      }}
                      sizes="140px"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Mobile bio + quote (below the header row) */}
              <div className="md:hidden">
                <p className="text-white/50 text-sm leading-[1.85]">{member.bio}</p>
                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{
                    maxHeight: active ? '80px' : '0px',
                    opacity: active ? 1 : 0,
                    marginTop: active ? '14px' : '0px',
                  }}
                >
                  <p className="text-white/60 text-sm italic border-l-2 border-[#6A9F30] pl-4 leading-relaxed">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom rule */}
        <div className="border-t border-white/10" />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .team-years-stat { display: none; }
        }
      `}</style>
    </section>
  );
}
