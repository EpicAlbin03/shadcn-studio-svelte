<script lang="ts">
	import FacebookIcon from '@lucide/svelte/icons/facebook';
	import InstagramIcon from '@lucide/svelte/icons/instagram';
	import LinkedinIcon from '@lucide/svelte/icons/linkedin';
	import TwitterIcon from '@lucide/svelte/icons/twitter';
</script>

<footer>
	<div
		class="flex items-center justify-between gap-3 px-4 py-3 text-muted-foreground max-sm:flex-col sm:gap-6 sm:px-6 md:max-lg:flex-col"
	>
		<p class="text-center text-sm text-balance">
			©{new Date().getFullYear()}
			<a href="#" class="text-primary"> Shadcn/studio </a>
			, Made for better web design
		</p>
		<div class="flex items-center gap-5">
			<a href="#">
				<FacebookIcon class="size-4" />
			</a>
			<a href="#">
				<InstagramIcon class="size-4" />
			</a>
			<a href="#">
				<LinkedinIcon class="size-4" />
			</a>
			<a href="#">
				<TwitterIcon class="size-4" />
			</a>
		</div>
	</div>
</footer>
