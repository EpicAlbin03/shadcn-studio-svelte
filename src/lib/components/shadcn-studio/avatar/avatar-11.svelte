<script lang="ts">
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="relative w-fit">
	<Avatar class="size-10 rounded-sm">
		<AvatarImage src="/avatars/05.webp" alt="Hallie Richards" class="rounded-sm" />
		<AvatarFallback class="text-xs">HR</AvatarFallback>
	</Avatar>
	<Badge class="absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full bg-indigo-500 px-1 tabular-nums"
		>8</Badge
	>
</div>
