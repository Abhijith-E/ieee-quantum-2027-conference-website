"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

const AnimatedStat = ({ value, label, suffix = '' }: StatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    mass: 1,
  });

  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="flex items-baseline justify-center text-[56px] font-bold text-gold font-sans leading-none mb-2">
        <motion.span>{displayValue}</motion.span>
        {suffix && <span className="text-4xl ml-1">{suffix}</span>}
      </div>
      <div className="text-sm font-medium text-slate-400 uppercase tracking-widest font-sans">
        {label}
      </div>
    </div>
  );
};

export default function StatsStrip() {
  const stats = [
    { value: 32, label: 'Countries', suffix: '+' },
    { value: 280, label: 'Submissions', suffix: '+' },
    { value: 90, label: 'Speakers', suffix: '+' },
    { value: 3, label: 'Conference Days', suffix: '' },
    { value: 18, label: 'Acceptance Rate', suffix: '%' },
    { value: 1200, label: 'Attendees', suffix: '+' },
  ];

  return (
    <section className="w-full bg-navy py-16 relative z-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 gap-y-12">
          {stats.map((stat, idx) => (
            <AnimatedStat 
              key={idx} 
              value={stat.value} 
              label={stat.label} 
              suffix={stat.suffix} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
