import PreConfHero from '@/components/pre-conference/PreConfHero';
import ExpectationsBlock from '@/components/pre-conference/ExpectationsBlock';
import PreConfWorkshopCard from '@/components/pre-conference/PreConfWorkshopCard';
import PreConfPricingTable from '@/components/pre-conference/PreConfPricingTable';
import CountdownTimer from '@/components/shared/CountdownTimer';
import { PreConfWorkshop } from '@/components/pre-conference/types';

export const revalidate = 3600;

async function getPreConfWorkshops(): Promise<PreConfWorkshop[]> {
  await new Promise(resolve => setTimeout(resolve, 600));

  return [
    {
      id: 'pc1',
      title: 'Quantum Hardware Calibration & Control',
      instructor: {
        name: 'Dr. Evelyn Carter',
        title: 'Lead Hardware Engineer',
        institution: 'Quantum Horizon Labs',
        bio: 'Pioneered pulse-level calibration techniques for superconducting qubits.',
      },
      duration: 'Full Day',
      time: '09:00 - 18:00',
      topics: [
        'OpenPulse API fundamentals',
        'Dynamical decoupling sequence design',
        'Crosstalk mitigation strategies',
        'Automated calibration graphs',
        'Readout error mitigation',
      ],
      prerequisite: 'Familiarity with Python and basic quantum gate mechanics.',
      level: 'Intermediate',
      themeColor: 'border-blue-500',
    },
    {
      id: 'pc2',
      title: 'Advanced Post-Quantum Cryptography',
      instructor: {
        name: 'Dr. Kenji Sato',
        title: 'Director of Cryptography',
        institution: 'Tokyo Institute of Technology',
        bio: 'Co-author of several NIST PQC standardized algorithms.',
      },
      duration: 'Half Day',
      time: '09:00 - 13:00',
      topics: [
        'Lattice-based cryptography deep dive',
        'Kyber and Dilithium implementation',
        'Side-channel attack vulnerabilities',
        'Migration strategies for enterprise IT',
      ],
      level: 'Advanced',
      themeColor: 'border-rose-500',
    },
    {
      id: 'pc3',
      title: 'Introduction to Quantum Sensing & Metrology',
      instructor: {
        name: 'Prof. Laura Vance',
        title: 'Professor of Physics',
        institution: 'University of Oxford',
        bio: 'Renowned for her work using NV centers in diamond for biomagnetic sensing.',
      },
      duration: 'Half Day',
      time: '14:00 - 18:00',
      topics: [
        'Nitrogen-Vacancy (NV) center basics',
        'Quantum limits of precision (Cramér-Rao bound)',
        'Squeezed states in metrology',
        'Practical applications in medical imaging',
      ],
      level: 'Beginner',
      themeColor: 'border-emerald-500',
    }
  ];
}

export default async function PreConferencePage() {
  const workshops = await getPreConfWorkshops();

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <PreConfHero />
      <ExpectationsBlock />
      
      <section className="w-full py-20 px-6 bg-slate-50 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-navy mb-4">Available Masterclasses</h2>
            <p className="text-slate-600 font-medium">
              Select a masterclass to deepen your expertise. Full-day sessions include a catered networking lunch.
            </p>
          </div>
          
          <div className="flex flex-col gap-8">
            {workshops.map(workshop => (
              <PreConfWorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </div>
      </section>

      <PreConfPricingTable />

      <section className="w-full py-24 px-6 bg-navy-deep relative z-10 flex flex-col items-center border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-10 tracking-wide text-center">
          Time Remaining Until Day 0
        </h2>
        <CountdownTimer targetDate="2027-02-16T09:00:00Z" theme="dark" />
      </section>
    </main>
  );
}
