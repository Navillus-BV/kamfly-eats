<script lang="ts">
	import Meta from '$lib/seo/Meta.svelte';
	import { attributes, html } from '$assets/pages/privacy.md';

	const { title, last_updated } = attributes;

	const lastUpdated = last_updated && new Date(last_updated).toDateString();
</script>

<Meta {title} />

<article>
	{#if last_updated}
		<div class="legal__last-updated">Last Updated: {lastUpdated}</div>
	{/if}

	{@html html}
</article>

<style>
	article {
		max-width: 72rem;
		margin: 0 auto;
		padding: 0 1rem 2rem;
	}

	article :global(h2) {
		font-size: 1.875rem;
		margin-top: 1.5rem;
		margin-bottom: 2rem;
	}

	article :global(h3) {
		font-size: 1.5rem;
		margin-top: 1.5rem;
		margin-bottom: 1rem;
	}

	article :global(li),
	article :global(p) {
		margin: 0.5rem 0;
		line-height: 1.5;
	}

	.legal__last-updated {
		font-size: 0.875rem;
		margin-bottom: 1rem;
	}

	article :global(.table-of-contents) {
		margin: 1.5rem 0;
		line-height: 1.625;
	}

	article :global(.table-of-contents ul) {
		margin-bottom: 0.5rem;
		font-size: 1.125rem;
		font-weight: 500;
		margin-bottom: 0.75rem;
	}

	article :global(.table-of-contents ul ul) {
		margin-left: 1rem;
	}

	@media (min-width: 640px) {
		article {
			padding: 0 1.5rem 2rem;
		}
	}

	@media (min-width: 768px) {
		article {
			padding: 0 2rem 3rem;
		}
	}

	@media (min-width: 1024px) {
		article {
			padding: 0 2rem 4rem;
		}
	}

	@media (min-width: 1280px) {
		article {
			padding: 0 0 4rem;
		}
	}
</style>
