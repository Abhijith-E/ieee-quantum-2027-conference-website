import PatronsHero from '@/components/patrons/PatronsHero';
import ChiefPatron from '@/components/patrons/ChiefPatron';
import PatronsGrid from '@/components/patrons/PatronsGrid';
import AdvisoryPatronsGrid from '@/components/patrons/AdvisoryPatronsGrid';
import GoldDivider from '@/components/patrons/GoldDivider';
import { Patron } from '@/components/patrons/types';

export const revalidate = 3600;

async function getPatronsData() {
  await new Promise(resolve => setTimeout(resolve, 600));

  const chiefPatron: Patron = {
    id: 'cp1',
    name: 'Dr. Fr. Joseph CC',
    title: 'Vice Chancellor',
    institution: 'CHRIST (Deemed to be University)',
  };

  const patrons: Patron[] = [
    {
      id: 'p1',
      name: 'Dr. Fr. Viju P D',
      title: 'Pro-Vice Chancellor',
      institution: 'CHRIST (Deemed to be University)'
    },
    {
      id: 'p2',
      name: 'Dr. Anil Joseph Pinto',
      title: 'Registrar',
      institution: 'CHRIST (Deemed to be University)'
    },
    {
      id: 'p3',
      name: 'Fr. Jobi Xavier',
      title: 'Chief Finance Officer',
      institution: 'CHRIST (Deemed to be University)'
    }
  ];

  const advisoryPatrons: Patron[] = [
    {
      id: 'ap1',
      name: 'Dr. John Doe',
      title: 'Director of Research',
      institution: 'IEEE Quantum Council',
      isIeeeOfficer: true
    },
    {
      id: 'ap2',
      name: 'Dr. Jane Smith',
      title: 'Dean of Sciences',
      institution: 'Global Tech University'
    },
    {
      id: 'ap3',
      name: 'Dr. Robert Brown',
      title: 'Chair',
      institution: 'IEEE Region 10',
      isIeeeOfficer: true
    },
    {
      id: 'ap4',
      name: 'Dr. Emily White',
      title: 'Professor Emeritus',
      institution: 'Institute of Advanced Studies'
    },
    {
      id: 'ap5',
      name: 'Dr. Michael Green',
      title: 'Head of Quantum Labs',
      institution: 'National Science Foundation'
    },
    {
      id: 'ap6',
      name: 'Dr. Sarah Taylor',
      title: 'Principal Scientist',
      institution: 'Quantum Computing Inc.'
    },
    {
      id: 'ap7',
      name: 'Dr. David Wilson',
      title: 'President',
      institution: 'IEEE Computer Society',
      isIeeeOfficer: true
    },
    {
      id: 'ap8',
      name: 'Dr. Linda Davis',
      title: 'Vice Chancellor',
      institution: 'State University'
    }
  ];

  return { chiefPatron, patrons, advisoryPatrons };
}

export default async function PatronsPage() {
  const data = await getPatronsData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#FDFBF5] relative overflow-hidden pb-32">
      
      {/* Decorative Quantum Atom Watermark SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-5 overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-[150vw] max-w-none h-auto md:w-[80vw] text-[#D4AF37] fill-current animate-pulse duration-[10000ms]">
          <path d="M50 20 A 30 10 0 1 1 50 80 A 30 10 0 1 1 50 20 M20 50 A 10 30 0 1 1 80 50 A 10 30 0 1 1 20 50" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 50 50)" />
          <path d="M50 20 A 30 10 0 1 1 50 80 A 30 10 0 1 1 50 20 M20 50 A 10 30 0 1 1 80 50 A 10 30 0 1 1 20 50" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(-45 50 50)" />
          <circle cx="50" cy="50" r="4" />
        </svg>
      </div>

      <PatronsHero />
      
      <ChiefPatron patron={data.chiefPatron} />
      
      <GoldDivider />
      
      <PatronsGrid title="Patrons" patrons={data.patrons} />
      
      <GoldDivider />
      
      <AdvisoryPatronsGrid title="Advisory Patrons" patrons={data.advisoryPatrons} />
      
    </main>
  );
}
