import React from 'react';
import { AppWindow, Wifi, Headphones, MonitorDown } from 'lucide-react';

export default function TechRequirements() {
  const reqs = [
    {
      icon: <AppWindow size={24} className="text-blue-500" />,
      title: 'Browser',
      detail: 'Chrome, Firefox, or Edge (latest version recommended)'
    },
    {
      icon: <Wifi size={24} className="text-emerald-500" />,
      title: 'Internet',
      detail: 'Stable connection (Minimum 5 Mbps for HD video)'
    },
    {
      icon: <Headphones size={24} className="text-amber-500" />,
      title: 'Audio',
      detail: 'Headphones recommended for clear Q&A audio'
    },
    {
      icon: <MonitorDown size={24} className="text-purple-500" />,
      title: 'Software',
      detail: 'No download required. Runs entirely in browser.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24">
      <h3 className="text-2xl font-bold text-navy mb-8 text-center">Technical Requirements</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {reqs.map((req, idx) => (
          <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-slate-300 transition-colors shadow-sm">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
              {req.icon}
            </div>
            <h4 className="font-bold text-navy text-sm mb-2">{req.title}</h4>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">{req.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
