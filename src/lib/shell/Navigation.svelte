<script lang="ts">
	export let routes: CallToAction[];

	export let vertical = false;
</script>

<nav>
	<ul class:vertical>
		{#each routes as { href, title } (title)}
			<li>
				<a on:click {href} class:p-2={vertical}>{title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		flex-direction: row;
		justify-content: initial;
		align-items: initial;
		font-size: var(--text-base);
		height: 100%;
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	ul.vertical {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: var(--text-2xl);
	}

	li:not(:last-child) {
		margin-right: var(--spacing-8);
	}

	.vertical li:not(:last-child) {
		margin-right: 0;
	}

	a {
		display: inline-block;
		white-space: nowrap;
		color: var(--fg);
		text-decoration: none;
		text-transform: capitalize;
	}

	.vertical a {
		padding: var(--spacing-2);
	}
</style>
