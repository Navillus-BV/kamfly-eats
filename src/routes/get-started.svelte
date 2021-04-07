<script lang="ts">
	import Hero from '$lib/blocks/Hero.svelte';
	import Section from '$lib/blocks/Section.svelte';
</script>

<Hero
	title="Ready to get started?"
	subtitle="Let's chat! Pick a time below that fits your schedule, and share a few details about your restaurant. We can't wait to talk with you!"
/>

<Section>
	<div slot="details">
		<iframe
			src="https://app.acuityscheduling.com/schedule.php?owner=20050103"
			title="Schedule Appointment"
			width="100%"
			height="800"
			frameborder="0"
		/>
		<script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
	</div>
</Section>
