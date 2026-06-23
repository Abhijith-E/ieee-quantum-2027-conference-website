import React from 'react';
import { Footprints, Bus, Laptop, Map, Clock, IndianRupee, Navigation } from 'lucide-react';

export default function CuratedItineraries() {
  const itineraries = [
    {
      title: 'Half-Day Heritage Walk',
      icon: <Footprints size={24} className="text-amber-600" />,
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      stats: { duration: '4 Hours', transport: 'Walking', cost: '₹500' },
      stops: [
        'Vidhana Soudha (Start)',
        'Cubbon Park Stroll',
        'Visvesvaraya Museum',
        'UB City (End & Dining)'
      ]
    },
    {
      title: 'Full Day City Explorer',
      icon: <Bus size={24} className="text-navy" />,
      bg: 'bg-slate-50',
      border: 'border-slate-200',
      stats: { duration: '8 Hours', transport: 'Metro/Taxi', cost: '₹1,500' },
      stops: [
        'ISKCON Temple (Morning)',
        'Bangalore Palace',
        'Lalbagh Botanical Garden',
        'MG Road / Brigade Road (Evening)'
      ]
    },
    {
      title: 'Tech Trail Innovation',
      icon: <Laptop size={24} className="text-emerald-600" />,
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      stats: { duration: '5 Hours', transport: 'Taxi', cost: '₹1,000' },
      stops: [
        'Electronic City Flyover Drive',
        'Infosys Campus (Exterior/Visitor)',
        'Whitefield Tech Parks',
        'HAL Aerospace Museum'
      ]
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-gold">
          <Map size={24} />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-navy">Curated Itineraries</h2>
          <p className="text-slate-500 font-medium text-sm">Perfectly planned routes to make the most of your free time.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {itineraries.map((itin, idx) => (
          <div key={idx} className={`rounded-3xl border p-8 flex flex-col shadow-sm transition-transform hover:-translate-y-1 ${itin.bg} ${itin.border}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                {itin.icon}
              </div>
              <h3 className="text-xl font-bold text-navy leading-tight">{itin.title}</h3>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-8 bg-white/60 p-3 rounded-xl border border-white">
              <div className="text-center">
                <Clock size={14} className="mx-auto mb-1 text-slate-400" />
                <div className="text-[10px] uppercase font-bold text-slate-500">{itin.stats.duration}</div>
              </div>
              <div className="text-center border-x border-slate-200">
                <Navigation size={14} className="mx-auto mb-1 text-slate-400" />
                <div className="text-[10px] uppercase font-bold text-slate-500">{itin.stats.transport}</div>
              </div>
              <div className="text-center">
                <IndianRupee size={14} className="mx-auto mb-1 text-slate-400" />
                <div className="text-[10px] uppercase font-bold text-slate-500">{itin.stats.cost} est.</div>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Route Stops</h4>
              <div className="space-y-4 relative">
                <div className="absolute left-3 top-2 bottom-4 w-px bg-slate-300"></div>
                {itin.stops.map((stop, i) => (
                  <div key={i} className="flex items-start gap-4 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0 border-2 border-white shadow-sm mt-0.5">
                      {i + 1}
                    </div>
                    <div className="text-sm font-semibold text-slate-700 py-1">{stop}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="mt-8 w-full bg-white border border-slate-200 text-navy font-bold py-3 rounded-xl hover:bg-navy hover:text-white transition-colors text-sm shadow-sm">
              View Full Route Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
