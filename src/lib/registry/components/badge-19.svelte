<script lang="ts">
	import { AlertCircleIcon } from '@lucide/svelte';
	import { Badge } from '$lib/components/ui/badge';
</script>

<Badge
	variant="outline"
	class="border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400 [a&]:hover:bg-amber-600/10 [a&]:hover:text-amber-600/90 dark:[a&]:hover:bg-amber-400/10 dark:[a&]:hover:text-amber-400/90"
>
	<AlertCircleIcon class="size-3" />
	Pending
</Badge>
