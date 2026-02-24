import { ChartDataPoint } from "@/components/BESSComparisonChart";

export interface BESSStatBlock {
  icon: "peak" | "backup" | "co2" | "cost" | "uptime" | "solar";
  label: string;
  value: number;
  suffix: string;
}

export interface ZoneAccent {
  hsl: string;        // e.g. "210, 80%, 65%"
  hex: string;        // e.g. "#5b9bf5"
  rgb: string;        // e.g. "91, 155, 245"
  tailwind: string;   // e.g. "blue-400"
}

export interface BESSZoneData {
  title: string;
  slug: string;
  impact: string;
  heroMetric: { value: number; prefix: string; suffix: string };
  stats: [BESSStatBlock, BESSStatBlock, BESSStatBlock];
  accent: ZoneAccent;
  chartData: ChartDataPoint[];
  yAxisLabel: string;
  maxY: number;
}

// ── Zone accent palette ──
const accentBlue:    ZoneAccent = { hsl: "210, 80%, 65%", hex: "#5b9bf5", rgb: "91, 155, 245",  tailwind: "blue-400"   };
const accentTeal:    ZoneAccent = { hsl: "174, 60%, 50%", hex: "#33b5a6", rgb: "51, 181, 166",  tailwind: "teal-400"   };
const accentCyan:    ZoneAccent = { hsl: "188, 90%, 55%", hex: "#22d3ee", rgb: "34, 211, 238",  tailwind: "cyan-400"   };
const accentAmber:   ZoneAccent = { hsl: "38, 90%, 55%",  hex: "#f59e0b", rgb: "245, 158, 11",  tailwind: "amber-400"  };
const accentPurple:  ZoneAccent = { hsl: "270, 70%, 60%", hex: "#a855f7", rgb: "168, 85, 247",  tailwind: "purple-400" };
const accentGreen:   ZoneAccent = { hsl: "142, 60%, 50%", hex: "#34d399", rgb: "52, 211, 153",  tailwind: "emerald-400"};

// ── Residential ──
export const residentialData: BESSZoneData = {
  title: "Residential",
  slug: "residential",
  impact: "Store daytime solar, power your evenings — cut bills by 40%.",
  heroMetric: { value: 40, prefix: "↓", suffix: "% Peak Charges" },
  stats: [
    { icon: "peak",   label: "Peak Shaving",  value: 46, suffix: "%" },
    { icon: "backup", label: "Backup Hours",   value: 8,  suffix: "hrs" },
    { icon: "co2",    label: "CO₂ Reduction",  value: 32, suffix: "%" },
  ],
  accent: accentBlue,
  yAxisLabel: "Demand (kW)",
  maxY: 8,
  chartData: [
    { hour: 0, withoutBESS: 1.2, withBESS: 1.0 },
    { hour: 2, withoutBESS: 0.9, withBESS: 0.8 },
    { hour: 4, withoutBESS: 0.8, withBESS: 0.7 },
    { hour: 6, withoutBESS: 1.5, withBESS: 1.2 },
    { hour: 8, withoutBESS: 2.0, withBESS: 1.4 },
    { hour: 10, withoutBESS: 2.5, withBESS: 1.5 },
    { hour: 12, withoutBESS: 3.0, withBESS: 1.6 },
    { hour: 14, withoutBESS: 3.2, withBESS: 1.8 },
    { hour: 16, withoutBESS: 4.0, withBESS: 2.2 },
    { hour: 18, withoutBESS: 6.5, withBESS: 3.5 },
    { hour: 20, withoutBESS: 5.8, withBESS: 3.2 },
    { hour: 22, withoutBESS: 3.0, withBESS: 2.0 },
    { hour: 24, withoutBESS: 1.5, withBESS: 1.1 },
  ],
};

