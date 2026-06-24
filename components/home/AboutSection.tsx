"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full bg-navy-deep py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-semibold tracking-wider uppercase mb-6">
              About the Conference
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
              Defining the Future of <span className="text-gold">Quantum Technologies</span>
            </h2>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                The IEEE International International Conference on Quantum Science and Technologies (ICQST) represents a premier global gathering of researchers, academics, and industry professionals at the cutting edge of quantum computing.
              </p>
              <p>
                As quantum advantage becomes a reality, our conference provides a vital platform for disseminating breakthrough research in quantum algorithms, hardware architectures, cryptography, and the intersection of quantum mechanics with classical computer science.
              </p>
              <p>
                Join us for three days of intensive workshops, visionary keynotes, and technical sessions designed to forge new collaborations and shape the trajectory of the next technological revolution.
              </p>
            </div>
            
            <div className="mt-10">
              <Link href="/about" className="inline-block border-2 border-gold text-gold hover:bg-gold hover:text-navy-deep font-bold rounded-xl px-8 py-3 transition-colors">
                Learn More About Us
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Card Container */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-navy border border-slate-800 shadow-[0_16px_48px_rgba(15,23,42,0.5)] group">
              {/* Abstract Placeholder Visual */}
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep via-navy to-slate-800" />
              
              {/* Circuit-like overlay */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="#D4AF37" strokeWidth="1" fill="none" />
                    <circle cx="20" cy="20" r="2" fill="#D4AF37" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
              </svg>

              {/* Glowing Orb */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold/20 rounded-full blur-[64px] group-hover:bg-gold/30 transition-colors duration-700" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-gold opacity-50" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-gold opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
