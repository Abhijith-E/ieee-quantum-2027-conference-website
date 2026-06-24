"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Users, 
  Calendar, 
  CheckCircle2, 
  AlertCircle,
  Upload,
  Download,
  ChevronDown,
  ChevronUp,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

// Mock Submissions
const SUBMISSIONS = [
  {
    id: "ICQST-2027-104",
    title: "Scalable Error Mitigation Techniques in Deep Quantum Circuits",
    track: "Quantum Computing",
    authors: "Jane Doe, John Smith, Alice Johnson",
    date: "Aug 12, 2027",
    statusIndex: 2, // 0: Submitted, 1: Under Review, 2: Decision, 3: Camera-Ready, 4: Published
    decision: "Accepted",
    reviewerComments: []
  },
  {
    id: "ICQST-2027-089",
    title: "Evaluating QML Baselines on NISQ Hardware",
    track: "QML",
    authors: "Jane Doe, Robert Chen",
    date: "Jul 28, 2027",
    statusIndex: 2,
    decision: "Rejected",
    reviewerComments: [
      { id: 1, text: "The paper presents interesting empirical results, but the theoretical justification for the observed speedups is lacking. I recommend rejection for this venue, but encourage the authors to formalize their bounds and resubmit elsewhere." },
      { id: 2, text: "While the experiments on real hardware are commendable, the baseline comparisons are against outdated classical models. A fairer comparison is needed to establish quantum advantage here." }
    ]
  },
  {
    id: "ICQST-2027-155",
    title: "Photonic Quantum Network Routing Protocols",
    track: "Quantum Communication",
    authors: "Jane Doe",
    date: "Sep 02, 2027",
    statusIndex: 1, // Under Review
    decision: null,
    reviewerComments: []
  }
];

const STEPS = ["Submitted", "Under Review", "Decision", "Camera-Ready", "Published"];

export default function SubmissionsContent() {
  const [expandedComments, setExpandedComments] = useState<string | null>(null);

  const toggleComments = (id: string) => {
    if (expandedComments === id) setExpandedComments(null);
    else setExpandedComments(id);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-navy tracking-tight">My Submissions</h1>
          <p className="text-slate-500 mt-1">Track the status of your submitted papers and manage reviewer feedback.</p>
        </div>
        <Link 
          href="/dashboard/submissions/new"
          className="bg-gold hover:bg-gold-dark text-navy font-bold py-2.5 px-6 rounded-xl transition-colors shadow-sm inline-flex justify-center"
        >
          Submit New Paper
        </Link>
      </div>

      {/* Submissions List */}
      <div className="space-y-8 mt-6">
        {SUBMISSIONS.map((paper) => (
          <div key={paper.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            
            {/* Card Header Info */}
            <div className="p-6 md:p-8 border-b border-slate-100">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                  {paper.id}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-50 text-blue-600">
                  {paper.track}
                </span>
                {paper.statusIndex >= 2 && paper.decision === "Accepted" && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 size={12} /> Accepted
                  </span>
                )}
                {paper.statusIndex >= 2 && paper.decision === "Rejected" && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-50 text-amber-600 flex items-center gap-1">
                    <AlertCircle size={12} /> Rejected
                  </span>
                )}
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold text-navy mb-4 leading-tight">{paper.title}</h2>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-slate-400" />
                  {paper.authors}
                </div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-slate-400" />
                  Submitted: {paper.date}
                </div>
              </div>
            </div>

            {/* Stepper */}
            <div className="p-6 md:px-8 md:py-6 bg-slate-50">
              <div className="relative flex items-center justify-between w-full max-w-3xl mx-auto">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
                
                {/* Active Line Fill */}
                <div 
                  className="absolute top-1/2 left-0 h-1 bg-gold -translate-y-1/2 z-0 transition-all duration-1000"
                  style={{ width: `${(paper.statusIndex / (STEPS.length - 1)) * 100}%` }}
                ></div>

                {/* Nodes */}
                {STEPS.map((step, idx) => {
                  const isCompleted = idx < paper.statusIndex;
                  const isCurrent = idx === paper.statusIndex;
                  const isPending = idx > paper.statusIndex;

                  return (
                    <div key={idx} className="relative z-10 flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ${
                        isCompleted ? 'bg-gold text-navy' : 
                        isCurrent ? 'bg-white border-2 border-gold text-gold shadow-[0_0_0_4px_rgba(212,175,55,0.2)]' : 
                        'bg-slate-200 text-slate-400 border-2 border-white'
                      }`}>
                        {isCompleted ? <CheckCircle2 size={16} /> : <span className="text-xs font-bold">{idx + 1}</span>}
                        
                        {/* Pulsing Ring for Current */}
                        {isCurrent && (
                          <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-30 animate-ping"></span>
                        )}
                      </div>
                      
                      <span className={`absolute top-10 text-[10px] md:text-xs font-bold text-center w-24 -ml-8 uppercase tracking-wider ${
                        isCurrent ? 'text-navy' : isCompleted ? 'text-gold-dark' : 'text-slate-400'
                      }`}>
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="h-10 md:h-6"></div> {/* Spacer for absolute text */}
            </div>

            {/* Decision Call To Action Area */}
            {paper.statusIndex >= 2 && (
              <div className="p-6 md:p-8 border-t border-slate-100 bg-white">
                
                {paper.decision === "Accepted" && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6">
                    <div>
                      <h4 className="font-bold text-emerald-800 text-lg mb-1">Congratulations!</h4>
                      <p className="text-emerald-700 text-sm">Your paper has been accepted. Please upload the camera-ready version.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                      <button className="w-full sm:w-auto px-4 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                        <Download size={16} /> Acceptance Letter
                      </button>
                      <button className="w-full sm:w-auto px-6 py-2.5 bg-gold hover:bg-gold-dark text-navy font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm">
                        <Upload size={16} /> Camera-Ready
                      </button>
                    </div>
                  </div>
                )}

                {paper.decision === "Rejected" && (
                  <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-2">
                    <button 
                      onClick={() => toggleComments(paper.id)}
                      className="w-full flex items-center justify-between p-4 focus:outline-none"
                    >
                      <div className="flex items-center gap-3 text-amber-800">
                        <MessageSquare size={18} />
                        <span className="font-bold">View Reviewer Comments</span>
                      </div>
                      {expandedComments === paper.id ? <ChevronUp size={18} className="text-amber-600" /> : <ChevronDown size={18} className="text-amber-600" />}
                    </button>
                    
                    <AnimatePresence>
                      {expandedComments === paper.id && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 space-y-4">
                            {paper.reviewerComments.map((comment) => (
                              <blockquote key={comment.id} className="bg-white border-l-4 border-amber-300 rounded-r-xl p-4 shadow-sm">
                                <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Reviewer {comment.id}</div>
                                <p className="text-slate-700 text-sm leading-relaxed italic">"{comment.text}"</p>
                              </blockquote>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
                
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
