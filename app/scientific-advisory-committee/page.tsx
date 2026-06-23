import SacHero from '@/components/sac/SacHero';
import SacMap from '@/components/sac/SacMap';
import SacClientWrapper from '@/components/sac/SacClientWrapper';
import { SacMember } from '@/components/sac/types';

export const revalidate = 3600;

async function getSacMembers(): Promise<SacMember[]> {
  await new Promise(resolve => setTimeout(resolve, 600));

  const mockMembers: SacMember[] = [
    { id: 'sac1', name: 'Dr. Hiroshi Sato', title: 'Professor', institution: 'University of Tokyo', country: 'Japan', region: 'Asia-Pacific', coordinates: [139.6917, 35.6895], flagEmoji: '🇯🇵' },
    { id: 'sac2', name: 'Dr. Mei Lin', title: 'Director', institution: 'Tsinghua University', country: 'China', region: 'Asia-Pacific', coordinates: [116.4074, 39.9042], flagEmoji: '🇨🇳' },
    { id: 'sac3', name: 'Dr. Alice Roberts', title: 'Senior Researcher', institution: 'CSIRO', country: 'Australia', region: 'Asia-Pacific', coordinates: [151.2093, -33.8688], flagEmoji: '🇦🇺' },
    { id: 'sac4', name: 'Dr. Rajiv Gupta', title: 'Professor', institution: 'IIT Bombay', country: 'India', region: 'Asia-Pacific', coordinates: [72.8777, 19.0760], flagEmoji: '🇮🇳' },
    { id: 'sac5', name: 'Dr. John Smith', title: 'Chair of Physics', institution: 'MIT', country: 'USA', region: 'North America', coordinates: [-71.0589, 42.3601], flagEmoji: '🇺🇸' },
    { id: 'sac6', name: 'Dr. Emily Chen', title: 'Lead Scientist', institution: 'Stanford University', country: 'USA', region: 'North America', coordinates: [-122.1697, 37.4275], flagEmoji: '🇺🇸' },
    { id: 'sac7', name: 'Dr. David Tremblay', title: 'Professor', institution: 'University of Toronto', country: 'Canada', region: 'North America', coordinates: [-79.3832, 43.6532], flagEmoji: '🇨🇦' },
    { id: 'sac8', name: 'Dr. Hans Müller', title: 'Director', institution: 'Max Planck Institute', country: 'Germany', region: 'Europe', coordinates: [11.5820, 48.1351], flagEmoji: '🇩🇪' },
    { id: 'sac9', name: 'Dr. Sophie Dubois', title: 'Professor', institution: 'Sorbonne University', country: 'France', region: 'Europe', coordinates: [2.3522, 48.8566], flagEmoji: '🇫🇷' },
    { id: 'sac10', name: 'Dr. Arthur Pendragon', title: 'Fellow', institution: 'University of Cambridge', country: 'UK', region: 'Europe', coordinates: [0.1218, 52.2053], flagEmoji: '🇬🇧' },
    { id: 'sac11', name: 'Dr. Elena Rossi', title: 'Senior Researcher', institution: 'Sapienza University', country: 'Italy', region: 'Europe', coordinates: [12.4964, 41.9028], flagEmoji: '🇮🇹' },
    { id: 'sac12', name: 'Dr. Omar Al-Fayed', title: 'Professor', institution: 'KAUST', country: 'Saudi Arabia', region: 'Middle East & Africa', coordinates: [39.1046, 22.3094], flagEmoji: '🇸🇦' },
    { id: 'sac13', name: 'Dr. Naledi Mandela', title: 'Director', institution: 'University of Cape Town', country: 'South Africa', region: 'Middle East & Africa', coordinates: [18.4232, -33.9249], flagEmoji: '🇿🇦' },
  ];

  // Sort by country then name
  return mockMembers.sort((a, b) => {
    if (a.country === b.country) return a.name.localeCompare(b.name);
    return a.country.localeCompare(b.country);
  });
}

export default async function SacPage() {
  const members = await getSacMembers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <SacHero />
      
      {/* Map Section */}
      <section className="w-full px-6 py-12 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center uppercase tracking-wide">
            Global Representation
          </h2>
          <SacMap members={members} />
        </div>
      </section>
      
      {/* Grid Section */}
      <SacClientWrapper members={members} />
    </main>
  );
}
