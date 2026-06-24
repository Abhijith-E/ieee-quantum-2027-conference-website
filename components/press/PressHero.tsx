"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mic2 } from 'lucide-react';

export default function PressHero() {
  return (
    <section className="w-full bg-[#0F172A] pt-32 pb-20 relative overflow-hidden text-center border-b border-navy-light">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Abstract light beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-blue-400 text-white">
            <Mic2 size={32} />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Press & Media Accreditation
          </h1>

          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mb-8">
            Covering the frontier of quantum science — we welcome accredited media.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
