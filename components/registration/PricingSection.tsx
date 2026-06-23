"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Region = 'INR' | 'USD';

const PRICING_DATA = {
  INR: [
    { category: 'UG/PG Students', early: '₹3,000', regular: '₹3,500', late: '₹4,000', included: 'Student' },
    { category: 'Research Scholars', early: '₹3,000', regular: '₹3,500', late: '₹4,000', included: 'Student' },
    { category: 'Faculty & Postdocs', early: '₹3,500', regular: '₹4,000', late: '₹4,500', included: 'Standard', isHighlight: true },
    { category: 'Industry', early: '₹5,000', regular: '₹5,500', late: '₹6,000', included: 'Premium' },
    { category: 'Virtual Attendance', early: '₹1,000', regular: '₹1,500', late: '₹2,000', included: 'Virtual Only' },
  ],
  USD: [
    { category: 'International Student', early: '$100', regular: '$150', late: '$200', included: 'Student' },
    { category: 'International Faculty', early: '$200', regular: '$250', late: '$300', included: 'Standard', isHighlight: true },
    { category: 'International Industry', early: '$300', regular: '$350', late: '$450', included: 'Premium' },
    { category: 'Virtual Attendance', early: '$30', regular: '$50', late: '$70', included: 'Virtual Only' },
  ]
};

export default function PricingSection() {
  const [region, setRegion] = useState<Region>('INR');

  const currentData = PRICING_DATA[region];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 mb-20 relative z-10">
      
      {/* Toggle */}
      <div className="flex justify-center mb-10">
        <div className="flex bg-slate-100 p-1 rounded-xl relative border border-slate-200 shadow-inner">
          <button
            onClick={() => setRegion('INR')}
            className={`relative px-6 py-2.5 text-sm font-bold rounded-lg z-10 transition-colors ${region === 'INR' ? 'text-white' : 'text-slate-500 hover:text-navy'}`}
          >
            Indian Participants (INR)
            {region === 'INR' && (
              <motion.div
                layoutId="regionToggleBg"
                className="absolute inset-0 bg-navy rounded-lg -z-10 shadow-md"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
          </button>
          <button
            onClick={() => setRegion('USD')}
            className={`relative px-6 py-2.5 text-sm font-bold rounded-lg z-10 transition-colors ${region === 'USD' ? 'text-white' : 'text-slate-500 hover:text-navy'}`}
          >
            International (USD)
            {region === 'USD' && (
              <motion.div
                layoutId="regionToggleBg"
                className="absolute inset-0 bg-navy rounded-lg -z-10 shadow-md"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-sm">
        <table className="w-full text-left min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="py-5 px-6 font-bold text-slate-500 uppercase tracking-widest text-xs">Category</th>
              <th className="py-5 px-6 font-bold text-slate-500 uppercase tracking-widest text-xs">Early Bird</th>
              <th className="py-5 px-6 font-bold text-slate-500 uppercase tracking-widest text-xs">Regular</th>
              <th className="py-5 px-6 font-bold text-slate-500 uppercase tracking-widest text-xs">Late/On-Site</th>
              <th className="py-5 px-6 font-bold text-slate-500 uppercase tracking-widest text-xs">What's Included</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {currentData.map((row, idx) => (
                <motion.tr
                  key={row.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors ${row.isHighlight ? 'relative bg-amber-50/30' : ''}`}
                >
                  <td className="py-6 px-6 font-bold text-navy text-sm md:text-base relative">
                    {row.isHighlight && (
                      <>
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold" />
                        <span className="absolute -top-3 left-6 bg-gold text-navy-deep text-[10px] uppercase font-black px-2 py-0.5 rounded shadow-sm">
                          Most Common
                        </span>
                      </>
                    )}
                    {row.category}
                  </td>
                  <td className="py-6 px-6 font-extrabold text-emerald-600">{row.early}</td>
                  <td className="py-6 px-6 font-bold text-slate-600">{row.regular}</td>
                  <td className="py-6 px-6 font-bold text-slate-400">{row.late}</td>
                  <td className="py-6 px-6 font-semibold text-slate-500">
                    <span className="bg-slate-100 px-3 py-1 rounded-full text-xs border border-slate-200">{row.included}</span>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center text-sm font-semibold text-navy">
        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md">
          IEEE Members get a 10% discount!
        </span>
        <span className="ml-2 text-slate-500">— Apply your IEEE membership number as a coupon at checkout.</span>
      </div>

    </div>
  );
}
