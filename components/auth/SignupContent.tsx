"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Eye, EyeOff, Key, Quote, User, Building2, Globe2, HelpCircle } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import zxcvbn from 'zxcvbn';

const signupSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
  institution: z.string().min(2, "Institution / Affiliation is required"),
  country: z.string().min(1, "Please select a country"),
  role: z.string().min(1, "Please select a role"),
  paperId: z.string().optional(),
  organization: z.string().optional(),
  orcidId: z.string().optional(),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the Terms of Service and Privacy Policy"
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
}).refine((data) => {
  if (data.role === 'Author' && (!data.paperId || data.paperId.length < 1)) return false;
  return true;
}, {
  message: "Paper ID is required for Authors",
  path: ["paperId"],
}).refine((data) => {
  if (data.role === 'Sponsor' && (!data.organization || data.organization.length < 1)) return false;
  return true;
}, {
  message: "Organization is required for Sponsors",
  path: ["organization"],
});

type SignupData = z.infer<typeof signupSchema>;

const ROLES = ["Attendee", "Author", "Reviewer", "Sponsor"];
const COUNTRIES = ["United States", "India", "United Kingdom", "Germany", "Japan", "Canada", "Australia", "France", "China", "Other"];

// Abstract particles generator (same as Login)
const Particles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
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

