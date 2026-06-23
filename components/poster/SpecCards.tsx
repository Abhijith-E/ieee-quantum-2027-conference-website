import React from 'react';
import { Ruler, Settings, FileBox, Type } from 'lucide-react';

export default function SpecCards() {
  const specs = [
    {
      icon: <Ruler size={32} />,
      title: 'Size',
      desc: 'A0 Portrait (841 × 1189mm)'
    },
    {
      icon: <Settings size={32} />,
      title: 'Resolution',
      desc: '300 DPI minimum for images'
    },
    {
      icon: <FileBox size={32} />,
      title: 'Format',
      desc: 'PDF or high-res PNG'
    },
    {
      icon: <Type size={32} />,
      title: 'Font Minimum',
      desc: '24pt body, 48pt title'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-20 -mt-10 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {specs.map((spec, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-gold/10 text-gold-dark flex items-center justify-center mb-4">
              {spec.icon}
            </div>
            <h3 className="text-lg font-bold text-navy mb-1">{spec.title}</h3>
            <p className="text-slate-500 text-sm">{spec.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
