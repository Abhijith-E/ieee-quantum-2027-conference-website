import React from 'react';
import AwardsHero from '@/components/awards/AwardsHero';
import AwardCards from '@/components/awards/AwardCards';

export const metadata = {
  title: 'Best Paper Awards - IEEE CQTCS 2026',
  description: 'Recognizing excellence in quantum science and computer engineering research.',
};

export default function AwardsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <AwardsHero />
      <AwardCards />
    </main>
  );
}
