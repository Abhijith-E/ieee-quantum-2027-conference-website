"use client";

import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Accessibility, Baby, UtensilsCrossed, Ear, Coffee, ChevronRight, CheckCircle2, Heart, Users, Globe2, Sparkles, HandHeart, VolumeX } from 'lucide-react';
import Image from 'next/image';

const FACILITIES = [
  { icon: Accessibility, label: "Wheelchair Access", desc: "Ramps and elevators campus-wide." },
  { icon: Users, label: "Gender-Neutral Restrooms", desc: "Available on every floor of the venue." },
  { icon: Heart, label: "Prayer/Meditation Room", desc: "Quiet spaces for spiritual needs." },
  { icon: Baby, label: "Lactation Room", desc: "Private, comfortable spaces for nursing." },
  { icon: UtensilsCrossed, label: "Dietary Accommodations", desc: "Halal, Jain, Vegan, and Gluten-free options." },
  { icon: Ear, label: "Sign Language", desc: "ASL/ISL interpreters available upon request." },
  { icon: VolumeX, label: "Quiet Room", desc: "Sensory-friendly space for decompression." },
];

const COMMUNITY_GROUPS = [
  { name: "Women in Quantum", desc: "Fostering female leadership in quantum technologies." },
  { name: "Quantum for Underrepresented Communities", desc: "Bridging the gap for minorities in STEM." },
  { name: "Student Quantum Network", desc: "Global community for aspiring quantum engineers." },
];

const COMMITTEE = [
  { name: "Dr. Maya Patel", role: "DEI Chair", org: "University of Toronto", initials: "MP" },
  { name: "Prof. Kwame Osei", role: "Accessibility Lead", org: "MIT", initials: "KO" },
  { name: "Dr. Sofia Garcia", role: "Travel Grants Coord.", org: "CERN", initials: "SG" },
];

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeProgress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function DeiContent() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 space-y-24">
      
      {/* Chairs Statement */}
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/3 flex gap-4 justify-center">
          <div className="w-40 h-40 rounded-2xl bg-slate-200 border-4 border-white shadow-xl overflow-hidden relative rotate-[-6deg]">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold bg-slate-300">Chair 1</div>
          </div>
          <div className="w-40 h-40 rounded-2xl bg-slate-200 border-4 border-white shadow-xl overflow-hidden relative rotate-[6deg] mt-8 -ml-8">
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold bg-slate-300">Chair 2</div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Commitment</h2>
          <div className="prose prose-slate text-slate-600">
            <p className="text-lg leading-relaxed">
              We believe that the most profound breakthroughs in quantum computing and computer science happen when diverse minds collaborate. IEEE ICQST 2027 is actively committed to removing barriers to participation and amplifying voices from all backgrounds.
            </p>
            <p>
              Whether it is through travel grants, inclusive venue design, or strictly enforced anti-harassment policies, our goal is to ensure that everyone feels safe, welcome, and valued.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section>
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -right-12 -top-12 text-emerald-100 transform rotate-12">
            <HandHeart size={200} />
          </div>
          <div className="relative z-10">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 border border-emerald-200">
              Funding Available
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Travel & Participation Grants</h2>
            <p className="text-slate-600 mb-8 max-w-2xl text-lg">
              To support students and early-career researchers from underrepresented groups, ICQST offers financial assistance covering conference registration, accommodation, and partial travel stipends.
            </p>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-emerald-100 mb-8 max-w-2xl">
              <h3 className="font-bold text-emerald-900 mb-3">Eligibility Criteria:</h3>
              <ul className="space-y-3">
                {['Must be an accepted author or student attendee', 'Belong to an underrepresented demographic in STEM', 'Submit a brief statement of purpose', 'Endorsement letter from an academic advisor'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-gold-dark hover:bg-gold text-navy font-bold px-8 py-4 rounded-xl shadow-md transition-colors flex items-center gap-2">
                Apply for Travel Grant <ChevronRight size={20} />
              </button>
              <div className="text-sm font-medium text-emerald-800 bg-emerald-100 px-4 py-2 rounded-lg">
                Deadline: September 1, 2027
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusive Venue Facilities */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Inclusive Venue Facilities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">The CHRIST University campus has been audited to ensure maximum accessibility and comfort for all attendees.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {FACILITIES.map((facility, idx) => {
            const Icon = facility.icon;
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-rose-200 transition-all group"
              >
                <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{facility.label}</h3>
                <p className="text-xs text-slate-500">{facility.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Diversity in Program Stats */}
      <section className="bg-navy rounded-3xl p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_50%)]"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-black text-gold mb-2 drop-shadow-md">
              <AnimatedCounter end={45} suffix="%" />
            </div>
            <div className="font-medium text-slate-300 uppercase tracking-widest text-sm">Female Speakers</div>
          </div>
          <div>
            <div className="text-5xl font-black text-emerald-400 mb-2 drop-shadow-md">
              <AnimatedCounter end={30} suffix="%" />
            </div>
            <div className="font-medium text-slate-300 uppercase tracking-widest text-sm">Early-Career Researchers</div>
          </div>
          <div>
            <div className="text-5xl font-black text-rose-400 mb-2 drop-shadow-md">
              <AnimatedCounter end={52} />
            </div>
            <div className="font-medium text-slate-300 uppercase tracking-widest text-sm">Countries Represented</div>
          </div>
        </div>
      </section>

      {/* Community Groups */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="text-gold" size={28} />
          <h2 className="text-3xl font-bold text-slate-800">Community Partners</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMUNITY_GROUPS.map((group, idx) => (
            <div key={idx} className="bg-white border-2 border-slate-100 rounded-2xl p-8 hover:border-gold/50 transition-colors">
              <h3 className="text-lg font-bold text-navy mb-3">{group.name}</h3>
              <p className="text-slate-600 text-sm mb-6">{group.desc}</p>
              <button className="text-gold-dark hover:text-gold font-bold text-sm flex items-center gap-1 transition-colors">
                Learn More <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DEI Committee */}
      <section>
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">DEI Committee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {COMMITTEE.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-slate-200 border-4 border-slate-100 shadow-md group-hover:border-rose-300 transition-colors relative flex items-center justify-center">
                <span className="text-2xl font-bold text-slate-400">{member.initials}</span>
              </div>
              <h3 className="text-lg font-bold text-navy">{member.name}</h3>
              <p className="text-sm text-rose-600 font-medium mb-1">{member.role}</p>
              <p className="text-xs text-slate-500">{member.org}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
