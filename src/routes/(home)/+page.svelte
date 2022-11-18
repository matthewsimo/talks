<script lang="ts">
	import { onMount } from 'svelte';
	import { gridClass } from '$lib/classes';
	import { typewriter, waitFor } from '$lib/utils';
	import Link from '$lib/Link.svelte';

	const greetings = ['Howdy,', 'Hi,', 'Hola,', 'Hallo,', 'Saluton,', 'Chào,'];
	let visible = false;
	const getRandIndex = () => Math.floor(Math.random() * greetings.length);
	let randIndex = getRandIndex();
	$: greeting = greetings[randIndex];

	let now = Date.now();

	const raf = async () => {
		const n = Date.now();
		// 10 sec interval
		if (n - now >= 3 * 1000) {
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

<div class={`${gridClass} leading-relaxed text-xl space-y-8 my-40`}>
	<h1 class="text-5xl">
		{#each greetings as aGreeting}
			{#if visible && greeting === aGreeting}
				<span transition:typewriter>{aGreeting}</span>
			{/if}
		{/each}
		I'm Matthew Simo
	</h1>

	<p>
		I'm a Software Engineer & UX Designer based in Texas and I like to build things for humans. I
		work as a Senior Solutions Architect of Front-End Engineering at{' '}
		<Link href="https://www.rightpoint.com/">Rightpoint</Link> where I lead teams that build software
		that aims to improves people&rsquo;s lives. You can usually find me exploring the intersection of
		humans &amp; computers.
	</p>
	<p>
		<Link href="/about">Find out more</Link> or
		<Link href="/posts">see some posts</Link>
	</p>
</div>
