"use client";

import React from 'react';
import { Bed, Snowflake, Star, Building2, Wifi, Coffee, Shield, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UniversityAccommodation() {
  const options = [
    {
      title: '3 Sharing Non-AC',
      price: '₹140',
      icon: (
        <div className="flex gap-1 items-end">
          <Bed size={20} className="text-slate-400" />
          <Bed size={24} className="text-navy" />
          <Bed size={20} className="text-slate-400" />
        </div>
      ),
      amenities: ['Wi-Fi', 'Meals', '24hr Security', 'Campus Access'],
    },
    {
      title: '2 Sharing Non-AC',
      price: '₹224',
      icon: (
        <div className="flex gap-2 items-end">
          <Bed size={24} className="text-navy" />
          <Bed size={24} className="text-navy" />
        </div>
      ),
      amenities: ['Wi-Fi', 'Meals', '24hr Security', 'Campus Access'],
    },
    {
      title: '2 Sharing AC',
      price: '₹448',
      icon: (
        <div className="flex gap-2 items-end">
          <Snowflake size={24} className="text-blue-500" />
          <Bed size={24} className="text-navy" />
        </div>
      ),
      badge: { text: 'Most Popular', color: 'bg-gold text-navy-deep' },
      amenities: ['AC', 'Wi-Fi', 'Meals', '24hr Security', 'Campus Access'],
    },
    {
      title: 'Single AC',
      price: '₹560',
      icon: (
        <div className="flex gap-2 items-end">
          <Star size={24} className="text-gold" />
          <Bed size={24} className="text-navy" />
        </div>
      ),
      badge: { text: 'Premium', color: 'bg-navy text-white' },
      amenities: ['AC', 'Private Room', 'Wi-Fi', 'Meals', 'Campus Access'],
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24 mt-12">
      
      {/* Header */}
      <div className="border-l-4 border-gold pl-6 mb-12 flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center shrink-0">
          <Building2 className="text-navy" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-navy">Official University Accommodation</h2>
          <p className="text-slate-500 font-medium text-sm">Located inside the CHRIST University Bannerghatta Road Campus.</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {options.map((opt, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8, boxShadow: '0 24px 64px rgba(15,23,42,0.14)' }}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col relative transition-colors group cursor-pointer hover:border-gold"
          >
            {opt.badge && (
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm whitespace-nowrap ${opt.badge.color}`}>
                {opt.badge.text}
              </div>
            )}
            
            <div className="flex items-center justify-between mb-4 mt-2">
              <h3 className="font-bold text-navy">{opt.title}</h3>
              {opt.icon}
            </div>

            <div className="mb-6">
              <div className="text-4xl font-extrabold text-gold tracking-tight">{opt.price}</div>
              <div className="text-[11px] text-slate-400 font-medium uppercase mt-1">per person per day (inclusive of all taxes)</div>
            </div>

            <ul className="space-y-2.5 mb-8 flex-1">
              {opt.amenities.map((amenity, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                  <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  {amenity}
                </li>
              ))}
            </ul>

            <button className="w-full bg-slate-50 hover:bg-gold text-navy font-bold py-3 rounded-xl border border-slate-200 group-hover:border-transparent transition-all shadow-sm">
              Apply for Stay &rarr;
            </button>
          </motion.div>
        ))}
      </div>

      {/* Note Banner */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-xl shadow-sm text-amber-900 text-sm font-medium">
        Accommodation is subject to availability on a first-come, first-served basis. Payment for accommodation is separate from conference registration. <a href="#" className="underline font-bold hover:text-amber-700">Apply via Google Form</a>.
      </div>

    </div>
  );
}
