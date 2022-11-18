<script lang="ts">
	import type { PageData } from './$types';

	import { gridClass } from '$lib/classes';
	import HeadMeta from '$lib/HeadMeta.svelte';
	export let data: PageData;
</script>

<HeadMeta
	title="Posts"
	url={`https://matthewsimo.com/posts`}
	description={`Blog posts written by Matthew Simo`}
/>

<article class={`${gridClass}`}>
	<div class="space-y-6 pb-10">
		<h1 class="text-4xl font-semibold ">Posts</h1>

		{#if data.allPosts}
			<ul class="text-xl py-6 space-y-2">
				{#each data.allPosts as { title, id, date, slug, img, readingTime }}
					<li>
						{id} -
						<a
							class="outline-none focus:underline focus:text-main-400 focus:ring focus:ring-main focus:ring-offset-4 focus:ring-offset-main focus:ring-opacity-75 rounded-sm  text-main-primary font-normal hover:underline hover:text-main-400 cursor-pointer"
							href={`/posts/${slug}`}>{title}</a
						>
						- <time class="text-main-300" datetime={date}>{date}</time>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</article>
