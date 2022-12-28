<script lang="ts">
	import Heading from './Heading.svelte';
	import Link from './Link.svelte';

	export let link: string;
	export let title: string;
</script>

<Heading level={6} as="h4">
	<Link href={link}>{title}</Link>
</Heading>
