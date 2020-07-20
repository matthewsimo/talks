// import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import renderToString from 'next-mdx-remote/render-to-string';
import components from 'components';

const postsDirectory = join(process.cwd(), '_posts');

//export function getPostSlugs() {
//  return fs.readdirSync(postsDirectory);
//}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.(mdx?)$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const post = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(async (field) => {
    if (field === 'slug') {
      post[field] = data.slug;
    } else if (field === 'content') {
      post.rawContent = content;
      //      try {
      //        post[field] = await renderToString(content, { ...components }, null, data);
      //      } catch (e) {
      //        //console.log({ e, renderToString })
      //      }
    } else if (data[field]) {
      post[field] = data[field];
    }
  })


  return post;
}

export async function getPosts(fields = []) {
  //const slugs = getPostSlugs();
  //const posts = slugs
  const posts = ['one']
    //.map((slug) => getPostBySlug(slug, fields))
    .map((slug) => ({ slug: '2020-07-24-hello-world-2020', date: '2020-07-24', title: 'Hello World, 2020' }))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return posts;
}