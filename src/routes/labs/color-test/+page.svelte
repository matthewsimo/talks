<script lang="ts">
	const colorSteps = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const colorLightness = [10, 20, 28, 38, 50, 62, 73, 85, 98];

	let chroma = 0.049;
	let hue = 232.61;
</script>

<div class="bg-white flex flex-col gap-10 text-black">
	<div class="flex flex-row">
		<div class="flex flex-col space-y-4 p-4">
			<label for="chroma">Chroma</label>
			<input id="chroma" type="range" min="0" max="1" step=".001" bind:value={chroma} />
			<span>{chroma}</span>
		</div>

		<div class="flex flex-col space-y-4 p-4">
			<label for="hue">Hue</label>
			<input id="hue" type="range" min="0" max="360" step=".01" bind:value={hue} />
			<span>{hue}</span>
		</div>
	</div>

	<div class="flex flex-row justify-items-stretch gap-1">
		{#each colorSteps as swatch, i}
			<div
				class={`block flex-grow w-32 h-32`}
				style={`background-color: oklch(${colorLightness[i]}% ${chroma} ${hue})`}
			/>
		{/each}
	</div>
</div>
