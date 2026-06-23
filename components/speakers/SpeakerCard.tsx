"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Speaker } from './types';

interface SpeakerCardProps {
  speaker: Speaker;
  onClick: () => void;
}

export default function SpeakerCard({ speaker, onClick }: SpeakerCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      whileHover={{ y: -8, boxShadow: '0 24px 64px rgba(15,23,42,0.18)' }}
      onClick={onClick}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer flex flex-col h-full group"
    >
      {/* Portrait Section */}
      <div className="relative w-full aspect-[3/4] bg-slate-200 overflow-hidden shrink-0">
        {speaker.imageUrl ? (
          <img 
            src={speaker.imageUrl} 
            alt={speaker.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 text-sm">Portrait</div>
        )}
        
        {/* Hover Gradient Overlay */}
        <motion.div
          variants={{
            rest: { y: '100%' },
            hover: { y: '60%' }
          }}
          initial="rest"
          whileHover="hover"
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-t from-gold/90 via-gold/60 to-transparent flex items-end p-6"
        >
          <span className="text-navy-deep font-bold flex items-center gap-2">
            View Profile <ArrowRight size={16} />
          </span>
        </motion.div>
      </div>

      {/* Info Section */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Role Badge */}
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            speaker.role === 'Keynote' ? 'bg-gold/20 text-navy-deep border border-gold/30' : 
            speaker.role === 'Invited' ? 'bg-navy/10 text-navy border border-navy/20' : 
            'bg-slate-100 text-slate-600 border border-slate-200'
          }`}>
            {speaker.role}
          </span>
          
          {/* First Track Tag (limit to 1 to save space) */}
          {speaker.trackTags.length > 0 && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-50 border border-slate-200 text-slate-500 truncate max-w-[120px]">
              {speaker.trackTags[0]}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-[18px] text-navy mb-1">{speaker.name}</h3>
        <p className="text-[14px] text-slate-500 mb-4">{speaker.institution}</p>
        
        <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed mt-auto">
          {speaker.bioExcerpt}
        </p>
      </div>
    </motion.div>
  );
}
