import { Box } from '@mui/system';
import { useState, useEffect } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Stack } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useLocation, useNavigate } from 'react-router-dom';
import { dispatch, useSelector } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import useTheme from '@mui/system/useTheme';
import { loadBudgetRange, loadDuration, loadWeeklyCommitment } from 'store/reducers/jobs';

export const JobPostStep2 = (props: any) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const typeOfEngagement = location.state?.typeOfEngagement;
  const areasOfExpertise = location.state?.expertises;
  const toolsOfExpertise = location.state?.tools;
  const industries = location.state?.industries;
  const [jobVisibility, setJobVisibility] = useState<string>('public');
  const [budgetMinRange, setBudgetMinRange] = useState<string>('');
  const [budgetMaxRange, setBudgetMaxRange] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [weeklyCommitment, setWeeklyCommitment] = useState<string>('');

  useEffect(() => {
    dispatch(loadBudgetRange());
    dispatch(loadDuration());
    dispatch(loadWeeklyCommitment());
  }, [dispatch]);

  const budgetOptions = useSelector((state) => state.jobs.budgetRange);
  const durationOptions = useSelector((state) => state.jobs.duration);
  const weeklyCommitmentOptions = useSelector((state) => state.jobs.weeklyCommitment);

  const handleJobVisibilityChange = (event: any) => {
    setJobVisibility(event.target.value);
  };
  const handleMinBudgetChange = (event: SelectChangeEvent) => {
    setBudgetMinRange(event.target.value);
  };

  const handleMaxBudgetChange = (event: SelectChangeEvent) => {
    setBudgetMaxRange(event.target.value);
  };

  const handleDurationChange = (event: SelectChangeEvent) => {
    setDuration(event.target.value);
  };

  const handleWeekluCommitmentChange = (event: SelectChangeEvent) => {
    setWeeklyCommitment(event.target.value);
  };
  const handlePreviousClick = () => {
    navigate('/client/job-post-step1');
  };
  const handleNextClick = () => {
    if (budgetMinRange === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select budget range',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (budgetMaxRange === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select budget range',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (duration === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select duration',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (weeklyCommitment === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select weekly Commitment range',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else {
      navigate('/client/job-post-step3', {
        state: {
          typeOfEngagement: typeOfEngagement,
          areasOfExpertise: areasOfExpertise,
          toolsOfExpertise: toolsOfExpertise,
          industries: industries,
          jobVisibility: jobVisibility,
          budgetMaxRange: budgetMaxRange,
          budgetMinRange: budgetMinRange,
          duration: duration,
          weeklyCommitment: weeklyCommitment
        }
      });
    }
  };
  return (
    <Box
      sx={{
        font: 'caption',
        width: '96%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '2%'
      }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} lg={12}>
          <FormControl component="fieldset" sx={{ '& > *': { marginBottom: '10px' } }}>
            <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black', fontWeight: 'bold' }}>
              Job Visibility
            </FormLabel>
            <RadioGroup
              aria-label="What type of engagement are you looking for?"
              defaultValue="public"
              name="radio-buttons-group"
              row
              onChange={handleJobVisibilityChange}
            >
              <Grid container spacing={20}>
                <Grid item xs={6} lg={6}>
                  <FormControlLabel
                    value="public"
                    control={<Radio className="size-large" />}
                    label="Public"
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '1rem',
                        whiteSpace: { md: 'nowrap' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={6} lg={6}>
                  <FormControlLabel
                    value="inviteOnly"
                    control={<Radio className="size-large" />}
                    label="Invite Only"
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '1rem',
                        whiteSpace: { md: 'nowrap' }
                      }
                    }}
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>BudgetRange</InputLabel>
            <FormControl sx={{ m: 1, mt: 3, width: '100%' }}>
              <Grid container spacing={6}>
                <Grid item xs={6}>
                  <Select value={budgetMinRange} onChange={handleMinBudgetChange} style={{ width: '100%' }}>
                    {budgetOptions.map((budget: string) => (
                      <MenuItem key={budget} value={budget}>
                        {budget}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <Select value={budgetMaxRange} onChange={handleMaxBudgetChange} style={{ width: '100%' }}>
                    {budgetOptions.map((budget: string) => (
                      <MenuItem key={budget} value={budget}>
                        {budget}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Duration</InputLabel>
            <FormControl sx={{ m: 1, mt: 3, width: '100%' }}>
              <Grid container spacing={6}>
                <Grid item xs={6}>
                  <Select value={duration} onChange={handleDurationChange} style={{ width: '100%' }}>
                    {durationOptions.map((budget: string) => (
                      <MenuItem key={budget} value={budget}>
                        {budget}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2} sx={{ marginBottom: '3vh' }}>
            <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Weekly Commitment</InputLabel>
            <FormControl sx={{ m: 1, mt: 3, width: '100%' }}>
              <Grid container spacing={6}>
                <Grid item xs={6}>
                  <Select value={weeklyCommitment} onChange={handleWeekluCommitmentChange} style={{ width: '100%' }}>
                    {weeklyCommitmentOptions.map((budget: string) => (
                      <MenuItem key={budget} value={budget}>
                        {budget}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={6}></Grid>
              </Grid>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: theme.palette.secondary.lighter,
                  color: theme.palette.primary.darker,
                  width: '100%',
                  textTransform: 'none'
                }}
                onClick={handlePreviousClick}
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                style={{
                  backgroundColor: theme.palette.primary.darker,
                  color: theme.palette.secondary.lighter,
                  width: '100%',
                  textTransform: 'none',
                  marginBottom: '1vh'
                }}
                onClick={handleNextClick}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobPostStep2;
