"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SponsorTiers() {
  const platinumSponsors = [
    { name: 'QuantumCorp', logo: 'QC' },
    { name: 'Global Tech Inc.', logo: 'GTI' }
  ];

  const goldSponsors = [
    { name: 'NextGen Systems', logo: 'NG' },
    { name: 'CyberSecure', logo: 'CS' },
    { name: 'FutureQ', logo: 'FQ' }
  ];

  const silverSponsors = [
    { name: 'DataFlow', logo: 'DF' },
    { name: 'QuantumNet', logo: 'QN' },
    { name: 'SecureCore', logo: 'SC' },
    { name: 'TechVision', logo: 'TV' }
  ];

  const bronzeSponsors = [
    { name: 'Alpha', logo: 'A' },
    { name: 'Beta', logo: 'B' },
    { name: 'Gamma', logo: 'G' },
    { name: 'Delta', logo: 'D' },
    { name: 'Epsilon', logo: 'E' }
  ];

  return (
    <div className="w-full bg-white py-20 border-b border-slate-200" id="current-sponsors">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Platinum Tier */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-navy inline-block pb-2 border-b-4 border-[#D4AF37]">
              Platinum Sponsors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platinumSponsors.map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, filter: 'brightness(1.05)' }}
                className="h-[280px] bg-slate-50 border border-slate-200 rounded-3xl flex items-center justify-center relative group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="text-6xl font-black text-slate-300 group-hover:text-gold transition-colors duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100">
                  {s.logo}
                </div>
                <div className="absolute bottom-6 font-bold text-slate-400 group-hover:text-navy transition-colors">{s.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold Tier */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-700">Gold Sponsors</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {goldSponsors.map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="h-[200px] bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center relative group cursor-pointer hover:shadow-lg transition-shadow duration-500"
              >
                <div className="text-4xl font-black text-slate-300 group-hover:text-amber-500 transition-colors duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100">
                  {s.logo}
                </div>
                <div className="absolute bottom-4 font-semibold text-sm text-slate-400 group-hover:text-navy transition-colors">{s.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver Tier */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-600">Silver Sponsors</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {silverSponsors.map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="h-[140px] bg-white border border-slate-200 rounded-xl flex items-center justify-center relative group cursor-pointer hover:shadow-md transition-shadow duration-500"
              >
                <div className="text-3xl font-bold text-slate-300 group-hover:text-slate-500 transition-colors duration-500 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100">
                  {s.logo}
                </div>
                <div className="absolute bottom-3 font-medium text-xs text-slate-400 group-hover:text-navy transition-colors">{s.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bronze / In-Kind Tier */}
        <div>
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-slate-500">Bronze & In-Kind Sponsors</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {bronzeSponsors.map((s, idx) => (
              <div
                key={idx}
                className="w-32 h-[100px] bg-white border border-slate-100 rounded-lg flex items-center justify-center relative group cursor-pointer hover:border-slate-300 transition-colors duration-300"
              >
                <div className="text-2xl font-bold text-slate-200 group-hover:text-slate-400 transition-colors duration-500 grayscale group-hover:grayscale-0 opacity-50 group-hover:opacity-100">
                  {s.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
