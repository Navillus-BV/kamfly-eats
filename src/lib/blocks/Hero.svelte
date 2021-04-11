<script lang="ts">
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
		<a href={cta.href} class="btn btn--primary">{cta.title}</a>
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

	h1 {
		margin-bottom: var(--spacing-16);
	}

	p {
		font-size: var(--text-lg);
		margin-bottom: var(--spacing-6);
	}

	@media (min-width: 480px) {
		.hero {
			padding: 0 var(--spacing-8);
		}
	}
</style>
