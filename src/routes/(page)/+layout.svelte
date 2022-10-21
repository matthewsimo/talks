<script lang="ts">
	import Backdrop from '$lib/backdrop.svelte';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Backdrop>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</Backdrop>
