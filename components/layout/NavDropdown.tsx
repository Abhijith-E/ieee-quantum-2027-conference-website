"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export interface DropdownItem {
  name: string;
  path: string;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
}

export default function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // slight delay to prevent flickering
  };

  const isActiveGroup = items.some(item => pathname === item.path);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className={`flex items-center gap-1 font-medium transition-colors py-2 ${
          isActiveGroup || isOpen ? 'text-gold' : 'text-slate-300 hover:text-white'
        }`}
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50"
          >
            <div className="py-2">
              {items.map((item) => {
                const isItemActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      isItemActive
                        ? 'bg-gold/10 text-gold-dark border-l-2 border-gold pl-3'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-navy border-l-2 border-transparent pl-3'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
