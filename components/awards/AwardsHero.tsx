"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AwardsHero() {
  return (
    <section className="w-full bg-[#0F172A] pt-32 pb-20 relative overflow-hidden text-center">
      {/* Decorative background rays */}
      <div className="absolute inset-0 z-0 opacity-20 flex justify-center items-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(212,175,55,0.2)_350deg_360deg)] animate-[spin_10s_linear_infinite] rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute w-[800px] h-[800px] bg-[conic-gradient(from_180deg,transparent_0_340deg,rgba(212,175,55,0.2)_350deg_360deg)] animate-[spin_15s_linear_infinite_reverse] rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Animated Trophy SVG */}
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0], 
              filter: [
                'drop-shadow(0 0 8px rgba(212,175,55,0.5))', 
                'drop-shadow(0 0 24px rgba(212,175,55,0.8))', 
                'drop-shadow(0 0 8px rgba(212,175,55,0.5))'
              ] 
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="mb-8 relative"
          >
            {/* Core Glow */}
            <div className="absolute inset-0 bg-gold rounded-full blur-xl opacity-30"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold relative z-10 drop-shadow-lg">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Research</span>
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
            Recognizing outstanding contributions to quantum science and computer engineering.
          </p>

        </motion.div>
      </div>
    </section>
  );
}
