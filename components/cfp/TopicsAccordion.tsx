"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const tracks = [
  {
    id: 'track-1',
    title: 'Track 1: Quantum Algorithms & Complexity',
    topics: [
      'Quantum supremacy and advantage',
      'Quantum machine learning algorithms',
      'Optimization algorithms (QAOA, VQE)',
      'Quantum simulation methodologies',
      'Algorithmic error correction codes'
    ]
  },
  {
    id: 'track-2',
    title: 'Track 2: Quantum Architecture & Hardware',
    topics: [
      'Superconducting qubits & trapped ions',
      'Scalable quantum processor designs',
      'Quantum control and readout electronics',
      'Cryogenic computing systems',
      'Topological quantum computing'
    ]
  },
  {
    id: 'track-3',
    title: 'Track 3: Quantum Security & Cryptography',
    topics: [
      'Post-quantum cryptography (PQC)',
      'Quantum key distribution (QKD) networks',
      'Quantum random number generators',
      'Security proofs for quantum protocols',
      'Vulnerability analysis of quantum systems'
    ]
  },
  {
    id: 'track-4',
    title: 'Track 4: Quantum-Classical Integration',
    topics: [
      'Hybrid algorithms and middleware',
      'Quantum programming languages & compilers',
      'Cloud-based quantum computing interfaces',
      'Resource estimation for hybrid workflows',
      'Simulation of quantum circuits on classical HPC'
    ]
  }
];

export default function TopicsAccordion() {
  const [openTrackId, setOpenTrackId] = useState<string | null>('track-1');

  const toggleTrack = (id: string) => {
    setOpenTrackId(openTrackId === id ? null : id);
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-navy mb-8">Research Tracks & Topics</h2>
        
        <div className="flex flex-col gap-4">
          {tracks.map((track) => {
            const isOpen = openTrackId === track.id;
            
            return (
              <div key={track.id} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleTrack(track.id)}
                  className="w-full flex justify-between items-center py-5 px-6 bg-white hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy text-lg text-left">{track.title}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold shrink-0 ml-4"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 bg-slate-50 border-t border-slate-100">
                        <ul className="list-disc pl-5 space-y-2 text-slate-600">
                          {track.topics.map((topic, idx) => (
                            <li key={idx} className="pl-2 marker:text-gold marker:text-lg">{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
