import React from 'react';
import { Users, LayoutDashboard, MonitorPlay, Mic2, Wind, Presentation } from 'lucide-react';

export default function ConferenceHalls() {
  const halls = [
    {
      name: 'Grand Auditorium',
      capacity: '1,200',
      usage: 'Keynote & Plenary Sessions',
      icon: <LayoutDashboard size={40} className="text-gold" />,
      amenities: ['4K Dual Projectors', 'Dolby Surround PA System', 'Central AC', 'Live Streaming Setup']
    },
    {
      name: 'Conference Hall A',
      capacity: '200',
      usage: 'Oral Presentations',
      icon: <MonitorPlay size={40} className="text-gold" />,
      amenities: ['Interactive Smart Board', 'Lectern AV Controls', 'Central AC', 'Audience Mics']
    },
    {
      name: 'Exhibition Hall',
      capacity: '500',
      usage: 'Poster Sessions & Expo',
      icon: <Presentation size={40} className="text-gold" />,
      amenities: ['120 Poster Boards', 'Open Floor Plan', 'Central AC', 'Coffee Station Integration']
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-extrabold text-navy mb-12 text-center">Conference Venues</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {halls.map((hall, idx) => (
          <div key={idx} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-shadow group flex flex-col h-full">
            
            <div className="flex items-start justify-between mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {hall.icon}
              </div>
              <div className="flex items-center gap-1.5 bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-bold border border-slate-200">
                <Users size={14} />
                {hall.capacity}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-navy mb-2">{hall.name}</h3>
            <p className="text-gold-dark font-semibold text-sm mb-6 bg-gold/10 inline-block px-3 py-1 rounded-md self-start">
              {hall.usage}
            </p>

            <div className="mt-auto">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Amenities</h4>
              <ul className="space-y-3">
                {hall.amenities.map((amenity, i) => {
                  let icon = <MonitorPlay size={16} className="text-slate-400" />;
                  if (amenity.includes('AC')) icon = <Wind size={16} className="text-slate-400" />;
                  if (amenity.includes('Mic') || amenity.includes('PA')) icon = <Mic2 size={16} className="text-slate-400" />;
                  
                  return (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                      {icon}
                      {amenity}
                    </li>
                  );
                })}
              </ul>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
