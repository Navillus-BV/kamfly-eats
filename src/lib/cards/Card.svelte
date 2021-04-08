<script lang="ts">
	import Link from '$lib/Link.svelte';

	export let small = false;
	export let title: string = undefined;
	export let subtitle: string = undefined;
	export let cta: CallToAction = undefined;
</script>

<article class:small>
	<slot name="header" />

	{#if title}
		<h3>{title}</h3>
	{/if}

	{#if subtitle}
		<h4>{subtitle}</h4>
	{/if}

	<slot name="body" />

	{#if cta}
		<div class="card__link">
			<Link {cta} />
		</div>
	{/if}
</article>

<style>
	article {
		max-width: 25rem;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: var(--bg);
		padding: var(--spacing-8);
		border-radius: var(--radius-sm);
	}

	article.small {
		max-width: 15rem;
		min-height: 15rem;
		justify-content: center;
	}

	h3 {
		margin-top: var(--card-spacing);
	}

	h4 {
		font-size: var(--text-base);
		font-weight: bold;
		opacity: 0.67;
	}

	h3,
	h4 {
		line-height: var(--leading-normal);
	}

	:global([slot='body']),
	.card__link {
		margin-top: var(--card-spacing);
	}

	@media (min-width: 375px) {
		article.small {
			max-width: 18rem;
			min-height: 18rem;
		}
	}

	@media (min-width: 768px) {
		article {
			padding: var(--spacing-16);
		}

		article.small {
			max-width: 20rem;
			min-height: 20rem;
		}

		h3 {
			font-size: var(--text-xl);
		}

		h4 {
			font-size: var(--text-base);
		}
	}

	@media (min-width: 1024px) {
		article {
			flex: 1;
			padding: var(--spacing-16) var(--spacing-12);
		}

		article.small {
			max-width: 100%;
			min-height: 0;
			justify-content: unset;
		}
	}
</style>
