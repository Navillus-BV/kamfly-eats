<script lang="ts">
	import MenuIcon from './MenuIcon.svelte';
	import Navigation from './Navigation.svelte';
	import SideMenu from './SideMenu.svelte';
	import logoIcon from '$assets/icons/logo.svg?raw';

	export let menuOpen = false;

	let innerWidth: number;
	$: if (innerWidth >= 1024) menuOpen = false;

	const mobileNavItems: CallToAction[] = [
		{ href: '/', title: 'home' },
		{ href: '/how-it-works', title: 'how it works' },
		{ href: '/pricing', title: 'pricing' },
		{ href: '/about', title: 'about' }
	];

	const navItems = mobileNavItems.slice(1);

	const cta: CallToAction = {
		href: '/contact',
		title: 'get in touch'
	};
</script>

<svelte:window bind:innerWidth />

<header role="banner">
	<div class="header__content">
		<div class="header__left">
			<a href="/" alt="Kamfly" aria-label="Site logo" class="header__brand">
				{@html logoIcon}
			</a>
		</div>
		<div class="header__middle">
			<Navigation routes={navItems} />
		</div>
		<div class="header__right">
			<a class="header__cta btn btn--primary btn--sm" href={cta.href}>{cta.title}</a>

			<div class="header__menu">
				<MenuIcon bind:menuOpen />
			</div>
		</div>
	</div>

	{#if menuOpen}
		<SideMenu routes={mobileNavItems} {cta} on:click={() => (menuOpen = false)} />
	{/if}
</header>

<style>
	header {
		width: 100%;
		background: var(--bg);
		position: sticky;
		top: 0;
		z-index: 99;
	}

	.header__content {
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		padding: var(--spacing-4);
		display: flex;
		align-items: center;
	}

	.header__left {
		width: 100%;
		flex: 1 0 0%;
		display: flex;
		justify-content: flex-start;
	}

	.header__brand :global(svg) {
		display: block;
		height: 1.25rem;
		fill: var(--primary);
	}

	.header__middle {
		display: none;
	}

	.header__right {
		width: 100%;
		flex: 1 0 0%;
		display: flex;
		justify-content: flex-end;
	}

	.header__cta {
		display: none;
	}

	@media (min-width: 1024px) {
		.header__content {
			padding: var(--spacing-4) var(--spacing-20);
		}

		.header__middle {
			display: block;
		}

		.header__cta {
			display: inline-block;
		}

		.header__menu {
			display: none;
		}
	}
</style>
