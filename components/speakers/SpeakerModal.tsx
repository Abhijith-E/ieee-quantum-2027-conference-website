"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, GraduationCap, Globe, Link, MessageCircle } from 'lucide-react';
import { Speaker } from './types';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
}

export default function SpeakerModal({ speaker, onClose }: SpeakerModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (speaker) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [speaker]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {speaker && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-deep/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white w-full max-w-5xl max-h-[90vh] rounded-3xl shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-slate-500 hover:text-navy hover:bg-slate-100 transition-colors shadow-sm border border-slate-200"
            >
              <X size={20} />
            </motion.button>

            {/* Left Column: Portrait & Socials */}
            <div className="w-full md:w-2/5 bg-slate-50 border-r border-slate-200 p-8 flex flex-col items-center justify-center md:justify-start">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8 bg-slate-200 shrink-0">
                {speaker.imageUrl ? (
                  <img src={speaker.imageUrl} alt={speaker.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 text-sm">Portrait</div>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                {speaker.socials.linkedin && (
                  <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors shadow-sm">
                    <Link size={18} />
                  </a>
                )}
                {speaker.socials.googleScholar && (
                  <a href={speaker.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-[#4285F4] hover:border-[#4285F4] transition-colors shadow-sm">
                    <GraduationCap size={18} />
                  </a>
                )}
                {speaker.socials.twitter && (
                  <a href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-black hover:border-black transition-colors shadow-sm">
                    <MessageCircle size={18} />
                  </a>
                )}
                {speaker.socials.website && (
                  <a href={speaker.socials.website} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-gold hover:border-gold transition-colors shadow-sm">
                    <Globe size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
              <div className="mb-2 flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  speaker.role === 'Keynote' ? 'bg-gold/20 text-navy-deep border border-gold/30' : 
                  speaker.role === 'Invited' ? 'bg-navy/10 text-navy border border-navy/20' : 
                  'bg-slate-100 text-slate-600 border border-slate-200'
                }`}>
                  {speaker.role} Speaker
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">{speaker.name}</h2>
              <p className="text-lg text-slate-500 mb-8">{speaker.institution}</p>

              <blockquote className="border-l-4 border-gold pl-6 py-2 mb-8 bg-gold/5 rounded-r-lg">
                <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-2">Speaking On</p>
                <p className="text-xl md:text-2xl font-serif italic text-navy leading-snug">"{speaker.talkTitle}"</p>
              </blockquote>

              <div className="prose prose-slate max-w-none text-slate-600 mb-10 leading-relaxed">
                <p>{speaker.fullBio}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {speaker.researchInterests.map((interest, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
