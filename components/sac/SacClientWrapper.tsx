"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SacMember, Region } from './types';
import SacCard from './SacCard';

const REGIONS: (Region | 'All')[] = [
  'All',
  'Asia-Pacific',
  'North America',
  'Europe',
  'Middle East & Africa'
];

interface SacClientWrapperProps {
  members: SacMember[];
}

export default function SacClientWrapper({ members }: SacClientWrapperProps) {
  const [activeRegion, setActiveRegion] = useState<Region | 'All'>('All');

  const filteredMembers = members.filter(
    member => activeRegion === 'All' || member.region === activeRegion
  );

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {REGIONS.map(region => {
            const isActive = activeRegion === region;
            return (
              <button
                key={region}
                onClick={() => setActiveRegion(region)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive ? 'text-navy-deep' : 'text-slate-500 hover:text-slate-800 border border-slate-200 bg-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="sacRegionFilter"
                    className="absolute inset-0 bg-gold rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{region}</span>
              </button>
            );
          })}
        </div>

        {/* Members Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMembers.map(member => (
              <SacCard key={member.id} member={member} />
            ))}
            
            {filteredMembers.length === 0 && (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-16 text-center text-slate-500 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <p>No advisory committee members found for this region.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
