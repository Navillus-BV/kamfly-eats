<script lang="ts">
	import Image from '$lib/Image.svelte';
	import Section from './Section.svelte';
	import type { ResponsiveImage } from '../../images';

	export let alt = false;
	export let title: string;
	export let image: ResponsiveImage;
	export let links: CallToAction[] = [];
	export let imageRight = false;
	export let small = false;
</script>

<Section {alt} {title} {links} rowReverse={imageRight}>
	<div slot="graphic">
		<Image {image} class={small ? 'section__img section__img--sm' : 'section__img'} />
	</div>

	<div slot="summary">
		<slot />
	</div>
</Section>

<style global>
	.section__img {
		width: 100%;
		max-width: 35rem;
		max-height: 35rem;
		margin: 0 auto;
		object-fit: contain;
	}

	.section__img.section__img--sm {
		max-width: 10rem;
		max-height: 10rem;
	}

	@media (min-width: 480px) {
		.section__img.section__img--sm {
			max-width: 12.5rem;
			max-height: 12.5rem;
		}
	}

	@media (min-width: 768px) {
		.section__img.section__img--sm {
			max-width: 15rem;
			max-height: 15rem;
		}
	}

	@media (min-width: 1024px) {
		.section__img {
			margin: 0;
		}
	}
</style>
