"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Building2, BookOpen, TrendingUp } from 'lucide-react';
import { colors } from '@/lib/tokens';

const reasons = [
  {
    title: "Research Impact",
    description: "Present your work to an audience of top-tier researchers. Past proceedings have garnered over 2500+ citations globally.",
    icon: TrendingUp
  },
  {
    title: "Global Networking",
    description: "Connect with peers, potential collaborators, and pioneers from over 30 countries in the quantum computing space.",
    icon: Globe2
  },
  {
    title: "Industry Connections",
    description: "Bridge the gap between academia and industry. Meet recruiters and R&D heads from leading tech corporations.",
    icon: Building2
  },
  {
    title: "IEEE Xplore Publication",
    description: "Ensure your research reaches the widest possible audience with inclusion in the prestigious IEEE Xplore digital library.",
    icon: BookOpen
  }
];

export default function WhyAttend() {
  return (
    <section className="w-full bg-slate-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Why Attend ICQST 2027?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you're presenting groundbreaking research or looking to stay ahead of the quantum curve, ICQST offers unparalleled value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_24px_rgba(15,23,42,0.05)] cursor-pointer group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-slate-100 group-hover:border-gold/30 group-hover:bg-gold/5 transition-colors duration-300">
                  <motion.div
                    variants={{
                      rest: { rotate: 0 },
                      hover: { rotate: 15, scale: 1.1, color: colors.gold }
                    }}
                    initial="rest"
                    whileHover="hover"
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <Icon size={28} className="text-slate-700 transition-colors duration-300 group-hover:text-gold" strokeWidth={1.5} />
                  </motion.div>
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
