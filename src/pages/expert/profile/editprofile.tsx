// project import
import MainCard from 'components/MainCard';
import {
  Autocomplete,
  Select,
  MenuItem,
  Grid,
  Button,
  Stack,
  TextField,
  Typography,
  Box,
  Chip,
  FormControl,
  InputLabel
} from '@mui/material';
import Sidebar from 'components/cards/sidebar';
import useTheme from '@mui/system/useTheme';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import ISO6391 from 'iso-639-1';
import { CloseOutlined } from '@material-ui/icons';
import ProfileCard from 'components/cards/profilecard';
import { Country } from 'country-state-city';
import { ICountry } from 'country-state-city';

import { ExpertsProfile } from 'types/experts-profile';
import { LanguagesProps, EducationProps, ExperienceProps } from 'types/experts-profile';

import { useSelector } from 'store';
import { useState, useEffect } from 'react';
import { dispatch } from 'store';
import { CurrentUser } from 'types/current-user';
import { fetchCurrentUser } from 'store/reducers/current-user';
import { loadToolsOfExpertise, loadAreasOfExpertise, loadIndustries } from 'store/reducers/jobs';
import { updateExpert } from 'store/reducers/experts';
import { useNavigate } from 'react-router-dom';
import { SocialMediaProps } from 'types/experts-profile';
// ==============================|| SAMPLE PAGE ||============================== //
const EditExpertProfile = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  useEffect(() => {
    dispatch(loadToolsOfExpertise());
    dispatch(loadAreasOfExpertise());
    dispatch(loadIndustries());
    dispatch(fetchCurrentUser());
  }, []);
  const currentUser: CurrentUser = useSelector((state) => state.currentUser);
  const expert = currentUser['expert'];
  const toolLists1 = useSelector((state) => state.jobs.toolsOfExpertise);
  const skillLists = useSelector((state) => state.jobs.areasOfExpertise);
  const industryLists = useSelector((state) => state.jobs.industries);
  const expertiseLists = useSelector((state) => state.jobs.areasOfExpertise);
  const languages = ISO6391.getAllNames();
  const proficiencies = ['Native', 'Fluent', 'Conversational', 'Basic'];

  const [selectedCountry, setSelectedCountry] = useState(expert?.country);
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    try {
      const fetchedCountries = Country.getAllCountries();
      setCountries(fetchedCountries);
    } catch {
      setCountries([]);
    }
  }, []);

  const [fullName, setFullName] = useState(currentUser?.fullName);
  const [summary, setSummary] = useState(expert?.summary);
  const [birthday, setBirthday] = useState<Date>(new Date(String(expert?.birthday)));

  const [language, setLanguage] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [tools, setTools] = useState<string[]>(expert?.tools);
  const [skills, setSkills] = useState<string[]>(expert?.skills);
  const [industries, setIndustries] = useState<string[]>([]);
  const [expertises, setExpertises] = useState<string[]>([]);
  const [languageInfo, setLanguageInfo] = useState<LanguagesProps[]>(expert?.languages as LanguagesProps[]);
  const [linkedinURL, setLinkedinURL] = useState('');
  const [personalWebsite, setPersonalWebsite] = useState('');
  const [socialMedia, setSocialMedia] = useState<SocialMediaProps[]>([]);
  const [university, setUniversity] = useState('');
  const [subject, setSubject] = useState('');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [education, setEducation] = useState<EducationProps[]>(expert?.education as EducationProps[]);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [startJobDate, setStartJobDate] = useState<Date>(new Date());
  const [endJobDate, setEndJobDate] = useState<Date>(new Date());
  const [experience, setExperience] = useState<ExperienceProps[]>(expert?.experience as ExperienceProps[]);
  useEffect(() => {
    const newSocialMedia = [];
    if (linkedinURL !== '') {
      const newTemp = { type: 'Linkedin', url: linkedinURL };
      newSocialMedia.push(newTemp);
    }

    if (personalWebsite !== '') {
      const newTemp = { type: 'Personal Website', url: personalWebsite };
      newSocialMedia.push(newTemp);
    }
    setSocialMedia(newSocialMedia);
  }, [linkedinURL, personalWebsite]);

  const ontoolsDelete = (title: string) => () => {
    setTools((tools) => tools.filter((v) => v !== title));
  };
  const onskillsDelete = (item: string) => () => {
    setSkills((skill) => skill.filter((v) => v !== item));
  };
  const onindustriesDelete = (item: string) => () => {
    setIndustries((industry) => industry.filter((v) => v !== item));
  };
  const onexpertisesDelete = (item: string) => () => {
    setExpertises((expertise) => expertise.filter((v) => v !== item));
  };

  const handleAddClick = () => {
    const newLanguageInfo = { language: language, proficiency: proficiency };
    setLanguageInfo([...languageInfo, newLanguageInfo]);
  };

  const handleEducation = () => {
    const newEducation: EducationProps = {
      university: university,
      subject: subject,
      from: startDate,
      to: endDate,
      degree: 'Bachelor',
      location: 'NewYork',
      description: 'AAAA'
    };

    setEducation([...education, newEducation]);
  };

  const handleExperience = () => {
    const newExperience: ExperienceProps = {
      company: company,
      role: role,
      location: industries,
      from: startJobDate,
      to: endJobDate,
      description: expertises
    };

    setExperience([...experience, newExperience]);
  };

  const onLanguageInfoDelete = (languageinfo: string) => () => {
    setLanguageInfo((languageInfo) => languageInfo.filter((v) => v.language !== languageinfo));
  };

  const handleSave = () => {
    const newExportProfile: ExpertsProfile = {
      email: '',
      titleName: 'Senior',
      summary: summary,
      phoneNumber: '4545',
      birthday: birthday,
      country: String(selectedCountry),
      languages: languageInfo,
      socialMedia: socialMedia,
      address: String(selectedCountry),
      zipCode: '123',
      industry: industries,
      weeklyCommitment: 30,
      tools: tools,
      skills: skills,
      education: education,
      hourlyRate: 20,
      projectPreference: 'React',
      experience: experience,
      profileCompleteness: 50,
      verifiedStatus: true
    };
    dispatch(updateExpert(newExportProfile));
    navigate('/expert/profile');
  };

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="expert" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={<Typography variant="h2">Edit Profile</Typography>}
          secondary={
            <Stack spacing={2} direction="row">
              <Button onClick={handleSave} variant="contained" sx={{ width: '9rem' }}>
                Save
              </Button>
            </Stack>
          }
        >
          <Grid container spacing={4}>
            <Grid item xs={12} lg={12}>
              <Typography variant="h3">General Information</Typography>
            </Grid>
            <Grid container item xs={12} lg={6} spacing={3}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Full Name
                  </Typography>
                  <TextField
                    fullWidth
                    defaultValue={currentUser?.fullName}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jane Doe"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Profile Summary
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    value={summary}
                    defaultValue={expert?.summary}
                    fullWidth
                    multiline
                    rows={7}
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel style={{ color: 'black' }}> Country</InputLabel>
                  <Select value={selectedCountry} onChange={(event) => setSelectedCountry(event?.target.value)}>
                    {countries?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={1}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                      D.O.B
                    </Typography>
                    <DesktopDatePicker
                      format="MM/dd/yyyy"
                      value={birthday}
                      onChange={(newDate: any) => {
                        setBirthday(newDate);
                      }}
                    />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} sx={{ marginTop: '0.7rem' }}>
                <Typography sx={{ mb: 1, fontSize: '1rem' }} variant="body1">
                  Language Preference
                </Typography>
                <Stack spacing={2}>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={4.5}>
                      <Select value={language} fullWidth onChange={(event) => setLanguage(event.target.value)}>
                        {languages?.map((item: string | null) =>
                          item !== null ? (
                            <MenuItem key={item} value={item}>
                              {item}
                            </MenuItem>
                          ) : null
                        )}
                      </Select>
                    </Grid>
                    <Grid item xs={4.5}>
                      <Select value={proficiency} onChange={(event) => setProficiency(event.target.value)} style={{ width: '100%' }}>
                        {proficiencies?.map((item: string) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                    <Grid item xs={2}>
                      <Button variant="outlined" onClick={handleAddClick} fullWidth style={{ marginTop: '%' }}>
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                  <Stack spacing={2}>
                    {languageInfo?.map((v) => (
                      <Box style={{ backgroundColor: theme.palette.primary.lighter }}>
                        <Chip
                          variant="combined"
                          key={v.language}
                          label={
                            <Stack justifyContent="space-between" direction="row">
                              <Typography>{v.language}</Typography>
                              <Typography>{v.proficiency}</Typography>
                            </Stack>
                          }
                          deleteIcon={<CloseOutlined style={{ fontSize: '0.75rem' }} />}
                          onDelete={onLanguageInfoDelete(v.language)}
                          sx={{
                            color: 'text.primary',
                            width: '100%',
                            '& .MuiChip-label': {
                              width: '100%'
                            }
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid container item xs={12} lg={6}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Profile Picture
                  </Typography>
                  <MainCard sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProfileCard />
                  </MainCard>
                </Stack>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="h3">Expertise</Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={2}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Tools
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={toolLists1}
                    getOptionLabel={(option) => option}
                    value={tools}
                    onChange={(e, newValue) => setTools(newValue as string[])}
                    renderTags={() => null}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Jira" />}
                  />
                </FormControl>
                <Box
                  mt={3}
                  sx={{
                    '& > :not(:last-child)': { marginRight: 1 },
                    '& > *': { marginBottom: 1 }
                  }}
                >
                  {tools?.map((v) => (
                    <Chip key={v} label={v} onDelete={ontoolsDelete(v)} />
                  ))}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={2}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Skills
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={skillLists}
                    defaultValue={skillLists}
                    getOptionLabel={(option) => option}
                    value={skills}
                    onChange={(e, newValue) => setSkills(newValue as string[])}
                    renderTags={() => null}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Software Development" />}
                  />
                </FormControl>
                <Box
                  mt={3}
                  sx={{
                    '& > :not(:last-child)': { marginRight: 1 },
                    '& > *': { marginBottom: 1 }
                  }}
                >
                  {skills.map((v) => (
                    <Chip key={v} label={v} onDelete={onskillsDelete(v)} />
                  ))}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant="h3">Work History</Typography>
                <Button variant="outlined" sx={{ width: '9rem' }} onClick={handleExperience}>
                  Add New
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Job Title
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Senior Software Developer"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Company
                </Typography>
                <TextField fullWidth placeholder="XYZ Corporation" value={company} onChange={(event) => setCompany(event.target.value)} />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={2}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Industry
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={industryLists}
                    defaultValue={industryLists}
                    getOptionLabel={(option) => option}
                    value={industries}
                    onChange={(e, newValue) => setIndustries(newValue as string[])}
                    renderTags={() => null}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Type here" />}
                  />
                </FormControl>
                <Box
                  mt={3}
                  sx={{
                    '& > :not(:last-child)': { marginRight: 1 },
                    '& > *': { marginBottom: 1 }
                  }}
                >
                  {industries.map((v) => (
                    <Chip key={v} label={v} onDelete={onindustriesDelete(v)} />
                  ))}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={2}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Expertise
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={expertiseLists}
                    defaultValue={expertiseLists}
                    getOptionLabel={(option) => option}
                    value={expertises}
                    onChange={(e, newValue) => setExpertises(newValue as string[])}
                    renderTags={() => null}
                    sx={{ width: '100%' }}
                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Software Development" />}
                  />
                </FormControl>
                <Box
                  mt={3}
                  sx={{
                    '& > :not(:last-child)': { marginRight: 1 },
                    '& > *': { marginBottom: 1 }
                  }}
                >
                  {expertises.map((v) => (
                    <Chip key={v} label={v} onDelete={onexpertisesDelete(v)} />
                  ))}
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={1}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Start Date
                  </Typography>
                  <DesktopDatePicker
                    format="MM/dd/yyyy"
                    onChange={(startJobDate: any) => {
                      setStartJobDate(startJobDate);
                    }}
                  />
                </LocalizationProvider>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={1}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    End Date
                  </Typography>
                  <DesktopDatePicker
                    format="MM/dd/yyyy"
                    onChange={(endJobDate: any) => {
                      setEndJobDate(endJobDate);
                    }}
                  />
                </LocalizationProvider>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant="h3">Education</Typography>
                <Button variant="outlined" sx={{ width: '9rem' }} onClick={handleEducation}>
                  Add
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Course Name
                </Typography>
                <TextField fullWidth placeholder="Senior Software Developer" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  College
                </Typography>
                <TextField fullWidth placeholder="XYZ Corporation" value={university} onChange={(e) => setUniversity(e.target.value)} />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={1}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Start Date
                  </Typography>
                  <DesktopDatePicker
                    format="MM/dd/yyyy"
                    onChange={(startDate: any) => {
                      setStartDate(startDate);
                    }}
                  />
                </LocalizationProvider>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={1}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    End Date
                  </Typography>
                  <DesktopDatePicker
                    format="MM/dd/yyyy"
                    onChange={(endDate: any) => {
                      setEndDate(endDate);
                    }}
                  />
                </LocalizationProvider>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant="h3">Social Media</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  LinkedIn
                </Typography>
                <TextField
                  value={linkedinURL}
                  placeholder="Enter your link"
                  id="url-start-adornment"
                  onChange={(e) => setLinkedinURL(e.target.value)}
                />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Personal Website
                </Typography>
                <TextField
                  value={personalWebsite}
                  placeholder="Enter your link"
                  id="url-start-adornment"
                  onChange={(e) => setPersonalWebsite(e.target.value)}
                />
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default EditExpertProfile;
