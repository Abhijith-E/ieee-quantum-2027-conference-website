import React from 'react';
import SignupContent from '@/components/auth/SignupContent';

export const metadata = {
  title: 'Create Account - IEEE CQTCS 2026',
  description: 'Join the IEEE CQTCS 2026 conference portal to manage your participation.',
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SignupContent />
    </main>
  );
}
