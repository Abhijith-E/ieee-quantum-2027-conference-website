"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, MessageCircleQuestion, Mail } from 'lucide-react';
import Link from 'next/link';

type FaqItem = {
  id: string;
  category: string;
  question: string;
  answer: string | React.ReactNode;
};

const CATEGORIES = ["All", "Submission", "Registration", "Visa & Travel", "Venue", "Technical", "Virtual Attendance"];

const FAQS: FaqItem[] = [
  // Submission
  { id: 'sub-1', category: 'Submission', question: "Can I submit to multiple tracks?", answer: "No, each paper must be submitted to a single primary track. However, you may indicate secondary tracks of interest during the EDAS submission process." },
  { id: 'sub-2', category: 'Submission', question: "What is the page limit?", answer: "Regular papers are limited to 6 pages, including figures and references. You may purchase up to 2 additional pages for an extra fee." },
  { id: 'sub-3', category: 'Submission', question: "Is the review process double-blind?", answer: "Yes. Authors must remove all identifying information (names, affiliations, funding acknowledgments) from the initial manuscript." },
  { id: 'sub-4', category: 'Submission', question: "What if my paper is rejected?", answer: "Rejected papers will receive detailed feedback from at least three reviewers. You are encouraged to revise and submit to future IEEE conferences." },
  { id: 'sub-5', category: 'Submission', question: "Do you accept supplementary materials?", answer: "Yes, you can upload a ZIP file (max 20MB) containing datasets, extended proofs, or code to EDAS alongside your manuscript." },
  
  // Registration
  { id: 'reg-1', category: 'Registration', question: "Can I get a refund if I cancel?", answer: "Full refunds (minus a $50 processing fee) are available until September 1, 2026. No refunds will be issued after this date." },
  { id: 'reg-2', category: 'Registration', question: "Is IEEE membership required to attend?", answer: "No, non-members are welcome. However, IEEE and IEEE Computer Society members receive significant discounts on registration fees." },
  { id: 'reg-3', category: 'Registration', question: "Can someone else attend in my place?", answer: "Yes, registration transfers are permitted until October 15, 2026. Please contact the registration chair to process the transfer." },
  { id: 'reg-4', category: 'Registration', question: "When do I receive my receipt?", answer: "A formal tax invoice and receipt will be automatically emailed to you upon successful payment via the registration portal." },
  { id: 'reg-5', category: 'Registration', question: "Do student registrations cover banquet access?", answer: "Yes, all full conference registrations, including student tiers, include a ticket to the Conference Banquet." },

  // Visa
  { id: 'visa-1', category: 'Visa & Travel', question: "How long does the Indian e-Visa take?", answer: "The Indian e-Conference Visa typically takes 3 to 5 business days to process. We recommend applying at least 4 weeks before travel." },
  { id: 'visa-2', category: 'Visa & Travel', question: "Can I get an invitation letter before full paper acceptance?", answer: "We can issue a provisional invitation letter upon abstract acceptance. The final official letter requires full paper acceptance and paid registration." },
  { id: 'visa-3', category: 'Visa & Travel', question: "What if my visa is rejected?", answer: "If your visa is officially denied, we will provide a full refund of your registration fee (proof of denial required) and convert your presentation to a virtual format." },
  { id: 'visa-4', category: 'Visa & Travel', question: "Which airport should I fly into?", answer: "Kempegowda International Airport (BLR) in Bengaluru. It is approximately 40km (1.5 hours) from the CHRIST University central campus." },
  
  // Venue
  { id: 'ven-1', category: 'Venue', question: "Is there parking at CHRIST University?", answer: "Limited paid parking is available on campus. We highly recommend using ride-sharing services (Uber/Ola) or the Namma Metro." },
  { id: 'ven-2', category: 'Venue', question: "Are meals included?", answer: "Yes, morning/afternoon coffee breaks and buffet lunches are included for all three days of the conference." },
  { id: 'ven-3', category: 'Venue', question: "Is the venue wheelchair accessible?", answer: "Absolutely. All session halls, dining areas, and exhibition spaces at the venue are fully accessible by wheelchair." },
  { id: 'ven-4', category: 'Venue', question: "Is there conference Wi-Fi?", answer: "Yes, high-speed Wi-Fi is complimentary for all attendees. Credentials will be printed on the back of your conference badge." },
  
  // Technical
  { id: 'tech-1', category: 'Technical', question: "What presentation formats are supported?", answer: "We support 16:9 PDF and PowerPoint (PPTX) presentations. You must upload your slides to the presentation system 24 hours before your session." },
  { id: 'tech-2', category: 'Technical', question: "Can I use my own laptop to present?", answer: "No, to ensure smooth transitions between speakers, all presentations must be run from the provided podium computer." },
  
  // Virtual Attendance
  { id: 'virt-1', category: 'Virtual Attendance', question: "Are all sessions livestreamed?", answer: "Keynotes and all oral presentation tracks are livestreamed. Poster sessions and interactive workshops are strictly in-person." },
  { id: 'virt-2', category: 'Virtual Attendance', question: "How long are recordings available?", answer: "Virtual attendees will have access to the on-demand recording platform for 30 days following the conclusion of the conference." },
];

export default function FaqModule() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return FAQS.filter(faq => {
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="w-full bg-navy pt-32 pb-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-blue-400 text-white transform rotate-3">
            <MessageCircleQuestion size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-10">
            Frequently Asked Questions
          </h1>
          
          {/* Search Bar overlaps the hero bottom visually via negative margin on the content wrapper, but here we just place it directly */}
          <div className="w-full max-w-2xl relative shadow-2xl rounded-2xl overflow-hidden group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <Search size={22} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., visa, refund, page limit)…"
              className="w-full pl-14 pr-6 py-5 text-lg border-0 focus:ring-4 focus:ring-blue-500/50 outline-none text-slate-800 placeholder:text-slate-400 bg-white"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full max-w-5xl mx-auto px-6 py-16 -mt-16 relative z-20">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-slate-200 shadow-sm">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenItems(new Set()); }}
              className={`relative px-5 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                activeCategory === cat ? 'text-navy' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gold/20 border border-gold/50 rounded-xl z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = openItems.has(faq.id);
                return (
                  <motion.div
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-white border ${isOpen ? 'border-blue-200 shadow-md' : 'border-slate-200 shadow-sm hover:border-slate-300'} rounded-2xl overflow-hidden transition-all`}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className={`font-semibold text-lg ${isOpen ? 'text-blue-700' : 'text-navy'}`}>
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 ml-4 p-1 rounded-full ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}
                      >
                        <ChevronDown size={20} />
                      </motion.span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200 border-dashed"
              >
                <Search size={48} className="text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-700 mb-2">No results found</h3>
                <p className="text-slate-500">We couldn't find any questions matching "{searchQuery}" in the {activeCategory} category.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="mt-6 text-blue-600 font-bold hover:underline"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Still Have Questions CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-3xl p-12 text-center shadow-inner relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <MessageCircleQuestion size={200} />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-navy mb-4">Still have questions?</h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-8 text-lg">
              Can't find the answer you're looking for? Our organizing committee is here to help you with any specific queries.
            </p>
            <button 
              onClick={() => alert("Redirecting to /contact")}
              className="bg-navy hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors inline-flex items-center gap-2"
            >
              <Mail size={18} /> Contact Our Team
            </button>
          </div>
        </motion.div>

      </section>

    </div>
  );
}
