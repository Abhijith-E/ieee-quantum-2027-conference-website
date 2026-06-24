"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, 
  Award, 
  Download, 
  Share2, 
  QrCode,
  CheckCircle2,
  X
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

// Use an environment variable or state to toggle post-conference status
const IS_POST_CONFERENCE = process.env.NEXT_PUBLIC_POST_CONFERENCE === 'true' || true; // Set to true for demonstration

const CERTIFICATES = [
  { id: 1, type: "Participation", title: "Certificate of Participation", desc: "Awarded to all registered attendees." },
  { id: 2, type: "Presenter", title: "Certificate of Presentation", desc: "Awarded for presenting the paper 'Scalable Error Mitigation'." },
  { id: 3, type: "Best Paper", title: "Best Paper Award", desc: "Awarded for exceptional contribution to the Quantum Computing track." },
];

export default function CertificatesContent() {
  const [demoState, setDemoState] = useState<boolean>(IS_POST_CONFERENCE);
  const [verifyOpen, setVerifyOpen] = useState<number | null>(null);

  if (!demoState) {
    return (
      <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-navy tracking-tight">Certificates</h1>
            <p className="text-slate-500 mt-1">Access your official conference documents and awards.</p>
          </div>
          {/* Demo Toggle */}
          <button onClick={() => setDemoState(true)} className="text-xs text-blue-500 hover:underline">Simulate Post-Conference</button>
        </div>
        
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <Lock size={32} className="text-slate-400" />
          </div>
          <h2 className="text-2xl font-bold text-navy mb-3">Certificates Locked</h2>
          <p className="text-slate-600 max-w-md mx-auto mb-8">
            Your official certificates will be generated and available for download here automatically after the conference concludes on December 15, 2027.
          </p>
          <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold text-navy shadow-sm inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            103 Days until unlock
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-navy tracking-tight">Certificates</h1>
          <p className="text-slate-500 mt-1">Download and verify your official conference documents.</p>
        </div>
        {/* Demo Toggle */}
        <button onClick={() => setDemoState(false)} className="text-xs text-blue-500 hover:underline hidden sm:block">Simulate Locked State</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATES.map((cert) => (
          <div key={cert.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            
            {/* Certificate Mockup Preview */}
            <div className="bg-slate-100 p-6 flex items-center justify-center border-b border-slate-200">
              <div className="w-full aspect-[1.414] bg-white shadow-md border-4 border-double border-gold/40 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden group">
                {/* Decorative corners */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-navy/20"></div>
                <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-navy/20"></div>
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-navy/20"></div>
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-navy/20"></div>
                
                <div className="text-[8px] font-bold tracking-widest text-navy mb-2">IEEE ICQST 2027</div>
                <div className="text-xs font-serif italic text-gold-dark mb-1">{cert.title}</div>
                <div className="text-[6px] text-slate-400 mt-auto">ID: ICQST-{cert.id}9X2</div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Award size={32} className="text-gold" />
                </div>
              </div>
            </div>

            {/* Info & Actions */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-navy mb-1">{cert.title}</h3>
              <p className="text-sm text-slate-500 mb-6 flex-1">{cert.desc}</p>
              
              <div className="space-y-3">
                <button 
                  onClick={() => alert(`Initiating PDF Download for ${cert.type} certificate...`)}
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-bold py-2.5 px-4 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2 text-sm"
                >
                  <Download size={16} /> Download PDF
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={`https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${encodeURIComponent(cert.title)}&organizationId=1337&issueYear=2027&issueMonth=12&certUrl=https://icqst.ieee.org/verify`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 text-xs"
                  >
                    <Share2 size={14} /> Share
                  </a>
                  <button 
                    onClick={() => setVerifyOpen(cert.id)}
                    className="w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold py-2 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 text-xs"
                  >
                    <QrCode size={14} /> Verify
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>

      {/* Verification Modal */}
      <AnimatePresence>
        {verifyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setVerifyOpen(null)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-sm w-full relative z-10 shadow-2xl text-center"
            >
              <button 
                onClick={() => setVerifyOpen(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-navy transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-1">Authentic Document</h3>
              <p className="text-sm text-slate-500 mb-6">Scan this QR code to verify the cryptographic signature of this certificate on the blockchain.</p>
              
              <div className="bg-white p-4 border-2 border-slate-100 rounded-2xl mx-auto w-fit shadow-sm mb-6">
                <QRCodeSVG value={`https://icqst.ieee.org/verify/ICQST-${verifyOpen}9X2`} size={150} fgColor="#0F172A" />
              </div>

              <div className="text-xs text-slate-400 font-mono">
                Verification ID: ICQST-{verifyOpen}9X2-2027
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
