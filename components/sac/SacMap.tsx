"use client";

import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { motion } from 'framer-motion';
import { SacMember } from './types';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

interface SacMapProps {
  members: SacMember[];
}

export default function SacMap({ members }: SacMapProps) {
  const [tooltipContent, setTooltipContent] = useState<SacMember | null>(null);

  // Group members by coordinates to avoid overlapping dots if they are exactly the same
  // For this mock, we assume unique coordinates or slightly jittered coordinates.

  return (
    <div className="w-full bg-navy-deep rounded-2xl border border-navy shadow-inner relative overflow-hidden flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep to-[#0a0f1c] pointer-events-none" />
      
      <div className="w-full max-w-5xl aspect-[2/1] relative z-10">
        <ComposableMap projectionConfig={{ scale: 140 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1e293b" // slate-800
                  stroke="#334155" // slate-700
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#334155", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {members.map((member) => (
            <Marker 
              key={member.id} 
              coordinates={member.coordinates}
              onMouseEnter={() => setTooltipContent(member)}
              onMouseLeave={() => setTooltipContent(null)}
            >
              <g className="cursor-pointer">
                {/* Animated Halo */}
                <motion.circle
                  r="6"
                  fill="#D4AF37"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
                {/* Solid Dot */}
                <circle r="3" fill="#D4AF37" />
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Tooltip */}
      {tooltipContent && (
        <div className="absolute bottom-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-xl border border-slate-200 text-center z-20 pointer-events-none transition-opacity duration-200">
          <p className="font-bold text-navy text-sm mb-0.5">{tooltipContent.name}</p>
          <p className="text-slate-600 text-xs font-medium">{tooltipContent.institution}</p>
          <p className="text-slate-400 text-[10px] uppercase tracking-wider mt-1">{tooltipContent.country}</p>
        </div>
      )}
    </div>
  );
}
