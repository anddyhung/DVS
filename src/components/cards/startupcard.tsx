import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/system/useTheme';
import Kerith from 'assets/images/Kerith.png';
import { Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';

export default function StartupCard() {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex', width: '100%', boxShadow: 'none', alignItems: 'center' }}>
      <CardMedia component="img" sx={{ height: '80px', width: '80px' }} image={Kerith} alt="" />
      <CardContent>
        <Stack spacing={2.5}>
          <Typography variant="h4" style={{ color: theme.palette.primary.darker }}>
            XYZ Corporation Pvt Limited
          </Typography>
          <Typography variant="h5">Founded in 2020</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
