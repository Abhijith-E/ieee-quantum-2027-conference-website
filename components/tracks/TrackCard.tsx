"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowRight, BookOpen } from 'lucide-react';
import { Track } from './TracksClientWrapper';

// Helper to deterministically generate a color based on track ID
const getTrackColor = (id: string) => {
  // Simple hash function for string
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Map hash to one of 12 distinct hues
  const hue = Math.abs(hash) % 12 * 30; // 360 / 12 = 30
  return `hsl(${hue}, 70%, 45%)`;
};

interface TrackCardProps {
  track: Track;
}

export default function TrackCard({ track }: TrackCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const bgColor = getTrackColor(track.id);
  
  // Truncate topics logic
  const visibleTopics = track.topics.slice(0, 3);
  const remainingCount = track.topics.length - 3;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
    >
      <div className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: bgColor }}
          >
            {/* Using a generic BookOpen icon for all tracks, in a real app this could be dynamic */}
            <BookOpen size={24} className="text-white" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-[20px] font-semibold text-navy leading-tight mb-1">{track.title}</h3>
            <p className="text-[12px] text-slate-500">
              Chaired by {track.chair.name}, {track.chair.institution}
            </p>
          </div>
        </div>

        {/* Expandable Scope */}
        <div className="mb-4">
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 48 }}
            className="overflow-hidden relative"
          >
            <p className="text-slate-600 text-sm leading-relaxed">
              {track.scope}
            </p>
            {/* Fade out effect when collapsed */}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </motion.div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gold text-xs font-semibold mt-2 flex items-center gap-1 hover:text-navy transition-colors"
          >
            {isExpanded ? 'View less' : 'View full scope'}
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {/* Topics Pills */}
        <div className="mt-auto pt-4 border-t border-slate-100">
          <div className="flex flex-wrap gap-2">
            {visibleTopics.map((topic, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-full">
                {topic}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="px-2.5 py-1 bg-navy/5 border border-navy/10 text-navy text-xs font-medium rounded-full">
                +{remainingCount} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <a href="#" className="bg-slate-50 hover:bg-gold/5 p-4 border-t border-slate-200 transition-colors group flex items-center justify-between">
        <span className="font-semibold text-gold group-hover:text-navy transition-colors text-sm">
          Submit to this track
        </span>
        <motion.span
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
          initial="rest"
          whileHover="hover"
          className="text-gold group-hover:text-navy"
        >
          <ArrowRight size={18} />
        </motion.span>
      </a>
    </motion.div>
  );
}
