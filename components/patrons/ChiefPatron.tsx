"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Patron } from './types';

interface ChiefPatronProps {
  patron: Patron;
}

export default function ChiefPatron({ patron }: ChiefPatronProps) {
  return (
    <section className="w-full px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto flex flex-col items-center text-center"
      >
        <div className="mb-2 text-gold font-semibold tracking-widest uppercase text-sm">
          Chief Patron
        </div>
        
        {/* Portrait */}
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden ring-8 ring-[#D4AF37]/20 border-4 border-[#D4AF37] mb-8 bg-white shadow-xl">
          {patron.imageUrl ? (
            <img src={patron.imageUrl} alt={patron.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
              <span className="text-xl font-serif">Portrait</span>
            </div>
          )}
        </div>

        {/* Info */}
        <h2 className="text-[28px] font-extrabold text-navy mb-3">
          {patron.name}
        </h2>
        
        <p className="text-lg text-slate-600 font-medium mb-6 leading-relaxed max-w-lg">
          {patron.title}
        </p>

        {/* Institution Logo Placeholder */}
        <div className="flex flex-col items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-xs mb-2">
            CU
          </div>
          <span className="text-sm font-semibold text-navy tracking-wide uppercase">
            {patron.institution}
          </span>
        </div>
        
      </motion.div>
    </section>
  );
}
