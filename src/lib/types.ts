export type EmploymentType = "full-time" | "part-time" | "contract" | "hourly";
export type ExperienceLevel = "junior" | "mid" | "senior" | "expert";
export type TeachingFormat = "offline" | "online" | "hybrid";

export interface Subject {
  slug: string;
  name: string;
  icon: string;
  color: string;
}

export interface Region {
  slug: string;
  name: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  avatar?: string;
  region: string;
  subjects: string[];
  experienceYears: number;
  experienceLevel: ExperienceLevel;
  rating: number;
  reviewsCount: number;
  hourlyRate?: number;
  monthlyRate?: number;
  format: TeachingFormat;
  languages: string[];
  bio: string;
  education: Array<{ institution: string; degree: string; years: string }>;
  achievements: string[];
  available: boolean;
  updatedAt: string;
}

export interface Vacancy {
  id: string;
  title: string;
  center: {
    name: string;
    logo?: string;
    verified: boolean;
  };
  region: string;
  subject: string;
  employmentType: EmploymentType;
  format: TeachingFormat;
  experienceLevel: ExperienceLevel;
  salaryMin?: number;
  salaryMax?: number;
  description: string;
  requirements: string[];
  benefits: string[];
  createdAt: string;
  deadline?: string;
  urgent?: boolean;
  applicationsCount: number;
}
