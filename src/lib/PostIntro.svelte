<script lang="ts">
	import { format } from 'date-fns';
	import { onMount } from 'svelte';
	export let post: {
		id: string;
		title: string;
		img?: string;
		date: string;
		readingTime: {
			text: string;
		};
	};

	import { myFade } from '$lib/utils';

	let mounted = false;

	let opacityValue = 0;

	const handleScroll = () => {
		const { scrollY, innerHeight } = window;
		const modifier = scrollY > innerHeight ? 1 : Number(Number(scrollY / innerHeight).toFixed(3));

		document.documentElement.style.setProperty(`--scroll-position-blur`, `${50 * modifier}px`);

		// constrain this to values in 0.6 to 0.85
		document.documentElement.style.setProperty(
			`--scroll-modifier`,
			`${(0.85 - 0.6) * modifier + 0.6}`
		);
	};

	const [Y, M, D] = post.date.split('-');
	const postDate = format(new Date(Number(Y), Number(M) - 1, Number(D)), 'MMMM d, yyyy');

	onMount(() => {
		mounted = true;
		handleScroll();
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div
	class="relative w-full mt-[-224px] h-screen max-h-screen px-6 sm:px-8 md:px-10 lg:px-16 flex items-center justify-center overflow-scroll"
>
	{#if mounted}
		<div
			transition:myFade
			class={`relative grid grid-cols-6 grid-row-2 text-main border-4 border-main z-10 shadow-lg backdrop-blur-lg sm:max-w-3/4 pr-4`}
		>
			<div
				class="row-span-2 col-span-1 flex items-center justify-center mr-4 border-r-4 border-main"
			>
				<span
					class=" -rotate-90 transform-gpu relative inline-block font-bold leading-relaxed tracking-widest text-xl"
				>
					{post.id}
				</span>
			</div>
			<h2
				class="text-4xl sm:text-6xl leading-relaxed tracking-tighter  row-span-1 col-span-5 mt-4 mb-2"
			>
				{post.title}
			</h2>
			<h4
				class="row-span-1 col-span-5 mb-4 italic text-lg sm:text-xl font-extralight tracking-tight"
			>
				<time dateTime={post.date} class="whitespace-nowrap">
					{postDate}
				</time>{' '}
				|{' '}
				<span class="whitespace-nowrap">~{post.readingTime.text}</span>
			</h4>
		</div>
	{/if}
</div>

<div
	class="fixed inset-0 pointer-events-none w-screen h-screen max-w-vw max-h-screen bg-cover bg-center bg-no-repeat items-center justify-center before:block before:w-full before:h-full before:bg-main-900 before:bg-opacity-scroll before:backdrop-filter before:backdrop-contrast-125 before:backdrop-saturate-150 before:backdrop-blur-scroll before:absolute"
	style={`background-image: url(${post.img}); z-index: 0;`}
/>
