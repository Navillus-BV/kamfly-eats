<script lang="ts">
	import type { ResponsiveImage } from '../images';
	export let image: ResponsiveImage;

	let customClass = '';
	export { customClass as class };
</script>

<picture>
	{#each image.sources as { media, type, srcset }}
		<source {media} {type} {srcset} />
	{/each}
	<img
		loading="lazy"
		class={customClass}
		srcset={image.defaultSource.srcset}
		src={image.defaultSource.src}
		alt={image.alt}
	/>
</picture>
