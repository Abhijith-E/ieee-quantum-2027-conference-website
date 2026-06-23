"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SessionType } from './types';

export type FilterType = 'All Sessions' | SessionType;

const FILTERS: FilterType[] = [
  'All Sessions',
  'Keynote',
  'Oral',
  'Poster',
  'Workshop'
];

interface ProgramFiltersProps {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
}

export default function ProgramFilters({ activeFilter, setActiveFilter }: ProgramFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      {FILTERS.map((filter) => {
        // Exclude 'Break' from explicitly being a filter button
        if (filter === 'Break') return null;

        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive ? 'text-navy-deep' : 'text-slate-500 hover:text-slate-800 border border-slate-200 bg-white'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeProgramFilter"
                className="absolute inset-0 bg-gold rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        );
      })}
    </div>
  );
}
