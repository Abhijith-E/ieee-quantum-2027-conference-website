"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Calendar } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PreConfHero() {
  return (
    <section className="w-full bg-[#fdfaf5] pt-32 pb-20 relative z-10 border-b border-amber-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start md:items-center md:text-center"
        >
          {/* Day 0 Banner */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center gap-3 bg-amber-50 border-l-4 border-amber-400 text-amber-900 px-4 py-2 mb-6 rounded-r-md shadow-sm"
          >
            <span className="font-bold tracking-wide uppercase text-sm">Day 0 — Pre-Conference</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
            <div className="flex items-center gap-1.5 text-sm font-medium opacity-80">
              <Calendar size={14} />
              Oct 11, 2026
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6"
          >
            Preparatory Masterclasses
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium"
          >
            Immerse yourself in intensive, expert-led training sessions designed to elevate your technical proficiency before the main conference begins.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
