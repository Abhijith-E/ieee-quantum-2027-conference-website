"use client";

import React, { useState, useMemo, useRef } from 'react';
import { Search } from 'lucide-react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { CommitteeMember } from './types';

// Rough coordinates for countries for the SVG map
const countryCoordinates: Record<string, { x: number; y: number }> = {
  'USA': { x: 220, y: 130 },
  'Canada': { x: 200, y: 90 },
  'UK': { x: 470, y: 100 },
  'Germany': { x: 500, y: 110 },
  'France': { x: 485, y: 125 },
  'China': { x: 750, y: 150 },
  'Japan': { x: 840, y: 140 },
  'Australia': { x: 800, y: 280 },
  'India': { x: 670, y: 180 },
  'Brazil': { x: 310, y: 250 },
  'South Africa': { x: 520, y: 290 },
  'Singapore': { x: 740, y: 220 },
  'Switzerland': { x: 495, y: 120 },
  'Italy': { x: 510, y: 130 },
};

interface TpcSectionProps {
  members: CommitteeMember[];
}

export default function TpcSection({ members }: TpcSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const parentRef = useRef<HTMLDivElement>(null);

  // Filter members based on search
  const filteredMembers = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) return members;
    return members.filter(m => 
      m.name.toLowerCase().includes(query) || 
      m.institution.toLowerCase().includes(query) ||
      (m.country && m.country.toLowerCase().includes(query))
    );
  }, [members, searchQuery]);

  // Extract unique countries from filtered members to light up on map
  const activeCountries = useMemo(() => {
    const countries = new Set<string>();
    filteredMembers.forEach(m => {
      if (m.country) countries.add(m.country);
    });
    return Array.from(countries);
  }, [filteredMembers]);

  // Virtualizer for the table rows
  const rowVirtualizer = useVirtualizer({
    count: filteredMembers.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 64, // Estimated row height
    overscan: 5,
  });

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8">
      
      {/* Left Column: Table with Virtualization */}
      <div className="w-full lg:w-3/5 flex flex-col h-[600px] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Header & Search */}
        <div className="p-6 border-b border-slate-200 bg-slate-50">
          <h3 className="text-xl font-bold text-navy mb-4">Technical Program Committee</h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gold bg-white text-sm"
              placeholder="Search by name, institution, or country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-white border-b border-slate-100 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <div className="col-span-4">Name</div>
          <div className="col-span-5">Institution</div>
          <div className="col-span-3">Country</div>
        </div>

        {/* Virtualized Table Body */}
        <div 
          ref={parentRef} 
          className="flex-1 overflow-auto"
        >
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const member = filteredMembers[virtualRow.index];
              return (
                <div
                  key={virtualRow.index}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                  className="grid grid-cols-12 gap-4 px-6 items-center border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="col-span-4 font-medium text-navy truncate pr-4" title={member.name}>{member.name}</div>
                  <div className="col-span-5 text-sm text-slate-500 truncate pr-4" title={member.institution}>{member.institution}</div>
                  <div className="col-span-3 text-sm text-slate-500 flex items-center gap-2 truncate">
                    {/* Mock simple flag indicator */}
                    <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0" />
                    <span className="truncate" title={member.country}>{member.country}</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredMembers.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              No committee members found matching your search.
            </div>
          )}
        </div>
        
        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 text-center">
          Showing {filteredMembers.length} of {members.length} members
        </div>
      </div>

      {/* Right Column: World Map */}
      <div className="w-full lg:w-2/5 bg-navy-deep rounded-2xl border border-navy shadow-inner p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <h4 className="text-white font-semibold mb-6 z-10">Global Representation</h4>
        
        {/* Simplified abstract SVG Map */}
        <div className="relative w-full aspect-[4/3] max-w-md opacity-80">
          <svg viewBox="0 0 1000 500" className="w-full h-full text-navy-light/40 fill-current">
            {/* Extremely simplified world map paths to provide background context */}
            <path d="M150,150 Q200,80 300,100 T350,250 T200,350 T100,200 Z" />
            <path d="M450,150 Q550,50 700,100 T850,200 T750,300 T500,250 Z" />
            <path d="M450,300 Q550,250 650,350 T550,450 Z" />
            <path d="M250,250 Q300,250 350,350 T250,450 Z" />
            <path d="M750,250 Q850,250 900,350 T800,450 Z" />
            
            {/* Render Country Dots */}
            {Object.entries(countryCoordinates).map(([country, coords]) => {
              const isActive = activeCountries.includes(country);
              return (
                <g key={country}>
                  {/* Glowing halo if active */}
                  {isActive && (
                    <circle cx={coords.x} cy={coords.y} r="12" fill="#D4AF37" opacity="0.3" className="animate-pulse" />
                  )}
                  {/* Core dot */}
                  <circle 
                    cx={coords.x} 
                    cy={coords.y} 
                    r={isActive ? "6" : "3"} 
                    fill={isActive ? "#D4AF37" : "#334155"} 
                    className="transition-all duration-500"
                  />
                  {/* Label on hover for active */}
                  {isActive && (
                    <text x={coords.x} y={coords.y - 15} fill="white" fontSize="14" textAnchor="middle" className="font-semibold drop-shadow-md">
                      {country}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
        
        <p className="text-slate-400 text-xs text-center mt-6 z-10 max-w-xs">
          The map highlights countries represented by the currently filtered committee members.
        </p>
      </div>
      
    </div>
  );
}
