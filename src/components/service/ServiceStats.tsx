"use client";

interface Stat {
  value: string;
  label: string;
}

interface ServiceStatsProps {
  stats: Stat[];
}

export default function ServiceStats({ stats }: ServiceStatsProps) {
  return (
    <section className="w-full bg-[#6A9F30] px-6 md:px-14 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-white text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
            <p className="text-white/90 text-sm uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
