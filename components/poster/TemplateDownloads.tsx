"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, FileText } from 'lucide-react';

export default function TemplateDownloads() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-navy mb-4">Official Templates</h2>
        <p className="text-slate-600">Start with our pre-formatted A0 templates to ensure your poster meets all sizing and branding requirements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* PowerPoint */}
        <motion.div 
          whileHover={{ scale: 1.02, borderColor: '#D4AF37' }}
          className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center bg-white transition-colors group cursor-pointer shadow-sm hover:shadow-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FileText size={32} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-2">PowerPoint Template</h3>
          <p className="text-slate-500 text-sm mb-6">Easily editable PPTX format with pre-configured guides and fonts.</p>
          <div className="mt-auto flex items-center gap-4 w-full">
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase">2.4 MB</span>
            <button className="flex-1 bg-gold hover:bg-[#c4a132] text-white font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
              Download <FileDown size={18} />
            </button>
          </div>
        </motion.div>

        {/* PDF */}
        <motion.div 
          whileHover={{ scale: 1.02, borderColor: '#D4AF37' }}
          className="border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center bg-white transition-colors group cursor-pointer shadow-sm hover:shadow-md"
        >
          <div className="w-16 h-16 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FileText size={32} />
          </div>
          <h3 className="text-xl font-bold text-navy mb-2">PDF Template / Guides</h3>
          <p className="text-slate-500 text-sm mb-6">High-resolution PDF for importing into Illustrator or InDesign.</p>
          <div className="mt-auto flex items-center gap-4 w-full">
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase">1.1 MB</span>
            <button className="flex-1 bg-gold hover:bg-[#c4a132] text-white font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
              Download <FileDown size={18} />
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
