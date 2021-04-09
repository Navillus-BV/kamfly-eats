<script lang="ts">
	import Image from './Image.svelte';
	import type { ResponsiveImage } from '../images';

	export let logos: ResponsiveImage[];
</script>

<ul>
	{#each logos as image, i (i)}
		<li>
			<Image {image} class="logos__image" />
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	ul :global(.logos__image) {
		height: 2.5rem;
	}

	@media (min-width: 375px) {
		ul :global(.logos__image) {
			height: 3rem;
		}
	}

	@media (min-width: 480px) {
		ul {
			gap: 3rem;
		}
	}

	@media (min-width: 768px) {
		ul :global(.logos__image) {
			height: 4rem;
		}
	}
</style>
