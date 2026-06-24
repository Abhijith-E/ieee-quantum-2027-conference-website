import React from 'react';
import EthicsHero from '@/components/ethics/EthicsHero';
import EthicsContent from '@/components/ethics/EthicsContent';

export const metadata = {
  title: 'Code of Conduct & Ethics - IEEE ICQST 2027',
  description: 'IEEE ICQST Conference is committed to a respectful, inclusive, and rigorous scientific environment.',
};

export default function EthicsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <EthicsHero />
      <EthicsContent />
    </main>
  );
}
