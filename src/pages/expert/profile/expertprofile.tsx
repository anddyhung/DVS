// project import
import MainCard from 'components/MainCard';
import { Grid, Button, Stack, Typography, Box, Rating } from '@mui/material';
import Sidebar from 'components/cards/sidebar';
import useTheme from '@mui/system/useTheme';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import UserCard from 'components/cards/usercard';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';

import { useSelector } from 'store';
import { CurrentUser } from 'types/current-user';
import { fetchCurrentUser } from 'store/reducers/current-user';
import { useState, useEffect } from 'react';
import { dispatch } from 'store';
// ==============================|| SAMPLE PAGE ||============================== //
const ExpertProfile = () => {
  const theme = useTheme();
  const [ratingValue, setRatingValue] = useState(4); // Initialize ratingValue with a value of 4

  const handleRatingChange = (event: any, newValue: any) => {
    setRatingValue(newValue);
  };
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  const currentUser: CurrentUser = useSelector((state) => state.currentUser);

  const expert = currentUser['expert'];

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="expert" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard
          sx={{ p: 1.5 }}
          title={<Typography variant="h2">My Profile</Typography>}
          secondary={
            <Stack direction={'row'} columnGap={3}>
              <Button variant="outlined" sx={{ width: '9rem' }}>
                See Public View
              </Button>
              <Button component={Link} to="/expert/edit-profile" variant="contained" sx={{ width: '9rem' }}>
                Edit Profile
              </Button>
            </Stack>
          }
        >
          <Grid container spacing={5}>
            <Grid container item xs={12} sm={6} md={6} lg={6}>
              <UserCard
                fullName={currentUser?.fullName}
                professionalRole="Senior Software Developer"
                LinkedIn="LinkedIn"
                Youtube="Youtube"
                Twitter="Twitter"
              />
            </Grid>
            <Grid container item xs={12} sm={6} md={6} lg={6} justifyContent={'space-evenly'}>
              <Grid container item xs={12}>
                <Grid item xs={12} lg={4}></Grid>
                <Grid item xs={12} lg={8}>
                  <MainCard sx={{ height: '100%' }}>
                    <Stack spacing={3.1}>
                      <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography variant="h5">Total Earnings</Typography>
                        <Typography variant="h5">$ 4000</Typography>
                      </Stack>
                      <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography variant="h5">Completed Jobs</Typography>
                        <Typography variant="h5">20</Typography>
                      </Stack>
                      <Stack direction={'row'} justifyContent={'space-between'}>
                        <Stack direction={'row'} spacing={2}>
                          <Rating name="simple-controlled" value={ratingValue} onChange={handleRatingChange} readOnly />
                          <Typography variant="h5" style={{ color: 'rgb(250,175,0)' }}>
                            {ratingValue}/5
                          </Typography>
                        </Stack>
                        <Typography variant="h5" style={{ color: theme.palette.primary.darker }}>
                          (20 Reviews)
                        </Typography>
                      </Stack>
                    </Stack>
                  </MainCard>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Stack spacing={0.5}>
                <Typography variant="h4">About John</Typography>
                <Box style={{ border: 'none', boxShadow: 'none', wordWrap: 'break-word' }}>{expert?.summary}</Box>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="h4" mb={2}>
                1:1 Consultancy
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6} lg={4}>
                  <MainCard border={false} boxShadow sx={{ width: '100%', backgroundColor: theme.palette.primary.lighter }}>
                    <Grid container xs={12} lg={12} mb={4} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="h4">Let's Connect!</Typography>
                      <Typography variant="h6">45 Min</Typography>
                    </Grid>
                    <Grid container xs={12} lg={12} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="h4">AED 100</Typography>
                      <ArrowForwardIcon />
                    </Grid>
                  </MainCard>
                </Grid>
                <Grid item xs={6} lg={4}>
                  <MainCard border={false} boxShadow sx={{ width: '100%', backgroundColor: theme.palette.primary.lighter }}>
                    <Grid container xs={12} lg={12} mb={4} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="h4">Let's Connect!</Typography>
                      <Typography variant="h6">45 Min</Typography>
                    </Grid>
                    <Grid container xs={12} lg={12} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="h4">AED 100</Typography>
                      <ArrowForwardIcon />
                    </Grid>
                  </MainCard>
                </Grid>
                <Grid item xs={6} lg={4}>
                  <MainCard border={false} boxShadow sx={{ width: '100%', backgroundColor: theme.palette.primary.lighter }}>
                    <Grid container xs={12} lg={12} mb={4} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="h4">Let's Connect!</Typography>
                      <Typography variant="h6">45 Min</Typography>
                    </Grid>
                    <Grid container xs={12} lg={12} alignItems={'center'} justifyContent={'space-between'}>
                      <Typography variant="h4">AED 100</Typography>
                      <ArrowForwardIcon />
                    </Grid>
                  </MainCard>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} lg={12} spacing={3}>
              <Grid item xs={12} lg={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Industry</Typography>
                  <Typography variant="body1">{expert?.industry.join(', ')}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Years of Experience</Typography>
                  <Typography variant="body1">8 Years</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Expertise</Typography>
                  <Typography variant="body1">Analytics, IA</Typography>
                </Stack>
              </Grid>
            </Grid>
            <Grid container item xs={12} lg={12} spacing={3}>
              <Grid item xs={12} lg={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Tools</Typography>
                  <Typography variant="body1">{expert?.tools.join(', ')}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={1}>
                  <Typography variant="h4">Skills</Typography>
                  <Typography variant="body1">{expert?.skills.join(', ')}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}></Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="h4" mb={2}>
                Languages
              </Typography>
              <Grid container spacing={3}>
                {expert?.languages?.map((item) => (
                  <Grid item xs={12} lg={4}>
                    <Box
                      sx={{ p: 1 }}
                      alignItems={'center'}
                      display="flex"
                      flexDirection="row"
                      justifyContent={'space-between'}
                      style={{ backgroundColor: theme.palette.secondary.lighter, height: '40px' }}
                    >
                      <Typography variant="h5">{item['language']}</Typography>
                      <Typography variant="h5">{item['proficiency']}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="h4" mb={2}>
                Previous Companies
              </Typography>
              <Grid container spacing={3}>
                {expert?.experience?.map((item) => (
                  <Grid item xs={6} lg={4}>
                    <MainCard border={false} boxShadow sx={{ width: '100%', backgroundColor: theme.palette.secondary.lighter }}>
                      <Grid container xs={12} lg={12} mb={2} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant="h4">{item['company']}</Typography>
                        <Typography variant="h6">
                          {new Date(String(item['from'])).getFullYear()} to {new Date(String(item['to'])).getFullYear()}
                        </Typography>
                      </Grid>
                      <Grid container xs={12} lg={12} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant="h4">{item['role']}</Typography>
                      </Grid>
                    </MainCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant="h4" mb={2}>
                Education
              </Typography>
              <Grid container spacing={3}>
                {expert?.education?.map((item) => (
                  <Grid item xs={6} lg={4}>
                    <MainCard border={false} boxShadow sx={{ width: '100%', backgroundColor: theme.palette.secondary.lighter }}>
                      <Grid container xs={12} lg={12} mb={2} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant="h4">{item['degree']}</Typography>
                        <Typography variant="h6">{new Date(String(item['to'])).getFullYear()}</Typography>
                      </Grid>
                      <Grid container xs={12} lg={12} alignItems={'center'} justifyContent={'space-between'}>
                        <Typography variant="h4">
                          {item['university']}, {item['location']}
                        </Typography>
                      </Grid>
                    </MainCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} lg={12}>
              <Stack spacing={2}>
                <Box sx={{ width: '100%', border: '1px solid black', p: 2 }}>
                  <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Rating value={3} readOnly />
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                      <CircleIcon style={{ fontSize: '2rem', color: theme.palette.secondary.light }} />
                      <Typography variant="h4">Arun Mantri</Typography>
                    </Stack>
                  </Stack>
                  <Grid item xs={12} lg={10}>
                    <Typography variant="h5">
                      "Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours."
                    </Typography>
                  </Grid>
                </Box>
                <Box sx={{ width: '100%', border: '1px solid black', p: 2 }}>
                  <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Rating value={5} readOnly />
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                      <CircleIcon style={{ fontSize: '2rem', color: theme.palette.secondary.light }} />
                      <Typography variant="h4">Arun Mantri</Typography>
                    </Stack>
                  </Stack>
                  <Grid item xs={12} lg={10}>
                    <Typography variant="h5">
                      "Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
                      alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal.
                      Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean
                      cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours."
                    </Typography>
                  </Grid>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default ExpertProfile;
