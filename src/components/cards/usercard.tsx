import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useTheme from '@mui/system/useTheme';
import Kerith from 'assets/images/Kerith.png';
import { Stack } from '@mui/material';
import CardContent from '@mui/material/CardContent';

export interface UserCardProps {
  fullName: String;
  professionalRole?: String;
  LinkedIn?: String;
  Facebook?: String;
  Youtube?: String;
  Twitter?: String;
}

export default function UserCard({ fullName, professionalRole, LinkedIn, Facebook, Youtube, Twitter }: UserCardProps) {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex', width: '100%', boxShadow: 'none', gap: 1, alignItems: 'center' }}>
      <CardMedia component="img" sx={{ height: '120px', width: '120px', borderRadius: '50%' }} image={Kerith} alt="" />
      <CardContent>
        <Stack spacing={2.5}>
          <Typography variant="h3" style={{ color: theme.palette.primary.darker }}>
            {fullName}
          </Typography>
          <Typography variant="h4">{professionalRole}</Typography>
          <Stack direction={'row'} gap={2}>
            {LinkedIn && <LinkedInIcon />}
            {Twitter && <TwitterIcon />}
            {Facebook && <FacebookIcon />}
            {Youtube && <YouTubeIcon />}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
