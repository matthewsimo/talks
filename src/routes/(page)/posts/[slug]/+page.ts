import type { PageLoad } from './$types';
import { type Post, getDateAndSlug } from '../utils';
import { error } from '@sveltejs/kit';
import { readingTime as estReadingTime } from 'reading-time-estimator';

import { PUBLIC_SHOW_DRAFTS as SHOW_DRAFTS } from '$env/static/public';

export const prerender = true;

export const load: PageLoad<Post> = async ({ params }) => {
	const { date, slug } = getDateAndSlug(params.slug);

	const post = await import(`../../../../_posts/${params.slug}.mdx`);
	const rawPost = await import(`../../../../_posts/${params.slug}.mdx?raw`);

	if (!post) {
		throw error(404, 'Not found');
	}

	// Filter Drafts if env says so
	const showDrafts = JSON.parse(SHOW_DRAFTS) || false;
	if (!showDrafts && post.metadata.draft) {
		throw error(404, 'Not found');
	}

	const content = post?.default;
	const readingTime = estReadingTime(rawPost?.default, 200);

	return {
		...post?.metadata,
		date,
		slug,
		content,
		readingTime
	};
};
