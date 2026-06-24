import React from 'react';
import CareersHero from '@/components/careers/CareersHero';
import CareersBoard from '@/components/careers/CareersBoard';

export const revalidate = 3600;

export default function CareersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <CareersHero />
      <CareersBoard />
    </main>
  );
}
