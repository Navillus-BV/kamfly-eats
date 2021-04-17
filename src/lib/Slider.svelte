<script lang="ts">
	export let min: number = 0;
	export let max: number = 100;
	export let step: number = 1;
	export let value: number = 0;
	export let label: string = undefined;
	export let format: (value: number) => string = defaultFormat;

	function defaultFormat(value: number) {
		return value.toString();
	}

	function remToPx(rem: number) {
		return rem * parseInt(getComputedStyle(document.documentElement).fontSize);
	}

	$: displayValue = format(value);
	$: valuePercent = Number((value - min) / (max - min));

	let inputElem: HTMLInputElement;
	let valueElem: HTMLDivElement;
	let innerWidth: number;

	$: inputElemWidth = innerWidth && inputElem && inputElem.getBoundingClientRect().width;
	$: valueElemWidth = innerWidth && valueElem && valueElem.getBoundingClientRect().width;

	let valueTransform = 0;
	$: transformMax = inputElemWidth && inputElemWidth - valueElemWidth / 2;

	$: {
		if (inputElemWidth && valueElemWidth) {
			const thumbCenter = inputElemWidth * valuePercent;
			const valueCenter = valueElemWidth / 2;
			const thumbWidth = remToPx(1.5);
			const thumbOffset = thumbWidth / 2 - valuePercent * thumbWidth;

			valueTransform = thumbCenter - valueCenter + thumbOffset;
		}
	}
</script>

<svelte:window bind:innerWidth />

<div class="slider">
	<div
		id="value"
		style="transform: translateX(clamp(-1.5rem, {valueTransform}px, {transformMax}px));"
		bind:this={valueElem}
	>
		{displayValue}
	</div>
	<input type="range" id="slider" {min} {max} {step} bind:value bind:this={inputElem} />

	{#if label}
		<label for="slider">{label}</label>
	{/if}
</div>

<style>
	.slider {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 80vw;
		margin: 0 auto;
		width: 100%;
	}

	#value {
		background: var(--primary);
		display: inline-block;
		color: var(--fg-alt);
		font-weight: bold;
		font-size: var(--text-sm);
		padding: var(--spacing-1) var(--spacing-3);
		border-radius: var(--radius-sm);
		position: relative;
		margin-bottom: 1rem;
	}

	#value:after {
		content: '';
		position: absolute;
		border-top: 0.5rem solid var(--primary);
		border-left: 0.25rem solid transparent;
		border-right: 0.25rem solid transparent;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
	}

	label {
		margin-top: var(--spacing-4);
		font-size: var(--text-sm);
		font-weight: normal;
		text-align: center;
		width: 100%;
	}

	/* https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/ */
	input[type='range'] {
		-webkit-appearance: none; /* Hides the slider so that custom slider can be made */
		width: 100%; /* Specific width is required for Firefox. */
		background: transparent; /* Otherwise white in Chrome */
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
	}

	input[type='range']:focus {
		outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
	}

	input[type='range']::-ms-track {
		width: 100%;
		cursor: pointer;

		/* Hides the slider so custom styles can be added */
		background: transparent;
		border-color: transparent;
		color: transparent;
	}

	/* Special styling for WebKit/Blink */
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		border: var(--border-lg) solid var(--primary);
		height: 1.5rem;
		width: 1.5rem;
		border-radius: var(--radius-full);
		background: var(--bg);
		cursor: pointer;
		margin-top: -0.375em; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
	}

	/* All the same stuff for Firefox */
	input[type='range']::-moz-range-thumb {
		border: var(--border-lg) solid var(--primary);
		height: 1.5rem;
		width: 1.5rem;
		border-radius: var(--radius-full);
		background: var(--bg);
		cursor: pointer;
	}

	/* All the same stuff for IE */
	input[type='range']::-ms-thumb {
		border: var(--border-lg) solid var(--primary);
		height: 1.5rem;
		width: 1.5rem;
		border-radius: var(--radius-full);
		background: var(--bg);
		cursor: pointer;
	}

	input[type='range']::-webkit-slider-runnable-track {
		width: 100%;
		height: 0.75rem;
		cursor: pointer;
		background: var(--bg-alt);
		border-radius: var(--radius-full);
	}

	input[type='range']:focus::-webkit-slider-runnable-track {
		background: var(--bg-alt);
	}

	input[type='range']::-moz-range-track {
		width: 100%;
		height: 0.75rem;
		cursor: pointer;
		background: var(--bg-alt);
		border-radius: var(--radius-full);
	}

	input[type='range']::-ms-track {
		width: 100%;
		height: 0.75rem;
		cursor: pointer;
		background: transparent;
		border-color: transparent;
		border-width: 1.5rem 0;
		color: transparent;
	}
	input[type='range']::-ms-fill-lower {
		background: var(--primary);
	}
	input[type='range']:focus::-ms-fill-lower {
		background: var(--bg-alt);
	}
	input[type='range']::-ms-fill-upper {
		background: var(--bg-alt);
	}
	input[type='range']:focus::-ms-fill-upper {
		background: var(--primary);
	}
</style>
