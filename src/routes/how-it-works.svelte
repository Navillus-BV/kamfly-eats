<script lang="ts">
	import Image from '$lib/Image.svelte';
	import Meta from '$lib/seo/Meta.svelte';
	import images from '../images';
	import discountsIcon from '$assets/icons/discounts.svg?raw';
	import paymentIcon from '$assets/icons/payment-gateways.svg?raw';
	import step1Icon from '$assets/icons/step-1.svg?raw';
	import step2Icon from '$assets/icons/step-2.svg?raw';
	import step3Icon from '$assets/icons/step-3.svg?raw';
	import taxesIcon from '$assets/icons/taxes.svg?raw';
</script>

<Meta title="How it Works" />

<section class="hero">
	<h1>Online made easy.</h1>

	<p>Self-managed digital restaurant solutions without the headaches.</p>

	<a href="/contact" class="btn btn--primary">Get Started</a>
</section>

<section class="section section--alt">
	<div class="block">
		<div class="block__summary">
			<h2>Getting started with Kamfly is a piece of cake.</h2>

			<p>
				We handle the initial set-up, partner with you to connect to your preferred payment
				processor, and walk you through exactly what to expect when orders start coming in.
			</p>
		</div>

		<div class="block__details">
			<div class="cards">
				<div class="card card--sm">
					<div class="card__icon">
						{@html step1Icon}
					</div>
					<h3 class="card__title">Get in touch</h3>
					<p>
						We'll find a time for a quick call to give you a demo and answer any questions you may
						have.
					</p>
				</div>

				<div class="card card--sm">
					<div class="card__icon">
						{@html step2Icon}
					</div>
					<h3 class="card__title">Get set up</h3>
					<p>Our team will partner with you to ensure a smooth set-up and launch.</p>
				</div>

				<div class="card card--sm">
					<div class="card__icon">
						{@html step3Icon}
					</div>
					<h3 class="card__title">Go live!</h3>
					<p>
						We'll walk you through your finished solution and make sure everything is just the way
						you want it.
					</p>
				</div>
			</div>

			<a href="/contact" class="btn btn--primary">Get started</a>
		</div>
	</div>
</section>

<section class="section">
	<div class="block">
		<div class="block__graphic">
			<Image image={images.blocks.cms} class="block__image" />
		</div>

		<div class="block__summary">
			<h2>Managing your menus.</h2>

			<p>
				We provide you with an admin dashboard where you can update all the details for your
				restaurant and your fully responsive, SEO-optimized, WCGA 2.0 accessibility-compliant menus
				whenever you want.
			</p>

			<a href="/contact" class="link">Get started now</a>
		</div>
	</div>
</section>

<section class="section">
	<div class="block block--row-reverse">
		<div class="block__graphic">
			<Image image={images.blocks.dashboard} class="block__image" />
		</div>

		<div class="block__summary">
			<h2>Managing your online orders.</h2>

			<p>
				Don't miss a beat with our
				<a href="/pricing#plans">Pro Plan's</a>
				online ordering. Order notifications will be emailed to you and show up in your Admin Dashboard
				in real time. Already using a point-of-sale system? No problem! Let us know what system you are
				using today - we're always looking to add new point-of-sale integrations to Kamfly.
			</p>
		</div>
	</div>
</section>

<section class="section section--alt">
	<div class="block">
		<div class="block__summary">
			<h2>Taking care of business.</h2>

			<p>
				Through our partners at Snipcart, Kamfly offers powerful business features to keep you out
				of the weeds.
			</p>
		</div>

		<div class="block__details">
			<div class="cards">
				<div class="card card--sm">
					<div class="card__icon">
						{@html taxesIcon}
					</div>
					<h3 class="card__title">Tax Management</h3>
				</div>

				<div class="card card--sm">
					<div class="card__icon">
						{@html discountsIcon}
					</div>
					<h3 class="card__title">Customer Discounts</h3>
				</div>

				<div class="card card--sm">
					<div class="card__icon">
						{@html paymentIcon}
					</div>
					<h3 class="card__title">Payment Gateway</h3>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="block">
		<div class="block__graphic">
			<Image image={images.blocks.snipcart} class="block__image block__image--sm" />
		</div>

		<div class="block__summary">
			<h2>What is Snipcart?</h2>

			<p>
				Snipcart is an online shopping cart platform that offers a secure, global e-commerce
				experience for you and your customers. They simplify the checkout experience for your
				customers by allowing them to create an account with your restaurant for easy future
				ordering, and they give you access to detailed analytics to help you keep them coming back.
			</p>

			<a href="https://snipcart.com/" class="link">Learn more about Snipcart</a>

			<a href="https://snipcart.com/list-ecommerce-payment-gateways" class="link"
				>See payment processing options</a
			>
		</div>
	</div>
</section>

<section class="section">
	<div class="block block--row-reverse">
		<div class="block__graphic">
			<Image image={images.blocks.cms} class="block__image" />
		</div>

		<div class="block__summary">
			<h2>Why we trust Snipcart.</h2>

			<p>
				Our mission at Kamfly is to empower your restaurant to reach more customers through
				optimized online ordering. Snipcart is an e-commerce expert focused on security,
				flexibility, and seamless integration with payment processors. This partnership enables us
				to provide you with comprehensive, digital solutions that won't break the bank.
			</p>

			<a href="/contact" class="link">Set up time with us to find out more</a>
		</div>
	</div>
</section>
