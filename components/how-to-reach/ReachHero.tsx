"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function ReachHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-20 relative z-10 text-center border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
            <MapPin size={32} className="text-gold-dark" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6">
            Getting to Bengaluru <span className="text-gold">&amp;</span> the Venue
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            CHRIST (Deemed to be University) is centrally located in Bengaluru, well connected and easily accessible by air, rail, and road.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
