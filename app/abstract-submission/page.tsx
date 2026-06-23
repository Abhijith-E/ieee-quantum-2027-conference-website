"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import ProgressBanner from '@/components/abstract/ProgressBanner';
import IncludedComponents from '@/components/abstract/IncludedComponents';
import FormatRequirements from '@/components/abstract/FormatRequirements';
import SubmissionFaq from '@/components/abstract/SubmissionFaq';

export default function AbstractSubmissionPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      
      {/* 1. Top progress banner & visualizer */}
      <section className="bg-slate-50 border-b border-slate-200">
        <ProgressBanner />
      </section>

      {/* 2. What to include */}
      <section className="pt-20">
        <IncludedComponents />
      </section>

      {/* 3. Format requirements card */}
      <section>
        <FormatRequirements />
      </section>

      {/* 4. Track selection note & Submission CTA */}
      <section className="w-full max-w-4xl mx-auto px-6 mb-24 text-center">
        
        {/* Track Selection Note */}
        <div className="bg-navy-deep text-white rounded-2xl p-8 mb-12 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3">Select Your Research Track</h3>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              During submission, you must indicate your preferred track. Ensure your abstract aligns with the scope of the track.
            </p>
            <Link href="/tracks" className="inline-flex items-center gap-2 text-gold font-bold hover:text-white transition-colors group">
              See Research Tracks for full descriptions
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </Link>
          </div>
        </div>

        {/* Submission CTA */}
        <div className="flex flex-col items-center">
          <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-gold hover:bg-[#c4a132] text-white font-extrabold text-lg py-5 px-10 rounded-xl transition-all shadow-md hover:shadow-xl mb-4">
            Submit Abstract via EDAS <ExternalLink size={20} />
          </button>
          <a href="#" className="text-sm font-medium text-slate-500 hover:text-navy transition-colors flex items-center gap-1 group">
            Don't have an EDAS account? Create one free 
            <motion.span
              className="inline-block"
              whileHover={{ x: 3 }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </a>
        </div>
      </section>

      {/* 5. FAQ accordion */}
      <section>
        <SubmissionFaq />
      </section>

    </main>
  );
}
