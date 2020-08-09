import fs, { promises as fsp } from 'fs';
import { join } from 'path';

const postsDir = join(process.cwd(), 'pages/posts');

export const getPosts = async function getPosts() {

  const postsData = [];
  const files = await fsp.readdir(postsDir);
  files.forEach(file => {
    if (file.endsWith('.mdx')) {
      const fileContents = fs.readFileSync(join(postsDir, file), 'utf8');
      const allMatches = Array.from(fileContents.matchAll(/export const meta = ({[^\}]*})/));
      const match = allMatches[0][1];
      const data = eval(`(${match})`);

      if (!data.draft) {
        postsData.push(data);
      }
    }
  });

  return postsData.sort((a, b) => a.id < b.id ? 1 : a.id > b.id ? -1 : 0);

}