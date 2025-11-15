<script lang="ts">
	import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from '@lucide/svelte';
	import { Separator } from '$lib/components/ui/separator';
	import Logo from '$lib/registry/components/logo.svelte';
</script>

<footer>
	<div
		class="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8"
	>
		<a href="#">
			<div class="flex items-center gap-3">
				<Logo class="gap-3" />
			</div>
		</a>

		<div class="flex items-center gap-5 whitespace-nowrap">
			<a href="#">About</a>
			<a href="#">Features</a>
			<a href="#">Works</a>
			<a href="#">Career</a>
		</div>

		<div class="flex items-center gap-4">
			<a href="#">
				<FacebookIcon class="size-5" />
			</a>
			<a href="#">
				<InstagramIcon class="size-5" />
			</a>
			<a href="#">
				<TwitterIcon class="size-5" />
			</a>
			<a href="#">
				<YoutubeIcon class="size-5" />
			</a>
		</div>
	</div>

	<Separator />

	<div class="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
		<p class="text-center font-medium text-balance">
			©{new Date().getFullYear()} <a href="#">Shadcn/studio</a>, Made with ❤️ for better web.
		</p>
	</div>
</footer>
