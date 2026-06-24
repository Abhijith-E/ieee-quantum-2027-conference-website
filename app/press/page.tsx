import React from 'react';
import PressHero from '@/components/press/PressHero';
import PressContent from '@/components/press/PressContent';

export const metadata = {
  title: 'Press & Media Accreditation - IEEE ICQST 2027',
  description: 'Covering the frontier of quantum science — we welcome accredited media.',
};

export default function PressPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <PressHero />
      <PressContent />
    </main>
  );
}
