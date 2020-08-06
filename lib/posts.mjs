import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDir = join(process.cwd(), 'pages/posts');
const writeFile = 'lib/posts.json';
const writeFilePath = join(process.cwd(), writeFile);


//export function getPostBySlug(slug, fields = []) {
//const realSlug = slug.replace(/\.(mdx?)$/, '');
//const fullPath = join(postsDirectory, `${realSlug}.mdx`);
//const fileContents = fs.readFileSync(fullPath, 'utf8');
//const { data, content } = matter(fileContents);

//const post = {};

//// Ensure only the minimal needed data is exposed
//fields.forEach(async (field) => {
//if (field === 'slug') {
//post[field] = data.slug;
//} else if (field === 'content') {
//post.rawContent = content;
////      try {
////        post[field] = await renderToString(content, { ...components }, null, data);
////      } catch (e) {
////        //console.log({ e, renderToString })
////      }
//} else if (data[field]) {
//post[field] = data[field];
//}
//})


//return post;
//}

//export async function getPosts(fields = []) {
////const slugs = getPostSlugs();
////const posts = slugs
//const posts = ['one']
////.map((slug) => getPostBySlug(slug, fields))
//.map((slug) => ({
//  slug: '2020-07-24-hello-world-2020',
//  date: '2020-07-24',
//  title: 'Hello World, 2020' 
//}))
//// sort posts by date in descending order
//.sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
//return posts;
//}

console.log("Processing Posts...");

fs.readdir(postsDir, (err, files) => {
  if (err) throw err;
  const postData = [];
  files.forEach(file => {

    if (file.endsWith('.mdx')) {
      const fileContents = fs.readFileSync(join(postsDir, file), 'utf8');
      const meta = fileContents.match(/export const meta = {([^\}]*)}/g);
      const matches = Array.from(meta[0].matchAll(/(['"]?)\b(\w+)\1\s*:\s*(['"]?)((?:[\w,]+[\s-+*%])*?\w+)\b\3/gm));
      const data = matches.reduce((acc, cV) => {
        acc[cV[2]] = cV[4];
        return acc;
      }, {});

      if (!data.draft) {
        postData.push(data);
      }
    }
  });

  console.log(`${postData.length} posts processed...`)
  console.log(`Writing to ${writeFile}...`)
  fs.writeFile(writeFilePath, JSON.stringify(postData, null, 2), (err) => {
    if (err) throw err;
    console.log(`Done.`);
  });

});

