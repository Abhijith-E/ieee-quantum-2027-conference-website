import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhatsIncluded() {
  const tiers = [
    {
      name: 'Student',
      desc: 'For UG/PG students and research scholars.',
      features: [
        { text: 'Access to all Technical Sessions', included: true },
        { text: 'Conference Proceedings USB', included: true },
        { text: 'Daily Lunch & Coffee Breaks', included: true },
        { text: 'Gala Dinner & Networking Event', included: false },
        { text: 'VIP Industry Mixer', included: false },
      ]
    },
    {
      name: 'Standard',
      desc: 'For faculty, postdocs, and academic attendees.',
      features: [
        { text: 'Access to all Technical Sessions', included: true },
        { text: 'Conference Proceedings USB', included: true },
        { text: 'Daily Lunch & Coffee Breaks', included: true },
        { text: 'Gala Dinner & Networking Event', included: true },
        { text: 'VIP Industry Mixer', included: false },
      ],
      isPopular: true
    },
    {
      name: 'Premium',
      desc: 'For corporate and industry professionals.',
      features: [
        { text: 'Access to all Technical Sessions', included: true },
        { text: 'Conference Proceedings USB', included: true },
        { text: 'Daily Lunch & Coffee Breaks', included: true },
        { text: 'Gala Dinner & Networking Event', included: true },
        { text: 'VIP Industry Mixer', included: true },
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24 relative z-10">
      <h2 className="text-3xl font-extrabold text-navy mb-10 text-center">What's Included</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-3xl p-8 border ${tier.isPopular ? 'border-gold shadow-lg relative' : 'border-slate-200 shadow-sm'}`}
          >
            {tier.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-navy-deep font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                Standard Tier
              </div>
            )}
            <h3 className="text-2xl font-bold text-navy mb-2">{tier.name}</h3>
            <p className="text-slate-500 text-sm mb-8 h-10">{tier.desc}</p>
            
            <ul className="space-y-4">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3">
                  {feature.included ? (
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle size={20} className="text-slate-300 shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm font-medium ${feature.included ? 'text-slate-700' : 'text-slate-400 line-through decoration-slate-300'}`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
