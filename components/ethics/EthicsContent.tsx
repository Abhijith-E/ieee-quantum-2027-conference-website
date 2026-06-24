"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Scale, AlertTriangle, MessageSquareWarning, ExternalLink, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function EthicsContent() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const ETHICS_STANDARDS = [
    {
      title: "Plagiarism Policy",
      statement: "All submissions must be original work. We utilize IEEE CrossCheck (powered by iThenticate) to screen all submissions for overlap with previously published work.",
      examples: "Copying text verbatim without quotes, using figures without attribution, or self-plagiarism (recycling your own previously published work).",
      remediation: "Submissions exceeding the similarity threshold will be immediately desk-rejected. Severe cases are reported to the IEEE Ethics Committee."
    },
    {
      title: "Dual Submission Policy",
      statement: "Papers submitted to ICQST must not be under review concurrently at any other journal or conference with published proceedings.",
      examples: "Submitting to ICQST and an overlapping arXiv preprint is allowed. Submitting to ICQST and another IEEE conference simultaneously is strictly prohibited.",
      remediation: "Dual submissions will be withdrawn from the review process, and the authors may be banned from submitting to future iterations of the conference."
    },
    {
      title: "Authorship Ethics",
      statement: "Authorship should be limited to those who have made a significant contribution to the conception, design, execution, or interpretation of the reported study.",
      examples: "Guest authorship (adding a prominent researcher who didn't contribute) or ghost authorship (excluding a student who did the core work) are ethical violations.",
      remediation: "Disputes over authorship must be resolved by the authors before final camera-ready submission. The Program Chairs will not arbitrate authorship disputes."
    },
    {
      title: "Data Fabrication & Falsification",
      statement: "Researchers must present their data accurately. Manipulating results to fit a desired hypothesis is a severe violation of scientific integrity.",
      examples: "Altering charts, omitting inconvenient data points, or fabricating quantum circuit execution metrics.",
      remediation: "Confirmed fabrication leads to immediate rejection, retraction of published papers, and formal reporting to the authors' institutions."
    },
    {
      title: "Conflict of Interest (COI)",
      statement: "Authors and reviewers must declare any potential conflicts of interest that could compromise the objectivity of the review process.",
      examples: "Reviewing a paper written by a recent collaborator, a former student, or someone from the same institution.",
      remediation: "Reviewers failing to declare a COI will be removed from the Program Committee."
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-16 space-y-20">
      
      {/* 3 Principles */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">Respectful Conduct</h3>
            <p className="text-slate-600 text-sm">Treating all participants with dignity and professional respect at all times.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">Inclusive Environment</h3>
            <p className="text-slate-600 text-sm">Fostering a welcoming space free from discrimination or bias for global attendees.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gold/10 text-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <Scale size={24} />
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">Scientific Integrity</h3>
            <p className="text-slate-600 text-sm">Upholding the highest standards of honesty and transparency in research publication.</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600">
          <p>
            The IEEE International International Conference on Quantum Science and Technologies (ICQST) is dedicated to providing a harassment-free and rigorously peer-reviewed conference experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, or religion.
          </p>
          <p>
            We do not tolerate harassment of conference participants in any form. Scientific integrity forms the bedrock of our proceedings, and we expect all authors, reviewers, and organizers to adhere to strict ethical guidelines during the paper submission and presentation process.
          </p>
        </div>
      </section>

      {/* Anti-Harassment Policy */}
      <section className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4 text-red-700">
          <AlertTriangle size={24} />
          <h2 className="text-2xl font-bold">Anti-Harassment Policy</h2>
        </div>
        <p className="text-slate-700 mb-4 font-medium">
          Harassment includes, but is not limited to:
        </p>
        <ul className="list-disc list-inside text-slate-600 space-y-2 mb-6 ml-2">
          <li>Offensive verbal comments related to gender, sexual orientation, race, religion, or disability.</li>
          <li>Inappropriate use of nudity and/or sexual images in public spaces or presentations.</li>
          <li>Deliberate intimidation, stalking, or following.</li>
          <li>Harassing photography or recording without consent.</li>
          <li>Sustained disruption of talks or other events.</li>
          <li>Inappropriate physical contact or unwelcome sexual attention.</li>
        </ul>
        <div className="bg-white/60 p-4 rounded-lg border border-red-100">
          <strong className="text-red-800">Consequences:</strong>
          <p className="text-red-900/80 text-sm mt-1">
            Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing behavior, conference organizers reserve the right to take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.
          </p>
        </div>
      </section>

      {/* Research Ethics Standards Accordion */}
      <section>
        <h2 className="text-3xl font-bold text-navy mb-8">Research Ethics Standards</h2>
        <div className="space-y-3">
          {ETHICS_STANDARDS.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors focus:outline-none"
              >
                <span className="font-bold text-navy text-lg">{item.title}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-slate-400 transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {openAccordion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-5 border-t border-slate-200 text-slate-600 text-sm space-y-4">
                      <div>
                        <strong className="text-slate-800 block mb-1">Policy Statement:</strong>
                        {item.statement}
                      </div>
                      <div>
                        <strong className="text-slate-800 block mb-1">Examples of Violation:</strong>
                        {item.examples}
                      </div>
                      <div className="bg-amber-50 p-3 rounded border border-amber-100 text-amber-900">
                        <strong className="block mb-1">Remediation Process:</strong>
                        {item.remediation}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Review Integrity Stepper */}
      <section>
        <h2 className="text-3xl font-bold text-navy mb-8">Review Integrity & COI Handling</h2>
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-8">
          <p className="text-slate-600 mb-8">
            ICQST employs a strict <strong>Double-Blind Peer Review</strong> process. The identities of both the authors and the reviewers are kept hidden from each other to ensure unbiased evaluation. Reviewers must navigate a rigid Conflict of Interest (COI) handling pipeline:
          </p>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-6 left-6 bottom-6 w-0.5 bg-slate-200 md:hidden" />
            <div className="hidden md:block absolute top-6 left-6 right-6 h-0.5 bg-slate-200" />
            
            <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
              {[
                { step: 1, title: 'Submission', desc: 'Authors declare institutional COIs in EDAS.' },
                { step: 2, title: 'Algorithmic Screen', desc: 'EDAS blocks domain and co-author matches.' },
                { step: 3, title: 'Manual Declaration', desc: 'Reviewers actively reject papers if they recognize the work.' },
                { step: 4, title: 'Independent Review', desc: 'Unbiased evaluation proceeds strictly on merit.' }
              ].map((s) => (
                <div key={s.step} className="flex md:flex-col items-center md:text-center gap-4 md:w-1/4">
                  <div className="w-12 h-12 rounded-full bg-navy text-white font-bold flex items-center justify-center shrink-0 border-4 border-slate-50 relative z-10 shadow-sm">
                    {s.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{s.title}</h4>
                    <p className="text-xs text-slate-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Mechanism & IEEE Link */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="bg-navy text-white rounded-2xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute -right-8 -top-8 text-white/5 transform rotate-12">
            <MessageSquareWarning size={160} />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">How to Report a Concern</h2>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              If you witness or experience unacceptable behavior, or suspect a breach of research ethics, please contact the organizing committee immediately.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="font-medium">Response Time SLA: We respond within 24 hours.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="font-medium">Email: <a href="mailto:ethics@icqst.in" className="text-gold hover:underline">ethics@icqst.in</a></span>
              </div>
            </div>
            <button className="bg-white text-navy font-bold px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors w-full sm:w-auto">
              Open Anonymous Reporting Form
            </button>
          </div>
        </div>

        <Link href="https://www.ieee.org/about/corporate/governance/p7-8.html" target="_blank" rel="noopener noreferrer">
          <motion.div 
            whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}
            className="bg-white border-2 border-slate-200 hover:border-blue-500 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center transition-colors group"
          >
            <div className="text-blue-700 font-bold text-3xl tracking-widest mb-4">IEEE</div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Official IEEE Code of Ethics</h3>
            <p className="text-slate-500 text-sm mb-6">
              Read the global policies governing all IEEE members and conference attendees.
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
              Read Policy <ExternalLink size={16} />
            </div>
          </motion.div>
        </Link>

      </section>

    </div>
  );
}
