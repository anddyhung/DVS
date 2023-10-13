export type EducationProps = {
  university: string;
  degree: string;
  subject: string;
  location: string;
  from: Date;
  to: Date;
  description?: string;
};

export type ExperienceProps = {
  company: string;
  role: string;
  location: string[];
  from: Date;
  to: Date;
  description?: string[];
};

export type SocialMediaProps = {
  type: string;
  url?: string;
};

export type LanguagesProps = {
  language: string;
  proficiency: string;
};

export type FinancialStatusProps = {
  totalEarned: Number;
  currentAmount: Number;
  pendingPayment: Number;
  taxRate: Number;
};

export interface ExpertsProfile {
  email: string;
  titleName: string;
  phoneNumber: string;
  birthday: null | Date;
  country: string;
  address: string;
  summary: string;
  zipCode: string;
  industry: string[];
  weeklyCommitment: Number;
  projectPreference?: string;
  hourlyRate: Number;
  profileCompleteness: Number;
  verifiedStatus: Boolean;
  tools: string[];
  skills: string[];
  education: null | EducationProps[];
  experience: null | ExperienceProps[];
  socialMedia?: null | SocialMediaProps[];
  languages: null | LanguagesProps[];
}
