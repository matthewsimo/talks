import { readingTime as estReadingTime } from 'reading-time-estimator';

export type PostMetaData = {
	id: string;
	title: string;
	tone: 'light' | 'dark';
	draft?: boolean;
	img?: string;
	imgAttribution?: string;
};

export type ImportedPost = {
	default: {
		render: () => { html: string };
		$$render: unknown;
	};
	metadata: PostMetaData;
};

export type Post = PostMetaData & {
	date: string;
	slug: string;
	readingTime: {
		minutes: number;
		words: number;
		text: string;
	};
	content: ImportedPost['default'];
};

export const getAllPosts = async () => {
	const posts = await import.meta.glob(`../../../_posts/*.mdx`);
	const rawPosts = await import.meta.glob(`../../../_posts/*.mdx`, { as: 'raw' });

	const foundPosts: Post[] = [];

	for (const p in posts) {
		const post = (await posts[p]()) as ImportedPost;
		const rawPost = await rawPosts[p]();

		const { date, slug } = getDateAndSlug(p.slice(16, -4));
		const readingTime = estReadingTime(rawPost, 200);
		const content = post?.default;

		foundPosts.push({
			...post?.metadata,
			date,
			slug,
			content,
			readingTime
		});
	}

	// Newest to Oldest
	const sortedPosts = foundPosts.sort((a: Post, b: Post) => {
		return b.date < a.date ? -1 : a.date < b.date ? 1 : 0;
	});

	return sortedPosts;
};

export function getDateAndSlug(postSlug: string) {
	const [Y, M, D, ...restSlug] = postSlug.replace('.mdx', '').split('-');
	const date = `${Y}-${M}-${D}`;
	const slug = `${date}-${restSlug.join('-')}`;
	return { date, slug };
}
