import { Card, Typography, Button, Grid, Chip, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import useTheme from '@mui/system/useTheme';
import { useNavigate } from 'react-router-dom';
const JobCard = (props: any) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleViewProposalsClick = () => {
    navigate('client/jobs/');
  };
  const handleMyHiresClick = () => {
    navigate('client/jobs');
  };
  return (
    <Card sx={{ display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={3} sx={{ paddingLeft: '1vw', paddingTop: '2vh' }}>
        <Grid item xs={3}>
          <Stack direction={'column'}>
            <Typography
              component={RouterLink}
              to=""
              variant="h5"
              noWrap
              sx={{
                color: theme.palette.primary.darker,
                textDecoration: 'none',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {props.title}
            </Typography>
            <Chip label={props.category} sx={{ width: '40%' }} />
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body1">{props.type}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body1">{props.liveFrom}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1">{props.proposals}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body1">{props.invites}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="body1">{props.noOfMeeting}</Typography>
        </Grid>
        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            sx={{
              backgroundColor: 'white',
              color: theme.palette.primary.darker,
              width: '100%',
              textTransform: 'none',
              height: '4vh',
              borderRadius: '10px'
            }}
            onClick={handleViewProposalsClick}
          >
            View Proposals
          </Button>
          <Button
            sx={{
              backgroundColor: 'white',
              color: theme.palette.primary.darker,
              width: '100%',
              textTransform: 'none',
              height: '4vh',
              borderRadius: '10px'
            }}
            onClick={handleMyHiresClick}
          >
            My Hires
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Card>
  );
};
export default JobCard;
