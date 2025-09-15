<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<div class="relative w-fit">
	<Avatar.Root>
		<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" />
		<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
	</Avatar.Root>
	<span
		class="absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-background bg-destructive"
	>
		<span class="sr-only">Busy</span>
	</span>
</div>
