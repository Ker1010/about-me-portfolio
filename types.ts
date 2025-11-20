export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
}

export enum SectionId {
  HERO = 'home',
  ABOUT = 'about',
  SKILLS = 'skills',
  EXPERIENCE = 'experience',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}
