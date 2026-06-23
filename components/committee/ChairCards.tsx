"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Check } from 'lucide-react';
import { CommitteeMember } from './types';

// Child stagger variants
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

interface ChairCardProps {
  member: CommitteeMember;
  variant: 'large' | 'medium' | 'compact';
}

const getInitials = (name: string) => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

export default function ChairCard({ member, variant }: ChairCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (member.email) {
      navigator.clipboard.writeText(member.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (variant === 'compact') {
    return (
      <motion.div variants={cardVariants} className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-lg shrink-0">
          {getInitials(member.name)}
        </div>
        <div>
          <h4 className="font-semibold text-navy leading-tight">{member.name}</h4>
          <p className="text-xs text-slate-500 mt-0.5">{member.institution}</p>
        </div>
      </motion.div>
    );
  }

  const isLarge = variant === 'large';
  const sizeClass = isLarge ? 'w-24 h-24' : 'w-16 h-16';

  return (
    <motion.div 
      variants={cardVariants} 
      className={`bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300 ${isLarge ? 'p-8' : 'p-6'}`}
    >
      <div className={`flex ${isLarge ? 'flex-col items-center text-center' : 'items-start gap-5'}`}>
        
        {/* Portrait */}
        <div className={`${sizeClass} rounded-full overflow-hidden border-4 border-gold/20 shrink-0 ${isLarge ? 'mb-6 relative' : ''}`}>
          {member.imageUrl ? (
            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400 text-xs">Photo</div>
          )}
          {isLarge && (
            <div className="absolute inset-0 rounded-full border-2 border-gold m-1 pointer-events-none" />
          )}
        </div>

        {/* Content */}
        <div className={`flex flex-col flex-1 ${isLarge ? 'items-center' : 'items-start'}`}>
          <div className="mb-1 flex items-center gap-2">
            {isLarge && (
              <span className="px-2 py-0.5 bg-gold/20 text-navy-deep border border-gold/30 text-[10px] font-bold uppercase tracking-wider rounded-full">
                {member.role}
              </span>
            )}
            {!isLarge && (
              <span className="px-2 py-0.5 bg-navy/10 text-navy text-[10px] font-bold uppercase tracking-wider rounded-full">
                {member.role}
              </span>
            )}
          </div>
          
          <h3 className={`${isLarge ? 'text-2xl' : 'text-xl'} font-bold text-navy mb-1`}>{member.name}</h3>
          <p className={`${isLarge ? 'text-base' : 'text-sm'} text-slate-500 mb-4`}>{member.institution}</p>

          {/* Email CTA */}
          {member.email && (
            <button
              onClick={handleCopyEmail}
              className={`flex items-center justify-center gap-2 text-sm font-medium transition-colors border rounded-lg ${
                isLarge ? 'px-6 py-2' : 'px-4 py-1.5'
              } ${
                copied 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-navy hover:border-slate-300'
              }`}
            >
              {copied ? <Check size={16} /> : <Mail size={16} />}
              {copied ? 'Copied!' : 'Email Chair'}
            </button>
          )}

          {/* Research Areas */}
          {member.researchAreas && member.researchAreas.length > 0 && (
            <div className={`flex flex-wrap gap-2 mt-6 ${isLarge ? 'justify-center' : 'justify-start'}`}>
              {member.researchAreas.map((area, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-full">
                  {area}
                </span>
              ))}
            </div>
          )}
        </div>

      </div>
    </motion.div>
  );
}
