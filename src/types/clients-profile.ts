export type SocialMediaProps = {
  linkedin_URL: string;
  personalWebSite: string;
};

export type LanguagesProps = {
  language: string;
  proficiency: string;
};

export type OrganizationProps = {
  organization: string;
  dayOfRegistration: Date;
  description: string;
  revenue: string;
  headquarter: string;
  industry: string;
  teamSize: string;
  specialists: string[];
  fundingStage: string;
  logo: string;
  website: string;
  socialLink: string;
};

export interface ClientsProfile {
  email: string;
  phoneNumber: string;
  country: string;
  birthday: null | Date;
  languages: null | LanguagesProps[];
  profileCompleteness: Number;
  socialMedia: null | SocialMediaProps[];
  organization: null | OrganizationProps;
}
