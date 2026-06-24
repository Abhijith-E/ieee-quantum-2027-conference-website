import React from 'react';
import SignupContent from '@/components/auth/SignupContent';

export const metadata = {
  title: 'Create Account - IEEE ICQST 2027',
  description: 'Join the IEEE ICQST 2027 conference portal to manage your participation.',
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SignupContent />
    </main>
  );
}
