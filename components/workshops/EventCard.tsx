"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { WorkshopEvent } from './types';

interface EventCardProps {
  event: WorkshopEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
    >
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          event.type === 'Workshop' ? 'bg-navy/10 text-navy-deep border border-navy/20' : 'bg-gold/20 text-gold-dark border border-gold/30'
        }`}>
          {event.type}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
          {event.duration}
        </span>
      </div>

      {/* Title & Organizer */}
      <h3 className="text-[22px] font-semibold text-navy leading-snug mb-4">
        {event.title}
      </h3>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
          {event.organizer.imageUrl ? (
            <img src={event.organizer.imageUrl} alt={event.organizer.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400 text-[10px] uppercase font-bold">Photo</div>
          )}
        </div>
        <div>
          <div className="text-sm font-bold text-navy">{event.organizer.name}</div>
          <div className="text-xs text-slate-500 font-medium">{event.organizer.institution}</div>
        </div>
      </div>

      {/* Abstract with Read More */}
      <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 relative">
        <motion.div
          animate={{ height: isExpanded ? 'auto' : '4.5rem' }}
          className={`overflow-hidden text-sm text-slate-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}
        >
          {event.abstract}
        </motion.div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-xs font-bold text-gold-dark mt-2 hover:text-navy transition-colors"
        >
          {isExpanded ? (
            <>Read less <ChevronUp size={14} /></>
          ) : (
            <>Read more <ChevronDown size={14} /></>
          )}
        </button>
      </div>

      {/* Topics */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {event.topics.map(topic => (
            <span key={topic} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Meta Info */}
      <div className="mt-auto border-t border-slate-100 pt-6">
        
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6 text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <Calendar size={16} className="text-slate-400" />
            {event.date}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-slate-400" />
            {event.time}
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={16} className="text-slate-400" />
            {event.room}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between mt-6">
          {event.requiresSeparateRegistration ? (
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              * Requires Separate Registration
            </span>
          ) : (
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              Included in Full Pass
            </span>
          )}
          
          <button className="flex items-center gap-2 px-5 py-2 text-sm font-bold text-gold-dark border-2 border-gold/40 hover:border-gold hover:bg-gold hover:text-white rounded-lg transition-all shadow-sm">
            Register <ExternalLink size={14} />
          </button>
        </div>

      </div>
    </motion.div>
  );
}
