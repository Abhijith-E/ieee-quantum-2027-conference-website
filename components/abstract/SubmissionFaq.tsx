"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Can I submit multiple abstracts?",
    a: "Yes, you may submit up to three abstracts as a presenting author. However, each accepted abstract must be accompanied by a separate registration."
  },
  {
    q: "Do I need to submit a full paper if my abstract is accepted?",
    a: "While encouraged, submitting a full paper is not strictly mandatory for poster presentations. Oral presentations do require a full paper submission for inclusion in the IEEE Xplore proceedings."
  },
  {
    q: "Can I edit my abstract after submission?",
    a: "Yes, you can edit your submission in EDAS at any point before the abstract submission deadline. Once the deadline passes, no further edits are permitted."
  },
  {
    q: "What is the double-blind review policy?",
    a: "The abstract review process is single-blind (reviewers are anonymous to authors, but reviewers know the authors' identities). The full paper review process is double-blind."
  },
  {
    q: "When will I be notified of acceptance?",
    a: "Notifications of abstract acceptance will be sent via email on July 1st, 2026. The full paper invitation will be included in that email."
  }
];

export default function SubmissionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-24">
      <h2 className="text-2xl font-extrabold text-navy mb-6">Frequently Asked Questions</h2>
      
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`border-b border-slate-100 last:border-b-0 ${isOpen ? 'bg-slate-50' : 'bg-white'}`}>
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <span className="font-bold text-navy text-lg pr-8">{faq.q}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
