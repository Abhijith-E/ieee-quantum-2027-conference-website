import React from 'react';
import DatesHero from '@/components/dates/DatesHero';
import DatesTimeline from '@/components/dates/DatesTimeline';
import { DEADLINES } from '@/components/dates/data';

export const revalidate = 3600;

export default function ImportantDatesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 relative pb-32">
      <DatesHero deadlines={DEADLINES} />
      <DatesTimeline deadlines={DEADLINES} />
    </main>
  );
}
