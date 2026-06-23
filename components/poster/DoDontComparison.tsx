import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function DoDontComparison() {
  const dos = [
    "Use high-contrast color schemes (dark text on light background)",
    "Rely heavily on charts, graphs, and visual data representations",
    "Keep body text concise—use bullet points instead of long paragraphs",
    "Ensure all text is legible from at least 1.5 meters away",
    "Proofread thoroughly before printing"
  ];

  const donts = [
    "Do not copy-paste your entire 10-page paper onto the poster",
    "Avoid low-resolution images downloaded directly from the web",
    "Do not use more than 3 distinct font families",
    "Never place dark text on a dark background or light text on a light background",
    "Avoid cluttering the edges—leave ample white space"
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 mb-24">
      <h2 className="text-3xl font-extrabold text-navy mb-8 text-center">Design Best Practices</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* DO Card */}
        <div className="bg-emerald-50 rounded-2xl border border-emerald-200 border-l-8 border-l-emerald-500 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 size={28} className="text-emerald-600" />
            <h3 className="text-2xl font-bold text-emerald-800">Do</h3>
          </div>
          
          {/* Clean thumbnail mockup */}
          <div className="w-full bg-white border border-emerald-200 rounded-xl aspect-[2/1.5] mb-6 p-4 flex flex-col gap-2 shadow-sm">
            <div className="w-full h-4 bg-slate-200 rounded" />
            <div className="flex gap-2 flex-1">
              <div className="flex-1 bg-slate-100 rounded border border-slate-200 flex flex-col gap-2 p-2">
                <div className="w-1/2 h-2 bg-slate-300 rounded" />
                <div className="w-full h-1 bg-slate-200 rounded" />
                <div className="w-full h-1 bg-slate-200 rounded" />
              </div>
              <div className="flex-[1.5] bg-emerald-100/50 rounded border border-emerald-200 flex items-center justify-center p-2">
                <div className="w-full h-full bg-emerald-200 rounded" />
              </div>
              <div className="flex-1 bg-slate-100 rounded border border-slate-200 flex flex-col gap-2 p-2">
                <div className="w-1/2 h-2 bg-slate-300 rounded" />
                <div className="w-full h-1 bg-slate-200 rounded" />
                <div className="w-3/4 h-1 bg-slate-200 rounded" />
              </div>
            </div>
          </div>

          <ul className="space-y-3">
            {dos.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-emerald-800 text-sm font-medium">
                <span className="shrink-0 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DON'T Card */}
        <div className="bg-rose-50 rounded-2xl border border-rose-200 border-l-8 border-l-rose-500 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <XCircle size={28} className="text-rose-600" />
            <h3 className="text-2xl font-bold text-rose-800">Don't</h3>
          </div>
          
          {/* Cluttered thumbnail mockup */}
          <div className="w-full bg-white border border-rose-200 rounded-xl aspect-[2/1.5] mb-6 p-2 flex flex-col gap-1 shadow-sm relative overflow-hidden">
            <div className="w-full h-6 bg-rose-200/50 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="w-full h-1 bg-slate-300 rounded" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-500/50 font-black text-4xl rotate-12 uppercase tracking-widest whitespace-nowrap">
              Wall of Text
            </div>
          </div>

          <ul className="space-y-3">
            {donts.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-rose-800 text-sm font-medium">
                <span className="shrink-0 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
