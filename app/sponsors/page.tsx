import React from 'react';
import SponsorsHero from '@/components/sponsors/SponsorsHero';
import SponsorTiers from '@/components/sponsors/SponsorTiers';
import ExhibitionHall from '@/components/sponsors/ExhibitionHall';
import BecomeSponsor from '@/components/sponsors/BecomeSponsor';

export const revalidate = 3600;

export default function SponsorsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SponsorsHero />
      <SponsorTiers />
      <ExhibitionHall />
      <BecomeSponsor />
    </main>
  );
}
