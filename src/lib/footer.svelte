<script lang="ts">
	import Texas from '$lib/icons/Texas.svelte';
	import { anchorClass, gridClass } from './classes';
</script>

<footer class={`pt-16 pb-20 ${gridClass}`}>
	<small
		>&copy; <a class={anchorClass} href="/about">Matthew Simo</a>
		{new Date().getFullYear()} &mdash; Made in Texas
		<span
			class="inline-block w-6 align-middle"
			title="Texas Icon - Icon made by Good Ware from www.flaticon.com"
		>
			<Texas />
		</span>
	</small>
</footer>
