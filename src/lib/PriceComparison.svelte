<script lang="ts">
	import Slider from './Slider.svelte';
	import kamflyIcon from '$assets/icons/logo.svg?raw';
	import thuisbezorgdIcon from '$assets/icons/thuisbezorgd.svg?raw';
	import uberIcon from '$assets/icons/ubereats.svg?raw';

	let revenue = 10000;

	$: kamflyPrice = formatCurrency(100 + revenue * 0.2);
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
			<div class="logo">
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

<style>
	table {
		margin: 0 auto;
		width: 100%;
	}

	td[colspan='2'] {
		padding-bottom: var(--spacing-6);
	}

	.logo {
		height: 1.25rem;
		vertical-align: middle;
		margin: var(--spacing-2) 0;
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

	@media (min-width: 375px) {
		.price strong {
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
			margin: 0;
		}
	}
</style>
