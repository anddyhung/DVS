// project import
import MainCard from 'components/MainCard';
import { Grid, Typography, Stack, TextField, Button } from '@mui/material';
import Sidebar from 'components/cards/sidebar';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import useTheme from '@mui/system/useTheme';

// ==============================|| SAMPLE PAGE ||============================== //
const UserSettings = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}>
      <Grid item lg={3} xl={2}>
        <Sidebar role="expert" />
      </Grid>
      <Grid item lg={9} xl={10}>
        <MainCard sx={{ p: 1.5 }} title={<Typography variant="h2">User Settings</Typography>}>
          <Stack spacing={3}>
            <MainCard>
              <Grid container xs={12} lg={12} alignItems={'center'} justifyContent={'space-between'}>
                <Grid item>
                  <Typography variant="h3">Services</Typography>
                </Grid>
                <Grid item>
                  <ExpandLessIcon />
                </Grid>
              </Grid>
              <Grid container xs={12} lg={12} marginTop={'1rem'} spacing={3}>
                <Grid item xs={4} lg={4}>
                  <MainCard border={false} boxShadow sx={{ width: '100%', backgroundColor: theme.palette.primary.lighter }}>
                    <Grid container xs={12} lg={12} alignItems={'center'}>
                      <CheckBoxOutlinedIcon style={{ color: theme.palette.primary.dark, marginRight: '0.5rem' }} />
                      <Typography variant="h4" style={{ color: theme.palette.primary.dark }}>
                        Fractional Services
                      </Typography>
                    </Grid>
                  </MainCard>
                </Grid>
                <Grid item xs={4} lg={4}>
                  <MainCard border={false} boxShadow sx={{ width: '100%', backgroundColor: theme.palette.primary.lighter }}>
                    <Grid container xs={12} lg={12} alignItems={'center'}>
                      <CheckBoxOutlinedIcon style={{ color: theme.palette.primary.dark, marginRight: '0.5rem' }} />
                      <Typography variant="h4" style={{ color: theme.palette.primary.dark }}>
                        Consulting
                      </Typography>
                    </Grid>
                  </MainCard>
                </Grid>
                <Grid item xs={4} lg={4}>
                  <MainCard border={false} boxShadow sx={{ width: '100%', backgroundColor: theme.palette.primary.lighter }}>
                    <Grid container xs={12} lg={12} alignItems={'center'}>
                      <CheckBoxOutlinedIcon style={{ color: theme.palette.primary.dark, marginRight: '0.5rem' }} />
                      <Typography variant="h4" style={{ color: theme.palette.primary.dark }}>
                        Mentorship
                      </Typography>
                    </Grid>
                  </MainCard>
                </Grid>
                <Grid item xs={4} lg={4}>
                  <MainCard border={false} boxShadow sx={{ width: '100%', backgroundColor: theme.palette.primary.lighter }}>
                    <Grid container xs={12} lg={12} alignItems={'center'}>
                      <CheckBoxOutlinedIcon style={{ color: theme.palette.primary.dark, marginRight: '0.5rem' }} />
                      <Typography variant="h4" style={{ color: theme.palette.primary.dark }}>
                        Projects
                      </Typography>
                    </Grid>
                  </MainCard>
                </Grid>
                <Grid item xs={4} lg={4}>
                  <MainCard border={false} boxShadow sx={{ width: '100%', backgroundColor: theme.palette.primary.lighter }}>
                    <Grid container xs={12} lg={12} alignItems={'center'}>
                      <CheckBoxOutlinedIcon style={{ color: theme.palette.primary.dark, marginRight: '0.5rem' }} />
                      <Typography variant="h4" style={{ color: theme.palette.primary.dark }}>
                        Coaching
                      </Typography>
                    </Grid>
                  </MainCard>
                </Grid>
              </Grid>
            </MainCard>
            <MainCard>
              <Grid container xs={12} lg={12} alignItems={'center'}>
                <Grid item>
                  <Typography variant="h3">Hourly Rate</Typography>
                </Grid>
                <Grid item>
                  <ExpandLessIcon />
                </Grid>
              </Grid>
              <Grid container xs={12} lg={12} marginTop={'1rem'}>
                <Grid item xs={12} lg={5}>
                  <Stack spacing={0.5}>
                    <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                      Hourly Rate
                    </Typography>
                    <TextField fullWidth placeholder="$ 20.00" />
                  </Stack>
                </Grid>
              </Grid>
              <Grid container xs={12} lg={12} marginTop={'0.9rem'}>
                <Button variant="contained" sx={{ width: '8rem' }}>
                  Save
                </Button>
              </Grid>
            </MainCard>
            <MainCard sx={{ border: 'none' }}>
              <Grid container xs={12} lg={12} alignItems={'center'} justifyContent={'space-between'}>
                <Grid item>
                  <Typography variant="h3">Consulting Products</Typography>
                </Grid>
                <Grid item>
                  <ExpandLessIcon />
                </Grid>
              </Grid>
              <Grid container xs={12} lg={12} marginTop={'1rem'}>
                <Stack direction={'row'} spacing={2} style={{ width: '100%' }}>
                  <Grid item xs={4} lg={4}>
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
                  <Grid item xs={4} lg={4}>
                    <MainCard
                      border={false}
                      boxShadow
                      style={{ display: 'flex', justifyContent: 'center' }}
                      sx={{ width: '100%', height: '100%', backgroundColor: theme.palette.secondary.lighter }}
                    >
                      <Stack alignItems="center" justifyContent="center" sx={{ height: '100%', width: '100%' }}>
                        <Button variant="contained" sx={{ width: '8rem' }}>
                          Add New
                        </Button>
                      </Stack>
                    </MainCard>
                  </Grid>
                </Stack>
              </Grid>
            </MainCard>
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default UserSettings;
