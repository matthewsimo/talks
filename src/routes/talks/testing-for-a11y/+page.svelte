<script>
	import { Deck, Slide } from '$lib/Deck';
	import Heading from '$lib/Heading.svelte';
	import HeadMeta from '$lib/HeadMeta.svelte';
	import Link from '$lib/Link.svelte';

	const title = `Testing for a11y`;

	const resourceLinks = [
		{ l: `https://github.com/matthewsimo/vite-react-axe-test-demo`, d: `Demo Repo` },
		{ l: `https://github.com/Rightpoint/FED-preset/tree/main/packages/axe`, d: `FED Axe Preset` },
		{ l: `https://github.com/nickcolley/jest-axe`, d: `jest-axe` },
		{ l: `https://github.com/chaance/vitest-axe`, d: `vitest-axe` },
		{
			l: `https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US`,
			d: `axe Dev Tools Chrome Extension`
		},
		{ l: `https://www.deque.com/axe/devtools/`, d: `axe Dev Tools Site` }
	];
</script>

<svelte:head><title>{title} | Matthew Simo</title></svelte:head>

<HeadMeta
	{title}
	url={`https://matthewsimo.com/talks/testing-for-a11y`}
	description={`A slide deck for a talk covering the basics of testing for a11y`}
/>

<Deck>
	<Slide>
		<Heading classes="text-center">{title}</Heading>
	</Slide>

	<Slide>
		<Heading level={2} as="h2">Agenda</Heading>
		<ol class="list-decimal mt-6 space-y-2">
			<li class="text-2xl">Intro/Why</li>
			<li class="text-2xl">Code Demo</li>
			<li class="text-2xl">axe Dev Tools Demo</li>
			<li class="text-2xl">Resources</li>
		</ol>
	</Slide>

	<Slide>
		<Heading classes="text-center" level={2} as="h2">Common Excuses</Heading>
		<div class="mx-20">
			<ol class="list-decimal mt-6 space-y-2">
				<li class="text-2xl">"It's not that important"</li>
				<li class="text-2xl">"We'd rather focus on features"</li>
				<li class="text-2xl">"It's too hard"</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<img
			class="mx-auto"
			alt={`Robin saying "It's not that important" and Batman slapping Robin saying "You're legally obligated"`}
			src="https://i.imgflip.com/7273a1.jpg"
		/>
	</Slide>

	<Slide>
		<img
			class="mx-auto"
			alt={`Robin saying "We'd rather focus on features" and Batman slapping Robin saying "Making sure as many users can access your features is biggest bang for buck to maximize value to your users "`}
			src="https://i.imgflip.com/7272ln.jpg"
		/>
	</Slide>

	<Slide>
		<img
			class="mx-auto"
			alt={`Robin saying "It's too hard" and Batman slapping Robin saying "Maybe, but not really anymore"`}
			src="https://i.imgflip.com/72737u.jpg"
		/>
	</Slide>

	<Slide>
		<figure>
			<blockquote>
				<Heading classes="text-center leading-relaxed" level={2} as="h2"
					>Achieving the highest levels of a11y compliance can be really difficult but there's some
					low hanging fruit that can get you well on your way with minimal investment.</Heading
				>
			</blockquote>
			<figcaption class="text-right m-8">&mdash; Matthew Simo</figcaption>
		</figure>
	</Slide>

	<Slide>
		<Heading classes="text-center" level={2} as="h2">Tooling</Heading>

		<ul class="mt-6 space-y-4">
			<li class="text-2xl">Jest-axe / Vitest-axe: plug into automated tests</li>
			<li class="text-2xl">axe Dev Tools: manual polish step at build out time</li>
		</ul>
	</Slide>

	<Slide>
		<Heading classes="text-center" level={2} as="h2">
			<Link href={resourceLinks[0].l}>[Code Demo]</Link>
		</Heading>
	</Slide>

	<Slide>
		<Heading classes="text-center" level={2} as="h2">[axe Dev Tools Demo]</Heading>
	</Slide>

	<Slide>
		<Heading level={2} as="h2">Resources</Heading>
		<ul class="mt-6 space-y-4">
			{#each resourceLinks as link}
				<li>
					<Link href={link.l}>
						{link.d}
					</Link>
				</li>
			{/each}
		</ul>
	</Slide>

	<Slide>
		<Heading as="h2">Thanks!</Heading>
	</Slide>
</Deck>
