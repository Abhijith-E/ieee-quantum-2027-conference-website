"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Eye, EyeOff, Key, AlertCircle, Quote } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginData = z.infer<typeof loginSchema>;

// Abstract particles generator
const Particles = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth * 0.5,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.3,
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default function LoginContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    setIsSubmitting(true);
    setErrorMessage("");
    
    // Simulate Supabase supabase.auth.signInWithPassword()
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate a failure for demo purposes if email isn't a specific one
    if (data.email !== "demo@cqtcs.in") {
      setErrorMessage("Invalid login credentials. Please use 'demo@cqtcs.in' to test.");
      setIsSubmitting(false);
      return;
    }

    // Success routing
    router.push('/dashboard');
  };

  const handleOAuthLogin = async (provider: string) => {
    setIsSubmitting(true);
    // Simulate supabase.auth.signInWithOAuth()
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(`Redirecting to ${provider} OAuth...`);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-slate-50">
      
      {/* Left Half - Branding & Testimonial (Desktop Only) */}
      <div className="hidden md:flex md:w-1/2 bg-navy relative flex-col justify-between p-12 lg:p-20 overflow-hidden">
        <Particles />
        
        <div className="relative z-10">
          {/* Logo Lockup */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold text-navy rounded-lg flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              Q
            </div>
            <div>
              <div className="text-white font-bold tracking-widest text-sm">IEEE CQTCS</div>
              <div className="text-blue-300 text-xs">BENGALURU 2026</div>
            </div>
          </Link>
        </div>

        <div className="relative z-10 max-w-lg mt-20">
          <Quote className="text-gold/40 mb-6" size={48} />
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-8">
            "The most impactful quantum conference I've attended. The level of discourse and networking is simply unparalleled."
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-700 rounded-full border-2 border-slate-600"></div>
            <div>
              <p className="text-white font-bold">Prof. Sarah Jenkins</p>
              <p className="text-blue-300 text-sm">Director of Quantum Systems, MIT</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-slate-500 text-sm">
          &copy; 2026 IEEE CQTCS. All rights reserved.
        </div>
      </div>

      {/* Right Half - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 lg:p-12 relative">
        
        {/* Mobile Header (Shows only on mobile) */}
        <div className="absolute top-6 left-6 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy text-gold rounded-lg flex items-center justify-center font-bold">Q</div>
            <span className="text-navy font-bold text-sm">CQTCS 2026</span>
          </Link>
        </div>

        <div className="w-full max-w-md bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-navy mb-2">Welcome Back</h2>
            <p className="text-slate-500">Sign in to access your dashboard, schedule, and submissions.</p>
          </div>

          <motion.form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-5"
            animate={errorMessage ? { x: [-8, 8, -8, 8, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            {/* Error Banner */}
            <AnimatePresence>
              {errorMessage && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-50 text-red-600 p-3 rounded-xl flex items-start gap-2 text-sm border border-red-100"
                >
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <p>{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Mail size={18} />
                </div>
                <input 
                  type="email"
                  placeholder="name@university.edu"
                  {...register("email")}
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Key size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                  className={`w-full pl-11 pr-12 py-3 rounded-xl border ${errors.password ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-navy transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                <span className="text-sm text-slate-600 group-hover:text-navy transition-colors">Remember me</span>
              </label>
              <Link href="#" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 h-12"
            >
              {isSubmitting ? (
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full"
                />
              ) : (
                "Sign In"
              )}
            </button>
          </motion.form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Or continue with</span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          {/* SSO Buttons */}
          <div className="space-y-3">
            <button 
              type="button"
              onClick={() => handleOAuthLogin('Google')}
              className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-4 rounded-xl border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-3"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <button 
              type="button"
              onClick={() => handleOAuthLogin('ORCID')}
              className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-4 rounded-xl border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-3"
            >
              <div className="w-5 h-5 bg-[#A6CE39] rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold tracking-tighter leading-none">iD</span>
              </div>
              Continue with ORCID
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Don't have an account?{' '}
              <Link href="/signup" className="font-bold text-navy hover:text-blue-700 hover:underline transition-all">
                Create one &rarr;
              </Link>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
