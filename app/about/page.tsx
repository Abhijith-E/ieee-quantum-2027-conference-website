import AboutHero from '@/components/about/AboutHero';
import MissionScope from '@/components/about/MissionScope';
import IEEESponsorship from '@/components/about/IEEESponsorship';
import HostProfiles from '@/components/about/HostProfiles';
import WhyAttend from '@/components/about/WhyAttend';
import ChairWelcome from '@/components/about/ChairWelcome';

export const revalidate = 3600;

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AboutHero />
      <MissionScope />
      <IEEESponsorship />
      <HostProfiles />
      <WhyAttend />
      <ChairWelcome />
    </main>
  );
}
