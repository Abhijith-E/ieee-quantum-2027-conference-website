"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PHOTOS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80', alt: 'Campus Main Entrance' },
  { id: 2, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80', alt: 'Library' },
  { id: 3, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80', alt: 'Green Campus Spaces' },
  { id: 4, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80', alt: 'Auditorium Interior' },
  { id: 5, src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80', alt: 'Conference Hall' },
  { id: 6, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', alt: 'Corridors' },
];

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % PHOTOS.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + PHOTOS.length) % PHOTOS.length);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24">
      <h2 className="text-3xl font-extrabold text-navy mb-8">Campus Gallery</h2>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {PHOTOS.map((photo, idx) => (
          <div 
            key={photo.id} 
            className="relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setLightboxIndex(idx)}
          >
            <div className="w-full relative aspect-[4/3]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50 transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={32} />
            </button>

            {/* Prev Button */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 z-50 transition-colors"
              onClick={handlePrev}
            >
              <ChevronLeft size={48} />
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-4 z-50 transition-colors"
              onClick={handleNext}
            >
              <ChevronRight size={48} />
            </button>

            {/* Image Container */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-video rounded-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PHOTOS[lightboxIndex].src}
                alt={PHOTOS[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
                unoptimized
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 text-sm">
                {PHOTOS[lightboxIndex].alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
