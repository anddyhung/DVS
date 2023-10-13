import { Box } from '@mui/system';
import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, Radio, RadioGroup, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useTheme from '@mui/system/useTheme';
import { openSnackbar } from 'store/reducers/snackbar';
import { dispatch } from 'store';

export const JobPostStep1 = (props: any) => {
  const expertiseOptions = props.areasOfExpertise;
  const toolsOptions = props.toolsOfExpertise;
  const industryOptions = props.industry;
  const navigate = useNavigate();
  const theme = useTheme();

  const [expertises, setExpertiseValue] = useState<string[]>([]);
  const [typeOfEngagement, setTypeOfEngagement] = useState('onDemandConsultancy');
  const onExpertiseDelete = (title: string) => () => {
    setExpertiseValue((expertises) => expertises.filter((v) => v !== title));
  };
  const [tools, setToolsValue] = useState<string[]>([]);
  const onToolsDelete = (title: string) => () => {
    setToolsValue((tools) => tools.filter((v) => v !== title));
  };
  const [industries, setIndustriesValue] = useState<string[]>([]);
  const onIndustriesDelete = (title: string) => () => {
    setIndustriesValue((industries) => industries.filter((v) => v !== title));
  };
  const handelClick = () => {
    if (expertises.length === 0) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select type of Expertise',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (tools.length === 0) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select tools',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else if (industries.length === 0) {
      dispatch(
        openSnackbar({
          open: true,
          message: 'Please select industries',
          variant: 'alert',
          alert: {
            color: 'error'
          },
          close: true
        })
      );
    } else {
      navigate('/client/job-post-step2', {
        state: { typeOfEngagement: typeOfEngagement, expertises: expertises, tools: tools, industries: industries }
      });
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypeOfEngagement(event.target.value);
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
        marginTop: '2%'
      }}
    >
      <Grid container spacing={5}>
        <Grid item lg={12} xs={12}>
          <FormControl component="fieldset" sx={{ '& > *': { marginBottom: '1vh' } }}>
            <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'black', marginBottom: '1vh', fontSize: '1rem' }}>
              What type of engagement are you looking for?
            </FormLabel>
            <RadioGroup
              aria-label="What type of engagement are you looking for?"
              defaultValue="onDemandConsultancy"
              name="radio-buttons-group"
              row
              onChange={handleChange}
            >
              <Grid container spacing={20}>
                <Grid item xs={3} lg={3}>
                  <FormControlLabel
                    value="onDemandConsultancy"
                    control={<Radio className="size-large" />}
                    label="On Demand Consultancy"
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '1rem',
                        whiteSpace: { md: 'nowrap' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={3} lg={3}>
                  <FormControlLabel
                    value="fractionalServices"
                    control={<Radio className="size-large" />}
                    label="Fractional Services"
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '1rem',
                        whiteSpace: { md: 'nowrap' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={3} lg={3}>
                  <FormControlLabel
                    value="mentor"
                    control={<Radio className="size-large" />}
                    label="Mentor"
                    sx={{
                      '& .MuiTypography-root': {
                        fontSize: '1rem',
                        whiteSpace: { md: 'nowrap' }
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={3} lg={3}>
                  <FormControlLabel
                    value="fixedPriceProject"
                    control={<Radio className="size-large" />}
                    label="Fixed Price Project"
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
        <Grid item xs={5} lg={5} md={5} sm={5}>
          <Stack spacing={1}>
            <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Area/Areas of Expertise</InputLabel>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <Autocomplete
                multiple
                options={expertiseOptions}
                getOptionLabel={(option) => option}
                value={expertises}
                sx={{ paddingBottom: '2vh' }}
                onChange={(e, newValue) => setExpertiseValue(newValue as string[])}
                renderTags={() => null}
                renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Areas Of Expertise" />}
              />
            </FormControl>
            <Box
              sx={{
                minHeight: '1vh'
              }}
            >
              {expertises.map((v) => (
                <Chip
                  key={v}
                  label={v}
                  onDelete={onExpertiseDelete(v)}
                  sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }}
                />
              ))}
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={5}>
          <Stack spacing={1}>
            <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Tools of Expertise</InputLabel>
            <Autocomplete
              multiple
              options={toolsOptions}
              getOptionLabel={(option) => option}
              value={tools}
              onChange={(e, newValue) => setToolsValue(newValue as string[])}
              renderTags={() => null}
              sx={{ paddingBottom: '1vh' }}
              renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Tools Of Expertise" />}
            />
            <Box
              sx={{
                minHeight: '1vh'
              }}
            >
              {tools.map((v) => (
                <Chip
                  key={v}
                  label={v}
                  onDelete={onToolsDelete(v)}
                  sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }}
                />
              ))}
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={5} sx={{ marginBottom: '1vh' }}>
          <Stack spacing={1}>
            <InputLabel style={{ color: 'black', fontWeight: 'bold' }}>Industry</InputLabel>
            <Autocomplete
              multiple
              options={industryOptions}
              getOptionLabel={(option) => option}
              value={industries}
              onChange={(e, newValue) => setIndustriesValue(newValue as string[])}
              renderTags={() => null}
              renderInput={(params) => <TextField {...params} variant="outlined" placeholder="Industries" />}
            />
            <Box
              sx={{
                minHeight: '1vh'
              }}
            >
              {industries.map((v) => (
                <Chip
                  key={v}
                  label={v}
                  onDelete={onIndustriesDelete(v)}
                  sx={{ backgroundColor: theme.palette.primary.lighter, marginRight: '1vw' }}
                />
              ))}
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={2}>
          <Button
            style={{
              backgroundColor: theme.palette.primary.darker,
              color: 'white',
              textTransform: 'none',
              width: '100%',
              marginBottom: '1vh'
            }}
            onClick={handelClick}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default JobPostStep1;
