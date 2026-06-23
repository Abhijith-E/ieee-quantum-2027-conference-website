export interface Speaker {
  id: string;
  name: string;
  institution: string;
  role: 'Keynote' | 'Invited' | 'Panelist';
  trackTags: string[];
  bioExcerpt: string;
  fullBio: string;
  talkTitle: string;
  researchInterests: string[];
  imageUrl: string;
  socials: {
    linkedin?: string;
    googleScholar?: string;
    website?: string;
    twitter?: string;
  };
  isKeynote: boolean;
}
