import {
  Card,
  Typography,
  Grid,
  CardContent,
  InputLabel,
  Select,
  InputAdornment,
  MenuItem,
  FormControl,
  Autocomplete,
  Box,
  Chip,
  TextField
} from '@mui/material';
import RecommendedExpert from 'components/cards/recommended-experts';
import useTheme from '@mui/system/useTheme';
import { useSelector, dispatch } from 'store';
import { useState, useEffect } from 'react';
import ISO6391 from 'iso-639-1';
import { loadAreasOfExpertise, loadBudgetRange } from 'store/reducers/jobs';
import { loadYearsOfExperience } from 'store/reducers/experts';

const experts = [
  {
    name: 'John Smith',
    avatar: 'assets/images/users/avatar-1.png',
    skills: ['Software Architecture', '10+ years of Expertise', 'Project Manager'],
    summary: 'Senior Software developer with over 7 years of Experience.',
    availability: 'Monday, 3 PM',
    duration: '30 Minutes',
    verifiedStatus: 'KYC Verified',
    organization: 'AVP, Google India',
    jobCompleteness: '18 Jobs completed',
    review: '4.3(12 reviewe)',
    location: 'Richad, UAE'
  },
  {
    name: 'John Smith',
    avatar: 'assets/images/users/avatar-1.png',
    skills: ['Software Architecture', '10+ years of Expertise', 'Project Manager'],
    summary: 'Senior Software developer with over 7 years of Experience.',
    availability: 'Monday, 3 PM',
    duration: '30 Minutes',
    verifiedStatus: 'KYC Verified',
    organization: 'AVP, Google India',
    jobCompleteness: '18 Jobs completed',
    review: '4.3(12 reviewe)',
    location: 'Richad, UAE'
  },
  {
    name: 'John Smith',
    avatar: 'assets/images/users/avatar-1.png',
    skills: ['Software Architecture', '10+ years of Expertise', 'Project Manager'],
    summary: 'Senior Software developer with over 7 years of Experience.',
    availability: 'Monday, 3 PM',
    duration: '30 Minutes',
    verifiedStatus: 'KYC Verified',
    organization: 'AVP, Google India',
    jobCompleteness: '18 Jobs completed',
    review: '4.3(12 reviewe)',
    location: 'Richad, UAE'
  }
];
const Search = () => {
  useEffect(() => {
    dispatch(loadBudgetRange());
    dispatch(loadAreasOfExpertise());
    dispatch(loadYearsOfExperience());
  }, [dispatch]);
  const budgetOptions = useSelector((state) => state.jobs.budgetRange);
  const skillsOptions = useSelector((state) => state.jobs.areasOfExpertise);
  const yearsOfExperienceOptions = useSelector((state) => state.experts.yearsOfExperience);
  const theme = useTheme();

  const [budget, setBudget] = useState('');
  const [skill, setSkill] = useState<string[]>([]);
  const [experience, setExperience] = useState('');
  const [language, setLanguages] = useState<string[]>([]);
  const onSkillsDelete = (item: string) => () => {
    setSkill((skill) => skill.filter((v) => v !== item));
  };
  const languages = ISO6391.getAllNames();
  const onLanguagesDelete = (item: string) => () => {
    setLanguages((language) => language.filter((v) => v != item));
  };
  return (
    <Grid container spacing={5}>
      <Grid item xs={3}>
        <Card sx={{ height: '82vh', marginTop: '5vh' }}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5vh' }}>Filter</Typography>
                <InputLabel>Budget</InputLabel>
                <Select
                  fullWidth
                  value={budget}
                  sx={{ marginBottom: '3vh' }}
                  endAdornment={
                    <InputAdornment position="end" style={{ paddingRight: '10px' }}>
                      USD/Hour
                    </InputAdornment>
                  }
                  onChange={(event) => setBudget(event?.target.value)}
                >
                  {budgetOptions.map((item: string) => (
                    <MenuItem key={item} value={item}>
                      $ {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Area/Areas of Expertise</InputLabel>
                <FormControl sx={{ width: '100%', marginBottom: '3vh' }}>
                  <Autocomplete
                    multiple
                    options={skillsOptions}
                    getOptionLabel={(option) => option}
                    value={skill}
                    onChange={(e, newValue) => setSkill(newValue as string[])}
                    renderTags={() => null}
                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Areas Of Expertise" />}
                  />
                </FormControl>
                <Box
                  sx={{
                    minHeight: '1vh'
                  }}
                >
                  {skill.map((v) => (
                    <Chip
                      key={v}
                      label={v}
                      onDelete={onSkillsDelete(v)}
                      sx={{ backgroundColor: theme.palette.primary.lighter, marginBottom: '1vh' }}
                    />
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Experience</InputLabel>
                <Select fullWidth value={experience} onChange={(event) => setExperience(event?.target.value)} sx={{ marginBottom: '3vh' }}>
                  {yearsOfExperienceOptions.map((item: string) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Language</InputLabel>
                <FormControl sx={{ borderRadius: '10px', width: '100%' }}>
                  <Autocomplete
                    multiple
                    options={languages}
                    sx={{ borderRadius: '10px' }}
                    value={language}
                    onChange={(e, newValue) => setLanguages(newValue as string[])}
                    renderTags={() => null}
                    renderInput={(params) => <TextField {...params} variant="outlined" placeholder="languages" />}
                  />
                </FormControl>
                <Box
                  mt={3}
                  sx={{
                    '& > :not(:last-child)': { marginRight: 1 },
                    '& > *': { marginBottom: 1 }
                  }}
                >
                  {language.map((item: string) => (
                    <Chip
                      key={item}
                      label={item}
                      onDelete={onLanguagesDelete(item)}
                      sx={{ marginBottom: '1vh', backgroundColor: theme.palette.primary.lighter }}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item xs={6}>
            <Typography variant="h2" sx={{ marginTop: '7vh' }}>
              Search Results
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h4"
              sx={{ color: theme.palette.primary.darker, marginTop: '7vh', display: 'flex', justifyContent: 'flex-end' }}
            >
              {experts?.length} Matches Found
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {experts?.map((item: any) => (
                <Grid item xs={12}>
                  <RecommendedExpert expert={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
