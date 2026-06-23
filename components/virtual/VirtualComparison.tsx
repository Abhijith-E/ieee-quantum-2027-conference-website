import React from 'react';
import { CheckCircle2, XCircle, Info } from 'lucide-react';

export default function VirtualComparison() {
  const included = [
    'Live streaming of all Keynote & Plenary Sessions',
    'On-demand session recordings (30-day access)',
    'Access to the Virtual Poster Gallery',
    'Conference chat platform for networking',
    'Digital proceedings (PDF/USB equivalent)',
    'Digital delegate kit download',
    'Official e-Certificate of Participation'
  ];

  const notIncluded = [
    'In-person networking & coffee breaks',
    'Conference Banquet & Gala Dinner',
    'Physical campus tour & lab visits',
    'Printed delegate bag and physical kit',
    'Live Q&A prioritization (in-room takes precedence)',
    'Physical poster presentation sessions'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-navy mb-4">Virtual Experience Overview</h2>
        <p className="text-slate-600">A transparent look at what your virtual pass includes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Included */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-3xl p-8 md:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-emerald-100 text-emerald-600 rounded-full p-2">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900">What's Included</h3>
          </div>
          <ul className="space-y-4">
            {included.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-emerald-900 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Included */}
        <div className="bg-slate-50 border-l-4 border-slate-300 rounded-r-3xl p-8 md:p-10 shadow-sm flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-slate-200 text-slate-600 rounded-full p-2">
              <XCircle size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Not Included</h3>
          </div>
          <ul className="space-y-4 mb-8">
            {notIncluded.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <XCircle size={18} className="text-slate-400 mt-0.5 shrink-0" />
                <span className="text-slate-600 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto bg-white border border-slate-200 rounded-xl p-4 flex items-start gap-3 text-sm">
            <Info size={18} className="text-slate-400 shrink-0 mt-0.5" />
            <p className="text-slate-600 leading-relaxed font-medium">
              Note: To maximize your networking and academic interactions, we highly recommend <a href="/registration" className="text-navy font-bold hover:underline">registering for in-person attendance</a> if possible.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
