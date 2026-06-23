"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavDropdown, { DropdownItem } from './NavDropdown';

const ABOUT_ITEMS: DropdownItem[] = [
  { name: 'About CQTCS', path: '/about' },
  { name: 'Important Dates', path: '/dates' },
  { name: 'Organizing Committee', path: '/committee' },
  { name: 'Advisory Committee', path: '/scientific-advisory-committee' },
  { name: 'Distinguished Patrons', path: '/patrons' },
  { name: 'Accommodation', path: '/accommodation' },
  { name: 'Venue', path: '/venue' },
  { name: 'How to Reach', path: '/how-to-reach' },
];

const PROGRAM_ITEMS: DropdownItem[] = [
  { name: 'Technical Schedule', path: '/program' },
  { name: 'Pre-Conference Events', path: '/pre-conference' },
  { name: 'Workshops & Tutorials', path: '/workshops' },
  { name: 'Keynotes & Speakers', path: '/speakers' },
  { name: 'Research Tracks', path: '/tracks' },
];

const CFP_ITEMS: DropdownItem[] = [
  { name: 'Overview & Guidelines', path: '/call-for-papers' },
  { name: 'Abstract Submission', path: '/abstract-submission' },
  { name: 'Poster Guidelines', path: '/poster-guidelines' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Mobile Accordion State
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = useState(false);
  const [mobileCfpOpen, setMobileCfpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0f1c]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-navy font-black text-xl tracking-tighter">CQ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-none tracking-wide">CQTCS</span>
            <span className="text-gold text-xs font-semibold tracking-widest">2026 IEEE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`font-medium transition-colors ${pathname === '/' ? 'text-gold' : 'text-slate-300 hover:text-white'}`}
          >
            Home
          </Link>
          
          <NavDropdown label="About" items={ABOUT_ITEMS} />
          
          <NavDropdown label="Program" items={PROGRAM_ITEMS} />
          
          <NavDropdown label="Call for Papers" items={CFP_ITEMS} />
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link href="/registration" className="bg-gold hover:bg-[#c4a132] text-white font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm">
            Register Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f1c] border-t border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-2">
              <Link href="/" className={`py-3 text-lg font-semibold ${pathname === '/' ? 'text-gold' : 'text-slate-300'}`}>
                Home
              </Link>
              
              {/* Mobile About Accordion */}
              <div>
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg font-semibold text-slate-300"
                >
                  About <ChevronDown className={`transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-3 pl-4 pb-2 overflow-hidden"
                    >
                      {ABOUT_ITEMS.map(item => (
                        <Link key={item.path} href={item.path} className={`text-base ${pathname === item.path ? 'text-gold' : 'text-slate-400'}`}>
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Program Accordion */}
              <div>
                <button 
                  onClick={() => setMobileProgramOpen(!mobileProgramOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg font-semibold text-slate-300"
                >
                  Program <ChevronDown className={`transition-transform ${mobileProgramOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileProgramOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-3 pl-4 pb-2 overflow-hidden"
                    >
                      {PROGRAM_ITEMS.map(item => (
                        <Link key={item.path} href={item.path} className={`text-base ${pathname === item.path ? 'text-gold' : 'text-slate-400'}`}>
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Call for Papers Accordion */}
              <div>
                <button 
                  onClick={() => setMobileCfpOpen(!mobileCfpOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg font-semibold text-slate-300"
                >
                  Call for Papers <ChevronDown className={`transition-transform ${mobileCfpOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileCfpOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-3 pl-4 pb-2 overflow-hidden"
                    >
                      {CFP_ITEMS.map(item => (
                        <Link key={item.path} href={item.path} className={`text-base ${pathname === item.path ? 'text-gold' : 'text-slate-400'}`}>
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link href="/registration" className="mt-6 flex items-center justify-center w-full bg-gold text-navy font-bold py-3 rounded-xl uppercase tracking-wide text-lg">
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
