<script lang="ts">
	import Hero from '$lib/blocks/Hero.svelte';
	import ImageSection from '$lib/blocks/ImageSection.svelte';
	import PriceComparison from '$lib/PriceComparison.svelte';
	import Section from '$lib/blocks/Section.svelte';
	import images from '../images';
</script>

<Hero
	title="Your restaurant. Your future. Your call."
	subtitle="The digital experience your customers want. The freedom you deserve."
	cta={{ href: 'contact', title: 'Get Started' }}
/>

<ImageSection
	title="Reach more customers online."
	image={images.blocks.shopping}
	cta={{
		href: 'https://demo.kamfly.io/',
		title: 'See it in action',
		external: true
	}}
>
	<p>
		From locally owned cafes to large-scale franchise operations, we have tools to help you take
		your restaurant business online. Create a digital menu for a touchless customer experience, and
		easily enable online ordering.
	</p>
</ImageSection>

<ImageSection
	imageRight
	image={images.blocks.cms}
	title="Own your customer experience."
	cta={{
		href: 'contact',
		title: 'Find out how to get started'
	}}
>
	<p>
		Your brand should be front and center in every customer interaction. Your food and service speak
		for themselves - don't waste your efforts competing with hundreds of other restaurants on
		someone else's app.
	</p>
</ImageSection>

<Section
	title="Protect your profits."
	colReverse
	cta={{
		href: 'pricing#plans',
		title: 'See our plans'
	}}
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
	image={images.blocks.covid}
	title="COVID-19 pricing."
	cta={{
		href: 'pricing',
		title: 'See our pricing'
	}}
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
