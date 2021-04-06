<script>
	import AlertBanner from '$lib/AlertBanner.svelte';
	import AppFooter from '$lib/shell/AppFooter.svelte';
	import AppHeader from '$lib/shell/AppHeader.svelte';
	import '$assets/css/app.css';

	const alert = {
		title: 'COVID-19 Pricing:',
		description: "We're waiving our monthly fee until things start picking back up.",
		cta: {
			href: 'pricing/#plans',
			title: 'See our plans'
		}
	};
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if alert}
	<AlertBanner {...alert} />
{/if}

<AppHeader />

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

	main > :global(*:not(:last-child)) {
		margin-bottom: var(--spacing-24);
	}
</style>
