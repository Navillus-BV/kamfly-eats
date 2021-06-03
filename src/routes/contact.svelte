<script lang="ts">
	import Modal from '$lib/Modal.svelte';
	import Meta from '$lib/seo/Meta.svelte';

	let modalOpen = false;

	const openModal = () => (modalOpen = true);
	const closeModal = () => (modalOpen = false);

	let formElem: HTMLFormElement;

	async function onSubmit() {
		try {
			const formData = new FormData(formElem);
			const params = new URLSearchParams(formData as any);

			await fetch('/contact/#contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: params.toString()
			});

			openModal();
		} catch (err) {
			console.log(err);
		}
	}
</script>

<Meta title="Contact Us" />

<section class="section">
	<div class="block">
		<div class="block__summary">
			<h2>Send us an email.</h2>

			<p>
				<span>Fill out the form below, we'll be in touch soon!</span>
			</p>
		</div>

		<div class="block__details">
			<form
				bind:this={formElem}
				name="contact"
				on:submit|preventDefault={onSubmit}
				netlify-honeypot="bot-field"
				data-netlify="true"
			>
				<input type="hidden" name="form-name" value="contact" />
				<p class="honeypot">
					<label>
						Don’t fill this out if you're human:
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

				<button type="submit" class="btn btn--primary">submit</button>
			</form>
		</div>
	</div>
</section>

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
