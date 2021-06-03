<script lang="ts">
	import logoIcon from '$assets/icons/logo.svg?raw';
	import linkedinIcon from '$assets/icons/linkedin.svg?raw';
	import instagramIcon from '$assets/icons/instagram.svg?raw';
	import twitterIcon from '$assets/icons/twitter.svg?raw';

	const year = new Date().getFullYear();

	const socialLinks = [
		{
			href: 'https://www.linkedin.com/company/kamfly',
			title: 'LinkedIn',
			icon: linkedinIcon
		},
		{
			href: 'https://www.instagram.com/kamfly.io',
			title: 'Instagram',
			icon: instagramIcon
		},
		{
			href: 'https://twitter.com/kamflyio',
			title: 'Twitter',
			icon: twitterIcon
		}
	];

	const routeLinks = [
		{
			href: '/privacy',
			title: 'Privacy Policy'
		},
		{
			href: '/terms',
			title: 'Terms & Conditions'
		},
		{
			href: '/contact',
			title: 'Contact'
		}
	];
</script>

<footer>
	<div class="footer__content">
		<div class="footer__brand">
			{@html logoIcon}
		</div>

		<div class="footer__social">
			{#each socialLinks as { href, title, icon } (title)}
				<a {href} target="_blank" rel="noopener">
					<div class="footer__socialicon">
						{@html icon}
					</div>
					<span class="sr-only">{title}</span>
				</a>
			{/each}
		</div>

		<p class="footer_builtby">
			Build with ♥ by <a href="https://navillus.dev">navillus.dev</a>
		</p>

		<span>© {year} Navillus B.V.</span>

		<div class="footer__links">
			{#each routeLinks as { href, title } (title)}
				<a {href}>{title}</a>
			{/each}
		</div>
	</div>
</footer>

<style>
	footer {
		background-color: var(--bg-alt-900);
		color: var(--bg-alt);
		font-size: var(--text-sm);
	}

	.footer__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing-12) 0;
		opacity: 0.5;
	}

	.footer__brand :global(svg) {
		height: 2rem;
		fill: currentColor;
		margin-bottom: var(--spacing-2);
	}

	.footer__social {
		margin-bottom: var(--spacing-6);
		display: flex;
		flex-direction: row;
	}

	.footer__social > *:not(:last-child) {
		margin-right: var(--spacing-2);
	}

	.footer__social a {
		height: 2.5rem;
		width: 2.5rem;
		border-radius: var(--radius-full);
		padding: var(--spacing-2);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 150ms background-color ease-in;
	}

	.footer__social a:hover {
		background: var(--primary);
	}

	.footer__socialicon :global(svg) {
		height: 1.25rem;
		width: 1.25rem;
		fill: currentColor;
	}

	.footer_builtby {
		margin-bottom: var(--spacing-8);
	}

	.footer__links {
		margin-top: var(--spacing-2);
	}

	.footer__links a:not(:last-child) {
		margin-right: var(--spacing-2);
		padding-right: var(--spacing-2);
		border-right: var(--border-sm) var(--bg-alt) solid;
	}
</style>
