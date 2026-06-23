"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SacMember } from './types';

interface SacCardProps {
  member: SacMember;
}

export default function SacCard({ member }: SacCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow relative"
    >
      {/* Flag Badge */}
      <div className="absolute top-4 right-4 text-lg" title={member.country}>
        {member.flagEmoji}
      </div>

      {/* Portrait */}
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden mb-4 bg-slate-100 ring-4 ring-slate-50 mt-2">
        {member.imageUrl ? (
          <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
            Photo
          </div>
        )}
      </div>
      
      <h4 className="text-[16px] font-bold text-navy mb-1 leading-tight">
        {member.name}
      </h4>
      
      <p className="text-[13px] text-slate-500 mb-1 leading-snug">
        {member.title}
      </p>
      
      <p className="text-[13px] text-slate-600 font-medium">
        {member.institution}
      </p>
    </motion.div>
  );
}
