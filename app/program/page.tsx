"use client";

import React, { useState, useMemo, useEffect } from 'react';
import ProgramSidebar from '@/components/program/ProgramSidebar';
import ProgramFilters, { FilterType } from '@/components/program/ProgramFilters';
import TimelineCard from '@/components/program/TimelineCard';
import SessionDrawer from '@/components/program/SessionDrawer';
import PdfGenerator from '@/components/program/PdfGenerator';
import { Session, DayTab } from '@/components/program/types';

const MOCK_SESSIONS: Session[] = [
  // DAY 1
  {
    id: 's1', day: 'Day 1 (Oct 12)', startTime: '09:00', endTime: '10:30', type: 'Keynote',
    title: 'The Future of Fault-Tolerant Quantum Computing', location: 'Main Auditorium',
    abstract: 'A deep dive into the recent breakthroughs in quantum error correction and what it means for the next decade of commercial quantum applications. We will explore topological qubits and surface code thresholds.',
    speaker: { name: 'Dr. Peter Shor', institution: 'MIT', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&q=80', bio: 'Peter Shor is a pioneer in quantum computation, famous for Shor\'s algorithm and foundational work in quantum error correction.' }
  },
  { id: 'b1', day: 'Day 1 (Oct 12)', startTime: '10:30', endTime: '11:00', type: 'Break', title: 'Coffee Break & Networking' },
  {
    id: 's2', day: 'Day 1 (Oct 12)', startTime: '11:00', endTime: '12:30', type: 'Oral',
    title: 'Superconducting Qubit Architectures', location: 'Room A',
    abstract: 'Presenting novel fabrication techniques that yield longer coherence times in transmon qubits.',
    speaker: { name: 'Dr. Alice Roberts', institution: 'Quantum Labs' }
  },
  {
    id: 's3', day: 'Day 1 (Oct 12)', startTime: '13:30', endTime: '15:00', type: 'Workshop',
    title: 'Introduction to Q# and Azure Quantum', location: 'Lab 1',
    abstract: 'A hands-on session exploring Microsoft\'s quantum development kit.',
    speaker: { name: 'Dr. Krysta Svore', institution: 'Microsoft' }
  },
  {
    id: 's4', day: 'Day 1 (Oct 12)', startTime: '15:30', endTime: '17:00', type: 'Poster',
    title: 'Poster Session A: Hardware & Materials', location: 'Exhibition Hall'
  },
  // DAY 2
  {
    id: 's5', day: 'Day 2 (Oct 13)', startTime: '09:00', endTime: '10:00', type: 'Keynote',
    title: 'Photonic Quantum Networks', location: 'Main Auditorium',
    abstract: 'Scaling quantum networks using integrated photonics and satellite relays.',
    speaker: { name: 'Prof. Jian-Wei Pan', institution: 'USTC', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=150&q=80' }
  },
  { id: 'b2', day: 'Day 2 (Oct 13)', startTime: '10:00', endTime: '10:30', type: 'Break', title: 'Morning Tea' },
  {
    id: 's6', day: 'Day 2 (Oct 13)', startTime: '10:30', endTime: '12:00', type: 'Oral',
    title: 'Quantum Cryptography in the 5G Era', location: 'Room B',
    speaker: { name: 'Dr. Robert Chen', institution: 'Global Telco' }
  },
  // DAY 3
  {
    id: 's7', day: 'Day 3 (Oct 14)', startTime: '10:00', endTime: '11:30', type: 'Oral',
    title: 'Quantum Machine Learning Algorithms', location: 'Room A',
    speaker: { name: 'Dr. Maria Garcia', institution: 'Stanford' }
  },
  { id: 'b3', day: 'Day 3 (Oct 14)', startTime: '11:30', endTime: '13:00', type: 'Break', title: 'Farewell Lunch' },
];

export default function ProgramPage() {
  const [activeDay, setActiveDay] = useState<DayTab>('Day 1 (Oct 12)');
  const [activeFilter, setActiveFilter] = useState<FilterType>('All Sessions');
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredSessions = useMemo(() => {
    return MOCK_SESSIONS.filter(session => {
      // 1. Filter by Day
      if (session.day !== activeDay) return false;
      // 2. Filter by Type (If 'All Sessions', show everything including breaks. Otherwise, match type, hide breaks)
      if (activeFilter === 'All Sessions') return true;
      return session.type === activeFilter;
    });
  }, [activeDay, activeFilter]);

  if (!mounted) return null; // Prevent hydration mismatch on initial render

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 relative pt-24 pb-32">
      
      {/* Header */}
      <div className="w-full bg-white border-b border-slate-200 py-12 mb-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-navy mb-4">Technical Program</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Explore the comprehensive schedule of keynotes, oral presentations, workshops, and poster sessions. Build your personal itinerary.
          </p>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Left Sidebar (Days) */}
        <div className="w-full lg:w-64 shrink-0 lg:sticky lg:top-24 z-20">
          <ProgramSidebar activeDay={activeDay} setActiveDay={setActiveDay} />
        </div>

        {/* Right Content Area */}
        <div className="flex-1 w-full min-w-0">
          
          {/* Top Bar: Filters + PDF Download */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm sticky top-20 lg:top-24 z-20">
            <ProgramFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
            <div className="shrink-0">
              <PdfGenerator filteredSessions={filteredSessions} />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative w-full max-w-4xl pt-4">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session) => (
                <TimelineCard 
                  key={session.id} 
                  session={session} 
                  onClick={(s) => {
                    if (s.type !== 'Break') setSelectedSession(s);
                  }} 
                />
              ))
            ) : (
              <div className="py-20 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 shadow-sm">
                No sessions found for this filter combination.
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Drawer */}
      <SessionDrawer session={selectedSession} onClose={() => setSelectedSession(null)} />
      
    </main>
  );
}
