import React from 'react';
import DeiHero from '@/components/dei/DeiHero';
import DeiContent from '@/components/dei/DeiContent';

export const metadata = {
  title: 'Diversity, Equity & Inclusion - IEEE CQTCS 2026',
  description: 'IEEE CQTCS is actively committed to removing barriers to participation and amplifying voices from all backgrounds.',
};

export default function DeiPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <DeiHero />
      <DeiContent />
    </main>
  );
}
