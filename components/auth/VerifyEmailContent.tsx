"use client";

import React, { useState, useEffect, useRef, KeyboardEvent, ClipboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export default function VerifyEmailContent() {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [countdown, setCountdown] = useState(60);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  // Mocked email
  const userEmail = "jane.doe@university.edu";

  // Handle countdown
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Handle input change
  const handleChange = (index: number, value: string) => {
    // Only accept numbers or empty
    if (!/^\d*$/.test(value)) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit if all 6 digits are filled
    if (newCode.every(digit => digit !== "")) {
      submitCode(newCode.join(""));
    }
  };

  // Handle keydown for backspace navigation
  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste event
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    
    if (pastedData) {
      const newCode = [...code];
      for (let i = 0; i < pastedData.length; i++) {
        newCode[i] = pastedData[i];
      }
      setCode(newCode);
      
      // Focus last filled input or next empty
      const focusIndex = Math.min(pastedData.length, 5);
      inputRefs.current[focusIndex]?.focus();

      if (pastedData.length === 6) {
        submitCode(pastedData);
      }
    }
  };

  const submitCode = async (otp: string) => {
    setIsSubmitting(true);
    setError(null);

    // Simulate Supabase verify OTP
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (otp === "123456") { // Mock success condition
      setIsSuccess(true);
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    } else {
      setError("Invalid verification code. (Hint: use 123456)");
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    setIsSubmitting(true);
    // Simulate supabase.auth.resend()
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCountdown(60);
    setIsSubmitting(false);
  };

  const isFormValid = code.every(digit => digit !== "");

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-navy -z-10 rounded-b-[40%] shadow-xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgb(0,0,0,0.1)] border border-slate-100 relative"
      >
        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div 
              key="verify-form"
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center"
            >
              {/* Animated Envelope Icon */}
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 relative">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2.5"
                    className="text-emerald-500"
                    d="M16 12l2 2 4-4" 
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-extrabold text-navy mb-3 text-center">Check your inbox</h2>
              <p className="text-slate-600 text-center mb-8 text-sm leading-relaxed">
                We've sent a verification code to <span className="font-bold text-navy">{userEmail}</span>. Enter it below to activate your account.
              </p>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="w-full bg-red-50 text-red-600 text-sm font-medium px-4 py-3 rounded-lg mb-6 text-center border border-red-100"
                >
                  {error}
                </motion.div>
              )}

              {/* 6-Digit OTP Input */}
              <div className="flex justify-between gap-2 md:gap-3 w-full mb-8">
                {code.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => { inputRefs.current[idx] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    onPaste={handlePaste}
                    className="w-10 h-12 md:w-12 md:h-14 text-center text-xl md:text-2xl font-bold bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 focus:bg-white outline-none transition-all text-navy"
                  />
                ))}
              </div>

              {/* Submit Button */}
              <button 
                onClick={() => submitCode(code.join(""))}
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin"></div>
                    Verifying...
                  </div>
                ) : (
                  "Verify Email"
                )}
              </button>

              {/* Resend Logic */}
              <div className="flex flex-col items-center gap-4 w-full">
                {countdown > 0 ? (
                  <p className="text-sm text-slate-500">
                    Resend code available in <span className="font-bold text-navy">{countdown}s</span>
                  </p>
                ) : (
                  <button 
                    onClick={handleResend}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <RefreshCw size={14} className={isSubmitting ? "animate-spin" : ""} /> 
                    Resend verification code
                  </button>
                )}

                <div className="h-px w-full bg-slate-100 my-2"></div>

                <Link href="/signup" className="text-sm text-slate-500 hover:text-navy hover:underline transition-colors">
                  Wrong email? Sign up again &rarr;
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="success-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div 
                animate={{ scale: [0.8, 1.2, 1] }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle2 size={48} className="text-emerald-500" />
              </motion.div>
              <h2 className="text-2xl font-extrabold text-navy mb-2">Email Verified!</h2>
              <p className="text-slate-600 text-center text-sm">
                Your account is now fully active. Redirecting to your dashboard...
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
