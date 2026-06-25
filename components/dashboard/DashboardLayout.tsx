"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  CalendarDays, 
  FileText, 
  UserCircle, 
  CreditCard, 
  Award, 
  Settings,
  Bell,
  LogOut,
  ChevronRight
} from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'My Schedule', href: '/dashboard/schedule', icon: CalendarDays },
  { name: 'My Submissions', href: '/dashboard/submissions', icon: FileText },
  { name: 'My Profile', href: '/dashboard/profile', icon: UserCircle },
  { name: 'Registration', href: '/dashboard/registration', icon: CreditCard },
  { name: 'Certificates', href: '/dashboard/certificates', icon: Award },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

const MOCK_NOTIFICATIONS = [
  { id: 1, title: 'Paper accepted', message: 'Your paper "Quantum Error Correction" has been accepted for presentation.', time: '2 hours ago', read: false },
  { id: 2, title: 'Schedule updated', message: 'The keynote speech has been moved to 10:00 AM.', time: '5 hours ago', read: false },
  { id: 3, title: 'Registration confirmed', message: 'Your payment for the conference has been processed successfully.', time: '1 day ago', read: true },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  // Mock User Data
  const user = {
    name: "Dr. Jane Doe",
    role: "Author",
    avatar: "https://ui-avatars.com/api/?name=Jane+Doe&background=0D1B2A&color=fff",
  };

  const handleLogout = () => {
    // Simulate logout
    router.push('/login');
  };

  // Build breadcrumb from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentTabName = NAV_ITEMS.find(item => item.href === pathname)?.name || 'Dashboard';

  const currentActiveNav = hoveredNav || NAV_ITEMS.find(item => item.href === pathname)?.name;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-60 fixed inset-y-0 left-0 bg-white border-r border-slate-200 z-20">
        


        {/* User Profile Mini */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <img src={user.avatar} alt="Avatar" className="w-10 h-10 rounded-full border-2 border-slate-100" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-navy truncate">{user.name}</p>
              <div className="inline-block px-2 py-0.5 bg-gold/10 border border-gold/20 text-amber-700 text-[10px] font-bold uppercase rounded mt-0.5">
                {user.role}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav 
          className="flex-1 overflow-y-auto py-4 px-3 space-y-1 relative"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const isCurrentlyHighlighted = currentActiveNav === item.name;
            return (
              <Link 
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredNav(item.name)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors relative group ${
                  isActive || isCurrentlyHighlighted ? 'text-navy' : 'text-slate-600 hover:text-navy'
                }`}
              >
                {/* Magic Pill Indicator (follows hover, snaps to active) */}
                {isCurrentlyHighlighted && (
                  <motion.div 
                    layoutId="sidebarMagicPill"
                    className="absolute inset-0 bg-gold/10 border-l-4 border-gold rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <item.icon size={18} className={isActive || isCurrentlyHighlighted ? "text-gold" : "text-slate-400 group-hover:text-navy relative z-10"} />
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-200">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 text-sm font-semibold text-slate-500 hover:text-red-600 transition-colors w-full rounded-lg hover:bg-red-50"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:ml-60 flex flex-col min-h-screen">
        
        {/* Top bar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center text-sm font-medium text-slate-500">
            <span className="hidden sm:inline">Dashboard</span>
            <ChevronRight size={14} className="mx-2 hidden sm:inline text-slate-300" />
            <span className="text-navy font-bold">{currentTabName}</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 relative">
            <button 
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
              className="relative p-2 text-slate-400 hover:text-navy transition-colors rounded-full hover:bg-slate-50"
            >
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.1)] border border-slate-100 overflow-hidden z-50"
                >
                  <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <h3 className="font-bold text-navy">Notifications</h3>
                    <button 
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Mark all as read
                    </button>
                  </div>
                  <div className="max-h-[320px] overflow-y-auto">
                    {MOCK_NOTIFICATIONS.map((notif) => (
                      <div key={notif.id} className={`p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors cursor-pointer ${!notif.read ? 'bg-blue-50/30' : ''}`}>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className={`text-sm font-semibold ${!notif.read ? 'text-navy' : 'text-slate-700'}`}>{notif.title}</h4>
                          {!notif.read && <span className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 shrink-0"></span>}
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-2 mb-2">{notif.message}</p>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{notif.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 border-t border-slate-100 bg-slate-50/50 text-center">
                    <button 
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-sm font-bold text-slate-600 hover:text-navy transition-colors"
                    >
                      View all notifications
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 lg:p-10 pb-24 md:pb-10">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-30 flex items-center justify-around px-2 h-16 pb-safe">
        {NAV_ITEMS.slice(0, 5).map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 relative ${
                isActive ? 'text-navy' : 'text-slate-500'
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="mobileNavActive"
                  className="absolute inset-x-2 -top-px h-0.5 bg-gold"
                />
              )}
              <item.icon size={20} className={isActive ? "text-gold" : "text-slate-400"} />
              <span className="text-[10px] font-medium leading-none text-center">{item.name.replace('My ', '').replace('Registration', 'Reg')}</span>
            </Link>
          );
        })}
      </nav>

    </div>
  );
}
