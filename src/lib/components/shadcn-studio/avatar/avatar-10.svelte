<script lang="ts">
	import { PlusCircleIcon } from '@lucide/svelte';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
</script>

<div class="relative w-fit">
	<Avatar class="size-10">
		<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" />
		<AvatarFallback class="text-xs">HR</AvatarFallback>
	</Avatar>
	<button
		class="absolute -end-1 -bottom-1 inline-flex cursor-pointer items-center justify-center rounded-full focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
	>
		<PlusCircleIcon class="size-5 fill-slate-400 text-background" />
		<span class="sr-only">Add</span>
	</button>
</div>
