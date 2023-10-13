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
import useTheme from '@mui/system/useTheme';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CompanylogoCard from 'components/cards/companylogo';
import Sidebar from 'components/cards/sidebar';
import { Country, State, City } from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';
import { dispatch } from 'store';
import { setOrganizationSettings } from 'store/reducers/settings';
import { useSelector } from 'store';
import { loadAreasOfExpertise, loadIndustries } from 'store/reducers/jobs';

// ==============================|| SAMPLE PAGE ||============================== //
const EditOrganizationProfile = () => {
  const theme = useTheme();
  useEffect(()=>{
    dispatch(loadIndustries());
    dispatch(loadAreasOfExpertise());
  })

  const organizationSetting = useSelector((state) => state.settings.organizationSetting);
  const skillLists = useSelector((state)=>state.jobs.areasOfExpertise);
  const industryList = useSelector((state)=>state.jobs.industries);
  const revenueList = ['Insurance', 'Software Engineering', 'IT & Tech'];
  const fundingList = ['Insurance', 'Software Engineering', 'IT & Tech'];
  const teamSizeList = ['1-5', '5-10', '10-20', '20-50', '50-100', '100+'];
  const logo = '/';
  const [organizationName, setCompanyName] = useState(organizationSetting?.organizationName);
  const [skills, setSkills] = useState<string[]>([]);
  const [dateOfRegisteration, setDateOfRegisteration] = useState(organizationSetting?.dayOfRegisteration);
  const [revenue, setRevenue] = useState(organizationSetting?.revenue);
  const [stageOfFunding, setStageOfFunding] = useState(organizationSetting?.fundingStage);
  const [teamSize, setTeamSize] = useState(organizationSetting?.teamSize);
  const [briefOverview, setBriefOverview] = useState(organizationSetting?.description);
  const [socialLink, setSocialLink] = useState(organizationSetting?.socialLink);
  const [websiteLink, setWebsiteLink] = useState(organizationSetting?.website);
  const [industry, setIndustry] = useState<string | undefined>(organizationSetting?.industry);
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(organizationSetting?.country);
  const [selectedState, setSelectedState] = useState<string | undefined>(organizationSetting?.state);
  const [selectedCity, setSelectedCity] = useState<string | undefined>(organizationSetting?.city);
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [states, setStates] = useState<IState[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);
  const handleClick = () => {
    dispatch(
      setOrganizationSettings({
        organizationName: organizationName,
        specialists: skills,
        dayOfRegisteration: dateOfRegisteration,
        description: briefOverview,
        revenue: revenue,
        country: selectedCountry,
        state: selectedState,
        city: selectedCity,
        industry: industry,
        teamSize: teamSize,
        fundingStage: stageOfFunding,
        logo: logo,
        website: websiteLink,
        socialLink: socialLink
      })
    );
  };
  const handleDateChange = (newValue: Date | any) => {
    setDateOfRegisteration(newValue);
  };
  const onskillsDelete = (item: string) => () => {
    setSkills((skill) => skill.filter((v) => v !== item));
  };

  useEffect(() => {
    try {
      const fetchedCountries = Country.getAllCountries();
      setCountries(fetchedCountries);
    } catch {
      setCountries([]);
    }
  }, []);
  useEffect(() => {
    try {
      const fetchedStates = State.getStatesOfCountry(selectedCountry);
      setStates(fetchedStates);
    } catch {
      setStates([]);
    }
  }, [selectedCountry]);

  useEffect(() => {
    try {
      const fetchedCities = City.getCitiesOfState(selectedCountry as string, selectedState as string);
      setCities(fetchedCities);
    } catch {
      setCities([]);
    }
  }, [selectedState]);
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="customer" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={
            <Stack direction={'row'} alignItems={'center'} gap={2}>
              <Button onClick={handleBackClick}>
                <ArrowBackIcon sx={{ fontSize: '2rem', color: theme.palette.primary.darker }} />
              </Button>
              <Typography variant="h3">Edit Starup Details</Typography>
            </Stack>
          }
        >
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Typography variant="h3">General Information</Typography>
            </Grid>
            <Grid container item xs={12} lg={6} spacing={4}>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Organization Name
                  </Typography>
                  <TextField fullWidth onChange={(event: any) => setCompanyName(event.target.value)} />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel style={{ color: 'black' }}> Country</InputLabel>
                  <Select value={selectedCountry} onChange={(event) => setSelectedCountry(event?.target.value)}>
                    {countries?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <InputLabel style={{ color: 'black' }}>State</InputLabel>
                  <Select value={selectedState} onChange={(event) => setSelectedState(event?.target.value)}>
                    {states?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  <InputLabel style={{ color: 'black' }}>City</InputLabel>
                  <Select value={selectedCity} onChange={(event) => setSelectedCity(event?.target.value)}>
                    {cities?.map((item: any) => (
                      <MenuItem key={item.name} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Industries
                  </Typography>
                  <Select value={selectedCity} onChange={(event) => setIndustry(event?.target.value)}>
                    {industryList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Specialities
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
                      renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Areas of Expertise" />}
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
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                      Date of Registration
                    </Typography>
                    <DesktopDatePicker format="MM/dd/yyyy" onChange={handleDateChange} />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Select Revenue
                  </Typography>
                  <Select value={revenue} onChange={(event: any) => setRevenue(event.target.value)}>
                    {revenueList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Stage of Funding
                  </Typography>
                  <Select value={stageOfFunding} onChange={(event: any) => setStageOfFunding(event.target.value)}>
                    {fundingList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Stack spacing={1}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Team Size
                  </Typography>
                  <Select value={teamSize} onChange={(event: any) => setTeamSize(event.target.value)}>
                    {teamSizeList?.map((item: any) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Brief Overview
                  </Typography>
                  <TextField
                    id="outlined-multiline-static"
                    fullWidth
                    multiline
                    rows={7}
                    onChange={(event: any) => setBriefOverview(event.target.value)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography variant="h3">Social Media</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    LinkedIn
                  </Typography>
                  <TextField
                    placeholder="Enter your link"
                    id="url-start-adornment"
                    onChange={(event: any) => setSocialLink(event.target.link)}
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={0.5}>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Company Website
                  </Typography>
                  <TextField
                    placeholder="Enter Email"
                    id="url-start-adornment"
                    onChange={(event: any) => setWebsiteLink(event.target.value)}
                  />
                </Stack>
              </Grid>
            </Grid>
            <Grid container item xs={12} lg={6} justifyContent="center">
              <Grid item xs={12} lg={6}>
                <CompanylogoCard />
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Stack spacing={1}>
                <Button onClick={handleClick} variant="contained" sx={{ width: '7rem' }}>
                  Save
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default EditOrganizationProfile;
