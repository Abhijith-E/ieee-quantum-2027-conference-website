"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, GraduationCap, Mic, MonitorPlay, CheckCircle2, Download, Phone, Mail, Clock, Send } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  mediaOutlet: z.string().min(2, "Media outlet is required"),
  mediaType: z.string().min(1, "Please select a media type"),
  portfolioUrl: z.string().url("Please enter a valid URL"),
  linkedInUrl: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal('')),
  reason: z.string().min(10, "Please provide a brief reason for coverage"),
  sessionsOfInterest: z.array(z.string()).min(1, "Please select at least one session type")
});

type FormData = z.infer<typeof formSchema>;

const APPLY_CARDS = [
  { title: "Science Journalists", icon: Newspaper, desc: "Writers for recognized scientific publications, tech news outlets, and major newspapers." },
  { title: "University Communications", icon: GraduationCap, desc: "Official PR representatives covering their institution's faculty presentations." },
  { title: "Podcast Hosts", icon: Mic, desc: "Hosts of established technology, physics, or science-focused audio programs." },
  { title: "Science YouTubers", icon: MonitorPlay, desc: "Creators with established followings focused on STEM education and research." },
];

const ACCREDITATION_BENEFITS = [
  "Complimentary full-access conference registration",
  "Exclusive access to the dedicated Press & Media Room",
  "Priority booking for 30-minute speaker interview slots (limited availability)",
  "Access to high-resolution official conference photography",
  "Advance embargoed copy of proceedings highlights and major announcements",
  "High-speed dedicated conference Wi-Fi and desk space"
];

const TRACK_OPTIONS = [
  "Quantum Computing Algorithms",
  "Quantum Hardware & Architecture",
  "Quantum Communication & QKD",
  "Quantum Sensing & Metrology",
  "Quantum Machine Learning",
  "Post-Quantum Cryptography"
];

export default function PressContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sessionsOfInterest: []
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call to Supabase and Resend
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Press Application Submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 space-y-24">
      
      {/* Who Can Apply */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Who Can Apply?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We welcome established science communicators to help share quantum breakthroughs with the public.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {APPLY_CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 mb-4 flex-1">{card.desc}</p>
                <div className="bg-slate-50 text-[10px] uppercase tracking-widest font-bold text-slate-400 p-2 rounded border border-slate-100 text-center mt-auto">
                  Subject to editorial review
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Grid Layout for Benefits, Kit, and Contact */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Benefits List */}
        <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-200">
          <h2 className="text-2xl font-bold text-navy mb-6">What Accreditation Provides</h2>
          <ul className="space-y-4">
            {ACCREDITATION_BENEFITS.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700 font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar: Media Kit & Contact */}
        <div className="space-y-8">
          
          {/* Media Kit */}
          <div className="border-2 border-[#D4AF37] rounded-3xl p-8 bg-gradient-to-br from-[#FDF9EC] to-white relative overflow-hidden group">
            <div className="absolute -right-8 -top-8 text-gold/10 transform rotate-12 group-hover:scale-110 transition-transform">
              <Download size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-navy mb-3">Official Media Kit</h3>
              <p className="text-sm text-slate-600 mb-6">
                Contains the conference fact sheet, logo pack (SVG/PNG), high-res speaker headshots, and venue b-roll.
              </p>
              <button 
                onClick={() => alert("Downloading Media Kit from Supabase Storage...")}
                className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-3 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Download size={18} /> Download ZIP (18 MB)
              </button>
            </div>
          </div>

          {/* Press Contact */}
          <div className="bg-navy rounded-3xl p-8 text-white shadow-lg">
            <h3 className="text-lg font-bold mb-4">Press Office Contact</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail size={14} />
                </div>
                press@icqst.in
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={14} />
                </div>
                +91 80 1234 5678
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20">
              <Clock size={14} /> Expected response: within 24 hours
            </div>
          </div>

        </div>
      </section>

      {/* Application Form */}
      <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm max-w-4xl mx-auto relative overflow-hidden">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-navy mb-4">Accreditation Application</h2>
          <p className="text-slate-600">Please submit your credentials below. Applications close October 15, 2027.</p>
        </div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-10 text-center"
          >
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">Application Received!</h3>
            <p className="text-emerald-700">
              Thank you for your interest in covering IEEE ICQST 2027. Our press team will review your credentials and contact you within 3 business days. A confirmation email has been sent to your inbox.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name *</label>
                <input 
                  {...register("fullName")}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:outline-none focus:ring-4 transition-all`}
                  placeholder="Jane Doe"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Media Outlet */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Media Outlet / Channel *</label>
                <input 
                  {...register("mediaOutlet")}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.mediaOutlet ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:outline-none focus:ring-4 transition-all`}
                  placeholder="Quantum Weekly"
                />
                {errors.mediaOutlet && <p className="text-red-500 text-xs mt-1">{errors.mediaOutlet.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Media Type */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Media Type *</label>
                <select 
                  {...register("mediaType")}
                  className={`w-full px-4 py-3 rounded-xl border bg-white ${errors.mediaType ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:outline-none focus:ring-4 transition-all`}
                >
                  <option value="">Select type...</option>
                  <option value="Print">Print Publication</option>
                  <option value="Online">Online News Outlet</option>
                  <option value="Podcast">Podcast/Radio</option>
                  <option value="Video">YouTube/Video Creator</option>
                  <option value="University">University PR</option>
                </select>
                {errors.mediaType && <p className="text-red-500 text-xs mt-1">{errors.mediaType.message}</p>}
              </div>

              {/* Portfolio URL */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Portfolio / Publication URL *</label>
                <input 
                  {...register("portfolioUrl")}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.portfolioUrl ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:outline-none focus:ring-4 transition-all`}
                  placeholder="https://..."
                />
                {errors.portfolioUrl && <p className="text-red-500 text-xs mt-1">{errors.portfolioUrl.message}</p>}
              </div>
            </div>

            {/* LinkedIn (Optional) */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">LinkedIn / Social Profile (Optional)</label>
              <input 
                {...register("linkedInUrl")}
                className={`w-full px-4 py-3 rounded-xl border ${errors.linkedInUrl ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:outline-none focus:ring-4 transition-all`}
                placeholder="https://linkedin.com/in/..."
              />
              {errors.linkedInUrl && <p className="text-red-500 text-xs mt-1">{errors.linkedInUrl.message}</p>}
            </div>

            {/* Reason */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Reason for Coverage *</label>
              <textarea 
                {...register("reason")}
                rows={4}
                className={`w-full px-4 py-3 rounded-xl border resize-none ${errors.reason ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:outline-none focus:ring-4 transition-all`}
                placeholder="Briefly describe what you plan to cover at the conference..."
              />
              {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason.message}</p>}
            </div>

            {/* Sessions of Interest (Multi-Checkbox) */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700">Sessions of Particular Interest *</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                {TRACK_OPTIONS.map((track) => (
                  <label key={track} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      value={track}
                      {...register("sessionsOfInterest")}
                      className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-sm text-slate-700 group-hover:text-navy transition-colors">{track}</span>
                  </label>
                ))}
              </div>
              {errors.sessionsOfInterest && <p className="text-red-500 text-xs mt-1">{errors.sessionsOfInterest.message}</p>}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-navy hover:bg-navy-light text-white font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting Application...
                </div>
              ) : (
                <>Submit Accreditation Request <Send size={18} /></>
              )}
            </button>
            <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
              Data is securely processed. By submitting, you agree to our <a href="/ethics" className="text-blue-600 hover:underline">Code of Conduct</a>.
            </p>
          </form>
        )}
      </section>

    </div>
  );
}
