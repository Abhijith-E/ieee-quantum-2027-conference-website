"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Patron } from './types';

interface PatronsGridProps {
  title: string;
  patrons: Patron[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PatronsGrid({ title, patrons }: PatronsGridProps) {
  return (
    <section className="w-full px-6 relative z-10 py-8">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center text-2xl font-bold text-navy mb-12 uppercase tracking-wide">
          {title}
        </h3>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {patrons.map((patron) => (
            <motion.div
              key={patron.id}
              variants={cardVariants}
              className="bg-white rounded-[20px] border border-slate-200 border-t-4 border-t-[#D4AF37] p-8 flex flex-col items-center text-center shadow-sm"
            >
              {/* Portrait */}
              <div className="w-[96px] h-[96px] rounded-full overflow-hidden mb-6 bg-slate-100 ring-4 ring-slate-50">
                {patron.imageUrl ? (
                  <img src={patron.imageUrl} alt={patron.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                    Photo
                  </div>
                )}
              </div>
              
              <h4 className="text-lg font-bold text-navy mb-2 leading-tight">
                {patron.name}
              </h4>
              
              <p className="text-sm text-slate-600 mb-3 leading-snug">
                {patron.title}
              </p>
              
              <p className="text-sm text-slate-500 italic mt-auto">
                {patron.institution}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
