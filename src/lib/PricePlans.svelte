<aside role="banner">Special COVID Pricing*</aside>

<div class="plans">
	<div class="plan plan--free">
		<h3 class="plan__title">Standard</h3>
		<p class="plan__price">
			<strong>
				<span>€</span>
				<span class="plan__priceamt strikethrough">25</span>
			</strong>
			<span>/ month</span>
			<br />
			<em>per location</em>
		</p>

		<hr />

		<ul class="plan__features">
			<li class="plan__feature">Custom online menus</li>
			<li class="plan__feature">QR codes for contactless menus</li>
			<li class="plan__feature">Use your logos and accent color</li>
			<li class="plan__feature">Admin site for DIY menu updates</li>
			<li class="plan__feature">Unlimited number of locations</li>
		</ul>

		<a href="/contact" class="btn btn--hollow">get started</a>
	</div>

	<div class="plan plan--highlighted plan--free">
		<h3 class="plan__title">Pro</h3>
		<p class="plan__price">
			<strong>
				<span>€</span>
				<span class="plan__priceamt strikethrough">100</span>
			</strong>
			<span>/ month</span>
			<br />
			<em>per location</em>
		</p>
		<p class="plan__priceplus">+</p>
		<p class="plan__price">
			<strong>
				<span class="plan__priceamt">2%</span>
			</strong>
			<span>/ transaction</span>
		</p>

		<hr />

		<ul class="plan__features">
			<li class="plan__feature">
				<strong>All Standard plan features</strong>
			</li>
			<li class="plan__feature">Online ordering via Snipcart</li>
			<li class="plan__feature">Customer accounts</li>
			<li class="plan__feature">Customer dashboard</li>
			<li class="plan__feature">Online ordering analytics</li>
		</ul>

		<a href="/contact" class="btn btn--primary">get started</a>
	</div>
	<div class="plan">
		<h3 class="plan__title">Custom</h3>
		<p class="plan__price">
			<strong>
				<span class="plan__priceamt">ASK</span>
			</strong>
			<span>/ contact us</span>
			<br />
			<em>for details</em>
		</p>

		<hr />

		<ul class="plan__features">
			<li class="plan__feature">Integration with your POS system</li>
			<li class="plan__feature">Build and design your custom site</li>
			<li class="plan__feature">Online & social media marketing</li>
			<li class="plan__feature">Search engine optimization</li>
		</ul>

		<a href="/contact" class="btn btn--hollow">get started</a>
	</div>
</div>

<footer>
	*This special COVID-19 pricing is subject to change, but existing customers will receive a minimum
	of two (2) months' notice before making any updates. As always, there are no long-term contracts
	with Kamfly.
</footer>

<style>
	aside {
		font-size: var(--text-xl);
		font-weight: bold;
		padding: var(--spacing-2);
		color: var(--bg);
		background: var(--green);
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
	}

	footer {
		font-size: var(--text-sm);
		width: 100%;
		max-width: 480px;
		margin: 0 auto;
	}

	.plans {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.plan {
		width: 100%;
		max-width: 480px;
		flex: 1 1 0px;
		background: var(--bg);
		position: relative;
		border-radius: var(--radius-sm);
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
		padding: var(--spacing-8) var(--spacing-6);
	}

	.plan:not(:last-child) {
		margin-bottom: var(--spacing-20);
	}

	.plan__title {
		line-height: var(--leading-xl);
		color: var(--primary);
		text-transform: uppercase;
	}

	.plan__price {
		font-size: var(--text-base);
		line-height: var(--leading-header);
	}

	.plan__price strong {
		font-size: var(--text-3xl);
		font-weight: bold;
		color: var(--primary);
	}

	.plan__price em {
		font-style: normal;
		font-size: var(--text-sm);
		opacity: 0.6;
	}

	.plan__priceplus {
		margin-top: var(--spacing-4);
	}

	.plan hr {
		margin: var(--spacing-6) 0;
	}

	.plan__features {
		display: flex;
		flex-direction: column;
		text-align: start;
		font-size: var(--text-base);
		list-style: none;
		margin-bottom: var(--spacing-6);
	}

	.plan__features > *:not(:last-child) {
		margin-bottom: var(--spacing-2);
	}

	.plan__feature {
		margin-left: var(--spacing-7);
		position: relative;
	}

	.plan__feature:before {
		content: ' ';
		width: 1em;
		height: 0.5em;
		top: 0.5em;
		transform: rotate(-45deg);
		border-style: solid;
		border-width: 0 0 0.125em 0.125em;
		color: var(--green);
		position: absolute;
		display: inline-block;
		margin-left: -1.75em;
	}

	.plan.plan--highlighted {
		border: var(--border-lg) solid var(--primary);
	}

	.plan--highlighted:after {
		content: 'MOST POPULAR';
		position: absolute;
		top: -0.125rem;
		left: 50%;
		font-size: var(--text-sm);
		font-weight: bold;
		background-color: var(--primary);
		color: var(--fg-alt);
		border-radius: var(--radius-full);
		padding: var(--spacing-1) var(--spacing-4);
		transform: translate3d(-50%, -50%, 0);
	}

	.plan--free:before {
		content: '';
		height: 15rem;
		width: 45%;
		position: absolute;
		left: 0;
		top: 0;
		background-image: url(/price-banner.svg);
		background-size: contain;
		background-repeat: no-repeat;
	}

	.plan--highlighted.plan--free:before {
		left: calc(-1 * var(--border-lg));
		top: calc(-1 * var(--border-lg));
	}

	@media (min-width: 375px) {
		.plan__price strong {
			font-size: var(--text-4xl);
		}
	}

	@media (min-width: 480px) {
		.plan--free:before {
			width: 40%;
		}
	}

	@media (min-width: 1024px) {
		aside,
		footer {
			max-width: initial;
		}

		.plans {
			flex-direction: row;
		}

		.plan:not(:last-child) {
			margin: 0;
		}

		.plan.plan--highlighted {
			transform: scale(1.05);
			z-index: 1;
		}

		.plan--free:before {
			width: 45%;
		}
	}
</style>
