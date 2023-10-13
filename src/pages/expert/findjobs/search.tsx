// project import
import MainCard from 'components/MainCard';
import { Grid, Stack, Button, Typography } from '@mui/material';
import FindJobsCard from 'components/cards/findjobscard';
import SearchForm from './searchform';

// ==============================|| SAMPLE PAGE ||============================== //
const Search = () => {
  return (
    <Grid item lg={9} xl={10}>
      <Grid container item xs={12} lg={12} spacing={3} marginBottom={'1.5rem'} alignItems={'center'}>
        <Grid item xs={12} lg={10.5}>
          <MainCard>
            <SearchForm />
          </MainCard>
        </Grid>
        <Grid item xs={12} lg={1.5}>
          <Button variant="contained" style={{ width: '100%', fontSize: '1.2rem' }} sx={{ padding: '0.7rem 0' }}>
            Filters
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={12}>
        <MainCard>
          <Typography variant="h2" marginBottom={'1.2rem'} marginTop={'1.5rem'}>
            Recent Jobs
          </Typography>
          <Stack spacing={2}>
            <FindJobsCard />
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default Search;
