import { Typography, Grid, Button, Stack, Card, CardContent } from '@mui/material';
import useTheme from '@mui/system/useTheme';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector } from 'store';
import JobPostStep1 from 'components/molecules/jobpost/job-post-step-1';
import { useDispatch } from 'store';
import { useEffect } from 'react';
import { loadAreasOfExpertise, loadIndustries, loadToolsOfExpertise } from 'store/reducers/jobs';
const Job_Post_1 = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleBackClick = () => {
    window.history.back();
  };
  useEffect(() => {
    dispatch(loadAreasOfExpertise());
    dispatch(loadToolsOfExpertise());
    dispatch(loadIndustries());
  }, [dispatch]);

  const tools = useSelector((state) => state.jobs.toolsOfExpertise);
  const expertises = useSelector((state) => state.jobs.areasOfExpertise);
  const industries = useSelector((state) => state.jobs.industries);
  return (
    <>
      <Grid container spacing={3} sx={{ padding: '10px' }}>
        <Grid item xs={12}>
          <Stack direction="row" sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Button onClick={handleBackClick}>
              <ArrowBackIcon />
            </Button>
            <Typography variant="body2" sx={{ color: theme.palette.secondary }}>
              Experts/Hired/Post a New Requirement
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3">Post a New Requirement</Typography>
          <Stack spacing={1} direction={'column'}>
            <Typography variant="body2">Step 1/4</Typography>
            <Typography variant="h4">Experts</Typography>.
          </Stack>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Card sx={{ width: '95vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardContent>
              <JobPostStep1 areasOfExpertise={expertises} toolsOfExpertise={tools} industry={industries} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Job_Post_1;
