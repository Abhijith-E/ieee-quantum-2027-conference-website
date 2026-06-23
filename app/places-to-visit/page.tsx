import React from 'react';
import ExploreHero from '@/components/places/ExploreHero';
import AttractionsGrid from '@/components/places/AttractionsGrid';
import CuratedItineraries from '@/components/places/CuratedItineraries';
import LocalFoodGuide from '@/components/places/LocalFoodGuide';
import WeatherWidget from '@/components/places/WeatherWidget';

export const revalidate = 3600;

export default function PlacesToVisitPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <ExploreHero />
      <AttractionsGrid />
      <CuratedItineraries />
      <LocalFoodGuide />
      <WeatherWidget />
    </main>
  );
}
