"use client";

import React from 'react';
import { UserPlus, LayoutList, CreditCard, MailCheck, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RegistrationSteps() {
  const steps = [
    { icon: <UserPlus size={24} />, title: 'Create Account' },
    { icon: <LayoutList size={24} />, title: 'Select Category' },
    { icon: <CreditCard size={24} />, title: 'Pay Online' },
    { icon: <MailCheck size={24} />, title: 'Get Confirmation' },
    { icon: <Download size={24} />, title: 'Download Receipt' }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 mb-24">
      <h2 className="text-3xl font-extrabold text-navy mb-12 text-center">How to Register</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between relative">
        
        {/* Background Line (Desktop only) */}
        <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-slate-200 z-0" />
        
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex flex-col items-center relative z-10 w-full md:w-auto mb-8 md:mb-0 group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 text-navy flex items-center justify-center mb-4 group-hover:border-gold group-hover:text-gold transition-colors shadow-sm">
              {step.icon}
            </div>
            <div className="text-center">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Step {idx + 1}</span>
              <h3 className="font-bold text-navy text-sm md:text-base">{step.title}</h3>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}
