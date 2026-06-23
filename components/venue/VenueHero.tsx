"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VenueHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-end justify-center pb-20">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80"
        alt="CHRIST University Campus"
        fill
        className="object-cover"
        priority
        unoptimized
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            CHRIST (Deemed to be University), Bengaluru
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto drop-shadow-md">
            Bannerghatta Road, Bengaluru — 560029, Karnataka, India
          </p>
        </motion.div>
      </div>
    </section>
  );
}
