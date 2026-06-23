"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, ExternalLink } from 'lucide-react';

type FilterType = 'All' | 'Luxury' | 'Mid-Range' | 'Budget';

const HOTELS = [
  {
    id: 1,
    name: 'The Lalit Ashok',
    tier: 'Luxury',
    stars: 5,
    distance: '4.2',
    price: '₹₹₹',
    amenities: ['Pool', 'Spa', 'Breakfast Included'],
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
    ota: 'MakeMyTrip'
  },
  {
    id: 2,
    name: 'Fairfield by Marriott Bengaluru',
    tier: 'Luxury',
    stars: 4,
    distance: '2.5',
    price: '₹₹₹',
    amenities: ['Fitness Center', 'Bar', 'Breakfast Included'],
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c0d1398c?auto=format&fit=crop&q=80',
    ota: 'Marriott'
  },
  {
    id: 3,
    name: 'Lemon Tree Hotel, Electronics City',
    tier: 'Mid-Range',
    stars: 4,
    distance: '6.1',
    price: '₹₹',
    amenities: ['Pool', 'Restaurant', 'Airport Shuttle'],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    ota: 'Booking.com'
  },
  {
    id: 4,
    name: 'Country Inn & Suites',
    tier: 'Mid-Range',
    stars: 3,
    distance: '3.8',
    price: '₹₹',
    amenities: ['Breakfast Included', 'Free Wi-Fi'],
    imageUrl: 'https://images.unsplash.com/photo-1542314831-c6a4d1409e50?auto=format&fit=crop&q=80',
    ota: 'Agoda'
  },
  {
    id: 5,
    name: 'Treebo Trend Atithi Inn',
    tier: 'Budget',
    stars: 3,
    distance: '1.2',
    price: '₹',
    amenities: ['Free Wi-Fi', 'AC Rooms', 'Room Service'],
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80',
    ota: 'Treebo'
  },
  {
    id: 6,
    name: 'The Zuri Whitefield',
    tier: 'Luxury',
    stars: 5,
    distance: '12.0',
    price: '₹₹₹',
    amenities: ['Pool', 'Multiple Dining', 'Spa'],
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80',
    ota: 'Expedia'
  }
];

export default function RecommendedHotels() {
  const [filter, setFilter] = useState<FilterType>('All');
  const filters: FilterType[] = ['All', 'Luxury', 'Mid-Range', 'Budget'];

  const filteredHotels = HOTELS.filter(h => filter === 'All' || h.tier === filter);

  const getTierBadge = (tier: string) => {
    switch(tier) {
      case 'Luxury': return 'bg-gold text-navy-deep';
      case 'Mid-Range': return 'bg-navy text-white';
      case 'Budget': return 'bg-slate-200 text-slate-700';
      default: return 'bg-slate-200 text-slate-700';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 mb-24">
      <h2 className="text-3xl font-extrabold text-navy mb-8">Nearby Hotels in Bengaluru</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative px-5 py-2 rounded-full text-sm font-bold transition-colors ${filter === f ? 'text-white' : 'text-slate-500 bg-slate-100 hover:bg-slate-200'}`}
          >
            {filter === f && (
              <motion.div
                layoutId="hotelFilterBg"
                className="absolute inset-0 bg-navy rounded-full -z-10"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{f}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredHotels.map(hotel => (
            <motion.div
              key={hotel.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Photo */}
              <div className="relative w-full aspect-video">
                <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-full object-cover" />
                <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm ${getTierBadge(hotel.tier)}`}>
                  {hotel.tier}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex text-gold mb-2">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-3 line-clamp-1">{hotel.name}</h3>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                    <MapPin size={14} />
                    {hotel.distance} km from venue
                  </div>
                  <div className="font-extrabold text-slate-400 tracking-widest">{hotel.price}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {hotel.amenities.map((amenity, i) => (
                    <span key={i} className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded uppercase tracking-wider">
                      {amenity}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <button className="w-full flex items-center justify-center gap-2 border-2 border-slate-200 text-navy font-bold py-2.5 rounded-xl hover:border-navy transition-colors">
                    Book via {hotel.ota} <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
