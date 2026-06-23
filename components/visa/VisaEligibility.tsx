"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, AlertCircle, ExternalLink } from 'lucide-react';

const COUNTRIES = [
  { code: 'JP', name: 'Japan', type: 'free' },
  { code: 'US', name: 'United States', type: 'evisa' },
  { code: 'GB', name: 'United Kingdom', type: 'evisa' },
  { code: 'AU', name: 'Australia', type: 'evisa' },
  { code: 'CN', name: 'China', type: 'prior' },
  { code: 'NG', name: 'Nigeria', type: 'prior' },
  { code: 'DE', name: 'Germany', type: 'evisa' },
  { code: 'ZA', name: 'South Africa', type: 'evisa' },
  { code: 'MV', name: 'Maldives', type: 'free' },
];

export default function VisaEligibility() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const selectedData = COUNTRIES.find(c => c.code === selectedCountry);

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20 border-b border-slate-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-navy mb-4">Do you need a visa?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Select your passport country to check your eligibility for Visa-on-Arrival or e-Visa for India.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <label htmlFor="country-select" className="block text-sm font-bold text-navy mb-2">
          Select your passport country
        </label>
        <select
          id="country-select"
          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-700 font-medium focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-shadow"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="" disabled>Select a country...</option>
          {COUNTRIES.sort((a,b) => a.name.localeCompare(b.name)).map(c => (
            <option key={c.code} value={c.code}>{c.name}</option>
          ))}
        </select>
      </div>

      <div className="min-h-[160px]">
        <AnimatePresence mode="wait">
          {selectedData && (
            <motion.div
              key={selectedData.code}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              {selectedData.type === 'free' && (
                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl p-6 flex gap-4 shadow-sm">
                  <CheckCircle2 size={28} className="text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-emerald-900 mb-1">Visa-Free or Visa-on-Arrival</h3>
                    <p className="text-emerald-800 text-sm leading-relaxed mb-3">
                      Citizens of {selectedData.name} do not require a prior visa or can obtain a Visa-on-Arrival for conference attendance.
                    </p>
                  </div>
                </div>
              )}

              {selectedData.type === 'evisa' && (
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-6 flex gap-4 shadow-sm">
                  <Info size={28} className="text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-1">e-Visa Eligible</h3>
                    <p className="text-blue-800 text-sm leading-relaxed mb-3">
                      Citizens of {selectedData.name} are eligible for the Indian e-Conference Visa. You can apply entirely online without visiting an embassy.
                    </p>
                    <a href="https://indianvisaonline.gov.in/evisa/tvoa.html" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
                      Apply for e-Visa <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              )}

              {selectedData.type === 'prior' && (
                <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-6 flex gap-4 shadow-sm">
                  <AlertCircle size={28} className="text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-1">Prior Visa Required</h3>
                    <p className="text-amber-800 text-sm leading-relaxed mb-3">
                      Citizens of {selectedData.name} must apply for a Conference Visa at the nearest Indian Embassy or Consulate before traveling.
                    </p>
                    <p className="text-sm font-bold text-amber-900">
                      Request an official Invitation Letter below to support your application.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
