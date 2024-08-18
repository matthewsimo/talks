<script>
	import { Deck, Slide } from '$lib/Deck';
	import Heading from '$lib/Heading.svelte';
	import HeadMeta from '$lib/HeadMeta.svelte';
	import Link from '$lib/Link.svelte';

	const title = `Svelte Ecosystem Overview`;

	const resourceLinks = [
		{ l: `https://svelte.dev/docs/introduction`, d: `Svelte Docs` },
		{ l: `https://kit.svelte.dev/docs/introduction`, d: `SvelteKit Docs` },
		{ l: `https://learn.svelte.dev/tutorial/welcome-to-svelte`, d: `Svelte Guided Tutorial` },
		{
			l: `https://learn.svelte.dev/tutorial/introducing-sveltekit`,
			d: `SvelteKit Guided Tutorial`
		},
		{ l: `https://svelte.dev/chat`, d: `Svelte Discord` },
		{ l: `https://sveltesociety.dev/`, d: `Svelte Society` },
		{ l: `https://www.sveltesummit.com/`, d: `Svelte Summit` },
		{
			l: `https://matthewsimo.com/posts/2023-07-26-svelte-ecosystem-overview`,
			d: `Accompanying Comprehensive Article`
		}
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
			<li class="text-2xl">Ecosystem Framing</li>
			<li class="text-2xl">Nuts & Bolts</li>
			<li class="text-2xl">Extras</li>
			<li class="text-2xl">Community</li>
			<li class="text-2xl">Resources</li>
		</ol>
	</Slide>

	<Slide>
		<Heading classes="text-center" level={2} as="h2">What's an ecosystem?</Heading>
	</Slide>

	<Slide padding="15vh 15vw">
		<img class="mx-auto" alt={`Ecosystem Diagram`} src="/assets/img/ecosystem-diagram.png" />
	</Slide>

	<Slide>
		<Heading classes="text-center" level={2} as="h2">Nuts & Bolts</Heading>
		<div class="mx-20">
			<ol class="list-decimal mt-6 space-y-2">
				<li class="text-2xl">Svelte</li>
				<li class="text-2xl">Svelte Kit</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<Heading classes="text-center" level={2} as="h2">Extras</Heading>
		<div class="mx-20">
			<ol class="list-decimal mt-6 space-y-2">
				<li class="text-2xl">Guided Interactive Tutorial</li>
				<li class="text-2xl">REPL Playground</li>
				<li class="text-2xl">Tooling & Best Practices</li>
				<li class="text-2xl">Support Methods</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<Heading classes="text-center" level={2} as="h2">Community</Heading>
		<div class="mx-20">
			<ol class="list-decimal mt-6 space-y-2">
				<li class="text-2xl">Svelte Society)</li>
				<li class="text-2xl">REPL Playground</li>
				<li class="text-2xl">Tooling & Best Practices</li>
			</ol>
		</div>
	</Slide>

	<Slide>
		<Heading classes="text-center" level={2} as="h2">But, do they have X package?</Heading>
	</Slide>

	<Slide padding="15vh 15vw">
		<img
			class="mx-auto"
			alt={`Integration sandwich: Your favorite package is probably using some native JS package under the hood.`}
			src="/assets/img/integration-sandwich.png"
		/>
	</Slide>

	<Slide padding="15vh 15vw">
		<img
			class="mx-auto"
			alt={`Ecosystem Diagram Expanded`}
			src="/assets/img/ecosystem-diagram-expanded.png"
		/>
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
