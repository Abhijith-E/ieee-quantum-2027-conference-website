"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

type Category = 'All' | 'Heritage' | 'Nature' | 'Tech' | 'Culture' | 'Shopping';

const ATTRACTIONS = [
  {
    id: 1,
    name: 'Cubbon Park',
    category: 'Nature',
    distance: '8 km from venue',
    time: 'Early Morning / Evening',
    desc: 'A lush 300-acre oasis right in the heart of the city, perfect for morning walks and peaceful reading.',
    image: 'https://images.unsplash.com/photo-1593506161948-26610fb6d762?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Bangalore Palace',
    category: 'Heritage',
    distance: '10 km from venue',
    time: '10:00 AM – 5:30 PM',
    desc: 'A magnificent Tudor-style palace built in 1878, featuring beautiful wooden interiors and gardens.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Lalbagh Botanical Garden',
    category: 'Nature',
    distance: '5 km from venue',
    time: 'Early Morning',
    desc: 'Home to India\'s largest collection of tropical plants and a famous glass house modeled after London\'s Crystal Palace.',
    image: 'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Vidhana Soudha',
    category: 'Heritage',
    distance: '8 km from venue',
    time: 'Evening (Illuminated on weekends)',
    desc: 'The spectacular state legislature building, showcasing neo-Dravidian architecture.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Visvesvaraya Industrial & Tech Museum',
    category: 'Tech',
    distance: '8 km from venue',
    time: '10:00 AM – 5:00 PM',
    desc: 'Interactive science and technology exhibits perfect for tech enthusiasts and academics.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'National Gallery of Modern Art',
    category: 'Culture',
    distance: '10 km from venue',
    time: '11:00 AM – 6:00 PM (Closed Mondays)',
    desc: 'Housed in a heritage mansion, featuring an incredible collection of Indian modern art.',
    image: 'https://images.unsplash.com/photo-1572947645841-094f3a9c4c94?auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    name: 'UB City Mall',
    category: 'Shopping',
    distance: '7 km from venue',
    time: 'Evening',
    desc: 'India\'s first luxury mall, offering premium dining, high-end shopping, and an amphitheater.',
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    name: 'Bannerghatta National Park',
    category: 'Nature',
    distance: '12 km from venue',
    time: 'Morning Safari',
    desc: 'A biological reserve featuring a zoo, pet corner, animal rescue center, and a butterfly enclosure.',
    image: 'https://images.unsplash.com/photo-1588661666872-364235e0c5d5?auto=format&fit=crop&q=80'
  },
  {
    id: 9,
    name: 'ISKCON Temple',
    category: 'Culture',
    distance: '14 km from venue',
    time: 'Early Morning / Evening',
    desc: 'One of the largest ISKCON temples in the world, offering panoramic city views and spiritual serenity.',
    image: 'https://images.unsplash.com/photo-1600080351229-21b92476b7bd?auto=format&fit=crop&q=80'
  },
  {
    id: 10,
    name: 'MG Road & Brigade Road',
    category: 'Shopping',
    distance: '7 km from venue',
    time: 'Late Evening',
    desc: 'The bustling commercial heart of the city, famous for bookstores, cafes, and street shopping.',
    image: 'https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?auto=format&fit=crop&q=80'
  }
];

export default function AttractionsGrid() {
  const [filter, setFilter] = useState<Category>('All');
  const filters: Category[] = ['All', 'Heritage', 'Nature', 'Tech', 'Culture', 'Shopping'];

  const filteredAttractions = ATTRACTIONS.filter(a => filter === 'All' || a.category === filter);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Heritage': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Nature': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Tech': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Culture': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Shopping': return 'bg-rose-100 text-rose-800 border-rose-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24 -mt-8 relative z-20">
      
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${filter === f ? 'text-white shadow-md' : 'text-slate-600 bg-white border border-slate-200 hover:border-slate-300'}`}
          >
            {filter === f && (
              <motion.div
                layoutId="attractionFilterBg"
                className="absolute inset-0 bg-navy rounded-full -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredAttractions.map((attraction, i) => (
            <motion.div
              key={attraction.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col group cursor-pointer"
            >
              {/* Photo */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm border ${getCategoryColor(attraction.category)}`}>
                  {attraction.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-navy mb-3 line-clamp-1 group-hover:text-gold-dark transition-colors">{attraction.name}</h3>
                
                <p className="text-sm text-slate-600 mb-6 line-clamp-2 flex-1">
                  {attraction.desc}
                </p>

                <div className="space-y-2 mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <MapPin size={14} className="text-gold" />
                    {attraction.distance}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Clock size={14} className="text-emerald-500" />
                    Best: {attraction.time}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
