import React from 'react';
import { Info } from 'lucide-react';

export default function PaperSpecifications() {
  const specs = [
    { label: 'Maximum Pages (Base)', value: '8 Pages' },
    { label: 'Maximum Extra Pages', value: '2 Pages' },
    { label: 'Overlength Page Charge', value: '₹1,000 / $30 per extra page' },
    { label: 'Allowed File Format', value: 'PDF (IEEE Xplore Compatible)' },
    { label: 'Font Embedding Required', value: 'Yes (All fonts must be embedded)' },
    { label: 'Color Figures Allowed', value: 'Yes (No additional charge)' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-20">
      
      {/* Copyright Explainer */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-12 flex gap-4 shadow-sm">
        <Info size={24} className="text-blue-600 shrink-0 mt-1" />
        <div>
          <h4 className="font-bold text-blue-900 mb-1">IEEE e-Copyright Form (eCF)</h4>
          <p className="text-sm text-blue-800 leading-relaxed">
            The IEEE copyright transfer process is entirely digital. The e-copyright form is completed online through the IEEE eCF system. <strong>You will receive a unique link via email from EDAS</strong> automatically once your camera-ready submission is uploaded and validated.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-extrabold text-navy mb-6">Paper Specifications</h3>
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <tbody>
            {specs.map((spec, idx) => (
              <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-700 w-1/2">{spec.label}</td>
                <td className="py-4 px-6 text-slate-600 w-1/2">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
