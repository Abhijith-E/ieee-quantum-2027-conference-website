"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, LayoutPanelLeft, Cpu, Network, Medal, Clock, ExternalLink, ChevronRight, FileText, LucideIcon } from 'lucide-react';
import Image from 'next/image';

type AwardData = {
  id: string;
  categoryName: string;
  icon: LucideIcon;
  paperTitle: string;
  authors: string;
  institution: string;
  abstractSnippet: string;
  doi: string;
};

const AWARDS: AwardData[] = [
  {
    id: 'best-paper',
    categoryName: 'Best Paper Award',
    icon: Award,
    paperTitle: 'Fault-Tolerant Quantum Error Correction using Topological Codes on Near-Term Devices',
    authors: 'Dr. Sarah Chen, Michael O. Rabin',
    institution: 'MIT Quantum Lab & IBM Research',
    abstractSnippet: 'We propose a novel methodology for implementing surface codes that significantly reduces the overhead required for fault-tolerant operations, demonstrating a 40% improvement in threshold bounds over standard protocols.',
    doi: '10.1109/ICQST.2027.001'
  },
  {
    id: 'best-student',
    categoryName: 'Best Student Paper Award',
    icon: GraduationCap,
    paperTitle: 'Optimized Qubit Routing for Deep Quantum Circuits',
    authors: 'James Fowler (Ph.D. Candidate), Prof. Alice Williams',
    institution: 'Stanford University',
    abstractSnippet: 'A heuristic routing compiler that optimally maps logical qubits to physical topologies, decreasing SWAP gate insertions by 25% on heavy-hexagon architectures.',
    doi: '10.1109/ICQST.2027.024'
  },
  {
    id: 'best-poster',
    categoryName: 'Best Poster Award',
    icon: LayoutPanelLeft,
    paperTitle: 'Scalable Quantum Key Distribution Networks in Urban Environments',
    authors: 'Elena Rostova, et al.',
    institution: 'CERN / University of Geneva',
    abstractSnippet: 'An experimental demonstration of a 12-node QKD network deployed across existing metropolitan optical fiber infrastructure, achieving unprecedented secure key rates.',
    doi: '10.1109/ICQST.2027.105'
  },
  {
    id: 'best-qc',
    categoryName: 'Best Paper — Quantum Computing',
    icon: Cpu,
    paperTitle: 'Hybrid Quantum-Classical Algorithms for Financial Portfolio Optimization',
    authors: 'Kenji Tanaka',
    institution: 'Tokyo Institute of Technology',
    abstractSnippet: 'This paper introduces a variation of QAOA adapted specifically for high-frequency trading constraints, outperforming classical simulated annealing heuristics on specific problem classes.',
    doi: '10.1109/ICQST.2027.042'
  },
  {
    id: 'best-qcomm',
    categoryName: 'Best Paper — Quantum Communication',
    icon: Network,
    paperTitle: 'Long-Distance Entanglement Swapping via Satellite Relays',
    authors: 'Wei Zhang, Li Min',
    institution: 'National University of Singapore',
    abstractSnippet: 'Theoretical and simulated bounds for achieving continental-scale entanglement swapping using Low Earth Orbit (LEO) satellite constellations.',
    doi: '10.1109/ICQST.2027.088'
  },
  {
    id: 'honorable',
    categoryName: 'Honorable Mentions',
    icon: Medal,
    paperTitle: 'Machine Learning Guided Calibration of Superconducting Qubits',
    authors: 'Amanda Wright, David Chen',
    institution: 'University of Waterloo',
    abstractSnippet: 'Applying deep reinforcement learning to autonomously tune qubit parameters, reducing calibration time by an order of magnitude.',
    doi: '10.1109/ICQST.2027.076'
  }
];

