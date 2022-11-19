import { writable } from 'svelte/store';

const deckStore = () => {
	let max = 0;
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		setMax: (m: number) => (max = m),
		decrement: () => update((i) => (i - 1 < 0 ? max - 1 : i - 1)),
		increment: () => update((i) => (i + 1 === max ? 0 : i + 1)),
		reset: () => set(0)
	};
};

export default deckStore;
