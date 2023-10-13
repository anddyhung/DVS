import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// types
import { SocialMediaProps, LanguagesProps, OrganizationProps, ClientsProfile } from 'types/clients-profile';

const socialMedia: SocialMediaProps[] = [
  {
    linkedin_URL: 'https://aaa.com',
    personalWebSite: 'https://bbb.com'
  }
];

const languages: LanguagesProps[] = [
  {
    language: 'English',
    proficiency: 'Fluent'
  },
  {
    language: 'Japanese',
    proficiency: 'Native'
  }
];

const organization: OrganizationProps = 
  {
    organization: 'XYZ Corporation',
    dayOfRegistration: new Date('2012-04-01'),
    description: 'About organization',
    revenue: '1 million USD',
    headquarter: 'Dubai',
    industry: 'Market Research',
    teamSize: '10-50 employees',
    specialists: ['Wonderful'],
    fundingStage: 'XXX',
    logo: 'XXX',
    website: 'https://www.XYZ.com/',
    socialLink: 'https://www.XYZ.com/'
  }
;

// initial state
const initialState: ClientsProfile = {
  email: '',
  phoneNumber: '',
  country: '',
  birthday: null,
  languages: null,
  profileCompleteness: 0,
  socialMedia: null,
  organization: null
};

// ==============================|| SLICE - MENU ||============================== //

export const fetchClient = createAsyncThunk('', async () => {
  return {
    email: 'test@email.com',
    phoneNumber: '123456',
    birthday: new Date('1997-03-14'),
    country: 'UAE',
    address: 'Dubai',
    zipcode: '',
    industry: ['Software'],
    weeklyCommitment: 3,
    projectPreference: ['projectPreference----test'],
    hourlyRate: 25,
    profileCompleteness: 70,
    verifiedStatus: true,
    tools: ['Jira', 'Confluence'],
    skills: ['React', 'Next'],
    socialMedia: socialMedia,
    languages: languages,
    organization: organization
  };
});

const clients = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchClient.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.birthday = action.payload.birthday;
      state.country = action.payload.country;
      state.languages = action.payload.languages;
      state.profileCompleteness = action.payload.profileCompleteness;
      state.socialMedia = action.payload.socialMedia;
      state.organization = action.payload.organization;
    });
  }
});

export default clients.reducer;
