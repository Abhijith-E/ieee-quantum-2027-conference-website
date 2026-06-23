import React from 'react';
import VirtualHero from '@/components/virtual/VirtualHero';
import VirtualComparison from '@/components/virtual/VirtualComparison';
import VirtualPricing from '@/components/virtual/VirtualPricing';
import TimezoneConverter from '@/components/virtual/TimezoneConverter';
import TechRequirements from '@/components/virtual/TechRequirements';
import PlatformOverview from '@/components/virtual/PlatformOverview';

export const revalidate = 3600;

export default function VirtualAttendancePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <VirtualHero />
      <VirtualComparison />
      <VirtualPricing />
      <TimezoneConverter />
      <TechRequirements />
      <PlatformOverview />
    </main>
  );
}
