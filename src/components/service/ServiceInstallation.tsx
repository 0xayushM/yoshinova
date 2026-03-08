"use client";

import Image from 'next/image';

interface ServiceInstallationProps {
  label: string;
  heading: string;
  description: string;
  benefits: string[];
  images: string[];
  title: string;
}

export default function ServiceInstallation({ label, heading, description, benefits, images, title }: ServiceInstallationProps) {
  return (
    <section className="w-full bg-[#e8e6e1] px-6 md:px-14 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
              {label}
            </p>
            <h2 className="text-black text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
              {heading}
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              {description}
            </p>
            <div className="space-y-3">
              {benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-center">
                  <span className="text-[#6A9F30] mr-3 text-xl">✓</span>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative aspect-[16/10] overflow-hidden">
              <Image
                src={images[0]}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={images[1]}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={images[2]}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
