"use client";

import Image from 'next/image';
import PageNavbar from '@/components/PageNavbar';
import ServiceFooter from '@/components/service/ServiceFooter';

const allCaseStudies = [
  {
    id: 1,
    category: "PROJECTS",
    title: "Yoshinova Deploys 500kWh BESS for Industrial Client",
    description: "Our latest industrial deployment showcases peak shaving capabilities that reduced demand charges by 45% in the first quarter of operation. This comprehensive case study explores the technical implementation, challenges overcome, and measurable results achieved.",
    date: "2025-02-15",
    image: "/images/industrial.webp",
    tags: ["Industrial", "Peak Shaving", "Demand Reduction"]
  },
  {
    id: 2,
    category: "INNOVATION",
    title: "Smart Energy Management System Launch",
    description: "Introducing our AI-powered energy management platform that optimizes BESS performance in real-time across all deployment zones. Learn how machine learning algorithms predict energy demand patterns and optimize battery charging cycles.",
    date: "2025-02-10",
    image: "/images/commercial.webp",
    tags: ["AI", "Software", "Optimization"]
  },
  {
    id: 3,
    category: "SUSTAINABILITY",
    title: "Carbon Reduction Milestone Achieved",
    description: "Yoshinova's BESS deployments have collectively eliminated over 10,000 tons of CO2 emissions, equivalent to planting 450,000 trees. This milestone represents our commitment to sustainable energy solutions and environmental responsibility.",
    date: "2025-02-05",
    image: "/images/solar.webp",
    tags: ["Sustainability", "Carbon Reduction", "Impact"]
  },
  {
    id: 4,
    category: "RESIDENTIAL",
    title: "Home Energy Independence: A Case Study",
    description: "Explore how a residential installation achieved 90% energy independence through solar-plus-storage integration. This case study details the system design, installation process, and first-year performance metrics.",
    date: "2025-01-28",
    image: "/images/residential.webp",
    tags: ["Residential", "Solar", "Energy Independence"]
  },
  {
    id: 5,
    category: "TELECOM",
    title: "Telecom Tower Backup: Diesel to Battery Transition",
    description: "A comprehensive analysis of replacing diesel generators with BESS for telecom tower backup power. Learn about the 70% reduction in operating costs and elimination of maintenance headaches.",
    date: "2025-01-20",
    image: "/images/telecom.webp",
    tags: ["Telecom", "Backup Power", "Cost Reduction"]
  },
  {
    id: 6,
    category: "COMMERCIAL",
    title: "Office Building Demand Charge Optimization",
    description: "How a commercial office building reduced electricity costs by 35% through intelligent demand charge management. This case study includes detailed ROI analysis and tenant satisfaction metrics.",
    date: "2025-01-15",
    image: "/images/commercial.webp",
    tags: ["Commercial", "Demand Charges", "ROI"]
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageNavbar isDark />
        <main className="relative min-h-screen bg-[#e8e6e1]">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-6 md:px-14">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-black text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
                Case Studies
              </h1>
              <p className="text-gray-700 text-lg md:text-xl max-w-3xl leading-relaxed">
                Explore real-world implementations of Yoshinova's Battery Energy Storage Systems. 
                From industrial deployments to residential installations, discover how we're transforming 
                energy management across diverse applications.
              </p>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="pb-20 px-6 md:px-14">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allCaseStudies.map((study) => (
                  <article 
                    key={study.id}
                    className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#6A9F30] text-xs uppercase tracking-widest font-semibold">
                          {study.category}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {new Date(study.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      
                      <h2 className="text-black text-xl font-bold uppercase tracking-tight mb-3 leading-tight">
                        {study.title}
                      </h2>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {study.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-[#e8e6e1] text-gray-700 text-xs uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="text-[#6A9F30] text-sm font-semibold uppercase tracking-wide hover:text-[#5a8f20] transition-colors duration-300">
                        Read Full Case Study →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6 md:px-14 bg-black">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                Ready to Transform Your Energy Management?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Let's discuss how Yoshinova's BESS solutions can deliver measurable results for your business.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-[#6A9F30] text-white text-sm uppercase tracking-widest hover:bg-[#5a8f20] transition-colors duration-300"
              >
                Get Started
              </a>
            </div>
          </section>

          {/* Footer */}
          <ServiceFooter />
        </main>
    </>
  );
}
