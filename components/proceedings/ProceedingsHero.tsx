"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function ProceedingsHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-20 relative overflow-hidden text-center border-b border-slate-200">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 shadow-md border border-slate-300 transform rotate-3">
            <BookOpen size={32} className="text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6">
            Conference Proceedings
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
            All accepted and presented papers will be published in the <strong className="text-navy">IEEE Xplore Digital Library</strong>.
          </p>

          <div className="bg-white border border-slate-200 px-8 py-4 rounded-xl shadow-sm flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-bold text-xs rounded shadow-sm">IEEE</div>
            <span className="font-extrabold text-2xl tracking-tight text-[#00629B]">Xplore</span>
            <span className="text-[#00629B] font-medium text-sm ml-2 border-l border-slate-200 pl-4">Digital Library</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
