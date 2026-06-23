"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CommitteeMember } from './types';
import ChairCard, { cardVariants } from './ChairCards';
import TpcSection from './TpcSection';

interface CommitteeClientWrapperProps {
  generalChairs: CommitteeMember[];
  programChairs: CommitteeMember[];
  trackChairs: CommitteeMember[];
  localCommittee: CommitteeMember[];
  tpcMembers: CommitteeMember[];
}

const TABS = [
  'General Chairs',
  'Program Chairs',
  'Track Chairs',
  'Local Committee',
  'Technical Program Committee'
];

export default function CommitteeClientWrapper({
  generalChairs,
  programChairs,
  trackChairs,
  localCommittee,
  tpcMembers
}: CommitteeClientWrapperProps) {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  // Container variants for stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'General Chairs':
        return (
          <motion.div
            key="general"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8"
          >
            {generalChairs.map(member => (
              <ChairCard key={member.id} member={member} variant="large" />
            ))}
          </motion.div>
        );
      
      case 'Program Chairs':
        return (
          <motion.div
            key="program"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pt-8"
          >
            {programChairs.map(member => (
              <ChairCard key={member.id} member={member} variant="large" />
            ))}
          </motion.div>
        );

      case 'Track Chairs':
        return (
          <motion.div
            key="track"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-8"
          >
            {trackChairs.map(member => (
              <ChairCard key={member.id} member={member} variant="medium" />
            ))}
          </motion.div>
        );

      case 'Local Committee':
        return (
          <motion.div
            key="local"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto pt-8"
          >
            {localCommittee.map(member => (
              <ChairCard key={member.id} member={member} variant="compact" />
            ))}
          </motion.div>
        );

      case 'Technical Program Committee':
        return (
          <motion.div
            key="tpc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-8 max-w-7xl mx-auto"
          >
            <TpcSection members={tpcMembers} />
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen pb-24">
      
      {/* Sticky Tabs */}
      <div className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 w-full overflow-x-auto shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center min-w-max space-x-8">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-5 text-sm font-semibold transition-colors ${
                  isActive ? 'text-navy' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab}
                {isActive && (
                  <motion.div
                    layoutId="tabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold rounded-t-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 relative">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </div>

    </div>
  );
}
