"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Ticket, Camera, Star, Award, Building2, Music } from 'lucide-react';

export default function SocialEventsList() {
  const events = [
    {
      id: 'welcome',
      title: 'Welcome Reception',
      date: 'Day 0 (Feb 14) • 6:30 PM - 8:30 PM',
      venue: 'University Central Atrium',
      dressCode: 'Smart Casual',
      capacity: 'All Attendees',
      type: 'Included',
      icon: <Users className="text-amber-800" size={32} />,
      bg: 'bg-gradient-to-br from-amber-100 to-amber-200 border-amber-300',
      text: 'text-amber-900',
      desc: 'Registration desk opens. Light refreshments, networking, and the official welcome address by the Conference Chair.'
    },
    {
      id: 'banquet',
      title: 'Conference Banquet & Awards Gala',
      date: 'Day 2 (Feb 18) • 7:30 PM - 10:30 PM',
      venue: 'Grand Ballroom, JW Marriott Bengaluru',
      dressCode: 'Formal',
      capacity: 'Ticketed (Pre-booking required)',
      type: 'Premium Event ★★★',
      icon: <Award className="text-gold" size={32} />,
      bg: 'bg-gradient-to-br from-navy to-slate-900 border-slate-700 relative overflow-hidden',
      text: 'text-white',
      desc: 'The highlight of the conference. Features a formal dinner, the Best Paper Awards ceremony, an exclusive cultural performance, and extensive networking. Note: ₹1,500 additional for accompanying guests.',
      special: true
    },
    {
      id: 'tour',
      title: 'Campus Tour & ICQST Lab Visit',
      date: 'Day 3 (Feb 19) • 2:00 PM - 4:00 PM',
      venue: 'Meet at Main Auditorium Foyer',
      dressCode: 'Casual (Comfortable shoes)',
      capacity: 'Max 40 participants',
      type: 'First-come basis',
      icon: <Building2 className="text-stone-700" size={32} />,
      bg: 'bg-[#F9F6F0] border-[#E8E1D5]',
      text: 'text-stone-800',
      desc: 'A guided tour of the beautiful CHRIST University campus, including exclusive access to the newly inaugurated ICQST quantum computing laboratory facilities.'
    },
    {
      id: 'mixer',
      title: 'Industry Networking Mixer',
      date: 'Day 1 (Feb 17) • 6:00 PM - 8:00 PM',
      venue: 'Exhibition Hall A',
      dressCode: 'Business Casual',
      capacity: 'Open to All',
      type: 'Sponsored',
      icon: <Camera className="text-blue-900" size={32} />,
      bg: 'bg-gradient-to-br from-slate-100 to-blue-50 border-blue-200',
      text: 'text-blue-950',
      desc: 'Hosted by our Platinum Sponsors. Features speed networking, interactive sponsor demonstrations, and evening refreshments.'
    },
    {
      id: 'cultural',
      title: 'Cultural Evening — Karnataka Showcase',
      date: 'Day 1 (Feb 17) • 8:30 PM - 10:00 PM',
      venue: 'University Open-Air Theatre',
      dressCode: 'Casual / Traditional',
      capacity: 'Ticketed Add-on',
      type: 'Additional Ticket required',
      icon: <Music className="text-teal-900" size={32} />,
      bg: 'bg-gradient-to-br from-teal-50 to-emerald-100 border-teal-200',
      text: 'text-teal-950',
      desc: 'Experience the rich art, classical music, and local cuisine of Karnataka in this immersive, optional evening showcase.'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-20 -mt-10 relative z-20">
      <div className="flex flex-col gap-8">
        {events.map((evt, idx) => (
          <motion.div 
            key={evt.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`w-full min-h-[280px] rounded-3xl border p-8 md:p-10 shadow-lg flex flex-col md:flex-row gap-8 ${evt.bg}`}
          >
            {evt.special && (
              <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            )}
            
            <div className="flex-1 relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm border border-white/30">
                  {evt.icon}
                </div>
                <div>
                  <div className={`text-xs font-bold uppercase tracking-widest opacity-80 mb-1 ${evt.text}`}>{evt.type}</div>
                  <h2 className={`text-2xl md:text-3xl font-extrabold ${evt.text}`}>{evt.title}</h2>
                </div>
              </div>
              
              <p className={`text-lg font-medium opacity-90 leading-relaxed mb-8 flex-1 ${evt.text}`}>
                {evt.desc}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-auto">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold bg-white/30 backdrop-blur-sm border border-white/20 ${evt.text}`}>
                  <Calendar size={16} /> {evt.date}
                </span>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold bg-white/30 backdrop-blur-sm border border-white/20 ${evt.text}`}>
                  <MapPin size={16} /> {evt.venue}
                </span>
              </div>
            </div>

            <div className={`w-full md:w-64 shrink-0 flex flex-col justify-center gap-4 relative z-10 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 ${evt.text}`}>
              <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-3">
                <span className="text-xs uppercase font-bold opacity-70">Dress Code</span>
                <span className="font-bold text-sm">{evt.dressCode}</span>
              </div>
              <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-3">
                <span className="text-xs uppercase font-bold opacity-70">Capacity</span>
                <span className="font-bold text-sm text-right">{evt.capacity}</span>
              </div>
              
              <button className={`w-full mt-4 py-3 rounded-xl font-bold transition-transform hover:scale-105 active:scale-95 shadow-md flex items-center justify-center gap-2 ${evt.special ? 'bg-gold text-navy hover:bg-gold-dark' : 'bg-white text-current hover:bg-opacity-90'}`}>
                <Ticket size={18} /> Add to Schedule
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
