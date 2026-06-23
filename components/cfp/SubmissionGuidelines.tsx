"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle2, FileArchive } from 'lucide-react';

export default function SubmissionGuidelines() {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-navy mb-8">Submission Guidelines</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Paper Format Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center text-navy">
                <FileText size={20} />
              </div>
              <h3 className="text-xl font-bold text-navy">Paper Format</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                'Maximum 8 pages (including references)',
                'Double-column IEEE format',
                'PDF format only',
                'Double-blind review process (anonymize authors)'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-slate-400 shrink-0 mt-0.5" size={18} />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Templates Card */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                <FileArchive size={20} />
              </div>
              <h3 className="text-xl font-bold text-navy">Official Templates</h3>
            </div>
            
            <p className="text-slate-500 mb-8">
              Please use the official IEEE conference templates to format your manuscript prior to submission.
            </p>

            <div className="flex flex-col gap-4 mt-auto">
              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-gold hover:bg-gold/5 transition-colors group"
              >
                <span className="font-semibold text-slate-700 group-hover:text-navy">LaTeX Template</span>
                <Download size={18} className="text-slate-400 group-hover:text-gold" />
              </motion.a>
              
              <motion.a
                href="#"
                whileHover={{ x: 4 }}
                className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50 hover:border-gold hover:bg-gold/5 transition-colors group"
              >
                <span className="font-semibold text-slate-700 group-hover:text-navy">Microsoft Word Template</span>
                <Download size={18} className="text-slate-400 group-hover:text-gold" />
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
