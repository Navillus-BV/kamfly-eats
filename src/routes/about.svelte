<script lang="ts">
	import Hero from '$lib/blocks/Hero.svelte';
	import Image from '$lib/Image.svelte';
	import LogoList from '$lib/LogoList.svelte';
	import Meta from '$lib/seo/Meta.svelte';
	import images from '../images';

	const team = [
		{
			title: 'Tony',
			subtitle: 'Founder & CTO',
			description: 'A creative problem solver in search of simple solutions to complex challenges.',
			image: images.cards.tony,
			cta: {
				title: 'Connect on LinkedIn',
				href: 'https://www.linkedin.com/in/tony-sull/'
			}
		},
		{
			title: 'Sarah',
			subtitle: 'Founder & Managing Partner',
			description:
				'A pragmatic visionary with a passion for helping others get where they want to go.',
			image: images.cards.sarah,
			cta: {
				title: 'Connect on LinkedIn',
				href: 'https://www.linkedin.com/in/sarahsu-alwayslearning/'
			}
		}
	];
</script>

<Meta title="About Us" />

<Hero title="About us." />

<section class="section">
	<div class="block">
		<div class="block__graphic">
			<Image image={images.blocks.open} class="block__image" />
		</div>

		<div class="block__summary">
			<h2>We want you to succeed.</h2>

			<p>
				At Kamfly, we’re laser-focused on enabling your restaurant to stay open for business no
				matter what life throws your way. Our self-managed digital restaurant solutions are designed
				to help get you where you want to go without getting in your way.
			</p>

			<a href="/how-it-works" class="link">See how it works</a>
		</div>
	</div>
</section>

<section class="section section--alt">
	<div class="block block__row-reverse">
		<div class="block__summary">
			<h2>Nice to meet you.</h2>

			<p>We’re a small but passionate team looking to do some good in the world.</p>
		</div>

		<div class="block__details">
			<div class="cards">
				{#each team as person (person.title)}
					<div class="card">
						<Image image={person.image} class="card__img card__img--round" />
						<h3 class="card__title">{person.title}</h3>
						<h4 class="card__subtitle">{person.subtitle}</h4>
						<p>{person.description}</p>
						<a href={person.cta.href} class="link">{person.cta.title}</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="block">
		<div class="block__summary">
			<h2>Our trusted partners.</h2>

			<p>
				Trust is earned by delivering on the commitments you make – doing what you say you will. Our
				partners have earned our trust by doing what they do better than anyone else, and we
				couldn’t do what we do for you without them.
			</p>
		</div>

		<div class="block__details">
			<LogoList
				logos={[images.partners.snipcart, images.partners.netlify, images.partners.github]}
			/>
		</div>
	</div>
</section>
