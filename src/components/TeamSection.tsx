'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 'sunny',
    index: '01',
    name: 'Sunny Kalra',
    role: 'Chief Growth Strategist',
    image: '/team/sunny_kalra.png',
    bio: 'A decade building industrial and infrastructure businesses across North India. At Yoshinova, Sunny shapes how the business grows — ensuring every engagement creates long-term client value, not just a single transaction.',
    featured: false,
    area: 'sunny',
  },
  {
    id: 'sandeep',
    index: '02',
    name: 'Sandeep Agarwal',
    role: 'Founder & CEO',
    image: '/team/sandeep_kalra.png',
    mobileImage: '/team/sandeep_kalra_mobile.png',
    bio: '18 years in industrial energy management. Personally conducted 200+ floor-level energy audits across Delhi NCR, Haryana, and Punjab before founding Yoshinova. His conviction: no facility owner should buy a BESS based on a promise — they should buy it on data.',
    featured: true,
    area: 'sandeep',
  },
  {
    id: 'mohit',
    index: '03',
    name: 'Mohit Bhaiya',
    role: 'CFO',
    image: '/team/mohit.png',
    bio: 'Structures financing models that let MSME facility owners fund BESS deployments from the savings they generate — making the right decision the easy decision.',
    featured: false,
    area: 'mohit',
  },
  {
    id: 'sambhav',
    index: '04',
    name: 'Sambhav Bhaiya',
    role: 'COO',
    image: '/team/sambhav.png',
    bio: 'Runs the operational backbone — audit scheduling, deployment logistics, and post-installation support. Every timeline and quality commitment Yoshinova makes is Sambhav\'s to deliver.',
    featured: false,
    area: 'sambhav',
  },
  {
    id: 'shourya',
    index: '05',
    name: 'Shourya K. Chirania',
    role: 'CTO',
    image: '/team/shourya.png',
    bio: 'Built the proprietary load analysis methodology behind Yoshinova\'s data-driven BESS sizing, and the real-time monitoring platform tracking every rupee of savings post-deployment.',
    featured: false,
    area: 'shourya',
  },
];

export default function TeamSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      style={{
        background: '#080808',
        padding: '80px 24px 96px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,124,31,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1160px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <p style={{
            color: '#4a7c1f',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            margin: '0 0 14px',
          }}>
            The Team
          </p>
          <h2 style={{
            color: '#ffffff',
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            fontWeight: 300,
            lineHeight: 1.12,
            letterSpacing: '-0.025em',
            margin: 0,
          }}>
            People who've stood on{' '}
            <em style={{ color: '#4a7c1f', fontStyle: 'normal', fontWeight: 500 }}>factory floors</em>
            <br />
            and fixed real problems.
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          className="team-bento"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateAreas: `
              "sunny  sandeep  shourya"
              "mohit  sandeep  sambhav"
            `,
            gap: '10px',
          }}
        >
          {teamMembers.map((member) => {
            const isHovered = hoveredId === member.id;
            const isFeatured = member.featured;
            const cardBg = isFeatured ? '#0d1a08' : '#101010';

            return (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  gridArea: member.area,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  background: cardBg,
                  border: `1px solid ${
                    isFeatured
                      ? isHovered ? 'rgba(74,124,31,0.6)' : 'rgba(74,124,31,0.3)'
                      : isHovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'
                  }`,
                  minHeight: isFeatured ? '500px' : '250px',
                  transition: 'transform 0.35s cubic-bezier(0.23,1,0.32,1), border-color 0.3s ease, box-shadow 0.35s ease',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? isFeatured
                      ? '0 20px 60px rgba(74,124,31,0.2), 0 0 0 1px rgba(74,124,31,0.15)'
                      : '0 16px 40px rgba(0,0,0,0.6)'
                    : 'none',
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: isFeatured ? '2px' : '1px',
                  background: isFeatured
                    ? 'linear-gradient(90deg, transparent, #4a7c1f 30%, #6ab32a 60%, transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
                  transition: 'opacity 0.3s ease',
                  opacity: isHovered ? 1 : 0.6,
                }} />

                {/* Text Content */}
                <div style={{
                  padding: isFeatured ? '26px 26px 18px' : '18px 18px 12px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                }}>
                  {/* Index + Role row */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '14px',
                  }}>
                    <span style={{
                      fontFamily: '"Courier New", monospace',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#4a7c1f',
                      letterSpacing: '0.08em',
                    }}>
                      {member.index}
                    </span>
                    <span style={{
                      fontSize: '9px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: isFeatured ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.3)',
                      border: `1px solid ${isFeatured ? 'rgba(74,124,31,0.35)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '4px',
                      padding: '3px 7px',
                    }}>
                      {member.role}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 style={{
                    color: '#f0f0f0',
                    fontSize: isFeatured ? '24px' : '17px',
                    fontWeight: isFeatured ? 500 : 400,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    margin: '0 0 10px',
                  }}>
                    {member.name}
                  </h3>

                  {/* Bio */}
                  <p style={{
                    color: isFeatured ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.38)',
                    fontSize: isFeatured ? '13.5px' : '11.5px',
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {member.bio}
                  </p>

                  {isFeatured && (
                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#4a7c1f',
                        boxShadow: '0 0 10px rgba(74,124,31,0.9)',
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: '10px',
                        color: '#4a7c1f',
                        fontWeight: 600,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                      }}>
                        Leads every audit personally
                      </span>
                    </div>
                  )}
                </div>

                {/* Photo */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: isFeatured ? '280px' : '120px',
                  flexShrink: 0,
                  overflow: 'hidden',
                }}>
                  {/* Fade in from card bg */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: ``,
                    zIndex: 2,
                    pointerEvents: 'none',
                  }} />

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'bottom center',
                      transition: 'transform 0.4s cubic-bezier(0.23,1,0.32,1)',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                    sizes={isFeatured ? '400px' : '200px'}
                  />

                  {/* Bottom vignette */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: `linear-gradient(to top, ${cardBg}, transparent)`,
                    zIndex: 2,
                    pointerEvents: 'none',
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .team-bento {
            grid-template-columns: 1fr 1fr !important;
            grid-template-areas:
              "sandeep sandeep"
              "sunny   shourya"
              "mohit   sambhav" !important;
          }
        }
        @media (max-width: 560px) {
          .team-bento {
            grid-template-columns: 1fr !important;
            grid-template-areas:
              "sandeep"
              "sunny"
              "shourya"
              "mohit"
              "sambhav" !important;
          }
        }
      `}</style>
    </section>
  );
}