<script lang="ts">
	import { DribbbleIcon, FacebookIcon, InstagramIcon, TwitchIcon } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="inline-flex w-fit -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
	<Button
		variant="outline"
		class="rounded-none rounded-s-md shadow-none hover:!bg-[#9146ff]/10 focus-visible:z-10"
		href="#"
		target="_blank"
		rel="noopener noreferrer"
	>
		<TwitchIcon class="stroke-[#9146ff]" />
		<span class="sr-only">Twitch</span>
	</Button>
	<Button
		variant="outline"
		class="rounded-none shadow-none hover:!bg-[#EA4C89]/10 focus-visible:z-10"
		href="#"
		target="_blank"
		rel="noopener noreferrer"
	>
		<DribbbleIcon class="stroke-[#EA4C89]" />
		<span class="sr-only">Dribbble</span>
	</Button>
	<Button
		variant="outline"
		class="rounded-none shadow-none hover:!bg-[#fb169a]/10 focus-visible:z-10"
		href="#"
		target="_blank"
		rel="noopener noreferrer"
	>
		<InstagramIcon class="stroke-[#fb169a]" />
		<span class="sr-only">Instagram</span>
	</Button>
	<Button
		variant="outline"
		class="rounded-none rounded-e-md shadow-none hover:!bg-[#0866ff]/10 focus-visible:z-10"
		href="#"
		target="_blank"
		rel="noopener noreferrer"
	>
		<FacebookIcon class="stroke-[#0866ff]" />
		<span class="sr-only">Facebook</span>
	</Button>
</div>
