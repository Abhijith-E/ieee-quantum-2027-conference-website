"use client";

import React from 'react';
import { FileText, Type, AlignLeft, Hash } from 'lucide-react';

export default function FormatRequirements() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-16">
      <h2 className="text-2xl font-extrabold text-navy mb-6">Format Requirements</h2>
      
      <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: Requirements List */}
        <div className="flex-1 w-full">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm text-navy">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">Word Count</h4>
                <p className="text-sm text-slate-600">Strictly between 200 and 500 words. Do not include figures or tables in the abstract.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm text-navy">
                <Type size={20} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">Typography</h4>
                <p className="text-sm text-slate-600">Times New Roman, 12pt font size for body text. 14pt Bold for Title.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm text-navy">
                <AlignLeft size={20} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">Spacing</h4>
                <p className="text-sm text-slate-600">Single-spaced, justified alignment. No indentation for the first paragraph.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm text-navy">
                <Hash size={20} />
              </div>
              <div>
                <h4 className="font-bold text-navy text-lg">Keywords</h4>
                <p className="text-sm text-slate-600">Provide 3–5 relevant keywords separated by commas at the bottom.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right: Visual Mockup */}
        <div className="w-full md:w-72 shrink-0 bg-white rounded-xl shadow-md border border-slate-200 p-6 aspect-[1/1.3] flex flex-col items-center justify-start relative overflow-hidden">
          {/* Mockup Header */}
          <div className="w-full bg-slate-100 rounded text-[10px] text-center font-bold text-slate-400 py-1 mb-6">
            IEEE Template Format
          </div>

          {/* Title block */}
          <div className="w-3/4 h-4 bg-slate-300 rounded mb-2" />
          <div className="w-1/2 h-4 bg-slate-300 rounded mb-6" />

          {/* Authors */}
          <div className="w-2/3 h-2 bg-slate-200 rounded mb-1" />
          <div className="w-1/2 h-2 bg-slate-200 rounded mb-8" />

          {/* Body Paragraphs */}
          <div className="w-full h-2 bg-slate-200 rounded mb-1.5" />
          <div className="w-full h-2 bg-slate-200 rounded mb-1.5" />
          <div className="w-full h-2 bg-slate-200 rounded mb-1.5" />
          <div className="w-full h-2 bg-slate-200 rounded mb-1.5" />
          <div className="w-4/5 h-2 bg-slate-200 rounded mb-4" />

          <div className="w-full h-2 bg-slate-200 rounded mb-1.5" />
          <div className="w-full h-2 bg-slate-200 rounded mb-1.5" />
          <div className="w-3/4 h-2 bg-slate-200 rounded mb-8" />

          {/* Keywords */}
          <div className="w-full flex gap-2 mt-auto">
            <div className="w-1/4 h-2 bg-slate-300 rounded" />
            <div className="w-1/2 h-2 bg-slate-200 rounded" />
          </div>

          {/* Overlay gradient to look nice */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
        </div>

      </div>
    </div>
  );
}
