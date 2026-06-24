"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  MapPin, 
  Calendar, 
  User, 
  FileText,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const MOCK_RESULTS = [
  { id: 1, type: "Session", title: "Keynote: The Decade of Quantum Utility", icon: Calendar, href: "/program#session-1" },
  { id: 2, type: "Venue", title: "Main Auditorium (Christ University)", icon: MapPin, href: "/venue" },
  { id: 3, type: "Venue", title: "Accommodation & Partner Hotels", icon: MapPin, href: "/accommodation" },
  { id: 4, type: "Speaker", title: "Dr. Sarah Jenkins (MIT)", icon: User, href: "/speakers" },
  { id: 5, type: "Submission", title: "Camera-Ready Guidelines", icon: FileText, href: "/abstract-submission" },
];

export default function SearchModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void 
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const filteredResults = MOCK_RESULTS.filter(r => 
    r.title.toLowerCase().includes(query.toLowerCase()) || 
    r.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10 flex flex-col"
          >
            {/* Search Input */}
            <div className="relative border-b border-slate-100 p-4 sm:p-6 flex items-center">
              <Search className="text-gold absolute left-6 sm:left-8 w-6 h-6" />
              <input 
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sessions, speakers, venue..."
                className="w-full pl-12 sm:pl-14 pr-12 py-3 text-lg sm:text-xl font-medium text-navy placeholder:text-slate-300 bg-transparent outline-none"
              />
              <button 
                onClick={onClose}
                className="absolute right-4 sm:right-6 p-2 text-slate-400 hover:text-navy hover:bg-slate-50 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Results Area */}
            <div className="max-h-[60vh] overflow-y-auto p-2 sm:p-4 bg-slate-50">
              
              {query === "" && (
                <div className="px-4 py-8 text-center text-slate-400">
                  <p>Type to start searching the conference portal.</p>
                  <div className="flex justify-center gap-2 mt-4">
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold shadow-sm">Sessions</span>
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold shadow-sm">Venue</span>
                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold shadow-sm">Speakers</span>
                  </div>
                </div>
              )}

              {query !== "" && filteredResults.length === 0 && (
                <div className="px-4 py-12 text-center text-slate-500">
                  <Search size={48} className="mx-auto text-slate-200 mb-4" />
                  <p>No results found for "{query}".</p>
                </div>
              )}

              {query !== "" && filteredResults.length > 0 && (
                <div className="space-y-1">
                  <h3 className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Results</h3>
                  {filteredResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => {
                        onClose();
                        router.push(result.href);
                      }}
                      className="w-full flex items-center gap-4 p-4 hover:bg-white hover:shadow-sm rounded-2xl transition-all group text-left border border-transparent hover:border-slate-200"
                    >
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                        <result.icon size={18} className="text-slate-500 group-hover:text-gold" />
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-navy">{result.title}</p>
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5">{result.type}</p>
                      </div>
                      <div className="text-slate-300 group-hover:text-gold transition-colors">
                        &rarr;
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-slate-100 text-center sm:flex sm:justify-between sm:items-center">
              <p className="text-xs text-slate-400">Press <kbd className="font-mono bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">esc</kbd> to close</p>
              <Link href="/ai-assistant" onClick={onClose} className="text-xs font-bold text-blue-500 hover:text-navy mt-2 sm:mt-0 flex items-center justify-center gap-1">
                Need help? Ask the AI Assistant <Sparkles size={12} />
              </Link>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
