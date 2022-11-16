<script lang="ts">
	import { anchorClass, gridClass } from '$lib/classes';
	import Json from '$lib/Json.svelte';
	import Link from '$lib/icons/Link.svelte';
	import Code from '$lib/icons/Code.svelte';

	const projects = [
		{
			title: 'GART',
			link: 'http://gart.matthewsimo.com',
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
								<Link classes="inline-block " /> Site
							</a>
						{/if}

						{#if source}
							<a class={anchorClass} href={source} title={`Source Code for ${title}`}>
								<Code classes="inline-block" /> Source
							</a>
						{/if}
					</small>
				</footer>
			</li>
		{/each}
	</ul>
</article>
