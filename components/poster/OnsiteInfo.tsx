import React from 'react';
import { Printer, MapPin, ClipboardList, Info } from 'lucide-react';

export default function OnsiteInfo() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 mb-24">
      <div className="bg-navy-deep text-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-800 relative overflow-hidden">
        
        {/* Background aesthetic */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Printer size={300} />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-12">
          
          {/* Left: General Info */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4">On-Site Logistics</h2>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Plan your arrival and mounting process. We recommend printing your poster before traveling, but local options are available.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <ClipboardList className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Provided Equipment</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Each presenter will be provided a 120cm (W) × 90cm (H) display board. Heavy-duty velcro strips and push pins will be available at the registration desk.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Info className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Setup Times</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Posters must be mounted between 08:00 and 09:00 on the day of your assigned session. Posters left after 18:00 will be discarded.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Print Shops */}
          <div className="w-full md:w-80 shrink-0 bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <Printer className="text-gold" size={20} />
              <h3 className="text-lg font-bold text-white">Nearby Print Shops</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl p-4">
                <h4 className="font-bold text-white text-sm mb-1">Printo Hosur Road</h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <MapPin size={12} />
                  <span>1.2 km from venue</span>
                </div>
                <div className="text-xs text-slate-500">Same-day A0 printing available. Open 9 AM - 8 PM.</div>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-4">
                <h4 className="font-bold text-white text-sm mb-1">Koramangala Print Center</h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <MapPin size={12} />
                  <span>3.5 km from venue</span>
                </div>
                <div className="text-xs text-slate-500">24hr turnaround. Professional plotting services.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
