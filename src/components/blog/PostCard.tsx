'use client';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';

type Post = {
  category: string;
  date: string;
  title: string;
  excerpt?: string;
  image: string;
};

export default function BlogPostCard({ category, date, title, excerpt, image }: Post) {
  const theme = useTheme();
  return (
    <>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
          <CardContent sx={{ flex: '0 0 auto' }}>
            <Stack direction="row" alignItems="center">
              <Chip
                label={category}
                size="small"
                sx={{
                  borderRadius: '6px',
                  bgcolor: theme.palette.info.lighter,
                  color: theme.palette.info.darker,
                  fontWeight: '700',
                }}
              />
              <Box flexGrow={1} />
              <Typography component="time" variant="caption">
                {format(date, 'dd MMM yyyy')}
              </Typography>
            </Stack>
            <Typography component="h2" variant="h6" sx={{ mt: 3 }}>
              {title}
            </Typography>
            <Typography component="div" variant="caption">
              {excerpt}
            </Typography>
          </CardContent>
        </Box>

        <CardMedia
          component="img"
          sx={{ width: 151, m: '8px 8px 8px 0', borderRadius: '8px' }}
          image={image}
          alt={title}
          height="200px"
        />
      </Card>
    </>
  );
}
