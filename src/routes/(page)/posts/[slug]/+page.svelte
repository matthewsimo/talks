<script lang="ts">
	import type { PageData } from './$types';

	import PostIntro from '$lib/PostIntro.svelte';
	import ImageAttribution from '$lib/ImageAttribution.svelte';
	import { gridClass } from '$lib/classes';
	import Json from '$lib/Json.svelte';

	export let data: PageData;
	const { id, date, title, img, imgAttribution, content, readingTime } = data;
</script>

<PostIntro post={{ id, date, title, img, readingTime }} />
<article class={`${gridClass} relative`}>
	<!-- <Json {data} /> -->
	<div class="space-y-6 pb-10">
		<svelte:component this={content} />

		{#if imgAttribution}
			<ImageAttribution>{@html imgAttribution}</ImageAttribution>
		{/if}
	</div>
</article>
