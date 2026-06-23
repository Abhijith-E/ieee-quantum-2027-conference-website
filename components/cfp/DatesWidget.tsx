"use client";

import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

const dates = [
  { id: 1, event: 'Abstract Submission', date: new Date('2026-03-30T23:59:59') },
  { id: 2, event: 'Full Paper Deadline', date: new Date('2026-04-15T23:59:59') },
  { id: 3, event: 'Author Notification', date: new Date('2026-07-01T23:59:59') },
  { id: 4, event: 'Camera-Ready Due', date: new Date('2026-08-15T23:59:59') },
];

// Helper to determine status
const getStatus = (targetDate: Date) => {
  const now = new Date();
  const diffTime = targetDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'past';
  if (diffDays <= 30) return 'soon';
  return 'upcoming';
};

interface DatesWidgetProps {
  variant?: 'inline' | 'sidebar';
}

export default function DatesWidget({ variant = 'inline' }: DatesWidgetProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number} | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Find next deadline
    const now = new Date();
    const nextDeadline = dates.find(d => d.date.getTime() > now.getTime());
    
    if (nextDeadline) {
      const updateTimer = () => {
        const diff = nextDeadline.date.getTime() - new Date().getTime();
        if (diff > 0) {
          setTimeLeft({
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24)
          });
        }
      };
      updateTimer();
      const interval = setInterval(updateTimer, 60000); // update every minute
      return () => clearInterval(interval);
    }
  }, []);

  // Format date string safely
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  if (!mounted) return null; // Avoid hydration mismatch for dates

  if (variant === 'sidebar') {
    return (
      <div className="mt-8 pt-8 border-t border-slate-200">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="text-gold" size={20} />
          <h3 className="font-bold text-navy text-lg">Important Dates</h3>
        </div>
        
        <div className="space-y-4">
          {dates.map((item) => {
            const status = getStatus(item.date);
            return (
              <div key={item.id} className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${status === 'past' ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                    {item.event}
                  </span>
                  {status === 'soon' && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                      Soon
                    </span>
                  )}
                </div>
                <span className={`text-xs ${status === 'past' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {formatDate(item.date)}
                </span>
              </div>
            );
          })}
        </div>
        
        <a href="#" className="inline-block mt-6 text-sm font-semibold text-gold hover:text-navy transition-colors">
          View all dates →
        </a>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h3 className="text-2xl font-bold text-navy">Important Dates</h3>
        {timeLeft && (
          <div className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md">
            <Clock size={16} className="text-gold" />
            Next Deadline in {timeLeft.days}d {timeLeft.hours}h
          </div>
        )}
      </div>

      <div className="space-y-4">
        {dates.map((item) => {
          const status = getStatus(item.date);
          return (
            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-slate-200 last:border-0 gap-2">
              <span className={`font-medium ${status === 'past' ? 'text-slate-400 line-through' : 'text-slate-800'}`}>
                {item.event}
              </span>
              <div className="flex items-center gap-3">
                <span className={`text-sm ${status === 'past' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {formatDate(item.date)}
                </span>
                {status === 'soon' && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
