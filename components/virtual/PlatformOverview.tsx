"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LogIn, CalendarDays, PlaySquare, MessageCircleQuestion, Image as ImageIcon, Users } from 'lucide-react';

export default function PlatformOverview() {
  const steps = [
    { icon: <LogIn size={20} />, title: 'Secure Login', desc: 'Use your registered email to access the portal.' },
    { icon: <CalendarDays size={20} />, title: 'Navigate Schedule', desc: 'Browse the interactive timeline in your local timezone.' },
    { icon: <PlaySquare size={20} />, title: 'Join Live Streams', desc: 'Enter virtual halls for keynotes and oral presentations.' },
    { icon: <MessageCircleQuestion size={20} />, title: 'Ask Questions', desc: 'Use the integrated Q&A widget to interact with speakers.' },
    { icon: <ImageIcon size={20} />, title: 'Browse Posters', desc: 'Explore high-res PDFs in the Virtual Poster Gallery.' },
    { icon: <Users size={20} />, title: 'Chat & Network', desc: 'Connect with other virtual attendees in the lobby.' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24">
      <div className="bg-navy rounded-3xl p-8 md:p-12 shadow-md text-white relative overflow-hidden">
        
        <div className="text-center relative z-10 mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-4">How the Platform Works</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our custom virtual conference portal is designed for seamless academic engagement. Here is your journey:
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="w-10 h-10 bg-gold text-navy rounded-xl flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{idx + 1}. {step.title}</h4>
              <p className="text-sm text-white/70 leading-relaxed font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Access Code Note */}
        <div className="mt-12 text-center relative z-10 border-t border-white/10 pt-8">
          <p className="text-sm text-gold font-bold">
            Portal access credentials will be emailed to registered virtual attendees 48 hours before the conference begins.
          </p>
        </div>

      </div>
    </div>
  );
}
