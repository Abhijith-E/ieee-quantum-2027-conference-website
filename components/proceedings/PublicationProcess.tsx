import React from 'react';
import { MailCheck, UploadCloud, FileSignature, Layers, Globe } from 'lucide-react';

export default function PublicationProcess() {
  const steps = [
    { icon: <MailCheck size={24} />, title: 'Paper Accepted', date: 'Sep 15, 2027', status: 'past' },
    { icon: <UploadCloud size={24} />, title: 'Camera-Ready', date: 'Oct 15, 2027', status: 'active' },
    { icon: <FileSignature size={24} />, title: 'e-Copyright', date: 'Oct 20, 2027', status: 'future' },
    { icon: <Layers size={24} />, title: 'Compilation', date: 'Nov 1, 2027', status: 'future' },
    { icon: <Globe size={24} />, title: 'IEEE Xplore', date: 'Jan 2028', status: 'future' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-navy mb-4">Publication Journey</h2>
        <p className="text-slate-600">The roadmap from acceptance to final digital publication.</p>
      </div>

      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-slate-200 -z-10">
          <div className="h-full bg-gold w-[40%]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative mb-8 md:mb-0">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                step.status === 'past' ? 'bg-navy text-white shadow-sm' : 
                step.status === 'active' ? 'bg-gold text-navy shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-110 border-2 border-white' : 
                'bg-white text-slate-400 border-2 border-slate-200'
              }`}>
                {step.icon}
              </div>
              <h4 className={`font-bold text-sm mb-2 ${step.status === 'future' ? 'text-slate-500' : 'text-navy'}`}>
                {step.title}
              </h4>
              <div className={`text-xs px-3 py-1 rounded-full font-medium inline-block ${
                step.status === 'past' ? 'bg-slate-100 text-slate-600' :
                step.status === 'active' ? 'bg-amber-50 text-amber-800 border border-amber-200' :
                'text-slate-400'
              }`}>
                {step.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
