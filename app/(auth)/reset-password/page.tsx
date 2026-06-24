import React from 'react';
import ResetPasswordContent from '@/components/auth/ResetPasswordContent';

export const metadata = {
  title: 'Reset Password - IEEE ICQST 2027',
  description: 'Create a new password for your IEEE ICQST 2027 account.',
};

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <ResetPasswordContent />
    </main>
  );
}
