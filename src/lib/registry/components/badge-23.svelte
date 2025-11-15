<script lang="ts">
	import { ShoppingCartIcon } from '@lucide/svelte';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="relative w-fit">
	<Avatar.Root class="size-9 rounded-sm">
		<Avatar.Fallback class="rounded-sm">
			<ShoppingCartIcon class="size-5" />
		</Avatar.Fallback>
	</Avatar.Root>
	<Badge class="absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums">8</Badge>
</div>
