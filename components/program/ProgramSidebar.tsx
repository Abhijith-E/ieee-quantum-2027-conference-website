"use client";

import React from 'react';
import { DayTab } from './types';

const DAYS: DayTab[] = [
  'Day 1 (Oct 12)',
  'Day 2 (Oct 13)',
  'Day 3 (Oct 14)'
];

interface ProgramSidebarProps {
  activeDay: DayTab;
  setActiveDay: (day: DayTab) => void;
}

export default function ProgramSidebar({ activeDay, setActiveDay }: ProgramSidebarProps) {
  return (
    <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
      {DAYS.map((day) => {
        const isActive = activeDay === day;
        return (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`
              flex-shrink-0 lg:flex-shrink w-40 lg:w-full text-left px-5 py-4 rounded-xl lg:rounded-none lg:rounded-r-xl transition-all font-semibold
              ${isActive 
                ? 'bg-navy text-white shadow-md lg:border-l-4 lg:border-l-[#D4AF37]' 
                : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-navy border border-slate-200 lg:border-none lg:border-l-4 lg:border-l-transparent'
              }
            `}
          >
            <div className="text-sm opacity-80 mb-1">{day.split(' ')[0]}</div>
            <div className="text-lg">{day.split(' ').slice(1).join(' ')}</div>
          </button>
        );
      })}
    </div>
  );
}
