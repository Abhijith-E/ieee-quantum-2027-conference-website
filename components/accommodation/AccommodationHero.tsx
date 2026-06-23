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

export default function AccommodationHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-20 relative z-10 text-center border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl font-extrabold text-navy leading-tight mb-6"
          >
            Accommodation
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl text-slate-600 leading-relaxed max-w-2xl"
          >
            Stay comfortably — official and curated options near CHRIST University to ensure a seamless conference experience.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
