<script lang="ts">
	import { BadgeCheckIcon } from '@lucide/svelte';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
</script>

<div class="relative w-fit">
	<Avatar class="size-10">
		<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" />
		<AvatarFallback class="text-xs">HR</AvatarFallback>
	</Avatar>
	<span class="absolute -end-1.5 -top-1.5">
		<span class="sr-only">Verified</span>
		<BadgeCheckIcon class="size-5 fill-sky-500 text-background" />
	</span>
</div>
