<script lang="ts">
	import { onMount } from 'svelte';
	import { gridClass } from '$lib/classes';
	import { typewriter, waitFor } from '$lib/utils';
	import Link from '$lib/Link.svelte';
	import HeadMeta from '$lib/HeadMeta.svelte';

	const greetings = ['Howdy,', 'Hi,', 'Hola,', 'Hallo,', 'Saluton,', 'Chào,'];
	let visible = false;
	const getRandIndex = () => Math.floor(Math.random() * greetings.length);
	let randIndex = getRandIndex();
	$: greeting = greetings[randIndex];

	let now = Date.now();

	const raf = async () => {
		const n = Date.now();
		// 10 sec interval
		if (n - now >= 8 * 1000) {
			now = n;
			visible = false;
			await waitFor(400);
			randIndex = getNewIndex();
			visible = true;
			await waitFor(400);
		}

		requestAnimationFrame(raf);
	};

	// Get a new index and make sure it's not the same!
	const getNewIndex = () => {
		const oldIndex = randIndex;
		let newIndex = getRandIndex();
		while (oldIndex === newIndex) {
			newIndex = getRandIndex();
		}
		return newIndex;
	};

	onMount(async () => {
		visible = true;
		await raf();
	});
</script>

<svelte:head><title>Matthew Simo | Software Engineer & UX Designer</title></svelte:head>

<HeadMeta
	title="Matthew Simo"
	url="https://matthewsimo.com"
	description="The Talks of Matthew Simo, a Software Engineer & UX Designer based in Texas"
/>

<div class={`${gridClass} leading-relaxed text-xl space-y-8 my-40`}>
	<ul class="space-y-4">
		<li>
			<Link href="/animation-101">Animation 101</Link>
		</li>
		<li>
			<Link href="/exploring-mitosis">Exploring Mitosis</Link>
		</li>
		<li>
			<Link href="/svelte-ecosystem-overview">Svelte Ecosystem Overview</Link>
		</li>
		<li>
			<Link href="/testing-for-a11y">Testing for A11y</Link>
		</li>
	</ul>
</div>
