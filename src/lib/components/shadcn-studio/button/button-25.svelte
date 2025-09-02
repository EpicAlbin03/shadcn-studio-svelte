<script lang="ts">
	import { BellIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
</script>

<Button variant="outline" class="relative">
	<BellIcon />
	Notifications
	<Badge
		variant="destructive"
		class="absolute -end-2.5 -top-2.5 h-5 min-w-5 rounded-full px-1 tabular-nums"
	>
		8
	</Badge>
</Button>
