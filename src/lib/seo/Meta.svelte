<script lang="ts">
	import shareImage from '$assets/kamfly-share.png';

	export let title = 'Self-Managed Online Ordering for Your Restaurant';
	export let description =
		'Add touchless e-menus and online ordering to your restaurant website in minutes. Keep control of your menu items, pricing, and your customer experience.';
	export let image = shareImage;
</script>

<svelte:head>
	<title>{title} | Kamfly</title>
	<meta property="og:title" content="{title} | Kamfly" />
	<meta property="twitter:title" content="{title} | Kamfly" />
	<meta property="og:site_name" content={title} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />

	<meta property="og:image" content={image} />
	<meta name="twitter:image" content={image} />
</svelte:head>
