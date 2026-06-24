"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function CareersHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-20 relative overflow-hidden text-center border-b border-slate-200">
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 shadow-md border border-slate-300 transform -rotate-3">
            <Briefcase size={32} className="text-gold" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6">
            Careers in <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-blue-600">Quantum Research</span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
            Explore exclusive opportunities from leading organizations, startups, and academic institutions participating in the ICQST conference.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
