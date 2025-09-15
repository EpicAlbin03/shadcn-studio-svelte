<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<div class="relative w-fit">
	<Avatar.Root class="rounded-sm">
		<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" class="rounded-sm" />
		<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
	</Avatar.Root>
	<span
		class="absolute -end-1.5 -top-1.5 size-3 rounded-full border-2 border-background bg-amber-600 dark:bg-amber-400"
	>
		<span class="sr-only">Away</span>
	</span>
</div>
