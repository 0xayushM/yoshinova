"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

/* ─── Scroll boundaries ─── */
// Matches rigHelpers: S(n) = n/12
// Card visible ONLY when the house model is on screen (Section 4 = segment 2)
const S = (n: number) => n / 12;
const SEC_START = S(2);
const SEC_END = S(3);
const SEC_LEN = SEC_END - SEC_START;

const ENTER_START = SEC_START;
const ENTER_END = SEC_START + SEC_LEN * 0.15;
const EXIT_START = SEC_END - SEC_LEN * 0.15;
const EXIT_END = SEC_END;

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

/* ─── Flatline Graph (SVG) ─── */
const FlatlineGraph = () => {
  const w = 380;
  const h = 140;
  const pl = 44;
  const pr = 14;
  const pt = 20;
  const pb = 28;
  const gw = w - pl - pr;
  const gh = h - pt - pb;

  const xAt = (frac: number) => pl + frac * gw;
  const yAt = (val: number) => pt + gh * (1 - val);

  const gridPath = `M${xAt(0)} ${yAt(1)} L${xAt(0.38)} ${yAt(1)} L${xAt(0.42)} ${yAt(0)} L${xAt(1)} ${yAt(0)}`;
  const homePath = `M${xAt(0)} ${yAt(1)} L${xAt(0.39)} ${yAt(1)} Q${xAt(0.41)} ${yAt(0.93)},${xAt(0.43)} ${yAt(1)} L${xAt(1)} ${yAt(1)}`;

  const yLabels = [
    { label: "100%", val: 1 },
    { label: "50%", val: 0.5 },
    { label: "0%", val: 0 },
  ];
  const xLabels = [
    { label: "00:00", frac: 0 },
    { label: "06:00", frac: 0.25 },
    { label: "12:00", frac: 0.5 },
    { label: "18:00", frac: 0.75 },
    { label: "23:59", frac: 1 },
  ];

  return (
    <div className="w-full">
      {/* Legend */}
      <div className="flex items-center gap-5 mb-2 text-[10px] px-1">
        <span className="flex items-center gap-1.5 text-neutral-500">
          <span className="inline-block w-4 h-[2px] rounded-full" style={{ background: "#ef4444" }} />
          Grid Power
        </span>
        <span className="flex items-center gap-1.5 text-neutral-500">
          <span className="inline-block w-4 h-[2px] rounded-full" style={{ background: "#10b981" }} />
          Home Power
        </span>
      </div>

      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.04))" }}>
        {/* Background fill */}
        <rect x={pl} y={pt} width={gw} height={gh} fill="rgba(248,250,252,0.5)" rx={4} />

        {/* Grid lines */}
        {yLabels.map((yl) => (
          <line key={yl.label} x1={pl} x2={w - pr} y1={yAt(yl.val)} y2={yAt(yl.val)} stroke="#e2e8f0" strokeWidth={0.6} strokeDasharray="4 3" />
        ))}

        {/* Y labels */}
        {yLabels.map((yl) => (
          <text key={yl.label} x={pl - 6} y={yAt(yl.val) + 3} textAnchor="end" fill="#94a3b8" fontSize={8} fontFamily="monospace">
            {yl.label}
          </text>
        ))}

        {/* X labels */}
        {xLabels.map((xl) => (
          <text key={xl.label} x={xAt(xl.frac)} y={h - 6} textAnchor="middle" fill="#94a3b8" fontSize={8} fontFamily="monospace">
            {xl.label}
          </text>
        ))}

        {/* Blackout zone */}
        <rect x={xAt(0.42)} y={pt} width={xAt(1) - xAt(0.42)} height={gh} fill="rgba(239,68,68,0.04)" rx={2} />
        <line x1={xAt(0.42)} y1={pt} x2={xAt(0.42)} y2={pt + gh} stroke="#ef4444" strokeWidth={0.8} strokeDasharray="4 2" opacity={0.6} />
        <text x={xAt(0.55)} y={pt + gh / 2 + 3} textAnchor="middle" fill="#ef4444" fontSize={7} fontWeight={700} letterSpacing="0.08em" opacity={0.5}>
          BLACKOUT ZONE
        </text>

        {/* Grid power (red) — with gradient */}
        <defs>
          <linearGradient id="gridGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="40%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#f87171" />
          </linearGradient>
          <linearGradient id="homeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <path d={gridPath} fill="none" stroke="url(#gridGrad)" strokeWidth={2.5} strokeLinecap="round" />
        <path d={homePath} fill="none" stroke="url(#homeGrad)" strokeWidth={2.5} strokeLinecap="round" />

        {/* Pulse dot on home power line at blackout point */}
        <circle cx={xAt(0.43)} cy={yAt(1)} r={3.5} fill="#10b981" opacity={0.3}>
          <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx={xAt(0.43)} cy={yAt(1)} r={2} fill="#10b981" />
      </svg>

      {/* Status badges */}
      <div className="flex items-center justify-between mt-2 px-1">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase"
          style={{ background: "rgba(239,68,68,0.08)", color: "#dc2626" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          Grid Offline
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase"
          style={{ background: "rgba(16,185,129,0.08)", color: "#059669" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Home Stable
        </span>
      </div>
    </div>
  );
};

/* ─── Fixed-overlay BESS Card ─── */
export default function BESSCard() {
  const [expanded, setExpanded] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const offset: number = (e as CustomEvent).detail?.offset ?? 0;
      if (!cardRef.current) return;

      const SLIDE = 50;
      let translateY = SLIDE;
      let opacity = 0;

      if (offset < ENTER_START) {
        translateY = SLIDE;
        opacity = 0;
      } else if (offset < ENTER_END) {
        const t = clamp01((offset - ENTER_START) / (ENTER_END - ENTER_START));
        translateY = SLIDE * (1 - t);
        opacity = t;
      } else if (offset < EXIT_START) {
        translateY = 0;
        opacity = 1;
      } else if (offset < EXIT_END) {
        const t = clamp01((offset - EXIT_START) / (EXIT_END - EXIT_START));
        translateY = SLIDE * t;
        opacity = 1 - t;
      } else {
        translateY = SLIDE;
        opacity = 0;
      }

      const isVisible = opacity > 0.01;
      cardRef.current.style.transform = `translateY(${translateY}px)`;
      cardRef.current.style.opacity = `${opacity}`;
      cardRef.current.style.pointerEvents = isVisible ? "auto" : "none";
    };

    window.addEventListener("drei-scroll", handleScroll);
    return () => window.removeEventListener("drei-scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 will-change-transform"
      style={{
        width: "min(400px, calc(100vw - 48px))",
        transform: "translateY(50px)",
        opacity: 0,
        pointerEvents: "none",
      }}
    >
      <div
        className="rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
        style={{
          background: "rgba(255,255,255,0.78)",
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          border: "1px solid rgba(255,255,255,0.5)",
        }}
      >
        {/* Accent top bar */}
        <div className="h-[3px]" style={{ background: "linear-gradient(90deg, #10b981, #34d399, #6ee7b7)" }} />

        {/* ── Header ── */}
        <div className="px-5 pt-4 pb-1 flex items-start justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-emerald-600">
              Residential
            </span>
            <h2 className="text-[22px] md:text-[26px] font-bold text-neutral-900 leading-tight mt-0.5">
              Uninterrupted Living
            </h2>
          </div>
          <span className="text-[10px] font-mono text-neutral-300 mt-1">
            01
          </span>
        </div>

        {/* ── Collapsible body ── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="card-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <p className="px-5 pt-2 text-[12px] leading-[1.7] text-neutral-500">
                Blackouts shouldn&apos;t pause your life. Yoshinova detects grid failure
                in <span className="text-neutral-800 font-semibold">&lt;10 milliseconds</span>,
                switching to battery power instantly. Your Wi-Fi, AC, and security
                systems never even blink.
              </p>

              {/* Graph */}
              <div className="px-5 pt-3 pb-2">
                <FlatlineGraph />
              </div>

              {/* Key stat */}
              <div className="mx-5 mb-4 mt-1 px-4 py-3 rounded-xl" style={{ background: "rgba(16,185,129,0.06)" }}>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-emerald-600 tracking-tight" style={{ fontVariantNumeric: "tabular-nums" }}>
                    &lt;10 μs
                  </span>
                  <span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                    switchover
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  Seamless transfer to battery — zero disruption to your home.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Toggle button ── */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-2.5 hover:bg-white/50 transition-colors cursor-pointer"
          style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
        >
          <span className="text-[11px] font-medium text-neutral-400 tracking-wide">
            {expanded ? "Hide Info" : "Show Info"}
          </span>
          {expanded ? (
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          ) : (
            <ChevronUp className="w-3.5 h-3.5 text-neutral-400" />
          )}
        </button>
      </div>
    </div>
  );
}
