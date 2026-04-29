"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Solar generation curve + day/night flow.
 * Sun → panels → BESS → home/factory (used 24/7)
 */
export default function SolarFlow() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to('.sun-rays', {
        rotation: 360,
        duration: 24,
        repeat: -1,
        transformOrigin: '120px 90px',
        ease: 'none',
      });

      gsap.to('.sun-glow', {
        opacity: 0.6,
        scale: 1.05,
        transformOrigin: '120px 90px',
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      gsap.to('.solar-flow', {
        strokeDashoffset: -200,
        duration: 2.2,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.daynight-marker', {
        cx: 770,
        duration: 12,
        repeat: -1,
        ease: 'none',
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 900 420"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="solarPanel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="solarCurveFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sun (top-left) */}
      <g>
        <circle className="sun-glow" cx="120" cy="90" r="60" fill="url(#sunGlow)" />
        <g className="sun-rays" style={{ transformOrigin: '120px 90px' }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="120"
              y1="50"
              x2="120"
              y2="40"
              stroke="#fbbf24"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${i * 30}, 120, 90)`}
            />
          ))}
        </g>
        <circle cx="120" cy="90" r="22" fill="#fbbf24" />
        <circle cx="120" cy="90" r="14" fill="#fde68a" />
        <text x="120" y="160" textAnchor="middle" fontSize="10" fill="#a16207" fontFamily="monospace" letterSpacing="2">SUN  06:00 - 18:00</text>
      </g>

      {/* Solar panels */}
      <g transform="translate(220, 110)">
        {[0, 1, 2].map(i => (
          <g key={i} transform={`translate(${i * 56}, ${i * 4})`}>
            <path d="M 0 0 L 50 0 L 60 30 L 10 30 Z" fill="url(#solarPanel)" stroke="#0f172a" strokeWidth="1" />
            {/* cells */}
            <line x1="2" y1="10" x2="55" y2="10" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
            <line x1="4" y1="20" x2="57" y2="20" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
            <line x1="20" y1="0" x2="22" y2="30" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
            <line x1="40" y1="0" x2="42" y2="30" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
          </g>
        ))}
        <text x="100" y="-10" textAnchor="middle" fontSize="11" fill="#1e40af" fontFamily="monospace" letterSpacing="2" fontWeight="bold">SOLAR PV</text>
      </g>

      {/* BESS unit */}
      <g transform="translate(420, 90)">
        <text x="60" y="-12" textAnchor="middle" fontSize="11" fill="#4f7a1f" fontFamily="monospace" letterSpacing="2" fontWeight="bold">NOVAGRID</text>
        <rect x="0" y="0" width="120" height="120" rx="6" fill="white" stroke="#7DB840" strokeWidth="2" />
        <rect x="10" y="14" width="32" height="40" rx="2" fill="#7DB840" opacity="0.85" />
        <rect x="46" y="14" width="32" height="40" rx="2" fill="#7DB840" opacity="0.7" />
        <rect x="82" y="14" width="28" height="40" rx="2" fill="#7DB840" opacity="0.55" />
        <rect x="10" y="64" width="100" height="44" rx="3" fill="#0f172a" />
        <text x="60" y="80" textAnchor="middle" fontSize="9" fill="#fbbf24" fontFamily="monospace">SOLAR INPUT</text>
        <text x="60" y="98" textAnchor="middle" fontSize="13" fill="white" fontFamily="monospace" fontWeight="bold">12.4 kW</text>
      </g>

      {/* Home (right) */}
      <g transform="translate(640, 70)">
        <text x="80" y="-15" textAnchor="middle" fontSize="11" fill="#475569" fontFamily="monospace" letterSpacing="2" fontWeight="bold">HOME / SITE</text>
        {/* Roof */}
        <path d="M 20 60 L 80 10 L 140 60 Z" fill="#7c2d12" />
        {/* Body */}
        <rect x="30" y="60" width="100" height="80" fill="#fef3c7" stroke="#92400e" strokeWidth="1" />
        {/* Door */}
        <rect x="70" y="100" width="20" height="40" fill="#7c2d12" />
        {/* Windows */}
        <rect x="42" y="74" width="16" height="16" fill="#fde68a" stroke="#92400e" strokeWidth="0.5" />
        <rect x="102" y="74" width="16" height="16" fill="#fde68a" stroke="#92400e" strokeWidth="0.5" />
        {/* Tree */}
        <circle cx="155" cy="120" r="18" fill="#16a34a" />
        <rect x="153" y="130" width="4" height="12" fill="#7c2d12" />
        <text x="80" y="160" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="monospace">24/7 CLEAN POWER</text>
      </g>

      {/* Flow arrows */}
      {/* Sun to panels */}
      <path className="solar-flow" d="M 160 110 L 220 110" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="8 6" fill="none" />
      {/* Panels to BESS */}
      <path className="solar-flow" d="M 380 130 L 420 140" stroke="#7DB840" strokeWidth="2.5" strokeDasharray="8 6" fill="none" />
      {/* BESS to Home */}
      <path className="solar-flow" d="M 540 150 L 640 130" stroke="#7DB840" strokeWidth="2.5" strokeDasharray="8 6" fill="none" />

      {/* 24-hr profile bottom */}
      <g transform="translate(60, 240)">
        <text x="0" y="-10" fontSize="11" fill="#475569" fontFamily="monospace" letterSpacing="2" fontWeight="bold">24-HR ENERGY PROFILE</text>

        {/* Axes */}
        <line x1="0" y1="100" x2="780" y2="100" stroke="#cbd5e1" strokeWidth="1" />

        {/* Day band */}
        <rect x="160" y="0" width="380" height="100" fill="#fef3c7" opacity="0.5" />
        <text x="350" y="14" fontSize="9" fill="#a16207" textAnchor="middle" fontFamily="monospace">DAYTIME — solar generates</text>

        {/* Solar generation curve */}
        <path
          d="M 0 100 L 130 100 Q 200 100 240 50 Q 350 5 470 50 Q 530 100 600 100 L 780 100"
          fill="url(#solarCurveFill)"
          stroke="#fbbf24"
          strokeWidth="2.5"
        />

        {/* Battery state-of-charge curve (green) */}
        <path
          d="M 0 75 L 130 75 Q 200 75 280 35 Q 380 20 480 30 Q 560 55 600 80 L 780 80"
          fill="none"
          stroke="#7DB840"
          strokeWidth="2.5"
          strokeDasharray="0"
        />

        {/* Hour ticks */}
        <text x="0" y="115" fontSize="8" fill="#94a3b8" fontFamily="monospace">00</text>
        <text x="195" y="115" fontSize="8" fill="#94a3b8" fontFamily="monospace">06</text>
        <text x="390" y="115" fontSize="8" fill="#94a3b8" fontFamily="monospace">12</text>
        <text x="585" y="115" fontSize="8" fill="#94a3b8" fontFamily="monospace">18</text>
        <text x="775" y="115" fontSize="8" fill="#94a3b8" fontFamily="monospace">24</text>

        {/* Animated time marker */}
        <line className="daynight-marker" x1="0" y1="0" x2="0" y2="100" stroke="#0f172a" strokeWidth="1.5" />

        {/* Legend */}
        <g transform="translate(0, 140)">
          <line x1="0" y1="0" x2="20" y2="0" stroke="#fbbf24" strokeWidth="2.5" />
          <text x="26" y="4" fontSize="10" fill="#475569" fontFamily="monospace">SOLAR GEN</text>

          <line x1="160" y1="0" x2="180" y2="0" stroke="#7DB840" strokeWidth="2.5" />
          <text x="186" y="4" fontSize="10" fill="#475569" fontFamily="monospace">BATTERY DELIVERY</text>

          <text x="780" y="4" fontSize="11" fill="#4f7a1f" textAnchor="end" fontFamily="monospace" fontWeight="bold">85% SELF-CONSUMPTION</text>
        </g>
      </g>
    </svg>
  );
}
