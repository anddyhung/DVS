// project import
import MainCard from 'components/MainCard';
import { Grid, Stack, Typography } from '@mui/material';
import FindJobsCard from 'components/cards/findjobscard';

// ==============================|| SAMPLE PAGE ||============================== //
const RecommendedForYou = () => {
  return (
    <Grid item lg={9} xl={10}>
      <Grid item xs={12} lg={12}>
        <MainCard>
          <Typography variant="h2" marginBottom={'1.2rem'} marginTop={'1.5rem'}>
            Recommended for you (15)
          </Typography>
          <Stack spacing={2}>
            <FindJobsCard />
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default RecommendedForYou;
