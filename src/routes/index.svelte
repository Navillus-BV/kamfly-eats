<script lang="ts">
	import Image from '$lib/Image.svelte';
	import Meta from '$lib/seo/Meta.svelte';
	import PriceComparison from '$lib/PriceComparison.svelte';
	import images from '../images';
	import clipboardIcon from '$assets/icons/clipboard.svg?raw';
	import groupIcon from '$assets/icons/group.svg?raw';
	import currenciesIcon from '$assets/icons/currencies.svg?raw';
</script>

<Meta title="Self-Managed Online Ordering for Your Restaurant" />

<section class="hero">
	<h1>Your restaurant. Your future. Your call.</h1>

	<p>The digital experience your customers want. The freedom you deserve.</p>

	<a href="/contact" class="btn btn--primary">Get Started</a>
</section>

<section class="section">
	<div class="block">
		<div class="block__graphic">
			<Image image={images.blocks.shopping} class="block__image" />
		</div>

		<div class="block__summary">
			<h2>Reach more customers online.</h2>

			<p>
				From locally owned cafes to large-scale franchise operations, we have tools to help you take
				your restaurant business online. Create a digital menu for a touchless customer experience,
				and easily enable online ordering.
			</p>

			<a href="https://demo.kamfly.io/" class="link">See it in action</a>
		</div>
	</div>
</section>

<section class="section">
	<div class="block block--row-reverse">
		<div class="block__graphic">
			<Image image={images.blocks.cms} class="block__image" />
		</div>

		<div class="block__summary">
			<h2>Own your customer experience.</h2>

			<p>
				Your brand should be front and center in every customer interaction. Your food and service
				speak for themselves - don't waste your efforts competing with hundreds of other restaurants
				on someone else's app.
			</p>

			<a href="/contact" class="link">Find out how to get started</a>
		</div>
	</div>
</section>

<section class="section">
	<div class="block block--col-reverse">
		<div class="block__graphic">
			<PriceComparison />
		</div>

		<div class="block__summary">
			<h2>Protect your profits.</h2>

			<p>
				At Kamfly, we think restaurants should be able to offer online ordering without sacrificing
				their margins. Some of our competitors charge fees up to 15% of total sales... We think your
				business deserves better.
			</p>

			<a href="/pricing#plans" class="link">See our plans</a>
		</div>
	</div>
</section>

<section class="section section--alt">
	<div class="block">
		<div class="block__summary">
			<h2>Focus on the stuff that matters.</h2>

			<p>
				Kamfly gives you an easy-to-use platform with the features you need so you can give your
				customers the experience they want.
			</p>
		</div>

		<div class="block__details">
			<div class="cards">
				<div class="card card--sm">
					<div class="card__icon">
						{@html clipboardIcon}
					</div>
					<h3 class="card__title">Menu Management</h3>
				</div>

				<div class="card card--sm">
					<div class="card__icon">
						{@html groupIcon}
					</div>
					<h3 class="card__title">Online Ordering</h3>
				</div>

				<div class="card card--sm">
					<div class="card__icon">
						{@html currenciesIcon}
					</div>
					<h3 class="card__title">Multi-Currency & Localization</h3>
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
			<h2>Accept every kind of payment.</h2>

			<p>
				We partner with Snipcart to enable a full e-commerce experience for your restaurant -
				including safe and secure online transactions with trusted payment service providers around
				the world.
			</p>

			<a href="/how-it-works#snipcart" class="link">Learn more about Snipcart</a>
		</div>
	</div>
</section>
