import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function AccommodationMap() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24">
      
      {/* Deadline Note */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-center gap-4 text-amber-900 shadow-sm">
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
          <AlertCircle size={24} className="text-amber-600" />
        </div>
        <div>
          <h4 className="font-bold mb-1">Important Deadline</h4>
          <p className="text-sm font-medium">
            University accommodation booking closes on <strong>September 15, 2027</strong>. Hotel availability is highly limited during the conference period due to concurrent city events. Please book early.
          </p>
        </div>
      </div>

      {/* Map Embed */}
      <div className="w-full h-[400px] bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.349079633342!2d77.59600607567798!3d12.885233687421316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae153e390c5673%3A0xc6c429cbcd8f5e7f!2sCHRIST%20(Deemed%20to%20be%20University)%2C%20Bannerghatta%20Road%20Campus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
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
