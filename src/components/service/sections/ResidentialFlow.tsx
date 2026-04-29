"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Residential energy flow:
 * Solar → NovaVault → Home (lights, AC, EV, fridge)
 * Includes day/night load profile + grid as fallback.
 */
export default function ResidentialFlow() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to('.res-flow', {
        strokeDashoffset: -160,
        duration: 2.4,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.res-room-light', {
        opacity: 0.45,
        duration: 1.6,
        yoyo: true,
        repeat: -1,
        stagger: { each: 0.18, from: 'random' },
        ease: 'sine.inOut',
      });

      gsap.to('.res-sun', {
        rotation: 360,
        duration: 30,
        repeat: -1,
        transformOrigin: '90px 80px',
        ease: 'none',
      });

      gsap.to('.res-bess-glow', {
        opacity: 0.55,
        scale: 1.06,
        transformOrigin: 'center',
        duration: 1.6,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
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
        <radialGradient id="res-sun-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="res-bess-glow-grad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#7DB840" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7DB840" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="res-roof" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9a3412" />
          <stop offset="100%" stopColor="#7c2d12" />
        </linearGradient>
        <linearGradient id="res-panel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>

      {/* Sun (top-left) */}
      <g>
        <circle cx="90" cy="80" r="55" fill="url(#res-sun-glow)" />
        <g className="res-sun">
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={i}
              x1="90"
              y1="48"
              x2="90"
              y2="40"
              stroke="#fbbf24"
              strokeWidth="2.5"
              strokeLinecap="round"
              transform={`rotate(${i * 30}, 90, 80)`}
            />
          ))}
        </g>
        <circle cx="90" cy="80" r="20" fill="#fbbf24" />
        <circle cx="90" cy="80" r="13" fill="#fde68a" />
      </g>

      {/* Home with rooftop panels */}
      <g transform="translate(180, 60)">
        <text x="170" y="-15" textAnchor="middle" fontSize="11" fill="#475569" fontFamily="monospace" letterSpacing="2" fontWeight="bold">YOUR HOME</text>

        {/* Roof */}
        <path d="M 30 100 L 170 30 L 310 100 Z" fill="url(#res-roof)" />

        {/* Solar panels on roof */}
        <g transform="translate(105, 50)">
          <g transform="skewX(-30) translate(0,0)">
            <rect x="0" y="0" width="60" height="36" fill="url(#res-panel)" stroke="#0f172a" strokeWidth="0.8" />
            <line x1="0" y1="12" x2="60" y2="12" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
            <line x1="0" y1="24" x2="60" y2="24" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
            <line x1="20" y1="0" x2="20" y2="36" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
            <line x1="40" y1="0" x2="40" y2="36" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
          </g>
        </g>
        <g transform="translate(165, 56)">
          <g transform="skewX(-30) translate(0,0)">
            <rect x="0" y="0" width="60" height="36" fill="url(#res-panel)" stroke="#0f172a" strokeWidth="0.8" />
            <line x1="0" y1="12" x2="60" y2="12" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
            <line x1="0" y1="24" x2="60" y2="24" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
            <line x1="20" y1="0" x2="20" y2="36" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
            <line x1="40" y1="0" x2="40" y2="36" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
          </g>
        </g>

        {/* Body */}
        <rect x="40" y="100" width="260" height="140" fill="#fef3c7" stroke="#92400e" strokeWidth="1.2" />

        {/* Door */}
        <rect x="155" y="180" width="30" height="60" fill="#7c2d12" />
        <circle cx="178" cy="210" r="1.5" fill="#fbbf24" />

        {/* Windows (with light flicker) */}
        <g>
          <rect className="res-room-light" x="60" y="120" width="32" height="32" fill="#fde68a" stroke="#92400e" strokeWidth="0.8" />
          <line x1="76" y1="120" x2="76" y2="152" stroke="#92400e" strokeWidth="0.5" />
          <line x1="60" y1="136" x2="92" y2="136" stroke="#92400e" strokeWidth="0.5" />
        </g>
        <g>
          <rect className="res-room-light" x="105" y="120" width="32" height="32" fill="#fde68a" stroke="#92400e" strokeWidth="0.8" />
          <line x1="121" y1="120" x2="121" y2="152" stroke="#92400e" strokeWidth="0.5" />
          <line x1="105" y1="136" x2="137" y2="136" stroke="#92400e" strokeWidth="0.5" />
        </g>
        <g>
          <rect className="res-room-light" x="200" y="120" width="32" height="32" fill="#fde68a" stroke="#92400e" strokeWidth="0.8" />
          <line x1="216" y1="120" x2="216" y2="152" stroke="#92400e" strokeWidth="0.5" />
          <line x1="200" y1="136" x2="232" y2="136" stroke="#92400e" strokeWidth="0.5" />
        </g>
        <g>
          <rect className="res-room-light" x="245" y="120" width="32" height="32" fill="#fde68a" stroke="#92400e" strokeWidth="0.8" />
          <line x1="261" y1="120" x2="261" y2="152" stroke="#92400e" strokeWidth="0.5" />
          <line x1="245" y1="136" x2="277" y2="136" stroke="#92400e" strokeWidth="0.5" />
        </g>

        {/* Yard */}
        <line x1="0" y1="240" x2="340" y2="240" stroke="#475569" strokeWidth="1" />
        {/* Tree */}
        <circle cx="20" cy="220" r="14" fill="#16a34a" />
        <rect x="18" y="228" width="3" height="12" fill="#7c2d12" />

        {/* EV in driveway */}
        <g transform="translate(260, 220)">
          <rect x="0" y="0" width="44" height="14" rx="3" fill="#0f172a" />
          <rect x="6" y="-8" width="32" height="10" rx="2" fill="#1e293b" />
          <circle cx="10" cy="14" r="4" fill="#1e293b" />
          <circle cx="34" cy="14" r="4" fill="#1e293b" />
          <text x="22" y="-12" textAnchor="middle" fontSize="6" fill="#7DB840" fontFamily="monospace">EV</text>
        </g>
      </g>

      {/* NovaVault BESS unit (right of home, garage-style) */}
      <g transform="translate(620, 130)">
        <circle className="res-bess-glow" cx="60" cy="55" r="80" fill="url(#res-bess-glow-grad)" />
        <text x="60" y="-12" textAnchor="middle" fontSize="11" fill="#4f7a1f" fontFamily="monospace" letterSpacing="2" fontWeight="bold">NOVAVAULT</text>

        {/* Wall-mounted unit */}
        <rect x="0" y="0" width="120" height="110" rx="10" fill="white" stroke="#7DB840" strokeWidth="2" />

        {/* Top status bar */}
        <rect x="10" y="10" width="100" height="6" rx="2" fill="#e2e8f0" />
        <rect x="10" y="10" width="78" height="6" rx="2" fill="#7DB840" />

        {/* Battery cells */}
        <rect x="14" y="24" width="28" height="40" rx="2" fill="#7DB840" opacity="0.85" />
        <rect x="46" y="24" width="28" height="40" rx="2" fill="#7DB840" opacity="0.7" />
        <rect x="78" y="24" width="28" height="40" rx="2" fill="#7DB840" opacity="0.55" />

        {/* Display */}
        <rect x="14" y="72" width="92" height="28" rx="2" fill="#0f172a" />
        <text x="60" y="86" textAnchor="middle" fontSize="9" fill="#7DB840" fontFamily="monospace">●  HOME MODE</text>
        <text x="60" y="96" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace" fontWeight="bold">78% • 9.4 kWh</text>

        <text x="60" y="130" textAnchor="middle" fontSize="9" fill="#475569" fontFamily="monospace">wall-mounted • silent</text>
      </g>

      {/* Flow paths */}
      {/* Sun → roof panels */}
      <path className="res-flow" d="M 130 90 L 270 100" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="8 6" fill="none" />
      {/* Home → BESS (excess solar) */}
      <path className="res-flow" d="M 480 200 Q 560 200 620 200" stroke="#7DB840" strokeWidth="2.5" strokeDasharray="8 6" fill="none" />
      {/* BESS → Home (evening discharge) */}
      <path className="res-flow" d="M 620 230 Q 560 240 480 240" stroke="#7DB840" strokeWidth="2.5" strokeDasharray="8 6" fill="none" opacity="0.65" />

      {/* Bottom 24-hr profile */}
      <g transform="translate(60, 310)">
        <text x="0" y="-10" fontSize="11" fill="#475569" fontFamily="monospace" letterSpacing="2" fontWeight="bold">A DAY IN YOUR HOME</text>

        {/* Axes */}
        <line x1="0" y1="80" x2="780" y2="80" stroke="#cbd5e1" strokeWidth="1" />

        {/* Day band */}
        <rect x="160" y="0" width="380" height="80" fill="#fef3c7" opacity="0.4" />
        <text x="350" y="14" fontSize="9" fill="#a16207" textAnchor="middle" fontFamily="monospace">SOLAR ACTIVE — STORE EXCESS</text>

        {/* Evening peak band */}
        <rect x="540" y="0" width="200" height="80" fill="#7DB840" opacity="0.06" />
        <text x="640" y="14" fontSize="9" fill="#4f7a1f" textAnchor="middle" fontFamily="monospace">EVENING — DISCHARGE STORED</text>

        {/* Solar gen curve */}
        <path
          d="M 0 80 L 130 80 Q 200 80 240 35 Q 350 0 470 35 Q 530 80 600 80 L 780 80"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="2.5"
        />

        {/* Home consumption curve */}
        <path
          d="M 0 60 Q 80 70 160 55 Q 240 50 320 60 Q 400 65 500 50 Q 580 25 650 30 Q 720 50 780 60"
          fill="none"
          stroke="#0f172a"
          strokeWidth="2"
          strokeDasharray="3 3"
          opacity="0.7"
        />

        {/* Hour labels */}
        <text x="0" y="95" fontSize="8" fill="#94a3b8" fontFamily="monospace">00</text>
        <text x="195" y="95" fontSize="8" fill="#94a3b8" fontFamily="monospace">06</text>
        <text x="390" y="95" fontSize="8" fill="#94a3b8" fontFamily="monospace">12</text>
        <text x="585" y="95" fontSize="8" fill="#94a3b8" fontFamily="monospace">18</text>
        <text x="775" y="95" fontSize="8" fill="#94a3b8" fontFamily="monospace">24</text>

        {/* Legend */}
        <g transform="translate(0, 110)">
          <line x1="0" y1="0" x2="20" y2="0" stroke="#fbbf24" strokeWidth="2.5" />
          <text x="26" y="4" fontSize="10" fill="#475569" fontFamily="monospace">SOLAR GEN</text>

          <line x1="160" y1="0" x2="180" y2="0" stroke="#0f172a" strokeWidth="2" strokeDasharray="3 3" />
          <text x="186" y="4" fontSize="10" fill="#475569" fontFamily="monospace">HOME LOAD</text>

          <text x="780" y="4" fontSize="11" fill="#4f7a1f" textAnchor="end" fontFamily="monospace" fontWeight="bold">~50% BILL REDUCTION</text>
        </g>
      </g>
    </svg>
  );
}
