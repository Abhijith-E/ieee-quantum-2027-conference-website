"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  Download, 
  Share, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

// Mock schedule data
const MOCK_SCHEDULE = {
  1: [
    { id: 1, title: "Keynote: The Decade of Quantum Utility", time: "09:00 AM - 10:30 AM", type: "Keynote", track: "General", room: "Main Auditorium", speakers: ["Dr. Sarah Jenkins"], conflict: false },
    { id: 2, title: "Quantum Error Correction Algorithms", time: "11:00 AM - 12:30 PM", type: "Oral", track: "Quantum Computing", room: "Room A", speakers: ["Prof. Alan Turing"], conflict: true },
    { id: 3, title: "Superconducting Qubit Scalability", time: "11:30 AM - 01:00 PM", type: "Oral", track: "Hardware", room: "Room B", speakers: ["Dr. Jane Doe"], conflict: true },
  ],
  2: [
    { id: 4, title: "Machine Learning for Quantum Sensor Calibration", time: "10:00 AM - 11:30 AM", type: "Oral", track: "QML", room: "Room C", speakers: ["Dr. Alice Smith"], conflict: false },
  ],
  3: []
};

export default function ScheduleContent() {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);
  const [exportOpen, setExportOpen] = useState(false);

  const daySessions = MOCK_SCHEDULE[activeDay] || [];
  const hasConflicts = daySessions.some(session => session.conflict);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-navy tracking-tight">My Schedule</h1>
          <p className="text-slate-500 mt-1">Manage your bookmarked sessions and personal itinerary.</p>
        </div>
        
        {/* Export Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setExportOpen(!exportOpen)}
            className="flex items-center gap-2 bg-white border border-slate-200 text-navy font-bold py-2.5 px-4 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
          >
            <Share size={18} />
            Export Agenda
            <ChevronDown size={16} className={`transition-transform ${exportOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {exportOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl z-20 py-2 overflow-hidden"
              >
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-navy transition-colors text-left">
                  <Download size={16} className="text-slate-400" />
                  Download PDF Agenda
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-navy transition-colors text-left border-t border-slate-100">
                  <Calendar size={16} className="text-blue-500" />
                  Add to Google Calendar
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-navy transition-colors text-left">
                  <Calendar size={16} className="text-slate-800" />
                  Add to Apple Calendar
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Conflict Warning */}
      {hasConflicts && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-amber-50 border border-amber-300 rounded-xl p-4 flex items-start gap-3"
        >
          <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-800 text-sm">Schedule Conflict Detected</h4>
            <p className="text-amber-700 text-sm mt-1">You have overlapping sessions bookmarked on Day {activeDay}. You may need to review your schedule.</p>
          </div>
        </motion.div>
      )}

      {/* Day Tabs */}
      <div className="flex p-1 bg-slate-100 rounded-xl w-fit">
        {[1, 2, 3].map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day as 1 | 2 | 3)}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all relative ${
              activeDay === day ? 'text-navy shadow-sm' : 'text-slate-500 hover:text-navy'
            }`}
          >
            {activeDay === day && (
              <motion.div 
                layoutId="scheduleDayTab"
                className="absolute inset-0 bg-white rounded-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">Day {day}</span>
          </button>
        ))}
      </div>

      {/* Sessions List */}
      <div className="space-y-4 pt-2">
        {daySessions.length === 0 ? (
          <div className="text-center py-16 bg-white border border-slate-200 border-dashed rounded-3xl">
            <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-navy mb-2">No sessions bookmarked</h3>
            <p className="text-slate-500 text-sm mb-6 max-w-md mx-auto">
              You haven't bookmarked any sessions for Day {activeDay} yet. Browse the technical program to build your schedule.
            </p>
            <Link 
              href="/program"
              className="inline-flex items-center gap-2 bg-navy hover:bg-slate-800 text-white font-bold py-2.5 px-6 rounded-xl transition-colors"
            >
              Browse full program <ExternalLink size={16} />
            </Link>
          </div>
        ) : (
          daySessions.map((session, i) => (
            <motion.div 
              key={session.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-white border rounded-2xl p-5 hover:shadow-md transition-shadow relative overflow-hidden ${session.conflict ? 'border-amber-300' : 'border-slate-200'}`}
            >
              {session.conflict && (
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-amber-500 border-r-transparent">
                  <AlertTriangle size={14} className="absolute -top-9 right-2 text-white" />
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-100 ${
                      session.type === 'Keynote' ? 'text-purple-600' : 'text-slate-600'
                    }`}>
                      {session.type}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-blue-50 text-blue-600">
                      {session.track}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-navy leading-tight mb-3">{session.title}</h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-slate-600 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} className={session.conflict ? 'text-amber-500' : 'text-slate-400'} />
                      <span className={session.conflict ? 'text-amber-700' : ''}>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} className="text-slate-400" />
                      {session.room}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:items-end justify-between gap-4 mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <button className="text-sm font-bold text-red-500 hover:text-red-700 transition-colors">
                    Remove
                  </button>
                  <Link href={`/program#session-${session.id}`} className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                    View Details &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

    </div>
  );
}
