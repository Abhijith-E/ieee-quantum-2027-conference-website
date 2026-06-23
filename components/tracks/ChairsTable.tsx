"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Track } from './TracksClientWrapper';

interface ChairsTableProps {
  tracks: Track[];
}

export default function ChairsTable({ tracks }: ChairsTableProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="w-full bg-white py-16 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-navy mb-8 text-center md:text-left">Track Chairs Contact</h2>
        
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold">Track</th>
                <th className="py-4 px-6 font-semibold">Chair Name</th>
                <th className="py-4 px-6 font-semibold text-right">Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {tracks.map((track) => (
                <tr key={`chair-${track.id}`} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-navy">
                    {track.title.split(':')[0]} {/* E.g., 'Track 1' */}
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    <div>{track.chair.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{track.chair.institution}</div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleCopyEmail(track.chair.email, track.id)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        copiedId === track.id 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-navy/5 text-navy hover:bg-navy hover:text-white'
                      }`}
                    >
                      {copiedId === track.id ? (
                        <>
                          <Check size={14} /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Email Chair
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
