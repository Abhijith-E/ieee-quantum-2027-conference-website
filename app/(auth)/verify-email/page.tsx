import React from 'react';
import VerifyEmailContent from '@/components/auth/VerifyEmailContent';

export const metadata = {
  title: 'Verify Email - IEEE ICQST 2027',
  description: 'Verify your email address to activate your IEEE ICQST 2027 account.',
};

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <VerifyEmailContent />
    </main>
  );
}
