"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

export default function EthicsHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-20 relative overflow-hidden text-center border-b border-slate-200">
      
      {/* Decorative background pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #64748b 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mb-6 shadow-md border border-slate-300">
            <Scale size={32} className="text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6">
            Code of Conduct & Research Ethics
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
            IEEE CQTCS Conference is committed to a respectful, inclusive, and rigorous scientific environment.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
