<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { anchorClass } from '$lib/classes';
	import ToggleDarkModeButton from '$lib/ToggleDarkModeButton.svelte';

	import createDeckStore from './DeckStore';

	export let classes = '';

	let slidesContainer: HTMLDivElement;
	let slideCount = 0;
	let deckStore = createDeckStore();

	setContext('deckStore', deckStore);

	$: console.log({ currentIndex: $deckStore });

	const handleKeydown = (e: KeyboardEvent) => {
		const key = e.key;
		switch (key) {
			case 'ArrowLeft':
			case 'a':
			case 'A':
				deckStore.decrement();
				break;
			case 'ArrowRight':
			case 'd':
			case 'D':
				deckStore.increment();
				break;
		}
	};

	const handleLoad = () => {
		const slides = slidesContainer.querySelectorAll(':scope > div');
		slideCount = slides.length;
		slides.forEach((slide, i) => {
			slide.setAttribute('data-slide-number', `${i}`);
		});

		deckStore.setMax(slideCount);
		console.log({ slidesContainer, slides, count: slides.length });
	};

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		handleLoad();
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<div class={`w-screen h-screen overflow-hidden ${classes}`}>
	<div bind:this={slidesContainer} class="relative">
		<slot />
	</div>
	<div class="absolute top-6 right-6 space-x-4 flex items-center">
		<a class={anchorClass} href="/about">matthewsimo</a>
		<ToggleDarkModeButton
			classes="hover:text-main-400 hover:drop-shadow-md transition-shadow transition-colors duration-200 ease-in-out"
		/>
	</div>
	{#if slideCount > 0}
		<div class="absolute bottom-6 left-6 space-x-4 flex items-center">
			<small class="text-main-600">
				{$deckStore + 1} / {slideCount}
			</small>
		</div>
		<div class="absolute bottom-6 right-6 space-x-4 flex items-center">
			<button class={anchorClass} on:click={() => deckStore.decrement()}>Prev</button>
			<button class={anchorClass} on:click={() => deckStore.increment()}>Next</button>
		</div>
	{/if}
</div>
