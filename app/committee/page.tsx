import CommitteeHero from '@/components/committee/CommitteeHero';
import CommitteeClientWrapper from '@/components/committee/CommitteeClientWrapper';
import { CommitteeMember } from '@/components/committee/types';

export const revalidate = 3600;

const MOCK_COUNTRIES = ['USA', 'Canada', 'UK', 'Germany', 'France', 'China', 'Japan', 'Australia', 'India', 'Brazil', 'South Africa', 'Singapore', 'Switzerland', 'Italy'];

// Helper to generate TPC members
const generateTpcMembers = (count: number): CommitteeMember[] => {
  const members: CommitteeMember[] = [];
  const firstNames = ['James', 'Mary', 'Robert', 'Patricia', 'John', 'Jennifer', 'Michael', 'Linda', 'David', 'Elizabeth', 'William', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];
  const institutions = ['University of Technology', 'Quantum Institute', 'National Labs', 'Institute of Advanced Studies', 'Polytechnic University', 'Global Research Center', 'Tech Innovations Ltd', 'Science Academy'];

  for (let i = 0; i < count; i++) {
    const fName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const inst = institutions[Math.floor(Math.random() * institutions.length)];
    const country = MOCK_COUNTRIES[Math.floor(Math.random() * MOCK_COUNTRIES.length)];
    
    members.push({
      id: `tpc-${i}`,
      name: `${fName} ${lName}`,
      institution: `${inst}, ${country}`,
      role: 'Technical Program Committee',
      country: country,
    });
  }
  
  // Sort alphabetically
  return members.sort((a, b) => a.name.localeCompare(b.name));
};

async function getCommitteeData() {
  await new Promise(resolve => setTimeout(resolve, 600));

  const generalChairs: CommitteeMember[] = [
    { id: 'gc1', name: 'Dr. Alan Turing', institution: 'Bletchley Institute', role: 'General Chair', email: 'alan@example.com', researchAreas: ['Cryptography', 'Computing'], imageUrl: '' },
    { id: 'gc2', name: 'Dr. Ada Lovelace', institution: 'London University', role: 'General Chair', email: 'ada@example.com', researchAreas: ['Algorithms', 'Software'], imageUrl: '' }
  ];

  const programChairs: CommitteeMember[] = [
    { id: 'pc1', name: 'Prof. Richard Feynman', institution: 'Caltech', role: 'Program Chair', email: 'rf@example.com', researchAreas: ['Quantum Mechanics'], imageUrl: '' },
    { id: 'pc2', name: 'Dr. Marie Curie', institution: 'Sorbonne', role: 'Program Chair', email: 'mc@example.com', researchAreas: ['Physics', 'Radiation'], imageUrl: '' },
    { id: 'pc3', name: 'Dr. Niels Bohr', institution: 'Copenhagen Institute', role: 'Program Chair', email: 'nb@example.com', researchAreas: ['Atomic Structure'], imageUrl: '' }
  ];

  const trackChairs: CommitteeMember[] = [
    { id: 'tc1', name: 'Dr. John von Neumann', institution: 'IAS Princeton', role: 'Track Chair', email: 'jvn@example.com', researchAreas: ['Architecture'], imageUrl: '' },
    { id: 'tc2', name: 'Dr. Claude Shannon', institution: 'Bell Labs', role: 'Track Chair', email: 'cs@example.com', researchAreas: ['Information Theory'], imageUrl: '' },
    { id: 'tc3', name: 'Dr. Grace Hopper', institution: 'Vassar College', role: 'Track Chair', email: 'gh@example.com', researchAreas: ['Compilers'], imageUrl: '' },
    { id: 'tc4', name: 'Dr. Emmy Noether', institution: 'Göttingen', role: 'Track Chair', email: 'en@example.com', researchAreas: ['Mathematics'], imageUrl: '' },
    { id: 'tc5', name: 'Dr. Max Planck', institution: 'Munich', role: 'Track Chair', email: 'mp@example.com', researchAreas: ['Quantum Theory'], imageUrl: '' },
    { id: 'tc6', name: 'Dr. Erwin Schrödinger', institution: 'Vienna', role: 'Track Chair', email: 'es@example.com', researchAreas: ['Wave Mechanics'], imageUrl: '' }
  ];

  const localCommittee: CommitteeMember[] = [
    { id: 'lc1', name: 'Alice Smith', institution: 'Host University', role: 'Local Committee' },
    { id: 'lc2', name: 'Bob Jones', institution: 'Host University', role: 'Local Committee' },
    { id: 'lc3', name: 'Charlie Brown', institution: 'Host University', role: 'Local Committee' },
    { id: 'lc4', name: 'Diana Prince', institution: 'City Council', role: 'Local Committee' },
    { id: 'lc5', name: 'Evan Wright', institution: 'Tourism Board', role: 'Local Committee' },
    { id: 'lc6', name: 'Fiona Gallagher', institution: 'Host University', role: 'Local Committee' },
    { id: 'lc7', name: 'George Miller', institution: 'Host University', role: 'Local Committee' },
    { id: 'lc8', name: 'Hannah Abbott', institution: 'Host University', role: 'Local Committee' },
  ];

  const tpcMembers = generateTpcMembers(155);

  return { generalChairs, programChairs, trackChairs, localCommittee, tpcMembers };
}

export default async function CommitteePage() {
  const data = await getCommitteeData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <CommitteeHero />
      <CommitteeClientWrapper 
        generalChairs={data.generalChairs}
        programChairs={data.programChairs}
        trackChairs={data.trackChairs}
        localCommittee={data.localCommittee}
        tpcMembers={data.tpcMembers}
      />
    </main>
  );
}
