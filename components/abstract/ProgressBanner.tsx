"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBanner() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center pt-32 pb-16 px-6 relative z-10">
      
      {/* Banner Strip */}
      <div className="bg-navy text-white rounded-full py-3 px-8 text-center font-bold tracking-wide shadow-md mb-8">
        Step 1 of 2 — Abstract Submission
      </div>

      {/* Visualizer Flow */}
      <div className="flex items-center gap-4 mb-10 w-full max-w-sm">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gold text-navy-deep font-black flex items-center justify-center shadow-sm">
            1
          </div>
          <span className="text-sm font-bold text-navy">Abstract</span>
        </div>

        {/* Animated Dashed Line */}
        <div className="flex-1 h-0.5 relative flex items-center">
          {/* Background Dashed Line */}
          <div className="absolute inset-0 border-b-2 border-dashed border-slate-200" />
          {/* Animated Solid Line overlay */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <motion.line 
              x1="0" y1="50%" x2="100%" y2="50%" 
              stroke="#D4AF37" 
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ strokeDashoffset: 40 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </svg>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center gap-2 opacity-50">
          <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 font-bold flex items-center justify-center border border-slate-300">
            2
          </div>
          <span className="text-sm font-bold text-slate-500">Full Paper</span>
        </div>

      </div>

      {/* Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center text-amber-900 w-full">
        <span className="font-bold block mb-1">Abstract deadline: April 15, 2026</span>
        <span className="text-sm opacity-90">Full paper invitation sent within 7 days of abstract acceptance.</span>
      </div>

    </div>
  );
}
