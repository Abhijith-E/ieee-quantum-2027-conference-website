"use client";

import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function SocialTickets() {
  const addons = [
    { name: 'Conference Banquet (Accompanying Guest)', price: '₹1,500', includedFor: 'Primary Delegate', available: 'Yes' },
    { name: 'Cultural Evening — Karnataka Showcase', price: '₹500', includedFor: 'None (Add-on for all)', available: 'Yes' },
    { name: 'Campus Tour & CQTCS Lab Visit', price: 'Free', includedFor: 'First 40 Registrants', available: 'Waitlist' }
  ];

  return (
    <div className="w-full bg-white py-16 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-2">Social Event Add-ons</h3>
            <p className="text-slate-600 font-medium">Purchase additional tickets for accompanying guests or optional events.</p>
          </div>
          <Link href="/registration" className="bg-navy hover:bg-navy-deep text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-md flex items-center gap-2 shrink-0">
            <ShoppingCart size={18} /> Add to Registration
          </Link>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="py-4 px-6 font-bold text-navy text-sm uppercase tracking-wider">Event / Add-on</th>
                  <th className="py-4 px-6 font-bold text-navy text-sm uppercase tracking-wider">Price</th>
                  <th className="py-4 px-6 font-bold text-navy text-sm uppercase tracking-wider">Included For</th>
                  <th className="py-4 px-6 font-bold text-navy text-sm uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {addons.map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-white transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">{item.name}</td>
                    <td className="py-4 px-6 font-bold text-gold-dark">{item.price}</td>
                    <td className="py-4 px-6 text-sm text-slate-600 font-medium">{item.includedFor}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                        item.available === 'Yes' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {item.available}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
