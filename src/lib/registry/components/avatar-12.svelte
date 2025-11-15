<script lang="ts">
	import { BadgeCheckIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<div class="relative w-fit">
	<Avatar.Root class="size-10">
		<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" />
		<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
	</Avatar.Root>
	<span class="absolute -end-1.5 -top-1.5">
		<span class="sr-only">Verified</span>
		<BadgeCheckIcon class="size-5 fill-sky-500 text-background" />
	</span>
</div>
