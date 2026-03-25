'use client';

import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import PageNavbar from '@/components/PageNavbar';
import * as THREE from 'three';

function LogoModel() {
  const { scene } = useGLTF('/models/logo.glb');
  const modelRef = useRef<THREE.Group>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      // Calculate target rotation based on mouse position
      targetRotation.current.y = mousePos.current.x * 0.5; // Horizontal rotation
      targetRotation.current.x = mousePos.current.y * 0.3; // Vertical rotation
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth rotation animation
  useFrame(() => {
    if (!modelRef.current) return;

    // Lerp current rotation towards target rotation for smooth movement
    const lerpFactor = 0.05;
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * lerpFactor;
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * lerpFactor;

    // Apply rotation
    modelRef.current.rotation.x = currentRotation.current.x;
    modelRef.current.rotation.y = currentRotation.current.y;
  });
  
  return (
    <group ref={modelRef}>
      <primitive object={scene} scale={1} />
    </group>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    powerBill: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <PageNavbar />
      <main className="relative min-h-screen bg-[#0a0a0a] pt-32 px-8 md:px-12 lg:px-20">
        <div className="max-w-[1600px] mx-auto">
          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 py-12">
            
            {/* Left Column - Contact Us */}
            <div className="space-y-8">
              <h2 className="text-white text-3xl md:text-4xl font-normal mb-8">Contact Us</h2>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-[#6A9F30] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#6A9F30] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#6A9F30] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <a href="tel:+13747351162" className="text-white hover:text-[#6A9F30] transition-colors">
                      +1 (374)-735-1162
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <a href="tel:+14048576393" className="text-white hover:text-[#6A9F30] transition-colors">
                      +1 (404)-857-6393
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-white">
                  <p>123 Somewhere Street,</p>
                  <p>California, 19571 USA</p>
                </div>
              </div>
            </div>

            {/* Middle Column - 3D Logo */}
            <div className="flex items-center justify-center min-h-[500px]">
              <div className="w-full h-[500px]">
                <Canvas
                  camera={{ position: [5, 5, 5], fov: 50 }}
                  gl={{ antialias: true }}
                >
                  <ambientLight intensity={2} />
                  <directionalLight position={[10, 10, 10]} intensity={3} />
                  <directionalLight position={[-10, 10, -10]} intensity={2} />
                  <pointLight position={[0, 5, 0]} intensity={2} />
                  <directionalLight position={[0, 2, -5]} intensity={1} color="#6A9F30" />
                  <Environment preset="sunset" />
                  
                  <Suspense fallback={null}>
                    <LogoModel />
                  </Suspense>
                </Canvas>
              </div>
            </div>

            {/* Right Column - Send Us A Message */}
            <div className="space-y-6">
              <h2 className="text-white text-3xl md:text-4xl font-normal mb-2">Send Us</h2>
              <h2 className="text-white text-3xl md:text-4xl font-normal mb-8">A Message</h2>
              
              <p className="text-white/60 text-sm mb-8">
                Kindly fill this form. Average response is within 24hrs
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#6A9F30] transition-colors"
                  placeholder="Jane Smith"
                />
                
                <input
                  type="email"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#6A9F30] transition-colors"
                  placeholder="jane@framer.com"
                />
                
                <select
                  name="powerBill"
                  value={formData.powerBill}
                  onChange={(e) => setFormData({...formData, powerBill: e.target.value})}
                  required
                  className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-[#6A9F30] transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0a0a0a]">Select</option>
                  <option value="residential" className="bg-[#0a0a0a]">Residential</option>
                  <option value="commercial" className="bg-[#0a0a0a]">Commercial</option>
                  <option value="industrial" className="bg-[#0a0a0a]">Industrial</option>
                </select>
                
                <textarea
                  name="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  required
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#6A9F30] transition-colors resize-none"
                  placeholder="Your message..."
                />
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
