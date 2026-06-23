"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

export default function VisaHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-20 relative z-10 text-center border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center relative"
        >
          {/* Decorative flags */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-0 -left-4 md:left-20 text-3xl"
          >
            🇮🇳
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-10 -right-4 md:right-20 text-3xl"
          >
            🇺🇳
          </motion.div>

          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 shadow-sm border border-blue-200">
            <Globe2 size={32} className="text-blue-600" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6">
            Visa Support for <br />
            <span className="text-gold">International Attendees</span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            We welcome delegates from across the globe. Use our self-serve tools to check your visa eligibility and request an official invitation letter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
