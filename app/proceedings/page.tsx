import React from 'react';
import ProceedingsHero from '@/components/proceedings/ProceedingsHero';
import PublicationBanner from '@/components/proceedings/PublicationBanner';
import PublicationProcess from '@/components/proceedings/PublicationProcess';
import CameraReadyInstructions from '@/components/proceedings/CameraReadyInstructions';
import PaperSpecifications from '@/components/proceedings/PaperSpecifications';
import AccessProceedings from '@/components/proceedings/AccessProceedings';

export const revalidate = 3600;

export default function ProceedingsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <ProceedingsHero />
      <PublicationBanner />
      <PublicationProcess />
      <CameraReadyInstructions />
      <PaperSpecifications />
      <AccessProceedings />
    </main>
  );
}
