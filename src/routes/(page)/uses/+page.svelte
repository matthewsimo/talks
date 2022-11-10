<script lang="ts">
	import { gridClass } from '$lib/classes';
	import Section from './Section.svelte';
	import { usesData } from './data';
</script>

<article class={gridClass}>
	<div class="pb-8 space-y-8">
		<h1 class="text-4xl font-semibold ">Uses</h1>

		<p class="text-lg">Here's a breakdown of the tools and stuff I use day-to-day.</p>
	</div>

	{#each usesData as section}
		<Section title={section.title} items={section.items} />
	{/each}
</article>
