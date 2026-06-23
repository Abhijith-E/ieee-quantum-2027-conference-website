import React from 'react';
import { PlusCircle } from 'lucide-react';

export default function PreConfAddon() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-24 relative z-10">
      <div className="border-2 border-dashed border-gold rounded-3xl p-8 bg-[#fdfaf5] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex items-start gap-4">
          <div className="mt-1 w-10 h-10 rounded-full bg-gold/20 text-gold-dark flex items-center justify-center shrink-0">
            <PlusCircle size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy mb-2">Add Pre-Conference Workshop Access</h3>
            <p className="text-slate-600 text-sm max-w-md">
              Gain exclusive access to hands-on masterclasses on Day 0. Limited seats available. Select this add-on during the final checkout step.
            </p>
          </div>
        </div>

        <div className="shrink-0 bg-white border border-slate-200 rounded-xl p-5 w-full md:w-auto shadow-sm">
          <div className="flex justify-between items-center gap-8 border-b border-slate-100 pb-2 mb-2">
            <span className="text-sm font-bold text-slate-500">Student Add-on</span>
            <span className="font-extrabold text-navy">+₹500</span>
          </div>
          <div className="flex justify-between items-center gap-8">
            <span className="text-sm font-bold text-slate-500">Faculty/Industry</span>
            <span className="font-extrabold text-navy">+₹1,000</span>
          </div>
        </div>

      </div>
    </div>
  );
}
