import SpeakersHero from '@/components/speakers/SpeakersHero';
import SpeakersClientWrapper from '@/components/speakers/SpeakersClientWrapper';
import { Speaker } from '@/components/speakers/types';

export const revalidate = 3600;

// Mock function to simulate fetching data from Supabase
// "Fetch: Supabase speakers table with eq('status', 'active'), sorted by is_keynote DESC, name ASC."
async function getSpeakers(): Promise<Speaker[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  const mockSpeakers: Speaker[] = [
    {
      id: 'spk-1',
      name: 'Dr. Peter Shor',
      institution: 'Massachusetts Institute of Technology',
      role: 'Keynote',
      trackTags: ['Track 1: Algorithms'],
      bioExcerpt: 'Inventor of Shor\'s algorithm for integer factorization, a breakthrough in quantum computing.',
      fullBio: 'Peter W. Shor is a professor of applied mathematics at MIT. He is known for his work on quantum computation, in particular for devising Shor\'s algorithm, a quantum algorithm for factoring exponentially faster than the best currently-known algorithm running on a classical computer. He also introduced quantum error correction. His foundational work essentially launched the field of quantum computing as a practical discipline.',
      talkTitle: 'The Next 30 Years of Quantum Error Correction',
      researchInterests: ['Quantum Algorithms', 'Error Correction', 'Information Theory'],
      imageUrl: '', // Will fall back to placeholder
      socials: {
        website: 'https://math.mit.edu/~shor/',
      },
      isKeynote: true
    },
    {
      id: 'spk-2',
      name: 'Dr. Michelle Simmons',
      institution: 'University of New South Wales',
      role: 'Keynote',
      trackTags: ['Track 2: Hardware'],
      bioExcerpt: 'Pioneer in atomic electronics and silicon quantum computing, leading the race for scalable processors.',
      fullBio: 'Michelle Simmons is a Laureate Fellow and Director of the Centre of Excellence for Quantum Computation and Communication Technology in Australia. She is internationally recognized as a pioneer in atomic electronics and quantum computing, having created the world\'s first single-atom transistor. Her team is focused on building a commercial-scale silicon quantum computer.',
      talkTitle: 'Atomic Precision in Silicon Quantum Processors',
      researchInterests: ['Atomic Electronics', 'Silicon Qubits', 'Nanotechnology'],
      imageUrl: '',
      socials: {
        linkedin: 'https://linkedin.com',
        googleScholar: 'https://scholar.google.com'
      },
      isKeynote: true
    },
    {
      id: 'spk-3',
      name: 'Prof. Artur Ekert',
      institution: 'University of Oxford',
      role: 'Invited',
      trackTags: ['Track 3: Cryptography'],
      bioExcerpt: 'Co-inventor of quantum cryptography, specializing in entanglement-based key distribution protocols.',
      fullBio: 'Artur Ekert is a Professor of Quantum Physics at the Mathematical Institute, University of Oxford. He is best known as one of the pioneers of quantum cryptography. His 1991 paper introduced entanglement-based quantum key distribution, providing a fundamental shift in how we secure communications against quantum attacks. He continues to lead research in quantum information theory.',
      talkTitle: 'Entanglement as a Cryptographic Resource',
      researchInterests: ['Quantum Cryptography', 'Entanglement', 'Foundations of QM'],
      imageUrl: '',
      socials: {
        googleScholar: 'https://scholar.google.com',
        twitter: 'https://twitter.com'
      },
      isKeynote: false
    },
    {
      id: 'spk-4',
      name: 'Dr. John Preskill',
      institution: 'Caltech',
      role: 'Panelist',
      trackTags: ['Track 1: Algorithms', 'Track 4: Integration'],
      bioExcerpt: 'Coined the term "NISQ" (Noisy Intermediate-Scale Quantum) and leads theoretical research at Caltech.',
      fullBio: 'John Preskill is the Richard P. Feynman Professor of Theoretical Physics at the California Institute of Technology, and Director of the Institute for Quantum Information and Matter (IQIM). He is a leading theoretical physicist who has made profound contributions to quantum error correction, quantum algorithms, and the understanding of NISQ-era devices. He is also a passionate educator and advocate for quantum science.',
      talkTitle: 'Beyond the NISQ Era: A Roadmap to Fault Tolerance',
      researchInterests: ['NISQ Devices', 'Fault Tolerance', 'Theoretical Physics'],
      imageUrl: '',
      socials: {
        twitter: 'https://twitter.com',
        website: 'http://theory.caltech.edu/~preskill/'
      },
      isKeynote: false
    },
    {
      id: 'spk-5',
      name: 'Dr. Krysta Svore',
      institution: 'Microsoft Quantum',
      role: 'Invited',
      trackTags: ['Track 4: Integration'],
      bioExcerpt: 'Leading the development of the Azure Quantum software stack, including Q# and resource estimation.',
      fullBio: 'Krysta Svore is a Distinguished Engineer and VP of Advanced Quantum Development at Microsoft. She leads the software side of Microsoft\'s quantum efforts, including the design of the Q# programming language, quantum compilers, and the Azure Quantum cloud platform. Her research focuses on practical algorithmic applications and bridging the gap between quantum hardware and classical software ecosystems.',
      talkTitle: 'Bridging the Gap: Software Stacks for Hybrid Computing',
      researchInterests: ['Quantum Software', 'Compilers', 'Resource Estimation'],
      imageUrl: '',
      socials: {
        linkedin: 'https://linkedin.com'
      },
      isKeynote: false
    },
    {
      id: 'spk-6',
      name: 'Prof. Jian-Wei Pan',
      institution: 'USTC',
      role: 'Keynote',
      trackTags: ['Track 6: Optics', 'Track 3: Cryptography'],
      bioExcerpt: 'Led the Micius satellite project, demonstrating the first space-to-ground quantum key distribution.',
      fullBio: 'Jian-Wei Pan is a physicist at the University of Science and Technology of China, known for his groundbreaking work in quantum entanglement. He led the team that launched Micius, the world\'s first quantum communications satellite, which successfully demonstrated space-to-ground quantum key distribution and long-distance quantum teleportation, laying the foundation for a global quantum internet.',
      talkTitle: 'Building the Global Quantum Internet',
      researchInterests: ['Quantum Optics', 'Satellite QKD', 'Quantum Networks'],
      imageUrl: '',
      socials: {
        googleScholar: 'https://scholar.google.com'
      },
      isKeynote: true
    }
  ];

  // Sort by isKeynote DESC, name ASC
  return mockSpeakers.sort((a, b) => {
    if (a.isKeynote && !b.isKeynote) return -1;
    if (!a.isKeynote && b.isKeynote) return 1;
    return a.name.localeCompare(b.name);
  });
}

export default async function SpeakersPage() {
  const speakers = await getSpeakers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <SpeakersHero />
      <SpeakersClientWrapper initialSpeakers={speakers} />
    </main>
  );
}
