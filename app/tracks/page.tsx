import TracksHero from '@/components/tracks/TracksHero';
import TracksClientWrapper, { Track } from '@/components/tracks/TracksClientWrapper';
import ChairsTable from '@/components/tracks/ChairsTable';

export const revalidate = 3600;

// Mock function to simulate fetching data from Supabase
async function getTracks(): Promise<Track[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return [
    {
      id: 'track-1-algorithms',
      title: 'Track 1: Quantum Algorithms & Complexity',
      scope: 'This track explores the design, analysis, and implementation of novel quantum algorithms. We welcome research on quantum advantage, error correction methodologies, and hybrid quantum-classical optimization techniques.',
      topics: [
        'Quantum supremacy',
        'Machine learning algorithms',
        'Optimization (QAOA, VQE)',
        'Simulation methodologies',
        'Algorithmic error correction',
        'Complexity theory'
      ],
      chair: {
        name: 'Dr. Sarah Chen',
        institution: 'MIT Quantum Lab',
        email: 's.chen@example.edu'
      }
    },
    {
      id: 'track-2-hardware',
      title: 'Track 2: Quantum Architecture & Hardware',
      scope: 'Focuses on the physical realization of quantum computers. Topics range from foundational qubit design (superconducting, trapped ion, topological) to scalable processor architectures and cryogenic control systems.',
      topics: [
        'Superconducting qubits',
        'Trapped ions',
        'Topological computing',
        'Control electronics',
        'Cryogenic systems',
        'Quantum interconnects'
      ],
      chair: {
        name: 'Prof. James K. Fowler',
        institution: 'Oxford University',
        email: 'j.fowler@example.ac.uk'
      }
    },
    {
      id: 'track-3-crypto',
      title: 'Track 3: Quantum Security & Cryptography',
      scope: 'Addresses the profound impact of quantum computing on modern cryptography. We seek papers on post-quantum cryptographic primitives, quantum key distribution (QKD) protocols, and quantum-safe network architectures.',
      topics: [
        'Post-quantum cryptography',
        'QKD networks',
        'Random number generators',
        'Security proofs',
        'Vulnerability analysis',
        'Lattice-based cryptography'
      ],
      chair: {
        name: 'Dr. Elena Rostova',
        institution: 'CERN',
        email: 'e.rostova@example.ch'
      }
    },
    {
      id: 'track-4-integration',
      title: 'Track 4: Quantum-Classical Integration',
      scope: 'Dedicated to the software and systems engineering required to bridge quantum processors with classical HPC infrastructure. Includes compiler design, intermediate representations, and cloud APIs.',
      topics: [
        'Hybrid middleware',
        'Compilers & languages',
        'Cloud APIs',
        'Resource estimation',
        'Circuit simulation',
        'HPC integration'
      ],
      chair: {
        name: 'Dr. Kenji Tanaka',
        institution: 'Tokyo Institute of Technology',
        email: 'k.tanaka@example.jp'
      }
    },
    {
      id: 'track-5-sensing',
      title: 'Track 5: Quantum Sensing & Metrology',
      scope: 'Explores the use of quantum states to achieve unprecedented precision in measurement. Applications include medical imaging, environmental monitoring, and fundamental physics tests.',
      topics: [
        'High-precision metrology',
        'Quantum imaging',
        'Environmental sensors',
        'Magnetic resonance',
        'Gravitational sensing'
      ],
      chair: {
        name: 'Prof. Alice Williams',
        institution: 'Stanford University',
        email: 'a.williams@example.edu'
      }
    },
    {
      id: 'track-6-optics',
      title: 'Track 6: Quantum Optics & Photonics',
      scope: 'Investigates the generation, manipulation, and detection of non-classical light. This track covers continuous-variable quantum computing, integrated quantum photonics, and single-photon sources.',
      topics: [
        'Integrated photonics',
        'Single-photon sources',
        'Continuous-variable QC',
        'Non-linear optics',
        'Entanglement distribution'
      ],
      chair: {
        name: 'Dr. Marcus Weber',
        institution: 'Max Planck Institute',
        email: 'm.weber@example.de'
      }
    }
  ];
}

export default async function TracksPage() {
  const tracks = await getTracks();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <TracksHero />
      <TracksClientWrapper initialTracks={tracks} />
      <ChairsTable tracks={tracks} />
    </main>
  );
}
