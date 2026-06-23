"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SocialHero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] pt-32 pb-24 relative overflow-hidden text-center border-b border-slate-800 flex items-center justify-center min-h-[400px]">
      
      {/* Decorative ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/80 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Networking & Leisure
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Beyond the Sessions — <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-amber-400">Conference Social Events</span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
            Connect, celebrate, and explore. Join us for exclusive evening galas, immersive campus tours, and cultural experiences designed to foster lasting professional relationships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
