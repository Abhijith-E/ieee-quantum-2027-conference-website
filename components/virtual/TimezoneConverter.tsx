"use client";

import React, { useState, useEffect } from 'react';
import { Globe, Clock } from 'lucide-react';

const EVENTS = [
  { name: 'Opening Ceremony', date: '2027-11-15T09:00:00+05:30' },
  { name: 'Day 1 Keynote', date: '2027-11-15T10:30:00+05:30' },
  { name: 'Closing Ceremony', date: '2027-11-17T16:00:00+05:30' }
];

export default function TimezoneConverter() {
  const [timezones, setTimezones] = useState<string[]>([]);
  const [selectedTz, setSelectedTz] = useState<string>('');

  useEffect(() => {
    try {
      // Use native Intl API to get all supported timezones
      const tzs = Intl.supportedValuesOf('timeZone');
      setTimezones(tzs);
      
      // Auto-detect user timezone
      const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setSelectedTz(userTz);
    } catch (e) {
      console.error("Browser doesn't support Intl.supportedValuesOf");
    }
  }, []);

  const formatInTimezone = (isoString: string, tz: string) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).format(new Date(isoString));
    } catch (e) {
      return 'Invalid Timezone';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-20 -mt-10 relative z-20">
      <div className="bg-navy rounded-3xl p-8 md:p-10 shadow-lg text-white border border-white/10 flex flex-col md:flex-row gap-8 items-center justify-between">
        
        <div className="w-full md:w-1/3">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/10 p-2 rounded-xl">
              <Globe size={24} className="text-gold" />
            </div>
            <h3 className="text-xl font-bold text-white">Timezone Sync</h3>
          </div>
          <p className="text-sm text-white/70 mb-4">
            The conference is hosted in <strong>IST (UTC+5:30)</strong>. Select your local timezone to see when major events begin.
          </p>
          
          <select 
            value={selectedTz}
            onChange={(e) => setSelectedTz(e.target.value)}
            className="w-full bg-navy-deep border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold"
          >
            <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
            {timezones.map(tz => (
              <option key={tz} value={tz}>{tz.replace(/_/g, ' ')}</option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 gap-3">
          {EVENTS.map((evt, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="font-bold text-white text-sm">{evt.name}</div>
              <div className="flex items-center gap-2 text-gold text-sm font-medium bg-white/5 px-3 py-1.5 rounded-lg">
                <Clock size={14} />
                {selectedTz ? formatInTimezone(evt.date, selectedTz) : 'Loading...'}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
