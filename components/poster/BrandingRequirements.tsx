import React from 'react';

export default function BrandingRequirements() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 mb-24">
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-12 items-center">
        
        {/* Mockup */}
        <div className="w-[300px] shrink-0 bg-slate-50 border-2 border-slate-200 rounded-xl aspect-[1/1.4] p-4 flex flex-col shadow-inner">
          {/* Header Area showing logos */}
          <div className="w-full h-20 bg-white border border-slate-200 rounded flex items-center justify-between px-2 mb-4 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm z-10 whitespace-nowrap">Header Safe Zone</span>
            
            {/* CHRIST Logo */}
            <div className="w-12 h-12 bg-blue-100 border border-blue-300 border-dashed rounded flex flex-col items-center justify-center">
              <span className="text-[8px] font-bold text-blue-800">CHRIST</span>
            </div>
            
            {/* Title */}
            <div className="flex-1 mx-2 flex flex-col items-center gap-1">
              <div className="w-full h-2 bg-slate-300 rounded" />
              <div className="w-3/4 h-2 bg-slate-300 rounded" />
            </div>

            {/* IEEE & ICQST Logos */}
            <div className="flex gap-1">
              <div className="w-10 h-10 bg-emerald-100 border border-emerald-300 border-dashed rounded flex flex-col items-center justify-center">
                <span className="text-[7px] font-bold text-emerald-800">IEEE</span>
              </div>
              <div className="w-10 h-10 bg-gold/20 border border-gold border-dashed rounded flex flex-col items-center justify-center">
                <span className="text-[7px] font-bold text-gold-dark">ICQST</span>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-slate-100 border border-slate-200 rounded opacity-50 flex items-center justify-center">
            <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Poster Body</span>
          </div>
        </div>

        {/* Text Guidelines */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-navy mb-6">Branding & Logos</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            To maintain a cohesive visual identity for the conference proceedings, all posters must include the official logos in the header section.
          </p>
          
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-black flex items-center justify-center shrink-0">1</div>
              <div>
                <h4 className="font-bold text-navy">Institution Logo (Top Left)</h4>
                <p className="text-sm text-slate-500">Your university or corporate affiliation logo goes on the left.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-black flex items-center justify-center shrink-0">2</div>
              <div>
                <h4 className="font-bold text-navy">IEEE Logo (Top Right)</h4>
                <p className="text-sm text-slate-500">The official IEEE master brand mark must be placed on the right. Maintain clear space.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-black flex items-center justify-center shrink-0">3</div>
              <div>
                <h4 className="font-bold text-navy">ICQST 2027 Logo (Top Right)</h4>
                <p className="text-sm text-slate-500">The conference logo goes adjacent to the IEEE logo.</p>
              </div>
            </li>
          </ul>

          <div className="mt-8">
            <button className="bg-navy hover:bg-navy-deep text-white font-bold py-2.5 px-6 rounded-lg text-sm transition-colors shadow-sm">
              Download Official Logo Pack (ZIP)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
