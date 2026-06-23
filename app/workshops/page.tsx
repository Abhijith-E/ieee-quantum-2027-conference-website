import WorkshopsHero from '@/components/workshops/WorkshopsHero';
import WorkshopsClientWrapper from '@/components/workshops/WorkshopsClientWrapper';
import { WorkshopEvent } from '@/components/workshops/types';

export const revalidate = 3600;

async function getWorkshopsData(): Promise<WorkshopEvent[]> {
  await new Promise(resolve => setTimeout(resolve, 600));

  return [
    {
      id: 'w1',
      type: 'Workshop',
      duration: 'Full Day',
      title: 'Quantum Machine Learning in Practice',
      organizer: {
        name: 'Dr. Maria Garcia',
        institution: 'Stanford University',
      },
      abstract: 'This full-day workshop offers a deep dive into implementing quantum machine learning algorithms using Qiskit and PennyLane. Participants will start with the theoretical foundations of parameterized quantum circuits and build up to training variational quantum classifiers on real hardware. We will cover essential techniques like barren plateau mitigation and hardware-efficient ansatz design. Please bring a laptop with Python installed.',
      topics: ['QML', 'Variational Algorithms', 'PennyLane', 'Qiskit'],
      date: 'Oct 11, 2026',
      time: '09:00 - 17:00',
      room: 'Lab 1',
      requiresSeparateRegistration: true
    },
    {
      id: 'w2',
      type: 'Workshop',
      duration: 'Half Day',
      title: 'Topological Quantum Error Correction',
      organizer: {
        name: 'Dr. James Holden',
        institution: 'Quantum Horizon Labs',
      },
      abstract: 'An intensive half-day session focused on surface codes and lattice surgery. We will analyze the latest decoder architectures, including Union-Find and matching-based decoders, examining their threshold performance. The workshop will include a hands-on session using the Stim simulator.',
      topics: ['Error Correction', 'Surface Codes', 'Decoders', 'Stim'],
      date: 'Oct 11, 2026',
      time: '13:00 - 17:00',
      room: 'Room A',
      requiresSeparateRegistration: true
    },
    {
      id: 't1',
      type: 'Tutorial',
      duration: 'Half Day',
      title: 'Introduction to Quantum Cryptography Protocols',
      organizer: {
        name: 'Dr. Sarah Lee',
        institution: 'Institute for Quantum Computing',
      },
      abstract: 'A comprehensive tutorial designed for cybersecurity professionals transitioning into the quantum domain. This session covers the BB84 protocol, E91 protocol, and practical challenges in quantum key distribution (QKD) such as photon loss and detector blinding attacks.',
      topics: ['QKD', 'BB84', 'Cybersecurity', 'Entanglement'],
      date: 'Oct 11, 2026',
      time: '09:00 - 12:30',
      room: 'Room B',
      requiresSeparateRegistration: false
    },
    {
      id: 't2',
      type: 'Tutorial',
      duration: 'Full Day',
      title: 'Building Compilers for Superconducting Qubits',
      organizer: {
        name: 'Dr. Robert Chen',
        institution: 'IBM Quantum',
      },
      abstract: 'Learn how to optimize quantum circuits for noisy intermediate-scale quantum (NISQ) devices. This tutorial covers pulse-level control, dynamical decoupling, and routing algorithms tailored specifically for heavy-hex superconducting architectures.',
      topics: ['Compilers', 'Superconducting Qubits', 'Optimization', 'Pulse Control'],
      date: 'Oct 11, 2026',
      time: '09:00 - 17:00',
      room: 'Lab 2',
      requiresSeparateRegistration: true
    }
  ];
}

export default async function WorkshopsPage() {
  const events = await getWorkshopsData();

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 relative pb-32">
      <WorkshopsHero />
      <WorkshopsClientWrapper events={events} />
    </main>
  );
}
