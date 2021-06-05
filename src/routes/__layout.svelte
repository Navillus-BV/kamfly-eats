<script lang="ts">
	import { browser, dev } from '$app/env';
	import AppFooter from '$lib/shell/AppFooter.svelte';
	import AppHeader from '$lib/shell/AppHeader.svelte';
	import Analytics from '$lib/seo/Analytics.svelte';
	import SEO from '$lib/seo/SEO.svelte';
	import '$assets/css/app.css';

	let menuOpen: boolean;

	$: if (browser)
		menuOpen
			? document.body.classList.add('off-nav-is-active')
			: document.body.classList.remove('off-nav-is-active');
</script>

{#if !dev}
	<Analytics />
{/if}

<SEO />

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
