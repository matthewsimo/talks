import { frontMatter as postsData } from '../pages/posts/**/*.mdx';

export const utils = {
  // set these based on resource path, but fallback if meta includes
  getSlug: meta => meta.slug ? meta.slug : meta.__resourcePath.replace('posts/', '').replace('.mdx', ''),
  getDate: meta => meta.date ? meta.date : meta.__resourcePath.replace('posts/', '').split('-').slice(0, 3).join('-')
};

export const getPosts = async function getPosts() {

  const posts = [];

  postsData.forEach((meta, i) => (!meta.draft && posts.push({
    ...meta,
    slug: utils.getSlug(meta),
    date: utils.getDate(meta),
  })));

  // sort by id
  return posts.sort((a, b) => a.id < b.id ? 1 : a.id > b.id ? -1 : 0);

}