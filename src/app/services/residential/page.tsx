"use client";

import Image from 'next/image';
import PageNavbar from '@/components/PageNavbar';
import ScrollSmootherWrapper from '@/components/ScrollSmootherWrapper';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceIntro from '@/components/service/ServiceIntro';
import ServiceFeatures from '@/components/service/ServiceFeatures';
import ServiceStats from '@/components/service/ServiceStats';
import ServiceCTA from '@/components/service/ServiceCTA';
import ServiceFooter from '@/components/service/ServiceFooter';
import LeadAcidReplacementTable from '@/components/product/LeadAcidReplacementTable';
import WallMountedESSTable from '@/components/product/WallMountedESSTable';
import FloorMountedESSTable from '@/components/product/FloorMountedESSTable';

import residentialData from '@/data/services/residential.json';

export default function ResidentialPage() {
  const service = residentialData;

  return (
    <>
      <PageNavbar />
      <ScrollSmootherWrapper>
        <main className="relative min-h-screen bg-white">
          
          <ServiceHero 
            title={service.title}
            heroImage={service.heroImage}
            heroDescription={service.heroDescription}
            serviceNumber={service.serviceNumber}
          />

          <ServiceIntro 
            title={service.intro.title}
            description={service.intro.description}
            bessImage={service.intro.bessImage}
            brochureUrl={service.intro.brochureUrl}
          />

          <ServiceFeatures 
            title={service.title}
            features={service.features}
          />

          {/* Company Info Section */}
          <section className="py-16 px-6 md:px-14 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  POWER ENDLESS
                </h2>
                <p className="text-2xl mb-2">
                  with <span className="font-bold">more charge cycles</span> and
                </p>
                <p className="text-2xl mb-8">
                  <span className="font-bold">low discharge rate</span>, keep the Energy longer
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-3xl font-bold text-center mb-8">
                  About <span className="font-normal">Us</span>
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed text-center max-w-5xl mx-auto">
                  Yoshinova is one of India's most trusted names in the green energy segment. Our IMS-certified manufacturing facility in Kundli, Haryana, spans 50,000 sq. ft and houses a government-recognized R&D center. We manufacture advanced Lithium-ion Batteries for 2-wheelers, 3-wheelers, Telecom applications, Energy Storage Systems (ESS) and more, delivering reliable, high-performance solutions across industries. We provide BMS with IOT connectivity which enables feature like remote monitoring, geo-fencing, and smart control. With rigorous processes, global standards, and a dedicated team, Yoshinova is committed to powering a sustainable future.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">1st</p>
                  <p className="text-gray-700 font-semibold">India's first LMFP<br/>Battery Manufacturer</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">30+</p>
                  <p className="text-gray-700 font-semibold">Years of Experience<br/>in Battery Industry</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">50+</p>
                  <p className="text-gray-700 font-semibold">Service Centres<br/>across the Nation</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">50K+</p>
                  <p className="text-gray-700 font-semibold">Sq Ft<br/>Factory Area</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">1.2</p>
                  <p className="text-gray-700 font-semibold">GMH Annual<br/>Production Capacity</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">22+</p>
                  <p className="text-gray-700 font-semibold">AIS156 (Phase 2)<br/>Approved Batteries</p>
                </div>
              </div>
            </div>
          </section>

          {/* Product Specifications Section */}
          <section className="py-16 px-6 md:px-14 bg-white">
            <div className="max-w-7xl mx-auto">
              <LeadAcidReplacementTable />
            </div>
          </section>

          {/* Wall Mounted ESS Section */}
          <section className="py-16 px-6 md:px-14 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <WallMountedESSTable />
            </div>
          </section>

          {/* Floor Mounted ESS Section */}
          <section className="py-16 px-6 md:px-14 bg-white">
            <div className="max-w-7xl mx-auto">
              <FloorMountedESSTable />
            </div>
          </section>

          <ServiceStats stats={service.stats} />

          <ServiceCTA 
            label={service.cta.label}
            heading={service.cta.heading}
            description={service.cta.description}
            primaryButton={service.cta.primaryButton}
            secondaryButton={service.cta.secondaryButton}
          />

          <ServiceFooter />

        </main>
      </ScrollSmootherWrapper>
    </>
  );
}
