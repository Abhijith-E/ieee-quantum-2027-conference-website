"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Program', path: '/program' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Tracks', path: '/tracks' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Committee', path: '/committee' },
    { name: 'Patrons', path: '/patrons' },
    { name: 'Advisory Committee', path: '/scientific-advisory-committee' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-navy rounded flex items-center justify-center group-hover:bg-gold transition-colors">
              <span className="text-white font-bold text-xs tracking-tighter">CQTCS</span>
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled || pathname !== '/' ? 'text-navy' : 'text-white'}`}>
              IEEE CQTCS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className={`text-sm font-semibold transition-colors hover:text-gold ${
                  pathname === link.path 
                    ? 'text-gold' 
                    : (isScrolled || pathname !== '/' ? 'text-slate-600' : 'text-slate-200')
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-gold text-navy-deep font-bold px-5 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm">
              Register
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden p-2 ${isScrolled || pathname !== '/' ? 'text-navy' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-end">
                <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                  <X size={28} />
                </button>
              </div>
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-bold transition-colors ${
                      pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <button className="bg-gold text-navy-deep font-bold px-6 py-4 rounded-xl mt-8 text-lg">
                  Register Now
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
