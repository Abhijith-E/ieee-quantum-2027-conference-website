export type SessionType = 'Keynote' | 'Oral' | 'Poster' | 'Workshop' | 'Break';
export type DayTab = 'Day 1 (Oct 12)' | 'Day 2 (Oct 13)' | 'Day 3 (Oct 14)';

export interface SpeakerInfo {
  name: string;
  institution: string;
  imageUrl?: string;
  bio?: string;
}

export interface Session {
  id: string;
  day: DayTab;
  startTime: string;
  endTime: string;
  type: SessionType;
  title: string;
  location?: string;
  speaker?: SpeakerInfo;
  abstract?: string;
}
