<script lang="ts">
	import CardList from '$lib/cards/CardList.svelte';
	import FeatureCard from '$lib/cards/FeatureCard.svelte';
	import Hero from '$lib/blocks/Hero.svelte';
	import ImageSection from '$lib/blocks/ImageSection.svelte';
	import Meta from '$lib/seo/Meta.svelte';
	import Section from '$lib/blocks/Section.svelte';
	import images from '../images';
	import discountsIcon from '$assets/icons/discounts.svg?raw';
	import paymentIcon from '$assets/icons/payment-gateways.svg?raw';
	import step1Icon from '$assets/icons/step-1.svg?raw';
	import step2Icon from '$assets/icons/step-2.svg?raw';
	import step3Icon from '$assets/icons/step-3.svg?raw';
	import taxesIcon from '$assets/icons/taxes.svg?raw';
</script>

<Meta title="How it Works" />

<Hero
	title="Online made easy."
	subtitle="Self-managed digital restaurant solutions without the headaches."
	cta={{
		title: 'Get Started',
		href: '/contact'
	}}
/>

<Section alt title="Getting started with Kamfly is a piece of cake.">
	<p slot="summary">
		We handle the initial set-up, partner with you to connect to your preferred payment processor,
		and walk you through exactly what to expect when orders start coming in.
	</p>

	<div slot="details">
		<CardList>
			<FeatureCard title="Menu Management" icon={step1Icon} />
			<FeatureCard title="Online Ordering" icon={step2Icon} />
			<FeatureCard title="Multi-Currency & Localization" icon={step3Icon} />
		</CardList>

		<a href="/contact" class="btn btn--primary cta__btn">Get started</a>
	</div>
</Section>

<ImageSection
	title="Managing your menus."
	image={images.blocks.cms}
	links={[
		{
			title: 'Get started now',
			href: '/contact'
		}
	]}
>
	<p>
		We provide you with an admin dashboard where you can update all the details for your restaurant
		and your fully responsive, SEO-optimized, WCGA 2.0 accessibility-compliant menus whenever you
		want.
	</p>
</ImageSection>

<ImageSection imageRight title="Managing your online orders." image={images.blocks.dashboard}>
	<p>
		Don't miss a beat with our
		<a href="/pricing/#plans">Pro Plan's</a>
		online ordering. Order notifications will be emailed to you and show up in your Admin Dashboard in
		real time. Already using a point-of-sale system? No problem! Let us know what system you are using
		today - we're always looking to add new point-of-sale integrations to Kamfly.
	</p>
</ImageSection>

<Section alt title="Taking care of business.">
	<p slot="summary">
		Through our partners at Snipcart, Kamfly offers powerful business features to keep you out of
		the weeds.
	</p>

	<div slot="details">
		<CardList>
			<FeatureCard title="Tax Management" icon={taxesIcon} />
			<FeatureCard title="Customer Discounts" icon={discountsIcon} />
			<FeatureCard title="Payment Gateways" icon={paymentIcon} />
		</CardList>
	</div>
</Section>

<ImageSection
	id="snipcart"
	small
	title="What is Snipcart?"
	image={images.blocks.snipcart}
	links={[
		{
			title: 'Learn more about Snipcart',
			href: 'https://snipcart.com/',
			external: true
		},
		{
			title: 'See payment processing options',
			href: 'https://snipcart.com/list-ecommerce-payment-gateways',
			external: true
		}
	]}
>
	<p>
		Snipcart is an online shopping cart platform that offers a secure, global e-commerce experience
		for you and your customers. They simplify the checkout experience for your customers by allowing
		them to create an account with your restaurant for easy future ordering, and they give you
		access to detailed analytics to help you keep them coming back.
	</p>
</ImageSection>

<ImageSection
	imageRight
	title="Why we trust Snipcart."
	image={images.blocks.cms}
	links={[
		{
			title: 'Set up time with us to find out more',
			href: '/contact'
		}
	]}
>
	<p>
		Our mission at Kamfly is to empower your restaurant to reach more customers through optimized
		online ordering. Snipcart is an e-commerce expert focused on security, flexibility, and seamless
		integration with payment processors. This partnership enables us to provide you with
		comprehensive, digital solutions that won't break the bank.
	</p>
</ImageSection>

<style>
	@media (min-width: 768px) {
		.cta__btn {
			align-self: center;
		}
	}
</style>