// ── Society ──
export const societyData: BESSZoneData = {
  title: "Society",
  slug: "residential",
  impact: "Shared storage for elevators, pumps & EV charging — always on.",
  heroMetric: { value: 35, prefix: "↓", suffix: "% Demand Charges" },
  stats: [
    { icon: "peak",   label: "Peak Shaving",  value: 38, suffix: "%" },
    { icon: "backup", label: "Backup Hours",   value: 6,  suffix: "hrs" },
    { icon: "cost",   label: "Cost Savings",   value: 28, suffix: "%" },
  ],
  accent: accentTeal,
  yAxisLabel: "Demand (kW)",
  maxY: 60,
  chartData: [
    { hour: 0, withoutBESS: 12, withBESS: 10 },
    { hour: 2, withoutBESS: 10, withBESS: 8 },
    { hour: 4, withoutBESS: 9, withBESS: 7 },
    { hour: 6, withoutBESS: 15, withBESS: 11 },
    { hour: 8, withoutBESS: 25, withBESS: 18 },
    { hour: 10, withoutBESS: 30, withBESS: 20 },
    { hour: 12, withoutBESS: 35, withBESS: 22 },
    { hour: 14, withoutBESS: 38, withBESS: 24 },
    { hour: 16, withoutBESS: 40, withBESS: 26 },
    { hour: 18, withoutBESS: 50, withBESS: 30 },
    { hour: 20, withoutBESS: 45, withBESS: 28 },
    { hour: 22, withoutBESS: 25, withBESS: 18 },
    { hour: 24, withoutBESS: 14, withBESS: 11 },
  ],
};

// ── Telecom ──
export const telecomData: BESSZoneData = {
  title: "Telecom",
  slug: "telecom",
  impact: "Replace diesel backup with zero-downtime battery power.",
  heroMetric: { value: 60, prefix: "↓", suffix: "% Fuel Costs" },
  stats: [
    { icon: "uptime", label: "Uptime",         value: 99, suffix: ".9%" },
    { icon: "backup", label: "Backup Hours",    value: 12, suffix: "hrs" },
    { icon: "co2",    label: "CO₂ Reduction",   value: 55, suffix: "%" },
  ],
  accent: accentCyan,
  yAxisLabel: "Demand (kW)",
  maxY: 20,
  chartData: [
    { hour: 0, withoutBESS: 8, withBESS: 7 },
    { hour: 2, withoutBESS: 7.5, withBESS: 6.8 },
    { hour: 4, withoutBESS: 7.5, withBESS: 6.5 },
    { hour: 6, withoutBESS: 8, withBESS: 7 },
    { hour: 8, withoutBESS: 10, withBESS: 8 },
    { hour: 10, withoutBESS: 13, withBESS: 9 },
    { hour: 12, withoutBESS: 15, withBESS: 10 },
    { hour: 14, withoutBESS: 16, withBESS: 10.5 },
    { hour: 16, withoutBESS: 14, withBESS: 9.5 },
    { hour: 18, withoutBESS: 12, withBESS: 8.5 },
    { hour: 20, withoutBESS: 10, withBESS: 7.5 },
    { hour: 22, withoutBESS: 9, withBESS: 7.2 },
    { hour: 24, withoutBESS: 8, withBESS: 7 },
  ],
};

// ── Industrial ──
export const industrialData: BESSZoneData = {
  title: "Industrial",
  slug: "industrial",
  impact: "Shave machinery peaks and unlock demand-response revenue.",
  heroMetric: { value: 30, prefix: "↓", suffix: "% Demand Charges" },
  stats: [
    { icon: "peak",   label: "Peak Shaving",  value: 33, suffix: "%" },
    { icon: "cost",   label: "Cost Savings",   value: 22, suffix: "%" },
    { icon: "co2",    label: "CO₂ Reduction",  value: 18, suffix: "%" },
  ],
  accent: accentAmber,
  yAxisLabel: "Demand (MW)",
  maxY: 5,
  chartData: [
    { hour: 0, withoutBESS: 0.8, withBESS: 0.7 },
    { hour: 2, withoutBESS: 0.6, withBESS: 0.5 },
    { hour: 4, withoutBESS: 0.5, withBESS: 0.4 },
    { hour: 6, withoutBESS: 1.2, withBESS: 0.9 },
    { hour: 8, withoutBESS: 2.8, withBESS: 2.0 },
    { hour: 10, withoutBESS: 3.8, withBESS: 2.5 },
    { hour: 12, withoutBESS: 4.2, withBESS: 2.8 },
    { hour: 14, withoutBESS: 4.0, withBESS: 2.7 },
    { hour: 16, withoutBESS: 3.5, withBESS: 2.4 },
    { hour: 18, withoutBESS: 2.5, withBESS: 1.8 },
    { hour: 20, withoutBESS: 1.5, withBESS: 1.2 },
    { hour: 22, withoutBESS: 1.0, withBESS: 0.8 },
    { hour: 24, withoutBESS: 0.8, withBESS: 0.7 },
  ],
};

