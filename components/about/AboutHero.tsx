"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2">
          {/* Breadcrumbs */}
          <div className="text-slate-400 font-medium text-sm mb-6 flex items-center space-x-2">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>›</span>
            <span className="text-slate-600">About</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-[64px] font-extrabold text-navy leading-tight mb-6"
          >
            About IEEE CQTCS 2026
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="h-[3px] bg-gold origin-left w-16"
          />
        </div>

        {/* Right Side: Abstract Wave SVG */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[400px]">
              <path d="M0 150 C100 50, 200 250, 400 150" stroke="#E2E8F0" strokeWidth="2" fill="none" />
              <path d="M0 170 C100 70, 200 270, 400 170" stroke="#D4AF37" strokeWidth="4" fill="none" opacity="0.8" />
              <path d="M0 190 C100 90, 200 290, 400 190" stroke="#0F172A" strokeWidth="2" fill="none" opacity="0.3" />
              <circle cx="200" cy="150" r="8" fill="#D4AF37" />
              <circle cx="100" cy="100" r="4" fill="#0F172A" />
              <circle cx="300" cy="200" r="6" fill="#0F172A" />
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
