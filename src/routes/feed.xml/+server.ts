import { Feed, type Item } from 'feed';
import { getAllPosts } from '../(page)/posts/+page';

const author = {
	name: 'Matthew Simo',
	email: 'hi@matthewsimo.com',
	link: 'https://matthewsimo.com'
};

export async function GET() {
	const feed = new Feed({
		title: 'matthewsimo.com',
		description:
			'The personal blog of Matthew Simo, Software Engineer & UX Designer based in Texas.',
		link: 'https://matthewsimo.com',
		id: 'https://matthewsimo.com',
		language: 'en',
		copyright: `All rights reserved ${new Date().getFullYear()}, John Doe`,
		feedLinks: {
			atom: 'https://matthewsimo.com/feed.xml'
		},
		author
	});

	const allPosts = await getAllPosts();

	allPosts
		.filter((p) => !p.draft)
		.forEach(async ({ title, draft, slug, date, content }) => {
			const { html } = content.render();
			const item: Item = {
				title: `${title} - ${draft}`,
				link: `https://matthewsimo.com/posts/${slug}`,
				date: new Date(date),
				author: [author],
				content: html
			};

			feed.addItem(item);
		});

	return new Response(feed.atom1(), {
		headers: {
			'Content-Type': 'application/atom+xml'
		}
	});
}