export default function AwardCards() {
  // Use env var to dictate default state
  const envStatus = process.env.NEXT_PUBLIC_AWARD_STATUS;
  const [isAnnounced, setIsAnnounced] = useState(envStatus === 'announced');

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 relative">
      
      {/* Dev Toggle (Hidden in production unless env is strictly set) */}
      <div className="absolute top-0 right-6 -mt-12 flex items-center gap-3 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm z-20">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Demo State:</span>
        <button 
          onClick={() => setIsAnnounced(!isAnnounced)}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${!isAnnounced ? 'bg-navy text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
        >
          Pre-Event
        </button>
        <button 
          onClick={() => setIsAnnounced(!isAnnounced)}
          className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${isAnnounced ? 'bg-gold text-navy' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
        >
          Post-Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {AWARDS.map((award, index) => {
          const Icon = award.icon;
          
          if (!isAnnounced) {
            // PRE-ANNOUNCEMENT STATE
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 shadow-sm flex flex-col h-full relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 text-navy">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{award.categoryName}</h3>
                </div>

                <div className="bg-slate-100/80 rounded-xl p-6 text-center flex-1 flex flex-col items-center justify-center border border-slate-200/50">
                  <Clock size={28} className="text-slate-400 mb-4" />
                  <p className="text-slate-600 font-medium leading-relaxed">
                    To be announced at the<br/>
                    <span className="text-navy font-bold">Conference Banquet</span>
                  </p>
                  <p className="text-sm text-slate-500 mt-2">February 18, 2027</p>
                </div>

                {/* Subtle Sealed Envelope Decor */}
                <div className="absolute -bottom-6 -right-6 opacity-10 transform rotate-[-15deg]">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-navy">
                    <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"/>
                    <circle cx="12" cy="11" r="2.5" fill="#D4AF37" />
                  </svg>
                </div>
              </motion.div>
            );
          }

          // POST-ANNOUNCEMENT STATE
          return (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="relative group h-full"
            >
              {/* Shimmer Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gold via-yellow-200 to-gold rounded-[1.1rem] opacity-70 blur-[2px] group-hover:opacity-100 group-hover:blur-[4px] transition-all duration-500 bg-[length:200%_auto] animate-shimmer"></div>
              
              <div className="bg-gradient-to-br from-[#FDF9EC] to-white border-2 border-transparent rounded-2xl p-8 shadow-xl flex flex-col h-full relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-yellow-500 flex items-center justify-center text-navy shadow-inner shrink-0">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-[22px] font-extrabold text-navy leading-tight pt-1">{award.categoryName}</h3>
                </div>

                <div className="mb-6 flex-1">
                  <h4 className="text-[20px] font-semibold text-slate-800 leading-snug mb-3">{award.paperTitle}</h4>
                  
                  <div className="flex items-center gap-3 mb-4">
                    {/* Fake Author Portraits Row */}
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-500 overflow-hidden">P1</div>
                      {award.authors.includes(',') && <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">P2</div>}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-navy">{award.authors}</p>
                      <p className="text-xs text-slate-500">{award.institution}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#D4AF37] pl-4 py-1 italic text-slate-600 text-sm leading-relaxed bg-gold/5 rounded-r-lg">
                    "{award.abstractSnippet}"
                  </blockquote>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gold/20">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-[11px] font-bold px-2.5 py-1 rounded border border-blue-200">
                    DOI: {award.doi}
                  </span>
                  
                  <button className="text-gold-dark hover:text-navy font-bold text-sm flex items-center gap-1 transition-colors group/btn">
                    View Paper <ChevronRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Ceremony Photos (Only show if announced) */}
      {isAnnounced && (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-navy mb-4">Awards Ceremony Highlights</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Moments of celebration from the conference banquet.</p>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {/* Masonry Mock Images */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative overflow-hidden rounded-xl bg-slate-200 group cursor-pointer break-inside-avoid">
                <div className={`w-full ${i % 2 === 0 ? 'h-64' : i % 3 === 0 ? 'h-96' : 'h-80'} bg-slate-200 flex items-center justify-center text-slate-400`}>
                  <FileText size={48} className="opacity-20" />
                </div>
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold text-sm flex items-center gap-2">
                    <ExternalLink size={16} /> View Full Photo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          100% { background-position: -200% center; }
        }
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
