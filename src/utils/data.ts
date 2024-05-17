import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dir = path.join(process.cwd(), '_posts');

export const getAllBlogPosts = () => {
  const allFiles = fs.readdirSync(dir);
  const allBlogs = allFiles.map(file => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content, excerpt } = matter(fileContent, { excerpt: true });
    return { data, content, excerpt };
  });

  return allBlogs.filter(x => x.data.published === true);
};
