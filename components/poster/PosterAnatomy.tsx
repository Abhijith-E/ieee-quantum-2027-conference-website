"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function PosterAnatomy() {
  const staggerDelay = 0.06;

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * staggerDelay,
        duration: 0.4
      }
    })
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 mb-20">
      <h2 className="text-3xl font-extrabold text-navy mb-8 text-center">Poster Anatomy Guide</h2>
      
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: Text Guide */}
        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
              <span className="w-4 h-4 bg-gold rounded block" /> Header
            </h3>
            <p className="text-slate-600 text-sm">Should contain the Title (72pt+), Authors, Affiliations, and the Conference Logo.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-200 rounded block" /> Body Columns
            </h3>
            <p className="text-slate-600 text-sm">Structure into Introduction, Methodology, Results, and Conclusion. Use a 2 or 3 column layout for readability.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
              <span className="w-4 h-4 bg-emerald-200 rounded block" /> Visuals
            </h3>
            <p className="text-slate-600 text-sm">High-resolution charts and graphs. Ensure text within figures is at least 18pt.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-2 flex items-center gap-2">
              <span className="w-4 h-4 bg-slate-300 rounded block" /> Sidebar / Footer
            </h3>
            <p className="text-slate-600 text-sm">Include References, Acknowledgements, and a QR Code linking to your full paper or GitHub repo.</p>
          </div>
        </div>

        {/* Right: Visual Mockup */}
        <div className="w-full max-w-sm shrink-0 bg-slate-100 p-4 rounded-xl shadow-inner border border-slate-200 aspect-[1/1.4] flex flex-col gap-3">
          
          {/* Header */}
          <motion.div 
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={blockVariants}
            className="w-full h-24 bg-gold/80 rounded-lg border-2 border-gold flex items-center justify-center p-2 text-center"
          >
            <span className="text-navy-deep font-bold text-xs uppercase">Title, Authors & Logos</span>
          </motion.div>

          {/* Main Content Grid */}
          <div className="flex-1 flex gap-3">
            
            {/* Col 1 */}
            <div className="flex-1 flex flex-col gap-3">
              <motion.div 
                custom={2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={blockVariants}
                className="h-1/3 w-full bg-blue-200/50 rounded-lg border-2 border-blue-300 flex items-center justify-center"
              >
                <span className="text-blue-800 font-bold text-[10px] uppercase">Intro</span>
              </motion.div>
              <motion.div 
                custom={3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={blockVariants}
                className="flex-1 w-full bg-blue-200/50 rounded-lg border-2 border-blue-300 flex items-center justify-center"
              >
                <span className="text-blue-800 font-bold text-[10px] uppercase">Methods</span>
              </motion.div>
            </div>

            {/* Col 2 */}
            <div className="flex-[1.2] flex flex-col gap-3">
              <motion.div 
                custom={4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={blockVariants}
                className="h-1/2 w-full bg-emerald-200/50 rounded-lg border-2 border-emerald-300 flex items-center justify-center"
              >
                <span className="text-emerald-800 font-bold text-[10px] uppercase">Results (Chart)</span>
              </motion.div>
              <motion.div 
                custom={5} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={blockVariants}
                className="flex-1 w-full bg-emerald-200/50 rounded-lg border-2 border-emerald-300 flex items-center justify-center"
              >
                <span className="text-emerald-800 font-bold text-[10px] uppercase">Results (Table)</span>
              </motion.div>
            </div>

            {/* Col 3 (Sidebar) */}
            <div className="flex-[0.8] flex flex-col gap-3">
              <motion.div 
                custom={6} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={blockVariants}
                className="flex-1 w-full bg-blue-200/50 rounded-lg border-2 border-blue-300 flex items-center justify-center p-1 text-center"
              >
                <span className="text-blue-800 font-bold text-[10px] uppercase">Conclusion</span>
              </motion.div>
              <motion.div 
                custom={7} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={blockVariants}
                className="h-24 w-full bg-slate-300/50 rounded-lg border-2 border-slate-400 flex flex-col items-center justify-center gap-1"
              >
                <div className="w-8 h-8 bg-slate-800 rounded-sm" />
                <span className="text-slate-700 font-bold text-[8px] uppercase">QR Code</span>
              </motion.div>
              <motion.div 
                custom={8} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={blockVariants}
                className="h-16 w-full bg-slate-300/50 rounded-lg border-2 border-slate-400 flex items-center justify-center"
              >
                <span className="text-slate-700 font-bold text-[8px] uppercase">Refs</span>
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
