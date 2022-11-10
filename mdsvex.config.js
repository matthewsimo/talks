import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = defineConfig({
	extensions: ['.svelte.md', '.mdx', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [remarkGfm],
	rehypePlugins: [rehypeSlug, rehypeCodeTitles, rehypeAutolinkHeadings],
	layout: {
		_: './src/lib/MDXLayout.svelte'
	}
});

export default config;
