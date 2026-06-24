import React from 'react';
import ForgotPasswordContent from '@/components/auth/ForgotPasswordContent';

export const metadata = {
  title: 'Forgot Password - IEEE ICQST 2027',
  description: 'Reset your password for the IEEE ICQST 2027 conference portal.',
};

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <ForgotPasswordContent />
    </main>
  );
}
