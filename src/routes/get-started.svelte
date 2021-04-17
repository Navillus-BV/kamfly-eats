<script lang="ts">
	import Meta from '$lib/seo/Meta.svelte';
</script>

<Meta title="Get Started" />

<section class="hero">
	<h1>Ready to get started?</h1>

	<p>
		Let's chat! Pick a time below that fits your schedule, and share a few details about your
		restaurant. We can't wait to talk with you!
	</p>
</section>

<section class="section">
	<div class="block">
		<div class="block__details">
			<iframe
				src="https://app.acuityscheduling.com/schedule.php?owner=20050103"
				title="Schedule Appointment"
				width="100%"
				height="800"
				frameborder="0"
			/>
			<script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
		</div>
	</div>
</section>
