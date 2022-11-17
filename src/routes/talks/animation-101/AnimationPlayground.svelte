<script lang="ts">
	const timingFunctions = {
		linear: (t: number) => t,
		easeInSine: (t: number) => 1 - Math.cos((t * Math.PI) / 2),
		easeInElastic: (t: number) => {
			const c4 = (2 * Math.PI) / 3;

			return t === 0
				? 0
				: t === 1
				? 1
				: -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
		},
		easeInOutQuad: (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2)
	};

	export let withEasings: boolean = false;

	let progress = 0;
	let maxDistance = 320;
	let timingFunction: keyof typeof timingFunctions = 'linear';

	const lerp = (start: number, end: number, progress: number) => start + (end - start) * progress;
	$: tF = timingFunctions[timingFunction];
	$: lerpString = lerp(0, maxDistance, tF(progress));
</script>

<div class="min-w-full min-h-full">
	<div class="w-full flex py-5 px-8 space-x-5 justify-end items-end">
		{#if withEasings}
			<div class="space-x-2">
				<label for="timing">Timing Function: </label>
				<select class="text-main-900" bind:value={timingFunction} id="timing">
					{#each Object.keys(timingFunctions) as v}
						<option value={v}>
							{v}
						</option>
					{/each}
				</select>
			</div>
		{/if}

		<div class="space-x-2">
			<label for="maxDistance">
				Max Distance:{' '}
				<span class="font-mono">{Number(maxDistance)}</span>
			</label>
			<input
				class="w-30"
				bind:value={maxDistance}
				type="range"
				min="320"
				max="650"
				step="1"
				id="maxDistance"
			/>
		</div>
		<div class="space-x-2">
			<label for="progress">
				Progress:{' '}
				<span class="font-mono">{Number(progress).toFixed(2)}</span>
			</label>
			<input
				class="w-30"
				bind:value={progress}
				type="range"
				min="0"
				max="1"
				step="0.05"
				id="progress"
			/>
		</div>
	</div>
	<div class="bg-gray-100 w-full h-96 relative">
		<div class="bg-gray-400 w-px h-full absolute top-0 left-32" />
		<div class="bg-gray-400 w-full h-px absolute bottom-1/3" />

		<span class="text-main-900 text-2xl absolute top-12 right-48">
			{lerpString} = lerp(0, {maxDistance},{' '}
			{tF(progress)})
		</span>
		<div class="w-full absolute bottom-1/3 inset-x-32">
			<div
				class="absolute bg-gray-600 w-12 h-12 left-0 -top-12"
				style:transform={`translateX(${lerp(0, maxDistance, tF(progress))}px)`}
			/>

			<div
				class="absolute bg-red-400 w-12 h-12 animate-pulse left-0 -top-12"
				style:transform={`translateX(${maxDistance}px)`}
			/>
		</div>
	</div>
</div>
