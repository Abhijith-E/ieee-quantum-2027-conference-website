"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    num: 1,
    title: 'Submit',
    desc: 'Upload anonymized PDF via EDAS'
  },
  {
    num: 2,
    title: 'Initial Screen',
    desc: 'Checked for scope & formatting'
  },
  {
    num: 3,
    title: 'Peer Review',
    desc: '3 independent double-blind reviews'
  },
  {
    num: 4,
    title: 'Decision',
    desc: 'Notification of acceptance'
  }
];

export default function ReviewProcessStepper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Review Process</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            All submissions undergo a rigorous evaluation to ensure the highest scientific quality.
          </p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          
          {/* Horizontal Line Background (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-1 bg-slate-100 rounded-full">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-0 left-0 h-full bg-gold origin-left rounded-full"
            />
          </div>

          {/* Vertical Line Background (Mobile) */}
          <div className="md:hidden absolute top-[10%] bottom-[10%] left-[28px] w-1 bg-slate-100 rounded-full">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              className="absolute top-0 left-0 w-full bg-gold origin-top rounded-full"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.num} className="flex md:flex-col items-center md:items-center text-left md:text-center gap-6 md:gap-4 w-full md:w-1/4">
                
                {/* Circle */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: idx * 0.25 + 0.5, type: "spring", stiffness: 200, damping: 15 }}
                  className="w-14 h-14 shrink-0 rounded-full bg-navy border-4 border-white shadow-md flex items-center justify-center text-gold font-bold text-xl relative z-10"
                >
                  {step.num}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: idx * 0.25 + 0.6 }}
                  className="flex-1"
                >
                  <h3 className="text-lg font-bold text-navy mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-snug max-w-[160px] md:mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
