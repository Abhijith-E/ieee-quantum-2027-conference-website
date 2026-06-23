"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function VirtualHero() {
  return (
    <section className="w-full bg-navy pt-32 pb-20 relative z-10 text-center border-b border-slate-800 overflow-hidden min-h-[500px] flex items-center justify-center">
      
      {/* Background Animated Dots (Simulating Global Attendees) */}
      <div className="absolute inset-0 z-0 opacity-40">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Decorative large circle simulating a globe silhouette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full z-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-bold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            Virtual Access Pass
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Join CQTCS 2027 <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">from Anywhere</span>
          </h1>

          <p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium">
            Experience world-class quantum research, keynote sessions, and digital proceedings right from your desk.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
