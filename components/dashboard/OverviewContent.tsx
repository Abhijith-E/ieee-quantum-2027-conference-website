"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bookmark, 
  FileText, 
  CheckCircle2, 
  Calendar,
  ChevronRight,
  Upload,
  Download,
  Mail,
  Eye,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function OverviewContent() {
  const [greeting, setGreeting] = useState("Good day");
  
  // Set time-based greeting
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  const stats = [
    { label: "Sessions Bookmarked", value: "3", icon: Bookmark, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Paper Under Review", value: "1", icon: FileText, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Registration", value: "Confirmed", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Days Until Conference", value: "24", icon: Calendar, color: "text-purple-500", bg: "bg-purple-50" },
  ];

  const deadlines = [
    { title: "Camera-Ready Submission", date: "Sep 15, 2027", status: "upcoming", daysLeft: 12 },
    { title: "Presenter Registration", date: "Oct 1, 2027", status: "pending", daysLeft: 28 },
    { title: "Conference Start", date: "Dec 12, 2027", status: "pending", daysLeft: 100 },
  ];

  const recommendations = [
    { title: "Quantum Error Correction in Near-Term Devices", track: "Quantum Computing", time: "Day 1 • 10:00 AM" },
    { title: "Machine Learning for Quantum Sensor Calibration", track: "QML", time: "Day 2 • 2:00 PM" },
    { title: "Scalable Trapped-Ion Architectures", track: "Hardware", time: "Day 3 • 9:30 AM" },
  ];

  const actions = [
    { title: "Submit Paper", icon: Upload, href: "/dashboard/submissions" },
    { title: "Download Receipt", icon: Download, href: "/dashboard/registration" },
    { title: "Request Visa Letter", icon: Mail, href: "/visa" },
    { title: "View My Schedule", icon: Eye, href: "/dashboard/schedule" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-navy tracking-tight">{greeting}, Jane!</h1>
        <p className="text-slate-500 mt-1">Here is what is happening with your conference profile today.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color} shrink-0`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-navy leading-none mb-1">{stat.value}</p>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2/3 width) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* AI Recommendations */}
          <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Sparkles size={120} />
            </div>
            
            <div className="flex items-center gap-2 mb-6 relative z-10">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Sparkles size={16} />
              </div>
              <h2 className="text-lg font-bold text-navy">Recommended Sessions for You</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
              {recommendations.map((rec, i) => (
                <div key={i} className="border border-slate-100 bg-slate-50 rounded-2xl p-4 hover:border-gold transition-colors group cursor-pointer">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 mb-2">{rec.track}</div>
                  <h3 className="font-bold text-navy text-sm mb-3 leading-snug group-hover:text-gold-dark transition-colors line-clamp-2">{rec.title}</h3>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-500 font-medium">{rec.time}</span>
                    <ChevronRight size={14} className="text-slate-400 group-hover:text-gold" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <h2 className="text-lg font-bold text-navy mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {actions.map((action, i) => (
                <Link 
                  href={action.href} 
                  key={i}
                  className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 hover:border-navy hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 group-hover:bg-navy group-hover:text-white flex items-center justify-center transition-colors">
                    <action.icon size={18} />
                  </div>
                  <span className="text-sm font-semibold text-navy">{action.title}</span>
                </Link>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column (1/3 width) - Deadlines */}
        <div className="lg:col-span-1">
          <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 h-full">
            <h2 className="text-lg font-bold text-navy mb-6">Upcoming Deadlines</h2>
            
            <div className="relative border-l-2 border-slate-100 ml-3 space-y-8 pb-4">
              {deadlines.map((item, i) => (
                <div key={i} className="relative pl-6">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white ${i === 0 ? 'bg-red-500' : 'bg-gold'}`}></div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-navy">{item.title}</span>
                    <span className="text-xs text-slate-500 font-medium">{item.date}</span>
                    
                    {i === 0 ? (
                      <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider self-start">
                        {item.daysLeft} days left
                      </div>
                    ) : (
                      <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider self-start">
                        In {item.daysLeft} days
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 py-2.5 text-sm font-bold text-navy border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              View All Dates
            </button>
          </section>
        </div>

      </div>
    </div>
  );
}
