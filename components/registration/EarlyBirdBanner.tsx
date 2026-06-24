"use client";

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function EarlyBirdBanner() {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number } | null>(null);

  useEffect(() => {
    const targetDate = new Date('2026-12-15T23:59:59Z').getTime(); // Early Bird deadline

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null; // Avoid hydration mismatch

  return (
    <div className="bg-amber-50 border border-amber-300 rounded-xl py-3 px-6 flex items-center justify-center gap-3 w-full max-w-2xl mx-auto mb-10 shadow-sm text-amber-900">
      <Clock size={20} className="text-amber-500 shrink-0" />
      <span className="font-bold text-sm sm:text-base">
        ⚡ Early Bird Pricing ends in {timeLeft.days} days {timeLeft.hours}h {timeLeft.minutes}m
      </span>
    </div>
  );
}
