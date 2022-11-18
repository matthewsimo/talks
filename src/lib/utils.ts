import { quadInOut } from 'svelte/easing';
import type { FadeParams, TransitionConfig } from 'svelte/transition';

export const waitFor = (num: number): Promise<unknown> => {
	return new Promise((resolve) => setTimeout(resolve, num));
};

export function typewriter(node: HTMLElement, { duration = 400 } = { duration: 400 }) {
	const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

	if (!valid) {
		throw new Error(`This transition only works on elements with a single text node child`);
	}

	const text = node.textContent || '';
	return {
		duration,
		tick: (t: number) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}

export function myFade(
	node: HTMLElement,
	{ delay = 0, duration = 250, easing = quadInOut }: FadeParams = {}
): TransitionConfig {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		easing,
		css: (t) => `opacity: ${t * o}`
	};
}
