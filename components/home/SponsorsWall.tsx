import React from 'react';

const sponsors = {
  platinum: [
    { name: 'QuantumCorp', logo: '' },
    { name: 'TechGlobal', logo: '' }
  ],
  gold: [
    { name: 'Qubit Systems', logo: '' },
    { name: 'FutureWorks', logo: '' },
    { name: 'Entangle Inc', logo: '' }
  ],
  silver: [
    { name: 'AlphaTech', logo: '' },
    { name: 'BetaLabs', logo: '' },
    { name: 'GammaResearch', logo: '' },
    { name: 'DeltaCompute', logo: '' }
  ]
};

const SponsorLogoPlaceholder = ({ name, tier }: { name: string, tier: 'platinum' | 'gold' | 'silver' }) => {
  const heights = {
    platinum: 'h-24 md:h-32',
    gold: 'h-16 md:h-20',
    silver: 'h-12 md:h-16'
  };

  return (
    <div className={`flex items-center justify-center px-8 bg-slate-800/50 rounded-xl border border-slate-700/50 ${heights[tier]} min-w-[160px] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer hover:bg-slate-800`}>
      <span className="text-slate-300 font-bold tracking-wider">{name}</span>
    </div>
  );
};

export default function SponsorsWall() {
  return (
    <section className="w-full bg-navy py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
          Our Sponsors & Partners
        </h2>

        <div className="space-y-16">
          
          {/* Platinum Tier */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-slate-700" />
              Platinum Sponsors
              <span className="w-8 h-px bg-slate-700" />
            </h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {sponsors.platinum.map((s, idx) => (
                <SponsorLogoPlaceholder key={idx} name={s.name} tier="platinum" />
              ))}
            </div>
          </div>

          {/* Gold Tier */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-slate-700" />
              Gold Sponsors
              <span className="w-8 h-px bg-slate-700" />
            </h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {sponsors.gold.map((s, idx) => (
                <SponsorLogoPlaceholder key={idx} name={s.name} tier="gold" />
              ))}
            </div>
          </div>

          {/* Silver Tier */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8 flex items-center justify-center gap-4">
              <span className="w-8 h-px bg-slate-700" />
              Silver Sponsors
              <span className="w-8 h-px bg-slate-700" />
            </h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {sponsors.silver.map((s, idx) => (
                <SponsorLogoPlaceholder key={idx} name={s.name} tier="silver" />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
