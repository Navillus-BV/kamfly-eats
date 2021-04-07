<script lang="ts">
	import Hero from '$lib/blocks/Hero.svelte';
	import ImageSection from '$lib/blocks/ImageSection.svelte';
	import PriceComparison from '$lib/PriceComparison.svelte';
	import PricePlans from '$lib/PricePlans.svelte';
	import Section from '$lib/blocks/Section.svelte';
	import images from '../images';
</script>

<Hero title="Kick the margin moochers to the curb." />

<Section
	title="Protect your profits."
	links={[
		{
			title: 'Get Started',
			href: 'contact'
		}
	]}
>
	<div slot="graphic">
		<PriceComparison />
	</div>

	<p slot="summary">
		At Kamfly, we think restaurants should be able to offer online ordering without sacrificing
		their margins. Some of our competitors charge fees up to 15% of total sales... We think your
		business deserves better.
	</p>
</Section>

<ImageSection
	imageRight
	title="COVID-19 pricing."
	image={images.blocks.covid}
	links={[
		{
			title: 'See our pricing',
			href: 'pricing'
		}
	]}
>
	<p>
		We know that this is a tough time to be in the restaurant business. That's the whole reason we
		started Kamfly - to help as many restaurants as possible keep their doors open through this
		mess.
	</p>
	<p>
		So... Until things start to pick back up, we will not be charging any monthly base fees. That's
		a savings of $25/month on our Standard Plan or $100/month on our Pro Plan! Check out our pricing
		page to learn more and see how you can get started.
	</p>
</ImageSection>

<Section id="plans" alt title="Kamfly Premium Plans">
	<p slot="summary">Fair, scalable pricing plans to fit your restaurant’s needs.</p>

	<div slot="details">
		<PricePlans />
	</div>
</Section>

<ImageSection imageRight title="Kamfly grows with your business." image={images.blocks.menus}>
	<p>
		Not ready to offer online ordering? No problem! With our Standard Plan, you get an online menu
		that looks great on every device and replaces paper menus with QR codes. Use this feature to
		update your menu anytime without having to reprint, and it only takes a few steps to enable
		online ordering when you're ready.
	</p>
</ImageSection>

<ImageSection title="What about food delivery?" image={images.blocks.delivery}>
	<p>
		Our mission is to provide the online experience that your customers want. You know your
		business, your team, and your brand, and we want to help you retain full control of the customer
		experience. We provide you with a polished online presence at a price that allows you to create
		jobs for delivery drivers that represent your business.
	</p>
</ImageSection>
