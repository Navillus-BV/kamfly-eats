<script lang="ts">
	import { browser } from '$app/env';
	import type { ResponsiveImage } from '../images';
	export let image: ResponsiveImage;

	let customClass = '';
	export { customClass as class };

	let imgElem: HTMLImageElement;

	let loaded = false;
	const onLoad = () => (loaded = browser && true);
</script>

<picture>
	{#each image.sources as { media, type, srcset }}
		<source {media} {type} {srcset} />
	{/each}
	<img
		bind:this={imgElem}
		on:load={() => (loaded = true)}
		loading="lazy"
		class={customClass}
		srcset={image.defaultSource.srcset}
		src={image.defaultSource.src}
		alt={image.alt}
		height={loaded ? undefined : image.metadata.height}
		width={loaded ? undefined : image.metadata.width}
	/>
</picture>
