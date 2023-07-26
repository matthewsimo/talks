<script lang="ts">
	import { waitFor } from '$lib/utils';
	import { getContext, onMount } from 'svelte';

	import type createDeckStore from './DeckStore';

	export let padding = '25vh 15vw';
	export let classes = '';
	let slide: HTMLDivElement;
	// @hmr:keep
	let slideNum: number;

	const deckStore: ReturnType<typeof createDeckStore> = getContext('deckStore');

	$: currentIndex = $deckStore;

	onMount(async () => {
		await waitFor(10);
		if (!slideNum) {
			slideNum = Number(slide.getAttribute('data-slide-number')) || 0;
		}
	});
</script>

<div
	bind:this={slide}
	style:padding
	class={`w-screen h-screen box-border overflow-hidden absolute inset-0 transition-transform motion-reduce:transition-none ${classes} ${
		currentIndex === slideNum ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
	}`}
>
	<slot />
</div>
