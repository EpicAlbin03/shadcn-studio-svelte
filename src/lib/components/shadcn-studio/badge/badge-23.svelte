<script lang="ts">
	import { ShoppingCartIcon } from '@lucide/svelte';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="relative w-fit">
	<Avatar class="size-9 rounded-sm">
		<AvatarFallback class="rounded-sm">
			<ShoppingCartIcon class="size-5" />
		</AvatarFallback>
	</Avatar>
	<Badge class="absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums">8</Badge>
</div>
