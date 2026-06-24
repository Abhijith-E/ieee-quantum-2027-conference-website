import React from 'react';
import { CloudSun, ThermometerSun, Droplets, CloudRain } from 'lucide-react';

export default function WeatherWidget() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24">
      <div className="bg-navy rounded-3xl p-8 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10 w-full md:w-1/3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <CloudSun size={48} className="text-gold drop-shadow-md" />
            <div className="text-5xl font-extrabold text-white">24<span className="text-3xl text-white/50">°C</span></div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">February Weather</h3>
          <p className="text-white/70 font-medium text-sm">Average conditions during the conference</p>
        </div>

        <div className="relative z-10 w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
            <ThermometerSun size={24} className="text-gold mb-2" />
            <div className="text-2xl font-bold text-white mb-1">20–28°C</div>
            <div className="text-xs text-white/60 uppercase font-bold tracking-wider">Temperature Range</div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
            <Droplets size={24} className="text-blue-400 mb-2" />
            <div className="text-2xl font-bold text-white mb-1">55%</div>
            <div className="text-xs text-white/60 uppercase font-bold tracking-wider">Avg Humidity</div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
            <CloudRain size={24} className="text-emerald-400 mb-2" />
            <div className="text-2xl font-bold text-white mb-1">Low</div>
            <div className="text-xs text-white/60 uppercase font-bold tracking-wider">Rain Probability</div>
          </div>
        </div>

      </div>

      <div className="mt-4 text-center">
        <p className="text-sm font-medium text-slate-500">
          <span className="text-gold-dark font-bold">Packing Tip:</span> Pack light layers — Bengaluru weather is highly pleasant and cool during February.
        </p>
      </div>
    </div>
  );
}
