"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export default function ExploreHero() {
  return (
    <section className="w-full bg-gradient-to-br from-emerald-50 to-white pt-32 pb-20 relative z-10 text-center border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-sm border border-emerald-200">
            <Compass size={32} className="text-emerald-600" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6">
            Explore Bengaluru
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            The Garden City of India — an exciting blend of cutting-edge science, rich culture, and historical landmarks await.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
