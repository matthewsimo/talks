import type { PageLoad } from './$types';
import { PUBLIC_SHOW_DRAFTS as SHOW_DRAFTS } from '$env/static/public';

import { getAllPosts } from './utils';

export const prerender = true;

export const load: PageLoad = async () => {
	const sortedPosts = await getAllPosts();

	// Filter Drafts if env says so
	const showDrafts = JSON.parse(SHOW_DRAFTS) || false;
	const allPosts = showDrafts ? sortedPosts : sortedPosts.filter((post) => !post.draft);

	return {
		allPosts
	};
};
