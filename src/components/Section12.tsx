"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import SplitText from './SplitText';

const newsStories = [
  {
    id: 1,
    category: "PROJECTS",
    title: "Yoshinova Deploys 500kWh BESS for Industrial Client",
    description: "Our latest industrial deployment showcases peak shaving capabilities that reduced demand charges by 45% in the first quarter of operation.",
    date: "2025-02-15",
    image: "/images/industrial.jpg"
  },
  {
    id: 2,
    category: "INNOVATION",
    title: "Smart Energy Management System Launch",
    description: "Introducing our AI-powered energy management platform that optimizes BESS performance in real-time across all deployment zones.",
    date: "2025-02-10",
    image: "/images/commercial.jpg"
  },
  {
    id: 3,
    category: "SUSTAINABILITY",
    title: "Carbon Reduction Milestone Achieved",
    description: "Yoshinova's BESS deployments have collectively eliminated over 10,000 tons of CO2 emissions, equivalent to planting 450,000 trees.",
    date: "2025-02-05",
    image: "/images/solar.jpg"
  }
];

const Section12 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? newsStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === newsStories.length - 1 ? 0 : prev + 1));
  };

  const currentStory = newsStories[currentIndex];

  return (
    <section className="w-screen h-screen md:min-h-screen relative overflow-hidden bg-[#6A9F30]/50 backdrop-blur-sm ">
      {/* Top Section - Headline and Description */}
      <div className="w-full h-1/2 flex flex-col-reverse md:flex-col justify-center items-end p-4 md:px-16 relative">
        {/* Navigation Arrows */}
        <div className="md:absolute left-4 md:left-12 md:top-1/2 md:-translate-y-1/2 flex gap-6">
          <button 
            onClick={handlePrev}
            className="md:w-16 md:h-16 w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-[#E87722] transition-colors duration-300"
            aria-label="Previous story"
          >
            <span className="text-2xl">←</span>
          </button>
          <button 
            onClick={handleNext}
            className="md:w-16 md:h-16 w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-[#E87722] transition-colors duration-300"
            aria-label="Next story"
          >
            <span className="text-2xl">→</span>
          </button>
        </div>

        {/* Headline and Description */}
        <div className="max-w-2xl py-4 md:py-12">
          <div className="pt-12 mb-4 md:mb-6">
            <SplitText
              text="News & Story"
              tag="h1"
              className="text-black text-4xl md:text-6xl font-normal leading-[2rem] md:leading-[6rem]"
              delay={70}
              duration={1}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.5}
              rootMargin="0px"
              textAlign="left"
            />
          </div>
          <p className="text-black text-base md:text-xl leading-relaxed">
            Discover how Yoshinova is transforming energy storage across industries. From groundbreaking deployments to innovative solutions, explore our latest achievements in sustainable energy management and BESS technology.
          </p>
        </div>
      </div>

      {/* Bottom Section - News Card */}
      <div className="w-full h-1/2 flex flex-col md:flex-row md:items-stretch">
        {/* Left Side - Text Content */}
        <div className="w-full h-full md:w-1/2 bg-[#D3D3D3] p-4 md:p-12 flex flex-col justify-between">
          <div>
            <p className="text-black text-xs uppercase tracking-widest mb-6">{currentStory.category}</p>
            <SplitText
              text={currentStory.title}
              tag="h2"
              className="text-black text-2xl md:text-5xl font-normal leading-tight mb-6"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.3}
              rootMargin="0px"
              textAlign="left"
            />
            <p className="text-black/80 text-base leading-relaxed">
              {currentStory.description}
            </p>
          </div>
          
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 relative">
          <Image
            src={currentStory.image}
            alt={currentStory.title}
            fill
            className="object-cover"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
};

export default Section12;
