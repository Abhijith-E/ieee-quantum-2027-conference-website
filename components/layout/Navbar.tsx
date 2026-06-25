"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NavDropdown, { DropdownItem } from './NavDropdown';

const ABOUT_ITEMS: DropdownItem[] = [
  { name: 'About ICQST', path: '/about' },
  { name: 'Important Dates', path: '/dates' },
  { name: 'Organizing Committee', path: '/committee' },
  { name: 'Advisory Committee', path: '/scientific-advisory-committee' },
  { name: 'Registration', path: '/registration' },
  { name: 'Virtual Attendance', path: '/virtual' },
  { name: 'Visa Support', path: '/visa' },
  { name: 'Distinguished Patrons', path: '/patrons' },
  { name: 'Accommodation', path: '/accommodation' },
  { name: 'Venue', path: '/venue' },
  { name: 'How to Reach', path: '/how-to-reach' },
  { name: 'Places to Visit', path: '/places-to-visit' },
  { name: 'Sponsors & Partners', path: '/sponsors' },
  { name: 'Careers Board', path: '/careers' },
  { name: 'Downloads Hub', path: '/downloads' },
  { name: 'Code of Conduct & Ethics', path: '/ethics' },
  { name: 'Diversity, Equity & Inclusion', path: '/dei' },
  { name: 'Press & Media', path: '/press' },
  { name: 'Frequently Asked Questions', path: '/faq' },
  { name: 'Contact Us', path: '/contact' },
];

const PROGRAM_ITEMS: DropdownItem[] = [
  { name: 'Technical Schedule', path: '/program' },
  { name: 'Pre-Conference Events', path: '/pre-conference' },
  { name: 'Workshops & Tutorials', path: '/workshops' },
  { name: 'Keynotes & Speakers', path: '/speakers' },
  { name: 'Research Tracks', path: '/tracks' },
  { name: 'Social Events', path: '/social-events' },
  { name: 'Best Paper Awards', path: '/awards' },
];

const CFP_ITEMS: DropdownItem[] = [
  { name: 'Overview & Guidelines', path: '/call-for-papers' },
  { name: 'Abstract Submission', path: '/abstract-submission' },
  { name: 'Poster Guidelines', path: '/poster-guidelines' },
  { name: 'Proceedings & IEEE Xplore', path: '/proceedings' },
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

  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Hide Navbar completely on dashboard
  if (pathname?.startsWith('/dashboard')) {
    return null;
  }

  const isAuthPage = ['/login', '/signup', '/forgot-password', '/verify-email'].includes(pathname || '');
  const isSolid = isScrolled || isAuthPage;

  // Determine which nav item corresponds to the current path
  const getActiveNavName = () => {
    if (pathname === '/') return 'Home';
    if (ABOUT_ITEMS.some(i => i.path === pathname)) return 'About';
    if (PROGRAM_ITEMS.some(i => i.path === pathname)) return 'Program';
    if (CFP_ITEMS.some(i => i.path === pathname)) return 'CFP';
    return null;
  };

  const currentActiveNav = hoveredNav || getActiveNavName();

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSolid ? 'bg-[#0a0f1c]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span className="text-navy font-black text-xl tracking-tighter">CQ</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-none tracking-wide">ICQST</span>
            <span className="text-gold text-xs font-semibold tracking-widest">2027 IEEE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div 
          className="hidden md:flex items-center gap-1 relative"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {/* Home */}
          <div 
            className="relative px-4 rounded-full flex items-center"
            onMouseEnter={() => setHoveredNav('Home')}
          >
            {currentActiveNav === 'Home' && (
              <motion.div layoutId="navPill" className="absolute inset-0 bg-white/10 rounded-full" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
            )}
            <div className="relative z-10">
              <Link href="/" className={`block py-2 font-medium transition-colors ${pathname === '/' ? 'text-gold' : 'text-slate-300 hover:text-white'}`}>
                Home
              </Link>
            </div>
          </div>

          {/* About */}
          <div 
            className="relative px-4 rounded-full flex items-center"
            onMouseEnter={() => setHoveredNav('About')}
          >
            {currentActiveNav === 'About' && (
              <motion.div layoutId="navPill" className="absolute inset-0 bg-white/10 rounded-full" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
            )}
            <div className="relative z-10">
              <NavDropdown label="About" items={ABOUT_ITEMS} />
            </div>
          </div>

          {/* Program */}
          <div 
            className="relative px-4 rounded-full flex items-center"
            onMouseEnter={() => setHoveredNav('Program')}
          >
            {currentActiveNav === 'Program' && (
              <motion.div layoutId="navPill" className="absolute inset-0 bg-white/10 rounded-full" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
            )}
            <div className="relative z-10">
              <NavDropdown label="Program" items={PROGRAM_ITEMS} />
            </div>
          </div>

          {/* Call for Papers */}
          <div 
            className="relative px-4 rounded-full flex items-center"
            onMouseEnter={() => setHoveredNav('CFP')}
          >
            {currentActiveNav === 'CFP' && (
              <motion.div layoutId="navPill" className="absolute inset-0 bg-white/10 rounded-full" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
            )}
            <div className="relative z-10">
              <NavDropdown label="Call for Papers" items={CFP_ITEMS} />
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link href="/dashboard" className="text-slate-200 hover:text-gold transition-colors px-4 font-semibold">
            Dashboard
          </Link>
          <div className="w-px h-4 bg-slate-700 mx-1"></div>
          <Link href="/login" className="text-slate-200 hover:text-white font-semibold transition-colors px-4">
            Sign In
          </Link>
          <Link href="/registration" className="bg-gold hover:bg-[#c4a132] text-white font-bold py-2.5 px-6 rounded-lg transition-colors shadow-sm ml-2">
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
              
              <div className="h-px w-full bg-slate-800 my-2"></div>
              
              <Link href="/dashboard" className="flex items-center justify-between w-full py-3 text-lg font-semibold text-slate-300 hover:text-gold transition-colors">
                Dashboard
              </Link>
              <Link href="/login" className="flex items-center justify-between w-full py-3 text-lg font-semibold text-slate-300 hover:text-white transition-colors">
                Sign In
              </Link>
              
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
