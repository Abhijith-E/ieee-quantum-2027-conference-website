import React from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import DatesWidget from './DatesWidget';

export default function CfpScopeAndSticky() {
  return (
    <section className="w-full bg-slate-50 py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Scope Copy */}
          <div className="w-full lg:w-2/3 prose prose-slate prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl font-bold text-navy mb-6">Scope of the Conference</h2>
            <p>
              The rapidly evolving landscape of quantum technologies requires a multidisciplinary approach. CQTCS 2026 aims to provide a comprehensive forum where theoretical computer science meets experimental physics. We invite authors to submit original, unpublished research papers that demonstrate novel ideas, significant results, and practical applications.
            </p>
            <p>
              Submissions may encompass fundamental theory, hardware implementation, software stack development, and hybrid classical-quantum systems. We particularly encourage interdisciplinary works that bridge the gap between quantum mechanics and classical information theory.
            </p>
            <p>
              All submitted papers will undergo a rigorous double-blind peer review process by our expert technical program committee. Evaluation criteria include originality, technical depth, significance, clarity, and relevance to the conference scope.
            </p>
          </div>

          {/* Right Column: Sticky Submit Card */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-28">
            <div className="backdrop-blur-md bg-white/80 border border-slate-200 rounded-2xl shadow-xl p-8 relative overflow-hidden">
              
              {/* Glassmorphic lighting effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                  <FileText size={20} />
                </div>
                <h3 className="text-2xl font-bold text-navy">Ready to Submit?</h3>
              </div>
              
              <p className="text-slate-600 mb-8 relative z-10">
                Ensure your manuscript follows the IEEE double-column format. All submissions are handled exclusively through EDAS.
              </p>
              
              <a 
                href="#"
                className="w-full bg-gold text-navy-deep font-bold rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors shadow-lg relative z-10"
              >
                Submit via EDAS <ExternalLink size={18} />
              </a>

              {/* Sidebar variant of Dates Widget */}
              <DatesWidget variant="sidebar" />
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
