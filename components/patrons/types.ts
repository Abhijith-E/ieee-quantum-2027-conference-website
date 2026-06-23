export interface Patron {
  id: string;
  name: string;
  title: string;
  institution: string;
  imageUrl?: string;
  isIeeeOfficer?: boolean; // For advisory patrons
}
