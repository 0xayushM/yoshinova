"use client";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  title: string;
  features: Feature[];
}

export default function ServiceFeatures({ title, features }: ServiceFeaturesProps) {
  return (
    <section className="w-full bg-white px-6 md:px-14 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
            KEY FEATURES
          </p>
          <h2 className="text-black text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
            Why Choose {title} BESS?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#e8e6e1] p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-black text-xl font-bold uppercase tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
