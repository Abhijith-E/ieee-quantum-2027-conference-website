export type PreConfLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface PreConfInstructor {
  name: string;
  title: string;
  institution: string;
  bio: string;
  imageUrl?: string;
}

export interface PreConfWorkshop {
  id: string;
  title: string;
  instructor: PreConfInstructor;
  duration: 'Full Day' | 'Half Day';
  time: string;
  topics: string[];
  prerequisite?: string;
  level: PreConfLevel;
  themeColor: string; // e.g., 'border-blue-500'
}
