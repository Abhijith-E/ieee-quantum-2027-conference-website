"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Target, GitMerge, BarChart2, CheckSquare } from 'lucide-react';

export default function IncludedComponents() {
  const components = [
    {
      icon: <HelpCircle size={24} className="text-navy" />,
      title: 'Research Problem',
      desc: 'Clearly articulate the specific challenge or gap in current knowledge your research addresses.'
    },
    {
      icon: <Target size={24} className="text-navy" />,
      title: 'Objectives',
      desc: 'State the primary goals and specific aims of your proposed work.'
    },
    {
      icon: <GitMerge size={24} className="text-navy" />,
      title: 'Methodology',
      desc: 'Briefly summarize the theoretical framework, algorithms, or experimental setup utilized.'
    },
    {
      icon: <BarChart2 size={24} className="text-navy" />,
      title: 'Expected/Obtained Results',
      desc: 'Highlight key findings, metrics, or performance improvements over existing baselines.'
    },
    {
      icon: <CheckSquare size={24} className="text-navy" />,
      title: 'Conclusion',
      desc: 'Summarize the broader impact and significance of your findings to the quantum community.'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-16">
      <h2 className="text-2xl font-extrabold text-navy mb-6">What to Include</h2>
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="flex flex-col gap-6">
          {components.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm relative">
                <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-gold text-navy-deep text-xs font-black flex items-center justify-center shadow-md">
                  {idx + 1}
                </span>
                {item.icon}
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-bold text-navy mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
