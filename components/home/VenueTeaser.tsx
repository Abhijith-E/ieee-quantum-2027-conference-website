"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Calendar } from 'lucide-react';
import { colors } from '@/lib/tokens';

export default function VenueTeaser() {
  return (
    <section className="w-full bg-slate-50 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="rounded-3xl overflow-hidden bg-white shadow-[0_16px_48px_rgba(15,23,42,0.1)] flex flex-col lg:flex-row">
          
          {/* Left Half: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 aspect-video lg:aspect-auto relative bg-slate-200"
          >
            {/* Placeholder for Campus Photo */}
            <div className="absolute inset-0 bg-navy/5 flex items-center justify-center">
              <span className="text-slate-400 font-medium">CHRIST University Campus Photo</span>
            </div>
            {/* If you have the real image, replace with next/image */}
            {/* <Image src="/venue.jpg" alt="Conference Venue" fill className="object-cover" /> */}
          </motion.div>

          {/* Right Half: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-navy/20 bg-navy/5 text-navy text-sm font-semibold tracking-wider uppercase mb-6 self-start">
              The Venue
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              CHRIST (Deemed to be University)
            </h2>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-navy font-semibold text-lg">Bangalore Central Campus</p>
                  <p className="text-slate-600">Hosur Road, Bengaluru, Karnataka 560029, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Calendar className="text-gold shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-navy font-semibold text-lg">February 17–19, 2027</p>
                  <p className="text-slate-600">Three days of intensive sessions and networking</p>
                </div>
              </div>
            </div>

            <Link href="/venue">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: colors.navyDeep }}
                whileTap={{ scale: 0.98 }}
                className="bg-navy text-white font-bold rounded-xl px-8 py-4 w-full sm:w-auto transition-colors shadow-lg"
              >
                Explore Venue & Travel Guide
              </motion.button>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
