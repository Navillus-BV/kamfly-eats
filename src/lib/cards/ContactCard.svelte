<script lang="ts">
	import Card from './Card.svelte';
	import Image from '$lib/Image.svelte';
	import type { ResponsiveImage } from '../../images';

	export let image: ResponsiveImage;
	export let title: string;
	export let subtitle: string;
	export let description: string;
	export let cta: CallToAction;
</script>

<Card {title} {subtitle} {cta}>
	<div slot="header">
		<Image {image} class="contact__img" />
	</div>

	<p slot="body">{description}</p>
</Card>

<style>
	:global(.contact__img) {
		max-width: 67%;
		width: 17rem;
		border-radius: var(--radius-full);
		object-fit: contain;
	}
</style>
