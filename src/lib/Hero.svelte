<script lang="ts">
	import Button, { ButtonType } from '$lib/Button.svelte';

	export let title: string;
	export let subtitle: string;
	export let cta: CallToAction;
</script>

<div class="hero">
	<h1>{title}</h1>

	{#if subtitle}
		<p>{subtitle}</p>
	{/if}

	{#if cta}
		<a class="btn btn--primary" href={cta.href}>
			<Button type={ButtonType.Primary}>
				{cta.title}
			</Button>
		</a>
	{/if}
</div>

<style>
	.hero {
		max-width: 55rem;
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 var(--spacing-4);
		text-align: center;
	}

	.hero > *:not(:last-child) {
		margin-bottom: var(--spacing-12);
	}

	p {
		font-size: var(--text-lg);
	}

	@media (min-width: 480px) {
		.hero {
			padding: 0 var(--spacing-8);
		}
	}
</style>
