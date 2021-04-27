<script lang="ts">
	import { browser } from '$app/env';
	import AlertBanner from '$lib/AlertBanner.svelte';
	import AppFooter from '$lib/shell/AppFooter.svelte';
	import AppHeader from '$lib/shell/AppHeader.svelte';
	import SEO from '$lib/seo/SEO.svelte';
	import '$assets/css/app.css';

	const alert = {
		title: 'COVID-19 Pricing:',
		description: "We're waiving our monthly fee until things start picking back up.",
		cta: {
			href: '/pricing#plans',
			title: 'See our plans'
		}
	};

	let menuOpen: boolean;

	$: if (browser)
		menuOpen
			? document.body.classList.add('off-nav-is-active')
			: document.body.classList.remove('off-nav-is-active');
</script>

<SEO />

{#if !menuOpen}
	<AlertBanner {...alert} />
{/if}

<AppHeader bind:menuOpen />

<main>
	<slot />
</main>

<AppFooter />

<style>
	main {
		flex: 1 0 0%;
		padding-top: var(--spacing-24);
		display: flex;
		flex-direction: column;
	}

	main > :global(*) {
		margin-bottom: var(--spacing-24);
	}

	:global(body.off-nav-is-active) {
		overflow: hidden;
	}
</style>
