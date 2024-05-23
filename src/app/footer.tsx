import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 5,
        mt: 5,
      }}
    >
      <Container>
        <Typography component="div">
          Made with ❤️ by <Link href="https://github.com/vinothvkr">@Vinoth Kumar Rajendran</Link>
        </Typography>
      </Container>
    </Box>
  );
}
