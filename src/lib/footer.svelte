<script lang="ts">
	import Texas from '$lib/icons/texas.svelte';
	import { anchorClass, gridClass } from './classes';

	const dividerClass = `before:content-[''] before:block before:relative before:col-start-2 before:-top-12 before:border-b before:border-b-main-100/20 before:h-1 before:rounded-sm before:w-full before:mx-auto before:bg-main-900`;
</script>

<footer class={`pt-12 pb-20 ${gridClass} ${dividerClass}`}>
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
