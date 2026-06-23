"use client";

import React from 'react';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { PreConfWorkshop } from './types';
import { motion } from 'framer-motion';

export default function PreConfWorkshopCard({ workshop }: { workshop: PreConfWorkshop }) {
  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Intermediate': return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'Advanced': return 'bg-rose-100 text-rose-800 border-rose-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`w-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row mb-8 border-l-8 ${workshop.themeColor}`}
    >
      {/* Left side: Content */}
      <div className="flex-1 p-8 md:p-10 flex flex-col">
        
        {/* Badges & Time */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getLevelColor(workshop.level)}`}>
              {workshop.level}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200">
              {workshop.duration}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">
            <Clock size={16} className="text-slate-400" />
            {workshop.time}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-navy mb-8 leading-snug">
          {workshop.title}
        </h3>

        {/* Instructor Block */}
        <div className="flex items-center gap-5 mb-8 bg-slate-50 p-5 rounded-xl border border-slate-100">
          <div className="w-20 h-20 rounded-full bg-white overflow-hidden shrink-0 border-2 border-white shadow-sm">
            {workshop.instructor.imageUrl ? (
              <img src={workshop.instructor.imageUrl} alt={workshop.instructor.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-300 text-xs font-bold">PHOTO</div>
            )}
          </div>
          <div>
            <div className="text-lg font-bold text-navy">{workshop.instructor.name}</div>
            <div className="text-sm text-slate-600 font-medium">{workshop.instructor.title}, {workshop.instructor.institution}</div>
            <div className="text-sm text-slate-500 mt-1 italic">{workshop.instructor.bio}</div>
          </div>
        </div>

        {/* Prerequisites */}
        {workshop.prerequisite && (
          <div className="mb-8 bg-amber-50 rounded-lg p-4 border border-amber-200 flex gap-3 text-amber-900">
            <AlertCircle size={20} className="shrink-0 text-amber-500 mt-0.5" />
            <div>
              <span className="font-bold text-sm block mb-1">Prerequisites</span>
              <p className="text-sm">{workshop.prerequisite}</p>
            </div>
          </div>
        )}

        {/* Topics */}
        <div>
          <h4 className="font-bold text-navy mb-4">What You Will Learn</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {workshop.topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="leading-tight">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Right side: CTA Area */}
      <div className="w-full md:w-64 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200 p-8 flex flex-col justify-center items-center text-center shrink-0">
        <div className="mb-4">
          <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Registration</div>
          <div className="text-xs text-slate-400">Limited seats available. Requires separate pre-conference pass.</div>
        </div>
        <button className="w-full bg-gold hover:bg-[#c4a132] text-white font-bold py-3 rounded-xl transition-colors shadow-sm">
          Register for this Workshop
        </button>
      </div>

    </motion.div>
  );
}
