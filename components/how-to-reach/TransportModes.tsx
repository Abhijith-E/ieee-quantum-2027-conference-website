"use client";

import React from 'react';
import { Plane, Train, Car, Map, Clock, IndianRupee, Info, ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TransportModes() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* 1. By Air */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-navy/5 text-navy rounded-2xl flex items-center justify-center shrink-0">
              <Plane size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">By Air</h3>
              <p className="text-slate-500 font-medium">Kempegowda International Airport (BLR)</p>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <MapPin size={16} className="text-gold" /> 35 km to Venue
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <Clock size={16} className="text-gold" /> 45–75 min
            </div>
          </div>

          <h4 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">Transfer Options</h4>
          <div className="space-y-3 flex-1">
            {[
              { mode: 'Ola / Uber', price: '₹600–800', time: '45–70 min', note: 'Available Anytime' },
              { mode: 'BMTC Vayu Vajra Bus', price: '₹230–270', time: '60–90 min', note: 'Scheduled routes (KIA-14)' },
              { mode: 'Pre-Paid Airport Taxi', price: '₹700–900', time: '45–70 min', note: 'From Terminal Stand' },
              { mode: 'Namma Metro (Phase 2)', price: 'TBD', time: 'TBD', note: 'Under Construction' },
            ].map((opt, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start justify-between bg-white border border-slate-100 p-3 rounded-lg hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="font-bold text-navy text-sm mb-0.5">{opt.mode}</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Info size={12} /> {opt.note}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gold-dark flex items-center justify-end gap-1 text-sm">
                    {opt.price}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{opt.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. By Train */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-navy/5 text-navy rounded-2xl flex items-center justify-center shrink-0">
              <Train size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">By Train</h3>
              <p className="text-slate-500 font-medium">Major Railway Stations</p>
            </div>
          </div>

          <div className="space-y-4 flex-1">
            {[
              { name: 'Bengaluru City Junction (SBC)', dist: '12 km', time: '25–35 min' },
              { name: 'Bengaluru Cantonment (BNC)', dist: '14 km', time: '30–40 min' },
              { name: 'Yeshwanthpur Junction (YPR)', dist: '16 km', time: '35–45 min' },
            ].map((st, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <div className="mb-2 sm:mb-0">
                  <div className="font-bold text-navy text-sm">{st.name}</div>
                  <div className="text-xs font-medium text-slate-500 mt-1">
                    {st.dist} · {st.time} via Taxi/Auto
                  </div>
                </div>
                <button className="text-xs font-bold bg-slate-100 text-slate-700 hover:bg-gold hover:text-navy px-3 py-1.5 rounded-md transition-colors whitespace-nowrap">
                  Book Ride &rarr;
                </button>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-xl p-4 mt-6 border border-amber-200 flex items-start gap-3 text-sm text-amber-900">
            <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <p><strong>Pro Tip:</strong> Use Ola, Uber, or Namma Yatri apps for the most reliable and metered auto-rickshaw/taxi fares from railway stations.</p>
          </div>
        </div>

        {/* 3. By Road */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-navy/5 text-navy rounded-2xl flex items-center justify-center shrink-0">
              <Car size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">By Road</h3>
              <p className="text-slate-500 font-medium">Inter-city Driving & Buses</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {[
              { from: 'Chennai', route: 'NH-44', dist: '340 km', time: '~5–6 hrs' },
              { from: 'Hyderabad', route: 'NH-44', dist: '570 km', time: '~9–10 hrs' },
              { from: 'Mysuru', route: 'NH-275', dist: '145 km', time: '~3 hrs' },
            ].map((route, i) => (
              <div key={i} className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500 font-medium">From {route.from}</div>
                  <div className="font-bold text-navy">{route.route}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-slate-700">{route.dist}</div>
                  <div className="text-xs text-slate-400 font-medium">{route.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto border-t border-slate-100 pt-5">
            <h4 className="text-sm font-bold text-navy mb-2">Inter-City Bus Services</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              KSRTC and private operators provide premium AC sleeper/seater buses to Bengaluru. Alight at <strong>Madiwala</strong> or <strong>Shantinagar Bus Station</strong> (both within 5 km of the venue).
            </p>
            <a href="#" className="inline-flex items-center gap-1.5 text-gold-dark font-bold text-sm hover:underline">
              View KSRTC Schedules <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* 4. Campus Navigation */}
        <div className="bg-navy rounded-3xl p-8 shadow-md flex flex-col h-full text-white relative overflow-hidden group">
          {/* Decorative background vectors */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <Map size={28} className="text-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Campus Navigation</h3>
                <p className="text-white/70 font-medium">Internal Routing</p>
              </div>
            </div>

            {/* CSS Animated Route Map Representation */}
            <div className="bg-navy-deep/50 rounded-2xl p-6 mb-6 border border-white/10 relative">
              <div className="flex items-center justify-between mb-8 relative">
                
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-white/20 -translate-y-1/2 z-0 overflow-hidden">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-gold to-transparent"
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white text-navy flex items-center justify-center font-bold text-sm shadow-lg">1</div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-white/70">Main Gate</div>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center font-bold text-sm shadow-lg">2</div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-white/70">Parking</div>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white text-navy flex items-center justify-center font-bold text-sm shadow-lg">3</div>
                  <div className="text-[10px] uppercase tracking-wider font-bold text-white/70">Reg. Desk</div>
                </div>
              </div>
            </div>

            <div className="mt-auto bg-white/10 rounded-xl p-4 border border-white/10 flex items-start gap-3 text-sm">
              <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
              <p className="text-white/90 leading-relaxed">
                <strong>Shuttle Service:</strong> Dedicated shuttles are available from designated pickup points (including nearby partner hotels) during conference days. Check the <a href="/program" className="text-gold underline">Program Schedule</a> for timings.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
