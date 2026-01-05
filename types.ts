
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  category: 'personal' | 'commercial';
  description: string;
  challenge: string;
  result: string;
  functionalities: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export interface RoadmapItem {
  id: string;
  type: 'education' | 'job';
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface UserProfile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    email?: string;
  };
  resumeUrl?: string;
}
