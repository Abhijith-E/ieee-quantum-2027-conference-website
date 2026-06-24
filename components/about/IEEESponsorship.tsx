import React from 'react';

export default function IEEESponsorship() {
  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.05)] border border-slate-100 overflow-hidden flex flex-col md:flex-row relative">
          
          {/* IEEE Blue Left Border */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00629B]" />

          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 w-full pl-10 md:pl-12">
            
            {/* Logo Area */}
            <div className="shrink-0 flex flex-col items-center gap-4">
              <div className="w-32 h-12 bg-slate-100 rounded flex items-center justify-center font-bold text-slate-400 border border-slate-200">
                IEEE Logo
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h3 className="text-xl font-bold text-navy">Technical Co-Sponsorship</h3>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold tracking-wide uppercase">
                  Published in IEEE Xplore
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed text-sm">
                ICQST 2027 is proud to be technically co-sponsored by the IEEE Computer Society. All accepted and presented full papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements. This partnership ensures that the research presented at ICQST meets the highest international standards of academic rigor.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
