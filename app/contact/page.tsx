import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactContent from '@/components/contact/ContactContent';

export const metadata = {
  title: 'Contact Us - IEEE ICQST 2027',
  description: 'Get in touch with the organizing committee for IEEE ICQST 2027.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <ContactHero />
      <ContactContent />
    </main>
  );
}
