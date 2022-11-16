<script lang="ts">
	import { browser } from '$app/environment';
	import { anchorClass, gridClass } from '$lib/classes';
	import { typewriter } from '$lib/utils';

	const greetings = ['Howdy', 'Hi', 'Hola', 'Hallo', 'Saluton', 'Chào'];
	const getRandIndex = () => Math.floor(Math.random() * greetings.length);
	let randIndex = getRandIndex();
	$: greeting = greetings[randIndex];

	let now = Date.now();

	const raf = () => {
		const n = Date.now();
		// 10 sec interval
		if (n - now >= 10 * 1000) {
			now = n;
			getNewIndex();
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
		randIndex = newIndex;
	};

	if (browser) {
		raf();
	}
</script>

<div class={`${gridClass} leading-relaxed text-xl space-y-8 my-40`}>
	<h1 class="text-5xl">
		<span transition:typewriter>{greeting}</span>, I'm Matthew
	</h1>
	<p>
		I'm a Software Engineer & UX Designer based in Texas and I like to build things for humans. I
		work as a Senior Solutions Architect of Front-End Engineering at{' '}
		<a href="https://www.rightpoint.com/">Rightpoint</a> where I lead teams that build software that
		aims to improves people&rsquo;s lives. You can usually find me exploring the intersection of humans
		&amp; computers.
	</p>
	<p>
		<a class={anchorClass} href="/about">Find out more</a> or
		<a class={anchorClass} href="/posts">see some posts</a>
	</p>
</div>
