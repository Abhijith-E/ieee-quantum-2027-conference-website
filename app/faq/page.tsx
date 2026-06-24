import React from 'react';
import FaqModule from '@/components/faq/FaqModule';

export const metadata = {
  title: 'Frequently Asked Questions - IEEE ICQST 2027',
  description: 'Find answers to common questions about submission, registration, visas, the venue, and more.',
};

export default function FaqPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <FaqModule />
    </main>
  );
}
