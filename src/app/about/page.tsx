'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import PageNavbar from '@/components/PageNavbar';
import ScrollSmootherWrapper from '@/components/ScrollSmootherWrapper';
import SplitText from '@/components/SplitText';

export default function AboutPage() {
  return (
    <>
      <PageNavbar />
      <ScrollSmootherWrapper>
        <main className="relative min-h-screen bg-black">
          
          {/* Hero Section */}
          <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Geometric background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-about" width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-about)" />
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12">
              <SplitText
                text="We take a power-first, innovation-driven approach to developing, commercializing, and operating the critical infrastructure that underpins the breakthrough technologies of today and tomorrow."
                tag="h1"
                className="text-white text-4xl md:text-6xl lg:text-7xl font-normal leading-tight"
                delay={30}
                duration={0.8}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="left"
              />
            </div>
          </section>

          {/* Mission Section */}
          <section className="relative py-32 px-8 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <p className="text-[#6A9F30] text-sm uppercase tracking-widest mb-6">Our Mission</p>
                  <SplitText
                    text="Powering the Future"
                    tag="h2"
                    className="text-white text-4xl md:text-5xl font-normal mb-8"
                    delay={40}
                    duration={0.8}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 30 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="0px"
                    textAlign="left"
                  />
                  <p className="text-white/70 text-lg leading-relaxed">
                    At Yoshinova, we believe that energy is the foundation of progress. Our mission is to deliver 
                    cutting-edge energy storage solutions that empower businesses, communities, and individuals to 
                    achieve energy independence and sustainability.
                  </p>
                </div>
                <div>
                  <p className="text-[#6A9F30] text-sm uppercase tracking-widest mb-6">Our Vision</p>
                  <SplitText
                    text="Sustainable Energy for All"
                    tag="h2"
                    className="text-white text-4xl md:text-5xl font-normal mb-8"
                    delay={40}
                    duration={0.8}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 30 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="0px"
                    textAlign="left"
                  />
                  <p className="text-white/70 text-lg leading-relaxed">
                    We envision a world where clean, reliable energy is accessible to everyone. Through innovation 
                    and dedication, we're building the infrastructure that will power tomorrow's breakthrough 
                    technologies and sustainable solutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="relative py-32 px-8 md:px-12 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <p className="text-[#6A9F30] text-sm uppercase tracking-widest mb-6 text-center">Our Values</p>
              <SplitText
                text="What Drives Us"
                tag="h2"
                className="text-white text-4xl md:text-6xl font-normal mb-20 text-center"
                delay={40}
                duration={0.8}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="center"
              />

              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#6A9F30] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-normal mb-4">Innovation</h3>
                  <p className="text-white/70 leading-relaxed">
                    We constantly push the boundaries of what's possible in energy storage technology.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#6A9F30] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-normal mb-4">Sustainability</h3>
                  <p className="text-white/70 leading-relaxed">
                    Environmental responsibility is at the core of everything we do.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#6A9F30] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-normal mb-4">Reliability</h3>
                  <p className="text-white/70 leading-relaxed">
                    We deliver solutions you can depend on, backed by world-class support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative py-32 px-8 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <SplitText
                text="Ready to Transform Your Energy Future?"
                tag="h2"
                className="text-white text-4xl md:text-5xl font-normal mb-8"
                delay={40}
                duration={0.8}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="center"
              />
              <p className="text-white/70 text-lg mb-12">
                Let's discuss how Yoshinova can power your vision for a sustainable tomorrow.
              </p>
              <a
                href="/contact"
                className="inline-block px-12 py-4 bg-[#6A9F30] text-white text-sm uppercase tracking-widest hover:bg-[#5a8f20] transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </section>

        </main>
      </ScrollSmootherWrapper>
    </>
  );
}
