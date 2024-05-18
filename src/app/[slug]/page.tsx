import { getAllBlogPosts } from '@/utils/data';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getAllBlogPosts().find(x => x.slug === params.slug);
  if (!post) {
    debugger;
  } else {
    return (
      <Container maxWidth="lg">
        <Box sx={{ mt: 5 }}></Box>
        <MDXRemote source={post?.content} />
      </Container>
    );
  }
}
