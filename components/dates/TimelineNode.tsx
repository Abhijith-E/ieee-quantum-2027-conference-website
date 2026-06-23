"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, CheckCircle2, AlertCircle } from 'lucide-react';
import { ConferenceDeadline } from './data';

interface TimelineNodeProps {
  deadline: ConferenceDeadline;
  isLeft: boolean;
  isLast: boolean;
}

export default function TimelineNode({ deadline, isLeft, isLast }: TimelineNodeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Calculate Status
  const getStatus = () => {
    const now = new Date();
    now.setUTCHours(0,0,0,0);
    const eventDate = new Date(deadline.date);
    eventDate.setUTCHours(0,0,0,0);
    
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (deadline.isExtended && diffDays >= 0) {
      return { type: 'extended', label: 'Extended Deadline', className: 'bg-emerald-100 text-emerald-700 border-emerald-200' };
    }
    if (diffDays < 0) {
      return { type: 'past', label: 'Completed', className: 'bg-slate-100 text-slate-400 border-slate-200' };
    }
    if (diffDays === 0) {
      return { type: 'today', label: 'Today!', className: 'bg-gold text-navy animate-pulse border-gold border-2' };
    }
    if (diffDays <= 30) {
      return { type: 'soon', label: `${diffDays} Days Remaining`, className: 'bg-amber-100 text-amber-700 border-amber-200 animate-pulse' };
    }
    return { type: 'upcoming', label: new Date(deadline.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), className: 'bg-navy text-white border-navy' };
  };

  const status = getStatus();

  return (
    <div ref={ref} className="relative flex w-full group mb-8 md:mb-0">
      
      {/* Mobile: Line on left. Desktop: Line in center */}
      
      {/* Desktop Left Side */}
      <div className={`hidden md:flex w-1/2 justify-end pr-12 pb-16 relative ${isLeft ? '' : 'invisible'}`}>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-200 transition-shadow"
        >
          <CardContent deadline={deadline} status={status} />
        </motion.div>
      </div>

      {/* Center Line & Node */}
      <div className="absolute left-[30px] md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center h-full z-10">
        <div className="w-12 h-12 rounded-full bg-white border-4 border-gold flex items-center justify-center shadow-md relative z-20">
          {status.type === 'past' ? (
            <CheckCircle2 size={20} className="text-slate-400" />
          ) : status.type === 'today' || status.type === 'soon' ? (
            <AlertCircle size={20} className="text-gold-dark" />
          ) : (
            <Calendar size={20} className="text-navy" />
          )}
        </div>
        
        {/* The line connecting down */}
        {!isLast && (
          <div className="w-1 bg-slate-200 h-full mt-2 relative overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: 'top' }}
              className="absolute inset-0 w-full bg-gold"
            />
          </div>
        )}
      </div>

      {/* Mobile Right Side & Desktop Right Side */}
      <div className={`w-full pl-24 md:pl-0 md:w-1/2 md:flex md:justify-start md:pl-12 pb-16 relative ${!isLeft ? '' : 'md:invisible'}`}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-200 transition-shadow"
        >
          <CardContent deadline={deadline} status={status} />
        </motion.div>
      </div>

    </div>
  );
}

function CardContent({ deadline, status }: { deadline: ConferenceDeadline, status: any }) {
  const displayDate = new Date(deadline.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${status.className}`}>
          {status.type === 'past' && <CheckCircle2 size={12} />}
          {status.label}
        </span>
      </div>
      <h3 className="text-xl font-bold text-navy mb-2 leading-snug">{deadline.title}</h3>
      <p className="text-gold-dark font-semibold text-sm mb-3">{displayDate}</p>
      {deadline.description && (
        <p className="text-slate-500 text-sm">{deadline.description}</p>
      )}
    </div>
  );
}
