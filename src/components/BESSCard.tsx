"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import BESSComparisonChart from "./BESSComparisonChart";
import type { BESSZoneData } from "@/utils/bessData";

// ── Stat icon SVGs (minimal line icons) ──
const StatIcon: React.FC<{ type: string; color: string }> = ({ type, color }) => {
  const props = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (type) {
    case "peak":
      return <svg {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>;
    case "backup":
      return <svg {...props}><rect x="6" y="7" width="12" height="13" rx="1" /><line x1="10" y1="3" x2="10" y2="7" /><line x1="14" y1="3" x2="14" y2="7" /><line x1="10" y1="13" x2="10" y2="16" /><line x1="14" y1="13" x2="14" y2="16" /></svg>;
    case "co2":
      return <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M8 12a4 4 0 0 1 8 0" /><line x1="12" y1="8" x2="12" y2="12" /></svg>;
    case "cost":
      return <svg {...props}><line x1="12" y1="2" x2="12" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>;
    case "uptime":
      return <svg {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
    case "solar":
      return <svg {...props}><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="6.34" y2="6.34" /><line x1="17.66" y1="17.66" x2="19.07" y2="19.07" /><line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" /><line x1="4.93" y1="19.07" x2="6.34" y2="17.66" /><line x1="17.66" y1="6.34" x2="19.07" y2="4.93" /></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10" /></svg>;
  }
};

// ── Animated counter hook ──
function useAnimatedCounter(target: number, isActive: boolean, duration = 1.2): number {
  const [value, setValue] = useState(0);
  const tweenObj = useRef({ v: 0 });
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (isActive) {
      tweenObj.current.v = 0;
      tweenRef.current = gsap.to(tweenObj.current, {
        v: target,
        duration,
        ease: "power2.out",
        onUpdate: () => setValue(Math.round(tweenObj.current.v)),
      });
    } else {
      tweenRef.current?.kill();
      tweenObj.current.v = 0;
      setValue(0);
    }
    return () => { tweenRef.current?.kill(); };
  }, [isActive, target, duration]);

  return value;
}

export interface BESSCardProps {
  zone: BESSZoneData;
  align?: "left" | "right";
  sectionIndex: number;
  totalPages?: number;
}

const BESSCard: React.FC<BESSCardProps> = ({
  zone,
  align = "right",
  sectionIndex,
  totalPages = 14,
}) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardActive, setCardActive] = useState(false);
  const rafId = useRef<number>(0);

  const { accent } = zone;

  const heroValue = useAnimatedCounter(zone.heroMetric.value, cardActive);

  // ── 3D tilt on mouse move ──
  useEffect(() => {
    const card = innerRef.current;
    if (!card) return;
    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        card.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
      });
    };
    const handleLeave = () => {
      cancelAnimationFrame(rafId.current);
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out", clearProps: "transform" });
    };
    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", handleLeave);
    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  // ── Scroll-driven visibility ──
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const offset = (e as CustomEvent).detail?.offset ?? 0;
      const sectionStart = sectionIndex / totalPages;
      const sectionEnd = (sectionIndex + 1) / totalPages;
      
      // Card is visible throughout the entire section
      const shouldBeVisible = offset >= sectionStart && offset < sectionEnd;
      
      if (shouldBeVisible !== isVisible) {
        setIsVisible(shouldBeVisible);
        setCardActive(shouldBeVisible);
      }
    };

    window.addEventListener("drei-scroll", handleScroll);
    return () => { window.removeEventListener("drei-scroll", handleScroll); };
  }, [sectionIndex, totalPages, isVisible]);

  return (
    <>
      {isVisible && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 z-30 w-[92vw] md:w-[420px] lg:w-[460px] ${
            align === "right" ? "right-3 md:right-8 lg:right-12" : "left-3 md:left-8 lg:left-12"
          }`}
          style={{ "--zone-rgb": accent.rgb, "--zone-hex": accent.hex } as React.CSSProperties}
        >
          <div
            className="bess-card-outer cursor-pointer"
            onClick={() => { window.location.href = `/services/${zone.slug}`; }}
          >
            <div ref={innerRef} className="bess-card-inner p-4 md:p-6 lg:p-7" style={{ transformStyle: "preserve-3d" }}>
              <div className="bess-shimmer-line" />

              {/* ── Row 1: Title ── */}
              <div>
                <h2 className="relative z-10 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {zone.title}
                </h2>
                <div
                  className="relative z-10 w-10 h-[2px] mt-2 mb-2 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${accent.hex}, transparent)` }}
                />
              </div>

              {/* ── Row 2: Impact statement ── */}
              <div>
                <p className="relative z-10 text-[11px] md:text-xs text-white/50 leading-relaxed mb-3">
                  {zone.impact}
                </p>
              </div>

              {/* ── Row 3: Hero metric ── */}
              <div className="relative z-10 mb-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold" style={{ color: accent.hex }}>
                    {zone.heroMetric.prefix}{heroValue}
                  </span>
                  <span className="text-sm md:text-base font-medium text-white/60">
                    {zone.heroMetric.suffix}
                  </span>
                </div>
              </div>

              {/* ── Row 4: Stats grid ── */}
              <div className="relative z-10 grid grid-cols-3 gap-2 mb-4">
                {zone.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bess-stat-block group/stat rounded-lg p-2.5 text-center transition-all duration-300"
                    style={{ "--zone-rgb": accent.rgb } as React.CSSProperties}
                  >
                    <div className="flex justify-center mb-1.5 opacity-60 group-hover/stat:opacity-100 transition-opacity">
                      <StatIcon type={stat.icon} color={accent.hex} />
                    </div>
                    <div className="text-base md:text-lg font-bold text-white leading-none mb-0.5">
                      {stat.value}<span className="text-[10px] font-normal text-white/50">{stat.suffix}</span>
                    </div>
                    <div className="text-[9px] text-white/40 uppercase tracking-wider leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Row 5: Chart ── */}
              <div className="relative z-10">
                <BESSComparisonChart
                  data={zone.chartData}
                  yAxisLabel={zone.yAxisLabel}
                  maxY={zone.maxY}
                  accentHex={accent.hex}
                  accentRgb={accent.rgb}
                  isVisible={cardActive}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BESSCard;
