"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

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

export default function PatronsHero() {
  return (
    <section className="w-full pt-32 pb-16 relative z-10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Gold Pill Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-block px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold-dark text-sm font-semibold tracking-wider uppercase mb-8"
          >
            Conference Dignitaries
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-8"
          >
            Distinguished Patrons
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl md:text-2xl text-slate-600 leading-relaxed font-serif italic max-w-2xl"
          >
            "We are honored by the patronage of eminent academic and institutional leaders."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
