import React from 'react';
import { Laptop, CreditCard, Mail, PlaneLanding, ExternalLink } from 'lucide-react';

export default function VisaStepper() {
  const steps = [
    { icon: <Laptop size={24} />, label: 'Apply Online', desc: 'Secure Govt Portal' },
    { icon: <CreditCard size={24} />, label: 'Pay Fee', desc: 'Credit/Debit Card' },
    { icon: <Mail size={24} />, label: 'Receive ETA', desc: 'Takes 2-4 days via email' },
    { icon: <PlaneLanding size={24} />, label: 'Arrive in India', desc: 'e-Visa Counter at Airport' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 mb-20 -mt-10 relative z-20">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
        
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 relative z-10 border-b border-slate-100 pb-8">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-2">e-Conference Visa Process</h3>
            <p className="text-slate-500 font-medium text-sm">For eligible passport holders traveling to attend the conference.</p>
          </div>
          <a href="https://indianvisaonline.gov.in/evisa/tvoa.html" target="_blank" rel="noreferrer" className="shrink-0 bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors">
            Official Portal <ExternalLink size={18} />
          </a>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between relative mt-4">
          
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10">
            <div className="h-full bg-gold/50 w-full animate-pulse"></div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative w-full md:w-1/4 mb-8 md:mb-0">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border-2 border-slate-100 shadow-sm text-navy mb-4 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold text-navy rounded-full text-xs font-black flex items-center justify-center border-2 border-white">
                  {idx + 1}
                </div>
              </div>
              <h4 className="font-bold text-navy text-sm mb-1">{step.label}</h4>
              <p className="text-xs text-slate-500 font-medium px-4">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 text-center relative z-10">
          <p className="text-sm font-bold text-amber-900">
            Processing Time Note: <span className="font-medium text-amber-800">Apply at least 4 days before your expected date of travel.</span>
          </p>
        </div>

      </div>
    </div>
  );
}
