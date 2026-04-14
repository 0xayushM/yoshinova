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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">No1</p>
                  <p className="text-gray-700 font-semibold">World's No1 Ranked<br/>Recommended Chemistry Used IRON Phosphate</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">24x7</p>
                  <p className="text-gray-700 font-semibold">Customer Support</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">50+</p>
                  <p className="text-gray-700 font-semibold">Happy Customers</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">45K+</p>
                  <p className="text-gray-700 font-semibold">Sq Ft<br/>Ultra Modern Factory</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-[#6A9F30] mb-2">100%</p>
                  <p className="text-gray-700 font-semibold">Safe for Home And Commercial Application</p>
                </div>
              </div>
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
