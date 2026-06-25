"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname?.startsWith('/dashboard')) {
    return null;
  }

  return (
    <footer className="w-full bg-[#0a0f1c] border-t border-slate-800 text-slate-300 py-12 relative overflow-hidden mt-auto">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Main Footer Links & Info (Optional: Can expand later) */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-12 gap-8 border-b border-slate-800/60 pb-8">
          <div className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-navy font-black text-xl tracking-tighter">CQ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-none tracking-wide">ICQST</span>
              <span className="text-gold text-xs font-semibold tracking-widest">2027 IEEE</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link href="/about" className="hover:text-gold transition-colors">About</Link>
            <Link href="/call-for-papers" className="hover:text-gold transition-colors">Call for Papers</Link>
            <Link href="/registration" className="hover:text-gold transition-colors">Registration</Link>
            <Link href="/venue" className="hover:text-gold transition-colors">Venue</Link>
            <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </div>
        </div>

        {/* Copyright and Developer Info */}
        <div className="flex flex-col items-center justify-center w-full gap-4 text-sm text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-slate-400"
          >
            &copy; {currentYear} IEEE International International Conference on Quantum Science and Technologies (ICQST). All rights reserved.
          </motion.p>

          {/* Premium Developer Tag */}
          <motion.a
            href="https://www.linkedin.com/in/abhijith-e"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative group mt-2 inline-block cursor-pointer"
          >
            {/* Dynamic Glowing Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700 rounded-full group-hover:animate-pulse"></div>
            
            <div className="relative flex items-center gap-3 px-8 py-3 rounded-full border border-slate-700/50 bg-[#0F172A]/80 backdrop-blur-xl shadow-2xl group-hover:border-emerald-400/50 group-hover:bg-[#0a0f1c] transition-all duration-500">
              <span className="text-slate-400 font-medium tracking-widest text-[10px] sm:text-xs uppercase group-hover:text-slate-300 transition-colors">
                Designed & Developed by
              </span>
              
              <div className="flex items-center gap-1.5 border-l border-slate-700/50 pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A66C2] group-hover:text-emerald-400 transition-colors duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                
                <span className="relative overflow-hidden font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-white group-hover:from-emerald-300 group-hover:via-teal-200 group-hover:to-emerald-300 bg-[length:200%_auto] hover:animate-gradient tracking-wider uppercase text-sm sm:text-base transition-all duration-500">
                  Abhijith E
                </span>
              </div>

              {/* Sparkle effect on hover */}
              <motion.div 
                className="absolute -right-1 -top-1 w-5 h-5 text-gold opacity-0 group-hover:opacity-100 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                initial={{ rotate: 0, scale: 0.5 }}
                whileHover={{ rotate: 180, scale: 1.3 }}
                transition={{ duration: 0.7, type: "spring" }}
              >
                ✦
              </motion.div>
            </div>
          </motion.a>

        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hover\\:animate-gradient:hover {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </footer>
  );
}
