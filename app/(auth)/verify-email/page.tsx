import React from 'react';
import VerifyEmailContent from '@/components/auth/VerifyEmailContent';

export const metadata = {
  title: 'Verify Email - IEEE CQTCS 2026',
  description: 'Verify your email address to activate your IEEE CQTCS 2026 account.',
};

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <VerifyEmailContent />
    </main>
  );
}
