import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactContent from '@/components/contact/ContactContent';

export const metadata = {
  title: 'Contact Us - IEEE CQTCS 2026',
  description: 'Get in touch with the organizing committee for IEEE CQTCS 2026.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <ContactHero />
      <ContactContent />
    </main>
  );
}
