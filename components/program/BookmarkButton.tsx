"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';

interface BookmarkButtonProps {
  sessionId: string;
}

export default function BookmarkButton({ sessionId }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    // Read from localStorage on mount
    const stored = localStorage.getItem('icqst_bookmarks');
    if (stored) {
      try {
        const parsed: string[] = JSON.parse(stored);
        if (parsed.includes(sessionId)) {
          setIsBookmarked(true);
        }
      } catch (e) {
        console.error('Failed to parse bookmarks', e);
      }
    }
  }, [sessionId]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening the drawer if inside a card
    
    const stored = localStorage.getItem('icqst_bookmarks');
    let bookmarks: string[] = [];
    if (stored) {
      try {
        bookmarks = JSON.parse(stored);
      } catch (e) {}
    }

    if (isBookmarked) {
      bookmarks = bookmarks.filter(id => id !== sessionId);
      setIsBookmarked(false);
    } else {
      if (!bookmarks.includes(sessionId)) {
        bookmarks.push(sessionId);
      }
      setIsBookmarked(true);
    }

    localStorage.setItem('icqst_bookmarks', JSON.stringify(bookmarks));
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleBookmark}
      className={`p-2 rounded-full transition-colors flex items-center justify-center ${
        isBookmarked 
          ? 'bg-gold/10 text-gold-dark hover:bg-gold/20' 
          : 'bg-slate-50 text-slate-400 hover:text-gold hover:bg-slate-100'
      }`}
      aria-label={isBookmarked ? "Remove from my schedule" : "Add to my schedule"}
    >
      <Bookmark size={18} className={isBookmarked ? "fill-gold-dark" : "fill-transparent"} strokeWidth={isBookmarked ? 1.5 : 2} />
    </motion.button>
  );
}
