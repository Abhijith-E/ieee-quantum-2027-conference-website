import React from 'react';
import ReachHero from '@/components/how-to-reach/ReachHero';
import TransportModes from '@/components/how-to-reach/TransportModes';
import TravelGuide from '@/components/how-to-reach/TravelGuide';
import ReachMap from '@/components/how-to-reach/ReachMap';

export const revalidate = 3600;

export default function HowToReachPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <ReachHero />
      <TransportModes />
      <TravelGuide />
      <ReachMap />
    </main>
  );
}
