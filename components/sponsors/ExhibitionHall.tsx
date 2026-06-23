"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOTHS = [
  { id: 'A1', type: 'platinum', name: 'QuantumCorp', x: 20, y: 30, w: 20, h: 15 },
  { id: 'A2', type: 'platinum', name: 'Global Tech Inc.', x: 60, y: 30, w: 20, h: 15 },
  { id: 'B1', type: 'gold', name: 'NextGen Systems', x: 10, y: 60, w: 15, h: 10 },
  { id: 'B2', type: 'gold', name: 'CyberSecure', x: 30, y: 60, w: 15, h: 10 },
  { id: 'B3', type: 'gold', name: 'FutureQ', x: 50, y: 60, w: 15, h: 10 },
  { id: 'C1', type: 'silver', name: 'DataFlow', x: 70, y: 60, w: 10, h: 10 },
  { id: 'C2', type: 'silver', name: 'QuantumNet', x: 85, y: 60, w: 10, h: 10 },
];

export default function ExhibitionHall() {
  const [hoveredBooth, setHoveredBooth] = useState<string | null>(null);

  const getBoothColor = (type: string) => {
    switch(type) {
      case 'platinum': return 'fill-gold hover:fill-gold-dark stroke-amber-600';
      case 'gold': return 'fill-navy hover:fill-navy-deep stroke-blue-900';
      case 'silver': return 'fill-slate-300 hover:fill-slate-400 stroke-slate-500';
      default: return 'fill-slate-100 stroke-slate-300';
    }
  };

  return (
    <div className="w-full bg-slate-50 py-20 border-b border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-navy mb-4">Interactive Exhibition Floor Plan</h2>
          <p className="text-slate-600">Explore the main exhibition hall and locate our sponsors' booths.</p>
        </div>

        <div className="relative max-w-4xl mx-auto bg-white border-2 border-slate-200 rounded-3xl p-8 shadow-sm">
          
          {/* Custom Tooltip */}
          <div className="h-12 flex items-center justify-center mb-4">
            <AnimatePresence mode="wait">
              {hoveredBooth ? (
                <motion.div
                  key="tooltip"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="bg-navy text-white px-6 py-2 rounded-full font-bold shadow-md text-sm"
                >
                  {hoveredBooth}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-slate-400 text-sm font-medium"
                >
                  Hover over a booth to view details
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative w-full aspect-[16/9] border-4 border-slate-100 bg-slate-50 rounded-xl overflow-hidden shadow-inner">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              {/* Floor Base */}
              <rect x="0" y="0" width="100" height="100" fill="#f8fafc" />
              
              {/* Registration Desk */}
              <rect x="5" y="5" width="90" height="10" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.5" rx="1" />
              <text x="50" y="11" fontSize="3" fill="#64748b" textAnchor="middle" fontWeight="bold">Main Registration & Info Desk</text>
              
              {/* Main Hall Entrance Indicator */}
              <path d="M 40 100 L 40 95 L 60 95 L 60 100" fill="none" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2,1" />
              <text x="50" y="98" fontSize="2" fill="#94a3b8" textAnchor="middle" fontWeight="bold">ENTRANCE</text>

              {/* Booths */}
              {BOOTHS.map((booth) => (
                <g 
                  key={booth.id} 
                  onMouseEnter={() => setHoveredBooth(`Booth ${booth.id} — ${booth.name}`)}
                  onMouseLeave={() => setHoveredBooth(null)}
                  className="cursor-pointer transition-transform duration-300 origin-center"
                  style={{ transformOrigin: `${booth.x + booth.w/2}% ${booth.y + booth.h/2}%` }}
                >
                  <rect 
                    x={booth.x} 
                    y={booth.y} 
                    width={booth.w} 
                    height={booth.h} 
                    className={`${getBoothColor(booth.type)} transition-colors duration-300`} 
                    strokeWidth="0.5" 
                    rx="0.5" 
                  />
                  <text 
                    x={booth.x + booth.w / 2} 
                    y={booth.y + booth.h / 2 + 1} 
                    fontSize={booth.type === 'platinum' ? "3" : "2.5"} 
                    fill={booth.type === 'gold' ? "#ffffff" : "#1e293b"} 
                    textAnchor="middle" 
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {booth.id}
                  </text>
                </g>
              ))}
              
              {/* Coffee Break Area */}
              <rect x="5" y="80" width="20" height="15" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.5" rx="1" />
              <text x="15" y="88.5" fontSize="2" fill="#64748b" textAnchor="middle" fontWeight="bold">Networking Lounge</text>
            </svg>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gold rounded border border-amber-600"></div><span className="text-sm font-bold text-slate-600">Platinum Booths</span></div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-navy rounded border border-blue-900"></div><span className="text-sm font-bold text-slate-600">Gold Booths</span></div>
            <div className="flex items-center gap-2"><div className="w-4 h-4 bg-slate-300 rounded border border-slate-400"></div><span className="text-sm font-bold text-slate-600">Silver Booths</span></div>
          </div>
        </div>

      </div>
    </div>
  );
}
