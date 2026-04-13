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
    image: '/team/sandeep_agarwal.png',
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
    stat2: '50+',
    stat2Sub: 'client relationships managed',
    quote: 'Growth that doesn\'t create retention isn\'t growth worth having.',
    image: '/team/sunny_kalra.png',
    bio: 'A decade building industrial and infrastructure businesses across North India, helping companies navigate the gap between technology capability and market readiness. At Yoshinova, Sunny shapes how the business grows — which clients we pursue, how we position our offering, and how we build relationships that generate long-term value rather than single transactions.',
    featured: true,
  },
  {
    id: 'mohit',
    index: '04',
    name: 'Mohit Bansal',
    role: 'CFO',
    years: '12',
    yearsSub: 'years in infrastructure financial strategy',
    stat2: '30%',
    stat2Sub: 'avg. capex reduction via financing',
    quote: 'Good financial engineering should make the right decision easier, not harder.',
    image: '/team/mohit_bansal.png',
    bio: 'Mohit manages Yoshinova\'s financial strategy with a focus on making energy storage accessible to MSME clients who have historically been priced out of premium solutions. He has structured financing partnerships and flexible deployment models that allow facility owners to fund BESS installations from the savings they generate — rather than requiring large upfront capital.',
    featured: true,
  },
  {
    id: 'sambhav',
    index: '05',
    name: 'Sambhav Chaddha',
    role: 'COO',
    years: '10',
    yearsSub: 'years in operations & infrastructure delivery',
    stat2: '4',
    stat2Sub: 'states operational across North India',
    quote: 'Every timeline and quality commitment Yoshinova makes is ultimately mine to deliver.',
    image: '/team/sambhav_chadda.png',
    bio: 'Sambhav runs the operational engine of Yoshinova — audit scheduling, deployment logistics, installation quality, and post-deployment support. He has built the systems and partner network that allow Yoshinova to audit and deploy across Delhi NCR, Haryana, Punjab, and Rajasthan with consistent quality.',
    featured: true,
  },
  {
    id: 'shourya',
    index: '03',
    name: 'Shourya K. Chirania',
    role: 'CTO',
    years: '—',
    yearsSub: 'Power electronics & energy systems engineering',
    stat2: '100%',
    stat2Sub: 'system performance guarantee',
    quote: 'If the system isn\'t performing exactly as the audit predicted, the audit wasn\'t done properly.',
    image: '/team/shourya_k_chirania.png',
    bio: 'Shourya is the technical backbone of Yoshinova\'s BESS deployment capability. He oversees all system integration, hardware selection, and deployment quality — ensuring every system performs exactly as the audit predicted. He developed the proprietary load analysis methodology that enables Yoshinova\'s data-driven sizing process, and built the real-time monitoring platform giving clients live visibility into savings capture.',
    featured: true,
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

        {/* ─────────── ALL TEAM MEMBERS ─────────── */}
        {teamMembers.map(member => {
          const active = hoveredId === member.id;
          return (
            <div
              key={member.id}
              className="border-t border-white/10 pt-12 md:pt-16 pb-14 md:pb-20"
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-10 md:gap-12 items-end">

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
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                    >
                      {member.name.split(' ')[0]}
                    </h3>
                    <h3
                      className="font-light tracking-tight leading-none uppercase"
                      style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
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
                  <div className="relative w-full overflow-hidden" style={{ height: 'clamp(320px, 42vw, 480px)' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain object-bottom"
                      style={{
                        filter: 'grayscale(0%)',
                        transition: 'filter 0.6s ease, transform 0.6s ease',
                        transform: active ? 'scale(1.03)' : 'scale(1)',
                      }}
                      sizes="340px"
                    />
                  </div>
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
