import { getAllBlogPosts } from '@/utils/data';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getAllBlogPosts().find(x => x.slug === params.slug);

  return {
    title: `${post?.title} | Vinoth Kumar Rajendran`,
    description: post?.excerpt?.trim(),
    keywords: post?.tags.toString(),
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getAllBlogPosts().find(x => x.slug === params.slug);

  return (
    <>
      {post && (
        <Container maxWidth="lg">
          <Box sx={{ mt: 5 }}></Box>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Card>
                <CardMedia sx={{ height: '400px' }} image={post.image} />
                <CardContent>
                  <Typography component="h1" variant="h3" sx={{ mt: 2 }}>
                    {post.title}
                  </Typography>
                  <Box component="article" sx={{ mt: 5 }}>
                    <MDXRemote source={post?.content} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}
