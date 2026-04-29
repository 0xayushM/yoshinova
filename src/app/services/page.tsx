"use client";

import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/utils/services';
import PageNavbar from '@/components/PageNavbar';

export default function AllServicesPage() {
  return (
    <>
      <PageNavbar isDark />
      <main className="relative min-h-screen bg-[#e8e6e1]">
      <div className="pt-32 pb-20 px-4">
        <h1 className="text-center text-gray-600 text-2xl md:text-3xl font-bold uppercase tracking-tight mb-12">
          All Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative block w-full aspect-[16/9] overflow-hidden shadow-sm"
            >
              <Image
                src={service.image}
                alt={service.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 transition-colors duration-300" />

              <div className="absolute inset-0 pb-8 flex flex-col items-center justify-end z-10">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-center">
                  {service.label}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
    </>
  );
}
