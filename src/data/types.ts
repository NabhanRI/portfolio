export interface SocialLink {
   name: string;
   url: string;
   icon: "github" | "linkedin" | "dribbble" | "mail" | "twitter" | "file-text";
}

export interface NavItem {
   name: string;
   href: string;
}

export interface AboutHighlight {
   text: string;
   href?: string;
}

export interface AboutContent {
   paragraphs: string[];
   /** Words/phrases to emphasize inside paragraphs (case-sensitive match) */
   highlights: string[];
}

export interface SkillCategory {
   id: string;
   category: string;
   items: string[];
}

export interface ProjectItem {
   id: string;
   title: string;
   description: string;
   technologies: string[];
   githubUrl?: string;
   liveUrl?: string;
   image?: string;
   featured: boolean;
   year: string;
   month: number;
   period: string;
   madeAt?: string;
}

export interface ExperienceItem {
   id: string;
   role: string;
   company: string;
   companyUrl?: string;
   period: string;
   description: string[];
   skills: string[];
}

export interface EducationItem {
   id: string;
   degree: string;
   institution: string;
   institutionUrl?: string;
   period: string;
   description?: string;
}

export interface CertificationItem {
   id: string;
   name: string;
   issuer: string;
   date: string;
   credentialUrl?: string;
   featured: boolean;
}