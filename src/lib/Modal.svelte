<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import ClickOutside from '$actions/clickOutside';

	const dispatch = createEventDispatcher();

	const onClose = () => dispatch('close');

	let mounted = false;
	onMount(() => (mounted = true));
</script>

{#if mounted}
	<aside transition:fade={{ duration: 150 }}>
		<div
			class="modal__inner"
			transition:fly={{ y: -32, duration: 150 }}
			use:ClickOutside={{ onClickOutside: onClose }}
		>
			<button aria-label="close" on:click|stopPropagation={onClose} />
			<div class="modal__content">
				<slot />
			</div>
		</div>
	</aside>
{/if}

<style>
	aside,
	aside::before {
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		margin: 0;
		padding: 0;
	}

	aside {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
		position: fixed;
		z-index: 999;
	}

	aside::before {
		content: '';
		position: absolute;
		background-color: rgba(22, 23, 27, 0.88);
	}

	.modal__inner {
		max-height: calc(100vh - var(--spacing-4) * 2);
		overflow: auto;
		position: relative;
		width: calc(100% - (var(--spacing-4) * 2));
		max-width: 50rem;
		margin-left: var(--spacing-4);
		margin-right: var(--spacing-4);
		background: var(--bg);
		padding: var(--spacing-6);
		border-radius: var(--radius-sm);
	}

	.modal__content {
		padding: 24px 16px;
		text-align: start;
	}

	.modal__content :global(h1:not(:first-child)),
	.modal__content :global(h2:not(:first-child)),
	.modal__content :global(h3:not(:first-child)) {
		margin-top: var(--spacing-4);
	}

	.modal__content :global(p) {
		margin-top: var(--spacing-2);
	}

	button {
		background: transparent;
		border: 0;
		outline: 0;
		padding: 0;
		cursor: pointer;
		position: absolute;
		right: 24px;
		top: 24px;
		width: 16px;
		height: 16px;
	}

	button::before,
	button::after {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -1px;
		margin-left: -8px;
		width: 16px;
		height: 2px;
		background: #6a6f82;
	}

	button::before {
		transform: rotate(225deg);
	}

	button::after {
		transform: rotate(-45deg);
	}

	button:hover::before,
	button:hover::after {
		background: #959cb1;
	}

	@media (min-width: 641px) {
		.modal__inner {
			margin: 0 auto;
			max-height: calc(100vh - 3rem * 2);
		}

		.modal__content {
			padding: 3rem 2rem;
		}
	}
</style>
