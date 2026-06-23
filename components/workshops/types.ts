export type EventType = 'Workshop' | 'Tutorial';
export type Duration = 'Half Day' | 'Full Day';

export interface Organizer {
  name: string;
  institution: string;
  imageUrl?: string;
}

export interface WorkshopEvent {
  id: string;
  type: EventType;
  duration: Duration;
  title: string;
  organizer: Organizer;
  abstract: string;
  topics: string[];
  date: string;
  time: string;
  room: string;
  requiresSeparateRegistration: boolean;
}
