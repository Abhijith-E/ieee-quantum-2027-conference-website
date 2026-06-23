"use client";

import React, { useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { CalendarPlus } from 'lucide-react';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { ConferenceDeadline } from './data';

interface DatesHeroProps {
  deadlines: ConferenceDeadline[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function DatesHero({ deadlines }: DatesHeroProps) {
  // Find the next upcoming deadline
  const nextDeadline = useMemo(() => {
    const now = new Date();
    const futureDeadlines = deadlines.filter(d => {
      // Set to end of day to include 'Today' as future until midnight
      const date = new Date(d.date);
      date.setUTCHours(23, 59, 59, 999);
      return date.getTime() > now.getTime();
    });
    // Sort just in case they aren't sorted
    futureDeadlines.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return futureDeadlines[0] || null;
  }, [deadlines]);

  return (
    <section className="w-full bg-slate-50 pt-32 pb-20 relative z-10 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Top actions */}
        <div className="flex justify-end mb-8 relative z-20">
          <a 
            href="/api/calendar"
            className="flex items-center gap-2 bg-white text-navy font-bold py-2.5 px-5 rounded-lg border border-slate-200 shadow-sm hover:border-gold hover:text-gold-dark transition-all"
          >
            <CalendarPlus size={18} />
            <span>Add all to Calendar</span>
          </a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl font-extrabold text-navy mb-6"
          >
            Important Dates
          </motion.h1>

          <motion.div variants={itemVariants} className="w-24 h-1.5 bg-gold mb-6 rounded-full" />

          <motion.p 
            variants={itemVariants} 
            className="text-lg md:text-xl text-slate-600 max-w-2xl font-medium mb-12"
          >
            Plan your submissions and travel around these key milestones.
          </motion.p>

          {/* Countdown to Next Deadline */}
          {nextDeadline && (
            <motion.div variants={itemVariants} className="flex flex-col items-center bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Next Deadline: <span className="text-navy">{nextDeadline.title}</span>
              </span>
              <CountdownTimer targetDate={`${nextDeadline.date}T23:59:59Z`} theme="light" />
            </motion.div>
          )}

        </motion.div>
      </div>
    </section>
  );
}
