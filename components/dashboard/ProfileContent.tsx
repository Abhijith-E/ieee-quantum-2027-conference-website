"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { 
  Camera, 
  UploadCloud, 
  X, 
  Save, 
  User, 
  Building2, 
  Globe2, 
  Link as LinkIcon,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const profileSchema = z.object({
  displayName: z.string().min(2, "Name is required"),
  institution: z.string().min(2, "Institution is required"),
  country: z.string().min(1, "Country is required"),
  bio: z.string().max(500, "Bio cannot exceed 500 characters").optional(),
  orcidId: z.string().optional(),
  scholarUrl: z.string().url("Must be a valid URL").optional().or(z.literal('')),
  linkedinUrl: z.string().url("Must be a valid URL").optional().or(z.literal('')),
});

type ProfileData = z.infer<typeof profileSchema>;

export default function ProfileContent() {
  const [avatarPreview, setAvatarPreview] = useState<string | null>("https://ui-avatars.com/api/?name=Jane+Doe&background=0D1B2A&color=fff&size=200");
  const [tags, setTags] = useState<string[]>(["Quantum Computing", "Error Correction"]);
  const [tagInput, setTagInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<{type: 'success'|'error', text: string} | null>(null);

  const { register, handleSubmit, formState: { errors, isDirty } } = useForm<ProfileData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: "Jane Doe",
      institution: "MIT",
      country: "United States",
      bio: "Postdoctoral researcher focusing on topological quantum error correction codes and scalable architecture design.",
      orcidId: "0000-0001-2345-6789",
      scholarUrl: "https://scholar.google.com/citations?user=xyz",
      linkedinUrl: "https://linkedin.com/in/janedoe",
    }
  });

  // Warn on unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
  });

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const onSubmit = async (data: ProfileData) => {
    setIsSubmitting(true);
    setToastMessage(null);
    
    // Simulate API update
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Updated Profile:", { ...data, tags, avatarPreview });
    setToastMessage({ type: 'success', text: 'Profile updated successfully!' });
    setIsSubmitting(false);

    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-navy tracking-tight">My Profile</h1>
        <p className="text-slate-500 mt-1">Manage your public conference persona and research interests.</p>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-24 right-8 z-50 px-4 py-3 rounded-xl shadow-lg border flex items-center gap-3 ${
              toastMessage.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-red-50 border-red-200 text-red-800'
            }`}
          >
            {toastMessage.type === 'success' ? <CheckCircle2 size={18} className="text-emerald-500" /> : <AlertCircle size={18} className="text-red-500" />}
            <span className="font-bold text-sm">{toastMessage.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
        
        {/* Avatar Upload */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
              {avatarPreview ? (
                <img src={avatarPreview} alt="Avatar Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-slate-100 flex items-center justify-center">
                  <User size={48} className="text-slate-300" />
                </div>
              )}
            </div>
            {/* Dropzone Overlay */}
            <div {...getRootProps()} className="absolute inset-0 bg-navy/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
              <input {...getInputProps()} />
              <Camera size={24} className="text-white" />
            </div>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-navy mb-1">Profile Photo</h3>
            <p className="text-slate-500 text-sm mb-4">Upload a high-resolution headshot. JPG, PNG, or WebP. Max 2MB.</p>
            <div {...getRootProps()} className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${isDragActive ? 'border-gold bg-gold/5' : 'border-slate-200 hover:border-navy hover:bg-slate-50'}`}>
              <input {...getInputProps()} />
              <UploadCloud size={20} className="mx-auto text-slate-400 mb-2" />
              <p className="text-sm font-semibold text-navy">Click to upload or drag & drop</p>
            </div>
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-bold text-navy border-b border-slate-100 pb-4">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Display Name</label>
              <input 
                {...register("displayName")}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all"
              />
              {errors.displayName && <p className="text-red-500 text-xs">{errors.displayName.message}</p>}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Email Address <span className="text-slate-400 font-normal">(Read-only)</span></label>
              <input 
                value="jane.doe@university.edu"
                disabled
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Institution</label>
              <input 
                {...register("institution")}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all"
              />
              {errors.institution && <p className="text-red-500 text-xs">{errors.institution.message}</p>}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Country</label>
              <select 
                {...register("country")}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all appearance-none bg-white"
              >
                <option value="United States">United States</option>
                <option value="India">India</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Germany">Germany</option>
              </select>
              {errors.country && <p className="text-red-500 text-xs">{errors.country.message}</p>}
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-bold text-slate-700">Short Bio</label>
              <textarea 
                {...register("bio")}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all resize-none"
              />
              {errors.bio && <p className="text-red-500 text-xs">{errors.bio.message}</p>}
            </div>
          </div>
        </div>

        {/* Research & Links */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
          <h3 className="text-lg font-bold text-navy border-b border-slate-100 pb-4">Academic & Professional Links</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">ORCID ID</label>
              <input 
                {...register("orcidId")}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700">Google Scholar URL</label>
              <div className="relative">
                <LinkIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  {...register("scholarUrl")}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all"
                />
              </div>
              {errors.scholarUrl && <p className="text-red-500 text-xs">{errors.scholarUrl.message}</p>}
            </div>
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-bold text-slate-700">LinkedIn URL</label>
              <div className="relative">
                <LinkIcon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  {...register("linkedinUrl")}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/20 outline-none transition-all"
                />
              </div>
              {errors.linkedinUrl && <p className="text-red-500 text-xs">{errors.linkedinUrl.message}</p>}
            </div>
            
            {/* Tag Input for AI Recommendations */}
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-bold text-slate-700">Research Interests <span className="text-slate-400 font-normal">(Type and press Enter)</span></label>
              <div className="w-full p-2 rounded-xl border border-slate-200 focus-within:border-gold focus-within:ring-4 focus-within:ring-gold/20 transition-all bg-white min-h-[52px] flex flex-wrap gap-2 items-center">
                <AnimatePresence>
                  {tags.map(tag => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg flex items-center gap-1"
                    >
                      {tag}
                      <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-500 transition-colors">
                        <X size={14} />
                      </button>
                    </motion.span>
                  ))}
                </AnimatePresence>
                <input 
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleAddTag}
                  className="flex-1 min-w-[120px] bg-transparent outline-none text-sm px-2 py-1"
                  placeholder={tags.length === 0 ? "Add tags..." : ""}
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">These tags help our AI engine recommend relevant sessions to you.</p>
            </div>
          </div>
        </div>

        {/* Submit Actions */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <button type="button" className="px-6 py-3 font-bold text-slate-500 hover:text-navy transition-colors">
            Cancel
          </button>
          <button 
            type="submit"
            disabled={isSubmitting || (!isDirty && tags.length === 2 && avatarPreview !== null)} // Simplified disable logic
            className="bg-gold hover:bg-gold-dark text-navy font-bold py-3 px-8 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin"></div>
            ) : (
              <><Save size={18} /> Save Changes</>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
