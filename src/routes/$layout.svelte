<script>
	import '$assets/css/app.css';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<slot />
</main>

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
