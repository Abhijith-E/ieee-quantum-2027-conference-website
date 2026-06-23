"use client";

import React, { useState } from 'react';
import { Lightbulb, FileText, Building2, ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  { q: "Can I travel to India on a Tourist Visa to attend the conference?", a: "No. The Government of India strictly requires a Conference Visa (or e-Conference Visa) for attending academic or professional conferences. A Tourist Visa is only for recreation, sightseeing, or casual visits." },
  { q: "What documents do I need for the e-Conference Visa?", a: "You generally need: 1. A scanned copy of your passport bio page. 2. A recent digital photograph. 3. The official Invitation Letter from the conference organizers. 4. Political/MHA clearance documents (which we will provide alongside your invitation letter)." },
  { q: "Is there a visa fee waiver for students?", a: "Visa fees are determined by bilateral agreements between India and your country. There is generally no blanket waiver for students, but researchers from certain developing nations may receive gratis (free) visas. Check with your local embassy." }
];

export default function VisaTips() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full bg-slate-50 border-t border-slate-200 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-navy mb-10 text-center">Important Visa Tips & FAQs</h2>

        {/* 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
              <Lightbulb size={24} />
            </div>
            <h4 className="font-bold text-navy mb-2">Apply Early (6–8 weeks)</h4>
            <p className="text-sm text-slate-600">While e-Visas take only a few days, traditional paper visas can take weeks. Apply as early as possible.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
              <FileText size={24} />
            </div>
            <h4 className="font-bold text-navy mb-2">Keep Documents Handy</h4>
            <p className="text-sm text-slate-600">Carry printed copies of your invitation letter, return tickets, and accommodation proof at immigration.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Building2 size={24} />
            </div>
            <h4 className="font-bold text-navy mb-2">Contact Embassy Early</h4>
            <p className="text-sm text-slate-600">If your passport requires a prior paper visa, contact the local embassy immediately after registration.</p>
          </div>
        </div>

        {/* Directory & FAQ Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="bg-navy text-white rounded-2xl p-8 mb-6">
              <h4 className="font-bold text-xl mb-4 text-gold">Embassy Directory</h4>
              <p className="text-sm text-white/80 mb-6">
                Locate the nearest Indian Embassy, High Commission, or Consulate General to check specific local requirements.
              </p>
              <a href="https://mea.gov.in/indian-missions-abroad-new.htm" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-navy font-bold py-2 px-4 rounded-lg text-sm hover:bg-slate-100 transition-colors">
                View Directory <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border-b border-slate-100 last:border-0">
                  <button 
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white hover:bg-slate-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-bold text-navy pr-4">{faq.q}</span>
                    <ChevronDown size={20} className={`text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
