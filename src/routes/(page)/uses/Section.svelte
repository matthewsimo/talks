<script lang="ts">
	export let title: string;
	export let items: Record<string, string>[];
</script>

<section class="space-y-8 py-4">
	<h2 class="text-3xl">{title}</h2>

	{#if items}
		<dl class="space-y-2">
			{#each items as { name, desc }}
				<dt class="text-xl">{name}</dt>
				<dd class="pb-4">
					{@html desc}
				</dd>
			{/each}
		</dl>
	{/if}
</section>
