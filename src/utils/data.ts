import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dir = path.join(process.cwd(), '_posts');

export type Post = {
  id: number;
  slug: string;
  published: boolean;
  title: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  excerpt?: string;
  content: string;
};

export const getAllBlogPosts = () => {
  const allFiles = fs.readdirSync(dir);
  const allBlogs = allFiles.map(file => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content, excerpt } = matter(fileContent, {
      excerpt: true,
    });
    const post: Post = {
      id: data.id,
      slug: data.slug,
      published: data.published,
      title: data.title,
      date: data.date,
      image: data.image,
      category: data.category,
      tags: data.tags,
      excerpt: excerpt,
      content: content,
    };
    debugger;
    return post;
  });

  return allBlogs.filter(x => x.published === true);
};
