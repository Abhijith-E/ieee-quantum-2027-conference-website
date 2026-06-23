export interface ConferenceDeadline {
  id: string;
  title: string;
  date: string; // ISO format: 'YYYY-MM-DD'
  description?: string;
  isExtended?: boolean;
}

// Ensure the dates align with 2026 conference plans
export const DEADLINES: ConferenceDeadline[] = [
  { id: '1', title: 'Abstract Submission Opens', date: '2026-01-15' },
  { id: '2', title: 'Full Paper Submission Opens', date: '2026-02-01' },
  { id: '3', title: 'Abstract Submission Deadline', date: '2026-04-15' },
  { id: '4', title: 'Full Paper Submission Deadline', date: '2026-05-15', isExtended: true },
  { id: '5', title: 'Notification of Acceptance', date: '2026-07-01' },
  { id: '6', title: 'Camera-Ready Submission Due', date: '2026-07-31' },
  { id: '7', title: 'Early-Bird Registration Deadline', date: '2026-08-15' },
  { id: '8', title: 'Pre-Conference Workshop Day', date: '2026-10-11' },
  { id: '9', title: 'Conference Day 1', date: '2026-10-12' },
  { id: '10', title: 'Conference Day 2', date: '2026-10-13' },
  { id: '11', title: 'Conference Day 3', date: '2026-10-14' },
];
