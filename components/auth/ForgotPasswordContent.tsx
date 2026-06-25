"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    setIsSubmitting(true);
    // Simulate Supabase supabase.auth.resetPasswordForEmail()
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmittedEmail(data.email);
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-6 pt-32 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-navy -z-10 rounded-b-[40%] shadow-xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgb(0,0,0,0.1)] border border-slate-100 relative"
      >
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div 
              key="forgot-form"
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col"
            >
              <div className="mb-6">
                <Link href="/login" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-navy transition-colors mb-6 group">
                  <ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to login
                </Link>
                <h2 className="text-3xl font-extrabold text-navy mb-2">Reset Password</h2>
                <p className="text-slate-500 text-sm">Enter your email address and we'll send you a link to reset your password.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Mail size={18} />
                    </div>
                    <input 
                      type="email"
                      {...register("email")}
                      className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50`}
                      placeholder="name@university.edu"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send size={18} /> Send Reset Link
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-6"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 relative">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2.5"
                    className="text-emerald-500"
                    d="M16 12l2 2 4-4" 
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-3">Check your inbox</h2>
              <p className="text-slate-600 text-center text-sm mb-6 leading-relaxed">
                We've sent a password reset link to <br/><span className="font-bold text-navy">{submittedEmail}</span>.
              </p>
              <div className="w-full bg-amber-50 border border-amber-100 rounded-lg p-3 text-center mb-8">
                <p className="text-amber-800 text-xs font-bold uppercase tracking-wider">Link expires in 1 hour</p>
              </div>
              <Link href="/login" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                &larr; Return to login
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
