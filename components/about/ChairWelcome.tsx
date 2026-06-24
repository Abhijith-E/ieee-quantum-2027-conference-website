"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ChairWelcome() {
  return (
    <section className="w-full bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Left: Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="shrink-0 relative"
          >
            <div className="w-[300px] h-[300px] rounded-full bg-slate-200 ring-4 ring-[#D4AF37] ring-offset-8 overflow-hidden shadow-2xl relative">
              {/* Portrait Placeholder */}
              <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-500">
                Portrait Image
              </div>
              {/* If you have the image:
              <Image src="/chair-portrait.jpg" alt="General Chair" fill className="object-cover" />
              */}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full border-2 border-gold/30" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-gold/10" />
          </motion.div>

          {/* Right: Welcome Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="text-gold mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <p className="font-serif italic text-2xl md:text-3xl text-slate-700 leading-relaxed mb-8">
              "It is my distinct honor to welcome you to ICQST 2027. As quantum technologies move from theoretical constructs to practical realities, this conference serves as a vital forum for the innovators who are building tomorrow's computational landscape. We look forward to your contributions and to fostering collaborations that will define the next decade of discovery."
            </p>

            <div className="mt-8">
              <h4 className="text-2xl font-bold text-navy">Dr. Alan Placeholder</h4>
              <p className="text-slate-500 font-medium tracking-wide">General Chair, ICQST 2027</p>
              <p className="text-sm text-slate-400">Professor of Quantum Information, CHRIST University</p>
              
              {/* Signature Underline */}
              <div className="mt-4">
                <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 18 C 30 -5, 80 25, 118 2" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
