import React from 'react';
import { ExternalLink, Search, Archive } from 'lucide-react';

export default function AccessProceedings() {
  return (
    <div className="w-full bg-slate-100 py-20 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-slate-200 mb-12">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search size={32} />
          </div>
          <h2 className="text-3xl font-extrabold text-navy mb-4">Post-Conference Access</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Your accepted and presented paper will officially appear on the IEEE Xplore Digital Library within <strong>4–8 weeks</strong> after the conference concludes.
          </p>
          <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md text-lg">
            Search ICQST on IEEE Xplore <ExternalLink size={20} />
          </a>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center justify-center gap-2">
            <Archive size={24} className="text-slate-400" /> Past Editions
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="bg-white border border-slate-200 hover:border-gold px-6 py-3 rounded-xl font-bold text-navy transition-colors shadow-sm text-sm">
              ICQST 2025 Proceedings
            </a>
            <a href="#" className="bg-white border border-slate-200 hover:border-gold px-6 py-3 rounded-xl font-bold text-navy transition-colors shadow-sm text-sm">
              ICQST 2023 Proceedings
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
