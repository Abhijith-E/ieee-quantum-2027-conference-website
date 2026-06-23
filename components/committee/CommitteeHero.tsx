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

export default function CommitteeHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-16 overflow-hidden relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-700 text-sm font-semibold tracking-wider uppercase mb-6">
            IEEE Technical Co-Sponsorship
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6 relative inline-block">
            Organizing Committee
            {/* Animated Gold Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-2 bg-gold origin-center w-32"
            />
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-slate-600 leading-relaxed mt-10">
            Meet the dedicated team of international experts and local volunteers working to make CQTCS 2026 a premier event for the global quantum community.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
