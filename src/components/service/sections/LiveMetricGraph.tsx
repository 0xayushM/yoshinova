"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Series {
  label: string;
  color: string;
  /** 24 normalised values (0..1) */
  values: number[];
  /** Solid line vs. dashed line */
  dashed?: boolean;
  /** Render an area-fill under the line */
  fill?: boolean;
}

interface LiveMetricGraphProps {
  /** Section eyebrow (small caps label above the title) */
  eyebrow: string;
  /** Big title above the graph */
  title: string;
  /** Subtitle / explanatory copy */
  subtitle?: string;
  /** Y-axis units label (e.g. "kW", "₹/hr") */
  yUnit?: string;
  /** Two-three series to plot. First series is primary. */
  series: Series[];
  /** Three callouts shown to the right of the graph */
  callouts: { label: string; value: string; sub?: string }[];
  /** Background — light or dark */
  theme?: 'light' | 'dark';
}

/**
 * A polished, animated 24-hour metric graph.
 * - Lines draw themselves once on mount + every loop
 * - A live "now" sweep marker runs across continuously
 * - Numeric counters tick up on the right
 *
 * Sized to a healthy ~16:8 aspect (wider than tall but not flat).
 */
export default function LiveMetricGraph({
  eyebrow,
  title,
  subtitle,
  yUnit = 'kW',
  series,
  callouts,
  theme = 'light',
}: LiveMetricGraphProps) {
  const ref = useRef<SVGSVGElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Plot bounds (in viewBox units)
  const W = 900;
  const H = 460;
  const PADDING = { top: 40, right: 40, bottom: 60, left: 60 };
  const plotW = W - PADDING.left - PADDING.right; // 800
  const plotH = H - PADDING.top - PADDING.bottom; // 360

  const seriesPath = (vals: number[]) => {
    const stepX = plotW / (vals.length - 1);
    return vals
      .map((v, i) => {
        const x = PADDING.left + i * stepX;
        const y = PADDING.top + plotH - v * plotH;
        return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');
  };

  const seriesAreaPath = (vals: number[]) => {
    const stepX = plotW / (vals.length - 1);
    const top = vals
      .map((v, i) => {
        const x = PADDING.left + i * stepX;
        const y = PADDING.top + plotH - v * plotH;
        return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(' ');
    const lastX = PADDING.left + (vals.length - 1) * stepX;
    const baseY = PADDING.top + plotH;
    return `${top} L ${lastX.toFixed(1)} ${baseY} L ${PADDING.left} ${baseY} Z`;
  };

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      // Draw-on animation for each line — looped
      const lines = ref.current?.querySelectorAll('.lmg-line');
      lines?.forEach((line) => {
        const path = line as SVGPathElement;
        const len = path.getTotalLength();
        path.style.strokeDasharray = `${len}`;
        gsap.fromTo(
          path,
          { strokeDashoffset: len },
          {
            strokeDashoffset: 0,
            duration: 2.4,
            ease: 'power2.out',
            repeat: -1,
            repeatDelay: 4,
          }
        );
      });

      // Fade-in for area fills
      gsap.fromTo(
        '.lmg-area',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.6,
          delay: 0.4,
          ease: 'power1.out',
          repeat: -1,
          repeatDelay: 4.8,
        }
      );

      // Sweep marker across the graph
      gsap.fromTo(
        '.lmg-sweep',
        { attr: { x1: PADDING.left, x2: PADDING.left } },
        {
          attr: { x1: PADDING.left + plotW, x2: PADDING.left + plotW },
          duration: 12,
          ease: 'none',
          repeat: -1,
        }
      );

      // Animate the dot following the primary series
      const sweepDot = ref.current?.querySelector('.lmg-sweep-dot') as SVGCircleElement | null;
      const primary = series[0];
      if (sweepDot && primary) {
        const proxy = { t: 0 };
        gsap.to(proxy, {
          t: 1,
          duration: 12,
          ease: 'none',
          repeat: -1,
          onUpdate: () => {
            const idx = proxy.t * (primary.values.length - 1);
            const i0 = Math.floor(idx);
            const i1 = Math.min(i0 + 1, primary.values.length - 1);
            const frac = idx - i0;
            const v = primary.values[i0] * (1 - frac) + primary.values[i1] * frac;
            const stepX = plotW / (primary.values.length - 1);
            const x = PADDING.left + idx * stepX;
            const y = PADDING.top + plotH - v * plotH;
            sweepDot.setAttribute('cx', String(x));
            sweepDot.setAttribute('cy', String(y));
          },
        });
      }

      // Counter tick-ups
      callouts.forEach((c, i) => {
        const el = counterRefs.current[i];
        if (!el) return;
        // Try to extract a numeric portion (handles "−45%", "12.4 kW", "₹2,340", etc.)
        const match = c.value.match(/-?\d[\d,]*(?:\.\d+)?/);
        if (!match) {
          el.textContent = c.value;
          return;
        }
        const raw = match[0];
        const isNegative = raw.startsWith('-') || c.value.startsWith('−');
        const cleanNum = parseFloat(raw.replace(/,/g, '').replace('-', ''));
        if (Number.isNaN(cleanNum)) {
          el.textContent = c.value;
          return;
        }
        const obj = { v: 0 };
        gsap.to(obj, {
          v: cleanNum,
          duration: 1.6,
          ease: 'power2.out',
          delay: 0.2 + i * 0.15,
          onUpdate: () => {
            const display = obj.v >= 100 ? Math.round(obj.v) : Math.round(obj.v * 10) / 10;
            const prefix = isNegative ? '−' : '';
            const suffix = c.value.replace(raw, '').replace('−', '');
            el.textContent = `${prefix}${display.toLocaleString()}${suffix}`;
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [series, callouts, plotH, plotW]);

  // Theme tokens
  const isDark = theme === 'dark';
  const sectionBg = isDark ? 'bg-[#0a0a0a]' : 'bg-white';
  const cardBg = isDark ? 'bg-white/[0.03] border border-white/10' : 'bg-[#f8fafc] border border-black/[0.06]';
  const eyeColor = '#6A9F30';
  const titleColor = isDark ? 'text-white' : 'text-black';
  const subColor = isDark ? 'text-white/65' : 'text-black/60';
  const calloutBorder = isDark ? 'border-white/10' : 'border-black/10';
  const calloutLabel = isDark ? 'text-white/50' : 'text-black/50';
  const calloutSub = isDark ? 'text-white/55' : 'text-black/55';

  // SVG colour tokens
  const axisColor = isDark ? '#334155' : '#cbd5e1';
  const axisLabelColor = isDark ? '#64748b' : '#94a3b8';
  const sweepColor = isDark ? '#7DB840' : '#0f172a';

  return (
    <section className={`w-full ${sectionBg} px-6 md:px-14 py-24 md:py-32`}>
      <div className="max-w-7xl mx-auto">
        <div className="md:flex md:items-end md:justify-between mb-10 md:mb-12 gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] mb-4" style={{ color: eyeColor }}>
              {eyebrow}
            </p>
            <h2 className={`${titleColor} text-3xl md:text-5xl font-medium uppercase tracking-tight leading-tight`}>
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className={`${subColor} text-base md:text-lg leading-relaxed max-w-md mt-4 md:mt-0`}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Graph */}
          <div className={`lg:col-span-8 ${cardBg} p-4 md:p-8`}>
            <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {series.map((s, i) =>
                  s.fill ? (
                    <linearGradient key={i} id={`lmg-grad-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={s.color} stopOpacity="0.45" />
                      <stop offset="100%" stopColor={s.color} stopOpacity="0" />
                    </linearGradient>
                  ) : null
                )}
              </defs>

              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((t, i) => {
                const y = PADDING.top + plotH - t * plotH;
                return (
                  <g key={i}>
                    <line x1={PADDING.left} y1={y} x2={PADDING.left + plotW} y2={y} stroke={axisColor} strokeWidth="0.5" strokeDasharray={i === 0 ? '0' : '3 4'} opacity={i === 0 ? 0.6 : 0.4} />
                    <text x={PADDING.left - 10} y={y + 3} textAnchor="end" fontSize="10" fill={axisLabelColor} fontFamily="monospace">
                      {Math.round(t * 100)}
                    </text>
                  </g>
                );
              })}

              {/* Y unit */}
              <text x={PADDING.left - 10} y={PADDING.top - 12} textAnchor="end" fontSize="9" fill={axisLabelColor} fontFamily="monospace">
                {yUnit}
              </text>

              {/* X axis labels (24h) */}
              {[0, 6, 12, 18, 24].map((h) => {
                const stepX = plotW / 24;
                const x = PADDING.left + h * stepX;
                return (
                  <g key={h}>
                    <line x1={x} y1={PADDING.top + plotH} x2={x} y2={PADDING.top + plotH + 4} stroke={axisColor} strokeWidth="0.6" />
                    <text x={x} y={PADDING.top + plotH + 18} textAnchor="middle" fontSize="10" fill={axisLabelColor} fontFamily="monospace">
                      {h.toString().padStart(2, '0')}:00
                    </text>
                  </g>
                );
              })}
              <text x={PADDING.left + plotW / 2} y={H - 14} textAnchor="middle" fontSize="9" fill={axisLabelColor} fontFamily="monospace" letterSpacing="2">
                HOUR OF DAY
              </text>

              {/* Areas first (so lines render above) */}
              {series.map((s, i) =>
                s.fill ? (
                  <path
                    key={`area-${i}`}
                    className="lmg-area"
                    d={seriesAreaPath(s.values)}
                    fill={`url(#lmg-grad-${i})`}
                    opacity="0.001"
                  />
                ) : null
              )}

              {/* Lines */}
              {series.map((s, i) => (
                <path
                  key={`line-${i}`}
                  className="lmg-line"
                  d={seriesPath(s.values)}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={s.dashed ? '6 6' : '0'}
                />
              ))}

              {/* Sweep marker */}
              <line className="lmg-sweep" x1={PADDING.left} y1={PADDING.top} x2={PADDING.left} y2={PADDING.top + plotH} stroke={sweepColor} strokeWidth="1.5" opacity="0.65" />
              {/* Sweep dot riding on primary series */}
              <circle className="lmg-sweep-dot" cx={PADDING.left} cy={PADDING.top + plotH} r="5" fill={series[0]?.color || '#7DB840'}>
                <animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite" />
              </circle>

              {/* Legend (top-right inside plot) */}
              <g transform={`translate(${PADDING.left + 12}, ${PADDING.top + 8})`}>
                {series.map((s, i) => (
                  <g key={i} transform={`translate(${i * 180}, 0)`}>
                    <line x1="0" y1="6" x2="22" y2="6" stroke={s.color} strokeWidth="2.5" strokeDasharray={s.dashed ? '5 5' : '0'} />
                    <text x="28" y="9" fontSize="10" fill={isDark ? '#cbd5e1' : '#475569'} fontFamily="monospace">
                      {s.label}
                    </text>
                  </g>
                ))}
              </g>

              {/* "LIVE" pill */}
              <g transform={`translate(${PADDING.left + plotW - 60}, ${PADDING.top + 4})`}>
                <rect x="0" y="0" width="56" height="18" rx="9" fill="#7DB840" />
                <circle cx="9" cy="9" r="3" fill="white">
                  <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
                </circle>
                <text x="32" y="12" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace" fontWeight="bold" letterSpacing="2">
                  LIVE
                </text>
              </g>
            </svg>
          </div>

          {/* Callout column */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6">
            {callouts.map((c, i) => (
              <div key={i} className={`${cardBg} p-5 md:p-6 flex flex-col justify-center`}>
                <p className={`${calloutLabel} text-[10px] uppercase tracking-widest mb-2`}>{c.label}</p>
                <p className="text-3xl md:text-4xl lg:text-5xl font-medium leading-none mb-2 text-[#6A9F30]">
                  <span
                    ref={(el) => {
                      counterRefs.current[i] = el;
                    }}
                  >
                    {c.value}
                  </span>
                </p>
                {c.sub && (
                  <p className={`${calloutSub} text-xs md:text-sm leading-relaxed border-t ${calloutBorder} pt-3 mt-2`}>
                    {c.sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
