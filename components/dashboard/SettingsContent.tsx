"use client";

import React from 'react';
import { Settings, Shield, Bell, Key } from 'lucide-react';

export default function SettingsContent() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-3xl">
      <div>
        <h1 className="text-3xl font-extrabold text-navy tracking-tight">Account Settings</h1>
        <p className="text-slate-500 mt-1">Manage your security preferences and notification settings.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8">
        <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
          <Bell size={20} className="text-slate-400" /> Notifications
        </h3>
        
        <div className="space-y-4">
          <label className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
            <div>
              <p className="font-bold text-navy text-sm">Email Notifications</p>
              <p className="text-xs text-slate-500">Receive updates about your paper submissions and review status.</p>
            </div>
            <div className="w-11 h-6 bg-gold rounded-full relative shadow-inner">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
            </div>
          </label>
          
          <label className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors">
            <div>
              <p className="font-bold text-navy text-sm">Marketing & Offers</p>
              <p className="text-xs text-slate-500">Receive information about future IEEE quantum conferences.</p>
            </div>
            <div className="w-11 h-6 bg-slate-200 rounded-full relative shadow-inner">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
            </div>
          </label>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-8">
        <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
          <Shield size={20} className="text-slate-400" /> Security
        </h3>
        
        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors text-left group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Key size={16} />
              </div>
              <div>
                <p className="font-bold text-navy text-sm">Change Password</p>
                <p className="text-xs text-slate-500">Last changed 3 months ago</p>
              </div>
            </div>
            <span className="text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Update &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}