export default function SignupContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Attendee");
  const router = useRouter();

  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: "Attendee",
      agreeTerms: false
    }
  });

  const passwordValue = watch("password", "");
  
  // Calculate password strength
  const passwordStrength = useMemo(() => {
    if (!passwordValue) return -1;
    const result = zxcvbn(passwordValue);
    return result.score; // 0 to 4
  }, [passwordValue]);

  const getStrengthColor = (score: number) => {
    switch (score) {
      case 0: return 'bg-slate-200';
      case 1: return 'bg-red-500';
      case 2: return 'bg-amber-500';
      case 3: return 'bg-yellow-400';
      case 4: return 'bg-green-500';
      default: return 'bg-slate-200';
    }
  };

  const getStrengthLabel = (score: number) => {
    switch (score) {
      case 0: return '';
      case 1: return 'Weak';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  const handleRoleChange = (role: string) => {
    setSelectedRole(role);
    setValue("role", role, { shouldValidate: true });
  };

  const onSubmit = async (data: SignupData) => {
    setIsSubmitting(true);
    // Simulate Supabase supabase.auth.signUp()
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Sign Up Data:", data);
    router.push('/verify-email');
  };

  const handleOAuthLogin = async (provider: string) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(`Redirecting to ${provider} OAuth...`);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-slate-50">
      
      {/* Left Half - Branding & Testimonial (Desktop Only) */}
      <div className="hidden md:flex md:w-5/12 bg-navy relative flex-col justify-between p-12 lg:p-16 overflow-hidden sticky top-0 h-screen">
        <Particles />
        
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold text-navy rounded-lg flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
              Q
            </div>
            <div>
              <div className="text-white font-bold tracking-widest text-sm">IEEE ICQST</div>
              <div className="text-blue-300 text-xs">BENGALURU 2027</div>
            </div>
          </Link>
        </div>

        <div className="relative z-10 max-w-lg">
          <Quote className="text-gold/40 mb-6" size={48} />
          <h2 className="text-3xl font-bold text-white leading-tight mb-8">
            "The premier venue for discovering the next generation of quantum breakthroughs."
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-700 rounded-full border-2 border-slate-600"></div>
            <div>
              <p className="text-white font-bold">Dr. James Arthur</p>
              <p className="text-blue-300 text-sm">Lead Researcher, QuantumTech</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-slate-500 text-sm">
          &copy; 2027 IEEE ICQST. All rights reserved.
        </div>
      </div>

      {/* Right Half - Signup Form */}
      <div className="w-full md:w-7/12 flex items-center justify-center p-6 lg:p-12 py-16">
        
        <div className="absolute top-6 left-6 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy text-gold rounded-lg flex items-center justify-center font-bold">Q</div>
            <span className="text-navy font-bold text-sm">ICQST 2027</span>
          </Link>
        </div>

        <div className="w-full max-w-2xl bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-navy mb-2">Create an Account</h2>
            <p className="text-slate-500">Join the conference portal to manage your participation.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Role Selector (Segmented Control) */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">I am joining as a(n) *</label>
              <div className="flex bg-slate-100 rounded-xl p-1 relative z-0 overflow-hidden">
                {ROLES.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => handleRoleChange(role)}
                    className={`flex-1 py-2.5 text-sm font-bold transition-colors relative z-10 rounded-lg ${
                      selectedRole === role ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {selectedRole === role && (
                      <motion.div
                        layoutId="roleHighlight"
                        className="absolute inset-0 bg-navy rounded-lg -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Full Name *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <User size={18} />
                  </div>
                  <input 
                    {...register("fullName")}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50`}
                    placeholder="Jane Doe"
                  />
                </div>
                {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Email Address *</label>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Password *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Key size={18} />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className={`w-full pl-11 pr-12 py-3 rounded-xl border ${errors.password ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-navy transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                
                {/* Strength Meter */}
                {passwordValue.length > 0 && (
                  <div className="mt-2">
                    <div className="flex gap-1 h-1.5 mb-1">
                      {[1, 2, 3, 4].map((segment) => (
                        <div 
                          key={segment} 
                          className={`flex-1 rounded-full transition-colors duration-300 ${passwordStrength >= segment ? getStrengthColor(passwordStrength) : 'bg-slate-200'}`}
                        />
                      ))}
                    </div>
                    <div className={`text-[10px] font-bold text-right uppercase ${
                      passwordStrength <= 1 ? 'text-red-500' : passwordStrength === 2 ? 'text-amber-500' : passwordStrength === 3 ? 'text-yellow-500' : 'text-green-500'
                    }`}>
                      {getStrengthLabel(passwordStrength)}
                    </div>
                  </div>
                )}
                {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Confirm Password *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Key size={18} />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.confirmPassword ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Institution */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Institution / Affiliation *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Building2 size={18} />
                  </div>
                  <input 
                    {...register("institution")}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.institution ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50`}
                    placeholder="MIT, IBM Quantum..."
                  />
                </div>
                {errors.institution && <p className="text-red-500 text-xs">{errors.institution.message}</p>}
              </div>

              {/* Country */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700">Country *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Globe2 size={18} />
                  </div>
                  <select 
                    {...register("country")}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.country ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50 appearance-none`}
                  >
                    <option value="">Select country...</option>
                    {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
              </div>
            </div>

            {/* Conditional Fields based on Role */}
            <AnimatePresence mode="popLayout">
              {selectedRole === 'Author' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5"
                >
                  <label className="text-sm font-bold text-slate-700">EDAS Paper ID *</label>
                  <input 
                    {...register("paperId")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.paperId ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50`}
                    placeholder="e.g. 1570123456"
                  />
                  {errors.paperId && <p className="text-red-500 text-xs">{errors.paperId.message}</p>}
                </motion.div>
              )}

              {selectedRole === 'Sponsor' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5"
                >
                  <label className="text-sm font-bold text-slate-700">Organization Name *</label>
                  <input 
                    {...register("organization")}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.organization ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50`}
                    placeholder="QuantumTech Corp."
                  />
                  {errors.organization && <p className="text-red-500 text-xs">{errors.organization.message}</p>}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ORCID ID (Optional) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  ORCID ID <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="group relative cursor-help">
                  <HelpCircle size={14} className="text-slate-400" />
                  <div className="absolute right-0 bottom-full mb-2 w-48 bg-navy text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Connecting your ORCID helps verify your academic credentials.
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <div className="w-5 h-5 bg-[#A6CE39] rounded-full flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold tracking-tighter leading-none">iD</span>
                  </div>
                </div>
                <input 
                  {...register("orcidId")}
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border ${errors.orcidId ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-slate-50`}
                  placeholder="0000-0000-0000-0000"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="mt-1 shrink-0">
                  <Controller
                    name="agreeTerms"
                    control={control}
                    render={({ field }) => (
                      <input 
                        type="checkbox" 
                        checked={field.value}
                        onChange={field.onChange}
                        className={`w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer ${errors.agreeTerms ? 'border-red-500 focus:ring-red-500' : ''}`} 
                      />
                    )}
                  />
                </div>
                <span className="text-sm text-slate-600 leading-snug">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>, <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>, and the <a href="/ethics" className="text-blue-600 hover:underline">IEEE Code of Conduct</a>.
                </span>
              </label>
              {errors.agreeTerms && <p className="text-red-500 text-xs mt-1 ml-8">{errors.agreeTerms.message}</p>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-6"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full"
                  />
                  Creating Account...
                </div>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Or continue with</span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          {/* SSO Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              Google
            </button>

            <button 
              type="button"
              onClick={() => handleOAuthLogin('ORCID')}
              className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-4 rounded-xl border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-3"
            >
              <div className="w-5 h-5 bg-[#A6CE39] rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold tracking-tighter leading-none">iD</span>
              </div>
              ORCID
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?{' '}
              <Link href="/login" className="font-bold text-navy hover:text-blue-700 hover:underline transition-all">
                Sign In &rarr;
              </Link>
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
