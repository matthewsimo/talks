import { Feed, type Item } from 'feed';
import { getAllPosts } from '../(page)/posts/+page';

const domain = 'https://www.matthewsimo.com'

const author = {
	name: 'Matthew Simo',
	email: 'hi@matthewsimo.com',
	link: domain
};

export async function GET() {
	const feed = new Feed({
		title: 'matthewsimo.com',
		description:
			'The personal blog of Matthew Simo, Software Engineer & UX Designer based in Texas.',
		link: domain,
		id: `${domain}/`,
		language: 'en',
		copyright: `All rights reserved ${new Date().getFullYear()}, John Doe`,
		feedLinks: {
			atom: `${domain}/feed.xml`
		},
		image: `${domain}/favicon.jpg`,
		favicon: `${domain}/favicon.svg`,
		author,
	});

	const allPosts = await getAllPosts();

	allPosts
		.filter((p) => !p.draft)
		.forEach(async ({ title, slug, date, content }) => {

			const { html } = content.render();
			const item: Item = {
				title,
				link: `${domain}/posts/${slug}`,
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
