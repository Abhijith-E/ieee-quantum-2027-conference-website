"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, FileSignature, CheckCircle2, Eye, EyeOff, Loader2, AlertCircle, Info } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { pdf, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// --- PDF Generation Styles ---
const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica', fontSize: 11, lineHeight: 1.5 },
  header: { borderBottomWidth: 2, borderBottomColor: '#1e3a8a', paddingBottom: 10, marginBottom: 20 },
  universityName: { fontSize: 24, fontWeight: 'bold', color: '#1e3a8a' },
  conferenceName: { fontSize: 14, color: '#D4AF37', marginTop: 5 },
  ieeeLine: { fontSize: 10, color: '#64748b', marginTop: 2 },
  title: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginVertical: 20, textDecoration: 'underline' },
  body: { marginBottom: 15 },
  bold: { fontWeight: 'bold' },
  signatureSection: { marginTop: 40, width: 200 },
  signLine: { borderBottomWidth: 1, borderBottomColor: '#000', marginBottom: 5, height: 30 },
  footer: { position: 'absolute', bottom: 30, left: 40, right: 40, fontSize: 8, color: '#94a3b8', borderTopWidth: 1, borderTopColor: '#e2e8f0', paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between' }
});

const InvitationDocument = ({ data }: { data: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.universityName}>CHRIST (Deemed to be University)</Text>
        <Text style={styles.conferenceName}>2027 IEEE Conference on Quantum Technologies</Text>
        <Text style={styles.ieeeLine}>Bengaluru, India | Officially Supported by IEEE</Text>
      </View>

      <Text style={styles.title}>OFFICIAL LETTER OF INVITATION</Text>

      <Text style={styles.body}>Date: {new Date().toLocaleDateString()}</Text>
      <Text style={styles.body}>To Whom It May Concern,</Text>

      <Text style={styles.body}>
        This letter is to formally invite {data.fullName} (Passport No: {data.passportNumber}, Nationality: {data.nationality}) to the 2027 IEEE Conference on Quantum Technologies and Cyber Security (CQTCS 2027).
      </Text>

      <Text style={styles.body}>
        The delegate is officially registered to attend as a {data.role}.
        {data.role === 'Presenter' && data.paperTitle ? ` They will be presenting their accepted paper titled: "${data.paperTitle}".` : ''}
      </Text>

      <Text style={styles.body}>
        The conference will be held from November 15-17, 2027, at the CHRIST (Deemed to be University) Bannerghatta Road Campus, Bengaluru, India. We kindly request that you grant them the necessary entry visa to travel to India.
      </Text>

      <View style={styles.signatureSection}>
        <View style={styles.signLine} />
        <Text style={styles.bold}>Dr. Alan Turing</Text>
        <Text>General Chair, CQTCS 2027</Text>
      </View>

      <View style={styles.footer}>
        <Text>Certificate ID: CQTCS-2027-{Math.random().toString(36).substr(2, 6).toUpperCase()}</Text>
        <Text>Verify at: cqtcs.christuniversity.in/verify</Text>
      </View>
    </Page>
  </Document>
);


// --- Zod Schema ---
const formSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  passportNumber: z.string().min(5, 'Valid passport number is required'),
  nationality: z.string().min(2, 'Nationality is required'),
  role: z.enum(['Attendee', 'Presenter', 'Keynote Speaker', 'Workshop Organizer']),
  paperTitle: z.string().optional(),
  institution: z.string().min(2, 'Institution is required'),
  email: z.string().email('Valid institutional email is required'),
  purpose: z.string().min(10, 'Purpose of visit is required'),
});
type FormData = z.infer<typeof formSchema>;

