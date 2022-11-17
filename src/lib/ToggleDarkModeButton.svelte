<script lang="ts">
	import { onMount } from 'svelte';
	import { focusClass } from './classes';
	import Moon from './icons/Moon.svelte';
	import Sun from './icons/Sun.svelte';

	export let classes = '';

	let mode: 'light' | 'dark' = 'light';
	let isListenerDisabled = false;

	onMount(() => {
		if (!window.matchMedia) return;
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
		if (prefersDark.matches) {
			mode = 'dark';
		}

		if (isListenerDisabled) {
			prefersDark.removeEventListener('change', matchListener);
		} else {
			prefersDark.addEventListener('change', matchListener);
		}
		return () => prefersDark.removeEventListener('change', matchListener);
	});

	const matchListener = (e: MediaQueryListEvent) => {
		if (isListenerDisabled) return;
		mode = e.matches ? 'dark' : 'light';
	};

	const handleClick = () => {
		const prop = (index: number) => `--primary-lightness-${index}`;
		const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8];

		const newValues = indices.map((v, i, a) =>
			getComputedStyle(document.documentElement)
				.getPropertyValue(prop(a[a.length - 1 - i]))
				.trim()
		);

		newValues.map((v, i) => {
			document.documentElement.style.setProperty(prop(i), v);
		});

		if (!isListenerDisabled) {
			isListenerDisabled = true;
		}

		mode = mode === 'dark' ? 'light' : 'dark';
	};
</script>

<button
	class={`text-main fill-current text-2xl w-5 h-5 ${focusClass} ${classes} `}
	on:click|preventDefault={handleClick}
>
	<svelte:component this={mode === 'dark' ? Sun : Moon} />
</button>
