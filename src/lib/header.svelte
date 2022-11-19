<script lang="ts">
	import { page } from '$app/stores';
	import { gridClass } from './classes';
	import ToggleDarkModeButton from './ToggleDarkModeButton.svelte';
	import { waitFor } from './utils';

	$: isPage = (p: string): boolean => {
		return $page.status === 200 && $page.url?.pathname?.startsWith(p);
	};

	let justClicked = false;

	const onClick = async () => {
		justClicked = true;
		await waitFor(250);
		justClicked = false;
	};

	const menuClass = `menu text-lg grid grid-cols-3 text-center relative `;
	const menuIndicatorClass = `menu-indicator transition-all duration-250 ease-in-out-back opacity-0 translate-x-full -translate-y-4 block absolute rounded-sm h-2 w-1/3 -top-6 bg-main-primary`;
	const menuItemClass = `menu-item relative `;
	const currentClass = `is-current text-main-primary`;
	const headerAnchorClass = `px-5 py-2 underline-offset-auto hover:underline`;
</script>

<nav class={`${gridClass} py-20 z-10 relative`}>
	<div class="flex flex-row justify-between">
		<div class="flex flex-row gap-6">
			<h1 class="font-semibold text-2xl">
				<a href="/">Matthew&nbsp;Simo</a>
			</h1>
			<div class="flex flex-row gap-6 items-center">
				<ul class={`${menuClass} ${justClicked && '[&_>_span]:bg-main-700'}`}>
					<li class={`${menuItemClass} ${isPage('/about') ? currentClass : ''}`}>
						<a on:click={onClick} class={headerAnchorClass} href="/about">About</a>
					</li>
					<li class={`${menuItemClass} ${isPage('/posts') ? currentClass : ''}`}>
						<a on:click={onClick} class={headerAnchorClass} href="/posts">Posts</a>
					</li>
					<li class={`${menuItemClass} ${isPage('/labs') ? currentClass : ''}`}>
						<a on:click={onClick} class={headerAnchorClass} href="/projects">Projects</a>
					</li>
					<span class={`${menuIndicatorClass}`} aria-hidden="true" />
				</ul>
			</div>
		</div>
		<ToggleDarkModeButton />
	</div>
</nav>

<style>
	.menu-item:nth-child(1).is-current ~ .menu-indicator {
		transform: translateX(0) translateY(0);
		opacity: 1;
	}

	.menu-item:nth-child(2).is-current ~ .menu-indicator {
		transform: translateX(100%) translateY(0);
		opacity: 1;
	}

	.menu-item:nth-child(3).is-current ~ .menu-indicator {
		transform: translateX(200%) translateY(0);
		opacity: 1;
	}

	.menu-item:nth-child(1):hover ~ .menu-indicator {
		transform: translateX(0) translateY(0);
		opacity: 1;
	}

	.menu-item:nth-child(2):hover ~ .menu-indicator {
		transform: translateX(100%) translateY(0);
		opacity: 1;
	}

	.menu-item:nth-child(3):hover ~ .menu-indicator {
		transform: translateX(200%) translateY(0);
		opacity: 1;
	}
</style>
