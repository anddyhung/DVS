// project import
import MainCard from 'components/MainCard';
import { Select, MenuItem, Grid, Button, Stack, TextField, Typography, Box, Chip, InputLabel } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useState, useEffect } from 'react';
import ISO6391 from 'iso-639-1';
import { CloseOutlined } from '@material-ui/icons';
import ProfileCard from 'components/cards/profilecard';
import Sidebar from 'components/cards/sidebar';
import { Link } from 'react-router-dom';
import { Country } from 'country-state-city';
import { ICountry } from 'country-state-city';

interface LanguageInfo {
  languageinfo: string;
  proficiencyinfo: string;
}

// ==============================|| SAMPLE PAGE ||============================== //
const EditClientProfile = () => {
  const languages = ISO6391.getAllNames();
  const proficiencies = ['Native', 'Fluent', 'Conversational'];

  const [language, setLanguage] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [languageInfo, setLanguageInfo] = useState<LanguageInfo[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    try {
      const fetchedCountries = Country.getAllCountries();
      setCountries(fetchedCountries);
    } catch {
      setCountries([]);
    }
  }, []);

  const handleAddClick = () => {
    const newLanguageInfo = { languageinfo: language, proficiencyinfo: proficiency };
    setLanguageInfo([...languageInfo, newLanguageInfo]);
  };

  const onLanguageInfoDelete = (languageinfo: string) => () => {
    setLanguageInfo((languageInfo) => languageInfo.filter((v) => v.languageinfo !== languageinfo));
  };

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="customer" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={<Typography variant="h2">Edit Profile</Typography>}
          secondary={
            <Stack spacing={2} direction="row">
              <Button component={Link} to="/client/profile" variant="contained" sx={{ width: '9rem' }}>
                Save changes
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
                  <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
                    Full Name
                  </Typography>
                  <TextField fullWidth placeholder="Jane Doe" />
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12}>
                <Stack spacing={2}>
                  <InputLabel style={{ color: 'black' }}> Country of Residence</InputLabel>
                  <Select value={selectedCountry} onChange={(event) => setSelectedCountry(event?.target.value)}>
                    {countries?.map((item: any) => (
                      <MenuItem key={item.isoCode} value={item.isoCode}>
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
                    <DesktopDatePicker format="MM/dd/yyyy" />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={12} sx={{ marginTop: '1rem' }}>
                <Typography sx={{ mb: 1, fontSize: '1rem' }} variant="body1">
                  Language Preference
                </Typography>
                <Stack spacing={2}>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={4.5}>
                      <Select value={language} fullWidth onChange={(event) => setLanguage(event.target.value)}>
                        {languages.map((item: string | null) =>
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
                        {proficiencies.map((item: string) => (
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
                    {languageInfo.map((v) => (
                      <Box>
                        <Chip
                          variant="combined"
                          key={v.languageinfo}
                          label={
                            <Stack justifyContent="space-between" direction="row">
                              <Typography>{v.languageinfo}</Typography>
                              <Typography>{v.proficiencyinfo}</Typography>
                            </Stack>
                          }
                          deleteIcon={<CloseOutlined style={{ fontSize: '0.75rem' }} />}
                          onDelete={onLanguageInfoDelete(v.languageinfo)}
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
              <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography variant="h3">Social Media</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  LinkedIn
                </Typography>
                <TextField placeholder="Enter your link" id="url-start-adornment" />
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}></Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={0.5}>
                <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                  Personal Website
                </Typography>
                <TextField placeholder="Enter your link" id="url-start-adornment" />
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default EditClientProfile;
