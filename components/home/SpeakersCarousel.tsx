"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export interface Speaker {
  id: string;
  name: string;
  institution: string;
  imageUrl: string;
}

interface SpeakersCarouselProps {
  speakers: Speaker[];
}

export default function SpeakersCarousel({ speakers }: SpeakersCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      // Scroll exactly by one card width + gap (approx 340px)
      const scrollAmount = 340; 
      carouselRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section className="relative w-full bg-navy py-24 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Keynotes & Plenaries
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            World-Class Speakers
          </motion.h2>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.1)', borderColor: 'rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-white hover:text-gold transition-colors backdrop-blur-sm bg-white/5"
          >
            <ArrowLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.1)', borderColor: 'rgba(212, 175, 55, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full border border-slate-700 flex items-center justify-center text-white hover:text-gold transition-colors backdrop-blur-sm bg-white/5"
          >
            <ArrowRight size={24} />
          </motion.button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 w-full pl-6 md:pl-[max(1.5rem,calc((100%-80rem)/2+1.5rem))]">
        
        {/* Right Fade Overlay for aesthetics */}
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-navy to-transparent z-20 pointer-events-none" />

        <div 
          ref={carouselRef} 
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-12 pt-4 pr-[20vw]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={speaker.id}
              className="relative w-[300px] h-[420px] rounded-3xl overflow-hidden group shrink-0 snap-start bg-slate-800 shadow-2xl border border-white/10"
            >
              {/* Fallback background */}
              <div className="absolute inset-0 bg-slate-900" />
              
              {/* Image with zoom effect */}
              {speaker.imageUrl && (
                <img 
                  src={speaker.imageUrl} 
                  alt={speaker.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  draggable={false}
                />
              )}
              
              {/* Gradient overlays for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              
              {/* Content Box */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                
                {/* Decorative Line */}
                <motion.div 
                  className="w-8 h-1 bg-gold mb-5 rounded-full" 
                  initial={{ width: "2rem" }}
                  whileHover={{ width: "4rem" }}
                  transition={{ duration: 0.3 }}
                />
                
                <h3 className="text-2xl font-black text-white mb-2 leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {speaker.name}
                </h3>
                
                <p className="text-gold font-medium text-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  {speaker.institution}
                </p>

                {/* Subtle view details prompt */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-150">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
