export interface ResumeData {
  basics: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    links: { label: string; url: string }[];
  };
  experience: {
    company: string;
    role: string;
    dates: string;
    location: string;
    duration: string;
    bullets: string[];
  }[];
  skills: {
    name: string;
    category: string;
  }[];
  education: {
    institution: string;
    degree: string;
    dates: string;
    details: string;
  }[];
   projects: {
    title: string;
    stack: string[];
    bullets: string[];
    link?: string;
  }[];

  extra: string[];
}
