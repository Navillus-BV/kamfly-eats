<script lang="ts">
	export let menuOpen: boolean;
</script>

<button
	aria-label="Open Menu"
	class="hamburger hamburger--squeeze header__hamburger"
	class:is-active={menuOpen}
	on:click={() => (menuOpen = !menuOpen)}
>
	<span class="hamburger-box">
		<span class="hamburger-inner" />
	</span>
</button>

<style>
	/*!
   * Hamburgers
   * @description Tasty CSS-animated hamburgers
   * @author Jonathan Suh @jonsuh
   * @site https://jonsuh.com/hamburgers
   * @link https://github.com/jonsuh/hamburgers
   */
	.hamburger {
		display: flex;
		cursor: pointer;
		border-width: 0;
		background-color: transparent;
		padding: 0.5rem;
		margin: -0.5rem;
		line-height: 0.75rem;
		overflow: visible;
		transition: opacity linear 150ms;
		will-change: opacity;
	}

	.hamburger:hover,
	.hamburger.is-active:hover {
		opacity: 0.75;
	}

	.hamburger.is-active .hamburger-inner,
	.hamburger.is-active .hamburger-inner:before,
	.hamburger.is-active .hamburger-inner:after {
		background-color: var(--fg);
	}

	.hamburger-box {
		height: calc(1rem + 4px);
		width: 2rem;
		position: relative;
		display: inline-block;
	}

	.hamburger-inner {
		top: 50%;
		margin-top: -2px;
		display: block;
	}
	.hamburger-inner,
	.hamburger-inner:before,
	.hamburger-inner:after {
		transition-timing-function: ease;
		height: 2px;
		width: 2rem;
		background-color: var(--fg);
		position: absolute;
		border-radius: var(--radius-full);
		transition: transform ease-in-out 150ms;
		will-change: transform;
	}

	.hamburger-inner:before,
	.hamburger-inner:after {
		content: '';
		display: block;
	}

	.hamburger-inner:before {
		top: -0.5rem;
	}

	.hamburger-inner:after {
		bottom: -0.5rem;
	}

	/*
   * Squeeze
   */
	.hamburger--squeeze .hamburger-inner {
		transition-duration: 0.075s;
		transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}

	.hamburger--squeeze .hamburger-inner:before {
		transition: top 0.075s 0.12s ease, opacity 0.075s ease;
	}

	.hamburger--squeeze .hamburger-inner:after {
		transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}

	.hamburger--squeeze.is-active .hamburger-inner {
		transform: rotate(45deg);
		transition-delay: 0.12s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	.hamburger--squeeze.is-active .hamburger-inner:before {
		top: 0;
		opacity: 0;
		transition: top 0.075s ease, opacity 0.075s 0.12s ease;
	}

	.hamburger--squeeze.is-active .hamburger-inner:after {
		bottom: 0;
		transform: rotate(-90deg);
		transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
	}
</style>
