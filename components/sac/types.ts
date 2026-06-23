export type Region = 'Asia-Pacific' | 'North America' | 'Europe' | 'Middle East & Africa';

export interface SacMember {
  id: string;
  name: string;
  title: string;
  institution: string;
  country: string;
  region: Region;
  coordinates: [number, number]; // [longitude, latitude]
  imageUrl?: string;
  flagEmoji?: string;
}
