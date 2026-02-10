"use client";

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { services } from '@/utils/services';
import ServiceNavbar from '@/components/ServiceNavbar';

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
        Service not found
      </div>
    );
  }

  return (
    <main className="relative min-h-screen">
      <ServiceNavbar />

      {/* Hero section with full-screen background */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src={service.image}
          alt={service.label}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Large service name */}
        <div className="relative z-10 w-full h-full flex items-end p-6 md:p-10 lg:p-14 pb-16 md:pb-20">
          <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-bold uppercase tracking-tight leading-none">
            {service.label}
          </h1>
        </div>
      </section>
    </main>
  );
}
