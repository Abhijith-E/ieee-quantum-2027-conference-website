"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [speakers]);

  // Handle manual scroll via buttons
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      const target = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      carouselRef.current.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-navy py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Keynotes
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">World-Class Speakers</h2>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft size={20} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-slate-800 transition-colors"
          >
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </div>

      <div className="ml-6 md:ml-[max(1.5rem,calc((100%-80rem)/2+1.5rem))]">
        <motion.div ref={carouselRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6 w-max pr-6"
          >
            {speakers.map((speaker) => (
              <motion.div
                key={speaker.id}
                className="relative w-[280px] h-[400px] rounded-2xl overflow-hidden group shrink-0"
              >
                {/* Fallback background if image fails/is empty */}
                <div className="absolute inset-0 bg-slate-800" />
                
                {speaker.imageUrl && (
                  <img 
                    src={speaker.imageUrl} 
                    alt={speaker.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent opacity-80" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-1 bg-gold mb-4" />
                  <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                  <p className="text-slate-300 text-sm">{speaker.institution}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
