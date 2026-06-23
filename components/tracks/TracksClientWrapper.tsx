"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import TrackCard from './TrackCard';

export interface TrackChair {
  name: string;
  institution: string;
  email: string;
}

export interface Track {
  id: string;
  title: string;
  scope: string;
  topics: string[];
  chair: TrackChair;
}

interface TracksClientWrapperProps {
  initialTracks: Track[];
}

export default function TracksClientWrapper({ initialTracks }: TracksClientWrapperProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Client-side filtering
  const filteredTracks = initialTracks.filter(track => {
    const query = searchQuery.toLowerCase();
    return (
      track.title.toLowerCase().includes(query) ||
      track.scope.toLowerCase().includes(query) ||
      track.topics.some(t => t.toLowerCase().includes(query)) ||
      track.chair.name.toLowerCase().includes(query)
    );
  });

  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-white text-slate-700"
            placeholder="Search tracks by keyword, topic, or chair..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Tracks Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTracks.length > 0 ? (
              filteredTracks.map(track => (
                <TrackCard key={track.id} track={track} />
              ))
            ) : (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-12 text-center text-slate-500"
              >
                No tracks found matching "{searchQuery}".
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
}
