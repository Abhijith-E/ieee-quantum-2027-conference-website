import React from 'react';
import { MapPin } from 'lucide-react';

export default function ReachMap() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-navy mb-2">City Map Overview</h2>
          <p className="text-slate-600">Navigate between major transit hubs and the conference venue.</p>
        </div>
        
        {/* Map Legend */}
        <div className="flex flex-wrap gap-4 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-sm font-medium">
          <div className="flex items-center gap-1.5 text-navy-deep">
            <MapPin size={16} className="text-gold" fill="currentColor" /> Venue
          </div>
          <div className="flex items-center gap-1.5 text-navy-deep">
            <MapPin size={16} className="text-blue-500" fill="currentColor" /> Airport (BLR)
          </div>
          <div className="flex items-center gap-1.5 text-navy-deep">
            <MapPin size={16} className="text-emerald-500" fill="currentColor" /> Railway Station (SBC)
          </div>
        </div>
      </div>

      {/* Map Embed Container */}
      <div className="w-full h-[500px] bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124436.43632360706!2d77.51860012278453!3d13.061730032906804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153e390c5673%3A0xc6c429cbcd8f5e7f!2sCHRIST%20(Deemed%20to%20be%20University)%2C%20Bannerghatta%20Road%20Campus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </div>
    </div>
  );
}
