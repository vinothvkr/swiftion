import BlogPostCard from '@/components/blog/PostCard';
import { getAllBlogPosts } from '@/utils/data';
import path from '@/utils/path';
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
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        {posts &&
          posts.map((post, index) => (
            <Grid key={post.data.id} item xs={12} sm={6} md={4}>
              <BlogPostCard
                category={post.data.category}
                date={post.data.date}
                title={post.data.title}
                excerpt={post.excerpt}
                image={path(post.data.image)}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
