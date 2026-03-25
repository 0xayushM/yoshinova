"use client";

import PageNavbar from '@/components/PageNavbar';
import ScrollSmootherWrapper from '@/components/ScrollSmootherWrapper';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceIntro from '@/components/service/ServiceIntro';
import ServiceFeatures from '@/components/service/ServiceFeatures';
import ServiceInstallation from '@/components/service/ServiceInstallation';
import ServiceStats from '@/components/service/ServiceStats';
import ServiceCTA from '@/components/service/ServiceCTA';
import ServiceFooter from '@/components/service/ServiceFooter';

import solarData from '@/data/services/solar.json';

export default function SolarPage() {
  const service = solarData;

  return (
    <>
      <PageNavbar />
      <ScrollSmootherWrapper>
        <main className="relative min-h-screen bg-[#0a0a0a]">
          
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

          <ServiceInstallation 
            label={service.installation.label}
            heading={service.installation.heading}
            description={service.installation.description}
            benefits={service.installation.benefits}
            images={service.installation.images}
            title={service.title}
          />

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
