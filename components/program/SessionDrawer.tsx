"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Calendar } from 'lucide-react';
import { Session } from './types';
import BookmarkButton from './BookmarkButton';

interface SessionDrawerProps {
  session: Session | null;
  onClose: () => void;
}

export default function SessionDrawer({ session, onClose }: SessionDrawerProps) {
  
  // Lock body scroll when open
  useEffect(() => {
    if (session) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [session]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {session && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-50"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-slate-100 bg-slate-50 shrink-0">
              <div className="flex flex-col gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider self-start ${
                  session.type === 'Keynote' ? 'bg-gold/20 text-gold-dark border border-gold/30' : 
                  session.type === 'Oral' ? 'bg-white text-navy border border-navy/30' : 
                  session.type === 'Workshop' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                  'bg-slate-200 text-slate-700'
                }`}>
                  {session.type}
                </span>
                <div className="flex items-center gap-4 text-xs text-slate-500 mt-2 font-medium">
                  <div className="flex items-center gap-1.5"><Calendar size={14} /> {session.day.split(' ')[0]}</div>
                  <div className="flex items-center gap-1.5"><Clock size={14} /> {session.startTime} - {session.endTime}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BookmarkButton sessionId={session.id} />
                <button 
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-navy hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              
              <h2 className="text-2xl font-bold text-navy mb-6 leading-snug">
                {session.title}
              </h2>

              {session.location && (
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 mb-8">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-navy shadow-sm border border-slate-100">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Location</div>
                    <div className="font-semibold text-navy">{session.location}</div>
                  </div>
                </div>
              )}

              {session.abstract && (
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3">Abstract</h3>
                  <div className="text-sm text-slate-600 leading-relaxed space-y-4">
                    {session.abstract.split('\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {session.speaker && (
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Speaker</h3>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 shrink-0">
                      {session.speaker.imageUrl ? (
                        <img src={session.speaker.imageUrl} alt={session.speaker.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">Photo</div>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-navy text-lg">{session.speaker.name}</div>
                      <div className="text-sm text-slate-500">{session.speaker.institution}</div>
                    </div>
                  </div>
                  
                  {session.speaker.bio && (
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {session.speaker.bio}
                    </p>
                  )}
                </div>
              )}

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
