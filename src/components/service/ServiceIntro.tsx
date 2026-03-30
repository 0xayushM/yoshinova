"use client";

import { useState } from 'react';
import Image from 'next/image';
import ContactDialog from '@/components/ContactDialog';

interface ServiceIntroProps {
  title: string;
  description: string;
  bessImage: string;
  brochureUrl?: string;
}

export default function ServiceIntro({ title, description, bessImage }: ServiceIntroProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-white px-6 md:px-14 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {title}
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              {description}
            </p>
            
            <button
              onClick={() => setIsDialogOpen(true)}
              className="inline-block px-8 py-3 bg-[#6A9F30] text-white text-sm font-semibold uppercase tracking-wide hover:bg-[#5a8f20] transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        
        {/* Right Column - BESS Image */}
        <div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center">
          <Image
            src={bessImage}
            alt="Battery Energy Storage System"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>

    <ContactDialog 
      isOpen={isDialogOpen}
      onClose={() => setIsDialogOpen(false)}
      type="contact"
    />
  </>
  );
}
