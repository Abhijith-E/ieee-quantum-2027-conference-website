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

export default function TracksHero() {
  return (
    <section className="w-full bg-white pt-32 pb-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6 relative">
            Research Tracks
            {/* Animated Gold Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 h-2 bg-gold origin-left w-32"
            />
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-slate-600 leading-relaxed mt-10">
            Explore the diverse areas of quantum technologies and computer science covered at ICQST 2027. Submissions should align with one of the primary tracks below.
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none opacity-50" />
    </section>
  );
}
