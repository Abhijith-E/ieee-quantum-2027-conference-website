import React from 'react';
import LoginContent from '@/components/auth/LoginContent';

export const metadata = {
  title: 'Sign In - IEEE ICQST 2027',
  description: 'Sign in to access your dashboard, schedule, and submissions.',
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <LoginContent />
    </main>
  );
}
