"use client";

import React from 'react';
import { Download, Mail, CheckCircle2, FileText } from 'lucide-react';

export default function BecomeSponsor() {
  const benefits = [
    'Brand visibility to 1,000+ global quantum researchers and industry leaders.',
    'Exhibition booth space in prime networking areas.',
    'Opportunities to host dedicated industry workshops or tutorial sessions.',
    'Complimentary VIP registrations for your team and clients.',
    'Access to the delegate opt-in resume database for recruitment.'
  ];

  return (
    <div className="w-full bg-white py-24 mb-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#0F172A] text-white rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          <div className="flex-1 relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Partner with CQTCS 2027</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg">
              Showcase your technological leadership. Align your brand with the foremost academic conference in quantum technologies and cyber security.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold mt-1 shrink-0" />
                  <span className="text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:sponsors@cqtcs.in" className="inline-flex items-center gap-2 bg-transparent border-2 border-slate-500 hover:border-white text-white font-bold py-3 px-6 rounded-xl transition-colors">
                <Mail size={18} /> Contact Sponsorship Team
              </a>
            </div>
          </div>

          <div className="w-full lg:w-[320px] shrink-0 relative z-10">
            {/* Prospectus Document Mockup */}
            <div className="bg-slate-800 border border-slate-600 rounded-2xl p-6 relative group shadow-2xl overflow-hidden hover:border-gold transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-navy-deep rounded-xl flex items-center justify-center mb-6 shadow-inner border border-slate-700">
                <FileText size={32} className="text-gold" />
              </div>

              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">Sponsorship Prospectus 2027</h4>
              <p className="text-sm text-slate-400 mb-6">Complete details on tiers, pricing, floor plans, and custom packages.</p>
              
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-700">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Format</span>
                <span className="text-xs font-bold text-white bg-slate-700 px-2 py-1 rounded">PDF (2.4 MB)</span>
              </div>

              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert("PDF Download Simulated."); }}
                className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
              >
                <Download size={18} /> Download PDF
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
