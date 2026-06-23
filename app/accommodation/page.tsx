import React from 'react';
import AccommodationHero from '@/components/accommodation/AccommodationHero';
import UniversityAccommodation from '@/components/accommodation/UniversityAccommodation';
import RecommendedHotels from '@/components/accommodation/RecommendedHotels';
import AccommodationMap from '@/components/accommodation/AccommodationMap';

export const revalidate = 3600;

export default function AccommodationPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <AccommodationHero />
      <UniversityAccommodation />
      <RecommendedHotels />
      <AccommodationMap />
    </main>
  );
}
