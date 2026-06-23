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

export default function SacHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-16 relative z-10 text-center border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-700 text-sm font-semibold tracking-wider uppercase mb-6">
            Global Peer Review
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-6"
          >
            Scientific Advisory Committee
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl text-slate-600 leading-relaxed max-w-2xl"
          >
            Our rigorous international peer review process is guided by eminent researchers spanning over 40 countries, ensuring CQTCS maintains the highest standards of scientific excellence.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
