<script lang="ts">
	import Texas from '$lib/icons/Texas.svelte';
	import Rss from './icons/RSS.svelte';
	import Link from './Link.svelte';

	import { gridClass } from './classes';
</script>

<footer class={`pt-24 pb-20 z-10 relative ${gridClass}`}>
	<small
		>&copy; {new Date().getFullYear()}
		<Link href="/about">Matthew Simo</Link>
		&mdash; Made in Texas
		<span
			class="inline-block w-6 align-middle mr-1"
			title="Texas Icon - Icon made by Good Ware from www.flaticon.com"
		>
			<Texas />
		</span>

		<Link href="/feed.xml">
			<span class="p-1 align-baseline relative -top-[1px]">
				<Rss classes="inline-block w-4" />
			</span>
		</Link>
	</small>
</footer>
