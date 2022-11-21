<script lang="ts">
	import { fly } from 'svelte/transition';
	import { formatDistanceToNow } from 'date-fns';
	import { anchorClass, codeClass, gridClass } from '$lib/classes';
	import { waitFor } from '$lib/utils';
	import HeadMeta from '$lib/HeadMeta.svelte';
	import Link from '$lib/Link.svelte';
	import Clients from './Clients.svelte';

	let copyMsg: false | 'Success' | 'Error' = false;

	const benBday = formatDistanceToNow(new Date(2020, 5, 30));
	const henryBday = formatDistanceToNow(new Date(2022, 8, 13));

	const username = `matthewsimo`;
	const discordId = `#7931`;

	const handleClick = async (e: MouseEvent): Promise<void> => {
		try {
			await navigator.clipboard.writeText(`${username}${discordId}`);
			copyMsg = 'Success';
			await waitFor(3000);
			copyMsg = false;
		} catch (error) {
			console.log('copy failed!', error);
			copyMsg = 'Error';
			await waitFor(3000);
			copyMsg = false;
		}
	};
</script>

<svelte:head><title>About Matthew Simo</title></svelte:head>

<HeadMeta
	title="About Matthew Simo"
	url="https://matthewsimo.com/about"
	description="Hi there, I'm Matthew - I fight for the user. I'm a born and raised Texan and have been building things for the web for fifteen years."
/>

<article class={`${gridClass}`}>
	<div class="space-y-6 pb-10">
		<h1 class="text-4xl font-semibold ">About</h1>
		<div>
			<img
				class="aspect-square w-1/2 sm:w-64 bg-slate-600 float-right ml-6 mb-6"
				src="assets/img/matthewsimo-avatar.jpg"
				alt="Matthew Simo Mugshot"
			/>
		</div>
		<p>
			Hi there, I'm Matthew - I fight for the user. I'm a born and raised Texan and have been
			building things for the web for fifteen years.
		</p>

		<p>
			I like to contribute to digital interactive experiences that delight and enrich people's
			lives. I primarily think of myself as a developer but have a special interest in making sure
			the UX and accessibity of the things I build are top notch too. Recently, I've been focusing
			on building and scaling teams.
		</p>

		<p>
			I'm a father of two beautiful boys, one is {benBday} old & the other is {henryBday} old! I enjoy
			reading, rock climbing, and taking my dog, Jayne girl, on walks.
		</p>

		<p>
			You can find out more about the tools I like to <Link href="/uses"
				>use and my general set up over here</Link
			>.
		</p>
	</div>

	<div class="space-y-6 pb-10">
		<h2 class="text-2xl font-semibold">Selected Clients</h2>

		<p>
			I've had the good fortune of working with some fabulous clients and IP, here is a small,
			curated list. You can see a list of selected <Link href="/projects">projects over here</Link>.
		</p>

		<Clients />
	</div>

	<div class="space-y-6 pb-10">
		<h2 class="text-2xl font-semibold">Elsewhere</h2>

		<ul>
			<li>
				Email:
				<Link href={`mailto:hi@${username}.com?subject=Howdy, I saw your site`}>
					hi@{username}.com
				</Link>
			</li>
			<li>
				Twitter:
				<Link href={`http://twitter.com/${username}`}>@{username}</Link>
			</li>
			<li>
				GitHub:
				<Link href={`http://github.com/${username}`}>{username}</Link>
			</li>
			<li>
				Duolingo:
				<Link href={`https://www.duolingo.com/profile/${username}`}>
					{username}
				</Link>
			</li>
			<li>
				Discord:
				<span
					class={`${anchorClass} inline-block ${!copyMsg ? 'cursor-copy' : 'cursor-default'}`}
					on:click={handleClick}>{username}<span class="text-main-400">{discordId}</span></span
				>
				{#if copyMsg === 'Success'}
					<span class="inline-block" transition:fly={{ y: 6, duration: 500 }}>Copied!</span>
				{/if}

				{#if copyMsg === 'Error'}
					<span class="inline-block" transition:fly={{ y: 6, duration: 500 }}>Error Copying!</span>
				{/if}
			</li>
		</ul>
	</div>

	<div class="space-y-6 pb-10">
		<h2 class="text-2xl font-semibold">This Site</h2>
		<p>
			This site is designed and built by myself with the purpose of being <strong
				class="font-semibold">uncomplicated</strong
			>, <strong class="font-semibold">flexible</strong>, and
			<strong class="font-semibold">low-maintenance</strong>. I want to maintain a low level of
			complexity and keep the number of technologies to a minimum. Another goal is that this site
			acts as a creative outlet for self expressions and I don't know where I want to take things in
			the future so I don't want to limit creativity or possibilities. Since I've got other stuff
			higher on my priority list, I need things to "just work" with as little tinkering as possible
			&mdash; I want to write and experiment not fiddle with a site that is supposed to allow me to
			write and experiment.
		</p>
		<p>
			It is built with Svelte & <Link href="https://kit.svelte.dev/">Svelte Kit</Link>. Styled with
			<Link href="https://tailwindcss.com/">tailwindcss</Link>. Articles are written in <Link
				href="https://www.markdownguide.org/">markdown</Link
			>
			and processed by
			<Link href="https://mdsvex.com/">mdsvex</Link>. Any icons used are from the fantastic
			<Link href="https://akveo.github.io/eva-icons/">Eva Icons</Link> set.
		</p>

		<p>
			I've opted to keep dependencies that need to load to a minimum so I'm having <Link
				href="https://rsms.me/inter/">Inter</Link
			>
			to the heavy lifting for headings and body copy. I've set the general type with the following stack:
			<code class={codeClass}>
				'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
				"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
				"Segoe UI Symbol", "Noto Color Emoji";
			</code>
		</p>

		<p>
			And for monospace needs, I'm using:
			<code class={codeClass}>
				ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New",
				monospace
			</code>
		</p>
	</div>
</article>
