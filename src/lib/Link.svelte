<script lang="ts">
	export let small = false;
	export let alt = false;
	export let cta: CallToAction;
</script>

<a
	class:small
	class:alt
	href={cta.href}
	target={cta.external ? '_blank' : undefined}
	rel={cta.external ? 'nooopener' : undefined}
>
	{cta.title}
</a>

<style style lang="postcss">
	a {
		background: transparent;
		border: none;
		font-size: var(--text-base);
		line-height: var(--leading-xl);
		font-weight: bold;
		color: var(--secondary);
		white-space: nowrap;
	}

	a.small {
		font-size: var(--text-sm);
	}

	a.alt {
		color: var(--bg);
	}

	a::after {
		content: '\203A';
		display: inline-block;
		margin-left: var(--spacing-1);
		pointer-events: none;
		text-decoration: none;
	}
</style>
