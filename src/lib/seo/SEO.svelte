<script lang="ts">
	import { page } from '$app/stores';
	import Favicon from './Favicon.svelte';
	import Meta from './Meta.svelte';

	const title = 'Self-managed Online Ordering for Your Business | Kamfly';
	const description =
		'Add touchless e-menus and online ordering to your restaurant website in minutes. Keep control of your menu items, pricing, and your customer experience.';

	$: url = `https://kamfly.io${$page.path}`;
</script>

<Favicon />

<svelte:head>
	<Meta {title} {description} />

	<meta name="robots" content="index,follow" />
	<meta name="author" content="Kamfly.io" />

	<link rel="canonical" href={url} />
	<meta property="og:url" content={url} />
	<meta name="twitter:url" content={url} />

	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="kamflyio" />
	<meta name="twitter:creator" content="kamflyio" />
</svelte:head>
