<script lang="ts">
	import { slide } from 'svelte/transition';

	export let title: string;
	export let description: string;
	export let cta: CallToAction;
</script>

<aside transition:slide={{ duration: 150 }}>
	<strong class="title">{title}</strong>
	<p class="content">
		<span>
			{description}
			{#if cta}
				<a
					class="link link--sm link--alt"
					href={cta.href}
					target={cta.external ? '_blank' : undefined}
					rel={cta.external ? 'noreferrer' : undefined}>{cta.title}</a
				>
			{/if}
		</span>
	</p>
</aside>

<style>
	aside {
		background: var(--primary);
		color: var(--bg);
		font-size: var(--text-sm);
		text-align: center;
		padding: var(--spacing-2);
		display: flex;
		flex-direction: column;
	}

	.title {
		margin-bottom: var(--spacing-2);
	}

	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-2);
	}

	.content :global(a) {
		margin-left: var(--spacing-2);
	}

	@media (min-width: 768px) {
		aside {
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}

		.title {
			margin-bottom: 0;
			margin-right: var(--spacing-2);
		}

		.content {
			justify-content: flex-start;
			gap: var(--spacing-4);
		}

		.content :global(a) {
			margin-left: var(--spacing-4);
		}
	}
</style>
