import { Grid, Typography } from '@mui/material';
import JobCard from './job-card';
import { JobInfo } from 'types/jobsinfo';
const JobView = ({ JobItems }: { JobItems: JobInfo[] }) => {
  const showCount = 10;
  return (
    <Grid container spacing={5} sx={{ alignItems: 'center' }}>
      {JobItems.length > 0 &&
        JobItems.slice(0, showCount).map((taskItem, index) => (
          <Grid item xs={12} key={index} sx={{ alignItems: 'center' }}>
            <JobCard
              title={taskItem.title}
              type={taskItem.visibility}
              liveFrom={taskItem.liveFrom}
              proposals={taskItem.proposals}
              invites={taskItem.invites}
              meetings={taskItem.noOfMeetings}
              category={taskItem.type}
            />
          </Grid>
        ))}
      <Grid item xs={12}>
        {JobItems.length === 0 && <Typography sx={{ display: 'flex', justifyContent: 'center' }}>No Active Jobs</Typography>}
      </Grid>
    </Grid>
  );
};
export default JobView;
