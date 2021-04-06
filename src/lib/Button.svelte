<script lang="ts" context="module">
	export enum ButtonType {
		Default,
		Primary,
		Hollow
	}
</script>

<script lang="ts">
	export let type: ButtonType = ButtonType.Default;
	export let small = false;
	export let submit = false;
</script>

<button
	type={submit ? 'submit' : 'button'}
	class:small
	class:primary={type === ButtonType.Primary}
	class:hollow={type === ButtonType.Hollow}
>
	<slot />
</button>

<style>
	button {
		border: var(--border-lg) solid transparent;
		display: inline-block;
		padding: var(--spacing-4) var(--spacing-8);
		text-decoration: none;
		font-size: var(--text-lg);
		font-weight: bold;
		text-transform: uppercase;
		text-align: center;
		color: var(--fg);
		background: transparent;
		border-radius: var(--radius-sm);
	}

	button.primary {
		color: var(--fg-alt);
		background: var(--primary);
	}

	button.hollow {
		border-color: var(--primary);
		color: var(--primary);
	}

	button.small {
		font-size: var(--text-base);
		padding: var(--spacing-2) var(--spacing-6);
	}
</style>
