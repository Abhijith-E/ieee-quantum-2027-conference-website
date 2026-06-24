"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: string; // ISO string
  theme?: 'dark' | 'light';
}

export default function CountdownTimer({ targetDate, theme = 'dark' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  const isLight = theme === 'light';

  return (
    <div className={`flex space-x-4 md:space-x-8 rounded-2xl px-6 py-4 md:px-8 ${
      isLight 
        ? 'bg-white border border-slate-200 shadow-sm' 
        : 'backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl'
    }`}>
      {timeBlocks.map((block, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className={`relative h-12 md:h-14 flex items-center justify-center overflow-hidden ${block.label === 'DAYS' && block.value > 99 ? 'w-20 md:w-28' : 'w-16 md:w-20'}`}>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={block.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute text-3xl md:text-5xl font-bold font-sans tabular-nums ${
                  isLight ? 'text-navy-deep' : 'text-gold'
                }`}
              >
                {String(block.value).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className={`text-[10px] md:text-xs font-medium tracking-widest mt-1 uppercase ${
            isLight ? 'text-slate-500' : 'text-slate-400'
          }`}>
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
