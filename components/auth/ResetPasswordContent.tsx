"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Key, Lock, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import zxcvbn from 'zxcvbn';

const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ResetPasswordData = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
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

  const onSubmit = async (data: ResetPasswordData) => {
    setIsSubmitting(true);
    // Simulate Supabase supabase.auth.updateUser()
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSuccess(true);
    setTimeout(() => {
      router.push('/login?reset=success');
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-6 relative overflow-hidden">
      
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
              key="reset-form"
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col"
            >
              <div className="mb-8">
                <div className="w-12 h-12 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-6">
                  <Lock size={24} />
                </div>
                <h2 className="text-3xl font-extrabold text-navy mb-2">Create new password</h2>
                <p className="text-slate-500 text-sm">Your new password must be different from previous used passwords.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Password */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700">New Password</label>
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
                  <label className="text-sm font-bold text-slate-700">Confirm New Password</label>
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

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-4"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full"
                      />
                      Updating...
                    </div>
                  ) : (
                    "Set New Password"
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="success-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-10"
            >
              <motion.div 
                animate={{ scale: [0.8, 1.2, 1] }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle2 size={48} className="text-emerald-500" />
              </motion.div>
              <h2 className="text-2xl font-extrabold text-navy mb-2">Password Updated!</h2>
              <p className="text-slate-600 text-center text-sm">
                Your password has been changed successfully. Redirecting to login...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
