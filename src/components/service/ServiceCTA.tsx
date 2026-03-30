"use client";

import { useState } from 'react';
import Link from 'next/link';
import ContactDialog from '@/components/ContactDialog';

interface CTAButton {
  text: string;
  link: string;
}

interface ServiceCTAProps {
  label: string;
  heading: string;
  description: string;
  primaryButton: CTAButton;
  secondaryButton: CTAButton;
}

export default function ServiceCTA({ label, heading, description, primaryButton, secondaryButton }: ServiceCTAProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-black px-6 md:px-14 py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#6A9F30] text-xs uppercase tracking-widest mb-4">
            {label}
          </p>
          <h2 className="text-white text-3xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            {heading}
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsDialogOpen(true)}
              className="inline-block px-8 py-4 bg-[#6A9F30] text-white text-sm uppercase tracking-widest hover:bg-[#5a8f20] transition-colors duration-300 cursor-pointer"
            >
              {primaryButton.text}
            </button>
            <Link
              href={secondaryButton.link}
              className="inline-block px-8 py-4 border-2 border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
            >
              {secondaryButton.text}
            </Link>
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
