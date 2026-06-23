import React from 'react';
import { Download, CheckCircle2, Upload, FileSignature, CreditCard } from 'lucide-react';

export default function CameraReadyInstructions() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-20">
      <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
        <h3 className="text-2xl font-extrabold text-navy mb-8">Camera-Ready Instructions</h3>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <h4 className="text-lg font-bold text-navy flex items-center gap-2">
                Prepare Final Paper <Download size={18} className="text-slate-400" />
              </h4>
              <p className="text-slate-600 mt-1">Ensure your final paper strictly adheres to the IEEE template. Do not add page numbers or headers/footers.</p>
              <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noreferrer" className="inline-block mt-2 text-sm text-gold-dark font-bold hover:underline">Download IEEE MS Word / LaTeX Templates →</a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <h4 className="text-lg font-bold text-navy flex items-center gap-2">
                Reveal Authors <CheckCircle2 size={18} className="text-emerald-500" />
              </h4>
              <p className="text-slate-600 mt-1">Unlike the double-blind initial submission, you <strong>must include all author names, affiliations, and emails</strong> in this final camera-ready version exactly as they should appear in IEEE Xplore.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <h4 className="text-lg font-bold text-navy flex items-center gap-2">
                Upload to EDAS <Upload size={18} className="text-blue-500" />
              </h4>
              <p className="text-slate-600 mt-1">Upload the final PDF via your EDAS author portal. Ensure it passes the PDF eXpress check for font embedding.</p>
              <div className="mt-2 inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded">Deadline: October 15, 2027</div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div>
            <div>
              <h4 className="text-lg font-bold text-navy flex items-center gap-2">
                Sign Copyright Form <FileSignature size={18} className="text-purple-500" />
              </h4>
              <p className="text-slate-600 mt-1">Complete the mandatory IEEE electronic copyright form (eCF). A link will be generated in EDAS after your final paper is uploaded.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div>
            <div>
              <h4 className="text-lg font-bold text-navy flex items-center gap-2">
                Author Registration <CreditCard size={18} className="text-emerald-600" />
              </h4>
              <p className="text-slate-600 mt-1">At least one author must register at the Full Delegate rate by October 25, 2027. Failure to register will result in the paper being pulled from IEEE Xplore.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
