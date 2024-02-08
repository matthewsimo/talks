<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<div
	class="transition-all ease-in-out duration-100 motion-reduce:transition-none bg-main bg-gradient-to-br from-main-900 to-main-800/70  text-main font-light min-h-screen mx-auto relative overflow-hidden space-y-8"
	transition:fly={{ duration: 200, y: -60 }}
>
	<slot />
</div>
