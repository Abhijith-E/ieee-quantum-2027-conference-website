"use client";

import React from 'react';
import { FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TravelGuide() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24">
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="border-2 border-gold rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gold/5 shadow-sm"
      >
        <div className="flex items-center gap-5 w-full sm:w-auto text-center sm:text-left flex-col sm:flex-row">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-gold/30">
            <FileText size={32} className="text-gold" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-navy mb-1">International Delegate Travel Guide</h3>
            <p className="text-slate-600 font-medium">All transport options, emergency contacts, and Bengaluru essentials.</p>
          </div>
        </div>

        <button className="w-full sm:w-auto bg-navy hover:bg-navy-deep text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors shrink-0 shadow-md">
          <Download size={20} />
          Download PDF
        </button>
      </motion.div>
    </div>
  );
}
