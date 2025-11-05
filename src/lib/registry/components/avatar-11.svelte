<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="relative w-fit">
	<Avatar.Root class="size-10 rounded-sm">
		<Avatar.Image src="/avatars/05.webp" alt="Hallie Richards" class="rounded-sm" />
		<Avatar.Fallback class="text-xs">HR</Avatar.Fallback>
	</Avatar.Root>
	<Badge
		class="absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full bg-indigo-500 px-1 tabular-nums"
	>
		8
	</Badge>
</div>
