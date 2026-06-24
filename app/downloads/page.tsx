import React from 'react';
import DownloadsHero from '@/components/downloads/DownloadsHero';
import DownloadsGrid from '@/components/downloads/DownloadsGrid';

export const metadata = {
  title: 'Downloads Hub - IEEE CQTCS 2026',
  description: 'Official conference resources, templates, guides, and branding materials.',
};

export default function DownloadsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50/50">
      <DownloadsHero />
      <DownloadsGrid />
    </main>
  );
}
