import React from 'react';
import PosterHero from '@/components/poster/PosterHero';
import SpecCards from '@/components/poster/SpecCards';
import PosterAnatomy from '@/components/poster/PosterAnatomy';
import BrandingRequirements from '@/components/poster/BrandingRequirements';
import DoDontComparison from '@/components/poster/DoDontComparison';
import TemplateDownloads from '@/components/poster/TemplateDownloads';
import OnsiteInfo from '@/components/poster/OnsiteInfo';

export const revalidate = 3600;

export default function PosterGuidelinesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <PosterHero />
      <SpecCards />
      <PosterAnatomy />
      <BrandingRequirements />
      <DoDontComparison />
      <TemplateDownloads />
      <OnsiteInfo />
    </main>
  );
}
