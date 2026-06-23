"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WorkshopEvent, EventType } from './types';
import EventCard from './EventCard';

interface WorkshopsClientWrapperProps {
  events: WorkshopEvent[];
}

export default function WorkshopsClientWrapper({ events }: WorkshopsClientWrapperProps) {
  const [activeFilter, setActiveFilter] = useState<EventType>('Workshop');

  const filteredEvents = events.filter(e => e.type === activeFilter);

  return (
    <section className="w-full bg-white py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area with Banner and Segmented Control */}
        <div className="flex flex-col items-center mb-16">
          
          {/* Pre-Conference Banner */}
          <div className="mb-8 w-full max-w-2xl text-center bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold py-3 px-6 rounded-lg shadow-sm">
            Note: Pre-conference workshops require separate registration.
          </div>

          {/* Segmented Control */}
          <div className="flex bg-slate-100 rounded-xl p-1.5 shadow-inner border border-slate-200">
            {(['Workshop', 'Tutorial'] as EventType[]).map((type) => {
              const isActive = activeFilter === type;
              return (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`relative px-8 py-2.5 rounded-lg text-sm font-bold transition-colors z-10 ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-navy'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="segmentBg"
                      className="absolute inset-0 bg-navy rounded-lg shadow-md"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {type}s
                </button>
              );
            })}
          </div>

        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
