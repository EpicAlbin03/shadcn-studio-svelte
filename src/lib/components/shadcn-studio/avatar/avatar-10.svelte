<script lang="ts">
	import { PlusCircleIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
</script>

<div class="relative w-fit">
	<Avatar.Root class="size-10">
		<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" />
		<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
	</Avatar.Root>
	<button
		class="absolute -end-1 -bottom-1 inline-flex cursor-pointer items-center justify-center rounded-full focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
	>
		<PlusCircleIcon class="size-5 fill-slate-400 text-background" />
		<span class="sr-only">Add</span>
	</button>
</div>
