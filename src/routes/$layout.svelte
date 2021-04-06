<script>
	import AppFooter from '$lib/shell/AppFooter.svelte';
	import AppHeader from '$lib/shell/AppHeader.svelte';
	import '$assets/css/app.css';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

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

	main > :global(:not:last-child) {
		margin-bottom: var(--spacing-24);
	}
</style>
