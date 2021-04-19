<script lang="ts">
	import Modal from './Modal.svelte';
	import Slider from './Slider.svelte';
	import kamflyIcon from '$assets/icons/logo.svg?raw';
	import thuisbezorgdIcon from '$assets/icons/thuisbezorgd.svg?raw';
	import uberIcon from '$assets/icons/ubereats.svg?raw';

	let revenue = 10000;

	$: kamflyPrice = formatCurrency(100 + revenue * 0.02);
	$: thuisbezorgdPrice = formatCurrency(revenue * 0.13);
	$: uberPrice = formatCurrency(revenue * 0.15);

	function formatCurrency(value: number) {
		return new Intl.NumberFormat('nl-NL', {
			style: 'currency',
			currency: 'EUR',
			currencyDisplay: 'symbol'
		})
			.format(value)
			.replace(/\D00(?=\D*$)/, '');
	}

	let modalOpen = false;

	const openModal = () => (modalOpen = true);
	const closeModal = () => (modalOpen = false);
</script>

<table>
	<tr class="sr-only">
		<th id="c">Company Name</th>
		<th id="p">Monthly Price</th>
	</tr>
	<tr class="sr-only">
		<th id="s" colspan="2" scope="colgroup">Price Slider</th>
	</tr>
	<tr>
		<td colspan="2" headers="c p s">
			<Slider
				min={1000}
				max={25000}
				step={500}
				format={formatCurrency}
				bind:value={revenue}
				label="Set the slider above to your estimated monthly online sales revenue to see how our fees compare to the competition."
			/>
		</td>
	</tr>
	<tr>
		<td headers="c s">
			<div class="logo kamfly">
				{@html kamflyIcon}
			</div>
		</td>
		<td headers="p s" class="text-right">
			<p class="estimate">
				<strong class="text-3xl font-bold text-primary">{kamflyPrice}</strong>
				<span>/ month</span>
			</p>
		</td>
	</tr>
	<tr>
		<td headers="c s">
			<div class="logo">
				{@html thuisbezorgdIcon}
			</div>
		</td>
		<td headers="p s" class="text-right">
			<p class="estimate">
				<strong class="text-3xl font-bold text-primary">{thuisbezorgdPrice}</strong>
				<span>/ month</span>
			</p>
		</td>
	</tr>
	<tr>
		<td headers="c s">
			<div class="logo">
				{@html uberIcon}
			</div>
		</td>
		<td headers="p s" class="text-right">
			<p class="estimate">
				<strong class="text-3xl font-bold text-primary">{uberPrice}</strong>
				<span>/ month</span>
			</p>
		</td>
	</tr>
</table>

<button class="link" on:click={openModal}>How did we calculate this?</button>

{#if modalOpen}
	<Modal on:close={closeModal}>
		<h2>How the price comparisons are calculated</h2>
		<p>Price comparisons are based on the latest publicly available pricing data.</p>

		<h3>Kamfly</h3>
		<p>
			Our prices are calculated based on our
			<a href="/pricing/#plans">Pro Plan</a>
			- $100 monthly base fee + a 2% transaction fee.
		</p>
		<p>
			For a limited time, due to COVID-19, we are waiving our monthly base fee - so all you pay are
			the 2% transaction fees.
		</p>

		<h3>Thuisbezorgd</h3>
		<p>
			Thuisbezorgd charges 13% of total sales through their platform, there is no additional monthly
			fee. They increased their rates to 13% in 2019 but annouced that they
			<a
				href="https://twinklemagazine.nl/2019/08/jitse-groen-commissie/index.xml"
				target="_blank"
				rel="nofollow noopener">have no plans</a
			>
			to increase rates further.
		</p>

		<h3>Uber Eats</h3>
		<p>
			For all pickup orders or orders using a restaurant's own delivery drivers,
			<a
				href="https://restaurants.ubereats.com/us/en/pricing/"
				target="_blank"
				rel="nofollow noopener">Uber Eats charges 15%</a
			>
			of total sales through their platform. An additional 15% is charged when restaurants opt-in to
			use Uber Eats' delivery service - we did not include the additional 15% fee in this comparison
			since we do not offer a comparable delivery service.
		</p>

		<h3>A note about payment processing fees:</h3>
		<p>
			These are fees charged by the company/companies you use to process your customers' payments
			(e.g. Square, Visa, iDeal). These are not included in Kamfly's pricing, because the actual
			fees vary from processor to processor.
		</p>
		<p>
			<a href="https://snipcart.com/list-ecommerce-payment-gateways" target="_blank" rel="noopener"
				>Visit Snipcart</a
			>
			for more details on the supported payment processors/gateways. Payment processing fees vary by
			region and type of payment, but in general you can expect a per transaction fee of less than €0.50
			and a fee of 1-3% for credit cards.
		</p>
	</Modal>
{/if}

<style>
	table {
		margin: 0 auto var(--spacing-6);
		width: 100%;
	}

	td[colspan='2'] {
		padding-bottom: var(--spacing-6);
	}

	.logo :global(svg) {
		height: 1.25rem;
		vertical-align: middle;
		margin: var(--spacing-2) 0;
	}

	.logo.kamfly :global(svg) {
		fill: var(--primary);
	}

	.estimate {
		font-size: var(--text-base);
		line-height: var(--leading-header);
	}

	.estimate strong {
		font-size: var(--text-3xl);
		font-weight: bold;
		color: var(--primary);
	}

	td:first-of-type {
		text-align: start;
	}

	td:last-of-type {
		text-align: end;
	}

	@media (min-width: 375px) {
		.estimate strong {
			font-size: var(--text-4xl);
		}
	}

	@media (min-width: 480px) {
		.logo {
			height: 1.5rem;
		}
	}

	@media (min-width: 1024px) {
		table {
			margin: 0 0 var(--spacing-6);
		}
	}
</style>
