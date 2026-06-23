"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ShieldAlert } from 'lucide-react';

export default function CancellationPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-24">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <button
          className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-slate-50 hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            <ShieldAlert className="text-slate-400" size={24} />
            <span className="font-bold text-navy text-lg">Cancellation & Refund Policy</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600"
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
              className="overflow-hidden bg-white"
            >
              <div className="p-6 text-slate-600 leading-relaxed border-t border-slate-100">
                <ul className="space-y-4 list-disc pl-5">
                  <li>
                    <strong>No Refunds:</strong> Registration fees are strictly non-refundable under any circumstances, including visa denial or travel issues.
                  </li>
                  <li>
                    <strong>Transfer Policy:</strong> Name changes and registration transfers are permitted up to 15 days prior to the conference start date. A formal written request must be submitted to the organizing committee.
                  </li>
                  <li>
                    <strong>On-Site Substitution:</strong> Substitute attendees from the same organization are allowed on-site, provided they carry a written authorization letter from the originally registered participant.
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
