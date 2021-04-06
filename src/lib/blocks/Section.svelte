<script lang="ts">
	import Link from '$lib/Link.svelte';

	export let title: string;
	export let alt = false;
	export let cta: CallToAction;
	export let rowReverse = false;
	export let colReverse = false;
</script>

<section class:alt class:row_reverse={rowReverse} class:col_reverse={colReverse}>
	<div class="section__container">
		<slot name="graphic" />

		<div class="section__summary">
			{#if title}
				<h2>{title}</h2>
			{/if}

			<slot name="summary" />

			{#if cta}
				<Link {cta} />
			{/if}
		</div>
		<slot name="details" />
	</div>
</section>

<style>
	section {
		padding: 0 var(--spacing-20);
	}

	section.alt {
		padding: var(--spacing-20);
		background: var(--bg-alt);
	}

	:global([slot='graphic']) {
		grid-area: graphic;
	}

	.section__summary {
		grid-area: summary;
		display: flex;
		flex-direction: column;
		max-width: 50rem;
		margin: 0 auto;
	}

	.section__summary > :global(*:not(:last-child)) {
		margin-bottom: var(--spacing-3);
	}

	:global([slot='details']) {
		grid-area: details;
	}

	.section__container {
		max-width: 1440px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-areas: 'graphic' 'summary' 'details';
		gap: var(--spacing-6);
		align-items: center;
		text-align: center;
	}

	.col_reverse .section__container {
		grid-template-areas: 'summary' 'graphic' 'details';
	}

	@media (min-width: 1024px) {
		.section__container,
		.col_reverse .section__container {
			gap: var(--spacing-20);
			grid-template-columns: repeat(2, 1fr);
			grid-template-areas: 'graphic summary' 'details details';
		}

		.row_reverse .section__container {
			grid-template-areas: 'summary graphic' 'details details';
		}

		.section__summary {
			grid-column: 1 / 3;
		}

		:global([slot='graphic'] + .section__summary) {
			grid-column: unset !important;
		}
	}
</style>
