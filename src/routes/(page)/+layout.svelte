<script lang="ts">
	import Backdrop from '$lib/Backdrop.svelte';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Backdrop>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</Backdrop>