export default function InvitationForm() {
  // Mock Auth State for UI Demonstration (0: Logged Out, 1: Auth no reg, 2: Auth + Reg, 3: Completed)
  const [authState, setAuthState] = useState<number>(0);
  const [showPassport, setShowPassport] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: 'Attendee',
      purpose: 'To attend sessions and network at the 2027 IEEE Conference on Quantum Technologies.',
    }
  });

  const selectedRole = watch('role');

  const onSubmit = async (data: FormData) => {
    setIsGenerating(true);
    try {
      // 1. Mock API POST to /api/invitation-letter
      await fetch('/api/invitation-letter', { method: 'POST', body: JSON.stringify(data) });
      
      // 2. Generate PDF locally using React-PDF
      const blob = await pdf(<InvitationDocument data={data} />).toBlob();
      
      // 3. Trigger Download
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Invitation_Letter_${data.fullName.replace(/\s/g, '_')}.pdf`;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      
      // Move to success state
      setAuthState(3);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-20" id="invitation">
      
      {/* DEMO TOGGLES - Only for showcasing the complex UI states */}
      <div className="bg-slate-100 p-4 rounded-xl mb-10 flex flex-wrap items-center justify-center gap-4 text-sm font-medium border border-slate-200">
        <span className="text-slate-500 uppercase font-bold text-xs tracking-wider">UI Demo Toggles:</span>
        <button onClick={() => setAuthState(0)} className={`px-3 py-1 rounded-md ${authState === 0 ? 'bg-navy text-white' : 'bg-white text-navy'}`}>Not Auth</button>
        <button onClick={() => setAuthState(1)} className={`px-3 py-1 rounded-md ${authState === 1 ? 'bg-amber-500 text-white' : 'bg-white text-navy'}`}>Auth / Not Reg</button>
        <button onClick={() => setAuthState(2)} className={`px-3 py-1 rounded-md ${authState === 2 ? 'bg-emerald-600 text-white' : 'bg-white text-navy'}`}>Auth & Reg</button>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 bg-navy/5 text-navy rounded-2xl flex items-center justify-center shrink-0">
          <FileSignature size={28} />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-navy">Request Invitation Letter</h2>
          <p className="text-slate-500 font-medium">Generate an official letter to support your visa application.</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* STATE 0: Not Authenticated */}
        {authState === 0 && (
          <motion.div 
            key="state0"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-12 text-center flex flex-col items-center shadow-inner"
          >
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-slate-100"
            >
              <Lock size={32} className="text-gold" />
            </motion.div>
            <h3 className="text-2xl font-bold text-navy mb-3">Sign in to Request Your Letter</h3>
            <p className="text-slate-600 mb-8 max-w-md">
              Invitation letters are issued exclusively to authenticated and confirmed registered participants of the conference.
            </p>
            <div className="flex gap-4">
              <button className="bg-navy hover:bg-navy-deep text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm" onClick={() => setAuthState(2)}>
                Sign In
              </button>
              <a href="/registration" className="bg-white hover:bg-slate-100 text-navy border border-slate-200 font-bold py-3 px-8 rounded-xl transition-colors shadow-sm">
                Register Now
              </a>
            </div>
          </motion.div>
        )}

        {/* STATE 1: Authenticated but Not Registered */}
        {authState === 1 && (
          <motion.div 
            key="state1"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            className="bg-amber-50 border border-amber-200 rounded-3xl p-12 text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <AlertCircle size={32} className="text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">Registration Required</h3>
            <p className="text-amber-800 mb-8 max-w-md">
              You are signed in, but we cannot find a completed registration for your account. Complete your conference registration first to request an invitation letter.
            </p>
            <a href="/registration" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm">
              Proceed to Registration
            </a>
          </motion.div>
        )}

        {/* STATE 2: Authenticated AND Registered (Form) */}
        {authState === 2 && (
          <motion.div 
            key="state2"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Full Name (As on Passport) *</label>
                  <input {...register('fullName')} className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-gold" placeholder="John Doe" />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Passport Number *</label>
                  <div className="relative">
                    <input 
                      {...register('passportNumber')} 
                      type={showPassport ? "text" : "password"} 
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-gold" 
                      placeholder="Enter passport number" 
                    />
                    <button type="button" onClick={() => setShowPassport(!showPassport)} className="absolute right-4 top-3.5 text-slate-400 hover:text-navy">
                      {showPassport ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.passportNumber && <p className="text-red-500 text-xs mt-1">{errors.passportNumber.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Nationality *</label>
                  <input {...register('nationality')} className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-gold" placeholder="e.g., United States" />
                  {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Role at Conference *</label>
                  <select {...register('role')} className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-gold bg-white">
                    <option value="Attendee">Attendee</option>
                    <option value="Presenter">Presenter</option>
                    <option value="Keynote Speaker">Keynote Speaker</option>
                    <option value="Workshop Organizer">Workshop Organizer</option>
                  </select>
                </div>
              </div>

              <AnimatePresence>
                {selectedRole === 'Presenter' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                    <label className="block text-sm font-bold text-navy mb-2 mt-4">Paper Title *</label>
                    <input {...register('paperTitle')} className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-gold" placeholder="Title of your accepted paper" />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Institution/Organization *</label>
                  <input {...register('institution')} className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-gold" placeholder="University of Example" />
                  {errors.institution && <p className="text-red-500 text-xs mt-1">{errors.institution.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Institutional Email *</label>
                  <input {...register('email')} type="email" className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-gold" placeholder="johndoe@example.edu" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">Purpose of Visit *</label>
                <textarea {...register('purpose')} rows={3} className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-gold" />
                {errors.purpose && <p className="text-red-500 text-xs mt-1">{errors.purpose.message}</p>}
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-600 flex items-start gap-3">
                <Info size={18} className="text-slate-400 shrink-0 mt-0.5" />
                <p>Note: The official invitation letter will be generated in <strong>English</strong> only, adhering to standard diplomatic requirements for Indian visa applications.</p>
              </div>

              <button disabled={isGenerating} type="submit" className="w-full bg-gold hover:bg-gold-dark text-navy font-extrabold py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2">
                {isGenerating ? <><Loader2 size={20} className="animate-spin" /> Generating PDF & Saving Record...</> : 'Generate Invitation Letter'}
              </button>
            </form>
          </motion.div>
        )}

        {/* STATE 3: Success State */}
        {authState === 3 && (
          <motion.div 
            key="state3"
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 size={40} className="text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-900 mb-3">Letter Generated Successfully</h3>
            <p className="text-emerald-800 mb-8 max-w-md">
              Your official invitation letter has been generated and downloaded to your device. A record of this issuance has been securely stored in our registry.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setAuthState(2)} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm">
                Generate Another
              </button>
            </div>
            <p className="text-sm text-emerald-700 mt-6 mt-8 border-t border-emerald-200 pt-6">
              If your consulate specifically requires a physically stamped and mailed hard copy, please contact <a href="mailto:visa@cqtcs.in" className="font-bold underline">visa@cqtcs.in</a>.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
