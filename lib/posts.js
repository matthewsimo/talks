import fs, { promises as fsp } from 'fs';
import { join } from 'path';

const postsDir = join(process.cwd(), 'pages/posts');

export const getPosts = async function getPosts() {

  const postData = [];
  const files = await fsp.readdir(postsDir);
  files.forEach(file => {
    if (file.endsWith('.mdx')) {
      const fileContents = fs.readFileSync(join(postsDir, file), 'utf8');
      const allMatches = Array.from(fileContents.matchAll(/export const meta = ({[^\}]*})/));
      const match = allMatches[0][1];
      const data = eval(`(${match})`);

      if (!data.draft) {
        postData.push(data);
      }
    }
  });

  return postData;

}