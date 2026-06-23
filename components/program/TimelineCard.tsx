"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Session } from './types';
import BookmarkButton from './BookmarkButton';

interface TimelineCardProps {
  session: Session;
  onClick: (session: Session) => void;
}

export default function TimelineCard({ session, onClick }: TimelineCardProps) {
  
  if (session.type === 'Break') {
    return (
      <div className="flex w-full mb-6 group relative">
        {/* Time Column */}
        <div className="w-[80px] shrink-0 text-right pr-6 pt-3 text-slate-400 font-mono text-sm tracking-tighter">
          {session.startTime}
        </div>
        
        {/* Timeline Line */}
        <div className="w-[2px] bg-slate-200 relative shrink-0">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-300 ring-4 ring-white" />
        </div>
        
        {/* Break Content */}
        <div className="flex-1 pl-8 py-3 opacity-60 flex items-center justify-center">
          <div className="w-full border-t border-dashed border-slate-300 relative flex justify-center">
            <span className="bg-[#FDFBF5] px-4 -mt-3 text-sm italic text-slate-500 font-serif">
              {session.title}
            </span>
          </div>
        </div>
      </div>
    );
  }

  const isKeynote = session.type === 'Keynote';

  const badgeStyles = {
    Keynote: 'bg-gold/20 text-gold-dark border border-gold/30',
    Oral: 'bg-white text-navy border border-navy/30',
    Poster: 'bg-slate-100 text-slate-600 border border-slate-200',
    Workshop: 'bg-amber-100 text-amber-800 border border-amber-200',
    Break: ''
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex w-full mb-8 group cursor-pointer relative"
      onClick={() => onClick(session)}
    >
      {/* Time Column */}
      <div className="w-[80px] shrink-0 text-right pr-6 pt-5 text-slate-500 font-mono text-sm tracking-tighter">
        <div>{session.startTime}</div>
        <div className="text-slate-300 text-xs mt-1">{session.endTime}</div>
      </div>
      
      {/* Timeline Line */}
      <div className="w-[2px] bg-slate-200 relative shrink-0">
        <motion.div 
          className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold ring-4 ring-white shadow-sm"
          whileHover={{ scale: 1.5 }}
        />
        {/* Subtle hover line highlight */}
        <div className="absolute inset-x-0 top-6 bottom-0 w-full bg-gold scale-x-0 group-hover:scale-x-100 origin-top transition-transform duration-500 ease-out" />
      </div>
      
      {/* Session Card */}
      <div className="flex-1 pl-8">
        <div className={`
          p-6 rounded-2xl border transition-all duration-300
          ${isKeynote 
            ? 'bg-[#FDFBF5] border-gold/40 shadow-sm hover:shadow-md' 
            : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
          }
        `}>
          
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeStyles[session.type]}`}>
                {session.type}
              </span>
              {session.location && (
                <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin size={12} />
                  {session.location}
                </span>
              )}
            </div>
            <BookmarkButton sessionId={session.id} />
          </div>

          <div className={`flex ${isKeynote ? 'flex-col md:flex-row md:items-center justify-between gap-6' : 'flex-col'}`}>
            <div className="flex-1">
              <h3 className={`font-semibold text-navy mb-2 ${isKeynote ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                {session.title}
              </h3>
              
              {session.speaker && (
                <div className="flex items-center gap-3 mt-4">
                  {!isKeynote && session.speaker.imageUrl && (
                    <img src={session.speaker.imageUrl} alt={session.speaker.name} className="w-8 h-8 rounded-full object-cover" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-navy-deep">{session.speaker.name}</p>
                    <p className="text-xs text-slate-500">{session.speaker.institution}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Keynote Portrait prominently displayed on the right on desktop */}
            {isKeynote && session.speaker && session.speaker.imageUrl && (
              <div className="shrink-0 hidden md:block">
                <img src={session.speaker.imageUrl} alt={session.speaker.name} className="w-20 h-20 rounded-full object-cover border-2 border-gold/50 shadow-sm" />
              </div>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
