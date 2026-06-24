import React from 'react';
import ResetPasswordContent from '@/components/auth/ResetPasswordContent';

export const metadata = {
  title: 'Reset Password - IEEE CQTCS 2026',
  description: 'Create a new password for your IEEE CQTCS 2026 account.',
};

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <ResetPasswordContent />
    </main>
  );
}
