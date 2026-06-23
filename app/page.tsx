import HeroSection from '@/components/home/HeroSection';
import StatsStrip from '@/components/home/StatsStrip';
import AboutSection from '@/components/home/AboutSection';
import TracksPreview from '@/components/home/TracksPreview';
import SpeakersCarousel, { Speaker } from '@/components/home/SpeakersCarousel';
import Timeline from '@/components/home/Timeline';
import SponsorsWall from '@/components/home/SponsorsWall';
import VenueTeaser from '@/components/home/VenueTeaser';
import FinalCTA from '@/components/home/FinalCTA';

// Mock function to simulate fetching data from Supabase
async function getSpeakers(): Promise<Speaker[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      institution: 'MIT Quantum Lab',
      imageUrl: ''
    },
    {
      id: '2',
      name: 'Prof. James K. Fowler',
      institution: 'Oxford University',
      imageUrl: ''
    },
    {
      id: '3',
      name: 'Dr. Elena Rostova',
      institution: 'CERN',
      imageUrl: ''
    },
    {
      id: '4',
      name: 'Dr. Kenji Tanaka',
      institution: 'Tokyo Institute of Technology',
      imageUrl: ''
    },
    {
      id: '5',
      name: 'Prof. Alice Williams',
      institution: 'Stanford University',
      imageUrl: ''
    }
  ];
}

export default async function HomePage() {
  const speakers = await getSpeakers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <TracksPreview />
      <SpeakersCarousel speakers={speakers} />
      <Timeline />
      <SponsorsWall />
      <VenueTeaser />
      <FinalCTA />
    </main>
  );
}
