<script lang="ts">
	import { page } from '$app/stores';
	import MDXLayout from '$lib/MDXLayout.svelte';
</script>

<h1>{$page.params.slug} - slug page</h1>

<MDXLayout />
