export type Expert = {
  _id: string;
  email: string;
  name: string;
  avatar: string;
  titleName: string;
  phoneNumber: string;
  birthday: string;
  country: string[];
  createdAt: string;
  updatedAt: string;
  lastLoggedIn: string;
  address: string;
  education: Education[];
  experience: Experience[];
  hourlyRate: number;
  industry: string[];
  languages: Language[];
  profileCompleteness: number;
  projectPreference: number;
  skills: string[];
  socialMedia: SocialMedia[];
  tools: string;
  weeklyCommitment: number;
  zipCode: string;
  summary: string;
  availability: string;
  verifiedStatus: string;
  organization: string;
  jobCompleteness: number;
  review: string;
  jobs: MyJobs[];
};
export type Education = {
  university: string;
  degree: string;
  subject: string;
  location: string;
  from: string;
  to: string;
  description: string;
};
export type Experience = {
  company: string;
  role: string;
  location: string;
  from: string;
  to: string;
  description: string;
};
export type Language = {
  language: string;
  preference: string;
};
export type SocialMedia = {
  type: string;
  url: string;
};
export type MyJobs = {
  title: string;
  description: string;
  from: string;
  to: string;
};
export type Feedback = {
  reviewer: string;
  review: string;
  rate: number;
};
export type ContentType = {
  title: string;
  content: string;
  date: string;
};
export type Overview = {
  about: string;
  industry: string[];
  yearsOfExperience: number;
  expertise: string[];
  tools: string[];
  skills: string[];
  previousCompanies: Company[];
};
export type Company = {
  name: string;
  industry: string;
  from: string;
  to: string;
};
