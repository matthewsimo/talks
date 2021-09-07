import { join } from 'path';
import { readFileSync, readdirSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';
import readingTime from 'reading-time';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

export async function getFiles() {
  return readdirSync(join(process.cwd(), '_posts'));
}

export async function getFileBySlug(slug) {
  const source = readFileSync(
    join(process.cwd(), '_posts', `${slug}.mdx`),
    'utf8'
  );

  const { code, frontmatter } = await bundleMDX(source, {
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ];
      return options;
    }
  });

  const { date } = getDateAndSlug(slug);
  return {
    code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug,
      date,
      ...frontmatter
    }
  };
}

function getDateAndSlug(postSlug) {
  const [Y, M, D, ...restSlug] = postSlug.replace('.mdx', '').split('-');
  const date = `${Y}-${M}-${D}`;
  const slug = `${date}-${restSlug.join('-')}`;
  return { date, slug };
}

export async function getAllFilesFrontMatter(type) {
  const showDrafts = JSON.parse(process.env.SHOW_DRAFTS) || false;
  const files = readdirSync(join(process.cwd(), '_posts'));

  const enhancedFiles = files.reduce((allPosts, postSlug) => {
    const source = readFileSync(
      join(process.cwd(), '_posts', postSlug),
      'utf8'
    );
    const { data } = matter(source);

    const { date, slug } = getDateAndSlug(postSlug);

    return [
      {
        ...data,
        slug,
        date
      },
      ...allPosts
    ];
  }, []);

  return showDrafts
    ? enhancedFiles
    : enhancedFiles.filter((file) => !file.draft);
}
