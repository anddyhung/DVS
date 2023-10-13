import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Stack, Typography, Button, Grid } from '@mui/material';
import { BsChatDots } from 'react-icons/bs';
import DuoSharpIcon from '@mui/icons-material/DuoSharp';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Avatar from 'components/@extended/Avatar';
import useTheme from '@mui/system/useTheme';
import IconButton from 'components/@extended/IconButton';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { dispatch } from 'store';
import { insertChat } from 'store/reducers/chat';
function createData(
  avatar: string,
  email: string,
  name: string,
  project: string,
  contactType: string,
  location: string,
  rate: string,
  noOfMeeting: number,
  nextMeeting: string
) {
  return { avatar, email, name, project, contactType, location, rate, noOfMeeting, nextMeeting };
}

const rows = [
  createData(
    'assets/images/users/avatar1.png',
    'georgebollin9@gmail.com',
    'John Smith',
    'Software development',
    'MentorShip',
    '200usd/Hour',
    'UAE',
    12,
    'Not Scheduled'
  ),
  createData(
    'assets/images/users/avatar1.png',
    'budinsunthorn@gmail.com',
    'John Smith',
    'Software development',
    'MentorShip',
    '200usd/Hour',
    'UAE',
    12,
    'Not Scheduled'
  )
];
const handleBackClick = () => {
  window.history.back();
};

export default function AccessibleTable() {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleMeetingClick = (email: string) => {
    navigate('/meetings', { state: { email: email } });
  };
  const handleMessageClick = (email: string) => {
    dispatch(insertChat({ type: 'general', to: email, text: 'hi' }));
    navigate('/messages');
  };
  const handleMoreClick = () => {
    navigate('/client/mores');
  };
  const handlePostingClick = () => {
    navigate('/client/job-post-step1');
  };
  return (
    <>
      <Grid container spacing={3} sx={{ padding: '10px' }}>
        <Grid item xs={12}>
          <Stack direction="row" sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Button onClick={handleBackClick}>
              <ArrowBackIcon />
            </Button>
            <Typography variant="body2" sx={{ color: theme.palette.secondary }}>
              Experts/Hired
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sx={{ display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3">Hired Experts</Typography>
          <Button
            style={{ color: 'white', backgroundColor: theme.palette.primary.darker, width: '10%', height: '5vh', borderRadius: '5px' }}
            onClick={handlePostingClick}
          >
            Post a New Job
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>Expert Name</TableCell>
                  <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                    Project
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }} align="left">
                    Contact Type
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }} align="left">
                    Location
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }} align="left">
                    Rate
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }} align="left">
                    No. of Meeting
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }} align="left">
                    Next Meeting
                  </TableCell>
                  <TableCell sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }} align="left">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell align="left">
                      <Stack direction={'row'}>
                        <Avatar alt="avatar" src={row.avatar} />
                        <Link
                          to={'/client/hired-experts-personal'}
                          state={{ expertName: row.name, expertEmail: row.email }}
                          style={{ textDecoration: 'none', fontSize: '1.5rem', color: theme.palette.primary.darker }}
                        >
                          {row.name}
                        </Link>
                      </Stack>
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      {row.project}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      {row.contactType}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      {row.location}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      {row.rate}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      {row.noOfMeeting}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      {row.nextMeeting}
                    </TableCell>
                    <TableCell align="left" sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: 'light' }}>
                      <Stack direction={'row'} spacing={2}>
                        <IconButton onClick={() => handleMeetingClick(row.email)}>
                          <DuoSharpIcon sx={{ color: theme.palette.primary.darker }} />
                        </IconButton>
                        <IconButton onClick={() => handleMessageClick(row.email)}>
                          <BsChatDots style={{ color: theme.palette.primary.darker }} />
                        </IconButton>
                        <IconButton onClick={handleMoreClick}>
                          <MoreVertSharpIcon sx={{ color: theme.palette.primary.darker }} />
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}
