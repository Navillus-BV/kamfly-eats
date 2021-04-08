<script lang="ts">
	import Button, { ButtonType } from '$lib/Button.svelte';
	import Link from '$lib/Link.svelte';
	import Modal from '$lib/Modal.svelte';
	import Meta from '$lib/seo/Meta.svelte';
	import Section from '$lib/blocks/Section.svelte';

	let modalOpen = false;

	const openModal = () => (modalOpen = true);
	const closeModal = () => (modalOpen = false);

	let formElem: HTMLFormElement;

	async function onSubmit() {
		try {
			await fetch('/contact/#contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData).toString()
			});

			openModal();
		} catch (err) {
			console.log(err);
		}
	}
</script>

<Meta title="Contact Us" />

<Section title="Send us an email.">
	<p slot="summary">
		<span
			>Just fill out the form below or email us here:
			<a class="link" href="mailto:info@kamfly.io">info@kamfly.io</a>
		</span>
	</p>

	<form
		bind:this={formElem}
		slot="details"
		name="contact"
		on:submit|preventDefault={onSubmit}
		netlify-honeypot="bot-field"
		data-netlify="true"
	>
		<input type="hidden" name="form-name" value="contact" />
		<p class="honeypot">
			<label
				>Don’t fill this out if you're human:
				<input name="bot-field" />
			</label>
		</p>
		<div>
			<div>
				<label for="name">Your Name *</label>
				<input id="name" name="name" type="text" required />
			</div>
		</div>
		<div>
			<div>
				<label for="email">Your Email Address *</label>
				<input id="email" name="email" type="email" required />
			</div>
		</div>
		<div>
			<div>
				<label for="message">Your Message *</label>
				<textarea id="message" name="message" rows="6" required />
			</div>
		</div>

		<Button submit type={ButtonType.Primary}>Submit</Button>
	</form>
</Section>

{#if modalOpen}
	<Modal on:close={closeModal}>
		<h2>Thank You!</h2>
		<p>Your message has been sent, and we will be in touch soon.</p>
	</Modal>
{/if}

<style>
	form {
		width: 100%;
		max-width: 36rem;
		gap: 0 !important;
	}

	form label {
		font-size: var(--text-sm);
		margin-bottom: var(--spacing-1);
		display: block;
		text-align: start;
	}

	form .honeypot {
		display: none;
	}

	input[type='text'],
	input[type='email'],
	textarea {
		font-size: var(--text-base);
		padding: var(--spacing-3);
		background: var(--bg-alt);
		border-radius: var(--radius-sm);
		margin-bottom: var(--spacing-8);
		width: 100%;
		border: none;
	}
</style>
