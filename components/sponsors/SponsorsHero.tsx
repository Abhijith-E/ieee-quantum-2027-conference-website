"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SponsorsHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-20 relative overflow-hidden text-center border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold-dark text-sm font-bold tracking-widest uppercase mb-6">
            Industry Ecosystem
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6">
            Sponsors & Partners
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            We are proud to collaborate with industry leaders and academic visionaries supporting the advancement of quantum technologies globally.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
