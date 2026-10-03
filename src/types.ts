export interface ProfileConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  fiverrUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;
  availability: string;
  photoUrl?: string;
}

export interface SkillItem {
  id: string;
  title: string;
  category: 'core' | 'design' | 'engineering';
  level: 'Strong' | 'Intermediate' | 'Basic' | 'Learning';
  shortDesc: string;
  fullDesc: string;
  focusArea: string;
  features: string[];
  sampleCode?: {
    language: string;
    snippet: string;
  };
}

export interface CurrentlyLearningItem {
  title: string;
  description: string;
  focusTopics: string[];
}

export interface CertificationItem {
  id: string;
  field: string;
  certificateName: string;
  issuer: string;
  date: string;
  code: string;
  certificateUrl: string;
  image: string;
  description: string;
  skillsCovered: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'portfolio' | 'landing' | 'concept';
  image: string;
  shortDesc: string;
  fullDesc: string;
  techTags: string[];
  deliverables: string[];
  client: string;
  year: string;
  liveUrl?: string;
  features: string[];
  colorTheme?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag?: string;
  deliverables?: string[];
  turnaround?: string;
  idealFor?: string;
  startingPrice?: string;
}