// ── Commercial ──
export const commercialData: BESSZoneData = {
  title: "Commercial",
  slug: "commercial",
  impact: "Flatten HVAC spikes and arbitrage time-of-use rates.",
  heroMetric: { value: 25, prefix: "↓", suffix: "% Peak Charges" },
  stats: [
    { icon: "peak",   label: "Peak Shaving",  value: 40, suffix: "%" },
    { icon: "cost",   label: "Cost Savings",   value: 25, suffix: "%" },
    { icon: "backup", label: "Backup Hours",   value: 4,  suffix: "hrs" },
  ],
  accent: accentPurple,
  yAxisLabel: "Demand (kW)",
  maxY: 120,
  chartData: [
    { hour: 0, withoutBESS: 15, withBESS: 12 },
    { hour: 2, withoutBESS: 12, withBESS: 10 },
    { hour: 4, withoutBESS: 10, withBESS: 8 },
    { hour: 6, withoutBESS: 20, withBESS: 15 },
    { hour: 8, withoutBESS: 60, withBESS: 40 },
    { hour: 10, withoutBESS: 90, withBESS: 55 },
    { hour: 12, withoutBESS: 100, withBESS: 60 },
    { hour: 14, withoutBESS: 95, withBESS: 58 },
    { hour: 16, withoutBESS: 85, withBESS: 52 },
    { hour: 18, withoutBESS: 50, withBESS: 35 },
    { hour: 20, withoutBESS: 30, withBESS: 22 },
    { hour: 22, withoutBESS: 20, withBESS: 15 },
    { hour: 24, withoutBESS: 15, withBESS: 12 },
  ],
};

// ── Solar ──
export const solarData: BESSZoneData = {
  title: "Solar",
  slug: "solar",
  impact: "Bridge the midday-to-evening gap — 80%+ self-consumption.",
  heroMetric: { value: 80, prefix: "↑", suffix: "% Self-Consumption" },
  stats: [
    { icon: "solar",  label: "Solar Utilization", value: 82, suffix: "%" },
    { icon: "co2",    label: "CO₂ Reduction",     value: 45, suffix: "%" },
    { icon: "cost",   label: "Cost Savings",       value: 35, suffix: "%" },
  ],
  accent: accentGreen,
  yAxisLabel: "Demand (MW)",
  maxY: 1.5,
  chartData: [
    { hour: 0, withoutBESS: 0.1, withBESS: 0.08 },
    { hour: 2, withoutBESS: 0.08, withBESS: 0.06 },
    { hour: 4, withoutBESS: 0.05, withBESS: 0.04 },
    { hour: 6, withoutBESS: 0.15, withBESS: 0.1 },
    { hour: 8, withoutBESS: 0.3, withBESS: 0.15 },
    { hour: 10, withoutBESS: 0.5, withBESS: 0.2 },
    { hour: 12, withoutBESS: 0.6, withBESS: 0.18 },
    { hour: 14, withoutBESS: 0.55, withBESS: 0.2 },
    { hour: 16, withoutBESS: 0.7, withBESS: 0.35 },
    { hour: 18, withoutBESS: 1.2, withBESS: 0.6 },
    { hour: 20, withoutBESS: 1.0, withBESS: 0.55 },
    { hour: 22, withoutBESS: 0.4, withBESS: 0.25 },
    { hour: 24, withoutBESS: 0.15, withBESS: 0.1 },
  ],
};
