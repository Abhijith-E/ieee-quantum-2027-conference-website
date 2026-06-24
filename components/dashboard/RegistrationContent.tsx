"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Download, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Laptop
} from 'lucide-react';
import Link from 'next/link';

// Mock Registration Data
const REGISTRATION_DATA = {
  status: "Registered", // 'Not Registered' | 'Registered'
  ticketType: "Author Registration (In-Person)",
  category: "IEEE Member",
  amountPaid: "$750.00 USD",
  paymentDate: "October 12, 2025",
  transactionId: "TXN-9876543210ABC",
  workshops: [
    { id: 1, title: "Qiskit Hackathon Pre-Conference", date: "Dec 10, 2026", fee: "$50.00 USD" },
    { id: 2, title: "Tensor Network Masterclass", date: "Dec 11, 2026", fee: "$150.00 USD" }
  ]
};

export default function RegistrationContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (REGISTRATION_DATA.status === "Not Registered") {
    return (
      <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
        <div>
          <h1 className="text-3xl font-extrabold text-navy tracking-tight">Registration & Payments</h1>
          <p className="text-slate-500 mt-1">Manage your conference registration and download invoices.</p>
        </div>
        
        <div className="bg-white border border-amber-200 rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle size={40} className="text-amber-500" />
          </div>
          <h2 className="text-2xl font-bold text-navy mb-3">You are not registered yet</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">
            You need to complete your registration to secure your spot at the conference and access the technical program.
          </p>
          <Link 
            href="/registration"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-8 rounded-xl transition-colors shadow-md text-lg"
          >
            Register Now <ExternalLink size={20} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-navy tracking-tight">Registration & Payments</h1>
        <p className="text-slate-500 mt-1">Manage your conference registration, add-ons, and download receipts.</p>
      </div>

      {/* Main Registration Card */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        
        {/* Status Banner */}
        <div className="bg-emerald-50 border-b border-emerald-100 px-6 py-4 flex items-center gap-3">
          <CheckCircle2 size={24} className="text-emerald-500" />
          <div>
            <h3 className="font-bold text-emerald-800">Registration Confirmed</h3>
            <p className="text-sm text-emerald-600">Your spot at IEEE CQTCS 2026 is secured.</p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Details List */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Ticket Type</p>
                <p className="text-lg font-bold text-navy">{REGISTRATION_DATA.ticketType}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Category</p>
                  <p className="font-semibold text-slate-700">{REGISTRATION_DATA.category}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Amount Paid</p>
                  <p className="font-bold text-emerald-600">{REGISTRATION_DATA.amountPaid}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Payment Date</p>
                  <p className="font-semibold text-slate-700">{REGISTRATION_DATA.paymentDate}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Transaction ID</p>
                  <p className="font-mono text-sm font-semibold text-slate-600">{REGISTRATION_DATA.transactionId}</p>
                </div>
              </div>
            </div>

            {/* Actions Block */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center gap-4">
              <h4 className="font-bold text-navy mb-2">Documents</h4>
              
              <button 
                onClick={() => alert("Downloading Receipt PDF...")}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-gold hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <FileText size={16} />
                  </div>
                  <span className="font-bold text-sm text-slate-700 group-hover:text-navy">Payment Receipt</span>
                </div>
                <Download size={18} className="text-slate-400 group-hover:text-gold" />
              </button>

              <button 
                onClick={() => alert("Downloading Invoice PDF...")}
                className="w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-200 rounded-xl hover:border-gold hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <FileText size={16} />
                  </div>
                  <span className="font-bold text-sm text-slate-700 group-hover:text-navy">Official Invoice</span>
                </div>
                <Download size={18} className="text-slate-400 group-hover:text-gold" />
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-navy mb-6">Workshop Add-ons</h2>
        
        {REGISTRATION_DATA.workshops.length > 0 ? (
          <div className="space-y-4">
            {REGISTRATION_DATA.workshops.map((workshop) => (
              <div key={workshop.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-1 sm:mt-0">
                    <Laptop size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">{workshop.title}</h4>
                    <p className="text-sm text-slate-500">{workshop.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1 pl-14 sm:pl-0">
                  <span className="text-sm font-bold text-emerald-600">{workshop.fee}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">Paid</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500 text-sm">You have not registered for any pre-conference workshops.</p>
        )}
      </div>

    </div>
  );
}
