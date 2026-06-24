"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const milestones = [
  { id: 1, title: 'Submission Open', date: 'January 15, 2027', past: true },
  { id: 2, title: 'Abstract Deadline', date: 'March 30, 2027', past: true },
  { id: 3, title: 'Full Paper Deadline', date: 'April 15, 2027', past: false },
  { id: 4, title: 'Review Period', date: 'May - June 2027', past: false },
  { id: 5, title: 'Author Notification', date: 'July 1, 2027', past: false },
  { id: 6, title: 'Camera-Ready Due', date: 'August 15, 2027', past: false },
  { id: 7, title: 'Conference Dates', date: 'Feb 17-19, 2027', past: false },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-navy-deep py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Important Dates</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Mark your calendar with these critical deadlines for submissions, registration, and the conference itself.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          
          {/* Desktop Horizontal Line */}
          <div className="hidden md:block absolute top-[20px] left-0 w-full h-1 bg-slate-800 rounded-full">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 h-full bg-gold origin-left rounded-full"
            />
          </div>

          {/* Mobile Vertical Line */}
          <div className="md:hidden absolute top-0 left-[20px] w-1 h-full bg-slate-800 rounded-full">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full bg-gold origin-top rounded-full"
            />
          </div>

          {/* Nodes */}
          <div className="flex flex-col md:flex-row justify-between relative gap-8 md:gap-4">
            {milestones.map((milestone, idx) => (
              <div key={milestone.id} className="relative flex md:flex-col items-center md:items-center gap-6 md:gap-4 group z-10 w-full md:w-auto">
                
                {/* Node Circle */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: idx * 0.15 + 0.3, type: "spring", stiffness: 200, damping: 15 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors duration-300 ${
                    milestone.past 
                      ? 'bg-gold border-gold text-navy-deep' 
                      : 'bg-navy-deep border-gold text-gold group-hover:bg-gold/10'
                  }`}
                >
                  {milestone.past ? <Check size={20} strokeWidth={3} /> : <span className="font-bold text-sm">{milestone.id}</span>}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: idx * 0.15 + 0.4 }}
                  className="md:text-center pt-1 md:pt-4"
                >
                  <h3 className="text-white font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-gold text-sm font-medium">{milestone.date}</p>
                </motion.div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
