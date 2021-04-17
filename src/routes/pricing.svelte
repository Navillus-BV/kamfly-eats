<script lang="ts">
	import Image from '$lib/Image.svelte';
	import Meta from '$lib/seo/Meta.svelte';
	import PriceComparison from '$lib/PriceComparison.svelte';
	import PricePlans from '$lib/PricePlans.svelte';
	import images from '../images';
</script>

<Meta title="Pricing" />

<section class="hero">
	<h1>Kick the margin moochers to the curb.</h1>
</section>

<section class="section">
	<div class="block">
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
		</div>
	</div>
</section>

<section class="section">
	<div class="block block--row-reverse">
		<div class="block__graphic">
			<Image image={images.blocks.covid} class="block__image" />
		</div>

		<div class="block__summary">
			<h2>COVID-19 pricing.</h2>

			<p>
				We know that this is a tough time to be in the restaurant business. That's the whole reason
				we started Kamfly - to help as many restaurants as possible keep their doors open through
				this mess.
			</p>
			<p>
				So... Until things start to pick back up, we will not be charging any monthly base fees.
				That's a savings of $25/month on our Standard Plan or $100/month on our Pro Plan! Check out
				our pricing page to learn more and see how you can get started.
			</p>
		</div>
	</div>
</section>

<section id="plans" class="section section--alt">
	<div class="block">
		<div class="block__summary">
			<h2>Kamfly Premium Plans</h2>

			<p>Fair, scalable pricing plans to fit your restaurant’s needs.</p>
		</div>

		<div class="block__details">
			<PricePlans />
		</div>
	</div>
</section>

<section class="section">
	<div class="block block--row-reverse">
		<div class="block__graphic">
			<Image image={images.blocks.menus} class="block__image" />
		</div>

		<div class="block__summary">
			<h2>Kamfly grows with your business.</h2>

			<p>
				Not ready to offer online ordering? No problem! With our Standard Plan, you get an online
				menu that looks great on every device and replaces paper menus with QR codes. Use this
				feature to update your menu anytime without having to reprint, and it only takes a few steps
				to enable online ordering when you're ready.
			</p>
		</div>
	</div>
</section>

<section class="section">
	<div class="block block--row-reverse">
		<div class="block__graphic">
			<Image image={images.blocks.delivery} class="block__image" />
		</div>

		<div class="block__summary">
			<h2>What about food delivery?</h2>

			<p>
				Our mission is to provide the online experience that your customers want. You know your
				business, your team, and your brand, and we want to help you retain full control of the
				customer experience. We provide you with a polished online presence at a price that allows
				you to create jobs for delivery drivers that represent your business.
			</p>
		</div>
	</div>
</section>
