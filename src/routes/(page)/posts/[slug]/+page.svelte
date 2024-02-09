<script lang="ts">
	import type { PageData } from './$types';

	import PostIntro from '$lib/PostIntro.svelte';
	import ImageAttribution from '$lib/ImageAttribution.svelte';
	import { gridClass } from '$lib/classes';
	import HeadMeta from '$lib/HeadMeta.svelte';

	export let data: PageData;
	const { id, date, slug, title, img, imgAttribution, content, readingTime } = data;
</script>

<svelte:head><title>{title} | Matthew Simo</title></svelte:head>

<HeadMeta {title} url={`https://matthewsimo.com/posts/${slug}`} image={img} />

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
