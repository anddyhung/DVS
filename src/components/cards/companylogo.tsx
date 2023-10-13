import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/system/useTheme';
import { Stack } from '@mui/material';

export default function CompanylogoCard() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        aspectRatio: '1',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.lighter
      }}
    >
      <Card
        sx={{
          display: 'flex',
          width: '50%',
          aspectRatio: '1',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.secondary.light
        }}
      />
      <Stack sx={{ alignItems: 'center', marginTop: '0.5rem' }}>
        <Typography variant="h4">Company Logo</Typography>
        <Typography variant="h5">Guidlines</Typography>
      </Stack>
    </Card>
  );
}
