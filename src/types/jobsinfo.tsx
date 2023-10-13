import { Invitation } from './invitation';

export type JobInfo = {
  client_id: string;
  _id: string;
  title: string;
  visibility: string;
  liveFrom: string;
  proposals: number;
  invites: number;
  noOfMeetings: string;
  type: string;
};
export type Proposal = {
  price: string;
  message: string;
  duration: string;
  expertEmail: string;
  _id: string;
};
export type JobDetail = {
  _id: string;
  client: string;
  createdAt: string;
  duration: string;
  industry: string[];
  invitations: Invitation[];
  proposals: Proposal[];
  questions: string[];
  skills: string[];
  budgetRange: string[];
  status: string;
  title: string;
  description: string;
  tools: string[];
  type: string;
  updatedAt: string;
  visibility: string;
  weeklyCommitment: string;
  companyLocation: string;
  verifiedStatus: string;
};

export type JobInExpert = {
  _id: string;
  fullName: string;
  organization: string;
  engagement: string;
  description: string;
  startDate: string;
  country: string;
  cost: string;
  numberOfMeetings: number;
  nextMeeting: string;
};
export type Milestone = {
  milestoneNumber:number;
  price:string,
  startDate:string;
  endDate:string;
  description:string;
  expertEmail:string;
  status:string;
  createdAt:string;
  updatedAt:string;
}