<script lang="ts">
	export let url: string;
	export let title: string;
	export let description: string = '';
	export let image: string = '';
</script>

<svelte:head>
	<meta property="og:url" content={url} />
	<meta name="twitter:url" content={url} />

	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />

	{#if description}
		<meta property="og:description" content={description} />
		<meta name="twitter:description" content={description} />
	{/if}
	<meta name="twitter:card" content="summary" />

	{#if image}
		<meta property="og:image" content={image} />
		<meta name="twitter:image" content={image} />
	{/if}
</svelte:head>
