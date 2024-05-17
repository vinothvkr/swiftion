import { getAllBlogPosts } from '@/utils/data';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();

  return posts.map(post => ({
    slug: post.data.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <>{params.slug}</>;
}
