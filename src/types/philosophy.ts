export interface Philosopher {
  id: string;
  name: string;
  years: string;
  nationality: string;
  keyWorks?: string[];
  biography: string;
  keyIdeas: string[];
  influences: string[];
  influenced: string[];
  schools: string[];
  challenges: string[];
  quotes: string[];
  externalLinks: ExternalLink[];
}

export interface PhilosophicalIdea {
  id: string;
  name: string;
  description: string;
  originSchool: string;
  keyThinkers: string[];
  relatedIdeas: string[];
  challenges: string[];
  modernApplications: string[];
  externalLinks: ExternalLink[];
}

export interface Challenge {
  id: string;
  name: string;
  description: string;
  challenger: string;
  challenged: string;
  period: string;
  outcome: string;
  significance: string;
  externalLinks: ExternalLink[];
}

export interface ExternalLink {
  title: string;
  url: string;
  type: 'article' | 'book' | 'video' | 'course' | 'encyclopedia';
}

export interface PhilosophicalSchool {
  id: string;
  name: string;
  period: string;
  years: string;
  region: string;
  description: string;
  detailedDescription: string;
  keyIdeas: string[];
  majorThinkers: string[];
  influences: string[];
  challenged: string[];
  developments: string[];
  legacy: string;
  color: string;
  relatedSchools: string[];
  keyTexts: string[];
  externalLinks: ExternalLink[];
}

export interface PhilosophicalPeriod {
  id: string;
  name: string;
  years: string;
  description: string;
  schools: PhilosophicalSchool[];
}