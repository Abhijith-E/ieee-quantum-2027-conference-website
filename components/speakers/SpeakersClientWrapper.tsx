"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Speaker } from './types';
import SpeakerCard from './SpeakerCard';
import SpeakerModal from './SpeakerModal';

interface SpeakersClientWrapperProps {
  initialSpeakers: Speaker[];
}

const ALL_TRACKS = 'All Tracks';

export default function SpeakersClientWrapper({ initialSpeakers }: SpeakersClientWrapperProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<string>(ALL_TRACKS);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  // Extract unique tracks from speakers for filter pills
  const availableTracks = useMemo(() => {
    const tracks = new Set<string>();
    initialSpeakers.forEach(s => s.trackTags.forEach(t => tracks.add(t)));
    return [ALL_TRACKS, ...Array.from(tracks).sort()];
  }, [initialSpeakers]);

  // Client-side filtering
  const filteredSpeakers = initialSpeakers.filter(speaker => {
    const matchesSearch = 
      searchQuery === '' ||
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.talkTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.trackTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesTrack = 
      selectedTrack === ALL_TRACKS ||
      speaker.trackTags.includes(selectedTrack);
      
    return matchesSearch && matchesTrack;
  });

  return (
    <>
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Search + Filter Bar Row */}
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between mb-12">
            
            {/* Search Input */}
            <div className="relative w-full lg:w-80 shrink-0">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Search size={18} />
              </div>
              <input
                type="text"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all bg-slate-50 text-slate-700 text-sm"
                placeholder="Search name or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {availableTracks.map(track => {
                const isActive = selectedTrack === track;
                return (
                  <button
                    key={track}
                    onClick={() => setSelectedTrack(track)}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive ? 'text-navy-deep' : 'text-slate-500 hover:text-slate-800 border border-slate-200 bg-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-gold rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{track}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Speakers Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredSpeakers.length > 0 ? (
                filteredSpeakers.map(speaker => (
                  <SpeakerCard 
                    key={speaker.id} 
                    speaker={speaker} 
                    onClick={() => setSelectedSpeaker(speaker)} 
                  />
                ))
              ) : (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full py-16 text-center text-slate-500 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <p className="text-lg">No speakers found matching your criteria.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedTrack(ALL_TRACKS); }}
                    className="mt-4 text-gold font-semibold hover:text-navy transition-colors"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>

      {/* Detail Modal */}
      <SpeakerModal 
        speaker={selectedSpeaker} 
        onClose={() => setSelectedSpeaker(null)} 
      />
    </>
  );
}
