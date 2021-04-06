<div class="cards">
	<slot />
</div>

<style>
	.cards {
		display: flex;
		flex-direction: column;
		align-items: center;
		--card-spacing: var(--spacing-6);
	}

	.cards > :global(*:not(:last-child)) {
		margin-bottom: var(--spacing-8);
	}

	@media (min-width: 375px) {
		.cards {
			--card-spacing: var(--spacing-8);
		}
	}

	@media (min-width: 1024px) {
		.cards {
			flex-direction: row;
			align-items: stretch;
			justify-content: center;
		}

		.cards > :global(*:not(:last-child)) {
			margin-bottom: 0;
			margin-right: var(--spacing-20);
		}
	}
</style>
