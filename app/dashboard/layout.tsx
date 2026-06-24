import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export const metadata = {
  title: 'Dashboard - IEEE ICQST 2027',
  description: 'Manage your conference experience, schedule, and submissions.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
