<script lang="ts">
	import { CheckIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<div class="relative w-fit">
	<Avatar.Root
		class="ring-2 ring-green-600 ring-offset-2 ring-offset-background dark:ring-green-400"
	>
		<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" />
		<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
	</Avatar.Root>
	<span
		class="absolute -end-1.5 -bottom-1.5 inline-flex size-4 items-center justify-center rounded-full bg-green-600 dark:bg-green-400"
	>
		<CheckIcon class="size-3 text-white" />
	</span>
</div>
