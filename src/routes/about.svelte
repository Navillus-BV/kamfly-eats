<script lang="ts">
	import CardList from '$lib/cards/CardList.svelte';
	import ContactCard from '$lib/cards/ContactCard.svelte';
	import Hero from '$lib/blocks/Hero.svelte';
	import Meta from '$lib/seo/Meta.svelte';
	import ImageSection from '$lib/blocks/ImageSection.svelte';
	import Section from '$lib/blocks/Section.svelte';
	import images from '../images';

	const team = [
		{
			title: 'Tony',
			subtitle: 'Founder & CTO',
			description: 'A creative problem solver in search of simple solutions to complex challenges.',
			image: images.cards.tony,
			cta: {
				title: 'Connect on LinkedIn',
				href: 'https://www.linkedin.com/in/tony-sull/',
				external: true
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
				href: 'https://www.linkedin.com/in/sarahsu-alwayslearning/',
				external: true
			}
		}
	];
</script>

<Meta title="About Us" />

<Hero title="About us." />

<ImageSection
	title="We want you to succeed."
	links={[
		{
			href: 'how-it-works',
			title: 'See how it works'
		}
	]}
	image={images.blocks.open}
>
	<p>
		At Kamfly, we’re laser-focused on enabling your restaurant to stay open for business no matter
		what life throws your way. Our self-managed digital restaurant solutions are designed to help
		get you where you want to go without getting in your way.
	</p>
</ImageSection>

<Section title="Nice to meet you." alt rowReverse>
	<p slot="summary">We’re a small but passionate team looking to do some good in the world.</p>

	<div slot="details">
		<CardList>
			{#each team as person (person.title)}
				<ContactCard {...person} />
			{/each}
		</CardList>
	</div>
</Section>
