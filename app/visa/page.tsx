import React from 'react';
import VisaHero from '@/components/visa/VisaHero';
import VisaEligibility from '@/components/visa/VisaEligibility';
import VisaStepper from '@/components/visa/VisaStepper';
import InvitationForm from '@/components/visa/InvitationForm';
import VisaTips from '@/components/visa/VisaTips';

export const revalidate = 3600;

export default function VisaSupportPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <VisaHero />
      <VisaEligibility />
      <VisaStepper />
      <InvitationForm />
      <VisaTips />
    </main>
  );
}
