import { PlusOutlined } from '@ant-design/icons';
import { TextField, Fab, InputLabel, Grid, Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { JobDetail } from 'types/jobsinfo';
import { useLocation, useNavigate } from 'react-router-dom';
import useTheme from '@mui/system/useTheme';
import { openSnackbar } from 'store/reducers/snackbar';
import { dispatch } from 'store';
const JobPostStep3 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [questions, setQuestions] = useState<string[]>([]);
  const typeOfEngagement: string = location.state.typeOfEngagement;
  const areasOfExpertise: string[] = location.state.areasOfExpertise;
  const toolsOfExpertise: string[] = location.state.toolsOfExpertise;
  const industries: string[] = location.state.industries;
  const jobVisibility: string = location.state.jobVisibility;
  const budgetMaxRange: string = location.state.budgetMaxRange;
  const budgetMinRange: string = location.state.budgetMinRange;
  const duration: string = location.state.duration;
  const weeklyCommitment: string = location.state.weeklyCommitment;
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [textfields, setTextFields] = useState<JSX.Element[]>([]);
  const handleQuestionChange = (event: any, index: number) => {
    const newQuestions = [...questions];
    newQuestions[index] = event.target.value;
    setQuestions(newQuestions);
  };
  const handleAddClick = () => {
    setTextFields([
      ...textfields,
      <Grid item xs={12}>
        <TextField
          key={textfields.length}
          rows={2}
          multiline
          variant="filled"
          fullWidth
          onChange={(event: any) => handleQuestionChange(event, textfields.length)}
          style={{ display: 'block', backgroundColor: theme.palette.grey.lighter, borderRadius: '10px' }}
        />
      </Grid>
    ]);
  };

  const handlePreviousClick = () => {
    window.history.back();
  };
  const handleNextClick = () => {
    const newJob: JobDetail = {
      _id: '',
      title: jobTitle,
      description: jobDescription,
      questions: questions,
      duration: duration,
      skills: areasOfExpertise,
      industry: industries,
      tools: toolsOfExpertise,
      visibility: jobVisibility,
      budgetRange: [budgetMinRange, budgetMaxRange],
      type: typeOfEngagement,
      weeklyCommitment: weeklyCommitment,
      invitations: [],
      client: '',
      createdAt: '',
      proposals: [],
      status: '',
      updatedAt: '',
      verifiedStatus: '',
      companyLocation: ''
    };
    if (jobTitle === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please enter job title.',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (jobDescription === '') {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please enter job description',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else {
      navigate('/client/job-post-publish', { state: { job: newJob } });
    }
  };
  return (
    <>
      <Box
        sx={{
          font: 'caption',
          width: '96%',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '2%',
          marginTop: '2%'
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Job Title</InputLabel>
            <TextField
              fullWidth
              multiline
              variant="filled"
              InputProps={{
                disableUnderline: true // Disable the underline
              }}
              rows={2}
              sx={{ borderRadius: '20px', border: 'none' }}
              onChange={(event: any) => setJobTitle(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Job Description</InputLabel>
            <TextField
              fullWidth
              multiline
              variant="filled"
              InputProps={{
                disableUnderline: true
              }}
              rows={5}
              sx={{ borderRadius: '20px' }}
              onChange={(event: any) => setJobDescription(event.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={5} sx={{ marginBottom: '2vh' }}>
              <Grid item xs={10} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Any Questions you want to ask the applications</InputLabel>
              </Grid>
              <Grid item xs={2} direction={'row'} sx={{ display: 'inline-flex', alignItems: 'center' }} spacing={10}>
                <Fab
                  aria-label="add"
                  onClick={handleAddClick}
                  style={{ maxHeight: '36px', maxWidth: '36px', backgroundColor: theme.palette.primary.darker }}
                >
                  <PlusOutlined style={{ fontSize: '1.5rem', color: 'white', backgroundColor: theme.palette.primary.darker }} />
                </Fab>
                <Typography variant="h3">Add</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Stack
                direction="row"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  flexGrow: 1,
                  minHeight: '15vh',
                  marginBottom: '3vh'
                }}
              >
                <Grid container spacing={3}>
                  {textfields.map((textarea, index) => (
                    <Grid item xs={12}>
                      {textarea}
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
            <Grid container spacing={5}>
              <Grid item xs={2} sx={{ marginBottom: '1vh' }}>
                <Button
                  variant="outlined"
                  style={{ backgroundColor: 'white', color: theme.palette.primary.darker, width: '100%', textTransform: 'none' }}
                  onClick={handlePreviousClick}
                >
                  Previous
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  style={{ backgroundColor: theme.palette.primary.darker, color: 'white', width: '100%', textTransform: 'none' }}
                  onClick={handleNextClick}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default JobPostStep3;
