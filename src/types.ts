export interface Project {
  title: string;
  description: string;
  year: number;
  link: string;
  audio?: string;
  image: {};
}

export interface Participant {
  id: string;
  name: string;
  role: string;
  description: string;
  audio?: string;
  link: string;
  projects: Project[];
  image: {};
}

export interface Album {
  title: string;
  description: string;
  year: number;
  link: string;
  participants: Participant[];
  audio: {};
  image: {};
}