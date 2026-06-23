"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';
import Link from 'next/link';

export default function VirtualPricing() {
  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden"
        >
          <div className="bg-navy p-8 text-center relative overflow-hidden">
            {/* Decorative background vectors */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
              <Ticket size={32} className="text-gold" />
            </div>
            <h3 className="text-3xl font-bold text-white relative z-10">Virtual Attendance Pass</h3>
            <p className="text-white/80 mt-2 relative z-10">Full digital access to all broadcasted sessions</p>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col gap-6 mb-8">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="font-bold text-navy text-lg">Early Bird</div>
                  <div className="text-sm text-slate-500">Register by Oct 1, 2027</div>
                </div>
                <div className="text-2xl font-bold text-gold-dark">₹1,000 <span className="text-sm font-medium text-slate-400">/ $30</span></div>
              </div>

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <div className="font-bold text-navy text-lg">Regular</div>
                  <div className="text-sm text-slate-500">Oct 2 – Nov 1, 2027</div>
                </div>
                <div className="text-2xl font-bold text-slate-700">₹1,500 <span className="text-sm font-medium text-slate-400">/ $50</span></div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-navy text-lg">Late / On-Site</div>
                  <div className="text-sm text-slate-500">After Nov 1, 2027</div>
                </div>
                <div className="text-2xl font-bold text-slate-700">₹2,000 <span className="text-sm font-medium text-slate-400">/ $70</span></div>
              </div>

            </div>

            <Link href="/registration" className="block w-full bg-gold hover:bg-gold-dark text-navy font-bold text-lg py-4 rounded-xl text-center transition-colors shadow-md">
              Register for Virtual Pass
            </Link>
            <p className="text-center text-xs text-slate-500 mt-4">
              * Rates are inclusive of all taxes and processing fees.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
