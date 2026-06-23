import React from 'react';
import VenueHero from '@/components/venue/VenueHero';
import ConferenceHalls from '@/components/venue/ConferenceHalls';
import CampusFacilities from '@/components/venue/CampusFacilities';
import PhotoGallery from '@/components/venue/PhotoGallery';
import InteractiveMap from '@/components/venue/InteractiveMap';

export const revalidate = 3600;

export default function VenuePage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <VenueHero />
      <ConferenceHalls />
      <CampusFacilities />
      <PhotoGallery />
      <InteractiveMap />
    </main>
  );
}
