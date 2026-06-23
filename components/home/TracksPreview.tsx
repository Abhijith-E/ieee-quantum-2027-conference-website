"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Cpu, Network, Lock, Zap, Glasses, Code2, Microchip, Orbit } from 'lucide-react';
import { colors } from '@/lib/tokens';

const tracks = [
  {
    title: "Quantum Algorithms",
    description: "Novel approaches to quantum supremacy, error correction, and optimization algorithms.",
    icon: Code2
  },
  {
    title: "Quantum Hardware",
    description: "Superconducting qubits, trapped ions, and scalable quantum architectures.",
    icon: Cpu
  },
  {
    title: "Quantum Cryptography",
    description: "QKD protocols, post-quantum cryptography, and secure communications.",
    icon: Lock
  },
  {
    title: "Quantum Networks",
    description: "Entanglement distribution, quantum repeaters, and the quantum internet.",
    icon: Network
  },
  {
    title: "Quantum Sensing",
    description: "High-precision metrology, quantum imaging, and environmental sensing.",
    icon: Orbit
  },
  {
    title: "Quantum AI & ML",
    description: "Quantum neural networks, generative models, and algorithmic learning.",
    icon: Zap
  },
  {
    title: "Quantum Optics",
    description: "Photon-based quantum computing and light-matter interactions.",
    icon: Glasses
  },
  {
    title: "Classical Integration",
    description: "Hybrid quantum-classical systems and middleware development.",
    icon: Microchip
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function TracksPreview() {
  return (
    <section className="w-full bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Research Tracks</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore the core technical domains covered in this year's conference, spanning foundational theory to applied quantum engineering.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tracks.map((track, idx) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 flex flex-col items-start transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(15,23,42,0.14)] shadow-[0_4px_24px_rgba(15,23,42,0.07)] cursor-pointer"
              >
                <div className="mb-6 p-3 bg-gold/10 rounded-xl">
                  <Icon size={32} color={colors.gold} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {track.title}
                </h3>
                <p className="text-slate-600 line-clamp-2 leading-relaxed text-sm">
                  {track.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
