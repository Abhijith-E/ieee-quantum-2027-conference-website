"use client";

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, BookmarkPlus, ChevronLeft, ChevronRight, Briefcase } from 'lucide-react';

// MOCK DATA for Supabase
const MOCK_JOBS = Array.from({ length: 42 }).map((_, i) => {
  const types = ['Academic', 'Industry', 'Government Lab', 'Startup'];
  const locations = ['India', 'USA', 'Europe', 'Remote'];
  const fields = ['Quantum Computing', 'Quantum Sensing', 'Quantum Communication', 'QML'];
  const jobTypes = ['Full-Time', 'Internship', 'Postdoc', 'Research Fellowship', 'PhD Position'];
  
  const type = types[i % types.length];
  
  return {
    id: `job-${i}`,
    title: `${fields[i % fields.length]} Researcher ${i + 1}`,
    organization: `Quantum Labs ${i % 5 + 1}`,
    department: 'Research & Development',
    location: locations[i % locations.length],
    countryFlag: locations[i % locations.length] === 'India' ? '🇮🇳' : locations[i % locations.length] === 'USA' ? '🇺🇸' : locations[i % locations.length] === 'Europe' ? '🇪🇺' : '🌍',
    type: type, // Academic, Industry, etc.
    jobType: jobTypes[i % jobTypes.length],
    field: fields[i % fields.length],
    tags: [fields[i % fields.length], jobTypes[i % jobTypes.length], 'Research'],
    description: 'Join our cutting-edge team to work on the next generation of quantum technologies. You will be responsible for developing novel algorithms and deploying them on NISQ devices to achieve quantum advantage.',
    postedDays: (i * 3) % 14 + 1,
    logoUrl: null
  };
});

// Mock Supabase Fetcher
const fetchJobs = async (page: number, filters: any) => {
  // Simulate network delay
  await new Promise(res => setTimeout(res, 600));
  
  let filtered = MOCK_JOBS;
  if (filters.jobType !== 'All') filtered = filtered.filter(j => j.jobType === filters.jobType);
  if (filters.field !== 'All') filtered = filtered.filter(j => j.field === filters.field);
  if (filters.location !== 'All') filtered = filtered.filter(j => j.location === filters.location);
  if (filters.orgType !== 'All') filtered = filtered.filter(j => j.type === filters.orgType);

  const start = (page - 1) * 10;
  const paginated = filtered.slice(start, start + 10);
  
  return {
    data: paginated,
    total: filtered.length,
    totalPages: Math.ceil(filtered.length / 10)
  };
};

export default function CareersBoard() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    jobType: 'All',
    field: 'All',
    location: 'All',
    orgType: 'All'
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ['jobs', page, filters],
    queryFn: () => fetchJobs(page, filters),
    placeholderData: (prev) => prev // keep previous data while fetching
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPage(1); // Reset to first page on filter
  };

  const getTypeColor = (type: string) => {
    if (type === 'Academic') return 'bg-navy text-white';
    if (type === 'Industry' || type === 'Startup') return 'bg-gold text-navy font-bold';
    return 'bg-slate-200 text-slate-700';
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12">
      
      {/* Post a Position */}
      <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center mb-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h3 className="text-xl font-bold text-navy mb-2">Are you a sponsor or partner institution?</h3>
          <p className="text-slate-600">Post your open positions directly to our global pool of quantum researchers.</p>
        </div>
        <button className="whitespace-nowrap px-6 py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold rounded-xl transition-colors flex items-center gap-2 shrink-0">
          <Briefcase size={18} /> Post a Position →
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-8">
        <select 
          value={filters.jobType}
          onChange={(e) => handleFilterChange('jobType', e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gold font-medium text-slate-700"
        >
          {['All', 'Full-Time', 'Internship', 'Postdoc', 'Research Fellowship', 'PhD Position'].map(opt => (
            <option key={opt} value={opt}>{opt === 'All' ? 'Job Type: All' : opt}</option>
          ))}
        </select>
        
        <select 
          value={filters.field}
          onChange={(e) => handleFilterChange('field', e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gold font-medium text-slate-700"
        >
          {['All', 'Quantum Computing', 'Quantum Sensing', 'Quantum Communication', 'QML'].map(opt => (
            <option key={opt} value={opt}>{opt === 'All' ? 'Field: All' : opt}</option>
          ))}
        </select>

        <select 
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gold font-medium text-slate-700"
        >
          {['All', 'India', 'USA', 'Europe', 'Remote'].map(opt => (
            <option key={opt} value={opt}>{opt === 'All' ? 'Location: All' : opt}</option>
          ))}
        </select>

        <select 
          value={filters.orgType}
          onChange={(e) => handleFilterChange('orgType', e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gold font-medium text-slate-700"
        >
          {['All', 'Academic', 'Industry', 'Government Lab', 'Startup'].map(opt => (
            <option key={opt} value={opt}>{opt === 'All' ? 'Org Type: All' : opt}</option>
          ))}
        </select>
      </div>

      {/* Stats Strip */}
      <div className="w-full bg-navy text-white px-8 py-4 rounded-xl flex items-center justify-between mb-8 shadow-md">
        <div className="font-medium tracking-wide">
          {isLoading && !data ? "Loading positions..." : `${data?.total || 0} Open Positions · 18 Organizations · 12 Countries`}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && !data && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="h-64 bg-slate-100 rounded-2xl animate-pulse"></div>
          ))}
        </div>
      )}

      {/* Job Listings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        <AnimatePresence mode="popLayout">
          {data?.data.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(15,23,42,0.1)' }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-[60px] h-[60px] bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center font-black text-slate-300 text-xl shrink-0">
                  {job.organization.substring(0,2).toUpperCase()}
                </div>
                <div className={`text-xs px-3 py-1 rounded-full font-bold ${getTypeColor(job.type)}`}>
                  {job.type}
                </div>
              </div>

              <div className="mb-4 flex-1">
                <h4 className="text-[18px] font-semibold text-navy leading-snug mb-1">{job.title}</h4>
                <p className="text-slate-600 font-medium text-sm">{job.organization} — {job.department}</p>
                <p className="text-slate-500 text-sm mt-2 flex items-center gap-1.5">
                  <MapPin size={14} className="text-slate-400" /> {job.location} {job.countryFlag}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-slate-600 text-sm line-clamp-2 mb-6">
                {job.description}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-slate-400 text-xs font-medium flex items-center gap-1.5">
                  <Clock size={14} /> Posted {job.postedDays} days ago
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-slate-400 hover:text-gold transition-colors" title="Save Job (requires login)">
                    <BookmarkPlus size={20} />
                  </button>
                  <button className="font-bold text-gold-dark hover:text-gold transition-colors">
                    Apply →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {data?.data.length === 0 && (
          <div className="col-span-full py-20 text-center text-slate-500">
            No positions match your selected filters.
          </div>
        )}
      </div>

      {/* Pagination */}
      {data && data.totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-2 border border-slate-200 rounded-lg text-navy hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          <span className="font-medium text-slate-600">
            Page {page} of {data.totalPages}
          </span>
          
          <button 
            onClick={() => setPage(p => Math.min(data.totalPages, p + 1))}
            disabled={page === data.totalPages}
            className="p-2 border border-slate-200 rounded-lg text-navy hover:bg-slate-50 disabled:opacity-50 disabled:pointer-events-none transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

    </div>
  );
}
