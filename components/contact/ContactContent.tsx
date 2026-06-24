"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Copy, MapPin, Navigation, Briefcase, MessageCircle, MonitorPlay, GraduationCap } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { QRCodeSVG } from 'qrcode.react';

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = z.infer<typeof formSchema>;

const COMMITTEE_CONTACTS = [
  { role: "General Inquiries", name: "Dr. Ananya Sharma", title: "General Chair", email: "chair@cqtcs.in", initials: "AS" },
  { role: "Paper Submission", name: "Prof. David Chen", title: "Program Chair", email: "tpc@cqtcs.in", initials: "DC" },
  { role: "Registration", name: "Sarah Williams", title: "Registration Chair", email: "register@cqtcs.in", initials: "SW" },
  { role: "Visa & International", name: "Priya Kumar", title: "Visa Support Officer", email: "visa@cqtcs.in", initials: "PK" },
  { role: "Sponsorship", name: "Michael Chang", title: "Sponsorship Chair", email: "sponsor@cqtcs.in", initials: "MC" },
  { role: "Press & Media", name: "Emma Thompson", title: "Media Relations Officer", email: "press@cqtcs.in", initials: "ET" },
  { role: "Technical Support", name: "Rahul Dev", title: "Web Admin", email: "admin@cqtcs.in", initials: "RD" },
];

export default function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Contact Form Submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    // Simple native alert or toast could go here
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
      
      {/* Column 1: Contact Form */}
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold text-navy mb-6">Send a Message</h2>
        
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Message sent!</h3>
              <p className="text-emerald-700 text-sm">
                Thank you for reaching out. A member of our committee will respond to you within 48 hours.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-emerald-600 font-bold hover:underline text-sm"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form 
              key="form"
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-5 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm"
            >
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Full Name *</label>
                <input 
                  {...register("fullName")}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.fullName ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:outline-none focus:ring-4 transition-all bg-slate-50`}
                />
                {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Email Address *</label>
                <input 
                  type="email"
                  {...register("email")}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:outline-none focus:ring-4 transition-all bg-slate-50`}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Subject *</label>
                <select 
                  {...register("subject")}
                  className={`w-full px-4 py-2.5 rounded-xl border ${errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:outline-none focus:ring-4 transition-all bg-slate-50`}
                >
                  <option value="">Select a topic...</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Paper Submission">Paper Submission</option>
                  <option value="Registration">Registration</option>
                  <option value="Visa Support">Visa Support</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Press & Media">Press & Media</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Message *</label>
                <textarea 
                  {...register("message")}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border resize-none ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'} focus:outline-none focus:ring-4 transition-all bg-slate-50`}
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-2 rounded border border-slate-100">
                <div className="w-4 h-4 rounded-full border-2 border-slate-300 border-t-blue-500 animate-spin"></div>
                Protected by reCAPTCHA v3
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Column 2: Committee Contacts */}
      <div className="lg:col-span-1">
        <h2 className="text-2xl font-bold text-navy mb-6">Direct Contacts</h2>
        <div className="space-y-4 mb-8">
          {COMMITTEE_CONTACTS.map((contact, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 hover:border-blue-300 transition-colors group shadow-sm hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0">
                {contact.initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-0.5">{contact.role}</p>
                <p className="font-bold text-navy text-sm truncate">{contact.name}</p>
                <a href={`mailto:${contact.email}`} className="text-blue-600 hover:text-blue-800 text-xs truncate flex items-center gap-1 group/link">
                  {contact.email}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(contact.email)}
                className="p-2 text-slate-400 hover:text-navy hover:bg-slate-100 rounded-lg transition-colors"
                title="Copy to clipboard"
              >
                <Copy size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Address Block */}
        <div className="bg-navy rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/10 rounded-full">
              <MapPin className="text-gold" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Conference Venue</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                CQTCS Secretariat<br/>
                CHRIST (Deemed to be University)<br/>
                Hosur Road, Bhavani Nagar<br/>
                Bengaluru, Karnataka 560029<br/>
                India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Column 3: Find Us */}
      <div className="lg:col-span-1 flex flex-col">
        <h2 className="text-2xl font-bold text-navy mb-6">Find Us</h2>
        
        {/* Google Maps Embed */}
        <div className="w-full h-[300px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner mb-4 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6656717462744!2d77.60424567507567!3d12.929210287381983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b1fb428453%3A0xc6822fcb9d79450a!2sCHRIST%20(Deemed%20to%20be%20University)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="CHRIST University Map"
          ></iframe>
        </div>
        
        <a 
          href="https://goo.gl/maps/xyz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:underline mb-8"
        >
          <Navigation size={16} /> Get Directions
        </a>

        {/* Social Links & QR */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-auto">
          <div>
            <h3 className="font-bold text-navy mb-4">Connect with us</h3>
            <div className="flex gap-3">
              <motion.a href="#" whileHover={{ scale: 1.2, color: '#D4AF37' }} className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center transition-colors">
                <Briefcase size={18} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2, color: '#D4AF37' }} className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center transition-colors">
                <MessageCircle size={18} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2, color: '#D4AF37' }} className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center transition-colors">
                <MonitorPlay size={18} />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2, color: '#D4AF37' }} className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center transition-colors">
                <GraduationCap size={18} />
              </motion.a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-200 mb-2">
              <QRCodeSVG value="https://cqtcs.in" size={80} level="M" fgColor="#0F172A" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider">SCAN TO SHARE</span>
          </div>
        </div>

      </div>

    </div>
  );
}
