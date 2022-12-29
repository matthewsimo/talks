<script lang="ts">
	import { anchorClass, gridClass } from '$lib/classes';
	import LinkIcon from '$lib/icons/Link.svelte';
	import CodeIcon from '$lib/icons/Code.svelte';
	import HeadMeta from '$lib/HeadMeta.svelte';

	const projects = [
		{
			title: 'Memento Mori',
			link: 'https://memento-mori.matthewsimo.com',
			desc: 'Remember, you will die. A small project in an intentional effort to be more mindful of my time on this earth. Memento Mori is a weekly calendar that tracks the progress of your life and hopefully helps promote living more deeply.',
			source: 'https://github.com/matthewsimo/gart',
			img: `/assets/img/memento-mori.png`
		},
		{
			title: 'GART',
			link: 'https://gart.matthewsimo.com',
			desc: 'My simple generative art/creative coding environment built on sveltekit',
			source: 'https://github.com/matthewsimo/gart',
			img: undefined
		},
		{
			title: '40k TT',
			link: 'https://40k-tt.vercel.app',
			desc: 'Tabletop tool for pretty printing and sharing your 40k battlescribe rosters',
			source: 'https://github.com/matthewsimo/tt-site',
			img: undefined
		},
		{
			title: 'Dice Calc',
			link: 'https://40k-tt.vercel.app/dice-calc',
			desc: 'Simple calculator to see how many of your dice will pass a series of roles on average.',
			source: 'https://github.com/matthewsimo/tt-site/blob/main/src/routes/dice-calc.svelte',
			img: undefined
		},
		// Bbbreathe
		//
		{
			title: 'Coolors',
			link: 'http://coolors.matthewsimo.com/curve',
			desc: 'Exploration on picking unified color ramps',
			source: 'https://github.com/matthewsimo/coolors',
			img: undefined
		}
	];
</script>

<svelte:head><title>Projects | Matthew Simo</title></svelte:head>

<HeadMeta
	title="Projects"
	url={`https://matthewsimo.com/projects`}
	description={`A random collection of professional and hobby projects from Matthew Simo`}
/>

<article class={`${gridClass}`}>
	<div class="space-y-6 pb-10">
		<h1 class="text-4xl font-semibold ">Projects</h1>
		<p>
			The vast majority of my day-to-day work is under NDA so I can't feature it here but here's a
			random collection of professional and hobby projects.
		</p>
	</div>

	<ul class="space-y-10">
		{#each projects as { title, link, desc, source, img }}
			<li
				class="space-y-2 p-4 hover:bg-gradient-to-br hover:from-main-700/20 hover:to-main-800/20 rounded"
			>
				<h2 class="text-xl font-semibold inline-block">
					{title}
				</h2>
				<p class="">{desc}</p>
				<footer class="pt-4">
					<small class="text-sm flex flex-row justify-start flex-wrap gap-4 items-center">
						{#if link}
							<a class={`${anchorClass} inline-block`} href={link} title={`Visit ${title}`}>
								<LinkIcon classes="inline-block " /> Site
							</a>
						{/if}

						{#if source}
							<a class={anchorClass} href={source} title={`Source Code for ${title}`}>
								<CodeIcon classes="inline-block" /> Source
							</a>
						{/if}
					</small>
				</footer>
				{#if img}
					<a href={link}>
						<img class="py-4" src={img} alt={`Screenshot of ${title}`} />
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</article>
