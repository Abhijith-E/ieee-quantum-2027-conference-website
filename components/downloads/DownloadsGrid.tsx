"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Lock } from 'lucide-react';

type DownloadItem = {
  id: string;
  title: string;
  description: string;
  type: 'PDF' | 'DOCX' | 'PPTX' | 'LaTeX' | 'ZIP' | 'PNG';
  size: string;
  category: string;
  downloadCount?: number;
  comingSoon?: string;
};

const DOWNLOADS: DownloadItem[] = [
  { id: '1', title: 'Conference Brochure', description: 'Comprehensive overview of the conference.', type: 'PDF', size: '2.4 MB', category: 'Branding', downloadCount: 1250 },
  { id: '2', title: 'Conference Promotional Poster', description: 'A3 printable poster for notice boards.', type: 'PDF', size: '4.8 MB', category: 'Branding', downloadCount: 840 },
  { id: '3', title: 'IEEE Paper Template (Word)', description: 'Official IEEE double-column format.', type: 'DOCX', size: '180 KB', category: 'Templates', downloadCount: 3200 },
  { id: '4', title: 'IEEE Paper Template (LaTeX)', description: 'Official IEEE LaTeX class and bib files.', type: 'LaTeX', size: '320 KB', category: 'Templates', downloadCount: 5400 },
  { id: '5', title: 'Poster Preparation Template', description: 'A0 size template with branding.', type: 'PPTX', size: '8.0 MB', category: 'Templates', downloadCount: 600 },
  { id: '6', title: 'Poster Preparation Template', description: 'A0 size template guidelines.', type: 'PDF', size: '4.0 MB', category: 'Templates', downloadCount: 450 },
  { id: '7', title: 'Sponsorship Prospectus', description: 'Details on tiers and floor plans.', type: 'PDF', size: '3.1 MB', category: 'Branding' },
  { id: '8', title: 'Call for Papers', description: 'One-pager overview of topics and dates.', type: 'PDF', size: '1.2 MB', category: 'Branding', downloadCount: 1100 },
  { id: '9', title: 'Abstract Submission Guide', description: 'Step-by-step EDAS instructions.', type: 'PDF', size: '800 KB', category: 'Guides', downloadCount: 2900 },
  { id: '10', title: 'Camera-Ready Submission Guide', description: 'Final formatting and eCF checklist.', type: 'PDF', size: '900 KB', category: 'Guides' },
  { id: '11', title: 'Technical Program', description: 'Full schedule of keynotes and sessions.', type: 'PDF', size: 'TBD', category: 'Program', comingSoon: 'Available Oct 2027' },
  { id: '12', title: 'Visa Guide for Int. Delegates', description: 'Invitation letter and e-Visa process.', type: 'PDF', size: '1.5 MB', category: 'Visa', downloadCount: 430 },
  { id: '13', title: 'Conference App — QR Code', description: 'Scan to download the companion app.', type: 'PNG', size: '120 KB', category: 'Guides' },
  { id: '14', title: 'Press Kit', description: 'Logos, photos, and press releases.', type: 'ZIP', size: '18.0 MB', category: 'Branding' },
];

const CATEGORIES = ['All', 'Templates', 'Guides', 'Branding', 'Program', 'Visa'];

export default function DownloadsGrid() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredDownloads = DOWNLOADS.filter(d => activeTab === 'All' || d.category === activeTab);

  const getBadgeColor = (type: string) => {
    switch(type) {
      case 'PDF': return 'bg-red-100 text-red-700 border-red-200';
      case 'DOCX': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'PPTX': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'LaTeX': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'ZIP': return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'PNG': return 'bg-purple-100 text-purple-700 border-purple-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getCoverColor = (category: string) => {
    switch(category) {
      case 'Templates': return 'from-blue-600 to-navy';
      case 'Guides': return 'from-emerald-600 to-teal-800';
      case 'Branding': return 'from-gold to-amber-600';
      case 'Program': return 'from-purple-600 to-indigo-800';
      case 'Visa': return 'from-rose-500 to-red-700';
      default: return 'from-slate-600 to-slate-800';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16">
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${
              activeTab === cat 
                ? 'bg-navy text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredDownloads.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full hover:shadow-xl group"
            >
              {/* Document Cover Mockup */}
              <div className={`w-full aspect-[1/1.4] rounded-lg bg-gradient-to-br ${getCoverColor(item.category)} mb-6 relative overflow-hidden shadow-inner flex flex-col items-center justify-center p-6 text-center border-4 border-slate-100`}>
                <div className="absolute top-0 left-0 w-full h-12 bg-white/10 backdrop-blur-sm border-b border-white/20"></div>
                <FileText size={48} className="text-white/50 mb-4" />
                <h4 className="text-white font-bold text-sm leading-snug">{item.title}</h4>
                <div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full">
                  <div className="h-full bg-white/40 w-2/3 rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded border ${getBadgeColor(item.type)}`}>
                  {item.type}
                </span>
                <span className="text-xs font-medium text-slate-400">{item.size}</span>
              </div>

              <h3 className="text-[18px] font-semibold text-navy leading-snug mb-2 flex-1">{item.title}</h3>
              <p className="text-slate-500 text-sm line-clamp-2 mb-6">{item.description}</p>

              <div className="mt-auto">
                {item.comingSoon ? (
                  <div className="relative group/btn">
                    <button disabled className="w-full bg-slate-100 text-slate-400 font-bold py-3 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed">
                      <Lock size={18} /> Coming Soon
                    </button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-navy text-white text-xs font-bold rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {item.comingSoon}
                    </div>
                  </div>
                ) : (
                  <button 
                    onClick={() => alert(`Simulating securely downloading ${item.title} from Supabase Storage.`)}
                    className="w-full bg-slate-50 hover:bg-gold-dark text-navy font-bold py-3 rounded-xl border border-slate-200 hover:border-gold-dark flex items-center justify-center gap-2 transition-colors group-hover:bg-gold group-hover:border-gold shadow-sm"
                  >
                    <Download size={18} /> Download
                  </button>
                )}

                <div className="h-4 mt-3 text-center">
                  {item.downloadCount && !item.comingSoon && (
                    <span className="text-[11px] font-medium text-slate-400">
                      Downloaded {item.downloadCount.toLocaleString()} times
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}
