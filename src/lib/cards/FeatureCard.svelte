<script lang="ts">
	import Card from './Card.svelte';

	export let icon: string;
	export let title: string;
</script>

<Card small {title}>
	<div slot="header" class="feature__icon">
		{@html icon}
	</div>
</Card>

<style>
	.feature__icon {
		height: 3rem;
		color: var(--primary);
	}

	@media (min-width: 768px) {
		.feature__icon {
			height: 4rem;
		}
	}
</style>
