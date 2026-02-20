export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  technologies: string[];
  images?: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies?: string[];
  images?: string[];
  year?: string;
}

export interface CVData {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  summary: string;
  coreSkills: {
    languages: string[];
    infrastructure: string[];
    additional: string[];
  };
  experience: Experience[];
  projects: Project[];
  education: {
    degree: string;
    year: string;
    institution: string;
    bullets: string[];
  }[];
  languages: { name: string; level: string }[];
  interests: string[];
}
