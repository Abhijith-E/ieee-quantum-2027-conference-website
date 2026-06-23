import React from 'react';
import SocialHero from '@/components/social/SocialHero';
import SocialEventsList from '@/components/social/SocialEventsList';
import SocialTickets from '@/components/social/SocialTickets';

export const revalidate = 3600;

export default function SocialEventsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SocialHero />
      <SocialEventsList />
      <SocialTickets />
    </main>
  );
}
