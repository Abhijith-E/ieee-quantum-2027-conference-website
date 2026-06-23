export type CommitteeRole = 'General Chair' | 'Program Chair' | 'Track Chair' | 'Local Committee' | 'Technical Program Committee';

export interface CommitteeMember {
  id: string;
  name: string;
  institution: string;
  role: CommitteeRole;
  country?: string; // Important for TPC
  email?: string;
  imageUrl?: string;
  researchAreas?: string[]; // For chairs
}
