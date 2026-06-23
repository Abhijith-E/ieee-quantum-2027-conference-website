import React from 'react';
import { Database, Library, GraduationCap } from 'lucide-react';

export default function PublicationBanner() {
  return (
    <div className="w-full bg-navy border-y border-slate-800 py-6 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white">
          <div className="text-sm font-bold tracking-widest uppercase opacity-70 mb-2 md:mb-0 md:border-r border-slate-700 md:pr-12">
            Officially Indexed In
          </div>
          
          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
            <div className="flex items-center gap-2 font-bold text-lg">
              <Library size={20} className="text-gold" />
              IEEE Xplore
            </div>
            <div className="flex items-center gap-2 font-bold text-lg">
              <Database size={20} className="text-gold" />
              Scopus
            </div>
            <div className="flex items-center gap-2 font-bold text-lg">
              <GraduationCap size={20} className="text-gold" />
              Web of Science
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
