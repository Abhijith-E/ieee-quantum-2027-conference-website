import React from 'react';
import { Utensils } from 'lucide-react';

export default function LocalFoodGuide() {
  const foods = [
    { name: 'Masala Dosa', emoji: '🥞', spot: 'Mavalli Tiffin Room (MTR)' },
    { name: 'Filter Coffee', emoji: '☕', spot: 'Brahmin\'s Coffee Bar' },
    { name: 'Bisi Bele Bath', emoji: '🍲', spot: 'Vidyarthi Bhavan' },
    { name: 'Mangalorean Ghee Roast', emoji: '🥘', spot: 'Coast to Coast' },
    { name: 'Karnataka Thali', emoji: '🍛', spot: 'Kamat Bugle Rock' },
    { name: 'Set Dosa', emoji: '🥞', spot: 'CTR (Shri Sagar)' },
    { name: 'Mysore Pak', emoji: '🍬', spot: 'Sri Krishna Sweets' },
    { name: 'Craft Beer', emoji: '🍻', spot: 'Toit / Arbor Brewing Co.' },
  ];

  return (
    <div className="w-full bg-slate-50 py-24 mb-24 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
            <Utensils size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-navy">Local Food Guide</h2>
            <p className="text-slate-500 font-medium text-sm">Must-try culinary experiences in Bengaluru.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {foods.map((food, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col hover:border-gold hover:shadow-md transition-all cursor-pointer group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform origin-left">{food.emoji}</div>
              <h4 className="font-bold text-navy mb-1">{food.name}</h4>
              <p className="text-xs font-medium text-slate-500 mt-auto leading-relaxed">
                <span className="text-slate-400">Best at:</span><br/>
                <span className="text-gold-dark">{food.spot}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
