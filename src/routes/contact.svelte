<script lang="ts">
	import Button, { ButtonType } from '$lib/Button.svelte';
	import Section from '$lib/blocks/Section.svelte';
</script>

<Section title="Send us an email.">
	<p slot="summary">
		<span
			>Just fill out the form below or email us here:
			<a class="link" href="mailto:info@kamfly.io">info@kamfly.io</a>
		</span>
	</p>

	<form
		slot="details"
		name="contact"
		action="/contact/#contact"
		method="POST"
		netlify-honeypot="bot-field"
		data-netlify="true"
		class="w-full max-w-xl mx-auto"
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

<style>
	form {
		width: 100%;
		max-width: 36rem;
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
