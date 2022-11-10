// import type { PageLoad } from './$types';
// import { error } from '@sveltejs/kit';
// import readingTime from 'reading-time';

// export const load: PageLoad = async ({ params }) => {
// 	// return {
// 	// 	post: {
// 	// 		title: `Title for ${params.slug} goes here`,
// 	// 		content: `Content for ${params.slug} goes here`
// 	// 	}
// 	// };
// 	// console.log({ m: post.metadata, content });

// 	const { date, slug } = getDateAndSlug(params.slug);
// 	const post = await import(`../test.mdx`);
// 	console.log({ params, date, slug, post });
// 	// const { id, title, img, tone, draft } = post.metadata;
// 	// const content = post.default;

// 	// // id: '000'
// 	// // title: 'MDX Test'
// 	// // img: 'https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80'
// 	// // tone: 'light'
// 	// // draft: true

// 	// if (post) {
// 	// 	return {
// 	// 		content,
// 	// 		readingTime: readingTime(content),
// 	// 		...post.metadata
// 	// 	};
// 	// } else {
// 	// 	throw error(404, 'Not found');
// 	// }
// };

// function getDateAndSlug(postSlug: string) {
// 	const [Y, M, D, ...restSlug] = postSlug.replace('.mdx', '').split('-');
// 	const date = `${Y}-${M}-${D}`;
// 	const slug = `${date}-${restSlug.join('-')}`;
// 	return { date, slug };
// }
