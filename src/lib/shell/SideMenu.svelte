<script lang="ts">
	import { fly } from 'svelte/transition';
	import Navigation from './Navigation.svelte';

	export let routes: {
		route: string;
		title: string;
	}[];

	export let cta: {
		route: string;
		title: string;
	};
</script>

<aside transition:fly={{ duration: 150, y: 32 }}>
	<Navigation on:click {routes} vertical />

	{#if cta}
		<a href={cta.route} class="btn btn--primary" on:click>{cta.title}</a>
	{/if}
</aside>

<style>
	aside {
		height: 100%;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		padding: var(--spacing-8) 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--bg);
		z-index: -1;
	}

	a {
		margin-top: var(--spacing-4);
	}
</style>
