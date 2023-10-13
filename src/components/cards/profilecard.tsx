import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import useTheme from '@mui/system/useTheme';
import Kerith from 'assets/images/Kerith.png';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import CloseIcon from '@material-ui/icons/Close';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

export default function ProfileCard() {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex', width: '100%', boxShadow: 'none', gap: 5, alignItems: 'center' }}>
      <CardMedia component="img" sx={{ height: '100px', width: '100px', borderRadius: '50%' }} image={Kerith} alt="" />
      <Stack columnGap={1} direction={'row'} alignItems={'center'} justifyContent={'center'}>
        <Button component="label" variant="outlined">
          Upload New Picture
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button variant="outlined" endIcon={<CloseIcon />} style={{ backgroundColor: theme.palette.primary.lighter }}>
          Delete
        </Button>
      </Stack>
    </Card>
  );
}
