import BlogPostCard from '@/components/blog/PostCard';
import { getAllBlogPosts } from '@/utils/data';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vinoth Kumar Rajendran',
  description: 'Personal Blog of Vinoth Kumar Rajendran',
};

export default function Home() {
  const posts = getAllBlogPosts();

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 5 }}></Box>
      <Grid container spacing={5}>
        {posts &&
          posts.map((post, index) => (
            <Grid key={post.id} item xs={12} sm={6} md={6}>
              {/* <BlogPostCard
                slug={post.slug}
                category={post.category}
                date={post.date}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
              /> */}
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
