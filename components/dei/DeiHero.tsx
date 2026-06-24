"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';

export default function DeiHero() {
  return (
    <section className="w-full bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 pt-32 pb-20 relative overflow-hidden text-center border-b border-rose-100">
      
      {/* Decorative background blur blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-[30%] -right-[10%] w-[400px] h-[400px] bg-amber-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/50 text-white">
            <HeartHandshake size={32} />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight mb-6">
            Diversity, Equity & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">Inclusion</span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-medium">
            "Innovation in quantum technologies requires a multitude of perspectives. We are dedicated to ensuring ICQST is a welcoming platform for everyone."
            <br/>
            <span className="text-sm font-bold text-slate-500 mt-2 block">— General Chairs, IEEE ICQST 2027</span>
          </p>

        </motion.div>
      </div>
    </section>
  );
}
