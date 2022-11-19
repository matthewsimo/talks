<script lang="ts">
	export let url: string;
	export let title: string;
	export let description: string = '';
</script>

<svelte:head>
	<meta property="og:url" content={url} />
	<meta name="twitter:url" content={url} />

	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />

	{#if description}
		<meta property="og:description" content={description} />
		<meta property="twitter:description" content={description} />
	{/if}
	<meta name="twitter:card" content="summary" />
</svelte:head>
